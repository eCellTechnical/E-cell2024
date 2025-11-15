import { X, Copy, UserCircle2, Crown, Hash, QrCode, Pencil } from "lucide-react";
import {  useState, useEffect } from "react";
import Header from "./Header";
import PropTypes from "prop-types"; // Import PropTypes
import axios from "axios";

export default function TeamDetailsPage({
  teamData,
  onBackToHome,
  onRemoveMember,
  onProfileUpdate,
  loading = false,
  error = "",
}) {
  const [copied, setCopied] = useState(false);
  const [memberToRemove, setMemberToRemove] = useState(null);
  const [showQrCode, setShowQrCode] = useState(false);
  const [qrCodeData, setQrCodeData] = useState(null);
  const [qrLoading, setQrLoading] = useState(false);
  const [showQrNotAvailable, setShowQrNotAvailable] = useState(false);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [editFormData, setEditFormData] = useState({
    name: "",
    rollNo: "",
    college: "",
  });
  const [editLoading, setEditLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoading, setUserLoading] = useState(true);

  console.log(teamData);


  // Fetch current user details
  useEffect(() => {
    const fetchUserDetails = async () => {
      console.log("Fetching user details...");
      try {
        const userId = localStorage.getItem('ideatex_userID');
        if (!userId) {
          console.error('User ID not found in localStorage');
          setUserLoading(false);
          return;
        }

        const response = await axios.get(`http://localhost:3003/api/v1/user/${userId}`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('ideatex_token')}`,
            'Content-Type': 'application/json',
          },
        });

        console.log(response)
        if (response.data.success) {
          setCurrentUser(response.data.data.user);
        } else {
          console.error('Failed to fetch user details:', response.data.message);
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
      } finally {
        setUserLoading(false);
      }
    };

    fetchUserDetails();
  }, []);

  // Determine if current user is the team leader
  const isCurrentUserLeader = () => {
    if (!currentUser || !teamData) return false;
    return currentUser.libraryId === teamData.leader.libraryId;
  };


  const handleCopyTeamCode = async () => {
    try {
      await navigator.clipboard.writeText(teamData.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const handleRemoveClick = (member) => {
    setMemberToRemove(member);
  };

  const confirmRemove = () => {
    if (memberToRemove) {
      onRemoveMember(memberToRemove.id);
      setMemberToRemove(null);
    }
  };

  const cancelRemove = () => {
    setMemberToRemove(null);
  };

  const handleEditProfile = () => {
    setEditFormData({
      name: currentUser?.name || "",
      rollNo: currentUser?.libraryId || "",
      college: currentUser?.college || "",
    });
    setShowEditProfile(true);
  };

  const handleEditChange = (field, value) => {
    setEditFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    setEditLoading(true);

    try {
      const userId = localStorage.getItem('ideatex_userID');
      const response = await axios.put(`http://localhost:3003/api/v1/user/${userId}`, {
        name: editFormData.name,
        rollNo: editFormData.rollNo,
        college: editFormData.college,
      }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('ideatex_token')}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.data.success) {
        // Update the teamData
        if (onProfileUpdate) {
          onProfileUpdate();
        }
        setShowEditProfile(false);
      } else {
        console.error("Failed to update profile:", response.data.message);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    } finally {
      setEditLoading(false);
    }
  };

  const handleGenerateQrCode = async () => {
    const teamId = localStorage.getItem("ideatex_teamID");
    if (!teamId) {
      console.error("Team ID not found");
      return;
    }

    setQrLoading(true);
    try {
      const response = await axios.get(
        "http://localhost:3003/api/v1/teams/qrcode/scan",
        {
          teamId: teamId,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("ideatex_token")}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        setQrCodeData(response.data.data);
        console.log(response.data.data);
        setShowQrCode(true);
      } else {
        console.error("Failed to generate QR code:", response.data.message);
        setShowQrNotAvailable(true);
      }
    } catch (error) {
      console.error("Error generating QR code:", error);
      setShowQrNotAvailable(true);
    } finally {
      setQrLoading(false);
    }
  };

  return (
    <div className="relative bg-gradient-to-r from-[#211E3F] to-black text-white overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-purple-900/30 via-purple-950/10 to-transparent pointer-events-none"></div>

      <Header onBackToHome={onBackToHome} />

      {/* Main Content */}
      <div className="relative z-10 pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Loading State */}
          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-purple-400"></div>
              <p className="text-gray-400 mt-4">Loading team data...</p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          {/* Dashboard Header */}
          {!loading &&
            !error &&
            teamData && ( // Added check for teamData
              <>
                <div className="text-center space-y-3 mb-8">
                  <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                    Team Dashboard
                  </h1>
                  <p className="text-gray-300 text-lg">
                    Your team details and management
                  </p>
                </div>

                {/* Team Name & Code Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Team Name Card */}
                  <div className="bg-white/10 backdrop-blur-md border-2 border-purple-500/30 text-white rounded-xl shadow-xl overflow-hidden">
                    <div className="p-6 border-b border-gray-800">
                      <h3 className="flex items-center gap-2 text-xl font-semibold">
                        <Hash className="h-5 w-5 text-purple-400" />
                        Team Name
                      </h3>
                    </div>
                    <div className="p-6">
                      <div className="px-4 py-4 bg-black border-2 border-gray-700/50 rounded-lg">
                        <p className="text-white font-medium text-2xl">
                          {teamData.name || "TeamTulls"}
                        </p>
                      </div>
                      <p className="text-xs text-gray-400 mt-3">
                        Your team name
                      </p>
                    </div>
                  </div>

                  {/* Team Code Card - conditionally rendered */}
                  {isCurrentUserLeader() ? (
                    <div className="bg-gradient-to-br from-purple-900/40 to-violet-900/20 border-2 border-purple-500/50 text-white rounded-xl shadow-xl overflow-hidden">
                      <div className="p-6 border-b border-purple-500/30">
                        <h3 className="flex items-center gap-2 text-xl font-semibold">
                          <Copy className="h-5 w-5 text-purple-400" />
                          Team Code
                        </h3>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between bg-black/40 px-6 py-4 rounded-lg border border-purple-500/30">
                          <span className="text-3xl font-bold text-purple-400 tracking-widest">
                            {teamData.code}
                          </span>
                          <button
                            onClick={handleCopyTeamCode}
                            aria-label="Copy team code"
                            className="flex items-center justify-center h-10 w-10 bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 rounded-full transition-colors"
                          >
                            {copied ? (
                              <span className="text-lg">✓</span>
                            ) : (
                              <Copy className="h-5 w-5" />
                            )}
                          </button>
                        </div>
                        <p className="text-xs text-gray-500 mt-3">
                          {copied
                            ? "Code copied to clipboard!"
                            : "Share this code to invite members"}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-gradient-to-br from-gray-900/40 to-gray-800/20 border-2 border-gray-500/50 text-white rounded-xl shadow-xl overflow-hidden">
                      <div className="p-6 border-b border-gray-500/30">
                        <h3 className="flex items-center gap-2 text-xl font-semibold">
                          <Copy className="h-5 w-5 text-gray-400" />
                          Team Code
                        </h3>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-center bg-black/40 px-6 py-8 rounded-lg border border-gray-500/30">
                          <div className="text-center">
                         
                            <p className="text-sm font-semibold text-gray-300">Ask Team Leader</p>
                            <p className="text-xs text-gray-500 mt-1">Only team leaders can view the code</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Attendance QR Code Card */}
                  <div className="bg-white/10 backdrop-blur-md border-2 border-purple-500/30 text-white rounded-xl shadow-xl overflow-hidden">
                    <div className="p-6 border-b border-gray-800">
                      <h3 className="flex items-center gap-2 text-xl font-semibold">
                        <QrCode className="h-5 w-5 text-purple-400" />
                        Attendance QR
                      </h3>
                    </div>
                    <div className="p-6">
                      <div className="text-center">
                        <button
                          onClick={handleGenerateQrCode}
                          disabled={qrLoading}
                          className="w-full py-3 bg-[#9700d1] hover:bg-[#b800ff] text-white font-semibold rounded-full shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {qrLoading ? "Generating..." : "Generate QR Code"}
                        </button>
                      </div>
                      <p className="text-xs text-gray-400 mt-3 text-center">
                        Generate QR code for attendance marking
                      </p>
                    </div>
                  </div>
                </div>

                {/* Team Details Section */}
                <div className="bg-white/10 backdrop-blur-md border-2 border-purple-500/30 text-white rounded-xl shadow-xl overflow-hidden">
                  <div className="p-6 border-b border-gray-800">
                    <h3 className="text-2xl font-bold text-gray-100">
                      Team Details
                    </h3>
                  </div>
                  <div className="p-6 space-y-6">
                    {/* Your Details */}
             <div className="p-6 bg-gradient-to-br from-purple-900/20 to-violet-900/20 rounded-xl border-2 border-purple-500/50">

  {/* Top Row: Title + Edit Icon */}
  <div className="flex items-center justify-between mb-4">
    <div className="flex items-center gap-3">
      <Crown className="h-6 w-6 text-yellow-400" />
      <h3 className="text-lg font-bold text-white">Your Details</h3>
    </div>

    <button
      onClick={handleEditProfile}
      className="p-2 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 transition-colors"
    >
      <Pencil className="h-4 w-4" />
    </button>
  </div>

  {/* Info Grid */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div className="space-y-1">
      <p className="text-xs text-gray-400">Name</p>
      <p className="text-sm font-semibold text-white">
        {userLoading ? "Loading..." : currentUser?.name || "N/A"}
      </p>
    </div>
    <div className="space-y-1">
      <p className="text-xs text-gray-400">Year</p>
      <p className="text-sm font-semibold text-white">
        {userLoading ? "Loading..." : currentUser?.year || "N/A"}
      </p>
    </div>
    <div className="space-y-1">
      <p className="text-xs text-gray-400">Roll No.</p>
      <p className="text-sm font-semibold text-white">
        {userLoading ? "Loading..." : currentUser?.rollNo || "N/A"}
      </p>
    </div>
    <div className="space-y-1">
      <p className="text-xs text-gray-400">Gender</p>
      <p className="text-sm font-semibold text-white">
        {userLoading ? "Loading..." : currentUser?.gender || "N/A"}
      </p>
    </div>
  </div>
</div>


                    {/* Team Members */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <UserCircle2 className="h-6 w-6 text-purple-400" />
                        <h3 className="text-lg font-bold text-white">
                          Team Members ({teamData.members?.length || 0}/4)
                        </h3>
                      </div>

                      {!teamData.members || teamData.members.length === 0 ? (
                        <div className="text-center py-8 bg-black/40 rounded-xl border border-white/20">
                          <UserCircle2 className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                          <p className="text-white">No members yet</p>
                          <p className="text-gray-400 text-sm mt-1">
                            Share your team code to invite members
                          </p>
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {teamData.members.map((member) => (
                         <div
  key={member.id}
  className="
    relative rounded-xl p-5
    bg-black border border-white/10
    hover:border-purple-500/40
    transition-all duration-300 group
  "
>
  {/* Top Banner */}
  <div
    className={`
      w-full text-center py-1 text-[10px] font-semibold uppercase tracking-wide
      
      ${member.role === "LEADER"
  ? "bg-yellow-400/30 text-yellow-100 backdrop-blur-md border border-yellow-300/40"
  : "bg-purple-500/10 text-purple-200 backdrop-blur-md border border-purple-400/20"
}

    `}
  >
    {member.role === "LEADER" ? "Leader" : "Member"}
  </div>

  {/* Remove Button */}
  {member.role !== "LEADER" && isCurrentUserLeader() && (
    <button
      onClick={() => handleRemoveClick(member)}
      aria-label={`Remove ${member.name}`}
      className="
        absolute top-3 right-3 flex items-center justify-center 
        h-8 w-8 rounded-full
        text-gray-400 hover:text-white 
         hover:bg-red-600
        opacity-0 group-hover:opacity-100 
        transition-all duration-300
      "
    >
      <X className="h-4 w-4" />
    </button>
  )}

  {/* Placeholder for non-leaders */}
  {member.role !== "LEADER" && !isCurrentUserLeader() && (
    <button
      disabled
      className="
        absolute top-3 right-3 flex items-center justify-center 
        h-8 w-8 rounded-full
        text-gray-600 cursor-not-allowed
        opacity-0 group-hover:opacity-100 
        transition-all duration-300
      "
      title="Only team leaders can remove members"
    >
      <X className="h-4 w-4" />
    </button>
  )}

  {/* Content */}
  <div className="grid grid-cols-2 gap-3 text-sm mt-3">
    <div>
      <p className="text-xs text-gray-400">Name</p>
      <p className="font-semibold text-white">{member.name}</p>
    </div>
    <div>
      <p className="text-xs text-gray-400">Year</p>
      <p className="font-semibold text-white">{member.year}</p>
    </div>
    <div>
      <p className="text-xs text-gray-400">Library ID</p>
      <p className="font-semibold text-white">{member.rollNo}</p>
    </div>
    <div>
      <p className="text-xs text-gray-400">Gender</p>
      <p className="font-semibold text-white">{member.gender}</p>
    </div>
  </div>
</div>

                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </>
            )}
        </div>
      </div>

      {/* Confirmation Modal */}
      {memberToRemove && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-xl p-6 max-w-sm w-full space-y-4">
            <h3 className="text-lg font-semibold text-white">
              Confirm Removal
            </h3>
            <p className="text-gray-300">
              Are you sure you want to remove{" "}
              <span className="font-bold text-purple-400">
                {memberToRemove.name}
              </span>{" "}
              from the team?
            </p>
            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={cancelRemove}
                className="px-4 py-2 text-sm font-medium text-white bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmRemove}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      )}

      {/* QR Code Modal */}
      {showQrCode && qrCodeData && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-xl p-6 max-w-md w-full space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-white">
                Attendance QR Code
              </h3>
              <button
                onClick={() => setShowQrCode(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex justify-center">
              <div className="bg-white p-4 rounded-lg">
                <img
                  src={
                    qrCodeData.qrCloudUrl ||
                    `http://localhost:3003/api/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
                      qrCodeData.qrCloudUrl || "QR Code Data"
                    )}`
                  }
                  alt="Attendance QR Code"
                  className="w-48 h-48"
                />
              </div>
            </div>
            <p className="text-gray-300 text-center text-sm">
              Your attendance will be marked using this QR code.
            </p>
          </div>
        </div>
      )}

      {/* QR Not Available Modal */}
      {showQrNotAvailable && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white/5 backdrop-blur-xl border-2 border-purple-500/30 rounded-xl shadow-xl p-6 max-w-md w-full space-y-4">
            <div className="flex justify-center items-center w-full">
              <h3 className="text-lg font-semibold text-white text-center">
                QR Code Not Available
              </h3>
            
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <QrCode className="w-8 h-8 text-[#9700d1]" />
              </div>
              <p className="text-gray-300 text-center">
                QR code will be available on the day of the event.
              </p>
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => setShowQrNotAvailable(false)}
                className="bg-[#9700d1] text-white font-semibold py-2 px-6 rounded-xl transition-all duration-200"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Profile Modal */}
      {showEditProfile && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white/5 backdrop-blur-xl border-2 border-purple-500/30 rounded-xl shadow-xl p-6 max-w-md w-full space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-white">
                Edit Profile
              </h3>
              <button
                onClick={() => {
                  setShowEditProfile(false);
                  console.log(editFormData);
                }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <form onSubmit={handleEditSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">Name</label>
                <input
                  type="text"
                  value={editFormData.name}
                  onChange={(e) => handleEditChange("name", e.target.value)}
                  className="w-full px-3 py-2 bg-black/40 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Roll Number</label>
                <input
                  type="text"
                  value={editFormData.rollNo}
                  onChange={(e) => handleEditChange("rollNo", e.target.value)}
                  className="w-full px-3 py-2 bg-black/40 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">College</label>
                <input
                  type="text"
                  value={editFormData.college}
                  onChange={(e) => handleEditChange("college", e.target.value)}
                  className="w-full px-3 py-2 bg-black/40 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                  required
                />
              </div>
              <div className="flex justify-end gap-3 pt-4">

                <button
                  type="submit"
                  disabled={editLoading}
                  className="px-4 py-2 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-full transition-colors disabled:opacity-50"
                >
                  {editLoading ? "Updating..." : "Update"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

// FIX: Added prop-types validation
TeamDetailsPage.propTypes = {
  /**
   * The team data object. Can be null during loading.
   */
  teamData: PropTypes.shape({
    name: PropTypes.string, // Optional, has fallback
    code: PropTypes.string.isRequired,
    leader: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      year: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      rollNo: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      libraryId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      college: PropTypes.string,
      gender: PropTypes.string.isRequired,
    }).isRequired, // This object is required if teamData is present
    members: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
        name: PropTypes.string.isRequired,
        year: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
        rollNo: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
        gender: PropTypes.string.isRequired,
      })
    ), // members array is optional
  }),
  /**
   * Function to handle navigation back
   */
  onBackToHome: PropTypes.func.isRequired,
  /**
   * Function to handle removing a team member
   */
  onRemoveMember: PropTypes.func.isRequired,
  /**
   * Function to handle profile update
   */
  onProfileUpdate: PropTypes.func,
  /**
   * Loading state flag
   */
  loading: PropTypes.bool,
  /**
   * Error message string
   */
  error: PropTypes.string,
};
