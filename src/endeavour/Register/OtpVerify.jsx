import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
// import img1 from "../../assets/Login/signup.jpeg";

function VerifyOTP() {
  const navigate = useNavigate();
  const location = useLocation();
  const [otp, setOTP] = useState(["", "", "", "", "", ""]);
  const [disable, setDisable] = useState(false);
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    } else {
      navigate("/register");
      toast.error("Please register first", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "colored",
      });
    }
  }, [location.state, navigate]);

  useEffect(() => {
    let interval = null;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      setCanResend(true);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleOTPChange = (index, e) => {
    const value = e.target.value;
    if (value && !isNaN(value) && value.length <= 1) {
      const newOTP = [...otp];
      newOTP[index] = value;
      setOTP(newOTP);
      
      // Auto-focus next input
      if (value && index < 5) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    // Handle backspace - move to previous input if current is empty
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text/plain").trim();
    
    if (/^\d{6}$/.test(pastedData)) {
      const newOTP = pastedData.split("");
      setOTP(newOTP);
    }
  };

  const handleResendOTP = async () => {
    setDisable(true);
    try {
      const response = await axios.post("http://localhost:5000/api/v1/resend-otp", {
        email: email
      });
      
      if (response.data.success) {
        toast.success("OTP resent successfully", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          theme: "colored",
        });
        setTimer(60);
        setCanResend(false);
      } else {
        toast.error(response.data.message || "Failed to resend OTP", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          theme: "colored",
        });
      }
    } catch (error) {
      toast.error("Network error. Please try again later", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "colored",
      });
    }
    setDisable(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisable(true);
    
    const enteredOTP = otp.join("");
    if (enteredOTP.length !== 6) {
      toast.error("Please enter a valid 6-digit OTP", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "colored",
      });
      setDisable(false);
      return;
    }
    
    try {
      const response = await axios.post("http://localhost:5000/api/v1/verify-otp", {
        email: email,
        otp: enteredOTP
      });
      
      if (response.data.success) {
        toast.success("Email verified successfully!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          theme: "colored",
        });
        navigate("/endeavour/login");
      } else {
        toast.error(response.data.message || "Invalid OTP", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          theme: "colored",
        });
      }
    } catch (error) {
      toast.error("Network error. Please try again later", {
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
          Verify Your Email
        </h1>
        <p className="text-[#6a6a6a] font-medium text-center px-8 mt-2">
          We`ve sent a 6-digit OTP to <span className="font-bold">{email}</span>. Please enter it below to complete your registration.
        </p>
        
        <form 
          className="flex flex-col w-full justify-center items-center mt-8"
          onSubmit={handleSubmit}
        >
          <div className="flex justify-center gap-2 md:gap-3 w-[75%] md:w-[60%]">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                className="w-12 h-12 text-center border-2 border-[#a5a5a57e] bg-white rounded-lg p-2 focus:outline-none focus:border-[#00f8bd] font-bold text-xl"
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleOTPChange(index, e)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={index === 0 ? handlePaste : null}
                autoFocus={index === 0}
              />
            ))}
          </div>
          
          <button
            type="submit"
            disabled={disable}
            className="w-[75%] md:w-[60%] bg-[#00f699] hover:bg-[#00f8bd] text-[#007827] font-bold rounded-full py-2 mt-8 z-10 transition-colors disabled:opacity-70"
          >
            Verify OTP
          </button>
          
          <div className="flex justify-center w-full items-center z-10 text-sm mt-4 font-semibold text-[#595959]">
            Didn`t receive the code?
            <button
              type="button"
              onClick={handleResendOTP}
              disabled={!canResend || disable}
              className={`ml-1 font-medium ${canResend ? "text-[#00f8bd] hover:text-[#007827]" : "text-gray-400"}`}
            >
              {canResend ? "Resend OTP" : `Resend in ${timer}s`}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default VerifyOTP;