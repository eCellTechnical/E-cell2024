import "./Gallery.css";

import { motion } from "framer-motion";
import { fadeIn } from "../../styles/Variant.js";

import image1 from "../../assets/gallery/1.jpg";
import image2 from "../../assets/gallery/2.jpg";
import image3 from "../../assets/gallery/3.jpg";
import image4 from "../../assets/gallery/4.jpg";
import image5 from "../../assets/gallery/5.webp";
import image6 from "../../assets/gallery/6.jpg";
import image7 from "../../assets/gallery/7.jpg";
import image8 from "../../assets/gallery/8.jpg";
import image9 from "../../assets/gallery/9.jpg";
import image10 from "../../assets/gallery/10.jpg";
import image11 from "../../assets/gallery/11.jpg";
import image12 from "../../assets/gallery/12.jpg";
import image14 from "../../assets/gallery/14.jpg";
import image15 from "../../assets/gallery/15.webp";
import image16 from "../../assets/gallery/16.jpg";
import image18 from "../../assets/gallery/18.jpg";
import image19 from "../../assets/gallery/19.jpg";
import image20 from "../../assets/gallery/20.jpg";
import image21 from "../../assets/gallery/21.jpg";
import image22 from "../../assets/gallery/22.jpg";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Gallery() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <main className="pt-28 bg-white dark:bg-black">
      <div className="gallary pb-8 flex justify-center items-center">
        <div className="containerr w-[80%]">
          <div>
            <h1 className="text-3xl md:text-5xl text-center font-bold text-black dark:text-white">
              Photo <span className="text-[#4d55ba]">Gallery</span>
            </h1>
          </div>
          <div className="grid-wrapper mt-10">
            <motion.div
              variants={fadeIn("up")}
              initial="hidden"
              whileInView={"show"}
              className="tall"
            >
              <img src={image1} alt="speaker" loading="lazy" />
            </motion.div>
            <motion.div
              variants={fadeIn("up")}
              initial="hidden"
              whileInView={"show"}
              className="big"
            >
              <img src={image22} alt="speaker" loading="lazy" />
            </motion.div>
            <motion.div
              variants={fadeIn("up")}
              initial="hidden"
              whileInView={"show"}
              className=""
            >
              <img src={image4} alt="speaker" loading="lazy" />
            </motion.div>
            <motion.div
              variants={fadeIn("up")}
              initial="hidden"
              whileInView={"show"}
              className="tall"
            >
              <img src={image5} alt="speaker" loading="lazy" />
            </motion.div>
            <motion.div
              variants={fadeIn("up")}
              initial="hidden"
              whileInView={"show"}
              className="tall"
            >
              <img src={image6} alt="speaker" loading="lazy" />
            </motion.div>
            <motion.div
              variants={fadeIn("up")}
              initial="hidden"
              whileInView={"show"}
              className=""
            >
              <img src={image7} alt="speaker" loading="lazy" />
            </motion.div>

            <motion.div
              variants={fadeIn("up")}
              initial="hidden"
              whileInView={"show"}
              className="tall"
            >
              <img src={image9} alt="speaker" loading="lazy" />
            </motion.div>
            <motion.div
              variants={fadeIn("up")}
              initial="hidden"
              whileInView={"show"}
              className="big"
            >
              <img src={image10} alt="speaker" loading="lazy" />
            </motion.div>
            <motion.div
              variants={fadeIn("up")}
              initial="hidden"
              whileInView={"show"}
              className=""
            >
              <img src={image11} alt="speaker" loading="lazy" />
            </motion.div>
            <motion.div
              variants={fadeIn("up")}
              initial="hidden"
              whileInView={"show"}
              className=""
            >
              <img src={image12} alt="speaker" loading="lazy" />
            </motion.div>
            <motion.div
              variants={fadeIn("up")}
              initial="hidden"
              whileInView={"show"}
              className=""
            >
              <img src={image14} alt="speaker" loading="lazy" />
            </motion.div>
            <motion.div
              variants={fadeIn("up")}
              initial="hidden"
              whileInView={"show"}
              className=""
            >
              <img src={image15} alt="speaker" loading="lazy" />
            </motion.div>
            <motion.div
              variants={fadeIn("up")}
              initial="hidden"
              whileInView={"show"}
              className="big"
            >
              <img src={image16} alt="speaker" loading="lazy" />
            </motion.div>
            <motion.div
              variants={fadeIn("up")}
              initial="hidden"
              whileInView={"show"}
              className="big"
            >
              <img src={image8} alt="speaker" loading="lazy" />
            </motion.div>
            <motion.div
              variants={fadeIn("up")}
              initial="hidden"
              whileInView={"show"}
              className="big"
            >
              <img src={image19} alt="speaker" loading="lazy" />
            </motion.div>
            <motion.div
              variants={fadeIn("up")}
              initial="hidden"
              whileInView={"show"}
              className="tall"
            >
              <img src={image18} alt="speaker" loading="lazy" />
            </motion.div>

            <motion.div
              variants={fadeIn("up")}
              initial="hidden"
              whileInView={"show"}
              className="tall"
            >
              <img src={image20} alt="speaker" loading="lazy" />
            </motion.div>
            <motion.div
              variants={fadeIn("up")}
              initial="hidden"
              whileInView={"show"}
              className=""
            >
              <img src={image21} alt="speaker" loading="lazy" />
            </motion.div>
            <motion.div
              variants={fadeIn("up")}
              initial="hidden"
              whileInView={"show"}
              className="wide"
            >
              <img src={image2} alt="speaker" loading="lazy" />
            </motion.div>
            <motion.div
              variants={fadeIn("up")}
              initial="hidden"
              whileInView={"show"}
              className=""
            >
              <img src={image3} alt="speaker" loading="lazy" />
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Gallery;
