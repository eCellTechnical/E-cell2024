import { useState } from "react";
import PaymentDialog from "./Components/PaymentDialog";
import OTPVerification from "./Components/OTPVerification";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Header from "./Components/Header";
import { Eye, EyeOff } from "lucide-react";
import axios from "axios";
import { useAuth } from "./context/AuthContext";

export default function RegistrationPage() {
  // navigation to separate page removed; we'll open payment dialog instead
  const [formData, setFormData] = useState({
    name: "",
    year: "",
    libraryId: "",
    email: "",
    contact: "",
    gender: "",
    teamName: "",
    password: "",
    rollNo: "",
    college: "",
  });
  const [showJoinPopup, setShowJoinPopup] = useState(false);
  const [teamCode, setTeamCode] = useState("");
  const [fetchedTeamName, setFetchedTeamName] = useState("");
  const [fetchedTeamLeader, setFetchedTeamLeader] = useState("");
  const [showAlreadyRegistered, setShowAlreadyRegistered] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showOtpVerification, setShowOtpVerification] = useState(false);
  const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);

  const { login } = useAuth();

  const validateForm = () => {
    if (!formData.name.trim()) return "Name is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) return "Valid email is required";
    if (!formData.contact.trim() || !/^\d{10}$/.test(formData.contact)) return "Valid 10-digit contact number is required";
    if (!formData.password.trim()) return "Password is required";
    if (!formData.rollNo.trim()) return "Roll Number is required";
    if (!formData.college.trim()) return "College is required";
    if (!formData.libraryId.trim()) return "Library ID is required";
    if (!formData.gender) return "Gender is required";
    return null;
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Simulate fetching team name based on team code
  const handleTeamCodeChange = (code) => {
    setTeamCode(code);

    if (code.length === 6) {
      const mockTeams = {
        ABCDEF: { name: "Team Alpha", leader: "Arpit" },
        123456: { name: "Team Tulls", leader: "Vaibhav" },
        DEF456: { name: "Team Warriors", leader: "Anant" },
      };
      const teamData = mockTeams[code] || {
        name: "Team " + code,
        leader: "Unknown Leader",
      };
      setFetchedTeamName(teamData.name);
      setFetchedTeamLeader(teamData.leader);
    } else {
      setFetchedTeamName("");
      setFetchedTeamLeader("");
    }
  };

  const handleCreateTeam = async () => {
    // Validate form
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");
    setIsLoading(true);

    const payload = {
      name: formData.name,
      email: formData.email.toLowerCase(),
      phone: parseInt(formData.contact) || 0,
      password: formData.password,
      rollNo: formData.rollNo,
      college: formData.college,
      libId: formData.libraryId,
      gender: formData.gender,
    };

    try {
      const response = await axios.post(
        "https://p9kq5k4g-3003.inc1.devtunnels.ms/api/v1/user/register",
        payload
      );
      if (response.status === 201) {
        // Registration successful, show OTP verification
        console.log("User registered successfully, showing OTP verification", formData);
        setShowOtpVerification(true);
      }
    } catch (err) {
      console.error("Registration failed:", err);
      if (err.response?.status === 400 && err.response?.data?.message?.toLowerCase().includes("exist")) {
        // User already exists, show already registered popup
        setShowAlreadyRegistered(true);
      } else {
        setError(
          err.response?.data?.message || "Registration failed. Please try again."
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
        "https://p9kq5k4g-3003.inc1.devtunnels.ms/api/v1/user/verify-otp",
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
        setShowSuccessPopup(true);
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

  const handleJoinSubmit = async () => {
    if (!teamCode.trim()) {
      setError("Team code is required");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await axios.post('https://p9kq5k4g-3003.inc1.devtunnels.ms/api/v1/joinTeam', {
        teamCode: teamCode
      }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('ideatex_token')}`,
        },
      });

      if (response.data.success === true) {
        console.log("Joined team successfully:", response.data);
        // Save team data if needed
        localStorage.setItem('ideatex_teamID', response.data.data.team._id);
        localStorage.setItem('ideatex_userID', response.data.data.userId);
        setShowSuccessPopup(true);
      } else {
        setError(response.data.message || "Failed to join team");
      }
    } catch (err) {
      console.error("Join team error:", err);
      setError(
        err.response?.data?.message || "Failed to join team. Please try again."
      );
    } finally {
      setIsLoading(false);
      setShowJoinPopup(false);
      setTeamCode("");
      setFetchedTeamName("");
      setFetchedTeamLeader("");
    }
  };

  const handleCancelJoin = () => {
    setShowJoinPopup(false);
    setShowSuccessPopup(true);
  };

  const handlePaymentSubmit = async (paymentData) => {
    try {
      const formData = new FormData();
      formData.append('teamName', paymentData.teamName);
      formData.append('paymentTransactionId', paymentData.transactionId);
      formData.append('paymentScreenshot', paymentData.screenshot);

      const response = await axios.post('https://p9kq5k4g-3003.inc1.devtunnels.ms/api/v1/addTeam', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${localStorage.getItem('ideatex_token')}`,
        },
      });

      console.log(response.success, response);
      if (response.data.success === true) {
        console.log("Team created successfully:", response.data);
        setPaymentSuccess(true);
        
        // Save team data to localStorage
        localStorage.setItem('ideatex_teamID', response.data.data.team._id);
        localStorage.setItem('ideatex_userID', response.data.data.team.leaderId);

        setTimeout(() => {
          window.location.href = '/ideatex/dashboard';
        }, 3000);
      } else {
        console.error("Unexpected response status:", response.status);
        setError("Failed to create team. Please try again.");
      }
    } catch (error) {
      console.error("Error creating team:", error);
      if (error.response && error.response.status === 400) {
        setError("Invalid data provided. Please check your inputs.");
      } else {
        setError("Failed to create team. Please try again.");
      }
    }
  };

  return (
    <div className="relative bg-gradient-to-r from-[#211E3F] to-black overflow-hidden min-h-screen">
      <div className="flex justify-center items-center">
        <Header />
      </div>
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
        <div className="flex pt-16 md:pt-32 items-start min-h-screen">
          {/* Left Side - Large Purple Neon Bulb - Fixed */}
          <div className="w-[40%] p-8 md:flex hidden items-center justify-center fixed left-0 top-0 h-screen">
            <div className="relative flex items-center justify-center">
              {/* Large Purple Lightbulb */}
              <img
                src="/public/assets/ideatex-logo.png"
                alt="Purple Lightbulb"
                className="w-[18rem] "
              />
            </div>
          </div>

          <div className="md:w-[60%] w-full md:ml-[40%] md:p-8 p-6 pb-16 flex items-start justify-center">
            <div className="w-full mx-auto bg-white/5 backdrop-blur-xl border-2 border-purple-500/30 text-gray-100 rounded-2xl shadow-2xl ">
              <div className="px-6 py-4 border-b border-purple-500/10">
                <h2 className="text-2xl font-bold text-center text-gray-100">
                  Registration
                </h2>
              </div>
              <div className="space-y-6 p-6">
                {/* Individual Registration Form */}
                <div className="space-y-4 p-6 rounded-xl bg-white/5 backdrop-blur-xl border border-gray-800">
                  <h3 className="font-semibold text-gray-300 text-lg mb-4">
                    Personal Information
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className="block px-4 py-3.5 w-full text-gray-100 bg-[#2a2a2a] border border-gray-700 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 peer placeholder-transparent transition-all outline-none"
                        placeholder="Name"
                      />
                      <label
                        htmlFor="name"
                        className="absolute left-2 -top-2.5 bg-[#232323] px-2 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-4 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-purple-400"
                      >
                        Name
                      </label>
                    </div>

                    <div className="relative">
                      <select
                        id="year"
                        value={formData.year}
                        onChange={(e) => handleChange("year", e.target.value)}
                        className="block px-4 py-3.5 w-full text-gray-100 bg-[#2a2a2a] border border-gray-700 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all outline-none appearance-none cursor-pointer"
                      >
                        <option value="" disabled hidden>
                          Select Year
                        </option>
                        <option className="bg-[#2a2a2a]" value="1st Year">
                          1st Year
                        </option>
                        <option className="bg-[#2a2a2a]" value="2nd Year">
                          2nd Year
                        </option>
                        <option className="bg-[#2a2a2a]" value="3rd Year">
                          3rd Year
                        </option>
                      </select>
                      <label className="absolute left-2 -top-2.5 bg-[#232323] px-2 text-sm text-gray-400">
                        Year
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        type="text"
                        id="libraryId"
                        value={formData.libraryId}
                        onChange={(e) =>
                          handleChange("libraryId", e.target.value)
                        }
                        className="block px-4 py-3.5 w-full text-gray-100 bg-[#2a2a2a] border border-gray-700 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 peer placeholder-transparent transition-all outline-none"
                        placeholder="Library ID"
                      />
                      <label
                        htmlFor="libraryId"
                        className="absolute left-2 -top-2.5 bg-[#232323] px-2 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-4 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-purple-400"
                      >
                        Library ID
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className="block px-4 py-3.5 w-full text-gray-100 bg-[#2a2a2a] border border-gray-700 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 peer placeholder-transparent transition-all outline-none"
                        placeholder="Email"
                      />
                      <label
                        htmlFor="email"
                        className="absolute left-2 -top-2.5 bg-[#232323] px-2 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-4 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-purple-400"
                      >
                        Email
                      </label>
                    </div>

                    <div className="relative">
                      <select
                        id="gender"
                        value={formData.gender}
                        onChange={(e) => handleChange("gender", e.target.value)}
                        className="block px-4 py-3.5 w-full text-gray-100 bg-[#2a2a2a] border border-gray-700 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all outline-none appearance-none cursor-pointer"
                      >
                        <option value="" disabled hidden>
                          Select Gender
                        </option>
                        <option className="bg-[#2a2a2a]" value="Male">
                          Male
                        </option>
                        <option className="bg-[#2a2a2a]" value="Female">
                          Female
                        </option>
                      </select>
                      <label className="absolute left-2 -top-2.5 bg-[#232323] px-2 text-sm text-gray-400">
                        Gender
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        type="tel"
                        id="contact"
                        value={formData.contact}
                        onChange={(e) =>
                          handleChange("contact", e.target.value)
                        }
                        className="block px-4 py-3.5 w-full text-gray-100 bg-[#2a2a2a] border border-gray-700 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 peer placeholder-transparent transition-all outline-none"
                        placeholder="Contact Number"
                      />
                      <label
                        htmlFor="contact"
                        className="absolute left-2 -top-2.5 bg-[#232323] px-2 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-4 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-purple-400"
                      >
                        Contact Number
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        type="text"
                        id="rollNo"
                        value={formData.rollNo}
                        onChange={(e) => handleChange("rollNo", e.target.value)}
                        className="block px-4 py-3.5 w-full text-gray-100 bg-[#2a2a2a] border border-gray-700 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 peer placeholder-transparent transition-all outline-none"
                        placeholder="Roll Number"
                      />
                      <label
                        htmlFor="rollNo"
                        className="absolute left-2 -top-2.5 bg-[#232323] px-2 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-4 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-purple-400"
                      >
                        Roll Number
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        type="text"
                        id="college"
                        value={formData.college}
                        onChange={(e) =>
                          handleChange("college", e.target.value)
                        }
                        className="block px-4 py-3.5 w-full text-gray-100 bg-[#2a2a2a] border border-gray-700 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 peer placeholder-transparent transition-all outline-none"
                        placeholder="College"
                      />
                      <label
                        htmlFor="college"
                        className="absolute left-2 -top-2.5 bg-[#232323] px-2 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-4 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-purple-400"
                      >
                        College
                      </label>
                    </div>

                    <div className="relative w-full">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        value={formData.password}
                        onChange={(e) =>
                          handleChange("password", e.target.value)
                        }
                        className="block px-4 pr-12 py-3.5 w-full text-gray-100 bg-[#2a2a2a] border border-gray-700 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 peer placeholder-transparent transition-all outline-none"
                        placeholder="Password"
                      />
                      <label
                        htmlFor="password"
                        className="absolute left-2 -top-2.5 bg-[#232323] px-2 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-4 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-purple-400"
                      >
                        Password
                      </label>
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-purple-400 transition-colors"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>
                </div>

                {error && (
                  <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                    <p className="text-red-400 text-sm">{error}</p>
                  </div>
                )}

                {/* Action Button */}
                <div className="grid grid-cols-1 gap-4 pt-4">
                  <motion.button
                    className="w-full py-3 bg-[#9700d1] hover:bg-[#b800ff] text-white font-semibold rounded-full shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    whileTap={{ scale: 0.95 }}
                    onClick={handleCreateTeam}
                    disabled={isLoading}
                  >
                    {isLoading ? "Registering..." : "Register Now"}
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* OTP Verification Section */}
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

      {/* Join Team Popup */}
      {showJoinPopup && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#1a1a1a] border-2 border-purple-500/50 rounded-xl shadow-2xl max-w-md w-full p-6 space-y-4">
            <h3 className="text-xl font-bold text-gray-100">Join Team</h3>
            <p className="text-sm text-gray-400">
              Enter the team code to join an existing team
            </p>

            <div className="space-y-3">
              <div className="relative">
                <input
                  type="text"
                  value={teamCode}
                  onChange={(e) =>
                    handleTeamCodeChange(e.target.value.toUpperCase())
                  }
                  placeholder="Enter Team Code"
                  className="w-full px-4 py-3 text-gray-100 bg-[#2a2a2a] border border-gray-700 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none uppercase tracking-widest text-center text-lg font-semibold"
                  maxLength={6}
                />
              </div>

              {/* Team Name Display */}
              {fetchedTeamName && (
                <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg space-y-2">
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Team Name</p>
                    <p className="text-base font-semibold text-purple-300">
                      {fetchedTeamName}
                    </p>
                  </div>
                  <div className="pt-1 border-t border-purple-500/20">
                    <p className="text-xs text-gray-400 mb-1">Team Leader</p>
                    <p className="text-sm font-medium text-gray-300">
                      {fetchedTeamLeader}
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="flex gap-3 pt-2">
              <motion.button
                onClick={handleCancelJoin}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 bg-white hover:bg-[#b800ff] text-black hover:text-white  font-semibold rounded-xl shadow-lg transition-all"
              >
                Cancel
              </motion.button>
              <motion.button
                onClick={handleJoinSubmit}
                whileTap={{ scale: 0.95 }}
                disabled={teamCode.length !== 6}
                className="w-full py-3 bg-[#9700d1] hover:bg-[#b800ff] text-white  font-semibold rounded-xl shadow-lg transition-all"
              >
                Join
              </motion.button>
            </div>
          </div>
        </div>
      )}

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#1a1a1a] border-2 border-purple-500/50 rounded-xl shadow-2xl max-w-md w-full p-6 space-y-4">
            <h3 className="text-xl font-bold text-gray-100 text-center">Registration Successful!</h3>
            <p className="text-sm text-gray-400 text-center">
              Welcome to IdeateX 2025! Choose how you&apos;d like to proceed.
            </p>

            <div className="flex gap-3 pt-2">
              <motion.button
                onClick={() => {
                  setShowSuccessPopup(false);
                  setShowPaymentDialog(true);
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 bg-[#9700d1] hover:bg-[#b800ff] text-white font-semibold rounded-xl shadow-lg transition-all"
              >
                Create Team
              </motion.button>
              <motion.button
                onClick={() => {
                  setShowSuccessPopup(false);
                  setShowJoinPopup(true);
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 bg-white hover:bg-[#b800ff] text-black hover:text-white font-semibold rounded-xl shadow-lg transition-all"
              >
                Join Team
              </motion.button>
            </div>
          </div>
        </div>
      )}

      {/* Already Registered Popup */}
      {showAlreadyRegistered && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#1a1a1a] border-2 border-purple-500/50 rounded-xl shadow-2xl max-w-md w-full p-6 space-y-4">
            <h3 className="text-xl font-bold text-gray-100 text-center">Already Registered</h3>
            <p className="text-sm text-gray-400 text-center">
              You have already registered with this email. Please sign in to continue.
            </p>

            <div className="flex gap-3 pt-2">
              <motion.button
                onClick={() => setShowAlreadyRegistered(false)}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 bg-white hover:bg-[#b800ff] text-black hover:text-white font-semibold rounded-xl shadow-lg transition-all"
              >
                Close
              </motion.button>
              <motion.button
                onClick={() => {
                  // Navigate to sign in page or handle sign in
                  setShowAlreadyRegistered(false);
                  // You can add navigation logic here, e.g., window.location.href = '/signin';
                  alert('Redirecting to sign in...');
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 bg-[#9700d1] hover:bg-[#b800ff] text-white font-semibold rounded-xl shadow-lg transition-all"
              >
                Sign In
              </motion.button>
            </div>
          </div>
        </div>
      )}

      {/* Payment Dialog (opens instead of navigating to /payment) */}
      <PaymentDialog
        isOpen={showPaymentDialog}
        onClose={() => {
          setShowPaymentDialog(false);
          setShowSuccessPopup(true);
        }}
        onSubmit={handlePaymentSubmit}
        formData={formData}
        paymentSuccess={paymentSuccess}
      />
    </div>
  );
}

RegistrationPage.propTypes = {
  onBackToHome: PropTypes.func,
};
