import { useState } from "react";
import { motion } from "framer-motion";

const OTPVerification = ({
  isOpen,
  onClose,
  email,
  onVerify,
  onBack,
  isVerifying = false
}) => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const handleVerify = async () => {
    if (otp.length !== 6) {
      setError("Please enter a valid 6-digit OTP");
      return;
    }

    setError("");
    try {
      await onVerify(otp);
      setOtp("");
    } catch (err) {
      setError(err.message || "OTP verification failed. Please try again.");
    }
  };

  const handleBack = () => {
    setOtp("");
    setError("");
    onBack();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#1a1a1a] border-2 border-purple-500/50 rounded-xl shadow-2xl max-w-md w-full p-6 space-y-4">
        <h3 className="text-xl font-bold text-gray-100 text-center">Verify Your Email</h3>
        <p className="text-sm text-gray-400 text-center">
          We&apos;ve sent a 6-digit OTP to {email}. Please enter it below.
        </p>

        <div className="space-y-4">
          <div className="relative">
            <input
              type="text"
              value={otp}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, '').slice(0, 6);
                setOtp(value);
              }}
              placeholder="Enter 6-digit OTP"
              className="w-full px-4 py-3 text-gray-100 bg-[#2a2a2a] border border-gray-700 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none text-center text-lg font-semibold tracking-widest"
              maxLength={6}
            />
          </div>

          {error && (
            <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
              <p className="text-red-400 text-sm text-center">{error}</p>
            </div>
          )}

          <motion.button
            onClick={handleVerify}
            disabled={otp.length !== 6 || isVerifying}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 bg-[#9700d1] hover:bg-[#b800ff] text-white font-semibold rounded-xl shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isVerifying ? "Verifying..." : "Verify OTP"}
          </motion.button>

          <button
            onClick={handleBack}
            className="w-full py-2 text-gray-400 hover:text-gray-300 text-sm transition-colors"
          >
            Back to Registration
          </button>
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;