import { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../styles/Variant.js";
import AbhishekSingh from "../../assets/people/abhishek_singh.jpeg";
import AditiOhri from "../../assets/people/aditi.jpg";
import AnmolSharma from "../../assets/people/anmol.jpeg";
import DivyaRajput from "../../assets/people/divya.jpg";
import HimanshiSingh from "../../assets/people/himanshi_singh.jpeg";
import PradeepGupta from "../../assets/people/pradeep.jpg";
import RamveerTanwar from "../../assets/people/ramveer_tanver.jpeg";
import SachinSaxena from "../../assets/people/sachin.jpeg";
import SaloniGaur from "../../assets/people/saloni.jpg";
import SandeepJain from "../../assets/people/sandeep.jpg";
import SourabhGoyal from "../../assets/people/saurabh.jpeg";
import ShabnamSingh from "../../assets/people/shabnam.jpg";
import ShubhamGaur from "../../assets/people/Shubham-Gaur.webp";
import SourabhJain from "../../assets/people/sourabh.jpeg";
import SunilDutt from "../../assets/people/sunil-dutt.jpg";

import "./PastSpeakers.css";
import { useLocation } from "react-router-dom";
function OurTeam() {
  const pastSpeakers = [
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
      position: "Founter @ Say Earth",
    },
    {
      image: SourabhGoyal,
      name: "Mr. Sourabh Goyal",
      position: "Founder @ Goalchy Club",
    },
    {
      image: AnmolSharma,
      name: "Anmol Sharma",
      position: "Co-Founder @finlight & @financial_literate",
    },
    {
      image: PradeepGupta,
      name: "Pradeep Gupta",
      position: "Founder Cyber media",
    },
    {
      image: SunilDutt,
      name: "Sunil Dutt",
      position: "President Devices @ Jio",
    },
    {
      image: HimanshiSingh,
      name: "Himanshi Singh",
      position: "TedX Speaker & Youtuber",
    },
    {
      image: SaloniGaur,
      name: "Saloni Gaur",
      position: "YouTuber",
    },
    {
      image: ShubhamGaur,
      name: "Shubham Gaur",
      position: "YouTuber",
    },
    {
      image: DivyaRajput,
      name: "Divya Rajput",
      position: "Incubator Manager",
    },
    {
      image: ShabnamSingh,
      name: "Shabnam Singh",
      position: "ChairPerson @ Youwecan",
    },
    {
      image: AditiOhri,
      name: "Aditi Ohri",
      position: "Owner Emporio Marketing Pvt. Ltd.",
    },
  ];

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="flex flex-col justify-center items-center text-black dark:text-white pt-28 pb-5 bg-white dark:bg-black">
      <div>
        <h1 className="text-3xl md:text-5xl font-bold">
          Past <span className="text-[#4d55ba]">Speakers</span>
        </h1>
      </div>

      <div className="flex flex-wrap justify-center items-start mt-8">
        {pastSpeakers.map((speakers, index) => (
          <motion.div
            variants={fadeIn("up")}
            initial="hidden"
            whileInView={"show"}
            key={index}
            className="speakers flex flex-col justify-center items-center m-5 rounded-md "
          >
            <div className="relative">
              <img
                src={speakers.image}
                alt={speakers.name}
                className="speaker-img w-48 h-60 rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col justify-center items-center w-44 mt-2 ">
              <p className=" speakers-name font-bold text-lg ">
                {speakers.name}
              </p>
              <p className="speakers-position text-center  text-md">
                {speakers.position}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default OurTeam;
