"use client";
import { UsersRound, IndianRupee, Network } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import EventCard from "../../IdeateX/Components/EventCard";

export default function FeatSection() {
  const containerRef = useRef(null);

  return (
    <section
      ref={containerRef}
      className="relative py-16 md:py-0 bg-gradient-to-r from-[#211E3F] to-black text-white overflow-hidden min-h-screen"
    >
      {/* Background blur */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(151,0,209,0.25) 0%, rgba(109,40,217,0.08) 50%, transparent 80%)",
          filter: "blur(90px)",
        }}
      />

      {/* Floating shapes */}
      <motion.img
        src="https://expert-themes.com/wp/konfer/wp-content/themes/konfer/assets/images/icons/shape-twentysix.png"
        alt="shape-left"
        className="pointer-events-none absolute left-0 top-5 w-28 sm:w-36 md:w-48 opacity-30 mix-blend-screen z-10"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.img
        src="https://expert-themes.com/wp/konfer/wp-content/themes/konfer/assets/images/icons/shape-twentysix.png"
        alt="shape-right"
        className="pointer-events-none absolute right-0 top-64 w-32 sm:w-44 md:w-56 opacity-45 mix-blend-screen z-10"
        style={{ scaleX: -1 }}
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Sticky container */}
      <div className="sticky top-0 flex flex-col justify-center min-h-screen z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Header */}
          <div className="grid lg:grid-cols-2 pb-4 md:gap-8 gap-4 items-center">

            {/* Left Title Section */}
            <div className="lg:pr-6 text-center lg:text-left">
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-4 mx-auto lg:mx-0">
                <p className="text-[#e4affc] font-medium tracking-wider text-sm md:text-base">
                  PERKS OF IDEATEX
                </p>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-snug">
                WHY REGISTER FOR
                <br />
                <span className="text-[#e4affc]">IDEATEX 3.0</span>
              </h2>
            </div>

            {/* Right Description + Button */}
            <div className="md:pt-2 pt-0 flex flex-col items-center lg:items-end text-center lg:text-right">
              <p className="text-gray-300 text-base leading-relaxed max-w-sm">
                Make your mark, stand out, and drive change—this is your
                opportunity to turn ideas into impact!
              </p>

              <motion.button
                className="bg-[#9700d1] mt-4 hover:bg-[#b800ff] text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-lg"
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open("/ideatex/register")}
              >
                REGISTER NOW
              </motion.button>
            </div>
          </div>

          {/* Event Cards */}
          <div className="flex flex-col md:flex-row items-center w-full gap-6 justify-center mt-6 md:mt-12 p-4 md:p-0">
            <EventCard
              icon={<UsersRound className="w-12 h-12 md:w-16 md:h-16" />}
              title="Mentorship"
              description="Receive invaluable feedback on your ideas from experienced mentors."
            />

            <EventCard
              icon={<IndianRupee className="w-12 h-12 md:w-16 md:h-16" />}
              title="Funding"
              description="Boost your chances of gaining financial support for your project."
            />

            <EventCard
              icon={<Network className="w-12 h-12 md:w-16 md:h-16" />}
              title="Networking"
              description="Build connections with seasoned entrepreneurs and investors."
            />
          </div>

        </div>
      </div>
    </section>
  );
}
