// import React from "react";
import { Card, CardOverflow } from "@mui/joy";

import { motion } from "framer-motion";
import { fadeIn } from "../../styles/Variant";

import sponsor1 from "../../assets/associations/BLUE LEAVES.png";
import sponsor2 from "../../assets/associations/CAMPUS MEDIA.png";
import sponsor3 from "../../assets/associations/DONALDS PASTRY SHOP.jpeg";
import sponsor4 from "../../assets/associations/IMG-20240323-WA0024.jpg";
import sponsor5 from "../../assets/associations/IMG-20240323-WA0025.jpg";
import sponsor6 from "../../assets/associations/IMG-20240323-WA0026.png";
import sponsor7 from "../../assets/associations/IMG-20240323-WA0027.jpg";
import sponsor8 from "../../assets/associations/IMG-20240323-WA0028.jpg";
import sponsor9 from "../../assets/associations/IMG-20240323-WA0029.jpg";
import sponsor10 from "../../assets/associations/IMG-20240323-WA0030.jpg";
import sponsor11 from "../../assets/associations/IMG-20240323-WA0031.jpg";
import sponsor12 from "../../assets/associations/IMG-20240323-WA0032.jpg";
import sponsor13 from "../../assets/associations/IMG-20240323-WA0033.jpg";
import sponsor14 from "../../assets/associations/IMG-20240323-WA0034.jpg";
import sponsor15 from "../../assets/associations/IMG-20240323-WA0035.jpg";
import sponsor16 from "../../assets/associations/IMG-20240323-WA0036.jpg";
import sponsor17 from "../../assets/associations/IMG-20240323-WA0037.jpg";
import sponsor18 from "../../assets/associations/IMG-20240323-WA0052.jpg";
import sponsor19 from "../../assets/associations/IMG-20240323-WA0057.jpg";
import sponsor20 from "../../assets/associations/IMG-20240323-WA0056.jpg";
import sponsor21 from "../../assets/associations/IMG-20240323-WA0053.jpg";
// import Im from "../../assets/White-paper-texture-for-Projects.jpg";
// import "./Associations.css";

function Partners() {
  const Sponsors = [
    {
      name: "BLUE LEAVES",
      image: sponsor1,
      position: "Partner",
    },
    {
      image: sponsor2,
      name: "CAMPUS MEDIA",
      position: "Partner",
    },
    {
      image: sponsor3,
      name: "DONALDS PASTRY SHOP",
      position: "Partner",
    },
    {
      image: sponsor4,
      name: "Jio",
      position: "Partner",
    },
    {
      image: sponsor5,
      name: "Figma",
      position: "Partner",
    },
    {
      image: sponsor6,
      name: "GeeksForGeeks",
      position: "Partner",
    },
    {
      image: sponsor7,
      name: "The TimeLiners",
      position: "Partner",
    },
    {
      image: sponsor8,
      name: "Coca Cola",
      position: "Partner",
    },
    {
      image: sponsor9,
      name: "Jio",
      position: "Partner",
    },
    {
      image: sponsor10,
      name: "Solana",
      position: "Partner",
    },
    {
      image: sponsor11,
      name: "Matic",
      position: "Partner",
    },
    {
      image: sponsor12,
      name: "Ford",
      position: "Partner",
    },
    {
      image: sponsor13,
      name: "Devfolio",
      position: "Partner",
    },
    {
      image: sponsor14,
      name: "Coding Ninjas",
      position: "Partner",
    },
    {
      image: sponsor15,
      name: "Coding Blocks",
      position: "Partner",
    },
    {
      image: sponsor16,
      name: "Ford",
      position: "Partner",
    },
    {
      image: sponsor17,
      name: "Abhi Bus",
      position: "Partner",
    },
    {
      image: sponsor18,
      name: "Ford",
      position: "Partner",
    },
    {
      image: sponsor19,
      name: "Ford",
      position: "Partner",
    },
    {
      image: sponsor20,
      name: "Interview Buddy",
      position: "Partner",
    },
    {
      image: sponsor21,
      name: "Inflection",
      position: "Partner",
    },
  ];

  return (
    <section
      className="section mb-0 px-20 py-14 pt-16 bg-white dark:bg-black"
      id="sponser"
    >
      <div className="flex justify-center items-center flex-col mt-0 mb-0 pb-0 w-full">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 animate__animated animate__fadeInUp pb-8 text-black dark:text-white w-[90%] text-center">
          Previous{" "}
          <span className="font-bold text-3xl md:text-5xl text-center text-[#4d55ba] font-serif">
            Sponsors
          </span>
        </h1>
        <div className="flex flex-wrap  justify-around pb-11">
          {Sponsors.map((sponsor, index) => (
            <motion.div
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView={"show"}
              key={index}
              className=" hello m-4 shadow-lg shadow-blue-300  transition-shadow hover:translate-x-1 duration-300 hover:shadow-blue-400 animate__animated animate__fadeInUp rounded-xl"
            >
              <Card
                orientation="horizontal"
                // className="p-4"
                variant="outlined"
                sx={{ width: 260, height: 100, borderRadius: 10 }}
              >
                <div className="w-[30%]  h-full">
                  <img
                    src={sponsor.image}
                    className=" object-contain w-full h-full"
                    alt=""
                  />
                </div>
                <div className=" h-full w-full flex flex-col justify-center ">
                  <h2 className="text-green-700 text-md font-semibold">
                    {sponsor.name}
                  </h2>
                  <p className="text-sm">{sponsor.position}</p>
                </div>
                <CardOverflow
                  variant="soft"
                  color="primary"
                  sx={{
                    px: 0.2,
                    writingMode: "vertical-rl",
                    justifyContent: "center",
                    fontSize: "xs",
                    fontWeight: "xl",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    borderLeft: "1px solid",
                    borderColor: "divider",
                  }}
                >
                  {sponsor.position}
                </CardOverflow>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;
