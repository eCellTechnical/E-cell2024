import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  
  return (
    <div className="flex justify-center items-center mt-[8vh] md:mt-[13vh] w-[100%]">
      <div className="relative p-4 md:p-12 flex flex-col justify-center w-[92%] h-[83vh] rounded-lg overflow-hidden">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-[#0D0714] rounded-lg"></div>

        {/* Content */}
        <div className="relative z-10">
          <p className="text-[45px] md:text-[130px] mb-10 font-sans stroke-white stroke-2 mt-0 md:mt-[-55px] text-transparent bg-clip-text bg-gradient-to-r from-[#AD0C60] to-[#530AAC] font-[900]">
            IDEATEX 2.O
          </p>
          <p className="text-white mt-0 md:mt-[-60px] text-[20px] md:text-[42px] font-[600]">
            Turn your Business Idea to Real Business!
          </p>
          <div className="flex  md:flex-row flex-col justify-between mt-10 md:items-center items-start border-solid border-2 border-[#26222D] bg-[#04000A] rounded-lg p-8 text-white">
            <div className="flex flex-col items-start space-y-1 border-b-2 border-[#26222D] pb-6 md:border-b-0 md:pb-0">
              <span className="text-[18px]">Registration Start :- 18th Nov 2024</span>
              <span className="text-[18px]">Registration End :- 21st Nov 2024</span>
              <span className="text-[18px]">Event Timing :- 9:30 - 17:00</span>
            </div>
            <div className="w-px h-0 md:m-0 m-2 md:h-16 bg-[#26222D] mx-4"></div>
            <div className="flex flex-col items-start">
              <span className="text-[24px] md:text-[30px] font-[800]">AUDITORIUM</span>
              <span className="text-[18px]">KIET, Ghaziabad</span>
              <span className=" text-[24px] md:text-[30px] font-[800]">23rd Nov 2024</span>
            </div>
            <div className="w-px h-0 md:m-0 m-2 md:h-16 bg-[#26222D] mx-4"></div>
            <Link to="/ideatex/register">
              <button className="z-10 ml-0 md:ml-4 mt-4 md:mt-0 px-12 py-3 text-[16px] bg-gradient-to-r from-[#AE0D61] to-[#530AAC] hover:px-14 transition-all ease-in-out rounded-md text-white font-semibold">
                Register Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
