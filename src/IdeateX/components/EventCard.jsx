// import React from 'react';
import PropTypes from 'prop-types';

const EventCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col p-8 cursor-grab justify-center h-[45vh] group border-[#26222D] border-2 bg-[#04000A] rounded-xl shadow-lg text-left">
      {/* Icon */}
      <div className="text-[#AE0D61] mb-4">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-white mt-2 font-[800] group-hover:text-[#AE0D61] transition-all ease-in-out text-[24px] mb-4">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[#838490] group-hover:text-[#AE0D61] text-[20px]">
        {description}
      </p>
    </div>
  );
};
EventCard.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string.isRequired,
  description: PropTypes.string
};

export default EventCard;
// export default EventCard;