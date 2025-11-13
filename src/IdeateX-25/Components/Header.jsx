"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useCallback } from "react";

const Header = () => {
  const { scrollY } = useScroll();
  const backgroundOpacity = useTransform(scrollY, [0, 100], [0.1, 0.1]);
  const blurIntensity = useTransform(scrollY, [0, 100], [0.9, 0.9]);

  // Smooth scroll handler with offset for fixed header
  const handleSmoothScroll = useCallback((e, id) => {
    e.preventDefault();
    const section = document.querySelector(id);
    if (section) {
      const headerOffset = 100; // adjust based on your header height
      const sectionPosition =
        section.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: sectionPosition, behavior: "smooth" });
    }
  }, []);

  return (
    <motion.header
      style={{
        backgroundColor: `rgba(147, 51, 234, ${backgroundOpacity})`,
        backdropFilter: `blur(${blurIntensity}rem)`,
      }}
      className="fixed top-0 z-50 w-full py-4 px-6 flex justify-center"
    >
      <motion.div
        className="w-full max-w-7xl bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-md flex items-center justify-between px-6 py-3"
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Logo */}
        <motion.div className="flex items-center space-x-2">
          <div className="flex items-center gap-2">
            <img
              src="/assets/ideatex-logo.png"
              alt="Ideatex Logo"
              className="w-8"
            />
            <h1 className="text-2xl font-bold text-white">IDEATEX</h1>
          </div>
        </motion.div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 text-[16px] font-medium text-white">
          <motion.a
            href="#about"
            onClick={(e) => handleSmoothScroll(e, "#about")}
            className="hover:text-purple-200 transition-colors duration-200 cursor-pointer"
          >
            About
          </motion.a>
          <motion.a
            href="#sponsors"
            onClick={(e) => handleSmoothScroll(e, "#sponsors")}
            className="hover:text-purple-200 transition-colors duration-200 cursor-pointer"
          >
            Sponsors
          </motion.a>
          <motion.a
            href="#speakers"
            onClick={(e) => handleSmoothScroll(e, "#speakers")}
            className="hover:text-purple-200 transition-colors duration-200 cursor-pointer"
          >
            Speakers
          </motion.a>
          <motion.a
            href="#faq"
            onClick={(e) => handleSmoothScroll(e, "#faq")}
            className="hover:text-purple-200 transition-colors duration-200 cursor-pointer"
          >
            FAQ
          </motion.a>
        </nav>

        {/* Button */}
        <motion.button
          className="bg-[#9700d1] hover:bg-[#b800ff] text-white font-semibold px-8 py-4 rounded-full transition-all duration-200"
          whileTap={{ scale: 0.95 }}
          onClick={() => window.open("/ideatex/register", "_blank")}
        >
          REGISTER NOW
        </motion.button>
      </motion.div>
    </motion.header>
  );
};

export default Header;
