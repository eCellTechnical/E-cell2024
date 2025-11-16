"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { scrollY } = useScroll();
  const backgroundOpacity = useTransform(scrollY, [0, 100], [0.1, 0.1]);
  const blurIntensity = useTransform(scrollY, [0, 100], [0.9, 0.9]);

  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent background scroll when sidebar is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  // Smooth scroll with offset
  const handleSmoothScroll = useCallback((e, id) => {
    e.preventDefault();

    const section = document.querySelector(id);
    if (section) {
      const headerOffset = 100;
      const position =
        section.getBoundingClientRect().top +
        window.scrollY -
        headerOffset;

      window.scrollTo({ top: position, behavior: "smooth" });
    }

    setMenuOpen(false);
  }, []);

  return (
    <motion.header
      style={{
        backgroundColor: `rgba(147, 51, 234, ${backgroundOpacity})`,
        backdropFilter: `blur(${blurIntensity}rem)`,
      }}
      className="fixed top-0 z-50 w-full py-3 md:py-4 px-4 md:px-6 flex justify-center"
    >
      <motion.div className="w-full max-w-7xl bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-md flex items-center justify-between px-4 md:px-6 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/assets/ideatex-logo.png" alt="Ideatex Logo" className="w-8" />
         <img src="https://res.cloudinary.com/jatinn/image/upload/v1758476815/Secondary_Darkbglogoecell-removebg-preview_1_y593u3.png" alt="Ideatex Logo" className="w-12" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-[16px] font-medium text-white">
          <a
href="/ideatex#about"
            onClick={(e) => handleSmoothScroll( "/ideatex#about")}
            className="hover:text-purple-200 transition"
          >
            About
          </a>

          <a
            href="/ideatex#sponsors"
            onClick={(e) => handleSmoothScroll( "/ideatex#sponsors")}
            className="hover:text-purple-200 transition"
          >
            Sponsors
          </a>

          <a
            href="/ideatex#speakers"
            onClick={(e) => handleSmoothScroll( "/ideatex#speakers")}
            className="hover:text-purple-200 transition"
          >
            Speakers
          </a>

          <a
            href="/ideatex#faq"
            onClick={(e) => handleSmoothScroll( "/ideatex#faq")}
            className="hover:text-purple-200 transition"
          >
            FAQ
          </a>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4">
          {isAuthenticated ? (
            <div className="flex gap-4">
              <button
                className="bg-[#9700d1] hover:bg-[#b800ff] text-white font-semibold px-8 py-3 rounded-full"
                onClick={() => navigate("/ideatex/dashboard")}
              >
                DASHBOARD
              </button>

              <button
                className="bg-white text-[#9700d1] font-semibold px-6 py-3 rounded-full"
                onClick={() => {
                  logout();
                  navigate("/ideatex/login");
                }}
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <button
                className="bg-white text-[#9700d1] font-semibold px-8 py-3 rounded-full"
                onClick={() => navigate("/ideatex/login")}
              >
                SIGN IN
              </button>

              <button
                className="bg-[#9700d1] hover:bg-[#b800ff] text-white font-semibold px-8 py-3 rounded-full"
                onClick={() => navigate("/ideatex/register")}
              >
                REGISTER
              </button>
            </>
          )}
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Sidebar */}
      {menuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 80, damping: 15 }}
          className="
            fixed top-0 right-0 h-full w-3/4 sm:w-1/2 
            bg-[#1a1a2e]/95 backdrop-blur-md shadow-lg z-50 
            flex flex-col items-center pt-24 space-y-6 text-white 
            overflow-y-auto
          "
        >
          {/* Close button */}
          <button className="absolute top-4 right-4" onClick={() => setMenuOpen(false)}>
            <X size={24} className="text-white" />
          </button>

          <a className="text-lg" href="#about" onClick={(e) => handleSmoothScroll(e, "#about")}>
            About
          </a>
          <a className="text-lg" href="#sponsors" onClick={(e) => handleSmoothScroll(e, "#sponsors")}>
            Sponsors
          </a>
          <a className="text-lg" href="#speakers" onClick={(e) => handleSmoothScroll(e, "#speakers")}>
            Speakers
          </a>
          <a className="text-lg" href="#faq" onClick={(e) => handleSmoothScroll(e, "#faq")}>
            FAQ
          </a>

          {/* Buttons */}
          <div className="flex flex-col gap-4 mt-6 w-4/5">
            {isAuthenticated ? (
              <>
                <button
                  className="bg-[#9700d1] hover:bg-[#b800ff] text-white font-semibold px-6 py-3 rounded-full"
                  onClick={() => {
                    navigate("/ideatex/dashboard");
                    setMenuOpen(false);
                  }}
                >
                  DASHBOARD
                </button>

                <button
                  className="bg-white text-[#9700d1] font-semibold px-6 py-3 rounded-full"
                  onClick={() => {
                    logout();
                    navigate("/ideatex/login");
                    setMenuOpen(false);
                  }}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  className="bg-white text-[#9700d1] font-semibold px-6 py-3 rounded-full"
                  onClick={() => {
                    navigate("/ideatex/login");
                    setMenuOpen(false);
                  }}
                >
                  SIGN IN
                </button>

                <button
                  className="bg-[#9700d1] hover:bg-[#b800ff] text-white font-semibold px-6 py-3 rounded-full"
                  onClick={() => {
                    navigate("/ideatex/register");
                    setMenuOpen(false);
                  }}
                >
                  REGISTER
                </button>
              </>
            )}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
