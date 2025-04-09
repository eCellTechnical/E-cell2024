import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

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
        theme: "dark",
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
      
      if (value && index < 5) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
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
      const response = await axios.post("https://two5-backend.onrender.com/api/v1/resend-otp", {
        email: email
      });
      
      if (response.data.success) {
        toast.success("OTP resent successfully", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          theme: "dark",
        });
        setTimer(60);
        setCanResend(false);
      } else {
        toast.error(response.data.message || "Failed to resend OTP", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          theme: "dark",
        });
      }
    } catch (error) {
      toast.error("Network error. Please try again later", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "dark",
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
        theme: "dark",
      });
      setDisable(false);
      return;
    }
    
    try {
      const response = await axios.post("https://two5-backend.onrender.com/api/v1/verify-otp", {
        email: email,
        otp: enteredOTP
      });
      
      if (response.data.success) {
        toast.success("Email verified successfully!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          theme: "dark",
        });
        navigate("/endeavour/login");
      } else {
        toast.error(response.data.message || "Invalid OTP", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          theme: "dark",
        });
      }
    } catch (error) {
      toast.error("Network error. Please try again later", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "dark",
      });
    }
    setDisable(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#001a1a] to-black flex items-center justify-center p-4">
       <div className="absolute top-0 left-0 w-full h-full border-t border-l border-teal-500/5 grid grid-cols-4 grid-rows-4">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="border-b border-r border-teal-500/5" />
          ))}
        </div>
      <div className="w-full z-50 max-w-md bg-teal-500/5 rounded-2xl shadow-xl overflow-hidden border border-gray-700">
        <div className="p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-8 w-8 text-emerald-400" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Verify Your Email</h1>
            <p className="text-gray-400">
              We've sent a code to <span className="font-medium text-emerald-400">{email}</span>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex justify-between space-x-3">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  className="w-12 h-14 text-center z-50 text-white text-2xl font-bold bg-black border-2 border-gray-600 rounded-lg focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30 transition-all"
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
              className="w-full py-3 z-50 cursor-pointer px-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg shadow-md transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {disable ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Verifying...
                </span>
              ) : (
                "Verify OTP"
              )}
            </button>

            <div className="text-center text-sm text-gray-400">
              Didn't receive the code?
              <button
                type="button"
                onClick={handleResendOTP}
                disabled={!canResend || disable}
                className={`ml-1 font-medium ${canResend ? "text-emerald-400 hover:text-emerald-300" : "text-gray-500"}`}
              >
                {canResend ? "Resend OTP" : `Resend in ${timer}s`}
              </button>
            </div>
          </form>
        </div>

        <div className="bg-gray-700/50 px-6 py-4 text-center">
          <p className="text-xs text-gray-400">
            Having trouble? <span className="text-emerald-400 cursor-pointer hover:underline">Contact support</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default VerifyOTP;