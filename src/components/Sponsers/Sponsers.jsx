// import React from "react";
import { Card, CardOverflow } from "@mui/joy";

import { motion } from "framer-motion";
import { fadeIn } from "../../styles/Variant";

import sponsor1 from "../../assets/sponsors/teliolabs.png";
import sponsor2 from "../../assets/sponsors/metaapply_logo.jpeg";
import sponsor3 from "../../assets/sponsors/innovacer.png";
import sponsor4 from "../../assets/sponsors/flavours.jpg";
import sponsor5 from "../../assets/sponsors/GitHub-logo.png";
import sponsor6 from "../../assets/sponsors/webbuilder.png";
import sponsor7 from "../../assets/sponsors/finlatics.png";
import sponsor8 from "../../assets/sponsors/evepaper.png";
import sponsor9 from "../../assets/sponsors/thecarzilla_in_logo.jpeg";
import sponsor10 from "../../assets/sponsors/b2b-removebg-preview.png";
import sponsor11 from "../../assets/sponsors/ease my tri.png";
import sponsor12 from "../../assets/sponsors/Quillbot.png";
import sponsor13 from "../../assets/sponsors/Amar_Ujala_Logo.png";
import sponsor14 from "../../assets/sponsors/gathrr-removebg-preview.png";
import sponsor15 from "../../assets/sponsors/slick-logo-blk.png";
import sponsor16 from "../../assets/sponsors/intorbot.png";
import sponsor17 from "../../assets/sponsors/Coding ninja.jpeg";
import sponsor18 from "../../assets/sponsors/coding block.png";
import sponsor19 from "../../assets/sponsors/fusionflow-removebg-preview.png";
import sponsor20 from "../../assets/sponsors/wolfram.jpg";
import sponsor21 from "../../assets/sponsors/devfolio.png";

import sponsor22 from "../../assets/sponsors/polygon.png";
import sponsor23 from "../../assets/sponsors/replit.png";
import sponsor24 from "../../assets/sponsors/solana.jpg";
import sponsor25 from "../../assets/sponsors/eth.png";
import sponsor26 from "../../assets/sponsors/quill audit.png";
import sponsor27 from "../../assets/sponsors/wapromote.jpg";
import sponsor28 from "../../assets/sponsors/Starworks Logo (PNG-HD).png";
import sponsor29 from "../../assets/sponsors/youth incorporated logo.png";
import sponsor30 from "../../assets/sponsors/bee ceptor.png";
import sponsor31 from "../../assets/sponsors/interview buddy.jpeg";
import sponsor32 from "../../assets/sponsors/lwt.png";
import sponsor33 from "../../assets/sponsors/ed times.jpg";
import sponsor34 from "../../assets/sponsors/startup news.png";
import sponsor35 from "../../assets/sponsors/eat my news.jpeg";
import sponsor36 from "../../assets/sponsors/delhievents.jpg";
import sponsor37 from "../../assets/sponsors/fresources.png";
import sponsor38 from "../../assets/sponsors/lets upgrade digitaly.png";
import sponsor39 from "../../assets/sponsors/foodwalas.jpeg";
// import Im from "../../assets/White-paper-texture-for-Projects.jpg";
// import "./Associations.css";

function Partners() {
 const Sponsors = [
   {
     name: "Teliolabs",
     image: sponsor1,
     position: "Title Partner",
   },
   {
     image: sponsor2,
     name: "MetaApply",
     position: "Edu. Partner ",
   },
   {
     image: sponsor3,
     name: "Innovaccer",
     position: "Partner",
   },
   {
     image: sponsor4,
     name: "Flavours Food",
     position: "Food Partner",
   },
   {
     alt: "GITHUB LOGO",
     image: sponsor5,
     name: "Github",
     position: "Partner",
   },
   {
     image: sponsor6,
     name: "Webbuild",
     position: "Team Partner",
   },
   {
     image: sponsor7,
     name: "Finalitcs",
     position: "Event Partner",
   },
   {
     image: sponsor8,
     name: "Eve paper",
     position: "Event Partner",
   },
   {
     image: sponsor9,
     name: "Carzilla",
     position: "Partner",
   },
   {
     image: sponsor10,
     name: "B2B founder group",
     position: "Network Partner",
   },
   {
     image: sponsor11,
     name: "Easemytrip",
     position: "Partner",
   },
   {
     image: sponsor12,
     name: "Quillbots",
     position: "Event Partner",
   },
   {
     image: sponsor13,
     name: "AmarUjala",
     position: "Partner",
   },
   {
     image: sponsor14,
     name: "Gathrr",
     position: "Partner",
   },
   {
     image: sponsor15,
     name: "Slick",
     position: "Partner",
   },
   {
     image: sponsor16,
     name: "Introbot",
     position: "Network Partner",
   },
   {
     image: sponsor17,
     name: "Coding Ninjas",
     position: "Tech Partner",
   },
   {
     image: sponsor18,
     name: "Coding Blocks",
     position: "Tech Partner",
   },
   {
     image: sponsor19,
     name: "Fusion Flow",
     position: "Tech Partner",
   },
   {
     image: sponsor20,
     name: "Wolfram",
     position: "Partner",
   },
   {
     alt: "DEVFOLIO LOGO",
     image: sponsor21,
     name: "Devfolio",
     position: "Partner",
   },
   {
     alt: "POLYGON LOGO",
     image: sponsor22,
     name: "Polygon",
     position: "Partner",
   },
   {
     alt: "REPLIT LOGO",
     image: sponsor23,
     name: "Replit",
     position: "Partner",
   },
   {
     alt: "SOLANA LOGO",
     image: sponsor24,
     name: "Solana",
     position: "Partner",
   },
   {
     alt: "ETH INDIA LOGO",
     image: sponsor25,
     name: "ETH India",
     position: "Partner",
   },
   {
     image: sponsor26,
     name: "Quillaudits",
     position: "Community Partner",
   },
   {
     image: sponsor27,
     name: "Wapromote",
     position: "Media Partner",
   },
   {
     image: sponsor28,
     name: "Starworks",
     position: "Tech Partner",
   },
   {
     image: sponsor29,
     name: "Youth Incorporated",
     position: "Media Partner",
   },
   {
     image: sponsor30,
     name: "Beeceptor",
     position: "Tech Partner",
   },
   {
     image: sponsor31,
     name: "Interview Buddy",
     position: "Event Partner",
   },
   {
     image: sponsor32,
     name: "LWT",
     position: "Knowledge Partner",
   },
   {
     image: sponsor33,
     name: "ED Times",
     position: "Media Partner",
   },
   {
     image: sponsor34,
     name: "StartupNews.fyi",
     position: "Media Partner",
   },
   {
     image: sponsor35,
     name: "Eat My News",
     position: "Media Partner",
   },
   {
     image: sponsor36,
     name: "Delhi events.com",
     position: "Media Partner",
   },
   {
     image: sponsor37,
     name: "Fresources Tech",
     position: "Media Partner",
   },
   {
     image: sponsor38,
     name: "Lets Upgrade Digitally",
     position: "Media Partner",
   },
   {
     image: sponsor39,
     name: "Foodwalas",
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
        <div className="flex flex-wrap w-full justify-around pb-11">
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
                <div className="w-[40%]  h-full">
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
