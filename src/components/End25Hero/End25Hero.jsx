
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import image from "./herohead.png";

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

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const targetDate = new Date("May 2, 2025 00:00:00");
      const difference = targetDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds : Math.floor((difference / 1000) % 60)
        });
      }
    };

    // Calculate immediately
    calculateTimeLeft();
    
    // Then update every second
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative flex flex-col md:flex-row pt-22 md:pt-20 items-center justify-between w-full min-h-screen bg-black overflow-hidden px-6 md:px-12 lg:px-20 py-16">
      <div className="absolute inset-0  overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#00FCB8] opacity-30 blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[#00FCB8] opacity-20 blur-[100px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute top-[30%] left-[20%] w-[300px] h-[300px] rounded-full bg-[#009c44] opacity-10 blur-[80px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="w-full md:w-1/2 z-10">
        <motion.div
          variants={textVariants}
          className="w-full flex mb-6 z-50"
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
        <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold text-white mb-4">
        This Summer, 
        <br></br>
        Stream the 
        <br></br>

        Hustle 
          <span className="text-[#00FCB8]"> LIVE!</span>
        </h1>
        <p className="text-gray-400 mb-8 max-w-xl">
        No episodes, just real action.
Ready to witness the rise of game-changers?

        </p>
        <div className="flex space-x-4 mb-16">
          <motion.button
            className="px-6 py-3 bg-[#00FCB8] text-black font-bold rounded-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              window.location.href = '/endeavour/register'
            }
          }
          >
            REGISTER
          </motion.button>

          <motion.button
            className="px-6 py-3 bg-transparent border-2 border-[#00FCB8] text-white font-bold rounded-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
                // console.log("first")
                window.location.href = '/endeavour/events'
            }}
          >
            ALL EVENTS
          </motion.button>
        </div>
        {/* Stats */}
        <div className="flex justify-around md:justify-start md:space-x-8 lg:space-x-20">
            <div className="text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                15,000+
              </h2>
              <p className="text-gray-400 text-sm md:text-base">Footfall</p>
            </div>

            <div className="text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">10+</h2>
              <p className="text-gray-400 text-sm md:text-base">Competitions</p>
            </div>

            <div className="text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                1.5Lac+
              </h2>
              <p className="text-gray-400 text-sm md:text-base">Prize Pool</p>
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
              src={image} 
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
      className="absolute bottom-[-1rem] md:right-[-2rem] bg-black/80 backdrop-blur-md p-4 rounded-lg border border-gray-800 w-[350px]"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      {/* Countdown Timer */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-gray-400 text-sm">Starts in</p>
          <div className="flex space-x-3 mt-1">
            <div>
              <p className="text-2xl font-bold text-white">{timeLeft.days}</p>
              <p className="text-gray-400 text-xs">Days</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">{timeLeft.hours}</p>
              <p className="text-gray-400 text-xs">Hrs</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">{timeLeft.minutes}</p>
              <p className="text-gray-400 text-xs">Mins</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">{timeLeft.seconds}</p>
              <p className="text-gray-400 text-xs">Secs</p>
            </div>
          </div>
        </div>
        
        <div className="text-right">
          <p className="text-gray-400 text-sm">Prime</p>
          <p className="text-3xl font-bold text-[#00FCB8]">Entry</p>
        </div>
      </div>

      {/* CTA Button */}
      <motion.button
        className="w-full py-3 bg-[#00FCB8]  text-black font-bold rounded-md"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => {
          window.location.href = '/endeavour/register'
        }
      }
      >
        REGISTER NOW
      </motion.button>

      {/* Event Info */}
      <p className="text-gray-500 text-xs mt-3 text-center">
        11th Edition • May 2-3, 2025
      </p>
    </motion.div>
        </div>
      </div>
    </div>
  );
};

export default End25Hero;
