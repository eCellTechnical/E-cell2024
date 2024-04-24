import TechDomain from "../../assets/domains/3D ICONS-02.png";
import PrDomain from "../../assets/domains/3D ICONS-08.png";
import CrDomain from "../../assets/domains/3D ICONS-06.png";
import EventDomain from "../../assets/domains/3D ICONS-01.png";
import GraphicsDomain from "../../assets/domains/3D ICONS-07.png";

import "./Domains.css";
function Domains() {
  return (
    <div className="flex flex-col justify-center items-center  text-[#fff] my-10">
      
      <h2 className="head !text-4xl text-black dark:text-white !font-bold">
        Our <span className="text-[#4d55ba]">Domains</span>
      </h2>
      <div className="text-white flex flex-wrap sm:flex-wrap !lg:flex-row justify-center items-center w-[100%] mt-4 lg:mt-[-1em] ">
        <div
          data-aos="fade-right"
          data-aos-delay="200"
          className="w-full sm:w-1/3 md:w-1/4 lg:w-[13%] Tech m-8 lg:mt-24 flex flex-col items-center sm:items-start"
        >
          <div className="relative flex justify-start w-50%">
            <img
              className="h-32 w-32 TechDomain z-[5]"
              src={TechDomain}
              alt=""
            />
            <div className="absolute z-[1] top-14 left-3  h-16 w-24 TechDrop"></div>
          </div>
          <h2 className="text-[#fca51a] !text-xl mt-1 !font-semibold">
            Technical
          </h2>
          <div className="w-full h-[2.5px] bg-[#fca51a] mt-2"></div>
          <p className=" text-sm dark:text-[#FFF9] text-black mt-1 w-[93%] text-center sm:text-start font-normal">
            In the ever-evolving landscape of technology, Tech domain stands as
            a beacon of progress. Here, we embrace the unknown, turning
            challenges into opportunities and ideas into innovations.
          </p>
        </div>
        <div
          data-aos="fade-right"
          className="w-full sm:w-1/3 md:w-1/4 lg:w-[13%] Pr  m-8 lg:mt-[-2em] flex flex-col items-center sm:items-start"
        >
          <div className="relative flex justify-start w-50%">
            <img className="h-32 w-32 TechDomain z-[5]" src={PrDomain} alt="" />
            <div className="absolute z-[1] top-14 left-3  h-16 w-24 PrDrop"></div>
          </div>
          <h2 className="text-[#358bc6] !text-xl !font-semibold">
            Public Relations
          </h2>
          <div className="w-full h-[2.5px] bg-[#358bc6] mt-2"></div>
          <p className=" text-sm dark:text-[#FFF9] text-black mt-1 w-[93%] text-center sm:text-start">
            Behold the stage of transformation! Our PR virtuosos sculpt
            narratives and igniting passion through strategic communication,
            shaping the landscape of entrepreneurship. Welcome to our realm of
            limitless possibilities.
          </p>
        </div>
        <div className="w-full sm:w-1/3 md:w-1/4 lg:w-[13%] Event lg:mt-24   m-8 flex flex-col items-center sm:items-start">
          <div className="relative flex justify-start w-50%">
            <img
              className="h-32 w-32 TechDomain z-[5]"
              src={EventDomain}
              alt=""
            />
            <div className="absolute z-[1] top-14 left-3  h-16 w-24 EventDrop"></div>
          </div>
          <h2 className="text-[#0071e3] !text-xl !font-semibold">
            Event Management
          </h2>
          <div className="w-full h-[2.5px] bg-[#0071e3] mt-2"></div>
          <p className=" text-sm dark:text-[#FFF9] text-black mt-1 w-[93%] text-center sm:text-start">
            Experience the magic of events with a side of laughter, turning
            ordinary events into extraordinary experiences because life&apos;s
            too short for boring parties!
          </p>
        </div>
        <div
          data-aos="fade-left"
          className="w-full sm:w-1/3 md:w-1/4 lg:w-[13%] Graphics lg:mt-[-2em] m-8 flex flex-col items-center sm:items-start"
        >
          <div className="relative flex justify-start w-50%">
            <img
              className="h-32 w-32 TechDomain z-[5]"
              src={GraphicsDomain}
              alt=""
            />
            <div className="absolute z-[1] top-14 left-3  h-16 w-24 GraphicsDrop"></div>
          </div>
          <h2 className="text-[#23edcb] !text-xl !font-semibold">Graphics</h2>
          <div className="w-full h-[2.5px] bg-[#23edcb] mt-2"></div>
          <p className=" text-sm dark:text-[#FFF9] text-black mt-1 w-[93%] text-center sm:text-start">
            Welcome to the creative hub of Ecell! Our Graphics Team turns ideas
            into stunning designs.Get Ready to dive with us into the world of
            eye-catching visuals. Let&apos;s create together!
          </p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className="w-full sm:w-1/3 md:w-1/4 lg:w-[13%] Cr lg:mt-24  m-8 flex flex-col items-center sm:items-start "
        >
          <div className="relative flex justify-start w-50%">
            <img className="h-32 w-32 TechDomain z-[5]" src={CrDomain} alt="" />
            <div className="absolute z-[1] top-14 left-3  h-16 w-24 CrDrop"></div>
          </div>
          <h2 className="text-[#4ad8fe] !text-xl !font-semibold">
            Corporate Relations
          </h2>
          <div className="w-full h-[2.5px] bg-[#4ad8fe] mt-2"></div>
          <p className=" text-sm dark:text-[#FFF9] text-black mt-1 w-[93%] text-center sm:text-start">
            Corporate relation bridges the gap between our E-Cell and industry
            leaders, creating platforms for collaboration, sponsorships, and
            mentorship programs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Domains;
