import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"; // Corrected import
import { firebaseAuth } from "../../../config/firebaseConfig";
import { toast } from "react-toastify";
// import img from "../../assets/Register/astronaut_portal_neon_frame_glow_dark_4k_hd_creative-3840x2160.jpg";
import img1 from "../../assets/Login/signup.jpeg";
function EndeavourRegister() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [username, setUsername] = useState("");
  const [validUserName, setValidUserName] = useState(0);
  const [passwordVisibility, setPasswordVisibility] = useState(0);
  const [delayedSearchTerm, setDelayedSearchTerm] = useState(2);
  const [disable, setDisable] = useState(false);
  axios.defaults.withCredentials = true;

  useEffect(() => {
    setValidUserName(0);
    const delayDebounceFn = setTimeout(async () => {
      // Send Axios request here
      const res = await axios.post(
        `https://e-cell2024backend-production.up.railway.app/search-user-name`,
        { username }
      );
      if (res.data.msg == "Not Taken") {
        setDelayedSearchTerm(1);
        setValidUserName(1);
      } else if (res.data.msg == "Taken") {
        setDelayedSearchTerm(0);
        setValidUserName(0);
      }
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [username]);

  const handleGoogleRegister = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(firebaseAuth, provider);
    const user = result.user;
    if (user && user.email && user.displayName) {
      try {
        const res = await axios.post(
          `https://e-cell2024backend-production.up.railway.app/GoogleRegister`,
          {
            userName: user.displayName,
            email: user.email,
          }
        );

        if (res.data.created) {
          toast.success("Account Registered Successfully", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            theme: "colored",
          });
          history("/endeavour/login");
        } else if (res.data == "User Already Exists") {
          toast.warn("User Already Exists", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            theme: "colored",
          });
        }
      } catch (error) {
        toast.error("Internal Server Error", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          theme: "colored",
        });
      }
    }
  };

  async function submit(e) {
    setDisable(true);
    e.preventDefault();
    if (delayedSearchTerm == 0 || validUserName == 0) {
      setDisable(false);
      return toast.warn("Choose valid user name", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "colored",
      });
    }
    try {
      await axios
        .post(`https://e-cell2024backend-production.up.railway.app/register`, {
          email,
          password,
          phoneNumber,
          username,
        })
        .then((res) => {
          if (res.data.msg == "User saved :)") {
            toast.success("Account Registered Successfully", {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              theme: "colored",
            });
            history("/endeavour/login");
          } else if (res.data == "User Already Exists") {
            toast.warn("User Already Exists", {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              theme: "colored",
            });
          } else if (res.data == "Error saving user:") {
            toast.error("Error saving user :(", {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              theme: "colored",
            });
          } else if (res.data == "Error saving user :(") {
            toast.error("Error saving user :(", {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              theme: "colored",
            });
          }
        })
        .catch((e) => {
          toast.error("Internal server error", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            theme: "colored",
          });
          // console.log(e);
        });
    } catch (error) {
      // console.log(error);
      toast.error("Internal server error", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "colored",
      });
    }
    setDisable(false);
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
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="pt-[11vh] md:pt-[18vh] pb-8 bg-white text-black w-full md:w-1/2 flex flex-col justify-center items-center ">
        <h1 className="text-6xl text-black font-semibold tracking-wider">
          Hi there!
        </h1>
        <p className="text-[#6a6a6a] font-medium">Welcome to Endeavour</p>
        <button
          onClick={handleGoogleRegister}
          className="flex px-20 py-2 mt-5 mb-6 rounded-2xl cursor-pointer border-[#a5a5a57e] z-10 justify-center items-center"
          style={{ border: "2px solid #a5a5a57e" }}
        >
          <FcGoogle className="h-6 w-6 mr-2" />
          <span className="text-md font-medium" style={{ color: "black" }}>
            Register With Google
          </span>
        </button>
        <div className="flex justify-center items-center">
          <div className="w-16 h-[2px] bg-[#a5a5a57e] mr-5"></div>
          <div>or</div>
          <div className="w-16 h-[2px] bg-[#a5a5a57e] ml-5"></div>
        </div>
        <form
          className="flex flex-col w-full justify-center items-center mt-3"
          onSubmit={submit}
        >
          <div className="flex flex-col w-[75%] md:w-[60%]">
            <label
              className="font-medium text-gray-600 ml-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className={`${
                delayedSearchTerm == 0 ? "border-red-600" : "border-[#a5a5a57e]"
              } border-2 border-[#a5a5a57e] bg-white rounded-lg p-2 w-full focus:outline-none font-medium`}
              type="text"
              name="username"
              id="username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              pattern=".{5,20}"
              title="Username should be at least 5 and at most 20 characters long"
              required
            />{" "}
            {delayedSearchTerm == 0 && (
              <p className=" text-xs text-red-600">*username already taken</p>
            )}
          </div>
          <div className="flex flex-col w-[75%] md:w-[60%] mt-2">
            <label className="font-medium text-gray-600 ml-2 " htmlFor="email">
              Email
            </label>
            <input
              className="border-2 border-[#a5a5a57e] bg-white rounded-lg p-2 w-full focus:outline-none font-medium"
              type="text"
              name="email"
              id="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
              title="Email should be in form characters@characters.characters"
              required
            />
          </div>
          <div className="flex flex-col w-[75%] md:w-[60%] mt-2">
            <label
              className="font-medium text-gray-600 ml-2 "
              htmlFor="password"
            >
              Password
            </label>
            <div className="flex border-2 border-[#a5a5a57e]  rounded-lg">
              <input
                className=" bg-transparent  p-2 w-full border-r-0 focus:outline-none font-medium"
                type={passwordVisibility ? "text" : "password"}
                name="password"
                id="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}"
                title="Password must contain at least one number and one uppercase and lowercase letter, and at least 8 and at most 15 characters"
                required
              />

              <button
                onClick={(e) => {
                  e.preventDefault();
                  setPasswordVisibility(!passwordVisibility);
                }}
                className="bg-transparent focus:border-0  h-auto w-[4rem] font-semibold text-[#6a6a6a] z-10"
              >
                {passwordVisibility ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <div className="flex mt-2 flex-col w-[75%] md:w-[60%]">
            <label
              className="font-medium text-gray-600 ml-2"
              htmlFor="phoneNumber"
            >
              Phone Number
            </label>
            <input
              className="border-2 border-[#a5a5a57e] bg-white rounded-lg p-2 w-full focus:outline-none font-medium"
              type="tel"
              pattern="[6-9]{1}[0-9]{9}"
              name="phoneNumber"
              id="phoneNumber"
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
              title="Phone Number should start with 6-9,and have 10 digits"
              required
              maxLength={10}
              placeholder="1234567890"
            />
          </div>
          <button
            type="submit"
            disabled={disable}
            className="w-[75%] md:w-[60%] bg-black text-white rounded-full py-2 mt-5 z-10"
          >
            Register
          </button>
        </form>
        <div className="flex justify-center w-full items-center z-10 text-sm mt-3 font-semibold text-[#595959]">
          Already have an aacount?
          <Link
            to="/endeavour/login"
            className="text-[#218df9] ml-1 font-medium"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EndeavourRegister;
