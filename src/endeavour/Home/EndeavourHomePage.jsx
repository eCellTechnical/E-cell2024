import { useEffect, Suspense, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useAnimation,
  AnimatePresence,
} from "framer-motion";
import "./style.scss";
import { useLocation } from "react-router-dom";
import End25Hero from "../../components/End25Hero/End25Hero";
import SponsorsCarousel from "../../components/End25/Sponsors/Sponsors";
import PastSpeakers from "../../components/End25/PastSpeakers/PastSpeaker";
import EventInfoSection from "../../components/End25/About/About";
import AllEvents from "../../components/End25/AllEvents/AllEvents";
import FAQSection from "../../components/End25/Faq/Faq";

const HollowScrollText = ({ text, sectionRef }) => {
  const isInView = useInView(sectionRef, { amount: 0.1, once: false, margin: "0px 0px -100px 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        x: 0,
        opacity: 0.3,
        transition: { 
          duration: 0.8, 
          ease: [0.25, 0.1, 0.25, 1] 
        },
      });

      const timeout = setTimeout(() => {
        controls.start({
          x: 100,
          opacity: 0,
          transition: { 
            duration: 1.2, 
            ease: [0.25, 0.1, 0.25, 1] 
          },
        });
      }, 1500);

      return () => clearTimeout(timeout);
    } else {
      controls.start({
        x: -200,
        opacity: 0,
        transition: { 
          duration: 0.5 
        },
      });
    }
  }, [isInView, controls]);

  return (
    <motion.div
      className="fixed left-0 top-0 h-screen w-screen flex items-center justify-center pointer-events-none z-0"
      initial={{ x: -200, opacity: 0 }}
      animate={controls}
    >
      <h1
        className="text-[15vw] md:text-[20vw] font-bold tracking-tighter"
        style={{
          WebkitTextStroke: "2px rgba(1, 255, 255, 0.2)",
          color: "transparent",
          textShadow: "0 0 40px rgba(1, 255, 255, 0.1)",
        }}
      >
        {text}
      </h1>
    </motion.div>
  );
};

const ParallaxStars = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute inset-0 opacity-40"
        style={{ y: y2 }}
      />
      <motion.div
        className="absolute inset-0 opacity-60"
        style={{ y: y3 }}
      />
    </div>
  );
};

const GlowEffect = () => {
  const { scrollYProgress } = useScroll();
  const topGlowOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.05, 0.03, 0.07, 0.05]
  );
  const bottomGlowOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.05, 0.08, 0.03, 0.05]
  );
  const centerGlowOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.05, 0.1, 0.05]
  );
  
  return (
    <div className="fixed inset-0 pointer-events-none">
      <motion.div
        className="absolute top-0 right-0 w-1/2 h-1/2 bg-teal-500 rounded-full blur-xl md:blur-3xl"
        style={{ opacity: topGlowOpacity }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-teal-400 rounded-full blur-xl md:blur-3xl"
        style={{ opacity: bottomGlowOpacity }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 bg-teal-300 rounded-full blur-xl md:blur-3xl"
        style={{ opacity: centerGlowOpacity }}
      />
    </div>
  );
};

const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
  sectionName = "",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false, 
    amount: 0.1,
    margin: "0px 0px -100px 0px" 
  });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <>
      {sectionName && <HollowScrollText text={sectionName} sectionRef={ref} />}
      <motion.div
        ref={ref}
        className={`${className} px-4 md:px-0`} // Added responsive padding
        initial="hidden"
        animate={controls}
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              delay: delay,
              ease: [0.25, 0.1, 0.25, 1],
            },
          },
          hidden: {
            opacity: 0,
            y: 30,
          },
        }}
      >
        {children}
      </motion.div>
    </>
  );
};

const StaggerContainer = ({ children, className = "", staggerDelay = 0.1 }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        when: "beforeChildren",
      },
    },
  };
  
  return (
    <motion.div
      ref={containerRef}
      className={className}
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

const StaggerItem = ({ children, className = "" }) => {
  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };
  
  return (
    <motion.div 
      className={className}
      variants={item}
    >
      {children}
    </motion.div>
  );
};

function EndeavourHomePage() {
  const { pathname } = useLocation();
  const { scrollYProgress } = useScroll();

  // Smoother parallax effects
  const heroParallax = useTransform(scrollYProgress, [0, 0.3], [0, -30]);
  const eventsParallax = useTransform(scrollYProgress, [0.1, 0.4], [30, 0]);
  const infoParallax = useTransform(scrollYProgress, [0.3, 0.6], [30, 0]);
  const sponsorsParallax = useTransform(scrollYProgress, [0.5, 0.8], [30, 0]);
  const speakersParallax = useTransform(scrollYProgress, [0.7, 1], [30, 0]);

  const headerOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2],
    [1, 0.7, 1]
  );
  const mainOpacity = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotateZ = useTransform(scrollYProgress, [0, 1], [0, 1]); // Reduced rotation
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.02, 1]); // Reduced scale effect

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="pt-[3vh] h-full flex flex-col justify-center items-center text-white overflow-hidden relative">
      {/* Background Layers */}
      <div className="fixed inset-0 bg-gradient-to-b from-black via-[#001a1a] to-black" />
      
      <div className="absolute top-0 left-0 w-full h-full border-t border-l border-teal-500/5 grid grid-cols-4 grid-rows-4">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="border-b border-r border-teal-500/5" />
        ))}
      </div>

      <ParallaxStars />
      <GlowEffect />

      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMxLjIzIDAgMi4xOTguOTY4IDIuMTk4IDIuMnYxOS42YzAgMS4yMzItLjk2OCAyLjItMi4xOTggMi4ySDI0Yy0xLjIzIDAtMi4yLTAuOTY4LTIuMi0yLjJWMjAuMmMwLTEuMjMyLjk3LTIuMiAyLjItMi4yaDEyeiIgc3Ryb2tlPSIjMDFGRkZGIiBzdHJva2Utb3BhY2l0eT0iLjA1IiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMzAgMGMxNi41NjkgMCAzMCAxMy40MzEgMzAgMzAgMCAxNi41NjktMTMuNDMxIDMwLTMwIDMwQzEzLjQzMSA2MCAwIDQ2LjU2OSAwIDMwIDAgMTMuNDMxIDEzLjQzMSAwIDMwIDB6bTAgNmExIDEgMCAwIDAtMSAxdjQ2YTEgMSAwIDEgMCAyIDBWN2ExIDEgMCAwIDAtMS0xem0xNiAxNmExIDEgMCAwIDAtMSAxdjE0YTEgMSAwIDEgMCAyIDBWMjNhMSAxIDAgMCAwLTEtMXptLTMyIDBhMSAxIDAgMCAwLTEgMXYxNGExIDEgMCAxIDAgMiAwVjIzYTEgMSAwIDAgMC0xLTF6IiBmaWxsPSIjMDFGRkZGIiBmaWxsLW9wYWNpdHk9Ii4wMiIvPjwvZz48L3N2Zz4=')] opacity-10" />

      <motion.div
        className="w-full flex flex-col relative z-10"
        style={{ opacity: mainOpacity }}
      >
        {/* Hero Section */}
        <motion.div
          style={{
            y: heroParallax,
            opacity: headerOpacity,
            scale: useTransform(scrollYProgress, [0, 0.2], [1, 0.98]),
          }}
        >
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <HollowScrollText
                text="ENDEAVOUR"
                sectionRef={{ current: document.body }}
              />
              <End25Hero />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Events Section */}
        <AnimatedSection
          className="pt-6 z-10  w-full"
          delay={0.1}
          sectionName="EVENTS"
        >
          <motion.div
            style={{
              y: eventsParallax,
              rotateZ: useTransform(scrollYProgress, [0.1, 0.4], [-0.3, 0]),
            }}
          >
            <Suspense fallback={
              <div className="h-[300px] md:h-[400px] flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2  border-teal-500" />
              </div>
            }>
              <StaggerContainer>
                <StaggerItem>
                  <AllEvents />
                </StaggerItem>
              </StaggerContainer>
            </Suspense>
          </motion.div>
        </AnimatedSection>

        {/* About Section */}
        <AnimatedSection
          className="pt-6 z-10 about w-full"
          delay={0.2}
          sectionName="ABOUT"
        >
          <div id="about" />
          <motion.div
            style={{
              y: infoParallax,
              scale: useTransform(
                scrollYProgress,
                [0.3, 0.5, 0.7],
                [0.98, 1.01, 0.99]
              ),
            }}
          >
            <Suspense fallback={
              <div className="h-[300px] flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500" />
              </div>
            }>
              <EventInfoSection />
            </Suspense>
          </motion.div>
        </AnimatedSection>

        {/* Sponsors Section */}
        <AnimatedSection
          className="w-full pt-6 z-10"
          delay={0.15}
          sectionName="SPONSORS"
        >
          <motion.div style={{ y: sponsorsParallax }}>
            <Suspense fallback={
              <div className="h-[200px] flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500" />
              </div>
            }>
              <StaggerContainer>
                <div id="sponsors" />
                <StaggerItem>
                  <SponsorsCarousel />
                </StaggerItem>
              </StaggerContainer>
            </Suspense>
          </motion.div>
        </AnimatedSection>

        {/* Speakers Section */}
        <AnimatedSection
          className="w-full pt-6 z-10"
          delay={0.2}
          sectionName="SPEAKERS"
        >
          <motion.div
            style={{
              y: speakersParallax,
              scale: useTransform(
                scrollYProgress,
                [0.7, 0.85, 1],
                [0.98, 1.02, 1]
              ),
            }}
            className="px-4 md:px-0"
          >
            <Suspense fallback={
              <div className="h-[500px] flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500" />
              </div>
            }>
              <div id="speakers" className="min-h-[50vh]">
                <PastSpeakers />
              </div>
            </Suspense>
          </motion.div>
        </AnimatedSection>

        {/* FAQ Section */}
        <AnimatedSection
          className="w-full pt-6 z-10"
          delay={0.2}
          sectionName="FAQ"
        >
          <motion.div
            style={{
              y: speakersParallax,
              scale: useTransform(
                scrollYProgress,
                [0.7, 0.85, 1],
                [0.98, 1.02, 1]
              ),
            }}
          >
            <Suspense fallback={
              <div className="h-[300px] flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500" />
              </div>
            }>
              <FAQSection />
            </Suspense>
          </motion.div>
        </AnimatedSection>

        {/* Decorative side borders */}
        <motion.div
          className="fixed top-0 left-0 w-1 h-screen bg-teal-500"
          style={{
            scaleY: useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.8, 1]),
            opacity: useTransform(
              scrollYProgress,
              [0, 0.3, 0.7, 1],
              [0.1, 0.4, 0.2, 0.1]
            ),
          }}
        />
        <motion.div
          className="fixed top-0 right-0 w-1 h-screen bg-teal-500"
          style={{
            scaleY: useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.8, 1]),
            opacity: useTransform(
              scrollYProgress,
              [0, 0.3, 0.7, 1],
              [0.1, 0.4, 0.2, 0.1]
            ),
          }}
        />

        {/* Back to top button */}
        <motion.div
          className="fixed bottom-4 right-4 w-14 h-14 md:w-16 md:h-16 rounded-full bg-black/30 border border-teal-500 flex items-center justify-center z-50 cursor-pointer hover:bg-teal-500/20 transition-colors"
          style={{
            scale: useTransform(scrollYProgress, [0, 1], [0.8, 1]),
            opacity: useTransform(
              scrollYProgress,
              [0, 0.1, 0.9, 1],
              [0, 1, 1, 0]
            ),
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            className="text-teal-500 font-bold text-xl md:text-2xl"
            style={{
              opacity: useTransform(scrollYProgress, [0, 1], [0.5, 1]),
            }}
          >
            ▲
          </motion.div>
          <svg className="absolute inset-0" width="100%" height="100%">
            <motion.circle
              cx="50%"
              cy="50%"
              r="48%"
              strokeWidth="1.5"
              stroke="#0d9488"
              fill="none"
              strokeDasharray="175.9"
              style={{
                strokeDashoffset: useTransform(
                  scrollYProgress,
                  [0, 1],
                  [175.9, 0]
                ),
              }}
            />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default EndeavourHomePage;