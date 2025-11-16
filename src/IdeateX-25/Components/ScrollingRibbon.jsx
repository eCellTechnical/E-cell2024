"use client";
import { Lightbulb } from "lucide-react";
import { useState } from "react";

export default function ScrollingRibbon() {
  const [isPaused, setIsPaused] = useState(false);

  const items = [
    "INNOVATE FASTER",
    "MEET INVESTORS",
    "GROW YOUR STARTUP",
    "NETWORK WITH FOUNDERS",
    "PITCH YOUR IDEA",
    "SCALE GLOBALLY",
    "COLLABORATE WITH EXPERTS",
    "FIND CO-FOUNDERS",
    "AI & TECH INSIGHTS",
    "MARKETING STRATEGIES",
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-[#9700d1] via-[#8a2be2] to-[#7b68ee] text-white py-3 md:py-4 select-none">

      <div
        className="scroll-content flex items-center gap-6 md:gap-8 whitespace-nowrap font-semibold text-base md:text-xl uppercase tracking-wide px-2"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{ animationPlayState: isPaused ? "paused" : "running" }}
      >
        {[...items, ...items].map((text, i) => (
          <span key={i} className="flex items-center gap-2 md:gap-3">
            <Lightbulb className="w-4 h-4 md:w-5 md:h-5" />
            {text}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .scroll-content {
          display: inline-flex;
          width: max-content;
          animation: scroll 18s linear infinite;
          will-change: transform;
        }
      `}</style>
    </div>
  );
}
