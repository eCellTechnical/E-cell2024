import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const Hero = () => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: false, // Allow animation to reverse when scrolling back up
    amount: 0.3,
  });

  // Countdown timer state
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
    <section className="relative bg-gradient-to-r from-[#211E3F] to-black text-white overflow-visible pt-48" id="home">
      {/* floating corner shapes */}
      <motion.img
        src="https://expert-themes.com/wp/konfer/wp-content/themes/konfer/assets/images/icons/shape-twentysix.png"
        alt="shape-left"
        className="pointer-events-none absolute left-0 top-0 w-36 md:w-48 opacity-30 mix-blend-screen z-10"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.img
        src="https://expert-themes.com/wp/konfer/wp-content/themes/konfer/assets/images/icons/shape-twentysix.png"
        alt="shape-right"
        className="pointer-events-none absolute right-0 top-60 w-44 md:w-56 opacity-45 mix-blend-screen z-10"
        style={{ scaleX: -1, rotate: 0 }}
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content section */}
      <div className="max-w-7xl mx-auto px-6 w-full relative z-20 pb-16">
        <div className="flex flex-col space-y-10">
          {/* Top Row */}
          <div className="flex w-full justify-between items-center">
            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
              KIET ECell&apos;s
            </h2>
            <button className="bg-gradient-to-r from-[#9700d1]/60 via-[#9700d1]/70 to-[#9700d1]/60 backdrop-blur-md hover:bg-[#b800ff] transition-all text-white font-semibold px-8 py-3 rounded-full text-lg shadow-md">
              29 November 2025
            </button>
          </div>

          {/* Bottom Row */}
          <div className="flex items-center gap-10">
            {/* Speaker Image */}
            <div className=" rounded-2xl overflow-hidden border-2 border-white/70 shadow-lg">
              <img
                src="https://expert-themes.com/wp/konfer/wp-content/uploads/2025/03/3-1.jpg"
                alt="Speaker"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Conference Text */}
            <div className="flex justify-center items-center">
              <div>
                <img
                  src="/assets/ideatex-logo.png"
                  alt="Mic Icon"
                  className=" w-40 mr-4 "
                />
              </div>
              <div>
                <h3 className="text-8xl text-[#e4affc] font-extrabold">IDEATEX 3.0</h3>
                <p className="text-lg text-gray-200 mt-4 leading-relaxed max-w-2xl">
                  There are many variations of passages of Lorem Ipsum
                  available, but majority have suffered alteration in some form,
                  by injected humour, or random missed words.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expanding image - AFTER content in document flow */}
      <div className="w-full flex justify-center mt-8 pb-0">
        <motion.div
          ref={ref}
          className="relative object-cover overflow-hidden"
          style={{
            backgroundImage: "url('https://expert-themes.com/wp/konfer/wp-content/uploads/2025/03/countdown2-1.jpg')",
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
                  height: "60vh",
                  width: "80%",
                  borderRadius: "1.5rem",
                }
          }
        >
          {/* Countdown Timer at bottom */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-[#9700d1]/40 via-[#7700a8]/30 to-[#9700d1]/40 backdrop-blur-md rounded-full mx-auto mb-8 max-w-6xl py-6 px-12 flex items-center justify-between border-2 border-white/20 shadow-2xl">
            <div className="text-left">
              <p className="text-white/90 text-lg font-medium mb-1">29 November 2025</p>
              <h3 className="text-white text-3xl font-bold">Counting Time...</h3>
            </div>
            
            <div className="flex items-center gap-8 text-white">
              {/* Days */}
              <div className="flex flex-col items-center">
                <span className="text-6xl font-bold">{String(timeLeft.days).padStart(2, '0')}</span>
                <span className="text-sm uppercase tracking-wider mt-1 text-white/80">DAYS</span>
              </div>
              
              <span className="text-5xl font-bold">:</span>
              
              {/* Hours */}
              <div className="flex flex-col items-center">
                <span className="text-6xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="text-sm uppercase tracking-wider mt-1 text-white/80">HOURS</span>
              </div>
              
              <span className="text-5xl font-bold">:</span>
              
              {/* Minutes */}
              <div className="flex flex-col items-center">
                <span className="text-6xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="text-sm uppercase tracking-wider mt-1 text-white/80">MINUTES</span>
              </div>
              
              <span className="text-5xl font-bold">:</span>
              
              {/* Seconds */}
              <div className="flex flex-col items-center">
                <span className="text-6xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="text-sm uppercase tracking-wider mt-1 text-white/80">SECONDS</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
