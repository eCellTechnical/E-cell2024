import { useEffect } from "react";
import Endeaovur from "../../assets/events/endeavour.jpg";
import Hult from "../../assets/events/hult.webp";
import IEC from "../../assets/events/iec.png";
import Innompic from "../../assets/events/innompic.jpg";
import { useLocation } from "react-router-dom";
function OurInitiatives() {
  const ourInitiatives = [
    { image: Endeaovur, name: "E-Summit" },
    { image: Hult, name: "Hult Prize" },
    { image: Innompic, name: "Innompic Games" },
    { image: IEC, name: "Innovation Calender" },
  ];
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <div className="flex flex-col justify-center items-center text-white pt-28 pb-8 bg-white dark:bg-black">
      <div>
        <h1 className="text-3xl md:text-5xl font-bold text-black dark:text-white">
          Our <span className="text-[#4d55ba]">Initiatives</span>
        </h1>
      </div>
      <div className="flex flex-wrap md:flex-wrap justify-center items-center mt-8 w-full">
        {ourInitiatives.map((events, index) => (
          <div
            data-aos="zoom-in"
            data-aos-delay="0"
            key={index}
            className="events flex flex-wrap justify-center items-center m-5 rounded-tr-[25%] w-[90%] md:w-[40%] rounded-lg hover:scale-105 transition-all duration-100 ease-in-out "
          >
            <img
              src={events.image}
              alt={events.name}
              className="speaker-img h-[50%] w-[80%] rounded-tr-[20%] rounded-lg rounded-bl-[20%] shadow-2xl"
            />
            <p className=" events-name font-bold text-2xl w-[100%] text-center mt-3 text-black dark:text-white">
              {events.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurInitiatives;
