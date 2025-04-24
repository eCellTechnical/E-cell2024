import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const ImagePopup = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate(); // This is the correct way to use the hook
  
  // Check viewport size on mount and when window resizes
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is a common breakpoint for mobile
    };
    
    // Check initially
    checkIsMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkIsMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="relative max-w-4xl w-full mx-4">
        <button 
          onClick={handleClose}
          className="absolute z-10 -top-0 right-8 bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-xl hover:bg-red-700 focus:outline-none"
          aria-label="Close popup"
        >
          ×
        </button>
        <img 
          onClick={() => {
            navigate('/endeavour/eve'); // Using navigate function correctly
            handleClose();
          }}
          src={isMobile ? "https://res.cloudinary.com/djc8hwlgb/image/upload/v1745132637/WhatsApp_Image_2025-04-20_at_12.24.36_90dd3ca2_zt7e3j.jpg" : "https://res.cloudinary.com/dgufdt51q/image/upload/v1745484607/i865rlp0crqnb0s6dtof.jpg"}
          alt="Popup announcement" 
          className="rounded-lg shadow-xl max-h-[80vh] w-full object-contain cursor-pointer" // Added cursor-pointer to indicate it's clickable
        />
      </div>
    </div>
  );
};

ImagePopup.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ImagePopup;