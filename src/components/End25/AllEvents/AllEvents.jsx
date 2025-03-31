import { motion } from "framer-motion";

const AllEvents = () => {
  // Sample events data
  const events = [
    {
      id: 1,
      name: "INNOVATE-X",
      tagline: "DECADE OF PROLIFICTY",
      platform: "DEVFOLIO",
      date: "FRIDAY",
      dateDetail: "3rd MAY",
      fee: "FREE",
      icon: "💡",
      category: "Hackathon",
    },
    {
      id: 2,
      name: "TECH SUMMIT",
      tagline: "FUTURE OF TECHNOLOGY",
      platform: "HOPIN",
      date: "SATURDAY",
      dateDetail: "4th MAY",
      fee: "₹299",
      icon: "🔮",
      category: "Conference",
    },
    {
      id: 3,
      name: "CODE BATTLES",
      tagline: "ALGORITHMIC WARFARE",
      platform: "CODECHEF",
      date: "SUNDAY",
      dateDetail: "5th MAY",
      fee: "FREE",
      icon: "⚔️",
      category: "Competition",
    },
    {
      id: 4,
      name: "DESIGN JAM",
      tagline: "CRAFT THE EXPERIENCE",
      platform: "FIGMA",
      date: "MONDAY",
      dateDetail: "6th MAY",
      fee: "₹199",
      icon: "🎨",
      category: "Workshop",
    },
    {
        id: 5,
        name: "AI EXPO",
        tagline: "REVOLUTIONIZING THE FUTURE",
        platform: "ZOOM",
        date: "TUESDAY",
        dateDetail: "7th MAY",
        fee: "FREE",
        icon: "🤖",
        category: "Exhibition",
        },
        {
        id: 6,
        name: "BLOCKCHAIN BOOTCAMP",
        tagline: "BUILDING THE FUTURE",
        platform: "DISCORD",
        date: "WEDNESDAY",
        dateDetail: "8th MAY",
        fee: "₹499",
        icon: "🔗",
        category: "Workshop",
    },
    {
        id: 7,
        name: "GAMING MARATHON",
        tagline: "PLAY TO WIN",
        platform: "STEAM",
        date: "THURSDAY",
        dateDetail: "9th MAY",
        fee: "₹199",
        icon: "🎮",
        category: "Tournament",
        },
        {
        id: 8,
        name: "STARTUP PITCH",
        tagline: "PITCH YOUR IDEA",
        platform: "ZOOM",
        date: "FRIDAY",
        dateDetail: "10th MAY",
        fee: "FREE",
        icon: "🚀",
        category: "Competition",
    }
  ];

  return (
    <div className="w-full  relative overflow-hidden">
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
                  <div className="inline-block px-4 py-2 bg-opacity-20 bg-[#00FCB8] rounded-md mb-3">
              <p className="text-[#00FCB8] font-medium">About The Event</p>
            </div>
          <h2 className="text-5xl font-bold text-white mb-3">OUR EVENTS</h2>
          <div className="flex items-center justify-center mb-6">
            <div className="h-1 w-10 bg-gray-700"></div>
            <div className="h-1 w-20 bg-[#00FCB8] mx-2"></div>
            <div className="h-1 w-10 bg-gray-700"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Glassy Card */}
              <div className="relative h-full bg-gray-900 bg-opacity-40 backdrop-blur-lg rounded-2xl p-6 border border-gray-800 overflow-hidden group-hover:border-[#00FCB8] transition-all duration-300">
                <div className="absolute -inset-1 opacity-0 group-hover:opacity-20 bg-[#00FCB8] blur-xl rounded-full transition-all duration-700 group-hover:duration-500"></div>

                {/* Card content with hover animations */}
                <div className="relative group-hover:opacity-0 transition-all ease-in-out duration-700 cursor-pointer z-10">
                  {/* Category tag */}
                  <div className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-[#00FCB8] bg-opacity-20 text-[#00FCB8] mb-4">
                    {event.category}
                  </div>
                  {/* Event Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[#00FCB8] transition-colors duration-300">
                        {event.name}
                      </h3>
                    </div>
                    <div className="text-4xl">{event.icon}</div>
                  </div>
                 
                  <div className="mb-6">
  <p className="text-xs text-gray-400 mb-1">REGISTRATION</p>
  <p className="text-2xl font-bold text-[#00FCB8]">
    {/* {new Date() < new Date(registrationEndDate) ? "OPEN" : "CLOSED" || "OPEN"} */}
    OPEN
  </p>
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
                        {event.date}{" "}
                        <span className="text-gray-400 font-normal">
                          {event.dateDetail}
                        </span>
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-400 mb-1 text-right">
                        FEE
                      </p>
                      <p className="text-xl font-bold text-white">
                        {event.fee}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hidden details that appear on hover */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center p-6">
                    <div className="inline-block p-3 rounded-full bg-[#00FCB8] bg-opacity-20 mb-4">
                      <div className="w-12 h-12 flex items-center justify-center text-3xl">
                        {event.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {event.name}
                    </h3>
                    <p className="text-gray-300 mb-6">
                      Join us for an exciting event focused on innovation and
                      creativity
                    </p>
                    <motion.button
                      className="px-6 py-2 bg-[#00FCB8] text-black font-bold rounded-full"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      REGISTER NOW
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

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

export default AllEvents;
