"use client";
import axios from "axios";
import {
  BadgePercent,
  Clock,
  IndianRupee,
  Plus,
  Share2,
  Users,
  X,
  Upload,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import EventRegistrationPopup from "./PayementPopup";
// import DefaultScreenShot from "/assets/default-screenshot.jpg";

function App() {
  const { eventSlug } = useParams();
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isUserFieldsValid, setIsUserFieldsValid] = useState(false);
  const [showProfileIncompletePopup, setShowProfileIncompletePopup] =
    useState(false);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://two5-backend.onrender.com/api/v1/events/${eventSlug}`
        );
        console.log(response.data.data.event);
        setEventData(response.data.data.event);

        setError(null);
      } catch (err) {
        console.error("Error fetching event data:", err);
        setError(err.message || "Failed to fetch event data");
      } finally {
        setLoading(false);
      }
    };

    const checkUserFields = async () => {
      const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("token");
      try {
        // Make POST request to the user endpoint
        const response = await axios.get(
          `https://two5-backend.onrender.com/api/v1/users/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Extract user data from response
        const user = response.data;

        console.log(user.data.user);
        // Check required fields
        const requiredFields = [
          "email",
          "name",
          "phone",
          "college",
          "age",
          "gender",
          "libId",
          "rollNo",
        ];
        for (const field of requiredFields) {
          console.log(field, user.data.user[field]);
          if (
            !user.data.user[field] ||
            user.data.user[field] === "" ||
            user.data.user[field] === 0
          ) {
            console.log(`Field ${field} is invalid`);

            setIsUserFieldsValid(false);
            return;
          }
        }

        setIsUserFieldsValid(true);
      } catch (error) {
        console.error("Error checking user fields:", error);
        setIsUserFieldsValid(false);
      }
    };

    checkUserFields();

    const checkIsRegisterd = async () => {
      const userId = localStorage.getItem("userId");
      // const token = localStorage.getItem("token");
      if (userId) {
        const response = await axios.post(
          "https://two5-backend.onrender.com/api/v1/events/check-registration",
          {
            eventSlug: eventSlug,
            userId: userId,
          }
        );

        console.log(response.data.data.isRegistered);

        const token = localStorage.getItem("userId");

        console.log(token);

        if (response.data.data.isRegistered) {
          setIsRegistered(true);
        }
      }
    };

    checkIsRegisterd();

    if (eventSlug) {
      fetchEventData();
    }
  }, [eventSlug]);

  useEffect(() => {
    if (!eventData?.registrationEndDate) return;

    const calculateTimeRemaining = () => {
      try {
        // Parse the date string properly (assuming it's in ISO format)
        const endDate = new Date(eventData.registrationEndDate);

        // Validate the date
        if (isNaN(endDate.getTime())) {
          console.error("Invalid registration end date format");
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        const now = new Date();
        const difference = endDate - now;

        if (difference <= 0) {
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        const seconds = Math.floor((difference / 1000) % 60);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));

        return { days, hours, minutes, seconds };
      } catch (error) {
        console.error("Error in countdown calculation:", error);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
    };

    // Initial calculation
    const initialTime = calculateTimeRemaining();
    setTimeRemaining(initialTime);

    // Only start timer if time hasn't expired
    if (
      initialTime.days > 0 ||
      initialTime.hours > 0 ||
      initialTime.minutes > 0 ||
      initialTime.seconds > 0
    ) {
      const timer = setInterval(() => {
        setTimeRemaining((prev) => {
          const newTime = calculateTimeRemaining();

          // Check if time has expired
          if (
            newTime.days <= 0 &&
            newTime.hours <= 0 &&
            newTime.minutes <= 0 &&
            newTime.seconds <= 0
          ) {
            clearInterval(timer);
            return newTime;
          }

          return newTime;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [eventData?.registrationEndDate]);
  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex justify-center items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#00f8bd]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="font-sans pt-20 leading-[1.5] font-normal text-white bg-[#131313] antialiased flex justify-center items-center h-screen">
        <div>Error: {error}</div>
      </div>
    );
  }

  if (!eventData) {
    return (
      <div className="font-sans pt-20 leading-[1.5] font-normal text-white bg-[#131313] antialiased flex justify-center items-center h-screen">
        <div>Event not found</div>
      </div>
    );
  }

  const options = [
    {
      id: 0,
      label: `${eventData.minTeamSize}-${eventData.maxTeamSize} players`,
      icon: <Users color="white" size={20} className="md:w-6 md:h-6" />,
      title: "Team size",
    },
    {
      id: 1,
      label: new Date(eventData.eventDate).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      icon: <Clock color="white" size={20} className="md:w-6 md:h-6" />,
      title: "Event date",
    },
    {
      id: 2,
      label: "Prizes Worth " + eventData.prize[0].amount + "K+",
      icon: <IndianRupee color="white" size={20} className="md:w-6 md:h-6" />,
      title: "Rewards",
    },
  ];

  const discountAmount = (eventData.fees * parseInt(eventData.discount)) / 100;
  const discountedPrice = eventData.fees - discountAmount;
  const maxTeams = 60;
  const registeredTeams = eventData.teams?.length || 0;
  const registrationPercentage = Math.min(
    (registeredTeams / maxTeams) * 100,
    100
  );

  return (
    <div className="font-sans pt-20 leading-[1.5] font-normal text-white bg-gradient-to-b from-black via-[#001a1a] to-black antialiased">
      <div className="absolute top-0 left-0 w-full h-full border-t border-l border-teal-500/5 grid grid-cols-4 grid-rows-4">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="border-b border-r border-teal-500/5" />
        ))}
      </div>

      <div className="p-4 md:p-0">
        <div className="w-full md:w-[90%] lg:w-[80%] mx-auto p-2 md:p-4 relative min-h-screen">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-3">
            <div className="lg:col-span-7 pb-8">
              <div className="flex flex-col md:flex-row gap-2 md:gap-3">
                <div className="w-full h-40 sm:h-48 md:h-64 lg:h-80 xl:h-96 mb-4 md:mb-6">
                  <img
                    src={eventData.poster}
                    className="w-full h-full rounded-lg"
                    alt="IPL Event"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4 pt-4">
                <div className="flex flex-col sm:flex-row w-full justify-between gap-3">
                  <p className="text-2xl sm:text-3xl md:text-[40px] font-bold">
                    {eventData.name}
                  </p>
                  <button
                    className="p-2 sm:p-3 text-base sm:text-[18px] font-bold rounded-md w-full sm:w-[20%] text-black bg-[#00fcb8]"
                    onClick={async () => {
                      if (
                        isRegistered &&
                        localStorage.getItem("userId") &&
                        localStorage.getItem("token")
                      ) {
                        window.location.href = "/endeavour/profile?events";
                      } else if (
                        !localStorage.getItem("userId") ||
                        !localStorage.getItem("token")
                      ) {

                        if (eventData.name == "Entertainment Eve" || eventData.name == "Treasure Hunt") {
                          window.location.href = "/endeavour/login";
                        } else {
                          alert("Registration is closed.");
                        }
                      } else {
                        if (!isUserFieldsValid) {
                          setShowProfileIncompletePopup(true);
                        } else {
                          if (eventData.name == "Entertainment Eve" || eventData.name == "Treasure Hunt") {
                            setIsRegistrationOpen(true);
                          } else {
                            alert("Registration is closed.");
                          }
                        }
                      }
                    }}
                  >
                    {isRegistered
                      ? "Dashboard"
                      : eventData.name == "Entertainment Eve" || eventData.name == "Treasure Hunt"
                      ? "Register Now"
                      : "Closed"}
                  </button>
                </div>
                <hr className="w-full h-2 opacity-20" />
                <div className="flex flex-col sm:flex-row gap-3 w-full">
                  {eventData._id != "6809edde914c67780d0fdaca" && (
                    <div className="w-full sm:w-[50%] rounded-md bg-[#18222D] p-4 mb-3 sm:mb-0">
                      {eventData.name != "Entertainment Eve" && (
                        <div>
                          <p className="text-[16px] font-normal">PRIZE POOL</p>
                          <p className="text-[#00fcb8] text-[18px] flex font-bold items-center">
                            {eventData.prize?.length > 0
                              ? eventData.prize[0].amount > 0
                                ? eventData.prize.length === 1
                                  ? `${eventData.prize[0].amount}K+`
                                  : `${eventData.prize.reduce(
                                      (sum, prize) => sum + (prize.amount || 0),
                                      0
                                    )}K+`
                                : "To be announced"
                              : "To be announced"}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                  <div className="w-full sm:w-[50%] rounded-md bg-[#18222D] p-4">
                    <p className="text-[16px] font-normal">EVENT DATE</p>
                    <p className="text-[#00fcb8] text-[18px] flex font-bold items-center">
                      <Clock className="p-1" />
                      {new Date(eventData.eventDate).toLocaleDateString(
                        "en-US",
                        {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        }
                      )}
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <p
                    className=" text-[16px] text-white "
                    dangerouslySetInnerHTML={{ __html: eventData.description }}
                  ></p>
                  {/* <button className="text-[#00fcb8] font-medium mt-1 block md:hidden">
                    Read more
                  </button> */}
                </div>
              </div>
              {eventData.name != "Entertainment Eve" && (
                <div className="flex flex-col gap-4 pt-4">
                  <p className="text-xl md:text-[24px] font-bold">EVENT INFO</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
                    {options.map((option) => (
                      <div
                        key={option.id}
                        className="w-full p-3 md:p-4 rounded-lg bg-[#18222D] flex flex-col items-start"
                      >
                        <div className="flex justify-between items-center w-full mb-2 md:mb-4">
                          <div className="p-1 md:p-2">{option.icon}</div>
                          <div className="p-1 md:p-2"></div>
                        </div>
                        <div className="mt-2 md:mt-4">
                          <h2 className="text-white text-lg md:text-2xl font-bold mb-1">
                            {option.title}
                          </h2>
                          <p className="text-[#00fcb8] text-base md:text-xl font-medium">
                            {option.label}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-4 mt-8">
                {eventData.faq[0] && (
                  <p className="text-xl md:text-[24px] font-bold">
                    FREQUENTLY ASKED QUESTIONS
                  </p>
                )}

                <div className="space-y-4">
                  {eventData.faq?.map((item, index) => (
                    <div key={index} className="bg-[#18222D] rounded-lg p-4">
                      <details className="group">
                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                          <span className="text-[#00fcb8]">{item.ques}</span>
                          <span className="transition group-open:rotate-180">
                            <svg
                              fill="none"
                              height="24"
                              shapeRendering="geometricPrecision"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              viewBox="0 0 24 24"
                              width="24"
                            >
                              <path d="M6 9l6 6 6-6"></path>
                            </svg>
                          </span>
                        </summary>
                        <p className="text-gray-300 mt-3 group-open:animate-fadeIn">
                          {item.ans}
                        </p>
                      </details>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 h-full mt-4 lg:mt-0">
              <div className="lg:sticky lg:top-4 bg-[#18222D] rounded-lg overflow-hidden">
                {/* Glassy Effect Banner */}
                <div className="relative bg-gradient-to-r from-[#00fcb8]/20 to-[#00d06d]/20 backdrop-blur-sm p-4 border-b border-[#00fcb8]/30">
                  <div className="absolute inset-0 bg-[#18222D]/50 rounded-t-lg"></div>
                  <div className="relative z-10 flex items-center">
                    <Clock size={20} className="mr-3 text-[#00fcb8]" />
                    <div>
                      <p className="font-bold text-[#00fcb8] text-sm md:text-base">
                        REGISTRATION ENDING SOON!
                      </p>
                      <p className="text-[#00fcb8]/80 text-xs md:text-sm">
                        Limited spots available - Don't miss out
                      </p>
                    </div>
                  </div>
                </div>

                {/* Countdown Timer */}
                <div className="bg-[#111920]/80 backdrop-blur-sm rounded-lg p-4 m-3 border border-[#00fcb8]/20">
                  <div className="grid grid-cols-4 gap-2 text-center">
                    <div className="bg-[#18222D]/80 rounded p-2 border border-[#00fcb8]/10">
                      <p className="text-[#00fcb8] text-xl md:text-2xl font-bold">
                        {timeRemaining.days}
                      </p>
                      <p className="text-[10px] md:text-xs text-gray-300">
                        Days
                      </p>
                    </div>
                    <div className="bg-[#18222D]/80 rounded p-2 border border-[#00fcb8]/10">
                      <p className="text-[#00fcb8] text-xl md:text-2xl font-bold">
                        {timeRemaining.hours}
                      </p>
                      <p className="text-[10px] md:text-xs text-gray-300">
                        Hours
                      </p>
                    </div>
                    <div className="bg-[#18222D]/80 rounded p-2 border border-[#00fcb8]/10">
                      <p className="text-[#00fcb8] text-xl md:text-2xl font-bold">
                        {timeRemaining.minutes}
                      </p>
                      <p className="text-[10px] md:text-xs text-gray-300">
                        Mins
                      </p>
                    </div>
                    <div className="bg-[#18222D]/80 rounded p-2 border border-[#00fcb8]/10">
                      <p className="text-[#00fcb8] text-xl md:text-2xl font-bold">
                        {timeRemaining.seconds}
                      </p>
                      <p className="text-[10px] md:text-xs text-gray-300">
                        Secs
                      </p>
                    </div>
                  </div>
                </div>

                {/* Price Details with Glass Effect */}
                <div className="bg-[#111920]/80 backdrop-blur-sm p-4 mx-3 my-4 rounded-lg border border-[#00fcb8]/20">
                  <h3 className="text-white font-bold mb-3 text-sm md:text-base flex items-center">
                    <IndianRupee size={16} className="mr-2 text-[#00fcb8]" />
                    PRICE DETAILS
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <p className="text-gray-300 text-sm">Entry Fee</p>
                      <p className="text-white flex items-center text-sm">
                        <IndianRupee size={12} className="mr-1" />
                        {eventData.fees}
                      </p>
                    </div>
                    <hr className="border-[#00fcb8]/10" />
                    <div className="flex justify-between font-bold">
                      <p className="text-white">Total</p>
                      <p className="text-[#00fcb8] flex items-center">
                        <IndianRupee size={12} className="mr-1" />
                        {eventData.fees}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="p-4 mx-3 sticky bottom-0 bg-[#18222D]/80 backdrop-blur-sm border-t border-[#00fcb8]/20">
                  <div className="flex flex-col gap-3">
                    <button
                      className="bg-gradient-to-r from-[#00fcb8] to-[#00d06d] hover:from-[#00d06d] hover:to-[#00fcb8] text-black font-bold rounded-lg py-3 w-full text-sm md:text-base transition-all transform hover:scale-[1.01] shadow-lg shadow-[#00fcb8]/20"
                      onClick={async () => {
                        if (
                          isRegistered &&
                          localStorage.getItem("userId") &&
                          localStorage.getItem("token")
                        ) {
                          window.location.href = "/endeavour/profile?events";
                        } else if (
                          !localStorage.getItem("userId") ||
                          !localStorage.getItem("token")
                        ) {
                          if (eventData.name == "Entertainment Eve" || eventData.name == "Treasure Hunt") {
                            window.location.href = "/endeavour/login";
                          } else {
                            alert("Registration is closed.");
                          }
                        } else {
                          if (!isUserFieldsValid) {
                            setShowProfileIncompletePopup(true);
                          } else {
                            if (eventData.name == "Entertainment Eve" || eventData.name == "Treasure Hunt") {
                              setIsRegistrationOpen(true);
                            }
                            else{
                              alert("Registration is closed.");
                            }
                          }
                        }
                      }}
                    >
                      {isRegistered
                        ? "GO TO DASHBOARD"
                        : eventData.name == "Entertainment Eve" || eventData.name == "Treasure Hunt"
                        ? "REGISTER NOW"
                        : "CLOSED"}
                    </button>
                    <button
                      className="flex justify-center items-center bg-[#111920]/80 hover:bg-[#0e161f] text-white font-semibold rounded-lg py-3 w-full text-sm md:text-base border border-[#00fcb8]/30 transition-all"
                      onClick={() => {
                        const currentUrl = window.location.href;
                        const message = `Check out this event: ${currentUrl}`;
                        const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
                          message
                        )}`;
                        window.open(whatsappUrl, "_blank");
                      }}
                    >
                      <Share2 size={16} className="mr-2" />
                      SHARE EVENT
                    </button>
                  </div>
                </div>

                {/* Support */}
                <div className="rounded-md p-3 text-center">
                  <p className="text-gray-400 text-xs md:text-sm">
                    Need help?{" "}
                    <span className="text-[#00fcb8] cursor-pointer hover:underline">
                      Contact support
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EventRegistrationPopup
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
        eventSlug={eventSlug}
        eventName={eventData.name}
        eventFees={eventData.fees}
        qrCode={eventData.qrcode}
      />

      {showProfileIncompletePopup && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-b from-[#1e2a38] to-[#18222D] rounded-xl w-full max-w-md p-6 border border-gray-700">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-[#00fcb8]">
                Profile Incomplete
              </h3>
              <button
                onClick={() => setShowProfileIncompletePopup(false)}
                className="text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>
            <p className="text-gray-300 mb-6">
              Please complete your profile information before registering for
              events.
            </p>
            <div className="flex justify-centre gap-3">
              <button
                onClick={() => {
                  setShowProfileIncompletePopup(false);
                  window.location.href = "/endeavour/profile";
                }}
                className="px-4 py-2 bg-[#00fcb8] text-black font-bold rounded-md"
              >
                Complete Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
