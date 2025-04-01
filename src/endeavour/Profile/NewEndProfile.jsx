import { useState, useEffect } from "react";
// import PropTypes from "prop-types";
import TeamManagementPopup from "./TeamManagement"
import { useNavigate, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";


function Profile() {
  const navigate = useNavigate();
  const location = useLocation();
  const { userId } = useParams();
  
  const [user, setUser] = useState({
    name: "",
    email: "",
    slug: ""
  });
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });
  
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const [eventLoading, setEventLoading] = useState(true);
  
  const [currentPasswordVisible, setCurrentPasswordVisible] = useState(false);
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  
  const [activeTab, setActiveTab] = useState("profile");
  const [selectedTeamId, setSelectedTeamId] = useState(null);
  const [showTeamPopup, setShowTeamPopup] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetchUserData();
    fetchRegisteredEvents();
  }, [location.pathname]);

  const fetchUserData = async () => {
    setLoading(true);
    const token = localStorage.getItem("token");
    console.log("Token:", token);
    
    if (!token) {
      navigate("/endeavour/login");
      return;
    }
    
    try {
      const response = await axios.get("http://localhost:5000/api/v1/users/profile", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      if (response.data.success) {
        const userData = response.data.data.user;
        setUser(userData);
        setFormData({
          name: userData.name || "",
          email: userData.email || "",
          currentPassword: "",
          newPassword: "",
          confirmPassword: ""
        });
      } else {
        toast.error("Failed to fetch profile data");
        navigate("/endeavour/login");
      }
    } catch (error) {
      const errorMsg = error.response?.data?.message || "Network error. Please try again later";
      toast.error(errorMsg);
      
      if (error.response?.status === 401) {
        localStorage.removeItem("token");
        navigate("/endeavour/login");
      }
    } finally {
      setLoading(false);
    }
  };

  const fetchRegisteredEvents = async () => {
    setEventLoading(true);
    const token = localStorage.getItem("token");
    
    if (!token) {
      navigate("/endeavour/login");
      return;
    }
    
    try {
      const response = await axios.get("http://localhost:5000/api/v1/user/registered-events", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          userId: "67db09057770c82094111372"
        }
      });
      
      if (response.data.success) {
        setRegisteredEvents(response.data.data.teams);
      } else {
        toast.error("Failed to fetch registered events");
      }
    } catch (error) {
      const errorMsg = error.response?.data?.message || "Failed to fetch registered events";
      toast.error(errorMsg);
    } finally {
      setEventLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
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
    
    if (formData.newPassword && formData.newPassword !== formData.confirmPassword) {
      toast.error("New password and confirmation do not match");
      setUpdating(false);
      return;
    }
    
    try {
      const updateData = {
        name: formData.name,
        email: formData.email
      };
      
      if ((formData.newPassword && formData.currentPassword) && formData.newPassword === formData.confirmPassword) {
        updateData.password = formData.newPassword;
      }
    
      const response = await axios.put(
        `http://localhost:5000/api/v1/users/${userId}`,
        updateData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            userId: userId
          }
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
          confirmPassword: ""
        });
        
        fetchUserData();
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
      const errorMsg = error.response?.data?.message || "Network error. Please try again later";
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
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-[#00f8bd] mb-2">Your Profile</h1>
          <p className="text-gray-400">Manage your account and view registered events</p>
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
        
        {/* Profile Tab Content */}
        {activeTab === "profile" && (
          <div className="bg-gray-900 rounded-xl p-6 md:p-8 shadow-xl">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-[#00f699] to-[#00f8bd] flex items-center justify-center text-[#007827] text-xl md:text-2xl font-bold">
                {user.name ? user.name.charAt(0).toUpperCase() : "U"}
              </div>
              <div className="ml-4">
                <h2 className="text-2xl font-bold">{user.name}</h2>
                <p className="text-gray-400">{user.email}</p>
              </div>
            </div>
            
            <form onSubmit={handleProfileUpdate}>
              <div className="space-y-6">
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
                
                {/* Email Field */}
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-400">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border border-gray-700 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#00f8bd] text-white"
                    required
                  />
                </div>
                
                <div className="pt-4 border-t border-gray-800">
                  <h3 className="text-lg font-medium mb-4">Change Password</h3>
                  
                  {/* Current Password Field */}
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
                      />
                      <button
                        type="button"
                        onClick={() => setCurrentPasswordVisible(!currentPasswordVisible)}
                        className="px-4 text-gray-400 focus:outline-none"
                      >
                        {currentPasswordVisible ? "Hide" : "Show"}
                      </button>
                    </div>
                  </div>
                  
                  {/* New Password Field */}
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
                      />
                      <button
                        type="button"
                        onClick={() => setNewPasswordVisible(!newPasswordVisible)}
                        className="px-4 text-gray-400 focus:outline-none"
                      >
                        {newPasswordVisible ? "Hide" : "Show"}
                      </button>
                    </div>
                  </div>
                  
                  {/* Confirm New Password Field */}
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
                      />
                      <button
                        type="button"
                        onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                        className="px-4 text-gray-400 focus:outline-none"
                      >
                        {confirmPasswordVisible ? "Hide" : "Show"}
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Submit Button */}
                <div className="pt-4">
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
                      <div key={team._id} className="border border-gray-800 rounded-lg p-4 hover:border-[#00f8bd] transition-colors">
                        <div className="flex flex-col md:flex-row md:items-center justify-between">
                          <div>
                            <h3 className="text-xl font-semibold text-[#00f8bd]">{team.eventId.name}</h3>
                            <p className="text-gray-400 mt-1">Team: {team.teamName}</p>
                            <div className="mt-2 flex flex-wrap gap-2">
                              <span className="inline-block bg-[#007827] text-white px-3 py-1 rounded-full text-xs font-medium">
                                {team.isVerified ? "Verified" : "Pending Verification"}
                              </span>
                              <span className="inline-block bg-gray-700 text-white px-3 py-1 rounded-full text-xs font-medium">
                                {formatDate(team.createdAt)}
                              </span>
                            </div>
                          </div>
                          <div className="mt-4 md:mt-0 flex flex-col md:flex-row gap-2">
                            <button 
                              onClick={() => navigate(`/events/${team.eventSlug}`)}
                              className="bg-transparent border border-[#00f8bd] text-[#00f8bd] px-4 py-2 rounded-full hover:bg-[#00f8bd] hover:text-[#007827] transition-colors"
                            >
                              View Event
                            </button>
                            <button 
                              onClick={() => handleTeamClick(team._id)}
                              className="bg-[#007827] text-white px-4 py-2 rounded-full hover:bg-[#00582d] transition-colors"
                            >
                              Manage Team
                            </button>
                          </div>
                        </div>
                        <div className="mt-4 pt-3 border-t border-gray-800">
                          <p className="text-gray-400 text-sm">{team.eventId.description}</p>
                          <p className="text-gray-500 text-xs mt-2">Members: {team.members.length + 1}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-400 text-lg mb-4">You haven`t registered for any events yet.</p>
                    <button
                      onClick={() => navigate("/events")}
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
    </div>
  );
}

export default Profile;