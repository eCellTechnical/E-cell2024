import lot1 from "../../assets/Discover/Animation - 1703854517098 (4) (1).gif";
import { TiLightbulb } from "react-icons/ti";
function WhoWeAre() {
  return (
    <>
      <div className="flex flex-col lg:flex w-full lg:w-full justify-center items-center lg:flex-row pt-[13vh]  z-[-1]">
        <div
          data-aos="fade-right"
          className="w-full lg:w-full flex justify-center items-center "
        >
          {/* <Lottie
            animationData={lot}
            loop={true}
            className="z-[1] lg:flex w-3/4 lg:w-2/3 opacity-100 "
          /> */}
          <img
            src={lot1}
            alt=""
            className="z-[1] lg:flex w-3/4 lg:w-2/3 opacity-100 "
          />
        </div>
        <div
          data-aos="fade-left"
          className="text-white w-11/12 lg:w-4/5 flex-col justify-center items-center lg:items-start lg:justify-center "
        >
          <div className="flex justify-center items-center lg:justify-start">
            <h2 className="font-bold text-3xl text-black dark:text-white">
              Who are <span className="text-[#4d55ba]">we</span> ?
            </h2>
            <TiLightbulb className="ml-2 self-center w-6 h-8" />
          </div>
          <div className="flex justify-center items-center lg:justify-start">
            <h2 className=" font-bold mt-2 text-black dark:text-white">
              A Team , A Family ,{" "}
              <span className="text-[#4d55ba] text-[20px]">
                We are team E-CELL!
              </span>
            </h2>
          </div>
          <p className="text-md text-center lg:text-left mt-10 w-[100%] lg:w-[85%] text-black dark:text-white">
            The Entrepreneurship Cell of KIET Ghaziabad is a student run body
            that strived to cater the needs of aspiring entrepreneurs as well as
            educate the student community about teh latest happenings in the
            startup ecosystem.
          </p>
          <p className="text-md text-center lg:text-left mt-8 w-[100%] lg:w-[85%] text-black dark:text-white">
            E-Cell seeks to support the broader startup ecosystem in india by
            bringing together and establishing a community of dedicated
            students, professors, angel investors and industry experts .
          </p>
          <div className="w-full flex justify-center items-center lg:justify-start mt-5"></div>
        </div>
      </div>
    </>
  );
}

export default WhoWeAre;
