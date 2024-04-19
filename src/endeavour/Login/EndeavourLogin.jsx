import { useEffect, useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"; // Corrected import
import { firebaseAuth } from "../../../config/firebaseConfig";
// import img from "../../assets/Login/astronaut-galaxy-space-suit-dream-triangle-butterflies-2880x1800-8085.jpg";

import { toast } from "react-toastify";
import img1 from "../../assets/Login/login.jpeg";
function EndeavourLogin() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(0);
  axios.defaults.withCredentials = true;

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(firebaseAuth, provider);
      const user = result.user;

      if (user && user.email && user.displayName) {
        try {
          const res = await axios.post(
            `https://e-cell2024backend-production.up.railway.app/GoogleLogin`,
            {
              userName: user.displayName,
              email: user.email,
            }
          );

          if (res.data.exists == "true") {
            if (res.data.isAdmin) {
              localStorage.setItem("userName", res.data.userName);
              localStorage.setItem("userId", res.data.userId);
              localStorage.setItem("token", res.data.token);
              return history(`/endeavour/admin/${res.data.userId}`);
            }
            if (res.data.isSuperAdmin) {
              localStorage.setItem("userName", res.data.userName);
              localStorage.setItem("userId", res.data.userId);
              localStorage.setItem("token", res.data.token);
              return history(`/endeavour/super-admin/${res.data.userId}`);
            }
            toast.success("Successfully Logged In", {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              theme: "colored",
            });
            localStorage.setItem("userName", res.data.userName);
            localStorage.setItem("userId", res.data.userId);
            localStorage.setItem("token", res.data.token);
            history("/endeavour");
          } else if (res.data.exists == "false") {
            toast.warn("User Not Exists", {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              theme: "colored",
            });
          }
        } catch (error) {
          toast.error("Bad network error,Please try again after sometime", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            theme: "colored",
          });
        }
      }
    } catch (error) {
      toast.error("Error during Google login :(", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "colored",
      });
    }
  };

  async function submit(e) {
    e.preventDefault();
    try {
      await axios
        .post(`https://e-cell2024backend-production.up.railway.app/login`, {
          email,
          password,
        })
        .then((res) => {
          if (res.data.msg == "Invalid email or password") {
            return toast.warn("Invalid email or password", {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              theme: "colored",
            });
          } else if (res.data.msg == "Invalid Credentials") {
            toast.warn("Invalid Credentials", {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              theme: "colored",
            });
          } else if (res.data.msg == "Login with google") {
            toast.warn("Login with google", {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              theme: "colored",
            });
          } else if (res.data.exists == "exists") {
            toast.success("Successfully Logged In", {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              theme: "colored",
            });
            localStorage.setItem("userName", res.data.username);
            localStorage.setItem("userId", res.data.userId);
            localStorage.setItem("token", res.data.token);
            history("/endeavour");
          }
        })
        .catch(() => {
          toast.error("Bad network error,Please try again after sometime", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            theme: "colored",
          });
        });
    } catch (error) {
      // console.log(error);
      toast.error("Bad network error,Please try again after sometime", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "colored",
      });
    }
  }

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="flex flex-row w-full h-[100vh]">
      <div className="pt-[13vh] pb-8 bg-white text-black w-full  md:w-1/2 flex flex-col justify-center items-center ">
        <h1 className="text-6xl text-black font-semibold tracking-wider">
          Hi there!
        </h1>
        <p className="text-[#6a6a6a] font-medium">Welcome to Endeavour</p>
        <button
          onClick={handleGoogleLogin}
          className="flex px-20 py-2 mt-5 mb-6 rounded-2xl cursor-pointer border-[#a5a5a57e] z-10 justify-center items-center"
          style={{ border: "2px solid #a5a5a57e" }}
        >
          <FcGoogle className="h-6 w-6 mr-2" />
          <span className="text-md font-medium" style={{ color: "black" }}>
            Login With Google
          </span>
        </button>
        <div className="flex justify-center items-center">
          <div className="w-16 h-[2px] bg-[#a5a5a57e] mr-5"></div>
          <div>or</div>
          <div className="w-16 h-[2px] bg-[#a5a5a57e] ml-5"></div>
        </div>
        <form
          className="flex flex-col w-full justify-center items-center mt-4"
          onSubmit={submit}
        >
          <div className="flex flex-col w-[75%] md:w-[60%]">
            <label htmlFor="email" className="font-medium text-gray-600 ml-2">
              Your email:
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
          <div className="flex flex-col w-[75%] md:w-[60%] mt-3">
            <label
              htmlFor="password"
              className="font-medium text-gray-600 ml-2 "
            >
              Password:
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

          <div className="w-[75%] md:w-[60%] text-right mt-3">
            <Link
              to="/endeavour/forget-password"
              className="text-[#218df9] w-full text-right font-medium text-sm"
            >
              Forget password?
            </Link>
          </div>

          <button
            type="submit"
            className=" w-[75%] md:w-[60%] bg-black text-white rounded-full py-2 mt-8 z-10"
          >
            Log In
          </button>
        </form>

        <div className="flex justify-center w-full items-center z-10 text-sm mt-5 font-semibold text-[#595959]">
          Don&apos;t have an account?{" "}
          <Link
            to="/endeavour/register"
            className="text-[#218df9] ml-1 font-medium"
          >
            Sign up
          </Link>
        </div>
      </div>
      <div className="w-1/2 hidden md:flex">
        <img
          src={img1}
          className="h-full w-full"
          alt=""
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
}

export default EndeavourLogin;
