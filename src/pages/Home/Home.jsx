import React, { useEffect, useState, lazy, Suspense } from "react";
import "./Home.css";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
// import PopUp from "../../components/PopUp/PopUp";

import prevAssociations from "../../assets/associations/prev-associations.webp";
import prevAssociationsMob from "../../assets/associations/Instagram_post_-_1-ezgif.com-crop.webp";
const WhatIsECell = lazy(() => import("./WhatIsECell.jsx"));
const Domains = lazy(() => import("./Domains.jsx"));
const TimeLine = lazy(() => import("./TimeLine.jsx"));
import Partners from "../Associations/Partners.jsx";

import useTheme from "../../context/theme.js";
import ScrollImageDesktopDark from "../../assets/Home/Subtract.svg";
import ScrollImageDesktopLight from "../../assets/Home/SubtractWhite.svg";

import ScrollImageMobileLight from "../../assets/Home/Subtractlight.svg";
import ScrollImageMobileDark from "../../assets/Home/Subtractdark.svg";

import { useLocation } from "react-router-dom";
function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-50% 0px",
  });

  const { themeMode } = useTheme();

  const [scrollY, setScrollY] = useState(0);
  const [isGreater, setIsGreater] = useState(false);
  const [stopScroll, setStopScroll] = useState(0);

  const { transform } = useSpring({
    transform: `${stopScroll > 500 ? `scale(${1 + scrollY * 1})` : "1"}`,
  });

  const handleScroll = () => {
    const newScrollY = window.scrollY;
    setScrollY(newScrollY);

    // Check if the scale is greater than or equal to 20
    setIsGreater(1 + newScrollY / 25 >= 25);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setStopScroll(screen.width);
  }, []);

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <div className={`scroll-down-animation w-full z-10`}>
        <span className="mouse border-2 border-black dark:border-white">
          <span className="move bg-black dark:bg-white"></span>
        </span>
        <h2 className="Sd text-black dark:text-white">Scroll down</h2>
      </div>

      {stopScroll > 500 ? (
        <animated.header
          className={`hero !overflow-x-hidden w-[100vw] ${
            inView ? "past-threshold" : ""
          } ${isGreater ? "!hidden" : ""} pointer-events-none hidden md:flex `}
          style={{ transform }}
          ref={ref}
        >
          <div className="hero__top !overflow-x-hidden">
            <div className="hero__illustration !overflow-x-hidden">
              <div className="h-full w-full bg-white dark:bg-black"></div>
              {themeMode == "dark" ? (
                <img
                  src={ScrollImageDesktopDark}
                  alt=""
                  className="w-[100vw] h-[100vh] border-white dark:border-black  md:flex hidden"
                  loading="lazy"
                />
              ) : (
                <img
                  src={ScrollImageDesktopLight}
                  alt=""
                  className="w-[100vw] h-[100vh] border-white dark:border-black  md:flex hidden"
                  loading="lazy"
                />
              )}

              {themeMode == "dark" ? (
                <img
                  src={ScrollImageMobileDark}
                  alt=""
                  className="w-[100vw] border-white dark:border-black  flex md:hidden"
                  loading="lazy"
                />
              ) : (
                <img
                  src={ScrollImageMobileLight}
                  alt=""
                  className="w-[100vw] border-white dark:border-black  flex md:hidden"
                  loading="lazy"
                />
              )}

              <div className="h-full w-full bg-white dark:bg-black"></div>
            </div>
          </div>
        </animated.header>
      ) : (
        <header
          className="flex md:hidden !overflow-x-hidden w-[100vw]
pointer-events-none hero "
        >
          {themeMode == "dark" ? (
            <img
              src={ScrollImageMobileDark}
              alt=""
              className="w-[100vw] border-white dark:border-black  flex md:hidden mobImg"
              loading="lazy"
            />
          ) : (
            <img
              src={ScrollImageMobileLight}
              alt=""
              className="w-[100vw] border-white dark:border-black  flex md:hidden mobImg"
              loading="lazy"
            />
          )}
        </header>
      )}
      <div
        className={`trailer !z-[-1] ${isGreater ? "" : "!sticky top-0 left-0"}`}
      >
        <div className="video-wrapper">
          <div className="video">
            <video
              src={
                "https://res.cloudinary.com/dl49ki1ob/video/upload/v1716742421/bgVideoDesktop_vgrvwy_nk4tna.mp4"
              }
              autoPlay
              loop
              muted
              className="fixed hidden  w-[100vw] md:flex z-[-2] "
            ></video>
            <video
              src={
                "https://res.cloudinary.com/dl49ki1ob/video/upload/v1716742399/bgVideoMobile_ybzrxy_u6i4eo.mp4"
              }
              autoPlay
              loop
              muted
              className="fixed h-[100vh] w-[100vw] flex md:hidden z-[-2] "
            ></video>
          </div>
        </div>
      </div>
      {/* <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50">
        <PopUp />
      </div> */}
      <main className="content z-[10]">
        <section className="section  bg-white dark:bg-black z-[20]  h-[100vh]">
          <Suspense fallback={<div>Loading...</div>}>
            <WhatIsECell />
          </Suspense>
        </section>
        {/* <section className="section pt-11 lg:pt-0   bg-white dark:bg-black">
          <Suspense fallback={<div>Loading...</div>}>
            <WhatWeDo />
          </Suspense>
        </section> */}

        <section className="section bg-white dark:bg-black">
          <Suspense fallback={<div>Loading...</div>}>
            <Domains />
          </Suspense>
        </section>
        <section className="section bg-white dark:bg-black ">
          <Suspense fallback={<div>Loading...</div>}>
            <TimeLine />
          </Suspense>
        </section>
        <section className="section bg-white dark:bg-black pb-10">
          <h3 className="head !text-4xl text-black dark:text-white font-bold mb-11">
            Our <span className="text-[#4d55ba]">Partners</span>
          </h3>
          <Suspense fallback={<div>Loading...</div>}>
            <Partners />
          </Suspense>
          <div className="mt-10">
            <h3 className="head !text-4xl text-black dark:text-white font-bold mb-11">
              Previous <span className="text-[#4d55ba]">Association</span>
            </h3>
          </div>
          <div className="flex flex-wrap md:flex-wrap justify-center items-center mt-2 md:mt-8 w-full">
            <div
              data-aos="zoom-in"
              data-aos-delay="0"
              className="events flex flex-wrap justify-center items-center m-5 mb-0 rounded-tr-[25%] w-[80%] md:w-[60%] rounded-lg "
            >
              <img
                src={prevAssociations}
                className="speaker-imgrounded-tr-[20%] hidden md:flex rounded-lg "
              />
              <img
                src={prevAssociationsMob}
                className="speaker-imgrounded-tr-[20%] flex md:hidden rounded-lg "
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
