import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import img from "../../../assets/ForgetPassword/astronaut-and-jellyfish-wallpaper-2560x1080_14.jpg";
import img1 from "../../../assets/Login/forget pass.jpeg";
function ForgetPassword() {
  const history = useNavigate();
  const [email, setEmail] = useState();
  const [sendOTP, setSendOTP] = useState(0);
  const [typedOTP, setTypedOTP] = useState(0);
  const [formStep, setFormStep] = useState(1);
  const [disable, setDisable] = useState(0);

  async function next(e) {
    e.preventDefault();
    setDisable(1);
    const OTP = Math.floor(Math.random() * 9000 + 1000);
    setSendOTP(OTP);
    try {
      await axios
        .post(`https://e-cell2024backend-production.up.railway.app/send-otp`, {
          email,
          OTP,
        })
        .then((res) => {
          if (res.data == "Success") {
            alert("Successfully send the OTP");
            setTypedOTP("");
            setFormStep(2);
          }
        })
        .catch(() => {
          alert("Internal Server Error");
        });
    } catch (error) {
      alert("Internal Server Error");
    }
    setDisable(0);
  }

  async function submit(e) {
    e.preventDefault();
    setDisable(1);
    if (sendOTP === parseInt(typedOTP)) {
      try {
        await axios
          .post(
            `https://e-cell2024backend-production.up.railway.app/forget-password`,
            {
              email,
            }
          )
          .then((res) => {
            if (res.data == "Success") {
              alert("Successfully send the password reset link");
              history("/endeavour/login");
            }
          })
          .catch(() => {
            alert("Internal Server Error");
          });
      } catch (error) {
        alert("Internal Server Error");
      }
    } else {
      alert("Wrong OTP");
    }
    setDisable(0);
  }
  async function prv(e) {
    e.preventDefault();
    setFormStep(1);
  }

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <div className="flex flex-row w-full h-[100vh]">
      <div className="hidden md:flex w-1/2">
        <img
          src={img1}
          className="h-full w-full"
          alt=""
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
      </div>
      <div className="pt-[13vh] pb-8 bg-white text-black w-full md:w-1/2 flex flex-col justify-center items-center ">
        <h1 className="text-4xl text-black font-semibold tracking-wider">
          Forget Password?
        </h1>
        <p className="text-[#6a6a6a] font-medium mt-3 w-[70%] text-center">
          No worries. Enter your account email address and we will share a reset
          link.
        </p>
        <form
          className="flex flex-col w-full justify-center items-center mt-4"
          onSubmit={formStep == 1 ? next : submit}
        >
          {formStep == 1 ? (
            <div className="flex flex-col w-[75%] md:-[60%]">
              <label className="font-medium text-gray-600 ml-2" htmlFor="email">
                E-mail
              </label>
              <input
                className="border-2 border-[#a5a5a57e] bg-white rounded-lg p-2 w-full focus:outline-none font-medium"
                type="text"
                name="email"
                id="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                title="Email should be in form characters@characters.characters"
                required
              />
            </div>
          ) : (
            <div className="flex flex-col w-[75%] md:-[60%]">
              <label className="font-medium text-gray-600 ml-2" htmlFor="OTP">
                Enter OTP
              </label>
              <input
                className="border-2 border-[#a5a5a57e] bg-white rounded-lg p-2 w-full focus:outline-none font-medium"
                type="tel"
                name="OTP"
                id="OTP"
                onChange={(e) => setTypedOTP(e.target.value)}
                maxLength={4}
                minLength={4}
                title="Must contain 4 digits"
                value={typedOTP}
              />
            </div>
          )}

          <div className="flex justify-evenly w-[75%] md:w-[60%] mt-5">
            <button
              className={`w-[55%] md:w-[45%] bg-white ${
                formStep == 1 && "hidden"
              } flex justify-center z-10 text-black font-semibold py-2 rounded-full border-2 border-[#7d7d7d]`}
              onClick={prv}
            >
              Back
            </button>
            <button
              type="submit"
              className="w-[55%] md:w-[45%] bg-black text-white rounded-full py-2 z-10 disabled:bg-slate-600 disabled:cursor-wait"
              disabled={disable}
            >
              {formStep == 1 ? "Get Otp" : "Verify"}
            </button>
          </div>
        </form>

        {/* <div className="flex flex-col justify-center w-full items-center">
          <Link to="/endeavour/register">
            <button className="bg-white text-black px-3 py-2 h-auto w-[12rem] hover:bg-black hover:text-white rounded-full">
              Register
            </button>
          </Link>
          <Link to="/endeavour/login">
            <button className="bg-white text-black px-3 py-2 h-auto w-[12rem] hover:bg-black hover:text-white rounded-full">
              Login
            </button>
          </Link>
        </div> */}
      </div>
    </div>
  );
}

export default ForgetPassword;
