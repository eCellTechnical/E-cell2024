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
    <div className="relative overflow-hidden bg-gradient-to-r from-[#9700d1] via-[#8a2be2] to-[#7b68ee] text-white py-4 select-none">
      <div 
        className="scroll-content flex items-center gap-8 whitespace-nowrap font-semibold text-xl uppercase tracking-wide"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
      >
        {[...items, ...items].map((text, i) => (
          <span key={i} className="flex items-center gap-3">
            <Lightbulb className="w-5 h-5" />
            {text}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .scroll-content {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
