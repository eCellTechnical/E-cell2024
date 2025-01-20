import { motion } from "framer-motion";
import { fadeIn } from "../../styles/Variant.js";

import linkedInIcon from "../../assets/OurTeam/socialMedia/icons8-linkedin.svg";
import gamilIcon from "../../assets/OurTeam/socialMedia/icons8-gmail.svg";
import "./OurTeam.css";
import riddhi from "../../assets/OurTeam/Riddhi.jpg";
import yashica from "../../assets/OurTeam/Yashica.jpeg";
import apporv from "../../assets/OurTeam/apporv.webp";
import arpita from "../../assets/OurTeam/arpita.webp";
import aryan2 from "../../assets/OurTeam/Aryan22.jpg";
import Ayush from "../../assets/OurTeam/ayush_prakash.jpg";
import GauravNamdev from "../../assets/OurTeam/gaurav_namdev.jpg";
import GauravPayal from "../../assets/OurTeam/Gaurav.jpg";
import harsh2 from "../../assets/OurTeam/harsh2.jpg";
import Mansi from "../../assets/OurTeam/Mansi.png";
import naksh from "../../assets/OurTeam/Naksh.jpg";
import shashwat from "../../assets/OurTeam/Shashwat.jpg";
import shud from "../../assets/OurTeam/shud.jpg";
import tanya from "../../assets/OurTeam/tanya.jpg";
import Vaibhav from "../../assets/OurTeam/Vaibhav.jpg";
import yash from "../../assets/OurTeam/yash.webp";
import Gurpreet from "../../assets/OurTeam/Gurpreet.jpeg";
import kshitij from "../../assets/OurTeam/kshitij.jpg";
import Saksham from "../../assets/OurTeam/Saksham.jpg";
import Shiv from "../../assets/OurTeam/Shiv.png";
import Saumya from "../../assets/OurTeam/Saumya.jpg";
import anish from "../../assets/OurTeam/Anish.jpg";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
function OurTeam() {
  const Administrators = [
    {
      name: "Apoorv Sharma",
      domain: "Administrator",
      imgUrl: apporv,
      linkedIn: "https://www.linkedin.com/in/apoorv2804/",
      gmail: "aaapoorvsharma@gmail.com",
    },
    {
      name: "Vaibhav Choudhary",
      domain: "Administrator",
      imgUrl: Vaibhav,
      linkedIn: "https://www.linkedin.com/in/vaibhavchoudhary16",
      gmail: "choudharyvaibhav1609@gmail.com",
    },
   
    
  ];
  const DeputyAdministrators = [
    {
      name: "Sudhanshu",
      domain: "Deputy Administrator & Event Manager",
      imgUrl: shud,
      linkedIn: "",
      gmail: "",
    },
    {
      name: "Gaurav Payal",
      domain: "Deputy Administrator & Public Relations Mentor",
      imgUrl: GauravPayal,
      linkedIn: "https://www.linkedin.com/in/2oo3-gaurav",
      gmail: "gaurav2p02@gmail.com",
    },
  ];
  const Treasurer = [
    {
      name: "Ayush Prakash",
      domain: "Treasurer",
      imgUrl: Ayush,
      linkedIn: "",
      gmail: "",
    },
  ];
  const DomainManagers = [
    {
      name: "Gaurav Namdev",
      domain: "Corporate Relations Manager",
      imgUrl: GauravNamdev,
      linkedIn: "",
      gmail: "",
    },
    {
      name: "Mansi Verma",
      domain: "Graphics Manager",
      imgUrl: Mansi,
      linkedIn: "",
      gmail: "",
    },
 
   
  ];
  const Members = [
    {
      name: "Yash Kumar Singh",
      domain: "Technical Member",
      imgUrl: yash,
      linkedIn: "https://www.linkedin.com/in/yashksingh-connect/",
      gmail: "yk66478@gmail.com",
    },

    {
      name: "Nakshatra Manglik",
      domain: "Technical Member",
      imgUrl: naksh,
      linkedIn: "https://www.linkedin.com/in/nakshatra-manglik",
      gmail: "Nakshatramanglik14@gmail.com",
    },

    {
      name: "Shashwat Rai",
      domain: "Technical Member",
      imgUrl: shashwat,
      linkedIn: "https://www.linkedin.com/in/shashwatrai05/",
      gmail: "shashwatrai575@gmail.com",
    },
    {
      name: "Aryan Srivastava",
      domain: "Public Relations Member",
      imgUrl: aryan2,
      linkedIn: "https://www.linkedin.com/in/aryan-srivastava-4919b5259",
      gmail: "aryankiofficial@gmail.com",
    },
    {
      name: "Tanya Varshney",
      domain: "Public Relations Member",
      imgUrl: tanya,
      linkedIn: "",
      gmail: "",
    },
  
    {
      name: "Harsh Pundir",
      domain: "Graphics Member",
      imgUrl: harsh2,
      linkedIn: "",
      gmail: "",
    },

    {
      name: "Arpita Dwivedi",
      domain: "Graphics Member",
      imgUrl: arpita,
      linkedIn: "",
      gmail: "",
    },
   
    {
      name: " Anish Kumar",
      domain: "Events Member",
      gmail: "anissh946@gmail.com",
      linkedIn: "http://www.linkedin.com/in/anish-kumar-126140295",
      imgUrl: anish,
    },
    {
      name: "Gurpreet Singh",
      domain: "Corporate Member",
      mail: "gskochar24@gmail.com",
      linkedIn:
        "https://www.linkedin.com/in/gurpreet-singh-kochar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      imgUrl: Gurpreet,
    },
  
    {
      name: "Saksham Jain",
      domain: "Technical Member",
      gmail: "sakshambro730@gmail.com",
      linkedIn: "https://www.linkedin.com/in/sakshamjain007",
      imgUrl: Saksham,
    },
    {
      name: "Saumya Ojha",
      domain: "Technical Member",
      gmail: "ojhasaumya.lps@gmail.com",
      linkedIn:
        "https://www.linkedin.com/in/saumya-ojha-7a7699297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      imgUrl: Saumya,
    },
    {
      name: "Shiv Kumar Gupta",
      domain: "Technical Member",
      gmail: "contactshivgupta@gmail.com",
      linkedIn: "https://www.linkedin.com/in/shiv-kumar-gupta-b74125280/",
      imgUrl: Shiv,
    },
    
   
   
    {
      name: "Kshitij Sharma",
      domain: "Corporate Member",
      gmail: "kshitijsharma1901@gmail.com",
      linkedIn: "https://linkedin.com/in/kshitij-sharma-67b745289",
      imgUrl: kshitij,
    },
   

  
   
    {
      name: "Yashica Agarwal",
      domain: "Graphics Member",
      gmail: "yashica.agarwal3@gmail.com",
      linkedIn:
        "https://www.linkedin.com/in/yashica-agarwal-9b1493297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      imgUrl: yashica,
    },
  
    
    {
      name: "Riddhi Yadav",
      domain: "Graphics Member",
      gmail: "yriddhi51@gmail.com",
      linkedIn:
        "https://www.linkedin.com/in/riddhi-yadav-901b28293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      imgUrl: riddhi,
    },


  

 



  
  ];

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <div className="flex flex-col justify-center items-center text-white pt-28 bg-white dark:bg-black">
      <div>
        <h1 className="text-3xl md:text-5xl font-bold text-black dark:text-white">
          Our <span className="text-[#4d55ba]">Team</span>
        </h1>
      </div>
      <div className="mt-10">
        <h1 className="text-xl md:text-3xl font-bold text-black dark:text-white">
          Administrators
        </h1>
      </div>
      <div className="flex flex-wrap justify-center items-start mt-8">
        {Administrators.map((member, index) => (
          <motion.div
            variants={fadeIn("up")}
            initial="hidden"
            whileInView={"show"}
            key={index}
            className="team-member flex flex-col justify-center items-center m-5 rounded-tr-[25%] rounded-lg "
          >
            <div className="relative">
              <img
                src={member.imgUrl}
                alt={member.name}
                className="team-member-img w-48 h-60 rounded-tr-[10%] rounded-lg rounded-bl-[10%]"
                loading="lazy"
              />
              <div className="teamHover absolute top-5 left-5 w-[70%] border-t-4 border-l-4 p-3 pt-8 pb-5 border-blue-500 rounded-md flex flex-row justify-evenly items-center">
                <a href={member.linkedIn} target="_blank" rel="noreferrer">
                  <img
                    src={linkedInIcon}
                    alt=""
                    className="w-9 h-9"
                    loading="lazy"
                  />
                </a>
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${member.gmail}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={gamilIcon}
                    alt=""
                    className="w-8 h-8"
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center w-40 mt-2 ">
              <p className=" team-member-name font-bold text-lg text-black dark:text-white text-center">
                {member.name}
              </p>
              <p className="team-member-domain text-center text-lg text-black dark:text-white">
                {member.domain}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-10">
        <h1 className="text-xl md:text-3xl font-bold text-black dark:text-white">
          Deputy Administrators
        </h1>
      </div>
      <div className="flex flex-wrap justify-center items-start mt-8">
        {DeputyAdministrators.map((member, index) => (
          <motion.div
            variants={fadeIn("up")}
            initial="hidden"
            whileInView={"show"}
            key={index}
            className="team-member flex flex-col justify-center items-center m-5 rounded-tr-[25%] rounded-lg "
          >
            <div className="relative">
              <img
                src={member.imgUrl}
                alt={member.name}
                className="team-member-img w-48 h-60 rounded-tr-[10%] rounded-lg rounded-bl-[10%]"
                loading="lazy"
              />
              <div className="teamHover absolute top-5 left-5 w-[70%] border-t-4 border-l-4 p-3 pt-8 pb-5 border-blue-500 rounded-md flex flex-row justify-evenly items-center">
                <a href={member.linkedIn} target="_blank" rel="noreferrer">
                  <img
                    src={linkedInIcon}
                    alt=""
                    className="w-9 h-9"
                    loading="lazy"
                  />
                </a>
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${member.gmail}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={gamilIcon}
                    alt=""
                    className="w-8 h-8"
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center w-40 mt-2 ">
              <p className=" team-member-name font-bold text-lg text-black dark:text-white text-center">
                {member.name}
              </p>
              <p className="team-member-domain text-center text-lg text-black dark:text-white">
                {member.domain}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-10">
        <h1 className="text-xl md:text-3xl font-bold text-black dark:text-white">
          Treasurer
        </h1>
      </div>
      <div className="flex flex-wrap justify-center items-start mt-8">
        {Treasurer.map((member, index) => (
          <motion.div
            variants={fadeIn("up")}
            initial="hidden"
            whileInView={"show"}
            key={index}
            className="team-member flex flex-col justify-center items-center m-5 rounded-tr-[25%] rounded-lg "
          >
            <div className="relative">
              <img
                src={member.imgUrl}
                alt={member.name}
                className="team-member-img w-48 h-60 rounded-tr-[10%] rounded-lg rounded-bl-[10%]"
                loading="lazy"
              />
              <div className="teamHover absolute top-5 left-5 w-[70%] border-t-4 border-l-4 p-3 pt-8 pb-5 border-blue-500 rounded-md flex flex-row justify-evenly items-center">
                <a href={member.linkedIn} target="_blank" rel="noreferrer">
                  <img
                    src={linkedInIcon}
                    alt=""
                    className="w-9 h-9"
                    loading="lazy"
                  />
                </a>
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${member.gmail}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={gamilIcon}
                    alt=""
                    className="w-8 h-8"
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center w-40 mt-2 ">
              <p className=" team-member-name font-bold text-lg text-black dark:text-white text-center">
                {member.name}
              </p>
              <p className="team-member-domain text-center text-lg text-black dark:text-white">
                {member.domain}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-10">
        <h1 className="text-xl md:text-3xl font-bold text-black dark:text-white">
          Domain Managers
        </h1>
      </div>
      <div className="flex flex-wrap justify-center items-start mt-8">
        {DomainManagers.map((member, index) => (
          <motion.div
            variants={fadeIn("up")}
            initial="hidden"
            whileInView={"show"}
            key={index}
            className="team-member flex flex-col justify-center items-center m-5"
          >
            <div className="relative">
              <img
                src={member.imgUrl}
                alt={member.name}
                className="team-member-img w-48 h-60 rounded-tr-[10%] rounded-lg rounded-bl-[10%]"
                loading="lazy"
              />
              <div className="teamHover absolute top-5 left-5 w-[70%] border-t-4 border-l-4 p-3 pt-8 pb-5 border-blue-500 rounded-md flex flex-row justify-evenly items-center">
                <a href={member.linkedIn} target="_blank" rel="noreferrer">
                  <img
                    src={linkedInIcon}
                    alt=""
                    className="w-9 h-9"
                    loading="lazy"
                  />
                </a>
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${member.gmail}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={gamilIcon}
                    alt=""
                    className="w-8 h-8"
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center w-40 mt-2 ">
              <p className="team-member-name font-bold text-lg text-black dark:text-white text-center">
                {member.name}
              </p>
              <p className="team-member-domain text-center text-lg text-black dark:text-white">
                {member.domain}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-10">
        <h1 className="text-xl md:text-3xl font-bold text-black dark:text-white">
          Members
        </h1>
      </div>
      <div className="flex flex-wrap justify-center items-start mt-8">
        {Members.map((member, index) => (
          <motion.div
            variants={fadeIn("up")}
            initial="hidden"
            whileInView={"show"}
            key={index}
            className="team-member flex flex-col justify-center items-center m-5"
          >
            <div className="relative">
              <img
                src={member.imgUrl}
                alt={member.name}
                className="team-member-img w-44 h-56 rounded-tr-[10%] rounded-lg rounded-bl-[10%]"
                loading="lazy"
              />
              <div className="teamHover absolute top-5 left-5 w-[70%] border-t-4 border-l-4 p-3 pt-8 pb-5 border-blue-500 rounded-md flex flex-row justify-evenly items-center">
                <a href={member.linkedIn} target="_blank" rel="noreferrer">
                  <img
                    src={linkedInIcon}
                    alt=""
                    className="w-9 h-9"
                    loading="lazy"
                  />
                </a>
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${member.gmail}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={gamilIcon}
                    alt=""
                    className="w-8 h-8"
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center w-40 mt-2 ">
              <p className="team-member-name font-bold text-lg text-black dark:text-white text-center">
                {member.name}
              </p>
              <p className="team-member-domain text-center text-lg text-black dark:text-white">
                {member.domain}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default OurTeam;
