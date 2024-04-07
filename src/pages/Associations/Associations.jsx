import prevAssociations from "../../assets/associations/prev-associations.webp";
import "./Associations.css";

import { useEffect, lazy, Suspense } from "react";
const Loader = lazy(() => import("../../components/Loader/Loader"));
const Partners = lazy(() => import("./Partners.jsx"));
import { useLocation } from "react-router-dom";

function Associations() {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for reduced motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation(scrollers);
    }
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  function addAnimation(scrollers) {
    scrollers.forEach((scroller) => {
      // add data-animated="true" to every `.scroller` on the page
      scroller.setAttribute("data-animated", true);

      // Make an array from the elements within `.scroller-inner`
      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);

      // For each item in the array, clone it
      // add aria-hidden to it
      // add it into the `.scroller-inner`
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }
  return (
    <div className="flex flex-col justify-center items-center pt-28 bg-white dark:!bg-black pb-8">
      <Suspense fallback={<Loader />}>
        <div className="flex justify-center items-center flex-col mb-12">
          <h1 className=" text-3xl md:text-5xl font-bold mb-8 text-black dark:text-white">
            Current <span className="text-[#4d55ba]">Partners</span>
          </h1>
          <Partners />
        </div>
        <div className="mt-10">
          <h1 className="text-3xl md:text-5xl font-bold text-black dark:text-white">
            Previous <span className="text-[#4d55ba]">Association</span>
          </h1>
        </div>
        <div className="flex flex-wrap md:flex-wrap justify-center items-center mt-8 w-full">
          <div
            data-aos="zoom-in"
            data-aos-delay="0"
            className="events flex flex-wrap justify-center items-center m-5 rounded-tr-[25%] w-[80%] md:w-[60%] rounded-lg "
          >
            <img
              src={prevAssociations}
              className="speaker-imgrounded-tr-[20%] rounded-lg rounded-bl-[20%]"
            />
          </div>
        </div>
      </Suspense>
    </div>
  );
}

export default Associations;
