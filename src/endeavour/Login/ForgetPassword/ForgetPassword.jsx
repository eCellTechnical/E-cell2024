import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
// import img1 from "../../assets/Login/signup.jpeg";

function ForgotPassword() {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisable(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/forgot-password",
        { email }
      );

      if (response.data.success) {
        toast.success("Password reset link sent to your email", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          theme: "colored",
        });
        navigate("/endeavour/reset-password", { state: { email } });
      } else {
        toast.error(response.data.message || "Failed to send reset link", {
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
      <div className="pt-[15vh] md:pt-[20vh] pb-8 bg-black text-white w-full flex flex-col justify-center items-center">
        <h1 className="text-4xl text-[#007827] font-semibold tracking-wider">
          Forgot Password?
        </h1>
        <p className="text-[#6a6a6a] font-medium text-center px-8 mt-2">
          Enter your email address and we`ll send you a link to reset your password.
        </p>
        
        <form
          className="flex flex-col w-full justify-center items-center mt-8"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col w-[75%] md:w-[60%]">
            <label className="font-medium text-gray-600 ml-2" htmlFor="email">
              Email
            </label>
            <input
              className="border-2 border-[#a5a5a57e] bg-white text-black rounded-lg p-2 w-full focus:outline-none focus:border-[#00f8bd] font-medium"
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <button
            type="submit"
            disabled={disable}
            className="w-[75%] md:w-[60%] bg-[#00f699] hover:bg-[#00f8bd] text-[#007827] font-bold rounded-full py-2 mt-6 z-10 transition-colors disabled:opacity-70"
          >
            Send Reset Link
          </button>
          
          <div className="flex justify-center w-full items-center z-10 text-sm mt-4 font-semibold text-[#595959]">
            Remember your password?
            <Link
              to="/endeavour/login"
              className="text-[#00f8bd] hover:text-[#007827] ml-1 font-medium"
            >
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;