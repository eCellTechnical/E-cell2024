'use client';
import { useState, useEffect, useRef } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import PropTypes from "prop-types";

const images = [
  "https://picsum.photos/300/200?random=1",
  "https://picsum.photos/300/200?random=2",
  "https://picsum.photos/300/200?random=3",
  "https://picsum.photos/300/200?random=4",
  "https://picsum.photos/300/200?random=5",
  "https://picsum.photos/300/200?random=6",
  "https://picsum.photos/300/200?random=7",
  "https://picsum.photos/300/200?random=8",
  "https://picsum.photos/300/200?random=9",
  "https://picsum.photos/300/200?random=10",
  "https://picsum.photos/300/200?random=11",
  "https://picsum.photos/300/200?random=12",
  "https://picsum.photos/300/200?random=13",
  "https://picsum.photos/300/200?random=14",
  "https://picsum.photos/300/200?random=15",
  "https://picsum.photos/300/200?random=16",
  "https://picsum.photos/300/200?random=17",
  "https://picsum.photos/300/200?random=18",
];


const ScrollingGallery = ({ direction = "left", speed = 50 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const x2 = useMotionValue(0); // Second row motion value
  const containerRef = useRef(null);

  const openModal = (imageSrc) => {
    setCurrentImage(imageSrc);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentImage(null);
  };

  // Infinite scroll animation
  useAnimationFrame((time, delta) => {
    if (!isHovered && containerRef.current) {
      const containerWidth = containerRef.current.scrollWidth / 2; // Half because we duplicate
      const currentX = x.get();
      const currentX2 = x2.get();
      const newX = direction === "left" 
        ? currentX - (speed * delta) / 1000
        : currentX + (speed * delta) / 1000;
      const newX2 = direction === "left" 
        ? currentX2 + (speed * delta) / 1000  // Opposite direction
        : currentX2 - (speed * delta) / 1000;

      // Reset position when scrolled past half the width
      if (direction === "left" && Math.abs(newX) >= containerWidth) {
        x.set(0);
      } else if (direction === "right" && newX >= 0) {
        x.set(-containerWidth);
      } else {
        x.set(newX);
      }

      // Reset position for second row
      if (direction === "left" && newX2 >= 0) {
        x2.set(-containerWidth);
      } else if (direction === "right" && Math.abs(newX2) >= containerWidth) {
        x2.set(0);
      } else {
        x2.set(newX2);
      }
    }
  });

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="relative overflow-hidden py-8 bg-gradient-to-r from-[#181830] to-black">
      {/* First Row */}
      <div 
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div 
          ref={containerRef}
          className="flex gap-6"
          style={{ x }}
        >
          {/* First set of images */}
          {images.map((src, index) => (
            <div key={`row1-${index}`} className="min-w-[300px] h-[200px] rounded-lg overflow-hidden flex-shrink-0">
              <img
                src="https://picsum.photos/300/200?random=1"
                alt={`Gallery image ${index + 1}`}
                width={300}
                height={200}
                className="object-cover w-full h-full cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => openModal(src)}
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {images.map((src, index) => (
            <div key={`row1-dup-${index}`} className="min-w-[300px] h-[200px] rounded-lg overflow-hidden flex-shrink-0">
              <img
                src={src}
                alt={`Gallery image ${index + 1} duplicate`}
                width={300}
                height={200}
                className="object-cover w-full h-full cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => openModal(src)}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Second Row - Opposite Direction */}
      <div 
        className="relative mt-6"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div 
          className="flex gap-6"
          style={{ x: x2 }}
        >
          {/* First set of images */}
          {images.map((src, index) => (
            <div key={`row2-${index}`} className="min-w-[300px] h-[200px] rounded-lg overflow-hidden flex-shrink-0">
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                width={300}
                height={200}
                className="object-cover w-full h-full cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => openModal(src)}
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {images.map((src, index) => (
            <div key={`row2-dup-${index}`} className="min-w-[300px] h-[200px] rounded-lg overflow-hidden flex-shrink-0">
              <img
                src={src}
                alt={`Gallery image ${index + 1} duplicate`}
                width={300}
                height={200}
                className="object-cover w-full h-full cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => openModal(src)}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      {isOpen && currentImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative">
            <img
              src={currentImage}
              alt="Preview"
              width={800}
              height={600}
              className="object-contain rounded-lg"
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white bg-gray-700 p-2 rounded-full"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
ScrollingGallery.propTypes = {
  direction: PropTypes.oneOf(["left", "right"]),
  speed: PropTypes.number,
};

export default ScrollingGallery;
