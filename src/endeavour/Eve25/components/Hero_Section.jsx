import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const eventImages = [
  "https://in.bmscdn.com/events/moviecard/ET00429769.jpg",
  "https://in.bmscdn.com/events/moviecard/ET00440583.jpg",
  "https://images.unsplash.com/photo-1514525253161-7a46d19cd819",
  "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14",
  "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4"
];

const Index = () => {
  const videoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
    
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    const particleCount = 20;
    const newParticles = [];
    
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 1 + Math.random() * 3,
        duration: 20 + Math.random() * 25
      });
    }
    
    setParticles(newParticles);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="min-h-screen mt-16 md:mt-0 text-white font-sans relative overflow-hidden">
      {/* Video Background */} 
      <div className="absolute w-full inset-0 z-0">
        <div className="absolute w-full inset-0 opacity-75 z-10"></div>
        <div className="absolute inset-0 z-5"></div>
      </div>
      
      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-teal-400"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              opacity: 0.15
            }}
            animate={{
              x: [0, Math.random() * 300 - 150],
              y: [0, Math.random() * 300 - 150],
              opacity: [0.15, 0.3, 0.15]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          />
        ))}
      </div>
      
      {/* Main Content */}
      <div className="flex flex-col-reverse md:flex-col items-start justify-center min-h-screen px-4 md:px-12 relative z-10">
        <div className="max-w-4xl flex flex-col justify-center mt-8 md:ml-6 lg:ml-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative text-left mb-4"
          >
   <motion.div
  className="font-bold custom-font tracking-tighter bg-clip-text text-transparent"
  style={{
    backgroundImage: "linear-gradient(to right, #00ffd5, #00ccb1, #009e88, #00ffd5)",
    backgroundSize: "200% 100%",
    fontSize: "clamp(2.5rem, 15vw, 5.5rem)",
    lineHeight: "0.8",
  }}
  animate={{ 
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]  
  }}
  transition={{ 
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut" 
  }}
>
  ENTERTAINMENT{' '}
  <span className="text-[2em] custom-font sm:text-[1.1em]">EVE</span>
</motion.div>
          </motion.div>
          
          <motion.h2 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-mono mb-4 text-teal-50 tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Where Vibes Meet Velocity
          </motion.h2>
          
          <motion.p 
            className="text-sm sm:text-base text-white/80 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 40 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Step into an evening crafted for pure delight — a perfect blend of rhythm, lights, and unforgettable moments.
            From soulful tunes to feel-good energy, it's more than an event — it's an experience.
          </motion.p>
          
          <motion.div 
            className="flex flex-row sm:flex-row justify-start gap-2 md:gap-4 mt-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <motion.a
              href="#past-performers"
              className="bg-transparent border-2 border-teal-400 text-teal-400 font-bold py-3 px-8 rounded-full text-center hover:bg-teal-400/10 transition-all backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Past Performers
            </motion.a>
            <motion.a
              href="#ticket"
              className="bg-teal-400 text-black font-bold py-3 px-10 rounded-full text-center hover:bg-teal-300 transition-all shadow-lg shadow-teal-500/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Tickets
            </motion.a>
          </motion.div>
          
          <div className="mt-8 md:p-0 p-1 pt-0 grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-4">
  {/* Date Card */}
  <motion.div 
    className="flex flex-col bg-black/40 backdrop-blur-xl p-4 sm:p-6 rounded-xl border border-teal-500/20 relative overflow-hidden group"
    whileHover={{ 
      scale: window.innerWidth >= 640 ? 1.03 : 1, 
      borderColor: "rgba(45, 212, 191, 0.4)",
    }}
  >
    {/* Card accent lines */}
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-teal-500/80 via-teal-400/50 to-transparent" />
    <div className="absolute bottom-0 right-0 w-2/3 h-px bg-gradient-to-l from-teal-500/80 to-transparent" />
    
    {/* Corner accents */}
    <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-teal-500/60" />
    <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-teal-500/60" />
    
    <span className="text-teal-400 text-sm font-medium mb-1 sm:mb-2">Date</span>
    <span className="font-bold text-lg sm:text-xl">May 15, 2025</span>
  </motion.div>
  
  {/* Time Card */}
  <motion.div 
    className="flex flex-col bg-black/40 backdrop-blur-xl p-4 sm:p-6 rounded-xl border border-teal-500/20 relative overflow-hidden group"
    whileHover={{ 
      scale: window.innerWidth >= 640 ? 1.03 : 1, 
      borderColor: "rgba(45, 212, 191, 0.4)",
    }}
  >
    {/* Card accent lines */}
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-teal-500/80 via-teal-400/50 to-transparent" />
    <div className="absolute bottom-0 right-0 w-2/3 h-px bg-gradient-to-l from-teal-500/80 to-transparent" />
    
    {/* Corner accents */}
    <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-teal-500/60" />
    <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-teal-500/60" />
    
    <span className="text-teal-400 text-sm font-medium mb-1 sm:mb-2">Time</span>
    <span className="font-bold text-lg sm:text-xl">7:00 PM</span>
  </motion.div>
  
  {/* Location Card */}
  <motion.div 
    className="flex flex-col bg-black/40 backdrop-blur-xl p-4 sm:p-6 rounded-xl border border-teal-500/20 relative overflow-hidden group"
    whileHover={{ 
      scale: window.innerWidth >= 640 ? 1.03 : 1, 
      borderColor: "rgba(45, 212, 191, 0.4)",
    }}
  >
    {/* Card accent lines */}
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-teal-500/80 via-teal-400/50 to-transparent" />
    <div className="absolute bottom-0 right-0 w-2/3 h-px bg-gradient-to-l from-teal-500/80 to-transparent" />
    
    {/* Corner accents */}
    <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-teal-500/60" />
    <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-teal-500/60" />
    
    <span className="text-teal-400 text-sm font-medium mb-1 sm:mb-2">Location</span>
    <span className="font-bold text-lg sm:text-xl">Main Auditorium</span>
  </motion.div>
</div>
        </div>
        
        {/* Mobile Gallery - Only visible on mobile/small screens */}
        <div className="block lg:hidden  w-full mt-12 overflow-hidden px-4  " style={{ height: '16rem' }}>
          <motion.div
            className="flex gap-4 overflow-hidden"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              }
            }}
            style={{ width: `${eventImages.length * 200}px` }}
          >
            {[...eventImages, ...eventImages].map((src, index) => (
              <motion.div
                key={index}
                className="p-0.5 rounded-xl flex-shrink-0"
                style={{
                  width: "15rem",
                  background: "linear-gradient(45deg, #00ffd5, #00ccb1, #009e88, #00806e)"
                }}
              >
                <img
                  src={src}
                  alt={`Event ${index % eventImages.length + 1}`}
                  className="w-full h-full object-cover rounded-xl"
                  style={{ aspectRatio: "3/4" }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Vertical Scrolling Gallery - Only visible on desktop */}
        <div className="hidden lg:block absolute  right-28 top-20 w-[32rem] overflow-hidden" style={{ height: '80vh' }}>
          <motion.div
            className="flex flex-col gap-6"
            animate={{ y: ["0%", "-50%"] }}
            transition={{
              y: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              }
            }}
          >
            {[...eventImages, ...eventImages].map((src, index) => (
              <motion.div
                key={index}
                className="p-0.5 w-full h-full rounded-xl"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
                style={{
                  background: "linear-gradient(45deg, #00ffd5, #00ccb1, #009e88, #00806e)"
                }}
              >
                <img
                  src={src}
                  alt={`Event ${index % eventImages.length + 1}`}
                  className="w-full h-full rounded-xl object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ 
            y: [0, 12, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          initial={{ opacity: 0 }}
        >
          <div className="border-2 border-teal-400/50 rounded-full p-2">
            <svg
              className="w-5 h-5 text-teal-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;