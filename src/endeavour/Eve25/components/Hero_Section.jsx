import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

// Updated image items with better quality event images
const eventImages = [
  "https://in.bmscdn.com/events/moviecard/ET00429769.jpg",
  "https://in.bmscdn.com/events/moviecard/ET00440583.jpg",
  "https://images.unsplash.com/photo-1514525253161-7a46d19cd819",
  "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14",
  "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4"
];

// Custom gradient background component with framer motion
const GradientBorder = ({ children, className }) => {
  return (
    <motion.div
      className={`p-0.5 ${className}`}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
      style={{
        background: "linear-gradient(45deg, #00ccb1, #7b61ff, #ffc414, #1ca0fb)"
      }}
    >
      {children}
    </motion.div>
  );
};

// Vertical Scrolling Gallery for desktop only
const VerticalScroller = () => {
  return (
    <div className="hidden lg:block absolute right-28 top-20 w-[32rem] overflow-hidden" style={{ height: '80vh' }}>
      <motion.div
        className="flex flex-col gap-6"
        animate={{ y: ["0%", "-50%"] }}
        transition={{
          y: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          }
        }}
      >
        {/* Double the images to create seamless loop */}
        {[...eventImages, ...eventImages].map((src, index) => (
          <GradientBorder key={index} className="w-full h-full rounded-xl">
            <img
              src={src}
              alt={`Event ${index % eventImages.length + 1}`}
              className="w-full h-full rounded-xl object-cover"
            />
          </GradientBorder>
        ))}
      </motion.div>
    </div>
  );
};

// Enhanced Gradient Text component
const GradientText = ({ children, colors, className }) => {
  return (
    <motion.div
      className={`${className} bg-clip-text text-transparent`}
      style={{
        backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
        backgroundSize: "200% 100%",
      }}
      animate={{ 
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]  
      }}
      transition={{ 
        duration: 5, 
        repeat: Infinity,
        ease: "linear" 
      }}
    >
      {children}
    </motion.div>
  );
};

// Floating Particles Background component
const ParticlesBackground = () => {
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    const particleCount = 15;
    const newParticles = [];
    
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 1 + Math.random() * 2,
        duration: 15 + Math.random() * 20
      });
    }
    
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-green-400 opacity-20"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`
          }}
          animate={{
            x: [0, Math.random() * 200 - 100],
            y: [0, Math.random() * 200 - 100],
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
  );
};

const LandingPage = () => {
  const videoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set video properties when component mounts
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
    
    // Simple animation timing
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen text-white font-sans relative overflow-hidden bg-black">
      {/* Video Background */} 
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
        <iframe
          className="absolute w-full h-full object-cover"
          src="https://www.youtube.com/embed/4qz6x8y3tNw?autoplay=1&controls=0"
          title="Background Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        {/* Green tint overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/30 via-black/50 to-black/70 z-5"></div>
      </div>
      
      {/* Particles effect */}
      <ParticlesBackground />
      
      {/* Hero Section */}
      <div className="flex flex-col items-start justify-center min-h-screen px-4 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto md:mx-0 md:ml-6 lg:ml-16 pt-20 md:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative text-left mb-4"
          >
            <GradientText
              colors={["#00FCB8", "#00c2a8", "#099499", "#00FCB8"]}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter"
            >
              ENTERTAINMENT EVE
            </GradientText>
          </motion.div>
          
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-mono mb-6 text-white tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Where Vibes Meet Velocity
          </motion.h2>
          
          <motion.p 
            className="text-base sm:text-lg mb-8 text-gray-200 max-w-xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 40 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            Step into an evening crafted for pure delight — a perfect blend of rhythm, lights, and unforgettable moments.
            From soulful tunes to feel-good energy, it's more than an event — it's an experience.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-start gap-4 mt-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            <motion.a
              href="#past-performers"
              className="bg-transparent border-2 border-green-400 text-white font-bold py-3 px-6 rounded-full text-center hover:bg-green-400/20 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Past Performers
            </motion.a>
            <motion.a
              href="#ticket"
              className="bg-green-500 text-black font-bold py-3 px-8 rounded-full text-center hover:bg-green-400 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Tickets
            </motion.a>
          </motion.div>
          
          {/* Event info */}
          <motion.div
            className="mt-10 flex flex-wrap gap-6 md:gap-8"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 60 }}
            transition={{ duration: 0.7, delay: 1.1 }}
          >
            <div className="flex flex-col bg-black/30 backdrop-blur-md p-4 rounded-xl border border-green-500/30">
              <span className="text-green-400 text-sm">Date</span>
              <span className="font-bold">May 15, 2025</span>
            </div>
            
            <div className="flex flex-col bg-black/30 backdrop-blur-md p-4 rounded-xl border border-green-500/30">
              <span className="text-green-400 text-sm">Time</span>
              <span className="font-bold">7:00 PM</span>
            </div>
            
            <div className="flex flex-col bg-black/30 backdrop-blur-md p-4 rounded-xl border border-green-500/30">
              <span className="text-green-400 text-sm">Location</span>
              <span className="font-bold">Main Auditorium</span>
            </div>
          </motion.div>
        </div>
        
        {/* Vertical Scrolling Gallery - only visible on large screens */}
        <VerticalScroller />
        
        {/* Scroll down indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
        >
          <div className="border-2 border-green-500 rounded-full p-2">
            <svg
              className="w-5 h-5 text-green-500"
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

export default LandingPage;