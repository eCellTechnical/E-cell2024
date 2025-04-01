import "./Footer.css";

import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import greaterThanDark from "../../assets/footer/greaterthandark.svg";
import greaterThanLight from "../../assets/footer/greaterthanlight.svg";
import useTheme from "../../context/theme";
import { motion } from "framer-motion";
export default function Foot() {
  const isEndeavour = useLocation();
  const history = useNavigate();
  const { themeMode } = useTheme();
  return (
    <>
      {isEndeavour.pathname.slice(1, 10) !== "endeavour" &&
      isEndeavour.pathname.slice(1, 18) !== "endeavour/register" ? (
        <div className="footer z-10   border-white/65 bg-white dark:bg-black text-black dark:text-white border-t-[1px] border-t-[#b1b1b17d]">
          <div className="upperfoot bg-white dark:bg-black z-10 p-8 border-b-[1px] border-b-[#8a8a8a92]">
            <div className="box flex flex-col lg:flex-col items-center lg:items-start">
              <h4 className="text-lg font-bold mb-5">Subscribe to E-Cell</h4>
              <p className="text-md mb-2 font-medium dark:font-light">
                Receive Important Updates and Newsletter
              </p>
              <div className="input-group w-[90%] flex flex-row mb-5 mt-2 lg:mt-5 justify-center items-center">
                <input
                  type="email"
                  className="md:mr-3 !mb-0 w-full !border-0 !border-b-2  !rounded-none !border-b-[#aaa] dark:!border-b-white bg-transparent outline-none p-1"
                  id="Email"
                  name="Email"
                  placeholder="example@gmail.com"
                  autoComplete="off"
                />
                <p className="rounded-lg p-5 md:p-2 subscribe !cursor-pointer [transition:_all_0.1s_linear;] hover:[transform:_translateY(-2px);]">
                  <span className="!cursor-pointer  font-bold dark:font-medium  dark:hover:[text-shadow:_#4d55ba_3px_3px;]">
                    Subscribe
                  </span>
                </p>
              </div>
              <div className="handle flex flex-row items-center justify-between w-[70%] lg:w-[50%] ">
                <a
                  href="https://www.instagram.com/kietecell/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram className=" h-8 w-8 test-black dark:text-white hover:text-[#4d55ba] cursor-pointer transition-all duration-150" />
                </a>
                {/* <a href="#" target="_blank" rel="noreferrer">
                <FaFacebook className=" h-7 w-7 test-black dark:text-white hover:text-[#4d55ba] cursor-pointer transition-all duration-150" />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <FaTelegram className=" h-7 w-7 test-black dark:text-white hover:text-[#4d55ba] cursor-pointer transition-all duration-150" />
              </a> */}
                <a
                  href="https://www.linkedin.com/company/e-cell-kiet/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn className=" h-7 w-7 test-black dark:text-white hover:text-[#4d55ba] cursor-pointer transition-all duration-150" />
                </a>
                <a
                  href="https://www.youtube.com/@ecellkiet5297/videos"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaYoutube className=" h-7 w-7 test-black dark:text-white hover:text-[#4d55ba] cursor-pointer transition-all duration-150" />
                </a>
              </div>
            </div>

            <div className="footbox mt-6 lg:mt-0 ">
              <div className="box mr-8 flex flex-col items-center lg:items-start">
                <h4 className="text-lg mb-5 font-bold">Contact Us</h4>
                <p className="mb-3 font-medium dark:font-light">
                  KIET Group of Institution,Ghaziabad, Delhi NCR, Uttar Pradesh,
                  India, PIN 201206
                </p>
                <iframe
                  title="mapp"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.893214061326!2d77.49584041070436!3d28.75260507851681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf47204fb9241%3A0xd11ed4123c7691fe!2sKIET%20GROUP%20OF%20INSTITUTIONS%2C%20Muradnagar%2C%20Uttar%20Pradesh%20201206!5e0!3m2!1sen!2sin!4v1710332661807!5m2!1sen!2sin"
                  width="300"
                  height="150"
                  style={{
                    borderRadius: "10px",
                  }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <p className="mt-4 mb-4 font-semibold dark:font-medium">
                  Mail us at :-{" "}
                  <span className="font-medium dark:font-light">
                    ecell@kiet.edu
                  </span>
                </p>
                {/* <p className="mb-4 font-semibold dark:font-medium">
                Phone No. :-{" "}
                <span className="font-medium dark:font-light">
                  +91 999999999
                </span>
              </p> */}
              </div>

              <div className="box ">
                <h4 className="text-lg font-bold mb-5">Important Links</h4>
                <div className="upper flex flex-row justify-between items-start w-[80%]">
                  <div className="inner ">
                    <a
                      onClick={() => history("/discover")}
                      className="!flex !flex-row items-center justify-normal mb-2 font-semibold dark:font-medium cursor-pointer"
                    >
                      <img
                        src={
                          themeMode == "dark"
                            ? greaterThanDark
                            : greaterThanLight
                        }
                        alt=""
                        className="w-2 h-2 mr-2"
                      />
                      About
                    </a>
                    <a
                      href="https://medium.com/@ECELLKIET"
                      target="_blank"
                      className="!flex !flex-row items-center justify-normal mb-2 font-semibold dark:font-medium cursor-pointer"
                      rel="noreferrer"
                    >
                      {" "}
                      <img
                        src={
                          themeMode == "dark"
                            ? greaterThanDark
                            : greaterThanLight
                        }
                        alt=""
                        className="w-2 h-2 mr-2"
                      />
                      Our Blogs
                    </a>
                    <a
                      onClick={() => history("/gallery")}
                      className="!flex !flex-row items-center justify-normal mb-2 font-semibold dark:font-medium cursor-pointer"
                    >
                      <img
                        src={
                          themeMode == "dark"
                            ? greaterThanDark
                            : greaterThanLight
                        }
                        alt=""
                        className="w-2 h-2 mr-2"
                      />
                      Our Gallery
                    </a>
                    <a
                      onClick={() => history("/pastspeakers")}
                      className="!flex !flex-row items-center justify-normal mb-2 font-semibold dark:font-medium cursor-pointer"
                    >
                      {" "}
                      <img
                        src={
                          themeMode == "dark"
                            ? greaterThanDark
                            : greaterThanLight
                        }
                        alt=""
                        className="w-2 h-2 mr-2"
                      />
                      Past Speakers
                    </a>
                    <Link
                      to="/privacy-policy"
                      className="!flex !flex-row items-center justify-normal mb-2 font-semibold dark:font-medium cursor-pointer"
                    >
                      {" "}
                      <img
                        src={
                          themeMode == "dark"
                            ? greaterThanDark
                            : greaterThanLight
                        }
                        alt=""
                        className="w-2 h-2 mr-2"
                      />
                      Privacy Policy
                    </Link>
                    <a
                      href="/privacy-policy"
                      target="_blank"
                      rel="noreferrer"
                      className="!flex !flex-row items-center justify-normal font-semibold dark:font-medium mb-2 cursor-pointer"
                    >
                      <img
                        src={
                          themeMode == "dark"
                            ? greaterThanDark
                            : greaterThanLight
                        }
                        alt=""
                        className="w-2 h-2 mr-2"
                      />
                      Terms and Conditions
                    </a>
                    <a
                      href="https://merchant.razorpay.com/policy/NqJMeEHhqG0ABL/contact_us"
                      target="_blank"
                      rel="noreferrer"
                      className="!flex !flex-row items-center justify-normal font-semibold dark:font-medium mb-2 cursor-pointer"
                    >
                      {" "}
                      <img
                        src={
                          themeMode == "dark"
                            ? greaterThanDark
                            : greaterThanLight
                        }
                        alt=""
                        className="w-2 h-2 mr-2"
                      />
                      Contact Us
                    </a>
                  </div>
                  <div className="inner">
                    <Link
                      to={"/endeavour"}
                      className="!flex !flex-row items-center justify-normal mb-2 font-semibold dark:font-medium cursor-pointer"
                    >
                      <img
                        src={
                          themeMode == "dark"
                            ? greaterThanDark
                            : greaterThanLight
                        }
                        alt=""
                        className="w-2 h-2 mr-2"
                      />
                      Endeavour
                    </Link>
                    <a
                      onClick={() => history("/ideasubmissions")}
                      className="!flex !flex-row items-center justify-normal mb-2 font-semibold dark:font-medium cursor-pointer"
                    >
                      <img
                        src={
                          themeMode == "dark"
                            ? greaterThanDark
                            : greaterThanLight
                        }
                        alt=""
                        className="w-2 h-2 mr-2"
                      />
                      Idea Submission
                    </a>
                    <a
                      onClick={() => history("/ourteam")}
                      className="!flex !flex-row items-center justify-normal mb-2 font-semibold dark:font-medium cursor-pointer"
                    >
                      <img
                        src={
                          themeMode == "dark"
                            ? greaterThanDark
                            : greaterThanLight
                        }
                        alt=""
                        className="w-2 h-2 mr-2"
                      />
                      Our Team
                    </a>
                    <a
                      onClick={() => history("/events")}
                      className="!flex !flex-row items-center justify-normal mb-2 font-semibold dark:font-medium cursor-pointer"
                    >
                      <img
                        src={
                          themeMode == "dark"
                            ? greaterThanDark
                            : greaterThanLight
                        }
                        alt=""
                        className="w-2 h-2 mr-2"
                      />
                      Events
                    </a>
                    <a
                      href="https://merchant.razorpay.com/policy/NqJMeEHhqG0ABL/refund"
                      target="_blank"
                      rel="noreferrer"
                      className="!flex !flex-row items-center justify-normal mb-2 font-semibold dark:font-medium cursor-pointer"
                    >
                      <img
                        src={
                          themeMode == "dark"
                            ? greaterThanDark
                            : greaterThanLight
                        }
                        alt=""
                        className="w-2 h-2 mr-2"
                      />
                      Refund Policy
                    </a>
                    <a
                      href="https://merchant.razorpay.com/policy/NqJMeEHhqG0ABL/shipping"
                      target="_blank"
                      rel="noreferrer"
                      className="!flex !flex-row items-center justify-normal mb-2 font-semibold dark:font-medium cursor-pointer"
                    >
                      <img
                        src={
                          themeMode == "dark"
                            ? greaterThanDark
                            : greaterThanLight
                        }
                        alt=""
                        className="w-2 h-2 mr-2"
                      />
                      Shipping and Deliver
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lowerfoot bg-white dark:bg-black z-10 !w-[100vw] font-medium text-xs md:text-sm dark:font-medium flex justify-between">
            <h3 className="w-1/2 pl-8">IGNITEX SOLUTIONS PVT. LTD.</h3>
            <h3 className="w-1/2 text-right pr-10 border-l-[1px] border-[#b6b6b6]">
              Made with ❤️ E-Cell 2024
            </h3>
          </div>
        </div>
      ) : (
        <div className="footer z-10 border-[#00FCB8]/20 bg-black text-white border-t-[1px]">
        <div className="upperfoot bg-black z-10 p-8 border-b-[1px] border-b-[#00FCB8]/30">
          <div className="box flex flex-col lg:flex-col items-center lg:items-start">
            <h4 className="text-lg font-bold mb-5 ">Subscribe to E-Cell</h4>
            <p className="text-gray-400 mb-2">
              Receive Important Updates and Newsletter
            </p>
            <div className="input-group w-[90%] flex flex-row mb-5 mt-2 lg:mt-5 justify-center items-center">
              <input
                type="email"
                className="md:mr-3 !mb-0 w-full !border-0 !border-b-2 !rounded-none !border-b-[#00FCB8] bg-transparent outline-none p-1"
                id="Email"
                name="Email"
                placeholder="example@gmail.com"
                autoComplete="off"
              />
              <motion.button
                className="rounded-md px-5 py-2 bg-[#00FCB8] text-black font-bold !cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
            <div className="handle flex flex-row items-center justify-between w-[70%] lg:w-[50%]">
              <motion.a
                href="https://www.instagram.com/kietecell/"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.1 }}
              >
                <FaInstagram className="h-8 w-8 text-gray-400 hover:text-[#00FCB8] cursor-pointer transition-all duration-150" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/company/e-cell-kiet/"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.1 }}
              >
                <FaLinkedinIn className="h-7 w-7 text-gray-400 hover:text-[#00FCB8] cursor-pointer transition-all duration-150" />
              </motion.a>
              <motion.a
                href="https://www.youtube.com/@ecellkiet5297/videos"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.1 }}
              >
                <FaYoutube className="h-7 w-7 text-gray-400 hover:text-[#00FCB8] cursor-pointer transition-all duration-150" />
              </motion.a>
            </div>
          </div>
      
          <div className="footbox mt-6 lg:mt-0">
            <div className="box mr-8 flex flex-col items-center lg:items-start">
              <h4 className="text-lg mb-5 font-bold">Contact Us</h4>
              <p className="mb-3 text-gray-400">
                KIET Group of Institution, Ghaziabad, Delhi NCR, Uttar Pradesh,
                India, PIN 201206
              </p>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#009c44]/10 to-[#00FCB8]/20 blur-md rounded-lg"></div>
                <iframe
                  title="mapp"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.893214061326!2d77.49584041070436!3d28.75260507851681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf47204fb9241%3A0xd11ed4123c7691fe!2sKIET%20GROUP%20OF%20INSTITUTIONS%2C%20Muradnagar%2C%20Uttar%20Pradesh%20201206!5e0!3m2!1sen!2sin!4v1710332661807!5m2!1sen!2sin"
                  width="300"
                  height="150"
                  style={{
                    borderRadius: "10px",
                    border: "1px solid rgba(0, 252, 184, 0.3)",
                    position: "relative",
                    zIndex: 10
                  }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <p className="mt-4 mb-4 text-gray-300">
                Mail us at :-{" "}
                <span className="text-[#00FCB8]">
                  ecell@kiet.edu
                </span>
              </p>
            </div>
      
            <div className="box">
              <h4 className="text-lg font-bold mb-5 text-[#00FCB8]">Important Links</h4>
              <div className="upper flex flex-row justify-between items-start w-[80%]">
                <div className="inner">
                  <motion.a
                    onClick={() => history("/discover")}
                    className="!flex !flex-row items-center justify-normal mb-2 text-gray-400 cursor-pointer hover:text-[#00FCB8]"
                    whileHover={{ x: 3 }}
                  >
                    <img
                      src={greaterThanDark}
                      alt=""
                      className="w-2 h-2 mr-2"
                    />
                    About
                  </motion.a>
                  <motion.a
                    href="https://medium.com/@ECELLKIET"
                    target="_blank"
                    className="!flex !flex-row items-center justify-normal mb-2 text-gray-400 cursor-pointer hover:text-[#00FCB8]"
                    rel="noreferrer"
                    whileHover={{ x: 3 }}
                  >
                    <img
                      src={greaterThanDark}
                      alt=""
                      className="w-2 h-2 mr-2"
                    />
                    Our Blogs
                  </motion.a>
                  <motion.a
                    onClick={() => history("/gallery")}
                    className="!flex !flex-row items-center justify-normal mb-2 text-gray-400 cursor-pointer hover:text-[#00FCB8]"
                    whileHover={{ x: 3 }}
                  >
                    <img
                      src={greaterThanDark}
                      alt=""
                      className="w-2 h-2 mr-2"
                    />
                    Our Gallery
                  </motion.a>
                  <motion.a
                    onClick={() => history("/pastspeakers")}
                    className="!flex !flex-row items-center justify-normal mb-2 text-gray-400 cursor-pointer hover:text-[#00FCB8]"
                    whileHover={{ x: 3 }}
                  >
                    <img
                      src={greaterThanDark}
                      alt=""
                      className="w-2 h-2 mr-2"
                    />
                    Past Speakers
                  </motion.a>
                  <motion.a
                    to="/privacy-policy"
                    className="!flex !flex-row items-center justify-normal mb-2 text-gray-400 cursor-pointer hover:text-[#00FCB8]"
                    whileHover={{ x: 3 }}
                  >
                    <img
                      src={greaterThanDark}
                      alt=""
                      className="w-2 h-2 mr-2"
                    />
                    Privacy Policy
                  </motion.a>
                  <motion.a
                    href="/privacy-policy"
                    target="_blank"
                    rel="noreferrer"
                    className="!flex !flex-row items-center justify-normal text-gray-400 mb-2 cursor-pointer hover:text-[#00FCB8]"
                    whileHover={{ x: 3 }}
                  >
                    <img
                      src={greaterThanDark}
                      alt=""
                      className="w-2 h-2 mr-2"
                    />
                    Terms and Conditions
                  </motion.a>
                  <motion.a
                    href="https://merchant.razorpay.com/policy/NqJMeEHhqG0ABL/contact_us"
                    target="_blank"
                    rel="noreferrer"
                    className="!flex !flex-row items-center justify-normal text-gray-400 mb-2 cursor-pointer hover:text-[#00FCB8]"
                    whileHover={{ x: 3 }}
                  >
                    <img
                      src={greaterThanDark}
                      alt=""
                      className="w-2 h-2 mr-2"
                    />
                    Contact Us
                  </motion.a>
                </div>
                <div className="inner">
                  <motion.a
                    to={"/endeavour"}
                    className="!flex !flex-row items-center justify-normal mb-2 text-gray-400 cursor-pointer hover:text-[#00FCB8]"
                    whileHover={{ x: 3 }}
                  >
                    <img
                      src={greaterThanDark}
                      alt=""
                      className="w-2 h-2 mr-2"
                    />
                    Endeavour
                  </motion.a>
                  <motion.a
                    onClick={() => history("/ideasubmissions")}
                    className="!flex !flex-row items-center justify-normal mb-2 text-gray-400 cursor-pointer hover:text-[#00FCB8]"
                    whileHover={{ x: 3 }}
                  >
                    <img
                      src={greaterThanDark}
                      alt=""
                      className="w-2 h-2 mr-2"
                    />
                    Idea Submission
                  </motion.a>
                  <motion.a
                    onClick={() => history("/ourteam")}
                    className="!flex !flex-row items-center justify-normal mb-2 text-gray-400 cursor-pointer hover:text-[#00FCB8]"
                    whileHover={{ x: 3 }}
                  >
                    <img
                      src={greaterThanDark}
                      alt=""
                      className="w-2 h-2 mr-2"
                    />
                    Our Team
                  </motion.a>
                  <motion.a
                    onClick={() => history("/events")}
                    className="!flex !flex-row items-center justify-normal mb-2 text-gray-400 cursor-pointer hover:text-[#00FCB8]"
                    whileHover={{ x: 3 }}
                  >
                    <img
                      src={greaterThanDark}
                      alt=""
                      className="w-2 h-2 mr-2"
                    />
                    Events
                  </motion.a>
                  <motion.a
                    href="https://merchant.razorpay.com/policy/NqJMeEHhqG0ABL/refund"
                    target="_blank"
                    rel="noreferrer"
                    className="!flex !flex-row items-center justify-normal mb-2 text-gray-400 cursor-pointer hover:text-[#00FCB8]"
                    whileHover={{ x: 3 }}
                  >
                    <img
                      src={greaterThanDark}
                      alt=""
                      className="w-2 h-2 mr-2"
                    />
                    Refund Policy
                  </motion.a>
                  <motion.a
                    href="https://merchant.razorpay.com/policy/NqJMeEHhqG0ABL/shipping"
                    target="_blank"
                    rel="noreferrer"
                    className="!flex !flex-row items-center justify-normal mb-2 text-gray-400 cursor-pointer hover:text-[#00FCB8]"
                    whileHover={{ x: 3 }}
                  >
                    <img
                      src={greaterThanDark}
                      alt=""
                      className="w-2 h-2 mr-2"
                    />
                    Shipping and Delivery
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        <div className="lowerfoot bg-black/80 backdrop-blur-sm z-10 !w-[100vw] text-xs md:text-sm flex justify-between py-4 px-8">
          <h3 className="w-1/2">IGNITEX SOLUTIONS PVT. LTD.</h3>
          <h3 className="w-1/2 text-right border-l-[1px] border-[#00FCB8]/30">
            Made with <span className="text-[#00FCB8]">❤️</span> E-Cell 2024
          </h3>
        </div>
      </div>
      )}
    </>
  );
}
