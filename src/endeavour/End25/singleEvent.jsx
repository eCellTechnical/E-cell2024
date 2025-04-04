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
} from "lucide-react";
import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

const EventRegistrationPopup = ({ isOpen, onClose, eventSlug, eventName }) => {
  const [activeTab, setActiveTab] = useState("create"); // 'create' or 'join'
  const [formData, setFormData] = useState({
    eventSlug: eventSlug || "",
    leaderId: "",
    teamName: "",
    teamCode: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // Set eventSlug from props or URL path
    const getEventSlugFromUrl = () => {
      if (typeof window !== "undefined") {
        const path = window.location.pathname;
        const match = path.match(/\/events\/([^/]+)/);
        return match ? match[1] : "";
      }
      return "";
    };

    const slug = eventSlug || getEventSlugFromUrl();
    if (slug) {
      setFormData((prev) => ({ ...prev, eventSlug: slug }));
    }

    // Set leaderId from localStorage
    const userId = localStorage.getItem("userId");
    if (userId) {
      setFormData((prev) => ({ ...prev, leaderId: userId }));
    }
  }, [eventSlug]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreateTeam = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      if (!formData.teamName.trim()) {
        throw new Error("Team name is required");
      }

      const response = await axios.post("/api/event-registration", {
        eventSlug: formData.eventSlug,
        leaderId: formData.leaderId,
        teamName: formData.teamName,
      });

      if (response.data.success) {
        setSuccess(true);
        setTimeout(() => {
          window.location.href = `/endeavour/profile?events`;
        }, 2000);
      } else {
        throw new Error(response.data.message || "Failed to register team");
      }
    } catch (err) {
      setError(
        err.response?.data?.message || err.message || "Failed to register team"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleJoinTeam = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      if (!formData.teamCode.trim()) {
        throw new Error("Team code is required");
      }

      const response = await axios.post(
        "http://localhost:5000/api/v1/joinTeam",
        {
          teamCode: formData.teamCode,
          userId: formData.leaderId,
        }
      );

      if (response.data.success) {
        setSuccess(true);
        setTimeout(() => {
          window.location.href = `/endeavour/profile?events`;
        }, 2000);
      } else {
        throw new Error(response.data.message || "Failed to join team");
      }
    } catch (err) {
      setError(
        err.response?.data?.message || err.message || "Failed to join team"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  const displayEventName =
    eventName ||
    (formData.eventSlug ? formData.eventSlug.replace(/-/g, " ") : "the event");

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-[#18222D] rounded-lg w-full max-w-md overflow-hidden shadow-xl">
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-2xl font-bold text-white">Event Registration</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          <p className="mb-6 text-sm text-gray-300">
            Register for{" "}
            <span className="text-[#00fcb8] font-medium capitalize">
              {displayEventName}
            </span>
          </p>

          {/* Toggle between Create and Join Team */}
          <div className="flex mb-6 bg-[#111920] rounded-lg p-1">
            <button
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                activeTab === "create"
                  ? "bg-[#00fcb8] text-black"
                  : "text-gray-300 hover:text-white"
              }`}
              onClick={() => setActiveTab("create")}
            >
              Create Team
            </button>
            <button
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                activeTab === "join"
                  ? "bg-[#00fcb8] text-black"
                  : "text-gray-300 hover:text-white"
              }`}
              onClick={() => setActiveTab("join")}
            >
              Join Team
            </button>
          </div>

          {success ? (
            <div className="rounded-md bg-[#0d3331] p-4 border border-[#00fcb8]">
              <div className="flex">
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-[#00fcb8]">
                    {activeTab === "create" ? "Registration" : "Join"}{" "}
                    successful!
                  </h3>
                  <div className="mt-2 text-sm text-green-300">
                    <p>
                      {activeTab === "create"
                        ? "Your team has been registered."
                        : "You have successfully joined the team."}
                      Redirecting to confirmation page...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <form
              className="space-y-6"
              onSubmit={
                activeTab === "create" ? handleCreateTeam : handleJoinTeam
              }
            >
              <div>
                <label
                  htmlFor="eventSlug"
                  className="block text-sm font-medium text-gray-300"
                >
                  Event
                </label>
                <div className="mt-1">
                  <input
                    id="eventSlug"
                    name="eventSlug"
                    type="text"
                    value={displayEventName}
                    disabled
                    className="bg-[#111920] appearance-none block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm placeholder-gray-500 text-gray-300 focus:outline-none focus:ring-[#00fcb8] focus:border-[#00fcb8] sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="leaderId"
                  className="block text-sm font-medium text-gray-300"
                >
                  {activeTab === "create" ? "Team Leader ID" : "Your ID"}
                </label>
                <div className="mt-1">
                  <input
                    id="leaderId"
                    name="leaderId"
                    type="text"
                    value={formData.leaderId}
                    disabled
                    className="bg-[#111920] appearance-none block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm placeholder-gray-500 text-gray-300 focus:outline-none focus:ring-[#00fcb8] focus:border-[#00fcb8] sm:text-sm"
                  />
                </div>
              </div>

              {activeTab === "create" ? (
                <div>
                  <label
                    htmlFor="teamName"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Team Name
                  </label>
                  <div className="mt-1">
                    <input
                      id="teamName"
                      name="teamName"
                      type="text"
                      required
                      value={formData.teamName}
                      onChange={handleChange}
                      className="bg-[#111920] appearance-none block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm placeholder-gray-500 text-gray-300 focus:outline-none focus:ring-[#00fcb8] focus:border-[#00fcb8] sm:text-sm"
                      placeholder="Enter your team name"
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <label
                    htmlFor="teamCode"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Team Code
                  </label>
                  <div className="mt-1">
                    <input
                      id="teamCode"
                      name="teamCode"
                      type="text"
                      required
                      value={formData.teamCode}
                      onChange={handleChange}
                      className="bg-[#111920] appearance-none block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm placeholder-gray-500 text-gray-300 focus:outline-none focus:ring-[#00fcb8] focus:border-[#00fcb8] sm:text-sm"
                      placeholder="Enter team code provided by team leader"
                    />
                  </div>
                </div>
              )}

              {error && (
                <div className="rounded-md bg-[#331111] p-4 border border-red-500">
                  <div className="flex">
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-red-400">
                        {activeTab === "create" ? "Registration" : "Join"}{" "}
                        failed
                      </h3>
                      <div className="mt-2 text-sm text-red-300">
                        <p>{error}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-[#00fcb8] hover:bg-[#00d06d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00fcb8] disabled:opacity-50 transition-colors"
                >
                  {isSubmitting
                    ? activeTab === "create"
                      ? "Creating Team..."
                      : "Joining Team..."
                    : activeTab === "create"
                    ? "Create Team"
                    : "Join Team"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

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

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:5000/api/v1/events/${eventSlug}`
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

    const checkIsRegisterd = async () => {
      const userId = localStorage.getItem("userId");
      if (userId) {
        const response = await axios.post(
          `http://localhost:5000/api/v1/events/check-registration`,
          {
            eventSlug: eventSlug,
            userId: userId,
          }
        );

        console.log(response.data.data.isRegistered);

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
    if (!eventData) return;

    const calculateTimeRemaining = () => {
      const endDate = new Date(eventData.registrationEndDate);
      const now = new Date();
      const difference = endDate - now;

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    };

    setTimeRemaining(calculateTimeRemaining());
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, [eventData]);

  if (loading) {
    return (
      <div className="font-sans pt-20 leading-[1.5] font-normal text-white bg-[#131313] antialiased flex justify-center items-center h-screen">
        <div>Loading event details...</div>
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
      label: "Prize pool",
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
    <div className="font-sans pt-20 leading-[1.5] font-normal text-white bg-[#131313] antialiased">
      <div className="p-4 md:p-0">
        <div className="w-full md:w-[90%] lg:w-[80%] mx-auto p-2 md:p-4 relative min-h-screen">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-3">
            <div className="lg:col-span-7 pb-8">
              <div className="flex flex-col md:flex-row gap-2 md:gap-3">
                <div className="w-full md:w-[50%] h-40 sm:h-48 md:h-auto mb-2 md:mb-0">
                  <img
                    src="https://wowtheme7.com/tf/dyat/assets/img/tournament/11.png"
                    alt="Treasure Map"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex flex-row md:flex-col w-full md:w-[50%] gap-2 md:gap-3 h-40 sm:h-48 md:h-auto">
                  <div className="w-1/2 md:w-full h-full md:h-1/2">
                    <img
                      src="https://wowtheme7.com/tf/dyat/assets/img/tournament/12.png"
                      alt="Treasure Chest"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="w-1/2 md:w-full h-full md:h-1/2">
                    <img
                      src="https://wowtheme7.com/tf/dyat/assets/img/tournament/13.png"
                      alt="Treasure Hunt"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 pt-4">
                <div className="flex flex-col sm:flex-row w-full justify-between gap-3">
                  <p className="text-2xl sm:text-3xl md:text-[40px] font-bold">
                    {eventData.name}
                  </p>
                  <button
                    className="p-2 sm:p-3 text-base sm:text-[18px] font-bold rounded-md w-full sm:w-[20%] text-black bg-[#00fcb8]"
                    onClick={() => {
                      if(isRegistered) {
                        window.location.href = `/endeavour/profile?events`;
                      }
                      else{
                        setIsRegistrationOpen(true)
                      }
                    }}
                  >
                    {isRegistered ? "Dashboard" : "Register Now"}
                  </button>
                </div>
                <hr className="w-full h-2 opacity-20" />
                <div className="flex flex-col sm:flex-row gap-3 w-full">
                  <div className="w-full sm:w-[50%] rounded-md bg-[#18222D] p-4 mb-3 sm:mb-0">
                    <p className="text-[16px] font-normal">PRIZE MONEY</p>
                    <p className="text-[#00fcb8] text-[18px] flex font-bold items-center">
                      <IndianRupee className="p-1" />
                      {eventData.prize?.[0]?.amount > 0
                        ? `Rs.${eventData.prize[0].amount}`
                        : "To be announced"}
                    </p>
                  </div>
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
                  <p className="text-normal text-[16px] opacity-80 line-clamp-4 md:line-clamp-none">
                    {eventData.description}
                    <br />
                    <br />A treasure hunt is an exciting game where participants
                    follow a series of clues to discover hidden items or reach a
                    specific goal. This event promises an exhilarating
                    experience as teams navigate through challenges, solve
                    puzzles, and race against time to claim the ultimate prize.
                    Bring your problem-solving skills and team coordination to
                    compete in this thrilling adventure!
                  </p>
                  <button className="text-[#00fcb8] font-medium mt-1 block md:hidden">
                    Read more
                  </button>
                </div>
              </div>
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
                        <div className="p-1 md:p-2">
                          <Plus
                            color="white"
                            size={16}
                            className="md:w-5 md:h-5"
                          />
                        </div>
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
            </div>
            <div className="lg:col-span-3 h-full mt-4 lg:mt-0">
              <div className="lg:sticky lg:top-4 bg-[#18222D] rounded-lg">
                <div className="bg-gradient-to-r text-black from-[#00fcb8] to-[#00d06d] rounded-t-lg p-3 md:p-4 flex items-center">
                  <BadgePercent size={20} className="mr-2" />
                  <div>
                    <p className="font-bold text-sm md:text-base">
                      Early Bird Discount
                    </p>
                    <p className="text-xs md:text-sm">
                      {eventData.discount} off until registration closes
                    </p>
                  </div>
                </div>
                <div className="bg-[#111920] rounded-lg p-3 md:p-4 m-2 md:m-4">
                  <div className="flex items-center mb-2 md:mb-3">
                    <Clock size={16} className="mr-2 text-[#00fcb8]" />
                    <h3 className="text-white font-bold text-sm md:text-base">
                      Registration Closes In
                    </h3>
                  </div>
                  <div className="grid grid-cols-4 gap-1 md:gap-2 text-center">
                    <div className="bg-[#18222D] rounded p-1 md:p-2">
                      <p className="text-[#00fcb8] text-lg md:text-2xl font-bold">
                        {timeRemaining.days}
                      </p>
                      <p className="text-[10px] md:text-xs text-gray-400">
                        Days
                      </p>
                    </div>
                    <div className="bg-[#18222D] rounded p-1 md:p-2">
                      <p className="text-[#00fcb8] text-lg md:text-2xl font-bold">
                        {timeRemaining.hours}
                      </p>
                      <p className="text-[10px] md:text-xs text-gray-400">
                        Hours
                      </p>
                    </div>
                    <div className="bg-[#18222D] rounded p-1 md:p-2">
                      <p className="text-[#00fcb8] text-lg md:text-2xl font-bold">
                        {timeRemaining.minutes}
                      </p>
                      <p className="text-[10px] md:text-xs text-gray-400">
                        Mins
                      </p>
                    </div>
                    <div className="bg-[#18222D] rounded p-1 md:p-2">
                      <p className="text-[#00fcb8] text-lg md:text-2xl font-bold">
                        {timeRemaining.seconds}
                      </p>
                      <p className="text-[10px] md:text-xs text-gray-400">
                        Secs
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#111920] p-3 md:p-4 mx-2 md:mx-4">
                  <h3 className="text-white font-bold mb-2 md:mb-3 text-sm md:text-base">
                    Price Details
                  </h3>
                  <div className="flex justify-between mb-1 md:mb-2 text-sm md:text-base">
                    <p className="text-gray-400">Entry Fee</p>
                    <p className="text-white flex items-center">
                      <IndianRupee size={12} className="md:w-3.5 md:h-3.5" />
                      <span>{eventData.fees}</span>
                    </p>
                  </div>
                  <div className="flex justify-between mb-1 md:mb-2 text-sm md:text-base">
                    <p className="text-gray-400">Discount</p>
                    <p className="text-[#00fcb8] flex items-center">
                      - <IndianRupee size={12} className="md:w-3.5 md:h-3.5" />
                      <span>{discountAmount}</span>
                    </p>
                  </div>
                  <hr className="border-gray-700 my-2 md:my-3" />
                  <div className="flex justify-between font-bold text-sm md:text-base">
                    <p className="text-white">Total</p>
                    <p className="text-[#00fcb8] flex items-center">
                      <IndianRupee size={12} className="md:w-3.5 md:h-3.5" />
                      <span>{discountedPrice}</span>
                    </p>
                  </div>
                </div>
                <div className="p-3 md:p-4 mx-2 md:mx-4">
                  <h3 className="text-white font-bold mb-2 md:mb-3 text-sm md:text-base">
                    Event Details
                  </h3>
                  <div className="flex items-center mb-1 md:mb-2">
                    <Users size={16} className="mr-2 text-gray-400" />
                    <div>
                      <p className="text-white text-xs md:text-sm">
                        {registeredTeams} teams registered
                      </p>
                      <p className="text-[10px] md:text-xs text-gray-400">
                        Max 60 teams allowed
                      </p>
                    </div>
                  </div>
                  <div className="w-full bg-[#18222D] rounded-full h-1.5 md:h-2 mt-1">
                    <div
                      className="bg-[#00fcb8] h-1.5 md:h-2 rounded-full"
                      style={{ width: `${registrationPercentage}%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 md:gap-3 p-3 md:p-4 mx-2 md:mx-4 sticky bottom-0 md:relative bg-[#18222D] md:bg-transparent">
                  <button
                    className="bg-[#00fcb8] cursor-pointer hover:bg-green-500 text-black font-bold rounded-lg py-2 md:py-3 w-full text-sm md:text-base"
                    onClick={() => {
                      if(isRegistered) {
                        window.location.href = `/endeavour/profile?events`;
                      }
                      else{
                        setIsRegistrationOpen(true)
                      }
                    }}
                  >
                    {isRegistered ? "Dashboard" : "Register Now"}
                  </button>
                  <button
                    className="flex justify-center cursor-pointer items-center bg-[#111920] hover:bg-[#0e161f] text-white font-semibold rounded-lg py-2 md:py-3 w-full text-sm md:text-base"
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
                    Share Event
                  </button>
                </div>
                <div className="rounded-md p-2 md:p-4">
                  <p className="text-gray-400 text-xs md:text-sm text-center">
                    Need help? Contact support
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
      />
    </div>
  );
}
EventRegistrationPopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  eventSlug: PropTypes.string,
  eventName: PropTypes.string,
};

export default App;
