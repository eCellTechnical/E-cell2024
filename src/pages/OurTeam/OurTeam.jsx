import { motion } from "framer-motion";
import { fadeIn } from "../../styles/Variant.js";

import linkedInIcon from "../../assets/OurTeam/socialMedia/icons8-linkedin.svg";
import gamilIcon from "../../assets/OurTeam/socialMedia/icons8-gmail.svg";
import "./OurTeam.css";
import Akshat from "../../assets/OurTeam/akshat.jpg";
import apporv from "../../assets/OurTeam/apporv.webp";
import arpita from "../../assets/OurTeam/arpita.webp";
import Aryan from "../../assets/OurTeam/aryan11.jpg";
import aryan2 from "../../assets/OurTeam/Aryan22.jpg";
// import Atrij from '../../assets/OurTeam/atrij111.webp';
import Ayush from "../../assets/OurTeam/ayush_prakash.jpg";
// import Garima from '../../assets/OurTeam/garima11.jpg';
import Garvit from "../../assets/OurTeam/garvit_singh11.jpg";
import GauravNamdev from "../../assets/OurTeam/gaurav_namdev.jpg";
import GauravPayal from "../../assets/OurTeam/Gaurav.jpg";
import govind from "../../assets/OurTeam/govind.jpeg";
import hard from "../../assets/OurTeam/hard.webp";
import harsh2 from "../../assets/OurTeam/harsh2.jpg";
// import harshraj from "../../assets/OurTeam/harsh3.jpg";
// import Iqra from '../../assets/OurTeam/iqra4.jpg';
import Jassi from "../../assets/OurTeam/jassi11.jpg";
import Madhav from "../../assets/OurTeam/madhav.jpeg";
import Mansi from "../../assets/OurTeam/Mansi.png";
import naksh from "../../assets/OurTeam/Naksh.jpg";
// import Nishant from '../../assets/OurTeam/nishant.jpg';
// import Parneet from '../../assets/OurTeam/parneet.jpg';
// import Pranav from '../../assets/OurTeam/pranav111.png';
import Pulkit from "../../assets/OurTeam/pulkit.jpeg";
import shashwat from "../../assets/OurTeam/Shashwat.jpg";
import shud from "../../assets/OurTeam/shud.jpg";
// import Saket from '../../assets/OurTeam/saket_tiwari11.jpg';
import Snigdha from "../../assets/OurTeam/Snigdha.jpg";
// import Tanika from '../../assets/OurTeam/tanika.jpg';
// import Tanushi from "../../assets/OurTeam/tanushi.jpg";
import tanya from "../../assets/OurTeam/tanya.jpg";
// import Tejaswita from '../../assets/OurTeam/tejaswita.jpg';
import Unnati from "../../assets/OurTeam/unnati.jpg";
import Vaibhav from "../../assets/OurTeam/Vaibhav.jpg";
import yash from "../../assets/OurTeam/yash.webp";
import Payal from "../../assets/OurTeam/Payal verma.jpg";
import Aditi from "../../assets/OurTeam/Aditi Nim.jpg";
import AyushKumar from "../../assets/OurTeam/Ayush Kumar.jpg";
import Dipanshi from "../../assets/OurTeam/Dipanshi.jpg";
import Gurpreet from "../../assets/OurTeam/Gurpreet.jpeg";
import harshraj from "../../assets/OurTeam/Harsh Raj.jpg";
import Harshit from "../../assets/OurTeam/Harshit (GD) 1st year .jpg";
import Karan from "../../assets/OurTeam/Karan.jpg";
import kshitij from "../../assets/OurTeam/kshitij.jpg";
import Lavanshi from "../../assets/OurTeam/Lavanshi Sharma(1).jpg";
import nandita from "../../assets/OurTeam/nandita_sarkar.jpg";
import navya from "../../assets/OurTeam/navya_srivastava.jpg";
import Parul from "../../assets/OurTeam/Parul.jpg";
import Prasasth from "../../assets/OurTeam/Prasasth.jpg";
import Srishti from "../../assets/OurTeam/Srishti Verma.jpg";
import Vanshika from "../../assets/OurTeam/Vanshika Mehrotra.jpg";
import Saksham from "../../assets/OurTeam/Saksham.jpg";
import Shiv from "../../assets/OurTeam/Shiv.png";
import Saumya from "../../assets/OurTeam/Saumya.jpg";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
function OurTeam() {
  const OverallCoordinators = [
    {
      name: "Madhav Garg",
      domain: "Overall Coordinator",
      imgUrl: Madhav,
      linkedIn: "",
      gmail: "",
    },

    {
      name: "Aryan Sharma",
      domain: "Overall Coordinator",
      imgUrl: Aryan,
      linkedIn: "",
      gmail: "",
    },

    {
      name: "Akshat Dwivedi",
      domain: "Overall Coordinator",
      imgUrl: Akshat,
      linkedIn: "",
      gmail: "",
    },
  ];
  const DomainHeads = [
    {
      name: "Pulkit Saxena",
      domain: "Public Relations Head",
      imgUrl: Pulkit,
      linkedIn: "",
      gmail: "",
    },
    {
      name: "Jassi Sandhu",
      domain: "Public Relations Head",
      imgUrl: Jassi,
      linkedIn: "",
      gmail: "",
    },
    {
      name: "Garvit Singh",
      domain: "Event Head",
      imgUrl: Garvit,
      linkedIn: "",
      gmail: "",
    },
    {
      name: "Snigdha Singh",
      domain: "Corporate Head",
      imgUrl: Snigdha,
      linkedIn: "",
      gmail: "",
    },
    {
      name: "Unnati Mishra",
      domain: "Technical Head",
      imgUrl: Unnati,
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
      name: "Govind Chaubey",
      domain: "Corporate Member",
      imgUrl: govind,
      linkedIn: "",
      gmail: "Chaubeygovind123@gmail.com",
    },
    {
      name: "Gaurav Namdev",
      domain: "Corporate Member",
      imgUrl: GauravNamdev,
      linkedIn: "",
      gmail: "",
    },
    {
      name: "Apoorv Sharma",
      domain: "Corporate Member",
      imgUrl: apporv,
      linkedIn: "https://www.linkedin.com/in/apoorv2804/",
      gmail: "aaapoorvsharma@gmail.com",
    },

    {
      name: "Yash Hardasani",
      domain: "Corporate Member",
      imgUrl: hard,
      linkedIn: "",
      gmail: "",
    },

    {
      name: "Sudhanshu",
      domain: "Event Member",
      imgUrl: shud,
      linkedIn: "",
      gmail: "",
    },
    {
      name: "Gaurav Payal",
      domain: "Graphics Member",
      imgUrl: GauravPayal,
      linkedIn: "https://www.linkedin.com/in/2oo3-gaurav",
      gmail: "gaurav2p02@gmail.com",
    },
    {
      name: "Ayush Prakash",
      domain: "Graphics Member",
      imgUrl: Ayush,
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
      name: "Vaibhav Choudhary",
      domain: "Event Member",
      imgUrl: Vaibhav,
      linkedIn: "",
      gmail: "",
    },

    {
      name: "Harsh Raj",
      domain: "Event Member",
      imgUrl: harshraj,
      linkedIn: "https://www.linkedin.com/in/harsh-raj-b46ab1264/",
      gmail: "rajjais135@gmail.com",
    },

    {
      name: "Mansi Verma",
      domain: "Graphics Member",
      imgUrl: Mansi,
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
      name: "Parul Yadav",
      domain: "Public Relations Member",
      gmail: "parul18062004@gmail.com",
      linkedIn: "https://www.linkedin.com/in/parul-yadav02",
      imgUrl: Parul,
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
      name: "Aditi Nim",
      domain: "Graphics Member",
      gmail: "nimaditi7@gmail.com",
      linkedIn: "https://www.linkedin.com/in/aditinim7/",
      imgUrl: Aditi,
    },
    {
      name: "Srishti Verma",
      domain: "Event Member",
      gmail: "srishtiverma358@gmail.com",
      linkedIn: "https://www.linkedin.com/in/srishti-verma-458a8a271/",
      imgUrl: Srishti,
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
      name: "Lavanshi Sharma",
      domain: "Public Relations Member",
      gmail: "lavanshisharma46@gmail.com",
      linkedIn:
        "https://www.linkedin.com/in/lavanshi-sharma?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      imgUrl: Lavanshi,
    },
    {
      name: "Harshit Singh",
      domain: "Graphics Member",
      gmail: "harshitsingh1329@gmail.com",
      linkedIn:
        "https://www.linkedin.com/in/harshit-singh-a0519a286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      imgUrl: Harshit,
    },
    {
      name: "Nandita Sarkar",
      domain: "Corporate Member",
      gmail: "nanditasarkar1128@gmail.com",
      linkedIn: "https://www.linkedin.com/in/nandita-sarkar-b420aa296",
      imgUrl: nandita,
    },
    {
      name: "Ayush Kumar",
      domain: "Technical Member",
      gmail: "ayushtiwari0803@gmail.com",
      linkedIn: "https://www.linkedin.com/in/ayush-kumar-b0284b295/",
      imgUrl: AyushKumar,
    },

    {
      name: "Karan Kapil",
      domain: "Event Member",
      gmail: "karankapil8279@gmail.com",
      linkedIn:
        "https://www.linkedin.com/in/karan-kapil-b06a3927a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      imgUrl: Karan,
    },
    {
      name: "Navya Srivastava",
      domain: "Corporate Member",
      gmail: "navya.srivas03@gmail.com",
      linkedIn: "linkedin.com/in/navya-srivastava-7365a1282",
      imgUrl: navya,
    },

    {
      name: "Kshitij Sharma",
      domain: "Corporate Member",
      gmail: "kshitijsharma1901@gmail.com",
      linkedIn: "https://linkedin.com/in/kshitij-sharma-67b745289",
      imgUrl: kshitij,
    },

    {
      name: "Prasasth Tripathi",
      domain: "Event Member",
      gmail: "amittiwary5677@gmail.com",
      linkedIn:
        "https://www.linkedin.com/in/prasasth-tripathi-bb2b99205?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      imgUrl: Prasasth,
    },

    {
      name: "Dipanshi Yadav",
      domain: "Public Relation Member",
      gmail: "yaduvanshidips25@gmail.com",
      linkedIn:
        "https://www.linkedin.com/in/dipanshi-yadav-00081b215?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      imgUrl: Dipanshi,
    },

    {
      name: "Vanshika Mehrotra",
      domain: "Public Relation Member",
      gmail: "vanshikamehrotra108@gmail.com",
      linkedIn: "https://www.linkedin.com/in/vanshika-mehrotra12",
      imgUrl: Vanshika,
    },
    {
      name: "Payal Verma",
      domain: "Event Member",
      gmail: "payalvermaseema@gmail.com",
      linkedIn:
        "https://www.linkedin.com/in/payal-verma-509244296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      imgUrl: Payal,
    },
    // {
    //   name: "Arush Dixit",
    //   domain: "Public Relations Member",
    //   gmail: "arushd2005@gmail.com",
    //   linkedIn:
    //     "https://www.linkedin.com/in/arushdixit98?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    // },
    // {
    //   name: "Yashica Agarwal",
    //   domain: "Graphics Member",
    //   gmail: "yashica.agarwal3@gmail.com",
    //   linkedIn: "https://www.linkedin.com/feed/",
    // },

    // {
    //   name: "Riddhi Yadav",
    //   domain: "Graphics Member",
    //   gmail: "yriddhi51@gmail.com",
    //   linkedIn:
    //     "https://www.linkedin.com/in/riddhi-yadav-901b28293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    // },
    // {
    //   name: "Anjali Sharma",
    //   domain: "Public Relation Member",
    //   gmail: "anjali34490@gmail.com",
    //   linkedIn:
    //     "https://www.linkedin.com/in/anjali-sharma-448a9b292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    // },

    // {
    //   name: "Abhishek sharma",
    //   domain: "Corporate Relation Member",
    //   gmail: "abhishek.2226it1057@kiet.edu",
    //   linkedIn:
    //     "https://www.linkedin.com/in/abhishek-sharma-a14878225?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    // },
    // {
    //   name: "Pratham Mishra",
    //   domain: "Event Management Member",
    //   gmail: "mishrayogi04@gmail.com",
    //   linkedIn:
    //     "https://www.linkedin.com/in/pratham-mishra-850497270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    // },
    // {
    //   name: "Shruti Mishra",
    //   domain: "Public Relation Member",
    //   gmail: "shrutimishra.creative@gmail.com",
    //   linkedIn:
    //     "https://www.linkedin.com/in/shruti-mishra-8572a729b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    // },

    // {
    //   name: "Paras Tiwari",
    //   domain: "Technical Member",
    //   gmail: "parastiwari970@gmail.com",
    //   linkedIn:
    //     "https://www.linkedin.com/in/paras-tiwari-69b0162a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    // },

    // {
    //   name: "Ansh Yadav",
    //   domain: "Corporate Relation Member",
    //   gmail: "ansh.2327cse1176@kiet.edu",
    //   linkedIn:
    //     "https://www.linkedin.com/in/ansh-yadav-6ab1182a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    // },

    // {
    //   name: "Utkarsh Goyal",
    //   domain: "Technical Member",
    //   gmail: "utkarshgoyal07@gmail.com",
    //   linkedIn: "https://www.linkedin.com/in/utkarsh-goyal-74a81524b/",
    // },
    // {
    //   name: "Anish kumar",
    //   domain: "Event Management Member",
    //   gmail: "anissh946@gmail.com",
    //   linkedIn:
    //     "https://www.linkedin.com/in/anish-kumar-126140295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    // },
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
          Overall Coordinators
        </h1>
      </div>
      <div className="flex flex-wrap justify-center items-start mt-8">
        {OverallCoordinators.map((member, index) => (
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
          Domain Heads
        </h1>
      </div>
      <div className="flex flex-wrap justify-center items-start mt-8">
        {DomainHeads.map((member, index) => (
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
