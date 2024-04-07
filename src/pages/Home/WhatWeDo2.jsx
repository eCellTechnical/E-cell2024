import "./WhatWeDo2.css";
import useTheme from "../../context/theme";
function WhatWeDo2() {
  const { themeMode } = useTheme();
  const cards = [
    {
      imgUrl:
        "https://res.cloudinary.com/dwtytn7fl/image/upload/q_auto/f_auto/v1710786539/Animation_-_1705531097237_hmh6pv.gif",
      heading: "Ideate",
      text: " To start your search for that drop-dead idea that&apos;s going to set the world on fire, open yourself to the possibilities and you will be bound to become a winner.",
    },
    {
      imgUrl:
        "https://res.cloudinary.com/dwtytn7fl/image/upload/q_auto/f_auto/v1710786540/Animation_-_1705531132837_n6wffe.gif",
      imgUrl2:
        "https://res.cloudinary.com/dwtytn7fl/image/upload/q_auto/f_auto/v1710786543/Animation_-_1705531132837_1_qf8c04.gif",
      heading: "Create",
      text: "Create an entrepreneurship community where we ideate, innovate and mold your idea into a full-fledged running venture.",
    },
    {
      imgUrl:
        "https://res.cloudinary.com/dwtytn7fl/image/upload/q_auto/f_auto/v1710786548/Animation_-_1705531218146_bf4zav.gif",
      heading: "Incubate",
      text: "Your idea needs to get nurtured in order to reach full strength and to be able to breathe and grow independently.",
    },
  ];
  return (
    <div className="flex w-[100vw] text-white flex-col items-center justify-center bg-[#fff] dark:bg-black">
      <div>
        <h2 className="head !text-4xl font-semibold mb-8 text-black dark:text-white">
          What <span className="text-[#4d55ba] !font-bold">We Do❔</span>
        </h2>
      </div>
      <div className="w-[90%] md:w-[70%]">
        <p className="text-center text-md mb-3 md:mb-6 text-black  font-medium dark:text-[#ffffff]">
          Through our vision of &quot;Learn, Build and Scale&quot; we implement
          various initiatives and events in KIET to foster entrepreneurial minds
          and create a culture of enthralling startups bound for success!
        </p>
      </div>
      <div className="containerr w-[80%]  flex flex-col md:flex-row justify-center items-center md:justify-around">
        {cards.map((card, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className={` ${
              index == 0 &&
              "card w-[85%] md:w-[25%] h-full flex flex-col justify-center items-center border-2 border-white p-8 shadow-2xl drop-shadow-2xl"
            } ${
              index == 1 &&
              "card w-[85%] md:w-[25%] h-full flex flex-col justify-center items-center border-2 border-white  p-8 pt-3 shadow-2xl drop-shadow-2lg"
            } ${
              index == 2 &&
              "card w-[85%] md:w-[25%] h-full flex flex-col justify-center items-center border-2 border-white  p-8 pt-3 shadow-2xl drop-shadow-2lg"
            }`}
          >
            <div className="flex flex-col justify-center items-center">
              <img
                src={
                  index == 0 || index == 2
                    ? card.imgUrl
                    : themeMode == "dark"
                    ? card.imgUrl
                    : card.imgUrl2
                }
                alt=""
                className={`${index == 0 && "lg:flex w-[60%]"} ${
                  index == 1 && "lg:flex w-[85%]"
                } ${index == 2 && "lg:flex w-[35%]"}`}
              />
              <h3
                className={` ${
                  index == 0 &&
                  "text-black dark:text-white text-2xl font-semibold m-4 mt-2"
                } ${
                  index == 1 &&
                  "text-black dark:text-white text-2xl font-semibold m-4"
                } ${
                  index == 2 &&
                  "text-black dark:text-white font-semibold text-2xl m-4"
                }`}
              >
                {card.heading}
              </h3>
            </div>
            <div>
              <p className=" text-[#4b4b4b] dark:text-[#a6a6a6] font-semibold dark:font-normal text-center">
                {card.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhatWeDo2;
