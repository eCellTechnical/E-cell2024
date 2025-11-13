"use client";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useState } from "react";

export default function FeatCard({
  icon = null,
  title = "Comprehensive Event Planning",
  subtitle = "Events bring people together for a shared experience and more",
  className = "",
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative rounded-lg p-8 bg-white/5 backdrop-blur-xl border transition-all duration-300 shadow-xl min-w-[300px] w-[300px] h-[300px] flex flex-col justify-end group ${className} ${
        isHovered ? 'border-[#9700d1]' : 'border-white/20'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated icon at top right */}
      <div className="absolute right-6 top-6">
        <motion.div 
          className="relative w-14 h-14 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg"
          animate={{ 
            y: [0, -8, 0],
          }}
          transition={{
            y: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          {/* Icon background glow on hover */}
          <motion.div
            className="absolute inset-0 rounded-lg"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              backgroundColor: '#9700d1'
            }}
          />
          <div className="text-white relative z-10">
            {icon || <div className="w-6 h-6 bg-white/20 rounded-sm" />}
          </div>
        </motion.div>
      </div>

      {/* Content at bottom */}
      <div>
        <h3 className="text-2xl font-bold text-white mb-2 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-gray-300 leading-relaxed opacity-80">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

FeatCard.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  className: PropTypes.string,
};
