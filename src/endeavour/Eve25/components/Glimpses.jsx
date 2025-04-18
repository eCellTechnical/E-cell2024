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
  const [scrollPosition, setScrollPosition] = useState(0);
  const [waveOffset, setWaveOffset] = useState(0);

  // Images for the marquee
  const images = [glimp1, glimp2, glimp3, glimp4, glimp5, glimp6, glimp7, glimp8];

  // Animate the marquee and waves
  useEffect(() => {
    const animationFrame = requestAnimationFrame(function animate() {
      setScrollPosition((prev) => (prev + 0.5) % (images.length * 200)); // Adjusted for mobile
      setWaveOffset((prev) => (prev + 0.2) % 1000);
      requestAnimationFrame(animate);
    });

    return () => cancelAnimationFrame(animationFrame);
  }, [images.length]);

  return (
    <div className="bg-gradient-to-b from-black via-[#001a1a] to-black w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden py-8">
      {/* Background Audio Wave Decorations - Mobile Optimized */}
      <div className="absolute left-0 right-0 bottom-0 top-0 flex items-center pointer-events-none z-0">
        <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="none">
          {/* Simplified waves for mobile */}
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

          {/* Floating particles/dots - reduced for mobile */}
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

      {/* New Creative Heading */}
      <div className="text-center mb-12 z-10">
        <div className="relative overflow-hidden py-3">
          <h2 className="text-teal-300 text-lg uppercase tracking-widest font-light mb-3 animate-pulse">
            Time Fragments
          </h2>
          <div className="overflow-hidden">
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-3 animate-slide-in-left">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-500">GLIMPSES</span>
            </h1>
          </div>
          <div className="overflow-hidden">
            <h3 className="text-white text-3xl md:text-4xl font-bold mb-2 animate-slide-in-right">
              OF THE PAST
            </h3>
          </div>

          <div className="relative mt-4">
            <div className="h-px w-16 bg-teal-500 mx-auto"></div>
            <p className="text-teal-100/70 mt-4 max-w-md mx-auto text-sm italic">
              A visual journey through moments frozen in time
            </p>
          </div>

          <div className="absolute -z-10 left-1/2 top-1/2 w-full h-full transform -translate-x-1/2 -translate-y-1/2 blur-2xl opacity-30"></div>
        </div>
      </div>

      {/* Album Artwork with Marquee - Mobile Optimized */}
      <div className="relative w-full max-w-7xl mb-8 md:mb-16 z-10 px-4">
        <div className="aspect-square md:aspect-video relative rounded-lg overflow-hidden shadow-lg shadow-teal-900/20">
          {/* Marquee scrolling images */}
          <div className="h-full w-full relative overflow-hidden bg-black/30">
            <div
              className="flex absolute gap-1 md:gap-3 top-0 h-full"
              style={{ transform: `translateX(-${scrollPosition}px)` }}
            >
              {images.concat(images).map((src, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 h-[100%] md:h-[80%]"
                  style={{ width: "400px" }} // Smaller on mobile
                >
                  <img
                    src={src}
                    alt={`Album image ${index + 1}`}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
