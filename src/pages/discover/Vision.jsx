import lot1 from "../../assets/Discover/vid.gif";
import lot2 from "../../assets/Discover/video1.gif";

import "./vision.css";

const Vision = () => {
  return (
    <div className="flex text-white flex-col items-center justify-center pb-8">
      <div className="containerr flex flex-col md:flex-row justify-center items-center md:justify-evenly ">
        <div className="card !w-4/5 lg:!w-[25%] bg-white dark:bg-[#ffffff1a] !shadow-2xl shadow-black">
          <div className="content">
            <div className="w-1/2 flex justify-center flex-col items-center mb-0">
              <img src={lot1} alt="" className="lg:flex " />
              <h3 className="h3 mt-1 text-[#4D55BA] font-bold">Mission</h3>
            </div>
            <div>
              <p className="mt-[1em] text-[#4b4b4b] dark:text-[#a6a6a6] !font-semibold dark:!font-normal">
                Championing innovation, our vision is to nurture a culture where
                every student embraces entrepreneurship, leading with
                resilience, creativity, and purpose to shape a brighter future.
              </p>
            </div>
          </div>
        </div>

        <div className="card !w-4/5 lg:!w-[25%] bg-white dark:bg-[#ffffff1a] !shadow-2xl shadow-black">
          <div className="content">
            <div className="w-[50%] flex justify-center flex-col items-center mb-0">
              <img src={lot2} alt="" className="lg:flex " />
              <h3 className="h3 mt-3 text-[#4D55BA] font-bold">Vision</h3>
            </div>
            <div>
              <p className="mt-[1em] text-[#4b4b4b] dark:text-[#a6a6a6] !font-semibold dark:!font-normal">
                Embark on an entrepreneurial odyssey! Our E-Cell event merges
                workshops, networking, and pitch battles. Dive into innovation,
                connect with visionaries, and chart your course in the dynamic
                sea of startups.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
