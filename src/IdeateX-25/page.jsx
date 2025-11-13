"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

import EventSection from "./Components/EventSection";
import FAQSection from "./Components/Faq";
import FeatSection from "./Components/FeatSection";
import Header from "./Components/Header";
import ConferenceHero from "./Components/Hero";
import PastSpeakers from "./Components/PastSpeakers";
import ScrollingGallery from "./Components/Scrolling-Gallery";
import ScrollingRibbon from "./Components/ScrollingRibbon";
import Partners from "./Components/Sponsers";

function Page() {
  const scrollRef = useRef(null);
  const { scrollY } = useScroll({ container: scrollRef });
  const smoothY = useSpring(scrollY, { stiffness: 100, damping: 20, mass: 0.3 });
  const y = useTransform(smoothY, (v) => -v);

  return (
    <div className="bg-black overflow-hidden">
      <motion.div
        ref={scrollRef}
        className=""
        style={{ y }}
      >
        <div className="flex justify-center items-center">
          <Header />
        </div>
        <div className="w-full">
          <ConferenceHero />
          <EventSection />
          <ScrollingRibbon />
          <FeatSection />
          <ScrollingRibbon />
          <Partners />
          <ScrollingRibbon />
          <PastSpeakers />
          <ScrollingGallery direction="left" />
          <FAQSection />
        </div>
      </motion.div>
    </div>
  );
}

export default Page;
