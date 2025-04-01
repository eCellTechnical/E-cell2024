import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
// import img1 from "../../assets/Login/signup.jpeg";

function ResetPassword() {
  const navigate = useNavigate();
  const location = useLocation();
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState(false);
  const [disable, setDisable] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    } else {
      navigate("/endeavour/forgot-password");
      toast.error("Please enter your email first", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "colored",
      });
    }
  }, [location.state, navigate]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisable(true);

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "colored",
      });
      setDisable(false);
      return;
    }

    if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}/.test(newPassword)) {
      toast.error(
        "Password must contain at least one number, one uppercase and lowercase letter, and be 8-15 characters long",
        {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          theme: "colored",
        }
      );
      setDisable(false);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/reset-password",
        {
          email,
          otp,
          newPassword
        }
      );

      if (response.data.success) {
        toast.success("Password reset successfully", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          theme: "colored",
        });
        navigate("/endeavour/login");
      } else {
        toast.error(response.data.message || "Failed to reset password", {
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
        <h1 className="text-4xl text-[#007827] font-semibold tracking-wider">
          Reset Password
        </h1>
        <p className="text-[#6a6a6a] font-medium text-center px-8 mt-2">
          Enter the OTP sent to your email and create a new password.
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
              className="border-2 border-[#a5a5a57e] text-black bg-white rounded-lg p-2 w-full focus:outline-none focus:border-[#00f8bd] font-medium"
              type="email"
              name="email"
              id="email"
              value={email}
              readOnly
            />
          </div>
          
          <div className="flex flex-col w-[75%] md:w-[60%] mt-4">
            <label className="font-medium text-gray-600 ml-2" htmlFor="otp">
              OTP
            </label>
            <input
              className="border-2 border-[#a5a5a57e] text-black bg-white rounded-lg p-2 w-full focus:outline-none focus:border-[#00f8bd] font-medium"
              type="text"
              name="otp"
              id="otp"
              placeholder="Enter 6-digit OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              pattern="[0-9]{6}"
              title="Please enter a valid 6-digit OTP"
              required
              maxLength={6}
            />
          </div>
          
          <div className="flex flex-col w-[75%] md:w-[60%] mt-4">
            <label
              className="font-medium text-gray-600 ml-2"
              htmlFor="newPassword"
            >
              New Password
            </label>
            <div className="flex border-2 border-[#a5a5a57e] rounded-lg focus-within:border-[#00f8bd]">
              <input
                className="bg-transparent p-2 w-full border-r-0 focus:outline-none font-medium"
                type={passwordVisibility ? "text" : "password"}
                name="newPassword"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}"
                title="Password must contain at least one number and one uppercase and lowercase letter, and at least 8 and at most 15 characters"
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
          
          <div className="flex flex-col w-[75%] md:w-[60%] mt-4">
            <label
              className="font-medium text-gray-600 ml-2"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <div className="flex border-2 border-[#a5a5a57e] rounded-lg focus-within:border-[#00f8bd]">
              <input
                className="bg-transparent p-2 w-full border-r-0 focus:outline-none font-medium"
                type={confirmPasswordVisibility ? "text" : "password"}
                name="confirmPassword"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setConfirmPasswordVisibility(!confirmPasswordVisibility)}
                className="bg-transparent focus:border-0 h-auto w-[4rem] font-semibold text-[#6a6a6a] z-10"
              >
                {confirmPasswordVisibility ? "Hide" : "Show"}
              </button>
            </div>
            {newPassword && confirmPassword && newPassword !== confirmPassword && (
              <p className="text-xs text-red-600 ml-2 mt-1">*Passwords do not match</p>
            )}
          </div>
          
          <button
            type="submit"
            disabled={disable}
            className="w-[75%] md:w-[60%] bg-[#00f699] hover:bg-[#00f8bd] text-[#007827] font-bold rounded-full py-2 mt-6 z-10 transition-colors disabled:opacity-70"
          >
            Reset Password
          </button>
          
          <div className="flex justify-center w-full items-center z-10 text-sm mt-4 font-semibold text-[#595959]">
            Didn`t receive OTP?
            <Link
              to="/forgot-password"
              className="text-[#00f8bd] hover:text-[#007827] ml-1 font-medium"
            >
              Resend
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;