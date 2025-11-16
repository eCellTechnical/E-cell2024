import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import Header from "./Components/Header";
import { motion } from "framer-motion";
const PasswordResetPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    otp: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate(); // Initialize navigate hook

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    setError("");
  };

  // Step 1: Request OTP
  const handleRequestOTP = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_IDEATEX_API_BASE_URL}/api/v1/user/forgot-password`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
          }),
        }
      );

      if (response.ok) {
        setSuccess("OTP sent to your email!");
        setStep(2);
      } else {
        const data = await response.json();
        setError(data.message || "Failed to send OTP");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Resend OTP
  const handleResendOTP = async () => {
    setLoading(true);
    setError("");

    try {
      // Fixed API URL to be consistent
      const response = await fetch(
        `${import.meta.env.VITE_IDEATEX_API_BASE_URL}/api/v1/user/resend-otp`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
          }),
        }
      );

      if (response.ok) {
        setSuccess("OTP resent successfully!");
      } else {
        const data = await response.json();
        setError(data.message || "Failed to resend OTP");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Step 2: Verify OTP (client-side) and proceed to password reset
  const handleVerifyOTP = (e) => {
    e.preventDefault();
    if (formData.otp.length < 4) {
      // Assuming OTP is at least 4 chars
      setError("Please enter a valid OTP");
      return;
    }
    setStep(3);
    setSuccess("");
    setError("");
  };

  // Step 3: Reset Password
  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError("");

    // Validate passwords match
    if (formData.newPassword !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    if (formData.newPassword.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    setLoading(true);

    try {
      // Fixed API URL to be consistent
      const response = await fetch(
        `${import.meta.env.VITE_IDEATEX_API_BASE_URL}/api/v1/user/reset-password`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            otp: formData.otp,
            newPassword: formData.newPassword,
          }),
        }
      );

      if (response.ok) {
        setSuccess("Password reset successfully! Redirecting to login...");
        setTimeout(() => {
          navigate("/login"); // Fixed to use navigate
        }, 2000);
      } else {
        const data = await response.json();
        setError(data.message || "Failed to reset password");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative bg-gradient-to-r from-[#211E3F] to-black overflow-hidden min-h-screen">
      {/* Fixed navigation */}
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
      <div className="relative z-10">
        <div className="flex pt-16 md:pt-28 min-h-screen justify-center w-full">
          {/* Left Side - Matched 40/60 split */}
          <div className="w-[40%] p-8 md:flex hidden items-center justify-center fixed left-0 top-0 h-screen">
            <div className="relative flex items-center justify-center">
              <img
                src="/assets/ideatex-logo.png"
                alt="Purple Lightbulb"
                className="w-[18rem]"
                onError={(e) => {
                  // Fallback matched to LoginPage
                  e.target.src =
                    "https://placehold.co/300x300/1a1a1a/A855F7?text=Ideatex";
                  e.target.onerror = null;
                }}
              />
            </div>
          </div>

          {/* Right Side - Form - Matched 40/60 split */}
          <div className="md:w-[60%] w-full md:ml-[40%] md:p-8 p-6 pb-16 flex items-start justify-center">
            <div className="w-full mx-auto bg-white/5  backdrop-blur-xl border-2 border-purple-500/30 text-gray-100 rounded-2xl shadow-2xl max-w-md">
              {/* Header */}
              <div className="px-6 py-4 border-b border-purple-500/10">
                <h2 className="text-2xl font-bold text-center text-gray-100">
                  {step === 1
                    ? "Reset Password"
                    : step === 2
                    ? "Enter OTP"
                    : "New Password"}
                </h2>
              </div>

              {/* Content */}
              <div className="space-y-6 p-6">
                {/* Success Message */}
                {success && (
                  <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-sm text-center">
                    {success}
                  </div>
                )}

                {/* Error Message */}
                {error && (
                  <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm text-center">
                    {error}
                  </div>
                )}

                {/* Step Progress Indicator */}
                <div className="flex items-center justify-center space-x-2 mb-6">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                      step >= 1
                        ? "bg-purple-500 text-white"
                        : "bg-gray-700 text-gray-400"
                    }`}
                  >
                    1
                  </div>
                  <div
                    className={`w-12 h-0.5 ${
                      step >= 2 ? "bg-purple-500" : "bg-gray-700"
                    }`}
                  ></div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                      step >= 2
                        ? "bg-purple-500 text-white"
                        : "bg-gray-700 text-gray-400"
                    }`}
                  >
                    2
                  </div>
                  <div
                    className={`w-12 h-0.5 ${
                      step >= 3 ? "bg-purple-500" : "bg-gray-700"
                    }`}
                  ></div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                      step >= 3
                        ? "bg-purple-500 text-white"
                        : "bg-gray-700 text-gray-400"
                    }`}
                  >
                    3
                  </div>
                </div>

                {/* Step 1: Email Input */}
                {step === 1 && (
                  <form onSubmit={handleRequestOTP} className="space-y-6">
                    <div className="space-y-4 p-6 rounded-xl bg-white/5 backdrop-blur-xl border border-gray-800">
                      <div className="relative">
                        <input
                          type="email"
                          id="email" // Added id
                          value={formData.email}
                          onChange={(e) =>
                            handleChange("email", e.target.value)
                          }
                          className="block px-4 py-3.5 w-full text-gray-100 bg-[#2a2a2a] border border-gray-700 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 peer placeholder-transparent transition-all outline-none"
                          placeholder="Email"
                          required
                        />
                        {/* Fixed label theme */}
                        <label
                          htmlFor="email"
                          className="absolute left-4 -top-2.5 bg-[#232323] peer-focus:bg-[#232323] px-1 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-purple-400"
                        >
                          Email Address
                        </label>
                      </div>
                    </div>

                    <motion.button
                      type="submit"
                      disabled={loading}
 className="bg-[#9700d1] hover:bg-[#b800ff] disabled:bg-gray-600 text-white font-semibold px-8 py-4 rounded-full w-full transition-all duration-200"
                    whileTap={{ scale: 0.95 }}
                    >
                      {loading ? "Sending..." : "Send OTP"}
                    </motion.button>
                  </form>
                )}

                {/* Step 2: OTP Input */}
                {step === 2 && (
                  <form onSubmit={handleVerifyOTP} className="space-y-6">
                    <div className="space-y-4 p-6 rounded-xl bg-[#232323] border border-gray-800">
                      <div className="relative">
                        <input
                          type="text"
                          id="otp" // Added id
                          value={formData.otp}
                          onChange={(e) => handleChange("otp", e.target.value)}
                          className="block px-4 py-3.5 w-full text-gray-100 bg-[#2a2a2a] border border-gray-700 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 peer placeholder-transparent transition-all outline-none"
                          placeholder="OTP"
                          maxLength="6"
                          required
                        />
                        {/* Fixed label theme */}
                        <label
                          htmlFor="otp"
                          className="absolute left-4 -top-2.5 bg-[#232323] peer-focus:bg-[#232323] px-1 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-purple-400"
                        >
                          Enter OTP
                        </label>
                      </div>
                      <div className="text-center">
                        <motion.button
                          type="button"
                          onClick={handleResendOTP}
                          disabled={loading}
                          className="bg-[#9700d1] hover:bg-[#b800ff] disabled:bg-gray-600 text-white font-semibold px-8 py-4 rounded-full w-full transition-all duration-200"
                    whileTap={{ scale: 0.95 }}
                        >
                          Resend OTP
                        </motion.button>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 rounded-xl transition-all duration-200"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={loading}
                        // Fixed button theme
                        className="flex-1 bg-gradient-to-r from-[#A855F7] to-[#7c3aed] hover:from-[#9333EA] hover:to-[#6D28D9] text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-purple-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {loading ? "Verifying..." : "Verify OTP"}
                      </button>
                    </div>
                  </form>
                )}

                {/* Step 3: New Password */}
                {step === 3 && (
                  <form onSubmit={handleResetPassword} className="space-y-6">
                    <div className="space-y-4 p-6 rounded-xl bg-[#232323] border border-gray-800">
                      <div className="relative">
                        <input
                          type={showNewPassword ? "text" : "password"}
                          id="newPassword" // Added id
                          value={formData.newPassword}
                          onChange={(e) =>
                            handleChange("newPassword", e.target.value)
                          }
                          className="block px-4 py-3.5 w-full pr-12 text-gray-100 bg-[#2a2a2a] border border-gray-700 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 peer placeholder-transparent transition-all outline-none"
                          placeholder="New Password"
                          required
                        />
                        {/* Fixed label theme */}
                        <label
                          htmlFor="newPassword"
                          className="absolute left-4 -top-2.5 bg-[#232323] peer-focus:bg-[#232323] px-1 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-purple-400"
                        >
                          New Password
                        </label>
                        <button
                          type="button"
                          onClick={() => setShowNewPassword(!showNewPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-purple-400 transition-colors"
                        >
                          {showNewPassword ? (
                            <EyeOff size={20} />
                          ) : (
                            <Eye size={20} />
                          )}
                        </button>
                      </div>

                      <div className="relative">
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          id="confirmPassword" // Added id
                          value={formData.confirmPassword}
                          onChange={(e) =>
                            handleChange("confirmPassword", e.target.value)
                          }
                          className="block px-4 py-3.5 w-full pr-12 text-gray-100 bg-[#2a2a2a] border border-gray-700 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 peer placeholder-transparent transition-all outline-none"
                          placeholder="Confirm Password"
                          required
                        />
                        {/* Fixed label theme */}
                        <label
                          htmlFor="confirmPassword"
                          className="absolute left-4 -top-2.5 bg-[#232323] peer-focus:bg-[#232323] px-1 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-purple-400"
                        >
                          Confirm Password
                        </label>
                        <button
                          type="button"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-purple-400 transition-colors"
                        >
                          {showConfirmPassword ? (
                            <EyeOff size={20} />
                          ) : (
                            <Eye size={20} />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 rounded-xl transition-all duration-200"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={loading}
                        // Fixed button theme
                        className="flex-1 bg-gradient-to-r from-[#A855F7] to-[#7c3aed] hover:from-[#9333EA] hover:to-[#6D28D9] text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-purple-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {loading ? "Resetting..." : "Reset Password"}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordResetPage;
