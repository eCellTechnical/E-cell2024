// import React from 'react'
import lot1 from "../../assets/Discover/vid.gif";
import lot2 from "../../assets/Discover/video1.gif";

import "./vision.css";

const Vision = () => {
  // useEffect(() => {
  //   // This will run after the component is mounted
  //   VanillaTilt.init(document.querySelectorAll(".card"), {
  //     max: 8,
  //     speed: 400,
  //     glare: true,
  //     "max-glare": 0.2,
  //   });

  //   // Clean up the Tilt instance when the component is unmounted
  // }, []);
  return (
    <div className="flex text-white flex-col items-center justify-center pb-8">
      <div className="containerr flex flex-col md:flex-row justify-center items-center md:justify-evenly ">
        <div className="card !w-4/5 lg:!w-[25%] bg-white dark:bg-[#ffffff1a] !shadow-2xl shadow-black">
          <div className="content">
            <div className="w-1/2 flex justify-center flex-col items-center mb-0">
              {/* <Lottie animationData={lot1} loop={true} className=" lg:flex" /> */}
              <img src={lot1} alt="" className="lg:flex " />
              <h3 className="h3 mt-1 text-[#4D55BA] font-bold">Mission</h3>
            </div>
            <div>
              <p className="mt-[1em] text-[#4b4b4b] dark:text-[#a6a6a6] !font-semibold dark:!font-normal">
                {/* <li>Cultivate entrepreneurial spirit.</li>
                <li>Encourage resilience, creativity, and purpose.</li>
                <li>Shape a brighter future.</li>
                <li>Promote innovation.</li> */}
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
              {/* <Lottie animationData={lot2} loop={true} className=" lg:flex " /> */}
              <img src={lot2} alt="" className="lg:flex " />
              <h3 className="h3 mt-3 text-[#4D55BA] font-bold">Vision</h3>
            </div>
            <div>
              <p className="mt-[1em] text-[#4b4b4b] dark:text-[#a6a6a6] !font-semibold dark:!font-normal">
                {/* <li>Join the entrepreneurial adventure at the E-Cell event</li>
                <li>Experience pitch fights, networking, and seminars</li>
                <li>
                  Dive into the world of innovation - Connect with visionary
                  individuals
                </li>
                <li>Navigate the dynamic landscape of entrepreneurship</li>
                <li>
                  Participate in activities to kickstart your journey as an
                  entrepreneur
                </li>
                <li>Seize opportunities within the startup ecosystem</li> */}
                Embark on an entrepreneurial odyssey! Our E-Cell event merges
                workshops, networking, and pitch battles. Dive into innovation,
                connect with visionaries, and chart your course in the dynamic
                sea of startups.
                {/* Join us to ignite your entrepreneurial journey
                and seize opportunities in the startup ecosystem. */}
              </p>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
