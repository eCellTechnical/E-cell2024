import mail from "../../assets/ContactUs/Animation - 1703696474947.json";
import planeIcon from "../../assets/ContactUs/plane.png";
import emailjs from "@emailjs/browser";

import Lottie from "lottie-react";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
function ContactUs() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  const form = useRef();
  const [submitted, setSubmitte] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_8lu2jtt", "template_8s5ga1j", form.current, {
        publicKey: "VZP4pfMmUmDn-LJfd",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          setSubmitte(true);
          setTimeout(() => {
            setSubmitte(false);
          }, 2000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="flex flex-col justify-center items-center text-white pt-28 w-full bg-white dark:bg-black">
      <div className="flex flex-col lg:flex-row w-[100%] lg:w-[80%] justify-center items-center">
        <div
          data-aos="fade-right"
          className="w-full flex justify-center items-center lg:mr-8"
        >
          <Lottie
            animationData={mail}
            loop={true}
            autoplay
            className="z-[1] lg:flex lg:w-full opacity-90  lg:ml-[-80px]"
          />
          {/* <img src={email} alt="" /> */}
        </div>
        <div data-aos="fade-left" className="w-full">
          <div className="w-full  flex flex-col justify-content items-center">
            <h1 className="text-3xl md:text-5xl font-bold flex flex-row items-center text-black dark:text-white">
              Contact{" "}
              <span className="text-[#4d55ba] flex flex-row justify-center items-center ml-3">
                Us
                <img
                  src={planeIcon}
                  alt=""
                  className="w-9 h-9 lg:w-14 lg:h-14 ml-3"
                />
              </span>
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center w-full mt-5 mb-5">
            <h2 className="font-bold text-black dark:text-white">
              E-Cell KIET
            </h2>
            <p className="text-black dark:text-white">
              A <span className="text-[#4d55ba] font-semibold">family</span>{" "}
              that supports you.
            </p>
            <p className="text-center text-black dark:text-white">
              Reach us out, we are always here to help you out.
            </p>
          </div>
          <div>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col w-[100%] lg:w-full justify-center items-center text-black dark:text-white"
            >
              <div className="flex w-[90%] flex-row lg:w-full ">
                <div className="flex flex-col lg:w-full">
                  <label>Name</label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder="John Doe"
                    className="bg-transparent !border-0 !border-b-2 p-2 !rounded-none !border-b-[#646464] dark:!border-b-white"
                  />
                </div>
                <div className="flex flex-col w-full ml-5">
                  <label>Email</label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="example@gmail.com"
                    className="bg-transparent !border-0 !border-b-2 p-2 !rounded-none !border-b-[#646464] dark:!border-b-white"
                  />
                </div>
              </div>
              <div className="flex flex-row w-[90%] lg:w-full mt-2 mb-2">
                <div className="flex flex-col lg:w-full">
                  <label>Contact</label>
                  <input
                    type="tel"
                    pattern="[6-9]{1}[0-9]{9}"
                    name="user_contact"
                    required
                    placeholder="1234567890"
                    className="bg-transparent !border-0 !border-b-2 !rounded-none p-2 !border-b-[#646464] dark:!border-b-white"
                    maxLength={10}
                    minLength={10}
                  />
                </div>
                <div className="flex flex-col w-full ml-5">
                  <label>Subject</label>
                  <input
                    type="text"
                    name="user_subject"
                    required
                    placeholder="Help Me!"
                    className="bg-transparent !border-0 !border-b-2 p-2 !rounded-none !border-b-[#646464] dark:!border-b-white"
                  />
                </div>
              </div>
              <div className="flex flex-col w-[90%] lg:w-full mb-2">
                <label>Message</label>
                <textarea
                  name="message"
                  className=" lg:w-full h-16 py-2 px-3 bg-transparent  border-white  !border-0 !border-b-2 !border-b-[#646464] dark:!border-white"
                  style={{ borderWidth: "1px" }}
                  required
                  placeholder="I am having some issues..."
                />
              </div>
              <div className="w-[50%] lg:w-full mb-8">
                <input
                  type="submit"
                  value={`${submitted ? "Submitted ✅" : "Send Message!"}`}
                  className={`w-full rounded-lg  py-2 mt-5 cursor-pointer border-2 border-[#4d55ba]`}
                  id="submitBtn"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
