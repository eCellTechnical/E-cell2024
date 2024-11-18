import PropTypes from 'prop-types';

function Heading({ top, med, last }) {
  return (
    <div className="flex group flex-col space-y-0">
      <div className="flex items-center">
        <div className="p-[0.85px] bg-[#AD0C60] w-[3%] transition-all duration-300 ease-in-out group-hover:w-[5%]"></div>
        <div className="text-white text-[18px] md:text-[24px] leading-[28px] md:leading-[36px] font-[600] ml-2">{top}</div>
      </div>
      <div className="text-white text-[53px] md:text-[50px] leading-[58px] md:leading-[72px] font-[800]">{med}</div>
      <div 
        className="outlined-text text-[53px] md:text-[60px] leading-[58px] md:leading-[72px] font-[800]"
        style={{ textShadow: '1px 1px 2px #AD0C60' }}
      >
        {last}
      </div>
    </div>
  );
}

Heading.propTypes = {
  top: PropTypes.string.isRequired,
  med: PropTypes.string.isRequired,
  last: PropTypes.string.isRequired,
};

export default Heading;
