import { useRef, useEffect, useState } from "react";
import reach from "../../assets/counter/reach.webp";
import student from "../../assets/counter/student.webp";
import startup from "../../assets/counter/startup.webp";
import funding from "../../assets/counter/funding.webp";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
export default function Counter() {
  const counterRefs = [useRef(), useRef(), useRef(), useRef()];
  const [isInView, setIsInView] = useState(false);
  const [counterOn, setCounterOn] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    counterRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  });

  return (
    <div className="w-full flex justify-center p-4 md:py-14 md:pt-5 md:px-20 items-center bg-cover overflow-hidden bg-white dark:bg-transparent">
      <div className="flex flex-col md:flex-row w-full justify-around items-center">
        <div
          data-aos="fade-right"
          className="flex text-black dark:text-white flex-col justify-center items-center m-2"
          ref={counterRefs[0]}
        >
          <img
            src={
              "https://s3.ap-south-1.amazonaws.com/innohacks3.0/barchart.gif"
            }
            className="w-24 md:w-48"
            alt=""
          />
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <h1 className="font-bold text-lg md:text-3xl">
              {counterOn ? (
                <CountUp start={0} end={15000} duration={2} delay={0} />
              ) : (
                "15000"
              )}
              +
            </h1>
          </ScrollTrigger>
          <h2 className="font-bold text-base md:text-2xl  text-black dark:text-white">
            Footfall
          </h2>
        </div>
        <div
          data-aos="fade-up"
          className="flex flex-col text-black dark:text-white justify-center items-center m-2"
          ref={counterRefs[1]}
        >
          <img
            src={
              "https://s3.ap-south-1.amazonaws.com/innohacks3.0/locationPin.gif"
            }
            alt=""
            className="w-24 md:w-48"
          />
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <h1 className="font-bold text-lg md:text-3xl ">
              {counterOn ? <CountUp start={0} end={2} duration={3} /> : "2"}
              Lac+
            </h1>
          </ScrollTrigger>
          <h2 className="font-bold text-base md:text-2xl  text-black dark:text-white">
            Cash Prize
          </h2>
        </div>
        <div
          data-aos="fade-up"
          className="flex flex-col text-black dark:text-white justify-center items-center m-2"
          ref={counterRefs[2]}
        >
          <img
            src={"https://s3.ap-south-1.amazonaws.com/innohacks3.0/pen.gif"}
            alt=""
            className="w-24 md:w-48"
          />
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <h1 className="font-bold text-lg md:text-3xl ">
              {counterOn ? <CountUp start={0} end={10} duration={4} /> : "10"}+
            </h1>
          </ScrollTrigger>
          <h2 className="font-bold text-base md:text-2xl  text-black dark:text-white">
            Competetions
          </h2>
        </div>
        <div
          data-aos="fade-left"
          className="flex flex-col text-black dark:text-white justify-center items-center m-2"
          ref={counterRefs[3]}
        >
          <img
            src={"https://s3.ap-south-1.amazonaws.com/innohacks3.0/man.gif"}
            alt=""
            className="w-24 md:w-48"
          />
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <h1 className="font-bold text-lg md:text-3xl ">
              {counterOn ? <CountUp start={0} end={6} duration={4} /> : "6"}+
            </h1>
          </ScrollTrigger>
          <h2 className="font-bold text-base md:text-2xl  text-black dark:text-white">
            Workshops
          </h2>
        </div>
      </div>
    </div>
  );
}
