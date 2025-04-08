import AbhishekSingh from "../../assets/people/abhishek_singh.jpeg";
// import AditiOhri from "../../assets/people/aditi.jpg";
// import AnmolSharma from "../../assets/people/anmol.jpeg";
// import DivyaRajput from "../../assets/people/divya.jpg";
// import HimanshiSingh from "../../assets/people/himanshi_singh.jpeg";
// import PradeepGupta from "../../assets/people/pradeep.jpg";
import RamveerTanwar from "../../assets/people/ramveer_tanver.jpeg";
import SachinSaxena from "../../assets/people/sachin.jpeg";
// import SaloniGaur from "../../assets/people/saloni.jpg";
import SandeepJain from "../../assets/people/sandeep.jpg";
import SourabhGoyal from "../../assets/people/saurabh.jpeg";
// import ShabnamSingh from "../../assets/people/shabnam.jpg";
// import ShubhamGaur from "../../assets/people/Shubham-Gaur.webp";
import SourabhJain from "../../assets/people/sourabh.jpeg";
// import SunilDutt from "../../assets/people/sunil-dutt.jpg";
import Card from "../Card/card2";

import "./speaker.css";
const Organizer = () => {
  const speaker = [
    {
      name: "Abhishek Singh",
      image: AbhishekSingh,
      position: "IAS Officer & Actor",
    },
    {
      image: SandeepJain,
      name: "Sandeep Jain",
      position: "Founder @ GeeksforGeeks",
    },
    {
      image: SourabhJain,
      name: "Sourabh Jain",
      position: "Founder Fun2Do Labs Ex.VP Paytm",
    },
    {
      image: SachinSaxena,
      name: "Sachin Saxena",
      position: "Marketing Head & Founding Team @ Innovaccer",
    },
    {
      image: RamveerTanwar,
      name: "Ranveer Tanwar",
      position: "Founder @ Say Earth",
    },
    {
      image: SourabhGoyal,
      name: "Mr. Sourabh Goyal",
      position: "Founder @ Goalchy Club",
    },
     {
      image: SourabhGoyal,
      name: "Mr. Sourabh Goyal",
      position: "Founder @ Goalchy Club",
    },
  ];
  return (
    <div className="dark:bg-gray-900 bg-white" id="team">
      <div className="flex justify-center pb-10  max-[415px]:ml-5 ">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-black dark:text-white">
            Our <span className="text-[#00FCB8]">Speakers</span>
          </h1>
        </div>
      </div>
      <div className="Speaker_big_box w-[100%] m-auto flex flex-wrap justify-center">
        <div
          data-aos="fade-up"
          className="mt-10 mb-10 !font-bold md:!font-bold text-lg md:text-2xl text-black dark:text-white"
        >
          <Card />
        </div>
      </div>
      <div className="flex justify-center pb-10 mt-11  max-[415px]:ml-5 ">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-black dark:text-white">
            Past <span className="text-[#00FCB8]">Speakers</span>
          </h1>
        </div>
      </div>
      <div className="Speaker_big_box w-[100%] m-auto flex flex-wrap justify-center">
        <div
          data-aos="fade-up"
          className="mt-10 mb-10 !font-bold md:!font-bold text-lg md:text-2xl text-black dark:text-white"
        >
          <div className="flex flex-wrap justify-center">
            {speaker.map((data, index) => {
              return (
                <div
                  data-aos="fade-up"
                  key={index}
                  className="speaker_profile justify-center w-60 my-10"
                >
                  <center>
                    <img
                      className="speaker_image h-[15rem] w-[15rem] rounded-full mb-2 border-4 flex border-[#00FCB8] dark:border-white"
                      src={data.image}
                      alt="2"
                    />
                  </center>
                  <div className="speaker_description font-bold text-xl tetx-black dark:text-white justify-around flex">
                    {data.name}
                  </div>
                  <div className="speaker_description font-bold text-lg text-black dark:text-white justify-around text-center flex">
                    {data.position}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organizer;
