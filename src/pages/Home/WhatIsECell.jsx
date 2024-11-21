import { TiLightbulb } from "react-icons/ti";
import Button from "../../components/Button/Button";

function WhatIsECell() {
  return (
    <div className="flex flex-col lg:flex w-[100vw] lg:w-full justify-center items-center lg:flex-row my-[8%] lg:my-[4%] ">
      <div
        data-aos="fade-right"
        className="w-full lg:w-full flex justify-center items-center"
      >
        <img
          src={
            "https://firebasestorage.googleapis.com/v0/b/endevaour-2023.appspot.com/o/webassets%2FAnimation%20-%201705429785180.gif?alt=media&token=d646615b-2270-4e1c-a48d-c1bd4b732520"
          }
          alt=""
          className="lg:flex w-3/4 lg:w-2/3 opacity-90 ml-[-10px] lg:ml-[-80px]"
        />
      </div>
      <div
        data-aos="fade-left"
        className="dark:text-white w-11/12 lg:w-4/5 flex-col justify-center items-center lg:items-start lg:justify-center "
      >
        <div className="flex justify-center items-center lg:justify-start">
          <h2 className="!font-medium !text-4xl lg:!text-5xl text-black dark:text-white">
            What is <span className="text-[#4d55ba]">E-Cell</span> ?
          </h2>
          <TiLightbulb className="ml-2 self-center w-8 h-10" />
        </div>
        <p className="!text-md text-center lg:text-left mt-10 w-[100%] lg:w-[85%] font-medium dark:font-light text-black dark:text-white">
          KIET E-Cell is a student body of KIET, formed in 2014 with the aim to
          promote an entrepreneurial culture among the young minds of
          today&apos;s generation, and to encourage an entrepreneurial mindset
          in an aspiring individual to convert their &quot;Drop of an Idea into
          an Ocean of Reality&quot;.
        </p>
        <div className="w-full  flex justify-center items-center lg:justify-start mt-5">
          <Button />
        </div>
      </div>
    </div>
  );
}

export default WhatIsECell;
