import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import "../styles/buttons.css";
import ticketImage from "../assets/images/tkt-soon.png";

const TicketSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const targetDate = useMemo(() => new Date("2025-05-02T16:00:00"), []);

  // Calculate time left until the target date
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };
    const timerInterval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timerInterval);
  }, [targetDate]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div id="ticket" className=" text-white pt-16 md:pt-16 relative overflow-hidden">
      {/* Subtle dark grid background */}
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 z-0 opacity-30">
        {[...Array(144)].map((_, i) => (
          <div key={i} className="border-b border-r border-teal-900/30" />
        ))}
      </div>
      
      {/* Subtle glow elements */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-teal-900/20 blur-3xl"
        animate={{
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-0 right-10 w-80 h-80 rounded-full bg-teal-800/10 blur-3xl"
        animate={{
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main content container */}
        <motion.div 
          className="flex flex-col items-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Event Header */}
          <motion.div 
            className="w-full text-center mb-16"
            variants={fadeInUp}
          >
            <h2 className="text-xs uppercase tracking-widest text-teal-400 mb-2">Endeavour 2025</h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-3">
              EVE
              <span className="text-teal-500 custom-font"> Live in</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The sessions end. The lights dim. One night of insane energy and memories that'll outlive the summit.
            </p>
          </motion.div>
          
          {/* Glass Effect Countdown */}
          <motion.div 
            className="w-full mb-20"
            variants={fadeInUp}
          >
            <motion.div 
              className="backdrop-blur-md bg-black/40 border border-white/5 rounded-xl overflow-hidden shadow-2xl"
              whileHover={{ boxShadow: "0 0 30px rgba(20, 184, 166, 0.15)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
                {[
                  { value: timeLeft.days, label: "Days" },
                  { value: timeLeft.hours, label: "Hours" },
                  { value: timeLeft.minutes, label: "Minutes" },
                  { value: timeLeft.seconds, label: "Seconds" }
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="py-8 px-4 relative group"
                    whileHover={{ backgroundColor: "rgba(255,255,255,0.03)" }}
                  >
                    {/* Glass counter inner */}
                    <div className="relative z-10">
                      <motion.div
                        className="text-5xl md:text-6xl font-bold text-center text-white"
                        animate={{
                          opacity: [0.9, 1, 0.9],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.2
                        }}
                      >
                        {item.value < 10 ? `0${item.value}` : item.value}
                      </motion.div>
                      
                      <div className="text-sm uppercase tracking-widest text-teal-400/80 text-center mt-2">
                        {item.label}
                      </div>
                    </div>
                    
                    {/* Subtle hover effect */}
                    <motion.div 
                      className="absolute inset-0 bg-teal-500/0 opacity-0 group-hover:opacity-100"
                      animate={{ opacity: [0, 0.05, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          {/* Full-width Ticket Display */}
          <motion.div 
            className="w-full mb-20"
            variants={fadeInUp}
          >
            {/* Ticket Container - Full Width */}
            <motion.div 
              className="backdrop-blur-md bg-black/30 border border-white/10 rounded-xl p-6 md:p-8 relative overflow-hidden"
              whileHover={{ 
                boxShadow: "0 0 40px rgba(20, 184, 166, 0.15)",
                borderColor: "rgba(20, 184, 166, 0.3)"
              }}
              transition={{ duration: 0.4 }}
            >
              {/* Decorative accent lines */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500/80 via-teal-400/50 to-transparent"></div>
              <div className="absolute bottom-0 right-0 w-1/2 h-1 bg-gradient-to-l from-teal-500/80 to-transparent"></div>
              
              <div className="flex flex-col items-center  lg:flex-row gap-8 md:gap-12">
                {/* Ticket Visual Side */}
                <div className="lg:w-3/5 relative">
                  {/* Full ticket design */}
                  <div className="relative overflow-hidden rounded-lg md:p-8 border-2 border-teal-500/30 h-full">
                    {/* Image container with proper aspect ratio */}
                    <div className="relative pt-[50%] lg:pt-[40%]">
                      <motion.img 
                        src={ticketImage}
                        alt="Eve Live In" 
                        className="absolute inset-0 w-full h-full object-contain"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                      />
                      
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black hidden md:flex via-black/70 to-transparent"></div>
                    </div>
                    
                    {/* Decorative ticket elements */}
                    <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-teal-400/70 rounded-tl"></div>
                    <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-teal-400/70 rounded-tr"></div>
                    
                    {/* Ticket perforation line */}
                    <div className="absolute right-[20%] top-0 bottom-0 w-0.5 flex flex-col justify-between">
                      {[...Array(12)].map((_, i) => (
                        <div key={i} className="h-3 w-full bg-teal-400/40 rounded-full my-2"></div>
                      ))}
                    </div>
                    
                    {/* Ticket info panel */}
                    <div className="absolute right-0 top-0 bottom-0 w-[20%] hidden md:flex bg-black/70 backdrop-blur-sm border-l border-teal-500/30  flex-col justify-center items-center p-4">
                      <div className="text-teal-400 font-mono text-xs font-bold rotate-90 tracking-widest ">COMING SOON</div>
                      {/* <div className="my-8  border-t border-teal-500/30 w-1/2"></div> */}
                      {/* <div className="text-white font-mono text-xs rotate-90 tracking-wider">#2K25</div> */}
                    </div>
                    
                    {/* Ticket details overlay */}
                    <div className="absolute bottom-0 hidden md:flex-col left-0 right-[20%] px-6 py-8 text-center">
                      <div className="flex justify-between items-end">
                        <div>
                          <div className="text-sm text-teal-400 tracking-widest mb-1 text-left">LIVE EVENT</div>
                          <h3 className="text-3xl md:text-4xl font-bold mb-2 text-left">ENTERTAINMENT EVE</h3>
                        </div>
                        <div className="text-right">
                          <div className="text-gray-300 font-medium">MAY 2-3, 2025</div>
                          <div className="text-teal-400 font-bold">4:00 PM</div>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t  border-white/10 flex justify-between">
                        <div className="text-sm text-left">
                          <div className="text-gray-400">VENUE</div>
                          <div className="text-white font-semibold">KIET AUDITORIUM</div>
                        </div>
                        <div className="text-sm hidden md:flex-col text-right">
                          <div className="text-gray-400">SECTION</div>
                          <div className="text-white font-semibold">PREMIUM</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Description Side */}
                <div className="lg:w-2/5">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-3xl font-bold mb-6 text-white">The Ultimate <span className="text-teal-400">Party</span> Experience</h3>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        Entertainment Eve isn't just an event — it's the heart-thumping, crowd-cheering, stage-blazing climax of Endeavour 2025. From beats that make you move to moments that leave you screaming.
                      </p>
                      
                      <p className="text-gray-300 mb-8 leading-relaxed">
                        This is where you drop the formals and bring out the wild. No filters, no FOMO — just you, your gang, and the craziest night of the fest.
                      </p>
                    </div>
                    
                 
                    
                    {/* CTA Button */}
                    <motion.button 
                      className="w-full py-4 bg-black/80 border-2 border-teal-500 text-teal-400 rounded-lg font-bold tracking-wide overflow-hidden relative group"
                      whileHover={{ 
                        borderColor: "#14b8a6",
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Button background animation */}
                      <motion.div 
                        className="absolute inset-0 bg-teal-500/10 -translate-x-full group-hover:translate-x-0"
                        transition={{ duration: 0.5 }}
                      />
                      
                      {/* Button text with shine effect */}
                      <span className="relative z-10 flex items-center justify-center">
                        <span>COMING SOON</span>
                        <motion.span 
                          className="ml-2"
                          animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [1, 0.8, 1]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          →
                        </motion.span>
                      </span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Event highlights - New section */}
          <motion.div 
            className="w-full mb-16"
            variants={fadeInUp}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: "🎤",
                  title: "Star Performances",
                  description: "Experience breathtaking performances by top artists that will leave you speechless."
                },
                {
                  icon: "🔊",
                  title: "Sonic Experience",
                  description: "Feel the music with our state-of-the-art sound systems and immersive audio engineering."
                },
                {
                  icon: "🌠",
                  title: "Magical Atmosphere",
                  description: "Cutting-edge visual effects and lighting that transform the venue into another dimension."
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  className="backdrop-blur-sm bg-black/40 border border-white/5 rounded-lg p-6 hover:border-teal-500/30"
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 10px 30px -15px rgba(20, 184, 166, 0.25)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default TicketSection;