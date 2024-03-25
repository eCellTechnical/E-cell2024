// import React from "react";
import LampContainer from "./component";
import { motion } from "framer-motion";
function CommingSoon() {
  return (
    <div className="flex justify-center items-center w-[100vw] ">
      <div className="">
        <LampContainer className=" w-[100vw] h-[100vh] pt-[30%]">
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="bg-gradient-to-b dark:bg-gradient-to-br from-[#8e8e8e] to-black dark:from-slate-300 dark:to-slate-500 py-4 bg-clip-text text-center text-5xl font-medium tracking-tight text-transparent md:text-7xl mt-[-25%] md:mt-[50%] "
          >
            Coming Soon... <br /> Endeavour 2k24
          </motion.h1>
        </LampContainer>
      </div>
    </div>
  );
}

export default CommingSoon;
