import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import "../styles/buttons.css";
import ticketImage from "../assets/images/tkt-soon.png";

const TicketSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const targetDate = useMemo(() => new Date("2025-05-03T00:00:00"), []);

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
    <div id="ticket" className="bg-black text-white py-16 relative overflow-hidden">
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
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
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
              Entertainment
              <span className="text-teal-500"> Eve</span>
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
          
          {/* Enhanced Ticket Display */}
          <motion.div 
            className="w-full mb-20"
            variants={fadeInUp}
          >
            <div className="flex flex-col md:flex-row gap-12 items-center">
              {/* Ticket Image Side */}
              <motion.div 
                className="md:w-1/2 relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative">
                  {/* Dark glass card effect for ticket */}
                  <motion.div 
                    className="absolute inset-0 backdrop-blur-sm bg-black/60 rounded-xl border border-teal-500/20"
                    whileHover={{
                      boxShadow: "0 0 30px rgba(20, 184, 166, 0.3)",
                      borderColor: "rgba(20, 184, 166, 0.4)"
                    }}
                  />
                  
                  {/* Ticket content */}
                  <div className="relative p-6 z-10">
                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-teal-400/70 rounded-tl"></div>
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-teal-400/70 rounded-tr"></div>
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-teal-400/70 rounded-bl"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-teal-400/70 rounded-br"></div>
                    
                    {/* Ticket image with enhanced styling */}
                    <div className="relative overflow-hidden rounded-lg border-2 border-teal-500/30">
                      <motion.img 
                        src={ticketImage}
                        alt="Entertainment Eve Event" 
                        className="w-full h-96 object-cover"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                      />
                      
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                      
                      {/* Ticket details overlay */}
                      <div className="absolute bottom-0 left-0 right-0 px-6 py-8 text-center">
                        <div className="text-sm text-teal-400 tracking-widest mb-1">ADMIT ONE</div>
                        <h3 className="text-3xl font-bold mb-2">ENTERTAINMENT EVE</h3>
                        <div className="text-gray-300 font-medium">MAY 3, 2025 • 8:00 PM</div>
                        <div className="text-sm text-gray-400 mt-1">KIET AUDITORIUM • #E2025</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Description Side */}
              <motion.div 
                className="md:w-1/2"
                variants={fadeInUp}
              >
                <motion.div 
                  className="backdrop-blur-md bg-black/30 border border-white/5 rounded-xl p-8 relative overflow-hidden"
                  whileHover={{ borderColor: "rgba(20, 184, 166, 0.2)" }}
                >
                  {/* Accent line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500/80 to-transparent"></div>
                  
                  <h3 className="text-3xl font-bold mb-6 text-white">The Ultimate <span className="text-teal-400">Party</span> Experience</h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Entertainment Eve isn't just an event — it's the heart-thumping, crowd-cheering, stage-blazing climax of Endeavour 2025. From beats that make you move to moments that leave you screaming.
                  </p>
                  
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    This is where you drop the formals and bring out the wild. No filters, no FOMO — just you, your gang, and the craziest night of the fest.
                  </p>
                  
                  <motion.button 
                    className="block w-full py-4 bg-black border border-teal-500 text-teal-400 rounded-lg font-medium tracking-wide"
                    whileHover={{ 
                      backgroundColor: "rgba(20, 184, 166, 0.1)",
                      boxShadow: "0 0 20px rgba(20, 184, 166, 0.2)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    RESERVE YOUR SPOT
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Final CTA section */}
          <motion.div 
            className="w-full"
            variants={fadeInUp}
          >
            <motion.div 
              className="backdrop-blur-lg bg-black/50 border border-white/10 rounded-xl p-8 text-center relative overflow-hidden"
              whileHover={{ boxShadow: "0 0 30px rgba(20, 184, 166, 0.15)" }}
            >
              {/* Glassmorphism decorative accents */}
              <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white/5 to-transparent"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-teal-500/10 blur-xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-teal-500/5 blur-xl"></div>
              
              <motion.p 
                className="text-2xl md:text-3xl font-medium mb-8 relative z-10"
                animate={{
                  opacity: [0.9, 1, 0.9],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className="text-gray-300">Miss it, and you miss the </span>
                <span className="text-teal-400 font-bold">vibe</span>
              </motion.p>
              
              <motion.div 
                className="relative inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.button 
                  className="px-12 py-5 bg-teal-500 text-black font-bold tracking-wider rounded-lg text-lg"
                  whileHover={{ boxShadow: "0 0 25px rgba(20, 184, 166, 0.5)" }}
                >
                  GET TICKETS NOW
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default TicketSection;