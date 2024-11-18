'use client';
import  { useState, useEffect } from "react";
import one from "../public/Images23/img3.jpg";
import two from "../public/Images23/img4.jpg";
import three from "../public/Images23/img5.jpg";
import four from "../public/Images23/img6.jpg";
import five from "../public/Images23/img7.jpg";
import six from "../public/Images23/img8.jpg";
import seven from "../public/Images23/img9.jpg";
import eight from "../public/Images23/img10.jpg";
import nine from "../public/Images23/img11.jpg";
// import ten from "../public/Images23/";
// import eleven from "../public/Images23/img2.HEIC";

// Array of Unsplash images for random display
const images = [
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  // ten,
  // eleven,
];

const ScrollingGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = (imageSrc) => {
    setCurrentImage(imageSrc);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentImage(null);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    // Attach event listener if the modal is open
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    // Cleanup event listener on component unmount or when modal is closed
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="relative overflow-hidden">
      {/* First Row */}
      <div className="flex gap-6 animate-scroll">
        {images.map((src, index) => (
          <div key={`row1-${index}`} className="min-w-[300px] h-[200px] rounded-lg overflow-hidden">
            <img
              src={src}
              alt={`Random image ${index}`}
              width={300}
              height={200}
              className="object-cover w-full h-full cursor-pointer"
              onClick={() => openModal(src)}
            />
          </div>
        ))}
      </div>

      {/* Second Row */}
      <div className="flex gap-6 animate-scroll-second mt-6">
        {images.map((src, index) => (
          <div key={`row2-${index}`} className="min-w-[300px] h-[200px] rounded-lg overflow-hidden">
            <img
              src={src}
              alt={`Random image ${index}`}
              width={300}
              height={200}
              className="object-cover w-full h-full cursor-pointer"
              onClick={() => openModal(src)}
            />
          </div>
        ))}
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

export default ScrollingGallery;
