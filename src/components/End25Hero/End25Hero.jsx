import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const End25Hero = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between w-full min-h-screen bg-black overflow-hidden px-6 md:px-12 lg:px-20 py-16">
      {/* Glowing Light Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top right purple/pink glow */}
        <motion.div
          className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#00FCB8] opacity-30 blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Bottom left teal glow */}
        <motion.div
          className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[#00FCB8] opacity-20 blur-[100px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Center-left pinkish glow */}
        <motion.div
          className="absolute top-[30%] left-[20%] w-[300px] h-[300px] rounded-full bg-[#009c44] opacity-10 blur-[80px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Left Section */}
      <div className="w-full md:w-1/2 z-10">
        <motion.div
          variants={textVariants}
          className="w-full flex mb-6"
        >
          <div className="relative">
            <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-white opacity-60"></div>
            <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-white opacity-60"></div>
            <motion.div
              variants={textVariants}
              className="px-6 py-2 backdrop-blur-sm bg-white/10 "
            >
              <span
                className="text-sm font-medium tracking-wider uppercase"
                style={{ color: "#00fcb8" }}
              >
                May 02-03, 2025 • ECELL KIET
              </span>
            </motion.div>
          </div>
        </motion.div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
          ASPIRE
          <br />
          TO <span className="text-[#00FCB8]">AQUIRE</span>
        </h1>
        <p className="text-gray-400 mb-8 max-w-xl">
          The Premier Tech Conference bringing together innovators, thought
          leaders, and tech enthusiasts for an immersive experience powered by
          cutting-edge technology
        </p>
        <div className="flex space-x-4 mb-16">
          <motion.button
            className="px-6 py-3 bg-[#00FCB8] text-black font-bold rounded-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            REGISTER
          </motion.button>

          <motion.button
            className="px-6 py-3 bg-transparent border-2 border-[#00FCB8] text-white font-bold rounded-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            VIEW SCHEDULE
          </motion.button>
        </div>
        {/* Stats */}
        <div className="flex space-x-12 md:space-x-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              15,000+
            </h2>
            <p className="text-gray-400">Footfall</p>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">10+</h2>
            <p className="text-gray-400">Competitions</p>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              11Lac+
            </h2>
            <p className="text-gray-400">Cash Prize</p>
          </div>
        </div>
      </div>

      {/* Right Section - Event Image and Info */}
      <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center relative z-10">
        {/* Small glowing orb effect behind Event visual */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-[#00db73] opacity-30 blur-[60px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Custom glow effect for the event image */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#009c44]/10 to-[#00FCB8]/30 blur-xl rounded-full transform scale-105" />

            {/* <ThreeDEventVisual /> */}

            <motion.img 
              src="assets/herohead.png" 
              alt="Digital NFT Art" 
              className="w-auto h-auto max-h-[500px]"
              animate={{ 
                rotateY: [0, 5, 0, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          {/* Event Info Box */}
          <motion.div
            className="absolute bottom-[-1rem] right-[-2rem] bg-black/80 backdrop-blur-md p-4 rounded-lg border border-gray-800 w-[350px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-400 text-sm">Early Bird Price</p>
                <h3 className="text-3xl font-bold text-white">$599</h3>
                <p className="text-gray-400 text-sm">Until April 15th</p>
              </div>

              <div>
                <p className="text-gray-400 text-sm">Event starts in</p>
                <div className="flex space-x-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">15</p>
                    <p className="text-gray-400 text-xs">Days</p>
                  </div>

                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">34</p>
                    <p className="text-gray-400 text-xs">Hours</p>
                  </div>

                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">40</p>
                    <p className="text-gray-400 text-xs">Mins</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
              <motion.button
                className="w-full py-2 bg-[#00FCB8] text-black font-bold rounded"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                BOOK NOW
              </motion.button>

              <motion.button
                className="w-full py-2 bg-transparent border border-white text-white font-bold rounded"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                SEE DETAILS
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default End25Hero;
