"use client";
import { motion } from "framer-motion";
import abhishek_singh from "../../assets/speakers/people/sandeep.jpg";
import aditi from "../../assets/speakers/people/aditi.jpg";
import anmol from "../../assets/speakers/people/anmol.jpeg";
import divya from "../../assets/speakers/people/divya.jpg";
import himanshi_singh from "../../assets/speakers/people/himanshi_singh.jpeg";

const speakers = [
  {
    id: 1,
    name: "Sandeep Singh",
    role: "Founder & CEO, GFG",
    img: abhishek_singh,
  },
  {
    id: 2,
    name: "Aditi Sharma",
    role: "Innovation Lead",
    img: aditi,
  },
  {
    id: 3,
    name: "Anmol Gupta",
    role: "Startup Advisor",
    img: anmol,
  },
  {
    id: 4,
    name: "Divya Patel",
    role: "Technology Expert",
    img: divya,
  },
  {
    id: 5,
    name: "Himanshi Singh",
    role: "Business Strategist",
    img: himanshi_singh,
  },
];

export default function PastSpeakers() {
  return (
    <section
      className="relative bg-gradient-to-r from-[#211E3F] to-black text-white py-12 px-6"
      id="speakers"
    >
      {/* Background blur */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(151,0,209,0.18) 0%, rgba(109,40,217,0.06) 40%, transparent 80%)",
          filter: "blur(80px)",
        }}
      />

      {/* Floating shape */}
      <motion.img
        src="https://expert-themes.com/wp/konfer/wp-content/themes/konfer/assets/images/icons/shape-twentysix.png"
        alt="shape-left"
        className="pointer-events-none absolute left-0 top-0 w-36 md:w-48 opacity-30 mix-blend-screen z-10"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-0 max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-4">
              <p className="text-[#e4affc] font-medium tracking-wider text-sm md:text-base">
                JOIN OUR EVENT
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              OUR <span className="text-[#e4affc]">PAST SPEAKERS</span>
            </h1>
          </motion.div>
        </div>

        {/* Main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* 🔥 Big top card (mobile first, desktop left) */}
          <div className="order-1 lg:order-none lg:col-span-1">
            <motion.div
              initial={{ scale: 1 }}
              className="group rounded-lg overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl"
            >
              <div className="relative w-full h-[70vh] lg:h-[80vh] overflow-hidden">
                <img
                  src={speakers[0].img}
                  alt={speakers[0].name}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Shine effect */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out">
                    <div
                      className="absolute -top-1/2 -left-1/2 w-[150%] h-[200%]
                      bg-gradient-to-tr from-transparent via-white/30 to-transparent
                      rotate-[25deg]
                      translate-x-[-150%]
                      blur-[2px]
                      transition-transform duration-700 ease-in-out
                      group-hover:translate-x-[200%]"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-md p-4 border border-white/10">
                <h3 className="text-xl font-bold text-white">
                  {speakers[0].name}
                </h3>
                <p className="text-sm text-gray-300">{speakers[0].role}</p>
              </div>
            </motion.div>
          </div>

          {/* 🔥 2×2 grid (mobile bottom, desktop right) */}
          <div className="order-2 lg:order-none lg:col-span-2 grid grid-cols-2 gap-6">
            {speakers.slice(1).map((s) => (
              <motion.div
                key={s.id}
                initial={{ y: 0 }}
                className="group rounded-lg overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg flex flex-col justify-end"
              >
                <div className="relative w-full h-56 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.name}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Shine effect */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                    <div className="absolute top-0 -left-[40%] h-full w-1/4 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm transform transition-transform duration-300 group-hover:translate-x-[220%]" />
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-md p-4 border border-white/10">
                  <h4 className="text-lg font-semibold text-white">{s.name}</h4>
                  <p className="text-sm text-gray-300">{s.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
