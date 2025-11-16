import { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "./Components/Header";
import { motion } from "framer-motion";
import axios from "axios";
import { useAuth } from "./context/AuthContext";
import OTPVerification from "./Components/OTPVerification";
const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showRegisterPopup, setShowRegisterPopup] = useState(false);
  const [showOtpVerification, setShowOtpVerification] = useState(false);
  const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, login } = useAuth();
  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };


  useEffect(() => {
     if (isAuthenticated) {
        setError("User authenticated")
        navigate("/ideatex/dashboard");
        return
      }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_IDEATEX_API_BASE_URL}/api/v1/user/login`,
        {
          email: formData.email,
          password: formData.password,
        }
      );

      if (response.status === 200 && response.data.success) {
        // Login successful
        const tokenData = response.data.data.token;
        if (tokenData && tokenData.token) {
          login(tokenData.token, tokenData.userPayload);

          localStorage.setItem("ideatex_teamID", tokenData.userPayload.teamId);
          localStorage.setItem("ideatex_userID", tokenData.userPayload.id);

          navigate("/ideatex/dashboard"); // Navigate to dashboard on success
        }
      }
    } catch (err) {
      console.error("Login failed:", err);
      if (
        err.response?.status === 404 ||
        err.response?.data?.message?.toLowerCase().includes("not registered")
      ) {
        // User not registered, show register popup
        setShowRegisterPopup(true);
      } else if (
        err.response?.data?.message?.toLowerCase().includes("not verified") ||
        err.response?.data?.message?.toLowerCase().includes("verify your email")
      ) {
        // User not verified, show OTP verification popup
        setShowOtpVerification(true);
      } else {
        setError(
          err.response?.data?.message || "Login failed. Please try again."
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOtp = async (otpValue) => {
    setIsVerifyingOtp(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_IDEATEX_API_BASE_URL}/api/v1/user/verify-otp`,
        {
          email: formData.email,
          otp: otpValue
        }
      );
      if (response.status === 200 && response.data.success) {
        // Save the auth token
        const token = response.data.data.token;
        if (token) {
          login(token, response.data.data);
        }

        setShowOtpVerification(false);
        navigate("/ideatex/dashboard");
      }
    } catch (err) {
      console.error("OTP verification failed:", err);
      throw new Error(
        err.response?.data?.message || "OTP verification failed. Please try again."
      );
    } finally {
      setIsVerifyingOtp(false);
    }
  };

  const handleForgotPassword = () => {
    navigate("/ideatex/reset-password"); // 3. Use navigate for SPA-friendly routing
  };

  return (
    <div className="relative bg-gradient-to-r from-[#211E3F] to-black overflow-hidden min-h-screen">
      {/* 4. Removed unnecessary wrapper div */}
      <Header onBackToHome={() => navigate("/")} />

      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(168, 85, 247, 0.3) 2px, transparent 2px),
                                linear-gradient(90deg, rgba(168, 85, 247, 0.3) 2px, transparent 2px)`,
            backgroundSize: "80px 80px",
          }}
        ></div>
      </div>

      {/* Increased purple gradient in center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-purple-900/30 via-purple-950/10 to-transparent pointer-events-none"></div>

      {/* Content */}
      <div className=" z-10">
        <div className="flex pt-28 md:pt-28   min-h-screen justify-center w-full">
          <div className="w-[60%] p-8 md:flex hidden items-center justify-center fixed left-0 top-0 h-screen">
            <div className="relative flex items-center justify-center">
              {/* Large Purple Lightbulb */}
              <img
                // 5. Fixed image path (removed /public)
                src="/assets/ideatex-logo.png"
                alt="Purple Lightbulb"
                className="w-[18rem] "
                onError={(e) => {
                  // Fallback in case the image fails to load
                  e.target.src =
                    "https://placehold.co/300x300/1a1a1a/A855F7?text=Ideatex";
                  e.target.onerror = null;
                }}
              />
            </div>
          </div>

          <div className="md:w-[30%] w-full md:ml-[40%] md:p-8 p-6 pb-16 flex items-start justify-center">
            <div className="w-full mx-auto bg-white/5 backdrop-blur-xl border-2 border-purple-500/30 text-gray-100 rounded-2xl shadow-2xl ">
              <div className="px-6 py-4 border-b border-purple-500/10">
                <h2 className="text-2xl font-bold text-center text-gray-100">
                  Login
                </h2>
              </div>

              {/* Content */}
              <div className="space-y-6 p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Login Form */}
                  <div className="space-y-4 p-6 rounded-xl bg-white/5 backdrop-blur-xl border border-gray-800">
                    {/* Email */}
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className="block px-4 py-3.5 w-full text-gray-100 bg-[#2a2a2a] border border-gray-700 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 peer placeholder-transparent transition-all outline-none"
                        placeholder="Email"
                        required
                      />
                      <label
                        htmlFor="email"
                        className="absolute left-4 -top-2.5 bg-[#232323] peer-focus:bg-[#232323] px-1 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-purple-400"
                      >
                        Email
                      </label>
                    </div>

                    {/* Password */}
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        value={formData.password}
                        onChange={(e) =>
                          handleChange("password", e.target.value)
                        }
                        className="block px-4 py-3.5 w-full pr-12 text-gray-100 bg-[#2a2a2a] border border-gray-700 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 peer placeholder-transparent transition-all outline-none"
                        placeholder="Password"
                        required
                      />
                      <label
                        htmlFor="password"
                        className="absolute left-4 -top-2.5 bg-[#232323] peer-focus:bg-[#232323] px-1 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-purple-400"
                      >
                        Password
                      </label>
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-purple-400 transition-colors"
                      >
                        {showPassword ? (
                          <EyeOff size={20} />
                        ) : (
                          <Eye size={20} />
                        )}
                      </button>
                    </div>

                    {/* Forgot Password Button */}
                    <div className="text-right">
                      <button
                        type="button"
                        onClick={handleForgotPassword}
                        className="text-sm text-purple-400 hover:text-purple-300 transition-colors underline"
                      >
                        Forgot Password?
                      </button>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    className="bg-[#9700d1] hover:bg-[#b800ff] disabled:bg-gray-600 text-white font-semibold px-8 py-4 rounded-full w-full transition-all duration-200"
                    whileTap={{ scale: 0.95 }}
                  >
                    {isLoading ? "Logging in..." : "Login"}
                  </motion.button>

                  {/* Error Message */}
                  {error && (
                    <div className="text-red-400 text-sm text-center bg-red-900/20 border border-red-500/30 rounded-lg p-3">
                      {error}
                    </div>
                  )}

                  {/* Sign Up Link */}
                  <div className="text-center text-gray-400 text-sm">
                    {"Don't have an account? "}
                    <button
                      type="button"
                      // 7. Use navigate for SPA-friendly routing
                      onClick={() => navigate("/ideatex/register")}
                      className="ml-1 text-purple-400 hover:text-purple-300 font-semibold underline"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Register First Popup */}
      {showRegisterPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-[#1a1a1a] border-2 border-purple-500/30 rounded-2xl shadow-2xl max-w-md w-full p-6"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Not Registered
              </h3>
              <p className="text-gray-400 mb-6">
                You need to register first before you can login. Would you like
                to register now?
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowRegisterPopup(false)}
                  className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 rounded-xl transition-all duration-200"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setShowRegisterPopup(false);
                    navigate("/ideatex/register");
                  }}
                  className="flex-1 bg-gradient-to-r from-[#A855F7] to-[#7a718b] hover:from-[#9333EA] hover:to-[#6D28D9] text-white font-semibold py-3 rounded-xl transition-all duration-200"
                >
                  Register
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* OTP Verification */}
      <OTPVerification
        isOpen={showOtpVerification}
        onClose={() => {
          setShowOtpVerification(false);
          setError("");
        }}
        email={formData.email}
        onVerify={handleVerifyOtp}
        onBack={() => {
          setShowOtpVerification(false);
          setError("");
        }}
        isVerifying={isVerifyingOtp}
      />
    </div>
  );
};

export default LoginPage;
