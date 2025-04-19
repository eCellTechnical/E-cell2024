import { useState, useEffect } from "react";

// Importing images
import glimp1 from "../assets/images/glimp1.jpg";
import glimp2 from "../assets/images/glimp2.jpg";
import glimp3 from "../assets/images/glimp3.jpg";
import glimp4 from "../assets/images/glimp4.jpg";
import glimp5 from "../assets/images/glimp5.jpg";
import glimp6 from "../assets/images/glimp6.jpg";
import glimp7 from "../assets/images/glimp7.jpg";
import glimp8 from "../assets/images/glimp8.jpg";

export default function Glimpses() {
  const [scrollPosition1, setScrollPosition1] = useState(0);
  const [scrollPosition2, setScrollPosition2] = useState(0);
  const [waveOffset, setWaveOffset] = useState(0);

  // Images for the marquees
  const images = [glimp1, glimp2, glimp3, glimp4, glimp5, glimp6, glimp7, glimp8];
  const imageWidth = 300; // Fixed width for images
  const gap = 16; // Gap between images

  // Animate the marquees and waves
  useEffect(() => {
    const animationFrame = requestAnimationFrame(function animate() {
      // Slowed down the marquee scroll speed (from 0.2 to 0.1)
      setScrollPosition1((prev) => (prev + 0.2) % ((images.length * (imageWidth + gap)) / 2));
      setScrollPosition2((prev) => (prev - 0.2 + ((images.length * (imageWidth + gap)) / 2)) % ((images.length * (imageWidth + gap)) / 2));
      // Kept the wave animation at the same speed for smoothness
      setWaveOffset((prev) => (prev + 0.5) % 1000);
      requestAnimationFrame(animate);
    });

    return () => cancelAnimationFrame(animationFrame);
  }, [images.length]);

  return (
    <div className=" w-full min-h-screen md:px-0 px-4 flex flex-col items-center justify-center relative overflow-hidden py-8">
      {/* Background Audio Wave Decorations */}
      <div className="absolute left-0 right-0 bottom-0 top-0 flex items-center pointer-events-none z-0">
        <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="none">
          {/* Simplified waves */}
          <path
            d={`M0,300 Q150,${280 + Math.sin(waveOffset * 0.01) * 30} 300,300 T600,${290 + Math.cos(waveOffset * 0.008) * 20} T900,${310 + Math.sin(waveOffset * 0.012) * 25} T1200,300`}
            fill="none"
            stroke="rgb(20, 184, 166)"
            strokeWidth="1"
            className="opacity-15 md:opacity-20"
          />
          <path
            d={`M0,350 Q150,${380 + Math.cos(waveOffset * 0.015) * 25} 300,350 T600,${330 + Math.sin(waveOffset * 0.01) * 30} T900,${370 + Math.cos(waveOffset * 0.009) * 20} T1200,350`}
            fill="none"
            stroke="rgb(20, 184, 166)"
            strokeWidth="1"
            className="opacity-15 md:opacity-20"
          />

          {/* Floating particles/dots */}
          {Array.from({ length: 5 }).map((_, i) => (
            <circle
              key={i}
              cx={600 + ((waveOffset * (0.05 + i * 0.01)) % 600)}
              cy={200 + Math.sin(waveOffset * (0.02 + i * 0.005)) * 200}
              r={0.5 + (i % 2)}
              fill="rgb(20, 184, 166)"
              className="opacity-30 md:opacity-50"
            />
          ))}
        </svg>
      </div>

      {/* Creative Heading */}
      <div className="text-center mb-2 z-10 px-4">
        <div className="relative overflow-hidden py-3">
         
          <div className="overflow-hidden">
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-3 animate-slide-in-left">
              <span className="text-transparent custom-font bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-500">GLIMPSES</span>
            </h1>
          </div>
          <div className="overflow-hidden">
            <h3 className="text-white text-3xl md:text-4xl font-bold mb-2 animate-slide-in-right">
              OF THE PAST
            </h3>
          </div>

        
          <div className="absolute -z-10 left-1/2 top-1/2 w-full h-full transform -translate-x-1/2 -translate-y-1/2 blur-2xl opacity-30"></div>
        </div>
      </div>

      {/* Dual Marquee Container */}
      <div className="w-full max-w-7xl space-y-4 z-10 px-4">
        {/* First Marquee (Left to Right) */}
        <div className="relative h-48 md:h-64 w-full overflow-hidden rounded-lg bg-black/30 shadow-lg shadow-teal-900/20">
          <div
            className="flex absolute top-0 h-full items-center"
            style={{ transform: `translateX(-${scrollPosition1}px)` }}
          >
            {[...images, ...images].map((src, index) => (
              <div
                key={`marquee1-${index}`}
                className="flex-shrink-0 h-[90%] mx-2 transition-all duration-300 hover:scale-105"
                style={{ width: `${imageWidth}px` }}
              >
                <img
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  className="h-full w-full object-cover rounded-md"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Second Marquee (Right to Left) */}
        <div className="relative h-48 md:h-64 w-full overflow-hidden rounded-lg bg-black/30 shadow-lg shadow-teal-900/20">
          <div
            className="flex absolute top-0 h-full items-center"
            style={{ transform: `translateX(-${scrollPosition2}px)` }}
          >
            {[...images, ...images].map((src, index) => (
              <div
                key={`marquee2-${index}`}
                className="flex-shrink-0 h-[90%] mx-2 transition-all duration-300 hover:scale-105"
                style={{ width: `${imageWidth}px` }}
              >
                <img
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  className="h-full w-full object-cover rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}