import { useState, useEffect } from "react";
import TeamManagementPopup from "./TeamManagement";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import PaymentModal from "../End25/CompletePayement";
import certTemplate from "../../assets/end25-cer.png";

function Profile() {
  const navigate = useNavigate();
  const location = useLocation();
  const userId = localStorage.getItem("userId");

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    rollNo: "",
    college: "",
    libId: "",
    gender: "",
    age: "",
    profilePicture: "",
    kitTaken: false,
  });

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    rollNo: "",
    college: "",
    libId: "",
    gender: "",
    age: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const [eventLoading, setEventLoading] = useState(true);

  const { search } = useLocation();
  const query = new URLSearchParams(search);

  const hasEvents = query.has("events");

  const [activeTab, setActiveTab] = useState(hasEvents ? "events" : "profile");
  const [selectedTeamId, setSelectedTeamId] = useState(null);
  const [showTeamPopup, setShowTeamPopup] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetchUserData();
    fetchRegisteredEvents();
  }, [location.pathname]);

  useEffect(() => {
    if (query.get("success") === "true") {
      toast.success("Payment successful!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "colored",
      });
    } else if (query.get("success") === "false") {
      toast.error("Payment unsuccessful!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "colored",
      });
    }
  }, [query.get("success")]);
  const fetchUserData = async () => {
    setLoading(true);
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/endeavour/login");
      return;
    }

    try {
      const response = await axios.get(
        `https://two5-backend.onrender.com/api/v1/users/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        const userData = response.data.data.user;
        setUser(userData);
        setFormData({
          name: userData.name || "",
          phone: userData.phone || "",
          rollNo: userData.rollNo || "",
          college: userData.college || "",
          libId: userData.libId || "",
          gender: userData.gender || "",
          age: userData.age || "",
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
      } else {
        toast.error("Failed to fetch profile data");
        navigate("/endeavour/login");
      }
    } catch (error) {
      const errorMsg =
        error.response?.data?.message ||
        "Network error. Please try again later";
      toast.error(errorMsg);

      if (error.response?.status === 401) {
        localStorage.removeItem("token");
        navigate("/endeavour/login");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadCertificate = (name, college, eventName) => {
    const canvas = document.createElement('canvas');
    const img = new Image();
    img.src =  certTemplate;
    
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
  
      // Draw the certificate template
      ctx.drawImage(img, 0, 0);
  
      // Set text styles
      ctx.fillStyle = '#000000'; // Black text
      ctx.textAlign = 'left'; // Changed to left for precise measurement
      
      // 1. Participant Name
      ctx.font = 'bold 42px Poppins, sans-serif';
      const nameWidth = ctx.measureText(name).width;
      ctx.fillText(name, (canvas.width - nameWidth) / 2, canvas.height * 0.59);
  
      // 2. College Name
      ctx.font = 'bold 32px Poppins, sans-serif';
      const collegeWidth = ctx.measureText(college).width;
      ctx.fillText(college, (canvas.width - collegeWidth) / 2.2, canvas.height * 0.67);
  
      // 3. Event Name
      ctx.font = 'bold 32px Poppins, sans-serif';
      const eventWidth = ctx.measureText(eventName).width;
      ctx.fillText(eventName, (canvas.width - eventWidth) / 2.5, canvas.height * 0.71);
  
      // Trigger download
      const link = document.createElement('a');
      link.download = `Endeavour25_Certificate_${name.replace(/\s+/g, '_')}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    };
  
    img.onerror = () => {
      console.error('Error loading certificate template');
    };
  };

  const fetchRegisteredEvents = async () => {
    setEventLoading(true);
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/endeavour/login");
      return;
    }

    try {
      const response = await axios.post(
        "https://two5-backend.onrender.com/api/v1/user/teams",
        { userId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data.data.teams);

      if (response.data.success) {
        setRegisteredEvents(response.data.data.teams);
      } else {
        toast.error("Failed to fetch registered events");
      }
    } catch (error) {
      const errorMsg =
        error.response?.data?.message || "Failed to fetch registered events";
      toast.error(errorMsg);
    } finally {
      setEventLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    setUpdating(true);

    const token = localStorage.getItem("token");

    if (formData.newPassword && !formData.currentPassword) {
      toast.error("Please enter your current password");
      setUpdating(false);
      return;
    }

    if (
      formData.newPassword &&
      formData.newPassword !== formData.confirmPassword
    ) {
      toast.error("New password and confirmation do not match");
      setUpdating(false);
      return;
    }

    try {
      const updateData = {
        name: formData.name,
        phone: formData.phone,
        rollNo: formData.rollNo,
        college: formData.college,
        libId: formData.libId,
        gender: formData.gender,
        age: formData.age,
      };

      if (
        formData.newPassword &&
        formData.currentPassword &&
        formData.newPassword === formData.confirmPassword
      ) {
        updateData.password = formData.newPassword;
      }

      const response = await axios.put(
        `https://two5-backend.onrender.com/api/v1/users/${userId}`,
        updateData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            userId: userId,
          },
        }
      );

      if (response.data.success) {
        toast.success("Profile updated successfully!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          theme: "colored",
        });

        setFormData({
          ...formData,
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        });

        fetchUserData();

        setTimeout(() => {
          navigate("/endeavour/events");
        }, 2000);
      } else {
        toast.error(response.data.message || "Update failed", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          theme: "colored",
        });
      }
    } catch (error) {
      const errorMsg =
        error.response?.data?.message ||
        "Network error. Please try again later";
      toast.error(errorMsg, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "colored",
      });
    } finally {
      setUpdating(false);
    }
  };

  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [createdTeamId, setCreatedTeamId] = useState(null);
  const [qrCode, setqrCode] = useState(null);
  const [discountedPrice, setDiscountedPrice] = useState(null);
  const [displayEventName, setEventName] = useState(null);

  const openPaymentPopup = (team) => {
    setCreatedTeamId(team._id);

    const fetchEventData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://two5-backend.onrender.com/api/v1/events/${team.eventSlug}`
        );

        console.log(response.data.data.event.name);

        setEventName(response.data.data.event.name);

        setqrCode(response.data.data.event.qrcode);
        setDiscountedPrice(response.data.data.event.fees);
      } catch (err) {
        console.error("Error fetching event data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEventData();

    setShowPaymentModal(true);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleTeamClick = (teamId) => {
    setSelectedTeamId(teamId);
    setShowTeamPopup(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex justify-center items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#00f8bd]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#001a1a] to-black text-white py-12 md:pt-28 px-4 sm:px-6 lg:px-8">
      {/* <div className="absolute  z-10 top-0 left-0 w-full h-full border-t border-l border-teal-500/5 grid grid-cols-4 grid-rows-4">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="border-b border-r border-teal-500/5" />
          ))}
        </div> */}

      <div className="max-w-4xl mx-auto">
        {/* Header */}

        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-[#00f8bd] mb-2">
            Your Profile
          </h1>
          <p className="text-gray-400">
            Manage your account and view registered events
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-4 p-1 rounded-full bg-gray-900">
            <button
              onClick={() => setActiveTab("profile")}
              className={`px-6 py-2 rounded-full transition-all ${
                activeTab === "profile"
                  ? "bg-[#007827] text-white font-bold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Profile
            </button>
            <button
              onClick={() => setActiveTab("events")}
              className={`px-6 py-2 rounded-full transition-all ${
                activeTab === "events"
                  ? "bg-[#007827] text-white font-bold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Events
            </button>
          </div>
        </div>

        {activeTab === "profile" && (
          <div className="bg-gray-900 rounded-xl p-6 md:p-8 shadow-xl">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-[#00f699] to-[#00f8bd] flex items-center justify-center text-[#007827] text-xl md:text-2xl font-bold">
                {user.name ? (
                  <img
                    src={`https://avatar.iran.liara.run/public/${
                      user.gender === "male" ? "`girl`" : "boy"
                    }`}
                    loading="lazy"
                    alt="Profile"
                  />
                ) : (
                  "U"
                )}
              </div>
              <div className="ml-4">
                <h2 className="text-2xl font-bold">{user.name}</h2>
                <p className="text-gray-400">{user.email}</p>
                <p className="text-gray-400 text-sm mt-1">
                  {user.college} • {user.rollNo}
                </p>
              </div>
            </div>

            <form onSubmit={handleProfileUpdate}>
              <div className="space-y-6">
                {/* Basic Information Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-[#00f8bd]">
                    Basic Information
                  </h3>

                  {/* Name Field */}
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-400">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-gray-700 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#00f8bd] text-white"
                      required
                    />
                  </div>

                  {/* Email Field (readonly) */}
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-400">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={user.email}
                      readOnly
                      className="w-full p-3 rounded-lg border border-gray-700 bg-gray-800 text-gray-400 cursor-not-allowed"
                    />
                  </div>

                  {/* Phone Field */}
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-400">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-gray-700 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#00f8bd] text-white"
                    />
                  </div>
                </div>

                {/* Academic Information Section */}
                <div className="space-y-4 pt-4 border-t border-gray-800">
                  <h3 className="text-lg font-medium text-[#00f8bd]">
                    Academic Information
                  </h3>

                  {/* Roll No Field */}
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-400">
                      Roll Number
                    </label>
                    <input
                      type="text"
                      name="rollNo"
                      value={formData.rollNo}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-gray-700 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#00f8bd] text-white"
                    />
                  </div>

                  {/* College Field */}
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-400">
                      College/University
                    </label>
                    <input
                      type="text"
                      name="college"
                      value={formData.college}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-gray-700 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#00f8bd] text-white"
                    />
                  </div>

                  {/* Library ID Field */}
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-400">
                      Library ID
                    </label>
                    <input
                      type="text"
                      name="libId"
                      value={formData.libId}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-gray-700 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#00f8bd] text-white"
                    />
                  </div>
                </div>

                {/* Personal Information Section */}
                <div className="space-y-4 pt-4 border-t border-gray-800">
                  <h3 className="text-lg font-medium text-[#00f8bd]">
                    Personal Information
                  </h3>

                  {/* Gender Field */}
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-400">
                      Gender
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-gray-700 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#00f8bd] text-white"
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                      <option value="Prefer not to say">
                        Prefer not to say
                      </option>
                    </select>
                  </div>

                  {/* Age Field */}
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-400">
                      Age
                    </label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      min="16"
                      max="100"
                      className="w-full p-3 rounded-lg border border-gray-700 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#00f8bd] text-white"
                    />
                  </div>

                  {user.kitTaken && (
                    <div className="flex items-center pt-2">
                      <div className="flex items-center">
                        <span className="mr-3 text-sm font-medium text-gray-400">
                          Kit Collected
                        </span>
                        <div className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            id="kitTaken"
                            checked={user.kitTaken}
                            readOnly
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00f8bd]"></div>
                          <span className="ml-2 text-sm font-medium text-gray-300">
                            {user.kitTaken ? "Yes" : "No"}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Password Change Section */}
                {/*                 <div className="pt-4 border-t border-gray-800">
                  <h3 className="text-lg font-medium text-[#00f8bd] mb-4">
                    Change Password
                  </h3>

                  <div className="space-y-1 mb-4">
                    <label className="block text-sm font-medium text-gray-400">
                      Current Password
                    </label>
                    <div className="flex border border-gray-700 bg-gray-800 rounded-lg focus-within:ring-2 focus-within:ring-[#00f8bd]">
                      <input
                        type={currentPasswordVisible ? "text" : "password"}
                        name="currentPassword"
                        value={formData.currentPassword}
                        onChange={handleChange}
                        className="flex-grow p-3 bg-transparent border-none focus:outline-none text-white"
                        placeholder="Leave blank to keep current password"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setCurrentPasswordVisible(!currentPasswordVisible)
                        }
                        className="px-4 text-gray-400 focus:outline-none"
                      >
                        {currentPasswordVisible ? "Hide" : "Show"}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-1 mb-4">
                    <label className="block text-sm font-medium text-gray-400">
                      New Password
                    </label>
                    <div className="flex border border-gray-700 bg-gray-800 rounded-lg focus-within:ring-2 focus-within:ring-[#00f8bd]">
                      <input
                        type={newPasswordVisible ? "text" : "password"}
                        name="newPassword"
                        value={formData.newPassword}
                        onChange={handleChange}
                        className="flex-grow p-3 bg-transparent border-none focus:outline-none text-white"
                        placeholder="Leave blank to keep current password"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setNewPasswordVisible(!newPasswordVisible)
                        }
                        className="px-4 text-gray-400 focus:outline-none"
                      >
                        {newPasswordVisible ? "Hide" : "Show"}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-400">
                      Confirm New Password
                    </label>
                    <div className="flex border border-gray-700 bg-gray-800 rounded-lg focus-within:ring-2 focus-within:ring-[#00f8bd]">
                      <input
                        type={confirmPasswordVisible ? "text" : "password"}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="flex-grow p-3 bg-transparent border-none focus:outline-none text-white"
                        placeholder="Leave blank to keep current password"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setConfirmPasswordVisible(!confirmPasswordVisible)
                        }
                        className="px-4 text-gray-400 focus:outline-none"
                      >
                        {confirmPasswordVisible ? "Hide" : "Show"}
                      </button>
                    </div>
                  </div>
                </div>
 */}
                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={updating}
                    className="w-full bg-gradient-to-r from-[#00f699] to-[#00f8bd] text-[#007827] font-bold rounded-full py-3 transition-all hover:shadow-lg disabled:opacity-70 flex justify-center items-center"
                  >
                    {updating ? (
                      <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-[#007827] border-r-transparent"></span>
                    ) : (
                      "Save Changes"
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}

        {/* Events Tab Content */}
        {activeTab === "events" && (
          <div className="bg-gray-900 rounded-xl p-6 md:p-8 shadow-xl">
            <h2 className="text-2xl font-bold mb-6">Registered Events</h2>

            {eventLoading ? (
              <div className="flex justify-center py-8">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-[#00f8bd]"></div>
              </div>
            ) : (
              <>
                {registeredEvents.length > 0 ? (
                  <div className="space-y-4">
                    {registeredEvents.map((team) => (
                      <div
                        key={team._id}
                        className="border border-gray-800 rounded-lg p-4 hover:border-[#00f8bd] transition-colors"
                      >
                        <div className="flex flex-col md:flex-row md:items-center justify-between">
                          <div>
                            <h3 className="text-xl font-semibold text-[#00f8bd]">
                              {team.eventId.name}
                            </h3>
                            <p className="text-gray-400 mt-1">
                              Team: {team.teamName}
                            </p>
                            <div className="mt-2 flex flex-wrap gap-2">
                              <span className="inline-block bg-[#007827] text-white px-3 py-1 rounded-full text-xs font-medium">
                                {team.isVerified
                                  ? "Verified"
                                  : "Pending Verification"}
                              </span>
                              <span className="inline-block bg-gray-700 text-white px-3 py-1 rounded-full text-xs font-medium">
                                {formatDate(team.createdAt)}
                              </span>
                            </div>
                          </div>
                          <div className="mt-4 md:mt-0 flex flex-col md:flex-row gap-2">
                            <button
                              onClick={() =>
                                navigate(`/endeavour/events/${team.eventSlug}`)
                              }
                              className="bg-transparent border border-[#00f8bd] text-[#00f8bd] px-4 py-2 rounded-full hover:bg-[#00f8bd] hover:text-[#007827] transition-colors"
                            >
                              View Event
                            </button>
                            {!team.isVerified &&
                            team.paymentTransactionId === "000000000000" ? (
                              <button
                                onClick={() => openPaymentPopup(team)}
                                className="bg-[#007827] text-white px-4 py-2 rounded-full hover:bg-[#00582d] transition-colors"
                              >
                                Complete Payment
                              </button>
                            ) : (
                              <button
                                onClick={() => handleTeamClick(team._id)}
                                className="bg-[#007827] text-white px-4 py-2 rounded-full hover:bg-[#00582d] transition-colors"
                              >
                                Manage Team
                              </button>
                            )}
                            {team.eventId.name !== "Entertainment Eve" && <button
                              onClick={() =>
                                handleDownloadCertificate(
                                  user.name,
                                  user.college || "KIET Group of Institutions",
                                  team.eventId.name || "Endeavour 25"
                                )
                              }
                              className="bg-[#007827] text-white px-4 py-2 rounded-full hover:bg-[#00582d] transition-colors"
                            >
                              Download Certificate
                            </button>}
                          </div>
                        </div>
                        <div className="mt-4 pt-3 border-t border-gray-800">
                          {/* <DescriptionText
                            htmlContent={team.eventId.description}
                          /> */}

                          <p className="text-gray-500 text-xs mt-2">
                            Members: {team.members.length}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-400 text-lg mb-4">
                      You haven&#39;t registered for any events yet.
                    </p>
                    <button
                      onClick={() => navigate("/endeavour/events")}
                      className="bg-gradient-to-r from-[#00f699] to-[#00f8bd] text-[#007827] font-bold rounded-full px-6 py-3 transition-all hover:shadow-lg"
                    >
                      Browse Events
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>

      {/* Team Management Popup */}
      <TeamManagementPopup
        teamId={selectedTeamId}
        isOpen={showTeamPopup}
        onClose={() => setShowTeamPopup(false)}
      />

      {showPaymentModal && (
        <PaymentModal
          eventName={displayEventName}
          discountedPrice={discountedPrice}
          qrCode={qrCode}
          onClose={() => setShowPaymentModal(false)}
          onSubmit={async (paymentData) => {
            try {
              const token = localStorage.getItem("token");
              const res = await axios.put(
                `https://two5-backend.onrender.com/api/v1/teams/${paymentData.teamId}/payment`,
                {
                  paymentTransactionId: paymentData.paymentTransactionId,
                  paymentScreenshot: paymentData.paymentScreenshot,
                },
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }
              );
              if (res.data.success) {
                setTimeout(
                  () => (window.location.href = "/endeavour/profile?events"),
                  2000
                );
              } else {
                throw new Error(res.data.message || "Payment update failed");
              }
            } catch (err) {
              console.log("Error updating payment:", err);
            }
          }}
          teamId={createdTeamId}
        />
      )}
    </div>
  );
}

function DescriptionText({ htmlContent }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getShortDescription = (html) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    const text = tempDiv.textContent || tempDiv.innerText || "";

    // Get first 150 characters (approximate for 2 lines)
    const shortText = text.substring(0, 150);

    // Find the last space to avoid cutting words
    const lastSpace = shortText.lastIndexOf(" ");
    return lastSpace > 0
      ? shortText.substring(0, lastSpace) + "..."
      : shortText + "...";
  };

  return (
    <div className="relative">
      <div
        className="text-gray-400 text-sm overflow-hidden"
        style={{
          display: "-webkit-box",
          WebkitLineClamp: isExpanded ? "unset" : 2,
          WebkitBoxOrient: "vertical",
          lineHeight: "1.4",
          maxHeight: isExpanded ? "none" : "2.8em",
        }}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-emerald-400 hover:text-emerald-300 text-xs font-medium mt-1 focus:outline-none"
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
}

export default Profile;
