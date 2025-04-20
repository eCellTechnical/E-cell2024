// src/components/ImagePopup/ImagePopup.jsx
import  { useState } from 'react';
import PropTypes from 'prop-types';

const ImagePopup = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="relative max-w-4xl mx-4">
        <button 
          onClick={handleClose}
          className="absolute -top-4 -right-4 bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-xl hover:bg-red-700 focus:outline-none"
          aria-label="Close popup"
        >
          ×
        </button>
        <img 
          src="https://res.cloudinary.com/djc8hwlgb/image/upload/v1745132637/WhatsApp_Image_2025-04-20_at_12.24.36_90dd3ca2_zt7e3j.jpg" 
          alt="Popup announcement" 
          className="rounded-lg shadow-xl max-h-[80vh]"
        />
      </div>
    </div>
  );
};
ImagePopup.propTypes = {
  onClose: PropTypes.func.isRequired,
};

// export default ImagePopup;
export default ImagePopup;