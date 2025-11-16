import { motion } from "framer-motion";
import four from "../../assets/Ideatex25/four.jpeg";

export default function EventSection() {
  return (
    <section className="relative mt-16 my-12 bg-gradient-to-br from-[#211E3F]/80 via-[#1a1733]/80 to-black/80 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl text-white py-16  px-6 sm:px-10 lg:px-16 overflow-hidden w-[83vw] mx-auto">

      {/* Top gentle purple lamp */}
      <div
        className="absolute left-1/2 -translate-x-1/2 -top-24 pointer-events-none -z-10"
        style={{
          width: "60%",
          height: "420px",
          background:
            "radial-gradient(ellipse at top, rgba(151,0,209,0.15) 0%, rgba(119,0,168,0.08) 30%, transparent 60%)",
          filter: "blur(60px)",
        }}
      />

      {/* Center subtle purple lamp */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-10"
        style={{
          width: "50%",
          height: "360px",
          background:
            "radial-gradient(ellipse at center, rgba(151,0,209,0.12) 0%, rgba(119,0,168,0.06) 35%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-start" id="about">

          {/* Left hero */}
          <div className="lg:pr-6 gap-4 text-center lg:text-left">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-4 mx-auto lg:mx-0">
              <p className="text-[#e4affc] font-medium tracking-wider text-sm md:text-base">
                ABOUT IDEATEX
              </p>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              WHY SO MUCH BUZZ?  
              <br />
              <span className="text-[#e4affc]">IDEATEX 3.0!</span>
            </h2>

            <motion.button
              className="bg-[#9700d1] mt-6 hover:bg-[#b800ff] text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-lg mx-auto lg:mx-0"
              onClick={() => window.open("/ideatex/register", "_blank")}
              whileTap={{ scale: 0.95 }}
            >
              REGISTER NOW
            </motion.button>
          </div>

          {/* Right descriptive column */}
          <div className="pt-2 text-center lg:text-left">
            <p className="text-gray-300 text-base leading-relaxed">
              Participants get the unique opportunity to showcase their vision,
              receive real-world feedback, and connect with the startup 
              ecosystem through mentoring and incubation support.

              <br /><br />

              In an era where innovation drives progress, IdeateX 3.0 stands as
              a catalyst for entrepreneurial learning and growth, inspiring young minds
              to turn ideas into impactful realities.
            </p>
          </div>
        </div>

        {/* divider */}
        <div className="mt-8 border-t border-white/10" />

        {/* Large image */}
        <div className="mt-8">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={four}
              alt="event"
              className="w-full h-48 sm:h-64 md:h-80 object-cover object-top rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#211E3F]/80 via-transparent to-transparent rounded-2xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
