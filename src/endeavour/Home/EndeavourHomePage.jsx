import { useEffect, lazy, Suspense } from "react";
import "./style.scss";
import image from "../../assets/navbar/Endeavour/logo1edit.png";

import { Link, useLocation } from "react-router-dom";

// const SparklesCore = lazy(() => import("../../components/Particle/Particles"));
import Meteors from "../../components/Star/Meteors";
import GlobeComponent from "../../components/Globe/GlobeComponent";

const Counter = lazy(() => import("../../components/Counter/Counter"));
const Sponsors = lazy(() => import("../../components/Sponsers/Sponsers"));
const Speakers = lazy(() => import("../../components/Speaker/Organiser"));
const AllEvents = lazy(() => import("../../components/AllEvents/AllEvents"));

function EndeavourHomePage() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <>
      <div className="pt-[3vh] h-full w-[100vw] flex flex-col justify-center items-center text-white bg-black">
        <div className="w-[100vw] flex flex-col">
          <div className="flex relative h-full justify-center items-center w-full">
            <Meteors />
            {/* <div className="absolute top-0 bottom-0 left-0 right-0 ">
              <SparklesCore
                id="tsparticlesfullpage"
                background="#000"
                minSize={0.6}
                maxSize={1.4}
                particleDensity={100}
                className="w-full h-full"
                particleColor="#FFFFFF"
              ></SparklesCore>
            </div> */}
            <div
              data-aos="fade-right"
              className="absolute md:static z-20 w-full md:w-1/2 flex flex-col justify-center items-center"
            >
              <img
                src={image}
                alt="Endeavour"
                className="w-[30rem] h-[15rem] z-20 md:w-[50rem] md:h-[21rem]"
              />
              <div className="w-full flex justify-center items-center z-20 -mt-14">
                <Link
                  className="w-full flex justify-center items-center"
                  to={"/endeavour/events"}
                >
                  <button className="p-2 mt-8 md:mt-0 z-10 border-4 border-[#1894c1] border-solid w-[45%] md:w-[25%] rounded-lg text-xl font-semibold text-white">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="w-full z-10 md:w-1/2 pointer-events-none"
            >
              <GlobeComponent />
            </div>
          </div>

          <div className="z-10">
            <Suspense fallback={<div>Loading...</div>}>
              <Counter />
            </Suspense>
          </div>
          <div className="w-full z-10">
            <Suspense fallback={<div>Loading...</div>}>
              <Sponsors />
            </Suspense>
          </div>
          <div className="w-full dark:bg-gray-900 bg-white pt-16 pb-10 z-10">
            <Suspense fallback={<div>Loading...</div>}>
              <Speakers />
            </Suspense>
          </div>
          <div className="dark:bg-black bg-white pt-16 z-10 w-full">
            <Suspense fallback={<div>Loading...</div>}>
              <AllEvents />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}

export default EndeavourHomePage;
