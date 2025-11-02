import { motion } from "framer-motion";
import { fadeIn } from "../../styles/Variant.js";

import linkedInIcon from "../../assets/OurTeam/socialMedia/icons8-linkedin.svg";
import gamilIcon from "../../assets/OurTeam/socialMedia/icons8-gmail.svg";
import "./OurTeam.css";
import riddhi from "../../assets/OurTeam/Riddhi.jpg";
// import divym from "../../assets/OurTeam/Divyam.jpeg";
// import shruti from "../../assets/OurTeam/Shruti.jpeg";
import Ameera from "../../assets/OurTeam/Ameera.jpg";
import Ansh from "../../assets/OurTeam/Ansh.jpg";
import Vanshika from "../../assets/OurTeam/Vanshika.jpg";
import Ayush2 from "../../assets/OurTeam/Ayush2.jpg";
import Siddhant from "../../assets/OurTeam/Siddhant.jpg";
import Preeti from "../../assets/OurTeam/Preeti.jpg";
import Nishant2 from "../../assets/OurTeam/Nishant2.jpg";
import Ananya from "../../assets/OurTeam/Ananya.jpg";
import Ishita from "../../assets/OurTeam/Ishita.jpg";
import Pratham from "../../assets/OurTeam/Pratham.jpeg";
import Avani2 from "../../assets/OurTeam/Avani2.jpg";
import Karn from "../../assets/OurTeam/Karn.jpg";
import Yuvika from "../../assets/OurTeam/Yuvika.jpg";
import Abhijeet from "../../assets/OurTeam/Abhijeet.jpg";
import Shreyasi from "../../assets/OurTeam/Shreyasi.jpg";
// import Naman from "../../assets/OurTeam/Naman.jpg";
import Atharv from "../../assets/OurTeam/Atharv.jpg";
import Rupesh from "../../assets/OurTeam/Rupesh.jpg";
import Yash2 from "../../assets/OurTeam/Yash2.jpg";
import Shaswat2 from "../../assets/OurTeam/Shaswat2.jpg";
import Aashi from "../../assets/OurTeam/Aashi.jpg";
import Naman from "../../assets/OurTeam/Naman.jpg";
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
import apporv from "../../assets/OurTeam/apporv.jpg";
import Dipti from "../../assets/OurTeam/Dipti.jpg";
import Anshika from "../../assets/OurTeam/Anshika.jpg";
import Vansh from "../../assets/OurTeam/Vansh.jpg";
import arpita from "../../assets/OurTeam/Arpita.jpg";
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
import khushi from "../../assets/OurTeam/Khushi-Singh.jpg";
import arush from "../../assets/OurTeam/Arush-Dixit.jpg";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function OurTeam() {
  const Coordinators = [
    {
      name: "Aryan Srivastava",
      domain: "Overall Coordinator",
      imgUrl: aryan2,
      linkedIn: "https://www.linkedin.com/in/aryan-srivastava-4919b5259",
      gmail: "aryankiofficial@gmail.com"
    },
    {
      name: "Harsh Pundhir",
      domain: "Overall Coordinator",
      imgUrl: harsh2,
      linkedIn: "https://www.linkedin.com/in/harsh-pundhir-15b349262",
      gmail: "harsh.2226en1043@kiet.edu"
    }
  ];

  const DeputyCoordinators = [
    {
      name: "Kshitij Sharma",
      domain: "Deputy Coordinator & Corporate Relations Manager",
      imgUrl: "https://e-cell.in/assets/kshitij-sdM3jMR6.jpg",
      linkedIn: "https://linkedin.com/in/kshitij-sharma-67b745289",
      gmail: "kshitij.2226csit1044@kiet.edu"
    }
  ];

  
  const Secretariats = [
    {
      name: "Yash Kumar Singh",
      domain: "General Secretary",
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/e-cell-main-app-68d8c.appspot.com/o/yk66478%40gmail.com.jpg?alt=media&token=9c0444de-a7d3-4035-b685-c0c9fdd9ca8e",
      linkedIn: "https://www.linkedin.com/in/yashksingh-connect",
      gmail: "yk66478@gmail.com"
    },
    {
      name: "Shashwat Rai",
      domain: "Finance Secretary",
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/e-cell-main-app-68d8c.appspot.com/o/shashwatrai575%40gmail.com.jpg?alt=media&token=48495ce6-1849-4663-b272-135298c158dc",
      linkedIn: "https://www.linkedin.com/in/shashwatrai05/",
      gmail: "shashwatrai575@gmail.com"
    }    
  ]

  const DomainManagers = [
    {
      name: "Nakshatra Manglik",
      domain: "Technical Manager",
      imgUrl: "https://e-cell.in/assets/Naksh-gcrY9KYn.jpg",
      linkedIn: "https://www.linkedin.com/in/nakshatra-manglik?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      gmail: "nakshatra.2226csit11@kiet.edu"
    },
    {
      name: "Arpita Dwivedi",
      domain: "Graphics Manager",
      imgUrl: arpita,
      linkedIn: "https://www.linkedin.com/in/arpita-dwivedi-0a7b72255/",
      gmail: "arpitadwivedi23074@gmail.com"
    },
    {
      name: "Tanya Varshney",
      domain: "Marketing Manager",
      imgUrl: "https://e-cell.in/assets/tanya-5vy-f_Kr.jpg",
      linkedIn: "https://www.linkedin.com/in/tanya-varshney08/",
      gmail: "tanyavarshney0123@gmail.com"
    }
  ]

  const prMembers = [
    {
      name: "ANJALI SHARMA",
      domain: "Public Relations Member",
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/e-cell-main-app-68d8c.appspot.com/o/anjali34490%40gmail.com.jpg?alt=media&token=cbcc430b-a496-4039-9b9d-5a31fd070b1f",
      linkedIn: "https://www.linkedin.com/in/anjali-sharma-448a9b292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      gmail: "anjali34490@gmail.com"
    },
    {
      name: "Arush Dixit",
      domain: "Public Relations Member",
      imgUrl: arush,
      linkedIn: "https://www.linkedin.com/in/arushdixit98?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      gmail: "arushdi2004@gmail.com"
    },
    {
      name: "Khushi Singh Suryavanshi",
      domain: "Public Relations Member",
      imgUrl: khushi,
      linkedIn: "https://www.linkedin.com/in/khushi-singh-suryavanshi-a5479330a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      gmail: "ks9737315@gmail.com"
    },
    {
      name: "ANSHIKA CHAURASIA",
      domain: "Public Relations Member",
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/e-cell-main-app-68d8c.appspot.com/o/anshikachaurasia0407%40gmail.com.jpg?alt=media&token=21900e3b-017a-4c0a-b818-5a2d18a6723c",
      linkedIn: "https://www.linkedin.com/in/anshika-chaurasia-3a2218222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      gmail: "anshikachaurasia0407@gmail.com"
    },
    {
      name: "ARJUN SINGH PUNDIR",
      domain: "Public Relations Member",
      imgUrl: "https://e-cell.in/assets/Arjun-m8W3F57p.jpg",
      linkedIn: "https://www.linkedin.com/in/arjun-pundir-384934254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      gmail: "arjun.pundir7626@gmail.com"
    },
    {
      name: "Dipti Gupta",
      domain: "Public Relations Member",
      imgUrl: "https://e-cell.in/assets/Dipti-PbZ_VwyQ.jpg",
      linkedIn: "https://www.linkedin.com/in/dipti-gupta-a96a20317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      gmail: "diptisdk@gmail.com"
    },
    {
      name: "Shreyasi Rawat",
      domain: "Public Relations Member",
      imgUrl: "https://e-cell.in/assets/Shreyasi-4WDvJp1s.jpg",
      linkedIn: "https://www.linkedin.com/in/shreyasi-rawat-b85280327",
      gmail: "shreyasirawat30.14@gmail.com"
    },
    {
      name: "Vansh Gautam",
      domain: "Public Relations Member",
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/e-cell-main-app-68d8c.appspot.com/o/vansh.2428ece465%40kiet.edu.jpg?alt=media&token=dba06f24-d7ca-4119-9562-2479e57e1896",
      linkedIn: "https://www.linkedin.com/in/vansh-gautam-92293b30a/",
      gmail: "vansh.2428ece465@kiet.edu"
    }
  ];

  const corporateMembers = [
    {
      name: "Ansh Yadav",
      domain: "Corporate Member",
      imgUrl: "https://e-cell.in/assets/Ansh-DRr1hUCJ.jpg",
      linkedIn: "https://www.linkedin.com/in/ansh-yadav-6ab1182a1",
      gmail: "yadavansh0721@gmail.com"
    },
    {
      name: "Gurpreet Singh Kochar",
      domain: "Corporate Member",
      imgUrl: "https://e-cell.in/assets/Gurpreet-TeYSW38e.jpeg",
      linkedIn: "https://www.linkedin.com/in/gurpreet-singh-kochar",
      gmail: "gskochar24@gmail.com"
    },
    {
      name: "Saransh Sahu",
      domain: "Corporate Member",
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/e-cell-main-app-68d8c.appspot.com/o/saransh1315%40gmail.com.jpg?alt=media&token=b4134e70-67a0-4be7-92c8-90204f3355c8",
      linkedIn: "https://www.linkedin.com/in/saransh-sahu-4967a0303?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      gmail: "saransh1315@gmail.com"
    },
    {
      name: "Yash Jain",
      domain: "Corporate Member",
      imgUrl: "https://e-cell.in/assets/Yash2-qGzLX0-x.jpg",
      linkedIn: "https://www.linkedin.com/in/yash-jain-09a901285",
      gmail: "jainyash1404@gmail.com"
    }
  ];

  const eventsMembers = [
    {
      name: "Kushagra Srivastava",
      domain: "Events Member",
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/e-cell-main-app-68d8c.appspot.com/o/sunilsrivastava1233%40gmail.com.jpg?alt=media&token=d9958a67-0da0-477d-bec3-f48beea010f1",
      linkedIn: "https://www.linkedin.com/in/kushagra-srivastava-b000642a4",
      gmail: "sunilsrivastava1233@gmail.com"
    },
    {
      name: "PRATHAM MISHRA",
      domain: "Events Member",
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/e-cell-main-app-68d8c.appspot.com/o/pratham.2327it1142%40kiet.edu.jpg?alt=media&token=100dc07a-1b32-47b8-a9dc-8c1c328d03d1",
      linkedIn: "https://www.linkedin.com/in/pratham-mishra-850497270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      gmail: "pratham.2327it1142@kiet.edu"
    },
    {
      name: "Priyanz Varshney",
      domain: "Events Member",
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/e-cell-main-app-68d8c.appspot.com/o/priyanzvarshney2005%40gmail.com.jpg?alt=media&token=e08357df-bcd5-4572-bc82-2037a87b560c",
      linkedIn: "https://www.linkedin.com/in/priyanz-varshney-8a0309215?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      gmail: "priyanzvarshney2005@gmail.com"
    },
    // {
    //   name: "Aditi Narang",
    //   domain: "Events Member",
    //   imgUrl: "https://firebasestorage.googleapis.com/v0/b/e-cell-main-app-68d8c.appspot.com/o/narangaditi709%40gmail.com.jpg?alt=media&token=c6b4553c-ff70-4db4-970c-7dbbf632e19e",
    //   linkedIn: "https://www.linkedin.com/in/aditi-narang-766544217?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    //   gmail: "narangaditi709@gmail.com"
    // },
    {
      name: "Ananya Baranwal",
      domain: "Events Member",
      imgUrl: "https://e-cell.in/assets/Ananya-Ve1TkB5w.jpg",
      linkedIn: "https://www.linkedin.com/in/ananya-baranwal-a78323354/",
      gmail: "baranwalananya2006@gmail.com"
    },
    {
      name: "Antas Dubey",
      domain: "Events Member",
      imgUrl: "https://e-cell.in/assets/Antas-OQtqH1jB.jpg",
      linkedIn: "www.linkedin.com/antas01",
      gmail: "antasdubey.in@gmail.com"
    },
    {
      name: "Dhruv Chaudhary",
      domain: "Events Member",
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/e-cell-main-app-68d8c.appspot.com/o/b.techdhruvchaudhary%40gmail.com.jpg?alt=media&token=58672be9-4f51-4687-95c6-7a3220da442f",
      linkedIn: "https://www.linkedin.com/in/dhruv-chaudhary-370544328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      gmail: "b.techdhruvchaudhary@gmail.com"
    },
    // {
    //   name: "Dipali Singh",
    //   domain: "Events Member",
    //   imgUrl: "https://e-cell.in/assets/Dipali-0I405_94.jpg",
    //   linkedIn: "https://www.linkedin.com/in/dipali-singh-3988b6326",
    //   gmail: "dipali.2428ece1107@kiet.edu"
    // },
    {
      name: "Janak Singh",
      domain: "Events Member",
      imgUrl: "https://e-cell.in/assets/Janak-HliV4h4Z.jpg",
      linkedIn: "https://www.linkedin.com/in/janak-singh-5496b5328/",
      gmail: "sjanak984@gmail.com"
    },
    {
      name: "Pari Gupta",
      domain: "Events Member",
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/e-cell-main-app-68d8c.appspot.com/o/parigupta4532%40gmail.com.jpg?alt=media&token=43d2e490-b1c5-43cc-92bd-171c6a9cb406",
      linkedIn: "https://www.linkedin.com/in/pari-gupta-07958130a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      gmail: "parigupta4532@gmail.com"
    },
    {
      name: "Rishi Raj",
      domain: "Events Member",
      imgUrl: "https://e-cell.in/assets/Rishi-ALWUt_x5.jpg",
      linkedIn: "https://www.linkedin.com/in/rishi-raj-65624b330",
      gmail: "rishiraj01102004@gmail.com"
    },
    {
      name: "Rishika Batra",
      domain: "Events Member",
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/e-cell-main-app-68d8c.appspot.com/o/batrarishika06%40gmail.com.jpg?alt=media&token=eea3696a-3df1-4754-bc7e-a2e5628a8703",
      linkedIn: "https://www.linkedin.com/in/rishika-batra-92a4aa326",
      gmail: "batrarishika06@gmail.com"
    },
    {
      name: "Tanya Mishra",
      domain: "Events Member",
      imgUrl: Tanya2,
      linkedIn: "https://www.linkedin.com/in/tanya-mishra-279560328",
      gmail: "personal.tanya101@gmail.com"
    }
  ];

  const GraphicsMembers = [
    // {
    //   name: "Riddhi Yadav",
    //   domain: "Graphics Member",
    //   imgUrl: "https://firebasestorage.googleapis.com/v0/b/e-cell-main-app-68d8c.appspot.com/o/yriddhi51%40gmail.com.jpg?alt=media&token=3d9cfb94-6c99-468e-bf27-e87354541698",
    //   linkedIn: "https://www.linkedin.com/in/riddhi-yadav-901b28293",
    //   gmail: "yriddhi51@gmail.com"
    // },
    // {
    //   name: "Yashica Agarwal",
    //   domain: "Graphics Member",
    //   imgUrl: yashica,
    //   linkedIn: "https://www.linkedin.com/in/yashica-agarwal-9b1493297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    //   gmail: "yashica.2327cse1019@kiet.edu"
    // },
    {
      name: "ABHIJEET KUMAR GAUTAM",
      domain: "Graphics Member",
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/e-cell-main-app-68d8c.appspot.com/o/abhijeetgautam000055%40gmail.com.jpg?alt=media&token=920c6748-e4a6-4636-a1c4-e0e6a022e212",
      linkedIn: "https://www.linkedin.com/in/abhijeet-kumar-gautam-885710233",
      gmail: "abhijeetgautam000055@gmail.com"
    },
    {
      name: "Avani Singhal",
      domain: "Graphics Member",
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/e-cell-main-app-68d8c.appspot.com/o/avani.2428elce1954%40kiet.edu.jpg?alt=media&token=168f8721-f882-4da6-adb4-7202489774ac",
      linkedIn: "https://www.linkedin.com/in/avani-singhal-9a348826a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      gmail: "avani.2428elce1954@kiet.edu"
    },
    // {
    //   name: "Ayush Kumar",
    //   domain: "Graphics Member",
    //   imgUrl: "https://firebasestorage.googleapis.com/v0/b/e-cell-main-app-68d8c.appspot.com/o/ayushpersonal20%40gmail.com.jpg?alt=media&token=2606b2ff-d309-474b-99df-fdb71b37ed52",
    //   linkedIn: "https://www.linkedin.com/in/ayush-kumar-undefined-695632334/",
    //   gmail: "ayushpersonal20@gmail.com"
    // },
    {
      name: "Karnveer Dixit",
      domain: "Graphics Member",
      imgUrl: Karn,
      linkedIn: "http://www.linkedin.com/in/karnveer-dixit-9b5bb3333",
      gmail: "dtanishq46@gmail.com"
    },
    // {
    //   name: "Nishant Vishwakarma",
    //   domain: "Graphics Member",
    //   imgUrl: "https://e-cell.in/assets/Nishant2-5ciF020g.jpg",
    //   linkedIn: "https://www.linkedin.com/in/nishant-vishwakarma-875a34328",
    //   gmail: "nishantvishwakarma6789@gmail.com"
    // },
    // {
    //   name: "Preeti Singh",
    //   domain: "Graphics Member",
    //   imgUrl: "https://firebasestorage.googleapis.com/v0/b/e-cell-main-app-68d8c.appspot.com/o/preetisinghthakur07%40gmail.com.jpg?alt=media&token=27e8a81c-053c-47ee-9636-08a41e38d2fc",
    //   linkedIn: "http://www.linkedin.com/in/preeti-singh-9b8554328",
    //   gmail: "preetisinghthakur07@gmail.com"
    // }
  ];

  const TechnicalMembers = [
    {
      name: "Saksham Jain",
      domain: "Technical Member",
      imgUrl: Saksham,
      linkedIn: "https://www.linkedin.com/in/sakshamjain007",
      gmail: "saksham.2327cseml100@kiet.edu"
    },
    {
      name: "Shiv Kumar Gupta",
      domain: "Technical Member",
      imgUrl: Shiv,
      linkedIn: "https://www.linkedin.com/in/shiv-kumar-gupta-b74125280/",
      gmail: "contactshivgupta@gmail.com"
    },
    // {
    //   name: "Siddhant Gupta",
    //   domain: "Technical Member",
    //   imgUrl: "https://e-cell.in/assets/Siddhant-OPnrWRpU.jpg",
    //   linkedIn: "https://www.linkedin.com/in/siddhant-gupta-065794287",
    //   gmail: "siddhant.2327cseai10@kiet.edu"
    // },
    {
      name: "Sonali Tyagi",
      domain: "Technical Member",
      imgUrl: "https://e-cell.in/assets/Sonali-ewEFPgt9.jpg",
      linkedIn: "https://www.linkedin.com/in/sonali-tyagi-0895302a4",
      gmail: "sonalityagi887@gmail.com"
    },
    {
      name: "Utkarsh Singh",
      domain: "Technical Member",
      imgUrl: Utkarsh,
      linkedIn: "https://www.linkedin.com/in/realutkarshh",
      gmail: "utkarsh2020051@gmail.com"
    },
    {
      name: "Anant Mittal",
      domain: "Technical Member",
      imgUrl: Anant,
      linkedIn: "https://www.linkedin.com/in/anant-mittal-63940b313/",
      gmail: "anantmittal943@gmail.com"
    },
    {
      name: "Anurag Shrivastav",
      domain: "Technical Member",
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/e-cell-main-app-68d8c.appspot.com/o/anurag13360%40gmail.com.jpg?alt=media&token=92adb60d-901d-4bb8-8305-30a4ed6c8c43",
      linkedIn: "https://www.linkedin.com/in/anurag-shrivastav-b7a616327",
      gmail: "anurag13360@gmail.com"
    },
    {
      name: "Arpit Srivastava",
      domain: "Technical Member",
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/e-cell-main-app-68d8c.appspot.com/o/arpit.srivastava7079%40gmail.com.jpg?alt=media&token=16cf9e27-1df3-4ae3-9d20-1960825ae1f1",
      linkedIn: "https://www.linkedin.com/in/arpit-srivastava-954b78328",
      gmail: "arpit.srivastava7079@gmail.com"
    },
    {
      name: "Jatin Gupta",
      domain: "Technical Member",
      imgUrl: "https://e-cell.in/assets/Jatin-vvnVoh0C.jpg",
      linkedIn: "https://www.linkedin.com/in/jatin-gupta-4b1b83327/",
      gmail: "jatingupta918306@gmail.com"
    },
    {
      name: "Tulika Anand",
      domain: "Technical Member",
      imgUrl: "https://e-cell.in/assets/Tulika-oe3CCpxP.jpg",
      linkedIn: "https://www.linkedin.com/in/tulika-anand-643332311",
      gmail: "tulikaanand05@gmail.com"
    },
    {
      name: "Vaibhav Gupta",
      domain: "Technical Member",
      imgUrl: Vaibhav2,
      linkedIn: "https://www.linkedin.com/in/vaibhav9705",
      gmail: "vaibhavgupta.v890@gmail.com"
    },
    {
      name: "Vanshika Arora",
      domain: "Technical Member",
      imgUrl: "https://e-cell.in/assets/Vanshika-t0Wl3dzW.jpg",
      linkedIn: "https://www.linkedin.com/in/vanshika-arora-325323308",
      gmail: "vanshika.2428cseaiml@kiet.edu"
    },
    // {
    //   name: "Yuvika Jindal",
    //   domain: "Technical Member",
    //   imgUrl: "https://firebasestorage.googleapis.com/v0/b/e-cell-main-app-68d8c.appspot.com/o/yuvika.2428cs2163%40kiet.edu.jpg?alt=media&token=b85250aa-1768-4792-983e-0e2da080b3bc",
    //   linkedIn: "https://www.linkedin.com/in/yuvika-jindal-6b3181328/",
    //   gmail: "yuvika.2428cs2163@kiet.edu"
    // }
  ];


  // const Administrators = [
  //   {
  //     name: "Apoorv Sharma",
  //     domain: "Administrator",
  //     imgUrl: apporv,
  //     linkedIn: "https://www.linkedin.com/in/apoorv2804/",
  //     gmail: "aaapoorvsharma@gmail.com",
  //   },
  //   {
  //     name: "Vaibhav Choudhary",
  //     domain: "Administrator",
  //     imgUrl: Vaibhav,
  //     linkedIn: "https://www.linkedin.com/in/vaibhavchoudhary16",
  //     gmail: "choudharyvaibhav1609@gmail.com",
  //   },
  // ];
  // const DeputyAdministrators = [
  //   {
  //     name: "Sudhanshu",
  //     domain: "Deputy Administrator & Event Manager",
  //     imgUrl: shud,
  //     linkedIn: "",
  //     gmail: "",
  //   },
  //   {
  //     name: "Gaurav Payal",
  //     domain: "Deputy Administrator & Public Relations Member Mentor",
  //     imgUrl: GauravPayal,
  //     linkedIn: "https://www.linkedin.com/in/2oo3-gaurav",
  //     gmail: "gaurav2p02@gmail.com",
  //   },
  // ];
  // const Treasurer = [
  //   {
  //     name: "Ayush Prakash",
  //     domain: "Treasurer",
  //     imgUrl: Ayush,
  //     linkedIn: "",
  //     gmail: "",
  //   },
  // ];
  // const corporateMembers = [
  //   {
  //     name: "Kshitij Sharma",
  //     domain: "Corporate Member",
  //     gmail: "kshitijsharma1901@gmail.com",
  //     linkedIn: "https://linkedin.com/in/kshitij-sharma-67b745289",
  //     imgUrl: kshitij,
  //   },
  //   {
  //     name: "Ansh Yadav",
  //     domain: "Corporate Member",
  //     gmail: "ansh.2327cse1176@kiet.edu",
  //     linkedIn:
  //       "https://www.linkedin.com/in/ansh-yadav-6ab1182a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  //     imgUrl: Ansh,
  //   },
  //   {
  //     name: "Gurpreet Singh",
  //     domain: "Corporate Member",
  //     mail: "gskochar24@gmail.com",
  //     linkedIn:
  //       "https://www.linkedin.com/in/gurpreet-singh-kochar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  //     imgUrl: Gurpreet,
  //   },
  //   {
  //     name: "Aashi Chaudhary",
  //     domain: "Corporate Member",
  //     gmail: "aashi.chaudharryy@gmail.com",
  //     linkedIn: "https://www.linkedin.com/in/aashi-chaudhary-282405218/",
  //     imgUrl: Aashi,
  //   },
  //   {
  //     name: "Avani Sharma",
  //     domain: "Corporate Member",
  //     gmail: "sharmaavani2325@gmail.com",
  //     linkedIn: "https://www.linkedin.com/in/avani-sharma-042516321/",
  //     imgUrl: Avani,
  //   },
  //   {
  //     name: "Dhruv Srivastava",
  //     domain: "Corporate Member",
  //     gmail: "connectdhruv0606@gmail.com",
  //     linkedIn: "https://www.linkedin.com/in/dhruv-srivastava-666622257",
  //     imgUrl: Dhruv2,
  //   },
  //   {
  //     name: "Naman Verma",
  //     domain: "Corporate Member",
  //     mail: "verma023naman@gmail.com",
  //     linkedIn: "https://www.linkedin.com/in/naman-verma-8ab2b3328",
  //     imgUrl: Naman,
  //   },
  //   {
  //     name: "Rupesh Chaurasia",
  //     domain: "Corporate Member",
  //     gmail: "rupeshchaurasia012511@gmail.com",
  //     linkedIn: "https://www.linkedin.com/in/rupesh-chaurasia144/",
  //     imgUrl: Rupesh,
  //   },
  //   {
  //     name: "Saransh Sahu",
  //     domain: "Corporate Member",
  //     gmail: "saransh1315@gmail.com",
  //     linkedIn: "https://www.linkedin.com/in/saransh-sahu-4967a0303/",
  //     imgUrl: Saransh,
  //   },
  //   {
  //     name: "Shaswat Mishra",
  //     domain: "Corporate Member",
  //     mail: "mishrashaswat29@gmail.com",
  //     linkedIn: "https://www.linkedin.com/in/shaswat-mishra-320863252/",
  //     imgUrl: Shaswat2,
  //   },
  //   {
  //     name: "Shreya Baranwal",
  //     domain: "Corporate Member",
  //     gmail: "shreyabaranwal229@gmail.com",
  //     linkedIn: "https://www.linkedin.com/in/shreya-baranwal-1103802a5",
  //     imgUrl: Shreya,
  //   },
  //   {
  //     name: "Tejas Rastogi",
  //     domain: "Corporate Member",
  //     gmail: "tejasrastogi456@gmail.com",
  //     linkedIn: "https://www.linkedin.com/in/tejas-rastogi-292b81231",
  //     imgUrl: Tejas,
  //   },
  //   {
  //     name: "Vanshika Arora",
  //     domain: "Corporate Member",
  //     mail: "arora.vanshika1110@gmail.com",
  //     linkedIn: "https://www.linkedin.com/in/vanshika-arora-325323308",
  //     imgUrl: Vanshika,
  //   },
  //   {
  //     name: "Yash Jain",
  //     domain: "Corporate Member",
  //     mail: "jainyash1404@gmail.com",
  //     linkedIn: "https://www.linkedin.com/in/yash-jain-09a901285",
  //     imgUrl: Yash2,
  //   },
  // ];

  // const DomainManagers = [
  //   {
  //     name: "Gaurav Namdev",
  //     domain: "Corporate Member Manager",
  //     imgUrl: GauravNamdev,
  //     linkedIn: "",
  //     gmail: "",
  //   },
  //   {
  //     name: "Mansi Verma",
  //     domain: "Graphics Member Manager",
  //     imgUrl: Mansi,
  //     linkedIn: "",
  //     gmail: "",
  //   },
  // ];
  // const prMembers = [
  //   {
  //     name: "Aryan Srivastava",
  //     domain: "Public Relations Member",
  //     imgUrl: aryan2,
  //     linkedIn: "https://www.linkedin.com/in/aryan-srivastava-4919b5259",
  //     gmail: "aryankiofficial@gmail.com",
  //   },
  //   {
  //     name: "Tanya Varshney",
  //     domain: "Public Relations Member",
  //     imgUrl: tanya,
  //     linkedIn: "",
  //     gmail: "",
  //   },
  //   // {
  //   //   name: "Divyam Asthana",
  //   //   domain: "Public Relations Member",
  //   //   gmail: "divyamasthanaprofessional.001@gmail.com",
  //   //   linkedIn: "https://www.linkedin.com/in/divyam-asthana",
  //   //   imgUrl: divym,
  //   // },
  //   {
  //     name: "Ameera Arfeen",
  //     domain: "Public Relations Member",
  //     gmail: "ameeraarfeen7@gmail.com",
  //     linkedIn: "https://www.linkedin.com/in/ameera-arfeen-88b483325",
  //     imgUrl: Ameera,
  //   },
  //   {
  //     name: "Anshika Chaurasia",
  //     domain: "Public Relations Member",
  //     gmail: "manya.khushi.mk@gmail.com",
  //     linkedIn: "https://www.linkedin.com/in/anshika-chaurasia-3a2218222",
  //     imgUrl: Anshika,
  //   },
  //   {
  //     name: "Arjun Pundir",
  //     domain: "Public Relations Member",
  //     gmail: "arjun.pundir7626@gmail.com",
  //     linkedIn: "https://www.linkedin.com/in/arjun-pundir-384934254",
  //     imgUrl: Arjun,
  //   },
  //   {
  //     name: "Atharv Gupta",
  //     domain: "Public Relations Member",
  //     gmail: "roboatharv@gmail.com",
  //     linkedIn: "https://www.linkedin.com/in/atharv-gupta-18b2a7314",
  //     imgUrl: Atharv,
  //   },
  //   {
  //     name: "Dipti Gupta",
  //     domain: "Public Relations Member",
  //     gmail: "diptisdk@gmail.com",
  //     linkedIn: "https://www.linkedin.com/in/dipti-gupta-a96a20317",
  //     imgUrl: Dipti,
  //   },

  //   {
  //     name: "Luv Agarwal",
  //     domain: "Public Relations Member",
  //     gmail: "luvagarwal2501@gmail.com",
  //     linkedIn: "https://www.linkedin.com/in/luv-agarwal-27912530b",
  //     imgUrl: Luv,
  //   },
  //   {
  //     name: "Vansh Gautam",
  //     domain: "Public Relations Member",
  //     gmail: "vanshgautam9011@gmail.com",
  //     linkedIn: "https://www.linkedin.com/in/vansh-gautam-92293b30a/",
  //     imgUrl: Vansh,
  //   },
  // ];
  // const GraphicsMembers = [
  //   {
  //     name: "Arpita Dwivedi",
  //     domain: "Graphics Member",
  //     imgUrl: arpita,
  //     linkedIn: "",
  //     gmail: "",
  //   },
  //   {
  //     name: "Harsh Pundhir",
  //     domain: "Graphics Member",
  //     imgUrl: harsh2,
  //     linkedIn: "",
  //     gmail: "",
  //   },
  //   {
  //     name: "Riddhi Yadav",
  //     domain: "Graphics Member",
  //     gmail: "yriddhi51@gmail.com",
  //     linkedIn: "https://www.linkedin.com/in/riddhi-yadav-901b28293",
  //     imgUrl: riddhi,
  //   },
  //   {
  //     name: "Yashica Agarwal",
  //     domain: "Graphics Member",
  //     gmail: "yashica.agarwal3@gmail.com",
  //     linkedIn: "https://www.linkedin.com/in/yashica-agarwal-9b1493297",
  //     imgUrl: yashica,
  //   },

  //   {
  //     name: "Abhijeet Kumar Gautam  ",
  //     domain: "Graphics Member",
  //     gmail: "abhijeetgautam000055@gmail.com",
  //     linkedIn: "https://www.linkedin.com/in/abhijeet-kumar-gautam-885710233",
  //     imgUrl: Abhijeet,
  //   },
  //   {
  //     name: "Ananya Baranwal",
  //     domain: "Graphics Member",
  //     mail: "baranwalananya2006@gmail.com",
  //     linkedIn: "",
  //     imgUrl: Ananya,
  //   },
  //   {
  //     name: "Avani Singhal",
  //     domain: "Graphics Member",
  //     gmail: "avani0277@gmail.com",
  //     linkedIn: "https://www.linkedin.com/in/avani-singhal-9a348826a",
  //     imgUrl: Avani2,
  //   },
  //   {
  //     name: "Ayush Kumar",
  //     domain: "Graphics Member",
  //     mail: "ayushpersonal20@gmail.com",
  //     linkedIn: "https://www.linkedin.com/in/ayush-kumar-undefined-695632334/",
  //     imgUrl: Ayush2,
  //   },
  //   {
  //     name: "Ishita Jindal",
  //     domain: "Graphics Member",
  //     mail: "ishijindal1310@gmail.com",
  //     linkedIn: "https://www.linkedin.com/in/ishijindal/",
  //     imgUrl: Ishita,
  //   },
  //   {
  //     name: "Karnveer Dixit",
  //     domain: "Graphics Member",
  //     mail: "dtanishq46@gmail.com",
  //     linkedIn: "http://www.linkedin.com/in/karnveer-dixit-9b5bb3333",
  //     imgUrl: Karn,
  //   },

  //   {
  //     name: "Nishant Vishwakarma",
  //     domain: "Graphics Member",
  //     mail: "nishantvishwakarma6789@gmail.com",
  //     linkedIn: "https://www.linkedin.com/in/nishant-vishwakarma-875a34328",
  //     imgUrl: Nishant2,
  //   },
  //   {
  //     name: "Preeti Singh",
  //     domain: "Graphics Member",
  //     mail: "preetisinghthakur07@gmail.com",
  //     linkedIn: "http://www.linkedin.com/in/preeti-singh-9b8554328",
  //     imgUrl: Preeti,
  //   },

  //   {
  //     name: "Shreyasi Rawat",
  //     domain: "Graphics Member",
  //     gmail: "shreyasirawat30.14@gmail.com",
  //     linkedIn: "https://www.linkedin.com/in/shreyasi-rawat-b85280327",
  //     imgUrl: Shreyasi,
  //   },
  //   {
  //     name: "Yuvika Jindal",
  //     domain: "Graphics Member",
  //     mail: "yuvikajindal241106@gmail.com",
  //     linkedIn: "https://www.linkedin.com/in/yuvika-jindal-6b3181328/",
  //     imgUrl: Yuvika,
  //   },
  // ];
  // const eventsMembers = [
  //   {
  //     name: "Anish Kumar",
  //     domain: "Events Member",
  //     gmail: "anissh946@gmail.com",
  //     linkedIn: "http://www.linkedin.com/in/anish-kumar-126140295",
  //     imgUrl: anish,
  //   },
  //   {
  //     name: "Kushagra Srivastava",
  //     domain: "Events Member",
  //     gmail: "workspace.kushagra@gmail.com",
  //     linkedIn: "https://www.linkedin.com/in/kushagra-srivastava-b000642a4",
  //     imgUrl: Kush,
  //   },
  //   {
  //     name: "Pratham Mishra",
  //     domain: "Events Member",
  //     gmail: "mishrayogi04@gmail.com",
  //     linkedIn: "https://www.linkedin.com/in/pratham-mishra-850497270",
  //     imgUrl: Pratham,
  //   },

  //   {
  //     name: "Priyanz Varshney",
  //     domain: "Events Member",
  //     gmail: "priyanzvarshney2005@gmail.com",
  //     linkedIn: "https://www.linkedin.com/in/priyanz-varshney-8a0309215",
  //     imgUrl: Priyanz,
  //   },
  //   {
  //     name: "Aditi Narang",
  //     domain: "Events Member",
  //     gmail: "aditi.2428cseaiml128@kiet.edu",
  //     linkedIn: "https://www.linkedin.com/in/aditi-narang-766544217",
  //     imgUrl: Aditi,
  //   },
  //   {
  //     name: "Antas Kumar Dubey",
  //     domain: "Events Member",
  //     gmail: "antasdubey.in@gmail.com",
  //     linkedIn: "https://www.linkedin.com/in/antas01",
  //     imgUrl: Antas,
  //   },
  //   {
  //     name: "Dipali singh",
  //     domain: "Events Member",
  //     gmail: "dipalisingh5950@gmail.com",
  //     linkedIn: "https://www.linkedin.com/in/dipali-singh-3988b6326",
  //     imgUrl: Dipali,
  //   },
  //   {
  //     name: "Dhruv Chaudhary",
  //     domain: "Events Member",
  //     gmail: "dhruv.2428ece1189@kiet.edu",
  //     linkedIn: "https://www.linkedin.com/in/dhruv-chaudhary-370544328",
  //     imgUrl: Dhruv,
  //   },
  //   {
  //     name: "Janak Singh",
  //     domain: "Events Member",
  //     gmail: "sjanak984@gmail.com",
  //     linkedIn: "https://www.linkedin.com/in/janak-singh-5496b5328/",
  //     imgUrl: Janak,
  //   },
  //   {
  //     name: "Pari Gupta",
  //     domain: "Events Member",
  //     gmail: "parigupta4532@gmail.com",
  //     linkedIn: "https://www.linkedin.com/in/pari-gupta-07958130a",
  //     imgUrl: Pari,
  //   },

  //   {
  //     name: "Rishika Batra",
  //     domain: "Events Member",
  //     gmail: "batrarishika06@gmail.com",
  //     linkedIn: "https://www.linkedin.com/in/rishika-batra-92a4aa326",
  //     imgUrl: Rishika,
  //   },

  //   {
  //     name: "Rishi Raj",
  //     domain: "Events Member",
  //     gmail: "rishi.2428ece1184@kiet.edu",
  //     linkedIn: "https://www.linkedin.com/in/rishi-raj-65624b330",
  //     imgUrl: Rishi,
  //   },
  //   {
  //     name: "Tanya Mishra",
  //     domain: "Events Member",
  //     gmail: "mishra.tanya101@gmail.com",
  //     linkedIn: "https://www.linkedin.com/in/tanya-mishra-279560328/",
  //     imgUrl: Tanya2,
  //   },
  // ];
  // // const Members = [
  //   {
  //     name: "Yash Kumar Singh",
  //     domain: "Technical Member",
  //     imgUrl: yash,
  //     linkedIn: "https://www.linkedin.com/in/yashksingh-connect/",
  //     gmail: "yk66478@gmail.com",
  //   },

  //   {
  //     name: "Nakshatra Manglik",
  //     domain: "Technical Member",
  //     imgUrl: naksh,
  //     linkedIn: "https://www.linkedin.com/in/nakshatra-manglik",
  //     gmail: "Nakshatramanglik14@gmail.com",
  //   },

  //   {
  //     name: "Shashwat Rai",
  //     domain: "Technical Member",
  //     imgUrl: shashwat,
  //     linkedIn: "https://www.linkedin.com/in/shashwatrai05/",
  //     gmail: "shashwatrai575@gmail.com",
  //   },
  //   {
  //     name: "Aryan Srivastava",
  //     domain: "Public Relations Member",
  //     imgUrl: aryan2,
  //     linkedIn: "https://www.linkedin.com/in/aryan-srivastava-4919b5259",
  //     gmail: "aryankiofficial@gmail.com",
  //   },
  //   {
  //     name: "Tanya Varshney",
  //     domain: "Public Relations Member",
  //     imgUrl: tanya,
  //     linkedIn: "",
  //     gmail: "",
  //   },

  //   {
  //     name: "Harsh Pundhir",
  //     domain: "Graphics Member",
  //     imgUrl: harsh2,
  //     linkedIn: "",
  //     gmail: "",
  //   },

  //   {
  //     name: "Kshitij Sharma",
  //     domain: "Corporate Member",
  //     gmail: "kshitijsharma1901@gmail.com",
  //     linkedIn: "https://linkedin.com/in/kshitij-sharma-67b745289",
  //     imgUrl: kshitij,
  //   },
  //   {
  //     name: "Arpita Dwivedi",
  //     domain: "Graphics Member",
  //     imgUrl: arpita,
  //     linkedIn: "",
  //     gmail: "",
  //   },
  //   {
  //     name: "Saksham Jain",
  //     domain: "Technical Member",
  //     gmail: "sakshambro730@gmail.com",
  //     linkedIn: "https://www.linkedin.com/in/sakshamjain007",
  //     imgUrl: Saksham,
  //   },
  //   {
  //     name: "Saumya Ojha",
  //     domain: "Technical Member",
  //     gmail: "ojhasaumya.lps@gmail.com",
  //     linkedIn:
  //       "https://www.linkedin.com/in/saumya-ojha-7a7699297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  //     imgUrl: Saumya,
  //   },
  //   {
  //     name: "Shiv Kumar Gupta",
  //     domain: "Technical Member",
  //     gmail: "contactshivgupta@gmail.com",
  //     linkedIn: "https://www.linkedin.com/in/shiv-kumar-gupta-b74125280/",
  //     imgUrl: Shiv,
  //   },

  //   {
  //     name: "Yashica Agarwal",
  //     domain: "Graphics Member",
  //     gmail: "yashica.agarwal3@gmail.com",
  //     linkedIn:
  //       "https://www.linkedin.com/in/yashica-agarwal-9b1493297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  //     imgUrl: yashica,
  //   },

  //   {
  //     name: " Anish Kumar",
  //     domain: "Events Member",
  //     gmail: "anissh946@gmail.com",
  //     linkedIn: "http://www.linkedin.com/in/anish-kumar-126140295",
  //     imgUrl: anish,
  //   },
  //   {
  //     name: " Pratham Mishra",
  //     domain: "Events Member",
  //     gmail: "mishrayogi04@gmail.com",
  //     linkedIn: "https://www.linkedin.com/in/pratham-mishra-850497270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  //     imgUrl: Pratham,
  //   },
  //   {
  //     name: "Gurpreet Singh",
  //     domain: "Corporate Member",
  //     mail: "gskochar24@gmail.com",
  //     linkedIn:
  //       "https://www.linkedin.com/in/gurpreet-singh-kochar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  //     imgUrl: Gurpreet,
  //   },
  //   {
  //     name: "Yuvika Jindal",
  //     domain: "Graphics Member",
  //     mail: "yuvikajindal241106@gmail.com",
  //     linkedIn:
  //       "https://www.linkedin.com/in/yuvika-jindal-6b3181328/",
  //     imgUrl: Yuvika,
  //   },
  //   {
  //     name: "Ishita Jindal",
  //     domain: "Graphics Member",
  //     mail: "ishijindal1310@gmail.com",
  //     linkedIn:
  //       "https://www.linkedin.com/in/ishijindal/",
  //     imgUrl: Ishita,
  //   },
  //   {
  //     name: "Ananya Baranwal",
  //     domain: "Graphics Member",
  //     mail: "baranwalananya2006@gmail.com",
  //     linkedIn:
  //       "",
  //     imgUrl: Ananya,
  //   },
  //   {
  //     name: "Nishant Vishwakarma",
  //     domain: "Graphics Member",
  //     mail: "nishantvishwakarma6789@gmail.com",
  //     linkedIn:
  //       "https://www.linkedin.com/in/nishant-vishwakarma-875a34328",
  //     imgUrl: Nishant2,
  //   },
  //   {
  //     name: "Karnveer Dixit",
  //     domain: "Graphics Member",
  //     mail: "dtanishq46@gmail.com",
  //     linkedIn:
  //       "http://www.linkedin.com/in/karnveer-dixit-9b5bb3333",
  //     imgUrl: Karn,
  //   },
  //   {
  //     name: "Preeti Singh",
  //     domain: "Graphics Member",
  //     mail: "preetisinghthakur07@gmail.com",
  //     linkedIn:
  //       "http://www.linkedin.com/in/preeti-singh-9b8554328",
  //     imgUrl: Preeti,
  //   },
  //   {
  //     name: "Yash Jain ",
  //     domain: "Corporate Member",
  //     mail: "jainyash1404@gmail.com",
  //     linkedIn:
  //       "https://www.linkedin.com/in/yash-jain-09a901285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  //     imgUrl: Yash2,
  //   },
  //   {
  //     name: "Shaswat Mishra",
  //     domain: "Corporate Member",
  //     mail: "mishrashaswat29@gmail.com",
  //     linkedIn:
  //       "https://www.linkedin.com/in/shaswat-mishra-320863252/",
  //     imgUrl: Shaswat2,
  //   },
  //   {
  //     name: "Vanshika Arora",
  //     domain: "Corporate Member",
  //     mail: "arora.vanshika1110@gmail.com",
  //     linkedIn:
  //       "https://www.linkedin.com/in/vanshika-arora-325323308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  //     imgUrl: Vanshika,
  //   },
  //   // {
  //   //   name: "Naman Verma",
  //   //   domain: "Corporate Member",
  //   //   mail: "verma023naman@gmail.com",
  //   //   linkedIn:
  //   //     "https://www.linkedin.com/in/naman-verma-8ab2b3328",
  //   //   imgUrl: Naman,
  //   // },

  //   // {
  //   //   name: "Pratham Mishra",
  //   //   domain: "Events Member",
  //   //   gmail: "mishrayogi04@gmail.com",
  //   //   linkedIn:
  //   //     "https://www.linkedin.com/in/pratham-mishra-850497270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  //   //   imgUrl: pratham,
  //   // },
  //   // {
  //   //   name: "Divyam Asthana",
  //   //   domain: "Public Relations Member",
  //   //   gmail: "divyamasthanaprofessional.001@gmail.com",
  //   //   linkedIn: "https://www.linkedin.com/in/divyam-asthana",
  //   //   imgUrl: divym,
  //   // },
  //   // {
  //   //   name: "Shruti Mishra",
  //   //   domain: "Public Relations Member",
  //   //   gmail: "",
  //   //   linkedIn: "",
  //   //   imgUrl: shruti,
  //   // },
  //   {
  //     name: "Vansh Gautam",
  //     domain: "Public Relations Member",
  //     gmail: "vanshgautam9011@gmail.com",
  //     linkedIn: "https://www.linkedin.com/in/vansh-gautam-92293b30a/",
  //     imgUrl: Vansh,
  //   },
  //   {
  //     name: "Riddhi Yadav",
  //     domain: "Graphics Member",
  //     gmail: "yriddhi51@gmail.com",
  //     linkedIn:
  //       "https://www.linkedin.com/in/riddhi-yadav-901b28293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  //     imgUrl: riddhi,
  //   },
  //   {
  //     name: "Anshika Chaurasia ",
  //     domain: "Public Relations Member ",
  //     gmail: "manya.khushi.mk@gmail.com",
  //     linkedIn:
  //       "https://www.linkedin.com/in/anshika-chaurasia-3a2218222",
  //     imgUrl: Anshika,
  //   },
  //   {
  //     name: "Dipti Gupta  ",
  //     domain: "Public Relations Member ",
  //     gmail: "diptisdk@gmail.com",
  //     linkedIn:
  //       "https://www.linkedin.com/in/dipti-gupta-a96a20317",
  //     imgUrl: Dipti,
  //   },
  //   {
  //     name: "Saransh Sahu",
  //     domain: "Corporate Member",
  //     gmail: "saransh1315@gmail.com",
  //     linkedIn:
  //       "https://www.linkedin.com/in/saransh-sahu-4967a0303/",
  //     imgUrl: Saransh,
  //   },
  //   {
  //     name: "Shreya Baranwal ",
  //     domain: "Corporate Member",
  //     gmail: "shreyabaranwal229@gmail.com",
  //     linkedIn:
  //       "https://www.linkedin.com/in/shreya-baranwal-1103802a5",
  //     imgUrl: Shreya,
  //   },
  //   {
  //     name: "Tejas Rastogi ",
  //     domain: "Corporate Member",
  //     gmail: "tejasrastogi456@gmail.com",
  //     linkedIn:
  //       "https://www.linkedin.com/in/tejas-rastogi-292b81231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  //     imgUrl: Tejas,
  //   },
  //   {
  //     name: "Aashi Chaudhary",
  //     domain: "Corporate Member",
  //     gmail: "aashi.chaudharryy@gmail.com",
  //     linkedIn:
  //       "https://www.linkedin.com/in/aashi-chaudhary-282405218/",
  //     imgUrl: Aashi,
  //   },
  //   {
  //     name: "Rupesh Chaurasia",
  //     domain: "Corporate Member",
  //     gmail: "rupeshchaurasia012511@gmail.com",
  //     linkedIn:
  //       "https://www.linkedin.com/in/rupesh-chaurasia144/",
  //     imgUrl: Rupesh,
  //   },
  //   {
  //     name: "Dhruv Srivastava ",
  //     domain: "Corporate Member",
  //     gmail: "connectdhruv0606@gmail.com",
  //     linkedIn:
  //       "https://www.linkedin.com/in/dhruv-srivastava-666622257",
  //     imgUrl: Dhruv2,
  //   },
  //   {
  //     name: "Shreyasi Rawat ",
  //     domain: "Graphics Member",
  //     gmail: "shreyasirawat30.14@gmail.com",
  //     linkedIn:
  //       "https://www.linkedin.com/in/shreyasi-rawat-b85280327",
  //     imgUrl: Shreyasi,
  //   },
  //   {
  //     name: "Avani Singhal",
  //     domain: "Graphics Member",
  //     gmail: "avani0277@gmail.com",
  //     linkedIn:
  //       "https://www.linkedin.com/in/avani-singhal-9a348826a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  //     imgUrl: Avani2,
  //   },
  //   // {
  //   //   name: "Abhijeet Kumar Gautam  ",
  //   //   domain: "Graphics Member",
  //   //   gmail: "abhijeetgautam000055@gmail.com",
  //   //   linkedIn:
  //   //     "https://www.linkedin.com/in/abhijeet-kumar-gautam-885710233",
  //   //   imgUrl: Abhijeet,
  //   // },
  //   {
  //     name: "Utkarsh Singh ",
  //     domain: "Technical Member",
  //     gmail: "utkarsh2020051@gmail.com",
  //     linkedIn:
  //       "https://www.linkedin.com/in/realutkarshh?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  //     imgUrl: Utkarsh,
  //   },
  //   {
  //     name: "Sonali Tyagi",
  //     domain: "Technical Member",
  //     gmail: "sonalityagi887@gmail.com ",
  //     linkedIn:
  //       "https://www.linkedin.com/in/sonali-tyagi-0895302a4",
  //     imgUrl: Sonali,
  //   },
  //   {
  //     name: "Janak Singh",
  //     domain: "Events Member ",
  //     gmail: "sjanak984@gmail.com",
  //     linkedIn:
  //       "https://www.linkedin.com/in/janak-singh-5496b5328/",
  //     imgUrl: Janak,
  //   },
  //   {
  //     name: "Dipali singh ",
  //     domain: "Events Member ",
  //     gmail: "dipalisingh5950@gmail.com ",
  //     linkedIn:
  //       "https://www.linkedin.com/in/dipali-singh-3988b6326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  //     imgUrl: Dipali,
  //   },
  //   {
  //     name: "Avani Sharma ",
  //     domain: "Corporate Member",
  //     gmail: "sharmaavani2325@gmail.com",
  //     linkedIn:
  //       "https://www.linkedin.com/in/avani-sharma-042516321/",
  //     imgUrl: Avani,
  //   },
  //   {
  //     name: "Kushagra Srivastava ",
  //     domain: "Events Member ",
  //     gmail: "workspace.kushagra@gmail.com",
  //     linkedIn:
  //       "https://www.linkedin.com/in/kushagra-srivastava-b000642a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  //     imgUrl: Kush,
  //   },
  //   {
  //     name: "Priyanz Varshney  ",
  //     domain: "Events Member ",
  //     gmail: "priyanzvarshney2005@gmail.com",
  //     linkedIn:
  //       "https://www.linkedin.com/in/priyanz-varshney-8a0309215?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  //     imgUrl: Priyanz,
  //   },
  //   {
  //     name: "Rishika Batra",
  //     domain: "Events Member ",
  //     gmail: "batrarishika06@gmail.com",
  //     linkedIn:
  //       "https://www.linkedin.com/in/rishika-batra-92a4aa326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  //     imgUrl: Rishika,
  //   },
  //   {
  //     name: "Aditi Narang ",
  //     domain: "Events Member ",
  //     gmail: "aditi.2428cseaiml128@kiet.edu",
  //     linkedIn:
  //       "https://www.linkedin.com/in/aditi-narang-766544217?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  //     imgUrl: Aditi,
  //   },
  //   {
  //     name: "Antas Kumar Dubey ",
  //     domain: "Events Member ",
  //     gmail: "antasdubey.in@gmail.com",
  //     linkedIn:
  //       "https://www.linkedin.com/in/antas01",
  //     imgUrl: Antas,
  //   },
  //   {
  //     name: "Dhruv Chaudhary ",
  //     domain: "Events Member ",
  //     gmail: "dhruv.2428ece1189@kiet.edu",
  //     linkedIn:
  //       "https://www.linkedin.com/in/dhruv-chaudhary-370544328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  //     imgUrl: Dhruv,
  //   },
  //   {
  //     name: "Rishi Raj ",
  //     domain: "Events Member ",
  //     gmail: "rishi.2428ece1184@kiet.edu",
  //     linkedIn:
  //       "https://www.linkedin.com/in/rishi-raj-65624b330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  //     imgUrl: Rishi,
  //   },
  //   {
  //     name: "Tanya Mishra",
  //     domain: "Events Member ",
  //     gmail: "mishra.tanya101@gmail.com",
  //     linkedIn:
  //       "https://www.linkedin.com/in/tanya-mishra-279560328/",
  //     imgUrl: Tanya2,
  //   },
  //   {
  //     name: "Pari Gupta ",
  //     domain: "Events Member ",
  //     gmail: "parigupta4532@gmail.com",
  //     linkedIn:
  //       "https://www.linkedin.com/in/pari-gupta-07958130a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  //     imgUrl: Pari,
  //   },
  //   {
  //     name: "Pranjali Sehrawat",
  //     domain: "Technical Member",
  //     gmail: "pranjalisehrawat@gmail.com",
  //     linkedIn:
  //       "https://www.linkedin.com/in/pranjali-sehrawat-b90557328/",
  //     imgUrl: Pranjali,
  //   },
  //   {
  //     name: "Arpit Srivastava ",
  //     domain: "Technical Member",
  //     gmail: "arpit.srivastava7079@gmail.com",
  //     linkedIn:
  //       "https://www.linkedin.com/in/arpit-srivastava-954b78328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  //     imgUrl: Arpit,
  //   },
  //   {
  //     name: "Jatin Gupta",
  //     domain: "Technical Member",
  //     gmail: "jatingupta918306@gmail.com",
  //     linkedIn:
  //       "https://www.linkedin.com/in/jatin-gupta-4b1b83327/",
  //     imgUrl: Jatin,
  //   },
  //   {
  //     name: "Krishna Sharma",
  //     domain: "Technical Member",
  //     gmail: "krishnasharma7915@gmail.com",
  //     linkedIn:
  //       "https://www.linkedin.com/in/krishna-sharma-a3647b279/",
  //     imgUrl: Krishna,
  //   },
  //   {
  //     name: "Anurag Shrivastav ",
  //     domain: "Technical Member",
  //     gmail: "anurag13360@gmail.com",
  //     linkedIn:
  //       "https://www.linkedin.com/in/anurag-shrivastav-b7a616327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  //     imgUrl: Anurag,
  //   },
  //   {
  //     name: "Vaibhav Gupta",
  //     domain: "Technical Member",
  //     gmail: "vaibhavgupta.v890@gmail.com",
  //     linkedIn:
  //       "https://www.linkedin.com/in/vaibhav9705/",
  //     imgUrl: Vaibhav2,
  //   },
  //   {
  //     name: "Tulika Anand",
  //     domain: "Technical Member",
  //     gmail: "tulikaanand05@gmail.com",
  //     linkedIn:
  //       "https://www.linkedin.com/in/tulika-anand-643332311/",
  //     imgUrl: Tulika,
  //   },
  //   {
  //     name: "Luv Agarwal",
  //     domain: "Public Relations Member ",
  //     gmail: "luvagarwal2501@gmail.com",
  //     linkedIn:
  //       "https://www.linkedin.com/in/luv-agarwal-27912530b",
  //     imgUrl: Luv,
  //   },
  //   {
  //     name: "Ameera Arfeen ",
  //     domain: "Public Relations Member ",
  //     gmail: "ameeraarfeen7@gmail.com",
  //     linkedIn:
  //       "https://www.linkedin.com/in/ameera-arfeen-88b483325",
  //     imgUrl: Ameera,
  //   },
  //   {
  //     name: "Arjun Pundir ",
  //     domain: "Public Relations Member ",
  //     gmail: "arjun.pundir7626@gmail.com",
  //     linkedIn:
  //       "https://www.linkedin.com/in/arjun-pundir-384934254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  //     imgUrl: Arjun,
  //   },
  //   {
  //     name: "Atharv Gupta ",
  //     domain: "Public Relations Member ",
  //     gmail: "roboatharv@gmail.com",
  //     linkedIn:
  //       "https://www.linkedin.com/in/atharv-gupta-18b2a7314",
  //     imgUrl: Atharv,
  //   },
  //   {
  //     name: "Anant Mittal",
  //     domain: "Technical Member",
  //     gmail: "anantmittal943@gmail.com",
  //     linkedIn:
  //       "https://www.linkedin.com/in/anant-mittal-63940b313/",
  //     imgUrl: Anant,
  //   },

  //   // {
  //   //   name: "Arush Dixit",
  //   //   domain: "Public Relations Member",
  //   //   gmail: "arushd2005@gmail.com",
  //   //   linkedIn:
  //   //     "https://www.linkedin.com/in/arushdixit98?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  //   // },
  //   // {
  //   //   name: "Yashica Agarwal",
  //   //   domain: "Graphics Member",
  //   //   gmail: "yashica.agarwal3@gmail.com",
  //   //   linkedIn: "https://www.linkedin.com/feed/",
  //   // },

  //   // {
  //   //   name: "Riddhi Yadav",
  //   //   domain: "Graphics Member",
  //   //   gmail: "yriddhi51@gmail.com",
  //   //   linkedIn:
  //   //     "https://www.linkedin.com/in/riddhi-yadav-901b28293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  //   // },
  //   // {
  //   //   name: "Anjali Sharma",
  //   //   domain: "Public Relation Member",
  //   //   gmail: "anjali34490@gmail.com",
  //   //   linkedIn:
  //   //     "https://www.linkedin.com/in/anjali-sharma-448a9b292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  //   // },

  //   // {
  //   //   name: "Abhishek sharma",
  //   //   domain: "Corporate Member",
  //   //   gmail: "abhishek.2226it1057@kiet.edu",
  //   //   linkedIn:
  //   //     "https://www.linkedin.com/in/abhishek-sharma-a14878225?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  //   // },
  //   // {
  //   //   name: "Pratham Mishra",
  //   //   domain: "Events Member Member",
  //   //   gmail: "mishrayogi04@gmail.com",
  //   //   linkedIn:
  //   //     "https://www.linkedin.com/in/pratham-mishra-850497270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  //   // },
  //   // {
  //   //   name: "Shruti Mishra",
  //   //   domain: "Public Relation Member",
  //   //   gmail: "shrutimishra.creative@gmail.com",
  //   //   linkedIn:
  //   //     "https://www.linkedin.com/in/shruti-mishra-8572a729b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  //   // },

  //   // {
  //   //   name: "Paras Tiwari",
  //   //   domain: "Technical Member",
  //   //   gmail: "parastiwari970@gmail.com",
  //   //   linkedIn:
  //   //     "https://www.linkedin.com/in/paras-tiwari-69b0162a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  //   // },

  //   // {
  //   //   name: "Ansh Yadav",
  //   //   domain: "Corporate Member",
  //   //   gmail: "ansh.2327cse1176@kiet.edu",
  //   //   linkedIn:
  //   //     "https://www.linkedin.com/in/ansh-yadav-6ab1182a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  //   // },

  //   // {
  //   //   name: "Utkarsh Goyal",
  //   //   domain: "Technical Member",
  //   //   gmail: "utkarshgoyal07@gmail.com",
  //   //   linkedIn: "https://www.linkedin.com/in/utkarsh-goyal-74a81524b/",
  //   // },
  //   // {
  //   //   name: "Anish kumar",
  //   //   domain: "Events Member Member",
  //   //   gmail: "anissh946@gmail.com",
  //   //   linkedIn:
  //   //     "https://www.linkedin.com/in/anish-kumar-126140295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  //   // },
  // // ];
  // const TechnicalMembers = [
  //   {
  //     name: "Nakshatra Manglik",
  //     domain: "Technical Member",
  //     imgUrl: naksh,
  //     linkedIn: "https://www.linkedin.com/in/nakshatra-manglik",
  //     gmail: "Nakshatramanglik14@gmail.com",
  //   },
  //   {
  //     name: "Shashwat Rai",
  //     domain: "Technical Member",
  //     imgUrl: shashwat,
  //     linkedIn: "https://www.linkedin.com/in/shashwatrai05/",
  //     gmail: "shashwatrai575@gmail.com",
  //   },
  //   {
  //     name: "Yash Kumar Singh",
  //     domain: "Technical Member",
  //     imgUrl: yash,
  //     linkedIn: "https://www.linkedin.com/in/yashksingh-connect/",
  //     gmail: "yk66478@gmail.com",
  //   },
  //   {
  //     name: "Saksham Jain",
  //     domain: "Technical Member",
  //     gmail: "sakshambro730@gmail.com",
  //     linkedIn: "https://www.linkedin.com/in/sakshamjain007",
  //     imgUrl: Saksham,
  //   },
  //   {
  //     name: "Saumya Ojha",
  //     domain: "Technical Member",
  //     gmail: "ojhasaumya.lps@gmail.com",
  //     linkedIn: "https://www.linkedin.com/in/saumya-ojha-7a7699297",
  //     imgUrl: Saumya,
  //   },
  //   {
  //     name: "Shiv Kumar Gupta",
  //     domain: "Technical Member",
  //     gmail: "contactshivgupta@gmail.com",
  //     linkedIn: "https://www.linkedin.com/in/shiv-kumar-gupta-b74125280/",
  //     imgUrl: Shiv,
  //   },
  //   {
  //     name: "Siddhant Gupta ",
  //     domain: "Technical Member",
  //     gmail: "siddhant9696gupta761@gmail.com",
  //     linkedIn:
  //       "https://www.linkedin.com/in/siddhant-gupta-065794287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  //     imgUrl: Siddhant,
  //   },
  //   {
  //     name: "Sonali Tyagi",
  //     domain: "Technical Member",
  //     gmail: "sonalityagi887@gmail.com",
  //     linkedIn: "https://www.linkedin.com/in/sonali-tyagi-0895302a4",
  //     imgUrl: Sonali,
  //   },
  //   {
  //     name: "Utkarsh Singh",
  //     domain: "Technical Member",
  //     gmail: "utkarsh2020051@gmail.com",
  //     linkedIn: "https://www.linkedin.com/in/realutkarshh",
  //     imgUrl: Utkarsh,
  //   },
  //   {
  //     name: "Arpit Srivastava",
  //     domain: "Technical Member",
  //     gmail: "arpit.srivastava7079@gmail.com",
  //     linkedIn: "https://www.linkedin.com/in/arpit-srivastava-954b78328",
  //     imgUrl: Arpit,
  //   },
  //   {
  //     name: "Anant Mittal",
  //     domain: "Technical Member",
  //     gmail: "anantmittal943@gmail.com",
  //     linkedIn: "https://www.linkedin.com/in/anant-mittal-63940b313/",
  //     imgUrl: Anant,
  //   },
  //   {
  //     name: "Anurag Shrivastav",
  //     domain: "Technical Member",
  //     gmail: "anurag13360@gmail.com",
  //     linkedIn: "https://www.linkedin.com/in/anurag-shrivastav-b7a616327",
  //     imgUrl: Anurag,
  //   },
  //   {
  //     name: "Jatin Gupta",
  //     domain: "Technical Member",
  //     gmail: "jatingupta918306@gmail.com",
  //     linkedIn: "https://www.linkedin.com/in/jatin-gupta-4b1b83327/",
  //     imgUrl: Jatin,
  //   },
  //   {
  //     name: "Krishna Sharma",
  //     domain: "Technical Member",
  //     gmail: "krishnasharma7915@gmail.com",
  //     linkedIn: "https://www.linkedin.com/in/krishna-sharma-a3647b279/",
  //     imgUrl: Krishna,
  //   },
  //   {
  //     name: "Pranjali Sehrawat",
  //     domain: "Technical Member",
  //     gmail: "pranjalisehrawat@gmail.com",
  //     linkedIn: "https://www.linkedin.com/in/pranjali-sehrawat-b90557328/",
  //     imgUrl: Pranjali,
  //   },

  //   {
  //     name: "Tulika Anand",
  //     domain: "Technical Member",
  //     gmail: "tulikaanand05@gmail.com",
  //     linkedIn: "https://www.linkedin.com/in/tulika-anand-643332311/",
  //     imgUrl: Tulika,
  //   },
  //   {
  //     name: "Vaibhav Gupta",
  //     domain: "Technical Member",
  //     gmail: "vaibhavgupta.v890@gmail.com",
  //     linkedIn: "https://www.linkedin.com/in/vaibhav9705/",
  //     imgUrl: Vaibhav2,
  //   },
  // ];
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <div className="flex flex-col justify-center items-center text-white pt-28 bg-white dark:bg-black">
      {/* Administrator */}
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
        {Coordinators.map((member, index) => (
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
      {/* Dupty Administrator */}
      <div className="mt-10">
        <h1 className="text-xl md:text-3xl font-bold text-black dark:text-white">
          Deputy Coordinator
        </h1>
      </div>
      <div className="flex flex-wrap justify-center items-start mt-8">
        {DeputyCoordinators.map((member, index) => (
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
      {/* Administrative & Financial Secretariat */}
      <div className="mt-10">
        <h1 className="text-xl md:text-3xl text-center px-4 font-bold text-black dark:text-white">
          Administrative & Financial Secretariat
        </h1>
      </div>
      <div className="flex flex-wrap justify-center items-start mt-8">
        {Secretariats.map((member, index) => (
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
      {/* Domain Manager */}
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
      {/* Technical Member */}
      <div className="mt-10">
        <h1 className="text-xl md:text-3xl font-bold text-black dark:text-white">
          Technical Member
        </h1>
      </div>
      <div className="flex flex-wrap justify-center items-start mt-8">
        {TechnicalMembers.map((member, index) => (
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
      {/* PR Member */}
      <div className="mt-10">
        <h1 className="text-xl md:text-3xl font-bold text-black dark:text-white">
          Public Relations Member
        </h1>
      </div>
      <div className="flex flex-wrap justify-center items-start mt-8">
        {prMembers.map((member, index) => (
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

      {/* Graphics Member */}
      <div className="mt-10">
        <h1 className="text-xl md:text-3xl font-bold text-black dark:text-white">
          Graphics Member
        </h1>
      </div>
      <div className="flex flex-wrap justify-center items-start mt-8">
        {GraphicsMembers.map((member, index) => (
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

      {/* CR Members */}
      <div className="mt-10">
        <h1 className="text-xl md:text-3xl font-bold text-black dark:text-white">
          Corporate Member
        </h1>
      </div>
      <div className="flex flex-wrap justify-center items-start mt-8">
        {corporateMembers.map((member, index) => (
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

      {/* Events Member */}
      <div className="mt-10">
        <h1 className="text-xl md:text-3xl font-bold text-black dark:text-white">
          Event Member
        </h1>
      </div>
      <div className="flex flex-wrap justify-center items-start mt-8">
        {eventsMembers.map((member, index) => (
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
      {/* <div className="mt-10">
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
      </div> */}
    </div>
  );
}

export default OurTeam;
