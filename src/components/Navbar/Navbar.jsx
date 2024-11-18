import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { TiLightbulb } from "react-icons/ti";

import profilew from "../../assets/navbar/Endeavour/icons8-male-user-100 (1).png";
import profileb from "../../assets/navbar/Endeavour/icons8-male-user-100 (2).png";

import colabIcon from "../../assets/navbar/Discover/colab.png";
import colabIconWhite from "../../assets/navbar/Discover/colabWhite.png";
import eventIcon from "../../assets/navbar/Discover/event.png";
import eventIconWhite from "../../assets/navbar/Discover/eventWhite.png";
import galleryIcon from "../../assets/navbar/Discover/gallery.png";
import galleryIconWhite from "../../assets/navbar/Discover/galleryWhite.png";
import speakerIcon from "../../assets/navbar/Discover/speaker.png";
import speakerIconWhite from "../../assets/navbar/Discover/speakerWhite.png";
import teamIcon from "../../assets/navbar/Discover/team.png";
import teamIconWhite from "../../assets/navbar/Discover/teamWhite.png";
import Header from "../../IdeateX/components/Header"
import EndeavourLogo from "../../assets/navbar/logo1edit.png";

import discordIcon from "../../assets/navbar/Initiative/discord.png";
import discordIconWhite from "../../assets/navbar/Initiative/discordWhite.png";
import growIcon from "../../assets/navbar/Initiative/grow.png";
import growIconWhite from "../../assets/navbar/Initiative/growWhite.png";
import ideaIcon from "../../assets/navbar/Initiative/idea.png";
import ideaIconWhite from "../../assets/navbar/Initiative/ecellWhite.png";

import bloggerIcon from "../../assets/navbar/Learn/blogger.png";
import questionIcon from "../../assets/navbar/Learn/question.png";

import "./Navbar.css";
import useTheme from "../../context/theme";
import { useState } from "react";

function Navbar() {
  const history = useNavigate();
  const isEndeavour = useLocation();
  const { themeMode, lightTheme, darkTheme } = useTheme();
  const [mainMenu, setMainMenu] = useState(0);
  const [endeavourMainMenu, setEndeavourMainMenu] = useState(0);
  const [discoverMobChilds, setDiscoverMobChilds] = useState(0);
  const userId = localStorage.getItem("userId");
  const [initiativesMobChilds, setInitiativesMobChilds] = useState(0);
  const [learnMobChilds, setLearnMobChilds] = useState(0);

  const handleOpenMainMenu = () => {
    setMainMenu(!mainMenu);
    setDiscoverMobChilds(0);
    setInitiativesMobChilds(0);
    setLearnMobChilds(0);
  };

  const handleOpenEndeavourMainMenu = () => {
    setEndeavourMainMenu(!endeavourMainMenu);
  };

  const handleThemeChange = (e) => {
    const modeStatus = e.currentTarget.checked;
    if (modeStatus) {
      lightTheme();
    } else {
      darkTheme();
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    setEndeavourMainMenu(0);
    history("/endeavour");
  };

  return (
    <div className="w-[100vw]">
      {isEndeavour.pathname.slice(1, 10) !== "ideatex" && isEndeavour.pathname.slice(1, 18) !== "ideatex/register" ? (
        <div className="fixed navbar z-[50] flex flex-row w-[100vw]">
          <div className="logoSide w-[20%] p-3 pl-[4%] flex items-center !cursor-pointer">
            <img
              src={
                themeMode == "dark"
                  ? "https://res.cloudinary.com/dzkyhnxta/image/upload/v1727952908/j0gvjlmvlgv0sfmwgeu8.png"
                  : "https://res.cloudinary.com/dzkyhnxta/image/upload/v1727952908/i5e0rljt7c5ncyexqpyy.png"
              }
              onClick={() => history("/")}
              className="w-14 h-14 lg:w-14 lg:h-14 z-20 cursor-pointer"
              alt="E-Cell logo"
            />
          </div>

          <div className="linksSide flex lg:justify-center lg:items-center text-white w-[80%] items-center justify-end h-20 cursor-pointer pl-[20%] pr-[7%]">
            <div className=" hidden lg:flex items-center  w-full font-bold justify-between  text-md h-[100%]">
              <div className="flex items-center justify-center discover h-[100%] px-5">
                <p className="font-medium text-black dark:text-white">
                  Discover
                </p>
                <div className="discoverMenu absolute w-[100vw]  top-[100%] left-[0]  flex flex-wrap p-8 px-20 justify-center bg-[#ffffffe6] dark:bg-[#000000e6]">
                  <div className="m-5 w-1/4 flex flex-row items-center justify-start childLinks">
                    <TiLightbulb className=" self-center w-9 h-9 text-[#4d55ba] dark:text-white m-3" />
                    <div onClick={() => history("/discover")}>
                      <h2 className="text-[#4d55ba] text-2xl">Who we are?</h2>
                      <p className="text-md font-normal text-black dark:text-white">
                        know us better
                      </p>
                    </div>
                  </div>
                  <div className="m-5 w-1/4 flex flex-row items-center justify-start childLinks">
                    <img
                      src={themeMode == "dark" ? galleryIcon : galleryIconWhite}
                      alt="discover"
                      className="w-10 h-10 m-3"
                    />
                    <div onClick={() => history("/gallery")}>
                      <h2 className="text-[#4d55ba] text-2xl">Gallery</h2>
                      <p className="text-md font-normal text-black dark:text-white">
                        A walk through E-Cell KIET&apos;s memory lane
                      </p>
                    </div>
                  </div>
                  <div className="m-5 w-1/4 flex flex-row items-center justify-start childLinks">
                    <img
                      src={themeMode == "dark" ? speakerIcon : speakerIconWhite}
                      alt="speakers"
                      className="w-8 h-8 m-3"
                    />
                    <div onClick={() => history("/pastspeakers")}>
                      <h2 className="text-[#4d55ba] text-2xl">Past Speakers</h2>
                      <p className="text-md font-normal text-black dark:text-white">
                        Our past exemplar speakers
                      </p>
                    </div>
                  </div>
                  <div className="m-5 w-1/4 flex flex-row items-center justify-start childLinks">
                    <img
                      src={themeMode == "dark" ? eventIcon : eventIconWhite}
                      alt="events"
                      className="w-9 h-8 m-3"
                    />
                    <div onClick={() => history("/events")}>
                      <h2 className="text-[#4d55ba] text-2xl">Events</h2>
                      <p className="text-md font-normal text-black dark:text-white">
                        Get to know about the events E-Cell KIET conducts
                      </p>
                    </div>
                  </div>
                  <div className="m-5 w-1/4 flex flex-row items-center justify-start childLinks">
                    <img
                      src={themeMode == "dark" ? teamIcon : teamIconWhite}
                      alt="Our Team"
                      className="w-8 h-8 m-3"
                    />
                    <div onClick={() => history("/ourteam")}>
                      <h2 className="text-[#4d55ba] text-2xl">Our Team</h2>
                      <p className="text-md font-normal text-black dark:text-white">
                        Here&apos; our team amigos!
                      </p>
                    </div>
                  </div>
                  <div className="m-5 w-1/4 flex flex-row items-center justify-start childLinks">
                    <img
                      src={themeMode == "dark" ? colabIcon : colabIconWhite}
                      alt="Associations"
                      className="w-9 h-9 m-3"
                    />
                    <div onClick={() => history("/associations")}>
                      <h2 className="text-[#4d55ba] text-2xl">Associations</h2>
                      <p className="text-md font-normal text-black dark:text-white">
                        Get insights about our sponsors and collaborators
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center initiatives h-[100%] px-5">
                <p className="font-medium text-black dark:text-white">
                  Initiatives
                </p>
                <div className="initiativesMenu Menu absolute w-[100vw] top-[100%] left-[0]  flex flex-wrap p-8 px-20 justify-center bg-[#ffffffe6] dark:bg-[#000000e6]">
                  <div className="m-5 w-1/4 flex flex-row items-center justify-start childLinks">
                    <img
                      src={themeMode == "dark" ? ideaIcon : ideaIconWhite}
                      alt="Idea Submission"
                      className="w-10 h-10 m-3"
                    />
                    <div onClick={() => history("/ideasubmissions")}>
                      <h2 className="text-[#4d55ba] text-2xl">
                        Idea Submission
                      </h2>
                      <p className="text-md font-normal text-black dark:text-white">
                        Drop down your ideas to get mentioned by skilled
                        professionals
                      </p>
                    </div>
                  </div>
                  <div className="m-5 w-1/4 flex flex-row items-center justify-start childLinks">
                    <img
                      src={themeMode == "dark" ? growIcon : growIconWhite}
                      alt="Grow With Us"
                      className="w-9 h-9 m-3"
                    />
                    <div onClick={() => history("/ideasubmissions")}>
                      <h2 className="text-[#4d55ba] text-2xl">
                        Grow Your StartUp
                      </h2>
                      <p className="text-md font-normal text-black dark:text-white">
                        Get guidance from our team mentors to upscale your
                        startUp
                      </p>
                    </div>
                  </div>

                  <div className="m-5 w-1/4 flex flex-row items-center justify-start childLinks">
                    <img
                      src={themeMode == "dark" ? discordIcon : discordIconWhite}
                      alt="E-community"
                      className="w-10 h-10 m-3"
                    />
                    <a
                      href="https://discord.com/invite/R29Eh6hwPn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <h2 className="text-[#4d55ba] text-2xl">E-Community</h2>
                      <p className="text-md font-normal text-black dark:text-white">
                        Be the first to receive all the updates by joining our
                        discord community
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center learn h-[100%] px-5">
                <p className="font-medium text-black dark:text-white">Learn</p>
                <div className="learnMenu Menu absolute w-[100vw]  top-[100%] left-[0]  flex flex-wrap p-8 px-20 justify-center bg-[#ffffffe6] dark:bg-[#000000e6]">
                  <div className="m-5 w-1/4 flex flex-row items-center justify-start childLinks">
                    <img
                      src={bloggerIcon}
                      alt="Blog"
                      className="w-10 h-10 m-3"
                    />
                    <a
                      href="https://medium.com/@ECELLKIET"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <h2 className="text-[#4d55ba] text-2xl">Blog</h2>
                      <p className="text-md font-normal text-black dark:text-white">
                        Go through our blogs on Medium
                      </p>
                    </a>
                  </div>
                  <div className="m-5 w-1/4 flex flex-row items-center justify-start childLinks">
                    <img
                      src={questionIcon}
                      alt="FAQ"
                      className="w-10 h-10 m-3"
                    />
                    <div onClick={() => history("/")}>
                      <h2 className="text-[#4d55ba] text-2xl">FAQ</h2>
                      <p className="text-md font-normal text-black dark:text-white">
                        Get your queries answered
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <a
                onClick={() => history("/ideatex")}
                className="endeavour font-medium text-black dark:text-white px-5"
              >
                IdeateX
              </a>
              <a
                href="https://tbi-kiet.in/"
                target="_blank"
                rel="noreferrer"
                className="incubator font-medium text-black dark:text-white px-5"
              >
                Incubator
              </a>
              <a
                onClick={() => history("/contactus")}
                className="contact font-medium text-black dark:text-white px-5"
              >
                Contact
              </a>
              <a className="">
                <div className="container">
                  <label className="toggle" htmlFor="switch">
                    <input
                      id="switch"
                      className="input"
                      type="checkbox"
                      checked={themeMode === "light"}
                      onChange={handleThemeChange}
                    />
                    <div className="icon icon--moon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 512 512"
                        id="moon"
                      >
                        <g>
                          <path
                            fill="#6A6D68"
                            d="M412.95,381.15c-8.05,10.119-16.94,19.33-26.55,27.54c-2.271,1.939-4.58,3.819-6.92,5.64   c-0.261,0.21-0.521,0.42-0.78,0.63c-0.09,0.07-0.19,0.13-0.28,0.2c-5.979,4.6-12.2,8.83-18.64,12.689   c-1.92,1.15-3.851,2.28-5.811,3.37c-18.14,10.061-37.819,17.221-58.42,21.16c-12.27,2.34-24.87,3.55-37.66,3.55   c-27.92,0-54.94-5.739-80.32-17.04c-7.74-3.46-15.3-7.43-22.47-11.81c-6.96-4.24-13.77-9-20.24-14.14   c-5.28-4.19-10.3-8.62-15.07-13.25c-1.3-1.261-2.57-2.54-3.82-3.83c-30.43-31.21-49.57-71.37-54.6-115.38   c-4.54-39.75,2.83-79.04,20.95-113.75c4.99-9.561,10.81-18.78,17.41-27.561c0.2-0.26,0.4-0.529,0.6-0.79   c0.9-1.18,1.81-2.359,2.74-3.529c37.77-47.521,94.29-74.78,155.07-74.78c45.101,0,87.641,14.87,123.021,42.99   c1.54,1.22,2.89,2.33,4.14,3.39c3.16,2.64,6.29,5.43,9.51,8.5c0.49,0.47,0.99,0.94,1.471,1.43c1.3,1.25,2.58,2.54,3.84,3.83   c32.41,33.351,51.979,77.011,55.31,123.75C458.97,293.51,443.88,342.23,412.95,381.15z"
                            opacity=".9"
                          ></path>
                          <path
                            fill="#A3AAA0"
                            d="M408.95,377.15c-8.05,10.119-16.94,19.33-26.55,27.54c-2.271,1.939-4.58,3.819-6.92,5.64   c-0.261,0.21-0.521,0.42-0.78,0.63c-0.09,0.07-0.19,0.13-0.28,0.2c-5.979,4.6-12.2,8.83-18.64,12.689   c-1.92,1.15-3.851,2.28-5.811,3.37c-19.76,10.96-41.359,18.471-63.979,22.141c-10.51,1.699-21.23,2.569-32.101,2.569   c-27.92,0-54.94-5.739-80.32-17.04c-7.74-3.46-15.3-7.43-22.47-11.81c-6.96-4.24-13.77-9-20.24-14.14   c-5.21-4.141-10.17-8.511-14.89-13.08c-0.06-0.051-0.12-0.11-0.18-0.17c-32.64-31.721-53.18-73.381-58.42-119.21   c-4.54-39.75,2.83-79.04,20.95-113.75c4.99-9.561,10.81-18.78,17.41-27.561c1.09-1.449,2.2-2.89,3.34-4.319   c0.55-0.69,1.1-1.37,1.65-2.051c37.76-46.25,93.52-72.729,153.42-72.729c45.101,0,87.641,14.87,123.021,42.99   c1.54,1.22,2.89,2.33,4.14,3.39c3.16,2.64,6.29,5.43,9.51,8.5c1.811,1.72,3.58,3.48,5.311,5.26c0.05,0.061,0.11,0.11,0.16,0.17   c32.319,33.33,51.83,76.92,55.149,123.58C454.97,289.51,439.88,338.23,408.95,377.15z"
                          ></path>
                          <circle
                            cx="285"
                            cy="156"
                            r="44.5"
                            fill="#666865"
                            stroke="#5E5E5D"
                            strokeMiterlimit="10"
                            strokeWidth="4"
                          ></circle>
                          <circle
                            cx="385"
                            cy="300"
                            r="21.5"
                            fill="#666865"
                            stroke="#5E5E5D"
                            strokeMiterlimit="10"
                            strokeWidth="4"
                          ></circle>
                          <circle
                            cx="166"
                            cy="296.5"
                            r="27.84"
                            fill="#666865"
                            stroke="#5E5E5D"
                            strokeMiterlimit="10"
                            strokeWidth="4"
                          ></circle>
                          <circle
                            cx="261.25"
                            cy="272.75"
                            r="14.75"
                            fill="#666865"
                            stroke="#5E5E5D"
                            strokeMiterlimit="10"
                            strokeWidth="4"
                          ></circle>
                          <circle
                            cx="151.5"
                            cy="184"
                            r="28"
                            fill="#666865"
                            stroke="#5E5E5D"
                            strokeMiterlimit="10"
                            strokeWidth="4"
                          ></circle>
                          <circle
                            cx="297.5"
                            cy="382.501"
                            r="27.5"
                            fill="#666865"
                            stroke="#5E5E5D"
                            strokeMiterlimit="10"
                            strokeWidth="4"
                          ></circle>
                          <circle
                            cx="395"
                            cy="213"
                            r="18.5"
                            fill="#666865"
                            stroke="#5E5E5D"
                            strokeMiterlimit="10"
                            strokeWidth="4"
                          ></circle>
                          <circle
                            cx="317"
                            cy="216"
                            r="8"
                            fill="#666865"
                            stroke="#5E5E5D"
                            strokeMiterlimit="10"
                            strokeWidth="4"
                          ></circle>
                          <path
                            fill="#666865"
                            stroke="#5E5E5D"
                            strokeMiterlimit="10"
                            strokeWidth="4"
                            d="M299.55,450.38   c-12.27,2.34-24.87,3.55-37.66,3.55c-27.92,0-54.94-5.739-80.32-17.04c-7.74-3.46-15.3-7.43-22.47-11.81   c-6.96-4.24-13.77-9-20.24-14.14c-5.28-4.19-10.3-8.62-15.07-13.25c-1.3-1.261-2.57-2.54-3.82-3.83   c-0.06-0.051-0.12-0.11-0.18-0.17c-32.64-31.721-53.18-73.381-58.42-119.21c-4.54-39.75,2.83-79.04,20.95-113.75   c4.99-9.561,10.81-18.78,17.41-27.561c1.09-1.449,2.2-2.89,3.34-4.319c0.55-0.69,1.1-1.37,1.65-2.051   c-0.16,3.011-0.29,6.2-0.39,9.58c-2.39,79.15,12.97,253.43,185.661,310.98C293.12,448.41,296.31,449.42,299.55,450.38z"
                            opacity=".2"
                          ></path>
                        </g>
                      </svg>
                    </div>

                    <div className="w-5 icon icon--sun">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 47.5 47.5"
                        id="sun"
                      >
                        <defs>
                          <clipPath id="a">
                            <path d="M0 38h38V0H0v38Z"></path>
                          </clipPath>
                        </defs>
                        <g
                          fill="#ffac33"
                          clipPath="url(#a)"
                          transform="matrix(1.25 0 0 -1.25 0 47.5)"
                        >
                          <path d="M17 35s0 2 2 2 2-2 2-2v-2s0-2-2-2-2 2-2 2v2zM35 21s2 0 2-2-2-2-2-2h-2s-2 0-2 2 2 2 2 2h2zM5 21s2 0 2-2-2-2-2-2H3s-2 0-2 2 2 2 2 2h2zM10.121 29.706s1.414-1.414 0-2.828-2.828 0-2.828 0l-1.415 1.414s-1.414 1.414 0 2.829c1.415 1.414 2.829 0 2.829 0l1.414-1.415ZM31.121 8.707s1.414-1.414 0-2.828-2.828 0-2.828 0l-1.414 1.414s-1.414 1.414 0 2.828 2.828 0 2.828 0l1.414-1.414ZM30.708 26.879s-1.414-1.414-2.828 0 0 2.828 0 2.828l1.414 1.414s1.414 1.414 2.828 0 0-2.828 0-2.828l-1.414-1.414ZM9.708 5.879s-1.414-1.414-2.828 0 0 2.828 0 2.828l1.414 1.414s1.414 1.414 2.828 0 0-2.828 0-2.828L9.708 5.879ZM17 5s0 2 2 2 2-2 2-2V3s0-2-2-2-2 2-2 2v2zM29 19c0 5.523-4.478 10-10 10-5.523 0-10-4.477-10-10 0-5.522 4.477-10 10-10 5.522 0 10 4.478 10 10"></path>
                        </g>
                      </svg>
                    </div>
                  </label>
                </div>
              </a>
            </div>
            <div className="containerr mr-5 lg:hidden flex">
              <label className="toggle" htmlFor="switch">
                <input
                  id="switch"
                  className="input"
                  type="checkbox"
                  checked={themeMode === "light"}
                  onChange={handleThemeChange}
                />
                <div className="icon icon--moon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 512 512"
                    id="moon"
                  >
                    <g>
                      <path
                        fill="#6A6D68"
                        d="M412.95,381.15c-8.05,10.119-16.94,19.33-26.55,27.54c-2.271,1.939-4.58,3.819-6.92,5.64   c-0.261,0.21-0.521,0.42-0.78,0.63c-0.09,0.07-0.19,0.13-0.28,0.2c-5.979,4.6-12.2,8.83-18.64,12.689   c-1.92,1.15-3.851,2.28-5.811,3.37c-18.14,10.061-37.819,17.221-58.42,21.16c-12.27,2.34-24.87,3.55-37.66,3.55   c-27.92,0-54.94-5.739-80.32-17.04c-7.74-3.46-15.3-7.43-22.47-11.81c-6.96-4.24-13.77-9-20.24-14.14   c-5.28-4.19-10.3-8.62-15.07-13.25c-1.3-1.261-2.57-2.54-3.82-3.83c-30.43-31.21-49.57-71.37-54.6-115.38   c-4.54-39.75,2.83-79.04,20.95-113.75c4.99-9.561,10.81-18.78,17.41-27.561c0.2-0.26,0.4-0.529,0.6-0.79   c0.9-1.18,1.81-2.359,2.74-3.529c37.77-47.521,94.29-74.78,155.07-74.78c45.101,0,87.641,14.87,123.021,42.99   c1.54,1.22,2.89,2.33,4.14,3.39c3.16,2.64,6.29,5.43,9.51,8.5c0.49,0.47,0.99,0.94,1.471,1.43c1.3,1.25,2.58,2.54,3.84,3.83   c32.41,33.351,51.979,77.011,55.31,123.75C458.97,293.51,443.88,342.23,412.95,381.15z"
                        opacity=".9"
                      ></path>
                      <path
                        fill="#A3AAA0"
                        d="M408.95,377.15c-8.05,10.119-16.94,19.33-26.55,27.54c-2.271,1.939-4.58,3.819-6.92,5.64   c-0.261,0.21-0.521,0.42-0.78,0.63c-0.09,0.07-0.19,0.13-0.28,0.2c-5.979,4.6-12.2,8.83-18.64,12.689   c-1.92,1.15-3.851,2.28-5.811,3.37c-19.76,10.96-41.359,18.471-63.979,22.141c-10.51,1.699-21.23,2.569-32.101,2.569   c-27.92,0-54.94-5.739-80.32-17.04c-7.74-3.46-15.3-7.43-22.47-11.81c-6.96-4.24-13.77-9-20.24-14.14   c-5.21-4.141-10.17-8.511-14.89-13.08c-0.06-0.051-0.12-0.11-0.18-0.17c-32.64-31.721-53.18-73.381-58.42-119.21   c-4.54-39.75,2.83-79.04,20.95-113.75c4.99-9.561,10.81-18.78,17.41-27.561c1.09-1.449,2.2-2.89,3.34-4.319   c0.55-0.69,1.1-1.37,1.65-2.051c37.76-46.25,93.52-72.729,153.42-72.729c45.101,0,87.641,14.87,123.021,42.99   c1.54,1.22,2.89,2.33,4.14,3.39c3.16,2.64,6.29,5.43,9.51,8.5c1.811,1.72,3.58,3.48,5.311,5.26c0.05,0.061,0.11,0.11,0.16,0.17   c32.319,33.33,51.83,76.92,55.149,123.58C454.97,289.51,439.88,338.23,408.95,377.15z"
                      ></path>
                      <circle
                        cx="285"
                        cy="156"
                        r="44.5"
                        fill="#666865"
                        stroke="#5E5E5D"
                        strokeMiterlimit="10"
                        strokeWidth="4"
                      ></circle>
                      <circle
                        cx="385"
                        cy="300"
                        r="21.5"
                        fill="#666865"
                        stroke="#5E5E5D"
                        strokeMiterlimit="10"
                        strokeWidth="4"
                      ></circle>
                      <circle
                        cx="166"
                        cy="296.5"
                        r="27.84"
                        fill="#666865"
                        stroke="#5E5E5D"
                        strokeMiterlimit="10"
                        strokeWidth="4"
                      ></circle>
                      <circle
                        cx="261.25"
                        cy="272.75"
                        r="14.75"
                        fill="#666865"
                        stroke="#5E5E5D"
                        strokeMiterlimit="10"
                        strokeWidth="4"
                      ></circle>
                      <circle
                        cx="151.5"
                        cy="184"
                        r="28"
                        fill="#666865"
                        stroke="#5E5E5D"
                        strokeMiterlimit="10"
                        strokeWidth="4"
                      ></circle>
                      <circle
                        cx="297.5"
                        cy="382.501"
                        r="27.5"
                        fill="#666865"
                        stroke="#5E5E5D"
                        strokeMiterlimit="10"
                        strokeWidth="4"
                      ></circle>
                      <circle
                        cx="395"
                        cy="213"
                        r="18.5"
                        fill="#666865"
                        stroke="#5E5E5D"
                        strokeMiterlimit="10"
                        strokeWidth="4"
                      ></circle>
                      <circle
                        cx="317"
                        cy="216"
                        r="8"
                        fill="#666865"
                        stroke="#5E5E5D"
                        strokeMiterlimit="10"
                        strokeWidth="4"
                      ></circle>
                      <path
                        fill="#666865"
                        stroke="#5E5E5D"
                        strokeMiterlimit="10"
                        strokeWidth="4"
                        d="M299.55,450.38   c-12.27,2.34-24.87,3.55-37.66,3.55c-27.92,0-54.94-5.739-80.32-17.04c-7.74-3.46-15.3-7.43-22.47-11.81   c-6.96-4.24-13.77-9-20.24-14.14c-5.28-4.19-10.3-8.62-15.07-13.25c-1.3-1.261-2.57-2.54-3.82-3.83   c-0.06-0.051-0.12-0.11-0.18-0.17c-32.64-31.721-53.18-73.381-58.42-119.21c-4.54-39.75,2.83-79.04,20.95-113.75   c4.99-9.561,10.81-18.78,17.41-27.561c1.09-1.449,2.2-2.89,3.34-4.319c0.55-0.69,1.1-1.37,1.65-2.051   c-0.16,3.011-0.29,6.2-0.39,9.58c-2.39,79.15,12.97,253.43,185.661,310.98C293.12,448.41,296.31,449.42,299.55,450.38z"
                        opacity=".2"
                      ></path>
                    </g>
                  </svg>
                </div>

                <div className="w-6 icon icon--sun">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 47.5 47.5"
                    id="sun"
                  >
                    <defs>
                      <clipPath id="a">
                        <path d="M0 38h38V0H0v38Z"></path>
                      </clipPath>
                    </defs>
                    <g
                      fill="#ffac33"
                      clipPath="url(#a)"
                      transform="matrix(1.25 0 0 -1.25 0 47.5)"
                    >
                      <path d="M17 35s0 2 2 2 2-2 2-2v-2s0-2-2-2-2 2-2 2v2zM35 21s2 0 2-2-2-2-2-2h-2s-2 0-2 2 2 2 2 2h2zM5 21s2 0 2-2-2-2-2-2H3s-2 0-2 2 2 2 2 2h2zM10.121 29.706s1.414-1.414 0-2.828-2.828 0-2.828 0l-1.415 1.414s-1.414 1.414 0 2.829c1.415 1.414 2.829 0 2.829 0l1.414-1.415ZM31.121 8.707s1.414-1.414 0-2.828-2.828 0-2.828 0l-1.414 1.414s-1.414 1.414 0 2.828 2.828 0 2.828 0l1.414-1.414ZM30.708 26.879s-1.414-1.414-2.828 0 0 2.828 0 2.828l1.414 1.414s1.414 1.414 2.828 0 0-2.828 0-2.828l-1.414-1.414ZM9.708 5.879s-1.414-1.414-2.828 0 0 2.828 0 2.828l1.414 1.414s1.414 1.414 2.828 0 0-2.828 0-2.828L9.708 5.879ZM17 5s0 2 2 2 2-2 2-2V3s0-2-2-2-2 2-2 2v2zM29 19c0 5.523-4.478 10-10 10-5.523 0-10-4.477-10-10 0-5.522 4.477-10 10-10 5.522 0 10 4.478 10 10"></path>
                    </g>
                  </svg>
                </div>
              </label>
            </div>
            <div className="lg:hidden flex">
              <div className="flex flex-col" onClick={handleOpenMainMenu}>
                <div
                  className={`w-4 h-[5px] bg-[#1e1e1e] dark:bg-white rounded-2xl transition-transform duration-200 ${
                    mainMenu ? "translate-x-full" : ""
                  }`}
                ></div>
                <div className="w-8 h-[5px] bg-[#1e1e1e] dark:bg-white mt-[6px] mb-[6px] rounded-2xl"></div>
                <div
                  className={`w-4 h-[5px] bg-[#1e1e1e] dark:bg-white rounded-2xl transition-transform duration-200 ${
                    mainMenu ? "" : "translate-x-full"
                  }`}
                ></div>
              </div>
            </div>
          </div>
          <div
            className={`${
              mainMenu ? "translate-x-0" : "translate-x-full"
            } transition-all duration-200 lg:hidden  absolute w-[100vw] h-[94.5vh] bg-[#ffffff] dark:bg-[#090909] !z-[-1] text-[#000] dark:text-white mt-[8.6vh] flex flex-col justify-between py-28 items-center text-3xl font-bold`}
          >
            <div className="flex flex-col justify-center items-center mb-2">
              <div
                className="flex justify-center items-center"
                onClick={() => {
                  setDiscoverMobChilds(!discoverMobChilds);
                  setInitiativesMobChilds(0);
                  setLearnMobChilds(0);
                }}
              >
                <p className="font-bold">Discover</p>
                <p
                  className={`${
                    discoverMobChilds ? "rotate-0" : "rotate-180"
                  }  !text-xl ml-3 transition-all duration-300`}
                >
                  ^
                </p>
              </div>
              <div
                className={`flex flex-col text-2xl items-center text-[#2c2c2c] dark:text-[#ccc] mt-5  ${
                  discoverMobChilds ? "flex" : "hidden"
                }`}
              >
                <a
                  onClick={() => {
                    history("/discover");
                    setMainMenu(0);
                  }}
                >
                  Who We Are
                </a>
                <a
                  className="m-4"
                  onClick={() => {
                    history("/gallery");
                    setMainMenu(0);
                  }}
                >
                  Gallery
                </a>
                <a
                  onClick={() => {
                    history("/pastspeakers");
                    setMainMenu(0);
                  }}
                >
                  Past Speakers
                </a>
                <a
                  className="m-4"
                  onClick={() => {
                    history("/events");
                    setMainMenu(0);
                  }}
                >
                  Events
                </a>
                <a
                  onClick={() => {
                    history("/ourteam");
                    setMainMenu(0);
                  }}
                >
                  Our Team
                </a>
                <a
                  className="m-4"
                  onClick={() => {
                    history("/associations");
                    setMainMenu(0);
                  }}
                >
                  Associations
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div
                className="flex justify-center items-center"
                onClick={() => {
                  setInitiativesMobChilds(!initiativesMobChilds);
                  setDiscoverMobChilds(0);
                  setLearnMobChilds(0);
                }}
              >
                <p className="font-bold">Initiatives</p>
                <p
                  className={`${
                    initiativesMobChilds ? "rotate-0" : "rotate-180"
                  }  !text-xl ml-3 transition-all duration-300`}
                >
                  ^
                </p>
              </div>
              <div
                className={`flex flex-col text-2xl items-center mt-5  text-[#2c2c2c] dark:text-[#ccc] ${
                  initiativesMobChilds ? "flex" : "hidden"
                }`}
              >
                <a
                  onClick={() => {
                    history("/ideasubmissions");
                    setMainMenu(0);
                  }}
                >
                  Idea Submissions
                </a>
                <a
                  className="m-4"
                  onClick={() => {
                    history("/ideasubmissions");
                    setMainMenu(0);
                  }}
                >
                  Grow Your StartUp
                </a>
                <a
                  href="https://discord.com/invite/R29Eh6hwPn"
                  target="_blank"
                  rel="noreferrer"
                >
                  E-Community
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div
                className="flex justify-center items-center"
                onClick={() => {
                  setLearnMobChilds(!learnMobChilds);
                  setDiscoverMobChilds(0);
                  setInitiativesMobChilds(0);
                }}
              >
                <p className="font-bold">Learn</p>
                <p
                  className={`${
                    learnMobChilds ? "rotate-0" : "rotate-180"
                  }  !text-xl ml-3 transition-all duration-300`}
                >
                  ^
                </p>
              </div>
              <div
                className={`flex flex-col text-2xl items-center mt-5  text-[#2c2c2c] dark:text-[#ccc] ${
                  learnMobChilds ? "flex" : "hidden"
                }`}
              >
                <a
                  className="m-4"
                  href="https://medium.com/@ECELLKIET"
                  target="_blank"
                  rel="noreferrer"
                >
                  Blog
                </a>
                <a
                  onClick={() => {
                    history("/");
                    setMainMenu(0);
                  }}
                >
                  FAQ
                </a>
              </div>
            </div>
            <a
              onClick={() => {
                history("/IdeateX");
                setMainMenu(0);
              }}
              className=""
            >
              IdeateX
            </a>
            <a
              href="https://tbi-kiet.in/"
              target="_blank"
              rel="noreferrer"
              className=""
            >
              Incubator
            </a>
            <a
              onClick={() => {
                history("/contactus");
                setMainMenu(0);
              }}
              className=""
            >
              Contact
            </a>
          </div>
        </div>
      ) : (
        <Header/>
      )}
    </div>
  );
}

export default Navbar;
