import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const Hero = () => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: false,
    amount: 0.3,
  });

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-11-29T00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative bg-gradient-to-r from-[#211E3F] to-black text-white overflow-visible pt-36 md:pt-48"
      id="home"
    >
      {/* floating corner shapes */}
      <motion.img
        src="https://expert-themes.com/wp/konfer/wp-content/themes/konfer/assets/images/icons/shape-twentysix.png"
        alt="shape-left"
        className="pointer-events-none absolute left-0 top-0 w-24 md:w-36 opacity-30 mix-blend-screen z-10"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.img
        src="https://expert-themes.com/wp/konfer/wp-content/themes/konfer/assets/images/icons/shape-twentysix.png"
        alt="shape-right"
        className="pointer-events-none absolute right-0 top-40 md:top-60 w-32 md:w-56 opacity-45 mix-blend-screen z-10"
        style={{ scaleX: -1, rotate: 0 }}
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content section */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full relative z-20 pb-10 md:pb-16">
        <div className="flex flex-col space-y-10">
          {/* Top Row */}
          <div className="flex flex-col md:flex-row w-full justify-between items-center text-center md:text-left gap-4">
            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
              KIET E-Cell&apos;s
            </h2>
            <button className="bg-gradient-to-r from-[#9700d1]/60 via-[#9700d1]/70 to-[#9700d1]/60 backdrop-blur-md hover:bg-[#b800ff] transition-all text-white font-semibold px-6 md:px-8 py-2.5 md:py-3 rounded-full text-base md:text-lg shadow-md">
              28 November 2025
            </button>
          </div>

          {/* Bottom Row */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10">
            {/* Speaker Image */}
            <div className="rounded-2xl overflow-hidden border-2 border-white/70 shadow-lg w-60 md:w-auto">
              <img
                src="https://expert-themes.com/wp/konfer/wp-content/uploads/2025/03/3-1.jpg"
                alt="Speaker"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Conference Text */}
            <div className="flex flex-col md:flex-row justify-center items-center text-center md:text-left gap-4 md:gap-8">
              <img
                src="/assets/ideatex-logo.png"
                alt="Mic Icon"
                className="w-32 md:w-40 mx-auto md:mx-0"
              />
              <div>
                <h3 className="text-5xl sm:text-6xl md:text-8xl text-[#e4affc] font-extrabold">
                  IDEATEX 3.0
                </h3>
                <p className="text-base sm:text-lg text-gray-200 mt-3 leading-relaxed max-w-md md:max-w-2xl mx-auto md:mx-0">
                  Designed to ignite innovation, creativity, and business acumen,
                  the event brings together innovators, investors, and mentors to
                  exchange ideas and transform concepts into scalable ventures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expanding image */}
      <div className="w-full flex justify-center mt-10 md:mt-8 pb-0">
        <motion.div
          ref={ref}
          className="relative object-cover overflow-hidden w-[90%] md:w-full"
          style={{
            backgroundImage:
              "url('https://expert-themes.com/wp/konfer/wp-content/uploads/2025/03/countdown2-1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          animate={
            inView
              ? {
                  height: "60vh",
                  width: "100vw",
                  borderRadius: "0rem",
                }
              : {
                  height: "50vh",
                  width: "90%",
                  borderRadius: "1rem",
                }
          }
        >
          {/* Countdown Timer */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-[#9700d1]/50 via-[#7700a8]/40 to-[#9700d1]/50 backdrop-blur-md rounded-xl md:rounded-full mx-auto mb-6 md:mb-8 max-w-[95%] md:max-w-6xl py-4 md:py-6 px-4 md:px-12 flex flex-col md:flex-row items-center justify-between border-2 border-white/20 shadow-2xl space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-white/90 text-base md:text-lg font-medium mb-1">
                29 November 2025
              </p>
              <h3 className="text-white text-2xl md:text-3xl font-bold">
                Counting Time...
              </h3>
            </div>

            <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 text-white">
              {["days", "hours", "minutes", "seconds"].map((unit, index) => (
                <div key={unit} className="flex flex-col items-center">
                  <span className="text-4xl sm:text-5xl md:text-6xl font-bold">
                    {String(timeLeft[unit]).padStart(2, "0")}
                  </span>
                  <span className="text-xs sm:text-sm uppercase tracking-wider mt-1 text-white/80">
                    {unit.toUpperCase()}
                  </span>
                  {index < 3 && (
                    <span className="hidden md:inline text-5xl font-bold mx-2">:</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
