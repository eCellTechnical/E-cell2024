'use client';
import  { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

const PromoBanner = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768); // You can adjust the width threshold as needed
  };

  useEffect(() => {
    handleResize(); // Check the initial size
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isMobile) {
    return (
        <div className="flex items-center w-full  justify-center text-white py-10 px-4">
      <div className={`w-full flex ${isMobile ? 'flex-col' : 'md:flex-row'} justify-center items-center`}>


        {/* Left Side with "30% off" and Right Side Icon in Same Row for Mobile */}
        <div className={`flex items-center ${isMobile ? 'mb-4' : ''}`}>
          <h1 className="text-[100px] font-bold text-[#AD0C60] leading-none relative">
            <span className="outlined-text" style={{ textShadow: '1px 1px 2px #AD0C60' }}>30</span>
          </h1>
          <div className="flex flex-col  justify-center gap-0">
            <span className="text-[#AD0C60] outlined-text leading-none font-semibold text-[60px]">%</span>
            <span className="text-[#AD0C60] outlined-text leading-none font-semibold text-[35px]">off</span>
          </div>

          {/* Right Side Icon */}
          <div className="flex items-center justify-center ml-4">
            <ArrowUpRight className="w-[120px] h-[120px] text-[#AD0C60]" />
          </div>
        </div>

        {/* Center Text "Get Your Tickets Today!" */}
        <div className=" ">
          <h2 className="text-[37px] font-[800] leading-[44px] text-[#d2d2d2]">
            Get Your <br /> Tickets Today!
          </h2>
        </div>
      </div>
    </div>
    );
  }

  return (
    <div className="flex items-center w-full justify-center text-white py-10 px-16">
      <div className="w-[85%] flex justify-center items-center">
        {/* Left Side with "30% off" */}
        <div className="flex">
          <h1 className="text-[180px] font-bold text-[#AD0C60] leading-none relative">
            <span className="outlined-text" style={{ textShadow: '1px 1px 2px #AD0C60' }}>30</span>
          </h1>
          <div className="flex flex-col ml-[-15px] justify-center gap-0">
            <span className="text-[#AD0C60] outlined-text leading-none font-semibold text-[100px] ml-4">%</span>
            <span className="text-[#AD0C60] outlined-text leading-none font-semibold text-[55px] ml-4">off</span>
          </div>
        </div>

        {/* Center Text "Get Your Tickets Today!" */}
        <div className="ml-10">
          <h2 className="md:text-[60px] text-[37px] font-[800] md:leading-[72px] leading-[44px] text-[#d2d2d2]">
            Get Your <br /> Tickets Today!
          </h2>
        </div>

        {/* Right Side Icon */}
        <div className="ml-auto flex items-center">
          <ArrowUpRight className="w-[180px] h-[180px] text-[#AD0C60]" />
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
