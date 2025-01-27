import { motion } from "framer-motion";
import { fadeIn } from "../../styles/Variant.js";

import linkedInIcon from "../../assets/OurTeam/socialMedia/icons8-linkedin.svg";
import gamilIcon from "../../assets/OurTeam/socialMedia/icons8-gmail.svg";
import "./OurTeam.css";
import riddhi from "../../assets/OurTeam/Riddhi.jpg";
// import divym from "../../assets/OurTeam/Divyam.jpeg";
import shruti from "../../assets/OurTeam/Shruti.jpeg";
import Ameera from "../../assets/OurTeam/Ameera.jpg";
import Atharv from "../../assets/OurTeam/Atharv.jpg";
import Aashi from "../../assets/OurTeam/Aashi.jpg";
import Shreya from "../../assets/OurTeam/Shreya.jpg";
import Tejas from "../../assets/OurTeam/Tejas.jpg";
import Dhruv2 from "../../assets/OurTeam/Dhruv2.jpg";
import Jatin from "../../assets/OurTeam/Jatin.jpg";
import Vaibhav2 from "../../assets/OurTeam/Vaibhav2.jpg";
import Avani from "../../assets/OurTeam/Avani.jpg";
import Saransh from "../../assets/OurTeam/Saransh.jpg";
import Anurag from "../../assets/OurTeam/Anurag.jpg";
import Rishi from "../../assets/OurTeam/Rishi.jpg";
import Kush from "../../assets/OurTeam/Kush.jpg";
import Pari from "../../assets/OurTeam/Pari.jpg";
import Tanya2 from "../../assets/OurTeam/Tanya2.jpg";
import Rishika from "../../assets/OurTeam/Rishika.jpg";
// import Akshat from "../../assets/OurTeam/akshat.jpg";
import yashica from "../../assets/OurTeam/Yashica.jpeg";
import Luv from "../../assets/OurTeam/Luv.jpg";
import Anant from "../../assets/OurTeam/Anant.jpg";
import apporv from "../../assets/OurTeam/apporv.webp";
import Dipti from "../../assets/OurTeam/Dipti.jpg";
import Anshika from "../../assets/OurTeam/Anshika.jpg";
import Vansh from "../../assets/OurTeam/Vansh.jpg";
import arpita from "../../assets/OurTeam/arpita.webp";
import aryan2 from "../../assets/OurTeam/Aryan22.jpg";
import Arpit from "../../assets/OurTeam/Arpit.jpg";
import Priyanz from "../../assets/OurTeam/Priyanz.jpg";
import Dipali from "../../assets/OurTeam/Dipali.jpg";
import Ayush from "../../assets/OurTeam/ayush_prakash.jpg";
import GauravNamdev from "../../assets/OurTeam/gaurav_namdev.jpg";
import GauravPayal from "../../assets/OurTeam/Gaurav.jpg";
import harsh2 from "../../assets/OurTeam/harsh2.jpg";
import Mansi from "../../assets/OurTeam/Mansi.png";
import naksh from "../../assets/OurTeam/Naksh.jpg";
import Tulika from "../../assets/OurTeam/Tulika.jpg";
import Pranjali from "../../assets/OurTeam/Pranjali.jpg";
import Janak from "../../assets/OurTeam/Janak.jpg";
import Antas from "../../assets/OurTeam/Antas.jpg";
import Utkarsh from "../../assets/OurTeam/Utkarsh.jpg";
import shashwat from "../../assets/OurTeam/Shashwat.jpg";
import Sonali from "../../assets/OurTeam/Sonali.jpg";
import shud from "../../assets/OurTeam/shud.jpg";
import tanya from "../../assets/OurTeam/tanya.jpg";
import Vaibhav from "../../assets/OurTeam/Vaibhav.jpg";
import yash from "../../assets/OurTeam/yash.webp";
import Gurpreet from "../../assets/OurTeam/Gurpreet.jpeg";
import kshitij from "../../assets/OurTeam/kshitij.jpg";
import Saksham from "../../assets/OurTeam/Saksham.jpg";
import Shiv from "../../assets/OurTeam/Shiv.png";
import Saumya from "../../assets/OurTeam/Saumya.jpg";
import Aditi from "../../assets/OurTeam/Aditi.jpg";
import Dhruv from "../../assets/OurTeam/Dhruv.jpg";
import anish from "../../assets/OurTeam/Anish.jpg";
import Arjun from "../../assets/OurTeam/Arjun.jpg";
import Krishna from "../../assets/OurTeam/Krishna.jpg";
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
      name: "Kshitij Sharma",
      domain: "Corporate Member",
      gmail: "kshitijsharma1901@gmail.com",
      linkedIn: "https://linkedin.com/in/kshitij-sharma-67b745289",
      imgUrl: kshitij,
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
      name: "Yashica Agarwal",
      domain: "Graphics Member",
      gmail: "yashica.agarwal3@gmail.com",
      linkedIn:
        "https://www.linkedin.com/in/yashica-agarwal-9b1493297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      imgUrl: yashica,
    },

    // {
    //   name: "Pratham Mishra",
    //   domain: "Events Member",
    //   gmail: "mishrayogi04@gmail.com",
    //   linkedIn:
    //     "https://www.linkedin.com/in/pratham-mishra-850497270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    //   imgUrl: pratham,
    // },
    // {
    //   name: "Divyam Asthana",
    //   domain: "Public Relations Member",
    //   gmail: "divyamasthanaprofessional.001@gmail.com",
    //   linkedIn: "https://www.linkedin.com/in/divyam-asthana",
    //   imgUrl: divym,
    // },
    {
      name: "Shruti Mishra",
      domain: "Public Relations Member",
      gmail: "",
      linkedIn: "",
      imgUrl: shruti,
    },
    {
      name: "Vansh Gautam",
      domain: "Public Relations Member",
      gmail: "vanshgautam9011@gmail.com",
      linkedIn: "https://www.linkedin.com/in/vansh-gautam-92293b30a/",
      imgUrl: Vansh,
    },
    {
      name: "Riddhi Yadav",
      domain: "Graphics Member",
      gmail: "yriddhi51@gmail.com",
      linkedIn:
        "https://www.linkedin.com/in/riddhi-yadav-901b28293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      imgUrl: riddhi,
    },
    {
      name: "Anshika Chaurasia ",
      domain: "Public Relations ",
      gmail: "manya.khushi.mk@gmail.com",
      linkedIn:
        "https://www.linkedin.com/in/anshika-chaurasia-3a2218222",
      imgUrl: Anshika,
    },
    {
      name: "Dipti Gupta  ",
      domain: "Public Relations ",
      gmail: "diptisdk@gmail.com",
      linkedIn:
        "https://www.linkedin.com/in/dipti-gupta-a96a20317",
      imgUrl: Dipti,
    },
    {
      name: "Saransh Sahu",
      domain: "Corporate Relations",
      gmail: "saransh1315@gmail.com",
      linkedIn:
        "https://www.linkedin.com/in/saransh-sahu-4967a0303/",
      imgUrl: Saransh,
    },
    {
      name: "Shreya Baranwal ",
      domain: "Corporate Relations",
      gmail: "shreyabaranwal229@gmail.com",
      linkedIn:
        "https://www.linkedin.com/in/shreya-baranwal-1103802a5",
      imgUrl: Shreya,
    },
    {
      name: "Tejas Rastogi ",
      domain: "Corporate Relations",
      gmail: "tejasrastogi456@gmail.com",
      linkedIn:
        "https://www.linkedin.com/in/tejas-rastogi-292b81231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      imgUrl: Tejas,
    },
    {
      name: "Aashi Chaudhary",
      domain: "Corporate Relations",
      gmail: "aashi.chaudharryy@gmail.com",
      linkedIn:
        "https://www.linkedin.com/in/aashi-chaudhary-282405218/",
      imgUrl: Aashi,
    },
    {
      name: "Dhruv Srivastava ",
      domain: "Corporate Relations",
      gmail: "connectdhruv0606@gmail.com",
      linkedIn:
        "https://www.linkedin.com/in/dhruv-srivastava-666622257",
      imgUrl: Dhruv2,
    },
    {
      name: "Utkarsh Singh ",
      domain: "Technical",
      gmail: "utkarsh2020051@gmail.com",
      linkedIn:
        "https://www.linkedin.com/in/realutkarshh?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      imgUrl: Utkarsh,
    },
    {
      name: "Sonali Tyagi",
      domain: "Technical",
      gmail: "sonalityagi887@gmail.com ",
      linkedIn:
        "https://www.linkedin.com/in/sonali-tyagi-0895302a4",
      imgUrl: Sonali,
    },
    {
      name: "Janak Singh",
      domain: "Event Management ",
      gmail: "sjanak984@gmail.com",
      linkedIn:
        "https://www.linkedin.com/in/janak-singh-5496b5328/",
      imgUrl: Janak,
    },
    {
      name: "Dipali singh ",
      domain: "Event Management ",
      gmail: "dipalisingh5950@gmail.com ",
      linkedIn:
        "https://www.linkedin.com/in/dipali-singh-3988b6326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      imgUrl: Dipali,
    },
    {
      name: "Avani Sharma ",
      domain: "Corporate Relations",
      gmail: "sharmaavani2325@gmail.com",
      linkedIn:
        "https://www.linkedin.com/in/avani-sharma-042516321/",
      imgUrl: Avani,
    },
    {
      name: "Kushagra Srivastava ",
      domain: "Event Management ",
      gmail: "workspace.kushagra@gmail.com",
      linkedIn:
        "https://www.linkedin.com/in/kushagra-srivastava-b000642a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      imgUrl: Kush,
    },
    {
      name: "Priyanz Varshney  ",
      domain: "Event Management ",
      gmail: "priyanzvarshney2005@gmail.com",
      linkedIn:
        "https://www.linkedin.com/in/priyanz-varshney-8a0309215?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      imgUrl: Priyanz,
    },
    {
      name: "Rishika Batra",
      domain: "Event Management ",
      gmail: "batrarishika06@gmail.com",
      linkedIn:
        "https://www.linkedin.com/in/rishika-batra-92a4aa326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      imgUrl: Rishika,
    },
    {
      name: "Aditi Narang ",
      domain: "Event Management ",
      gmail: "aditi.2428cseaiml128@kiet.edu",
      linkedIn:
        "https://www.linkedin.com/in/aditi-narang-766544217?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      imgUrl: Aditi,
    },
    {
      name: "Antas Kumar Dubey ",
      domain: "Event Management ",
      gmail: "antasdubey.in@gmail.com",
      linkedIn:
        "https://www.linkedin.com/in/antas01",
      imgUrl: Antas,
    },
    {
      name: "Dhruv Chaudhary ",
      domain: "Event Management ",
      gmail: "dhruv.2428ece1189@kiet.edu",
      linkedIn:
        "https://www.linkedin.com/in/dhruv-chaudhary-370544328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      imgUrl: Dhruv,
    },
    {
      name: "Rishi Raj ",
      domain: "Event Management ",
      gmail: "rishi.2428ece1184@kiet.edu",
      linkedIn:
        "https://www.linkedin.com/in/rishi-raj-65624b330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      imgUrl: Rishi,
    },
    {
      name: "Tanya Mishra",
      domain: "Event Management ",
      gmail: "mishra.tanya101@gmail.com",
      linkedIn:
        "https://www.linkedin.com/in/tanya-mishra-279560328/",
      imgUrl: Tanya2,
    },
    {
      name: "Pari Gupta ",
      domain: "Event Management ",
      gmail: "parigupta4532@gmail.com",
      linkedIn:
        "https://www.linkedin.com/in/pari-gupta-07958130a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      imgUrl: Pari,
    },
    {
      name: "Pranjali Sehrawat",
      domain: "Technical",
      gmail: "pranjalisehrawat@gmail.com",
      linkedIn:
        "https://www.linkedin.com/in/pranjali-sehrawat-b90557328/",
      imgUrl: Pranjali,
    },
    {
      name: "Arpit Srivastava ",
      domain: "Technical",
      gmail: "arpit.srivastava7079@gmail.com",
      linkedIn:
        "https://www.linkedin.com/in/arpit-srivastava-954b78328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      imgUrl: Arpit,
    },
    {
      name: "Jatin Gupta",
      domain: "Technical",
      gmail: "jatingupta918306@gmail.com",
      linkedIn:
        "https://www.linkedin.com/in/jatin-gupta-4b1b83327/",
      imgUrl: Jatin,
    },
    {
      name: "Krishna Sharma",
      domain: "Technical",
      gmail: "krishnasharma7915@gmail.com",
      linkedIn:
        "https://www.linkedin.com/in/krishna-sharma-a3647b279/",
      imgUrl: Krishna,
    },
    {
      name: "Anurag Shrivastav ",
      domain: "Technical",
      gmail: "anurag13360@gmail.com",
      linkedIn:
        "https://www.linkedin.com/in/anurag-shrivastav-b7a616327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      imgUrl: Anurag,
    },
    {
      name: "Vaibhav Gupta",
      domain: "Technical",
      gmail: "vaibhavgupta.v890@gmail.com",
      linkedIn:
        "https://www.linkedin.com/in/vaibhav9705/",
      imgUrl: Vaibhav2,
    },
    {
      name: "Tulika Anand",
      domain: "Technical",
      gmail: "tulikaanand05@gmail.com",
      linkedIn:
        "https://www.linkedin.com/in/tulika-anand-643332311/",
      imgUrl: Tulika,
    },
    {
      name: "Luv Agarwal",
      domain: "Public Relations ",
      gmail: "luvagarwal2501@gmail.com",
      linkedIn:
        "https://www.linkedin.com/in/luv-agarwal-27912530b",
      imgUrl: Luv,
    },
    {
      name: "Ameera Arfeen ",
      domain: "Public Relations ",
      gmail: "ameeraarfeen7@gmail.com",
      linkedIn:
        "https://www.linkedin.com/in/ameera-arfeen-88b483325",
      imgUrl: Ameera,
    },
    {
      name: "Arjun Pundir ",
      domain: "Public Relations ",
      gmail: "arjun.pundir7626@gmail.com",
      linkedIn:
        "https://www.linkedin.com/in/arjun-pundir-384934254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      imgUrl: Arjun,
    },
    {
      name: "Atharv Gupta ",
      domain: "Public Relations ",
      gmail: "roboatharv@gmail.com",
      linkedIn:
        "https://www.linkedin.com/in/atharv-gupta-18b2a7314",
      imgUrl: Atharv,
    },
    {
      name: "Anant Mittal",
      domain: "Technical",
      gmail: "anantmittal943@gmail.com",
      linkedIn:
        "https://www.linkedin.com/in/anant-mittal-63940b313/",
      imgUrl: Anant,
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
