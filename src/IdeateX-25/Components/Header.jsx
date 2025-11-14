"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { scrollY } = useScroll();
  const backgroundOpacity = useTransform(scrollY, [0, 100], [0.1, 0.1]);
  const blurIntensity = useTransform(scrollY, [0, 100], [0.9, 0.9]);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const [menuOpen, setMenuOpen] = useState(false);

  // Smooth scroll handler with offset for fixed header
  const handleSmoothScroll = useCallback((e, id) => {
    e.preventDefault();
    const section = document.querySelector(id);
    if (section) {
      const headerOffset = 100;
      const sectionPosition =
        section.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: sectionPosition, behavior: "smooth" });
      setMenuOpen(false); // close menu on click
    }
  }, []);

  return (
    <motion.header
      style={{
        backgroundColor: `rgba(147, 51, 234, ${backgroundOpacity})`,
        backdropFilter: `blur(${blurIntensity}rem)`,
      }}
      className="fixed top-0 z-50 w-full py-3 md:py-4 px-4 md:px-6 flex justify-center"
    >
      <motion.div
        className="w-full max-w-7xl bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-md flex items-center justify-between px-4 md:px-6 py-3"
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/assets/ideatex-logo.png" alt="Ideatex Logo" className="w-8" />
          <h1 className="text-xl md:text-2xl font-bold text-white">IDEATEX</h1>
        </div>

        {/* Desktop Navigation */}
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

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4">
          {isAuthenticated ? (
            <motion.button
              className="bg-[#9700d1] hover:bg-[#b800ff] text-white font-semibold px-8 py-3 rounded-full transition-all duration-200"
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/ideatex/dashboard")}
            >
              DASHBOARD
            </motion.button>
          ) : (
            <>
              <motion.button
                className="bg-white text-[#9700d1] font-semibold px-8 py-3 rounded-full transition-all duration-200"
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/ideatex/login")}
              >
                SIGN IN
              </motion.button>
              <motion.button
                className="bg-[#9700d1] hover:bg-[#b800ff] text-white font-semibold px-8 py-3 rounded-full transition-all duration-200"
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/ideatex/register")}
              >
                REGISTER
              </motion.button>
            </>
          )}
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>
      </motion.div>

      {/* Mobile Sidebar */}
      {menuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 80, damping: 15 }}
          className="fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-[#1a1a2e]/95 backdrop-blur-md shadow-lg z-50 flex flex-col items-center pt-24 space-y-6 text-white"
        >
          {/* Close Button */}
          <div className="absolute top-4 right-4">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-white hover:text-purple-300 transition-colors focus:outline-none"
            >
              <X size={24} />
            </button>
          </div>
          <motion.a
            href="#about"
            onClick={(e) => handleSmoothScroll(e, "#about")}
            className="text-lg hover:text-purple-300 transition-colors"
          >
            About
          </motion.a>
          <motion.a
            href="#sponsors"
            onClick={(e) => handleSmoothScroll(e, "#sponsors")}
            className="text-lg hover:text-purple-300 transition-colors"
          >
            Sponsors
          </motion.a>
          <motion.a
            href="#speakers"
            onClick={(e) => handleSmoothScroll(e, "#speakers")}
            className="text-lg hover:text-purple-300 transition-colors"
          >
            Speakers
          </motion.a>
          <motion.a
            href="#faq"
            onClick={(e) => handleSmoothScroll(e, "#faq")}
            className="text-lg hover:text-purple-300 transition-colors"
          >
            FAQ
          </motion.a>

          <div className="flex flex-col gap-4 mt-6 w-4/5">
            {isAuthenticated ? (
              <motion.button
                className="bg-[#9700d1] hover:bg-[#b800ff] text-white font-semibold px-6 py-3 rounded-full w-full transition-all duration-200"
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  navigate("/ideatex/dashboard");
                  setMenuOpen(false);
                }}
              >
                DASHBOARD
              </motion.button>
            ) : (
              <>
                <motion.button
                  className="bg-white text-[#9700d1] font-semibold px-6 py-3 rounded-full w-full transition-all duration-200"
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    navigate("/ideatex/login");
                    setMenuOpen(false);
                  }}
                >
                  SIGN IN
                </motion.button>
                <motion.button
                  className="bg-[#9700d1] hover:bg-[#b800ff] text-white font-semibold px-6 py-3 rounded-full w-full transition-all duration-200"
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    navigate("/ideatex/register");
                    setMenuOpen(false);
                  }}
                >
                  REGISTER
                </motion.button>
              </>
            )}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
