import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import six from "../../assets/Ideatex25/six.jpeg";
import tkt from "./tkt.png"
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
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
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
  <div className="flex flex-col space-y-6">

    {/* Mobile: LOGO AT TOP */}
    <div className="block md:hidden w-full flex justify-center">
      <img
        src="/assets/ideatex-logo.png"
        alt="logo"
        className="w-32"
      />
    </div>

    {/* Desktop Header */}
    <div className="hidden md:flex flex-row w-full justify-between items-center text-left gap-4">
      <h2 className="text-6xl font-extrabold leading-tight">KIET E-Cell&apos;s</h2>

      <div className="bg-white rounded-full flex items-center ">
        <button className="text-black font-semibold px-4 text-center py-3 text-lg rounded-full">
          28 November 2025
        </button>

        <button
          className="bg-gradient-to-r from-[#9700d1]/60 via-[#9700d1]/70 to-[#9700d1]/60 backdrop-blur-md hover:bg-[#b800ff] transition-all text-white font-semibold px-8 py-3 rounded-full text-lg shadow-md"
          onClick={() => window.open("/ideatex/register")}
        >
          Register Now
        </button>
      </div>
    </div>

    {/* Mobile: TITLE + DESC */}
    <div className="md:hidden text-center flex flex-col items-center">
      <h3 className="text-5xl text-[#e4affc] font-extrabold mt-4">IDEATEX 3.0</h3>

      <p className="text-base text-gray-200 mt-3 leading-relaxed max-w-sm">
        Designed to ignite innovation, creativity, and business acumen,
        connecting innovators, investors, and mentors to transform ideas
        into real ventures.
      </p>
    </div>

    {/* Desktop Bottom Row */}
    <div className="hidden md:flex flex-row items-center justify-center gap-10">
   <div className="overflow-hidden rounded-lg w-[27rem] transition-transform duration-300 hover:rotate-2 hover:scale-105 shadow-lg hover:shadow-purple-500/10 ">
  <img
    src={tkt}
    alt="ticket"
    className="w-full h-full object-cover  transition-transform duration-300"
  />
</div>

      <div className="flex flex-row items-center gap-8">
        <img
          src="/assets/ideatex-logo.png"
          alt="Mic Icon"
          className="w-40"
        />
        <div>
          <h3 className="text-8xl text-[#e4affc] font-extrabold">IDEATEX 3.0</h3>
          <p className="text-lg text-gray-200 mt-3 max-w-2xl">
            Designed to ignite innovation, creativity, and business acumen,
            the event brings together innovators, investors, and mentors
            to exchange ideas and transform concepts into scalable ventures.
          </p>
        </div>
      </div>
    </div>

    {/* Mobile: SAME CTA UI AS DESKTOP */}
    <div className="md:hidden flex justify-center mt-6">
      <div className="bg-white rounded-full flex items-center   shadow-lg">
        <button className="text-black font-semibold px-4 py-3 text-base rounded-full">
          28 November 2025
        </button>

        <button
          className="bg-gradient-to-r from-[#9700d1]/60 via-[#9700d1]/70 to-[#9700d1]/60 backdrop-blur-md hover:bg-[#b800ff] transition-all text-white font-semibold px-6 py-3 rounded-full text-base shadow-md"
          onClick={() => window.open("/ideatex/register")}
        >
          Register Now
        </button>
      </div>
    </div>
  </div>
</div>


      {/* Expanding image */}
      <div className="w-full flex justify-center mt-4 md:mt-8 pb-0">
        <motion.div
          ref={ref}
          className="relative object-cover overflow-hidden w-[90%] md:w-full"
          style={{
            backgroundImage:
              `url(${six})`,
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
        <div className="
  absolute bottom-0 left-0 right-0 
  bg-gradient-to-r from-[#9700d1]/10 via-[#7700a8]/40 to-[#9700d1]/50 
  backdrop-blur-md rounded-xl md:rounded-full 
  mx-auto mb-6 md:mb-8 
  max-w-[95%] md:max-w-6xl 
  py-4 md:py-6 px-4 md:px-12 
  flex flex-col md:flex-row 
  items-center md:items-center 
  justify-between 
  border-2 border-white/10 
  shadow-2xl 
  space-y-4 md:space-y-0
">
  
  {/* Left Section */}
  <div className="text-center md:text-left">
    <p className="text-white/90 text-sm sm:text-base md:text-lg font-medium mb-1">
      29 November 2025
    </p>
    <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold">
      Counting Time...
    </h3>
  </div>

  {/* Countdown Section */}
<div className="flex items-center justify-center gap-4 sm:gap-6 text-white">
  {["days", "hours", "minutes", "seconds"].map((unit, index) => (
    <div
      key={unit}
      className="
        flex flex-col md:flex-row 
        items-center md:items-end 
        gap-0 md:gap-2
      "
    >
      {/* Number */}
      <span className="text-3xl sm:text-4xl md:text-6xl font-bold leading-none">
        {String(timeLeft[unit]).padStart(2, "0")}
      </span>

      {/* Unit label (below on mobile, right side on desktop) */}
      <span className="
        text-[10px] sm:text-xs md:text-sm 
        uppercase tracking-wider 
        mt-1 md:mt-0
        text-white/80
      ">
        {unit.toUpperCase()}
      </span>

      {/* Separator for desktop */}
      {index < 3 && (
        <span className="hidden md:inline text-5xl font-bold leading-none mx-2">
          :
        </span>
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
