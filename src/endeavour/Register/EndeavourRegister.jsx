import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
// import img1 from "../../assets/Login/signup.jpeg";

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [validUserName, setValidUserName] = useState(0);
  const [passwordVisibility, setPasswordVisibility] = useState(0);
  const [delayedSearchTerm, setDelayedSearchTerm] = useState(2);
  const [disable, setDisable] = useState(false);
  axios.defaults.withCredentials = true;

  useEffect(() => {
    setValidUserName(0);
    const delayDebounceFn = setTimeout(async () => {
      // Send Axios request here
      try {
        const res = await axios.post(
          `http://localhost:5000/api/v1/search-username`,
          { name }
        );
        if (res.data.msg === "Not Taken") {
          setDelayedSearchTerm(1);
          setValidUserName(1);
        } else if (res.data.msg === "Taken") {
          setDelayedSearchTerm(0);
          setValidUserName(0);
        }
      } catch (error) {
        console.error("Error checking username:", error);
      }
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [name]);

  async function handleSubmit(e) {
    setDisable(true);
    e.preventDefault();
    
    if (delayedSearchTerm === 0 || validUserName === 0) {
      setDisable(false);
      return toast.warn("Choose a valid username", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "colored",
      });
    }
    
    try {
      const response = await axios.post(
        `http://localhost:5000/api/v1/register`, 
        {
          email,
          password,
          phone,
          name,
          isAdmin: false,
          isSuperAdmin: false,
          kitTaken: false,
          profilePicture: "",
        }
      );

      if (response.data.success) {
        toast.success("OTP sent to your email. Please verify.", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          theme: "colored",
        });
        // Fix navigation path and properly pass email state
        navigate("/verify-otp", { state: { email } });
      } else {
        toast.error(response.data.message || "Registration failed", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          theme: "colored",
        });
      }
    } catch (error) {
      const errorMsg = error.response?.data?.message || "Network error. Please try again later";
      toast.error(errorMsg, {
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
      {/* <div className="hidden md:flex w-1/2">
        <img
          src={img1}
          className="h-full w-full grayscale"
          alt=""
          style={{ objectFit: "cover" }}
        />
      </div> */}
      <div className="pt-[11vh] md:pt-[18vh] pb-8 bg-black text-white w-full  flex flex-col justify-center items-center">
        <h1 className="text-6xl text-[#007827] font-semibold tracking-wider">
          Hi there!
        </h1>
        <p className="text-[#6a6a6a] font-medium">Welcome to our platform</p>
        
        <form
          className="flex flex-col w-full justify-center items-center mt-6"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col w-[75%] md:w-[60%]">
            <label
              className="font-medium text-gray-600 ml-2"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              className={`${
                delayedSearchTerm === 0 ? "border-red-600" : "border-[#a5a5a57e]"
              } border-2 text-black bg-white rounded-lg p-2 w-full focus:outline-none focus:border-[#00f8bd] font-medium`}
              type="text"
              name="name"
              id="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              pattern=".{3,50}"
              title="Name should be at least 3 and at most 50 characters long"
              required
            />
            {delayedSearchTerm === 0 && (
              <p className="text-xs text-red-600">*username already taken</p>
            )}
          </div>
          <div className="flex flex-col w-[75%] md:w-[60%] mt-2">
            <label className="font-medium text-gray-600 ml-2" htmlFor="email">
              Email
            </label>
            <input
              className="border-2 border-[#a5a5a57e] text-black bg-white rounded-lg p-2 w-full focus:outline-none focus:border-[#00f8bd] font-medium"
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
              className="font-medium text-gray-600 ml-2"
              htmlFor="password"
            >
              Password
            </label>
            <div className="flex border-2 border-[#a5a5a57e] rounded-lg focus-within:border-[#00f8bd]">
              <input
                className="bg-transparent p-2 w-full border-r-0 focus:outline-none font-medium"
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
                className="bg-transparent focus:border-0 h-auto w-[4rem] font-semibold text-[#6a6a6a] z-10"
              >
                {passwordVisibility ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <div className="flex mt-2 flex-col w-[75%] md:w-[60%]">
            <label
              className="font-medium text-gray-600 ml-2"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              className="border-2 border-[#a5a5a57e] text-black bg-white rounded-lg p-2 w-full focus:outline-none focus:border-[#00f8bd] font-medium"
              type="tel"
              pattern="[6-9]{1}[0-9]{9}"
              name="phone"
              id="phone"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              title="Phone Number should start with 6-9, and have 10 digits"
              required
              maxLength={10}
              placeholder="1234567890"
            />
          </div>
          <button
            type="submit"
            disabled={disable}
            className="w-[75%] md:w-[60%] bg-[#00f699] hover:bg-[#00f8bd] text-[#007827] font-bold rounded-full py-2 mt-5 z-10 transition-colors"
          >
            Register
          </button>
        </form>
        <div className="flex justify-center w-full items-center z-10 text-sm mt-3 font-semibold text-[#595959]">
          Already have an account?
          <Link
            to="/login"
            className="text-[#00f8bd] hover:text-[#007827] ml-1 font-medium"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;