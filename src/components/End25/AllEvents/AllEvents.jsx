import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";

const AllEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          "https://two5-backend.onrender.com/api/v1/events",
          {
            headers: {
              "Cache-Control": "no-cache", // Prevent caching
              Pragma: "no-cache",
            },
          }
        );

        // If response.data is an array, use it directly
        if (Array.isArray(response.data.data.events)) {
          setEvents(response.data.data.events);
        }
        // If response.data has an events property that's an array
        else if (Array.isArray(response.data?.events)) {
          setEvents(response.data.events);
        }
        // If the structure is different than expected
        else {
          setError("Unexpected data format received from server");
          setEvents([]); // Set to empty array to prevent errors
        }
      } catch (err) {
        setError("Failed to fetch events. Please try again later.");
        console.error("Error fetching events:", err);
        setEvents([]); // Ensure events is always an array
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  if (loading) {
    return (
      <div className="w-full mt-20 relative overflow-hidden">
        <div className="min-h-screen bg-black text-white flex justify-center items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#00f8bd]"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full mt-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-white mb-3">OUR EVENTS</h2>
            <p className="text-red-500">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  // Helper function to format date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Helper function to calculate total prize pool
  const calculatePrizePool = (prizeArray) => {
    if (!prizeArray || !Array.isArray(prizeArray) || prizeArray.length === 0) {
      return "N/A";
    }

    const total = prizeArray.reduce(
      (sum, prize) => sum + (prize.amount || 0),
      0
    );
    return `₹${total.toLocaleString()}`;
  };

  return (
    <div className="w-full pl-20 pr-20 mt-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-[#00FCB8] opacity-5 blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-[#00FCB8] opacity-5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-white mb-3">OUR EVENTS</h2>
          <div className="flex items-center justify-center mb-6">
            <div className="h-1 w-10 bg-gray-700"></div>
            <div className="h-1 w-20 bg-[#00FCB8] mx-2"></div>
            <div className="h-1 w-10 bg-gray-700"></div>
          </div>
        </motion.div>

        {events.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl">
              No events available at the moment.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {events.map((event, index) => (
              <motion.div
                key={event._id}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                onClick={() => {
                  console.log("first");
                  window.location.href = `/endeavour/events/${event.slug}`;
                }}
              >
                {/* Glassy Card */}
                <div className="relative h-full bg-gray-900 bg-opacity-40 backdrop-blur-lg rounded-2xl p-6 border border-gray-800 overflow-hidden group-hover:border-[#00FCB8] transition-all duration-300">
                  <div className="absolute -inset-1 opacity-0 group-hover:opacity-20 bg-[#00FCB8] blur-xl rounded-full transition-all duration-700 group-hover:duration-500"></div>

                  {/* Card content with hover animations */}
                  <div className="relative group-hover:opacity-0 transition-all ease-in-out duration-700 cursor-pointer z-10">
                    {event.prize[0] && (
                      <div className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-[#00FCB8] bg-opacity-20 text-[#00FCB8] mb-4">
                        Prize Pool: {calculatePrizePool(event.prize)}K+
                      </div>
                    )}
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#00FCB8] transition-colors duration-300">
                          {event.name}
                        </h3>
                        <p className="text-sm text-gray-400">
                          {event.minTeamSize}-{event.maxTeamSize} members
                        </p>
                      </div>
                      {/* <div className="text-4xl">💻</div> Default icon */}
                    </div>

                    <div className="mb-6">
                      <p className="text-xs text-gray-400 mb-1">REGISTRATION</p>
                      <p className="text-2xl font-bold text-[#00FCB8]">OPEN</p>
                    </div>

                    {/* Divider line with animation */}
                    <div className="relative h-px w-full bg-gray-800 mb-6 overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-[#00FCB8]"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                      ></motion.div>
                    </div>
                    {/* Event details */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-gray-400 mb-1">DATE</p>
                        <p className="text-sm font-bold text-white">
                          {formatDate(event.eventDate)}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs text-gray-400 mb-1 text-right">
                          FEE
                        </p>
                        <p className="text-xl font-bold text-white">
                          ₹{event.fees}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Hidden details that appear on hover */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center p-6">
                      {/* <div className="inline-block p-3 rounded-full bg-[#00FCB8] bg-opacity-20 mb-4">
                        <div className="w-12 h-12 flex items-center justify-center text-3xl">
                          💻
                        </div>
                      </div> */}
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {event.name}
                      </h3>

                      {/* Description with fixed height and HTML rendering */}
                      {/* <div className="h-24 overflow-y-auto mb-4 text-gray-300 description-content">
                        {event.description ? (
                          <div dangerouslySetInnerHTML={{ __html: event.description }} />
                        ) : (
                          <p>Join us for an exciting hackathon!</p>
                        )}
                      </div> */}

                      <div className="mb-4">
                        <p className="text-sm text-gray-400">Prize Pool:</p>
                        {event.prize &&
                        Array.isArray(event.prize) &&
                        event.prize.length > 0 ? (
                          event.prize.map((prizeItem, idx) => (
                            <p key={idx} className="text-white">
                              {prizeItem.amount.toLocaleString()}K+
                            </p>
                          ))
                        ) : (
                          <p className="text-white">To be announced</p>
                        )}
                      </div>
                      <motion.button
                        className="px-6 py-2 bg-[#00FCB8] text-black font-bold rounded-full"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          window.location.href = `/events/${event.slug}`;
                        }}
                      >
                        {event.registrationEndDate &&
                        new Date() < new Date(event.registrationEndDate)
                          ? "REGISTER NOW"
                          : "VIEW DETAILS"}
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        ></motion.div>
      </div>
    </div>
  );
};

const getOrdinalSuffix = (n) => {
  if (n <= 0) return "";

  const j = n % 10;
  const k = n % 100;

  if (j === 1 && k !== 11) {
    return "st";
  }
  if (j === 2 && k !== 12) {
    return "nd";
  }
  if (j === 3 && k !== 13) {
    return "rd";
  }
  return "th";
};

export default AllEvents;
