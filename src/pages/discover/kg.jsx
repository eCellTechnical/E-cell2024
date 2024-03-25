import { TiLightbulb } from "react-icons/ti";
import lot1 from "../../assets/Discover/Animation - 1705696149948.gif";
const Keepgrowing = () => {
  return (
    <div className="flex flex-col lg:flex w-full lg:w-full justify-center items-center lg:flex-row pb-8">
      <div
        data-aos="fade-left"
        className="w-full lg:w-full flex lg:hidden justify-center items-center"
      >
        <img src={lot1} alt="" className="lg:flex w-3/4 lg:w-2/3 " />
      </div>
      <div
        data-aos="fade-right"
        className="text-white w-11/12 lg:w-4/5 flex-col justify-center items-center lg:items-start lg:justify-center  ml-0 lg:ml-[10%] "
      >
        <div className="flex justify-center items-center lg:justify-start">
          <h2 className="font-bold text-3xl text-black dark:text-white">
            Keep
            <span className="text-[#4d55ba]"> Growing</span>
          </h2>

          <TiLightbulb className="ml-2 self-center w-6 h-8" />
        </div>

        <p className="text-md text-center lg:text-left mt-5 w-[100%] lg:w-[85%] text-black dark:text-white">
          At E-Cell we not only make available the latest and best of the
          resources any aspiring entrepreneur might need, but also give the
          students the opportunity to interact with other successful
          professionals from a wide variety of domains.
        </p>
        <p className="text-md text-center lg:text-left mt-8 w-[100%] lg:w-[85%] text-black dark:text-white">
          Our yearly roster of events have been steadily growing. both in scope
          and scale which currently include a number of speaker sessions from
          prominent personalities as part of our annual E- Summit, Endeavour,
          along with other business pitching events.
        </p>
      </div>
      <div className="w-full lg:w-full hidden lg:flex justify-center items-center">
        <img src={lot1} alt="" className="z-[6666] lg:flex w-3/4 lg:w-2/3 " />
      </div>
    </div>
  );
};

export default Keepgrowing;
