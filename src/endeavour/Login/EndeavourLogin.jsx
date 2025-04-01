import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
// import img1 from "../../assets/Login/signup.jpeg";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [disable, setDisable] = useState(false);
  axios.defaults.withCredentials = true;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setDisable(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/login",
        {
          email,
          password,
        }
      );

      if (response.data.success) {
        toast.success("Login successful!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          theme: "colored",
        });
        
        // Store token in localStorage
        localStorage.setItem("token", response.data.data.token);
        
        // Redirect to dashboard or home
        navigate("/dashboard");
      } else {
        toast.error(response.data.message || "Login failed", {
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
  };

  return (
    <div className="flex flex-row w-full h-[100vh]">
      {/* <div className="hidden md:flex w-1/2">
        <img
          src={img1}
          className="h-full w-full"
          alt=""
          style={{ objectFit: "cover" }}
        />
      </div> */}
      <div className="pt-[15vh] md:pt-[20vh] pb-8 bg-black text-white w-full  flex flex-col justify-center items-center">
        <h1 className="text-6xl text-[#007827] font-semibold tracking-wider">
          Welcome back!
        </h1>
        <p className="text-[#6a6a6a] font-medium">Sign in to continue</p>
        
        <form
          className="flex flex-col w-full justify-center items-center mt-8"
          onSubmit={handleLogin}
        >
          <div className="flex flex-col w-[75%] md:w-[60%]">
            <label className="font-medium text-gray-600 ml-2" htmlFor="email">
              Email
            </label>
            <input
              className="border-2 border-[#a5a5a57e] bg-white rounded-lg p-2 w-full focus:outline-none focus:border-[#00f8bd] font-medium"
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="flex flex-col w-[75%] md:w-[60%] mt-4">
            <div className="flex justify-between items-center">
              <label
                className="font-medium text-gray-600 ml-2"
                htmlFor="password"
              >
                Password
              </label>
              <Link
                to="/endeavour/forget-password"
                className="text-[#00f8bd] hover:text-[#007827] text-sm font-medium"
              >
                Forgot Password?
              </Link>
            </div>
            <div className="flex border-2 border-[#a5a5a57e] rounded-lg focus-within:border-[#00f8bd]">
              <input
                className="bg-transparent p-2 w-full border-r-0 focus:outline-none font-medium"
                type={passwordVisibility ? "text" : "password"}
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setPasswordVisibility(!passwordVisibility)}
                className="bg-transparent focus:border-0 h-auto w-[4rem] font-semibold text-[#6a6a6a] z-10"
              >
                {passwordVisibility ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          
          <button
            type="submit"
            disabled={disable}
            className="w-[75%] md:w-[60%] bg-[#00f699] hover:bg-[#00f8bd] text-[#007827] font-bold rounded-full py-2 mt-6 z-10 transition-colors disabled:opacity-70"
          >
            Sign In
          </button>
        </form>
        
        <div className="flex justify-center w-full items-center z-10 text-sm mt-4 font-semibold text-[#595959]">
          Don`t have an account?
          <Link
            to="/register"
            className="text-[#00f8bd] hover:text-[#007827] ml-1 font-medium"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;