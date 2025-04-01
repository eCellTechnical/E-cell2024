import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { toast } from "react-toastify";

export default function TeamManagementPopup({ teamId, isOpen, onClose, onTeamJoined }) {
  const [team, setTeam] = useState(null);
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [teamCode, setTeamCode] = useState("");
  const [isLeader, setIsLeader] = useState(false);
  const [showTeamCode, setShowTeamCode] = useState(false);
  const [joinTeamCode, setJoinTeamCode] = useState("");
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [joiningTeam, setJoiningTeam] = useState(false);

  TeamManagementPopup.propTypes = {
    teamId: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onTeamJoined: PropTypes.func,
  };

  useEffect(() => {
    if (isOpen && teamId) {
      fetchTeamData();
    }
  }, [isOpen, teamId]);

  const fetchTeamData = async () => {
    setLoading(true);
    const token = localStorage.getItem("token");
    
    if (!token) {
      toast.error("You must be logged in");
      onClose();
      return;
    }
    
    try {
      const teamResponse = await axios.get(`http://localhost:5000/api/v1/teams/${teamId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      if (teamResponse.data.success) {
        const teamData = teamResponse.data.data.team;
        setTeam(teamData);
        setTeamCode(teamData.teamCode);
        
        const userId = localStorage.getItem("userId");
        setIsLeader(teamData.leaderId === userId);
        
        const membersResponse = await axios.post(
          "http://localhost:5000/api/v1/team/members", 
          { teamId },
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );
        
        if (membersResponse.data.success) {
          const memberIds = membersResponse.data.data.members.map(member => member.userId);
          
          const userDetailsPromises = memberIds.map(userId => 
            axios.get(`http://localhost:5000/api/v1/users/${userId}`, {
              headers: {
                Authorization: `Bearer ${token}`
              }
            })
          );
          
          const userResponses = await Promise.all(userDetailsPromises);
          
          const membersWithDetails = membersResponse.data.data.members.map((member, index) => {
            const userResponse = userResponses[index];
            return {
              ...member,
              user: userResponse.data.success ? userResponse.data.data.user : null
            };
          });
          
          setMembers(membersWithDetails);
        }
      }
    } catch (error) {
      const errorMsg = error.response?.data?.message || "Failed to fetch team data";
      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const handleJoinTeam = async () => {
    if (!joinTeamCode.trim()) {
      toast.error("Please enter a team code");
      return;
    }
    
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    
    if (!token || !userId) {
      toast.error("You must be logged in");
      return;
    }
    
    try {
      setJoiningTeam(true);
      const response = await axios.post(
        "http://localhost:5000/api/v1/joinTeam",
        {
          userId,
          teamCode: joinTeamCode.trim()
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      
      if (response.data.success) {
        toast.success(response.data.message || "Successfully joined the team!");
        setShowJoinModal(false);
        setJoinTeamCode("");
        
        // If the team joined is the current team, refresh the data
        if (response.data.data.team._id === teamId) {
          fetchTeamData();
        } else if (onTeamJoined && typeof onTeamJoined === 'function') {
          // Notify parent component that a new team was joined
          onTeamJoined(response.data.data.team);
        }
      }
    } catch (error) {
      const errorMsg = error.response?.data?.message || "Failed to join team";
      toast.error(errorMsg);
    } finally {
      setJoiningTeam(false);
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const copyTeamCode = () => {
    navigator.clipboard.writeText(teamCode);
    toast.info("Team code copied to clipboard!");
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-gray-900 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center p-6 border-b border-gray-800">
          <h2 className="text-2xl font-bold text-[#00f8bd]">
            {loading ? "Loading Team..." : `Team: ${team?.teamName}`}
          </h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-6">
          {loading ? (
            <div className="flex justify-center py-8">
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-[#00f8bd]"></div>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Team Information</h3>
                  {isLeader && (
                    <div className="inline-block bg-[#007827] text-white px-3 py-1 rounded-full text-xs font-medium">
                      Team Leader
                    </div>
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <p className="text-gray-400 text-sm">Event</p>
                    <p className="font-medium">{team?.eventId?.name || "N/A"}</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <p className="text-gray-400 text-sm">Status</p>
                    <p className="font-medium">
                      {team?.isVerified ? (
                        <span className="text-green-400">Verified</span>
                      ) : (
                        <span className="text-yellow-400">Pending Verification</span>
                      )}
                    </p>
                  </div>
                </div>
                
                {isLeader && team?.teamCode && (
                  <div className="bg-gray-800 p-4 rounded-lg mb-4">
                    <div className="flex justify-between items-center">
                      <p className="text-gray-400 text-sm">Team Invite Code</p>
                      <button 
                        onClick={() => setShowTeamCode(!showTeamCode)}
                        className="text-xs text-[#00f8bd] hover:underline"
                      >
                        {showTeamCode ? "Hide" : "Show"} Code
                      </button>
                    </div>
                    {showTeamCode && (
                      <div className="mt-2 flex items-center">
                        <div className="bg-gray-700 px-4 py-2 rounded-l-lg font-mono font-bold">
                          {team.teamCode}
                        </div>
                        <button 
                          onClick={copyTeamCode}
                          className="bg-[#007827] px-3 py-2 rounded-r-lg hover:bg-[#00582d]"
                          title="Copy code"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                          </svg>
                        </button>
                      </div>
                    )}
                    <p className="text-gray-400 text-xs mt-2">
                      Share this code with teammates so they can join your team
                    </p>
                  </div>
                )}
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">Team Members</h3>
                  <div className="text-gray-400 text-sm">
                    {members.length} member{members.length !== 1 ? 's' : ''}
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  {members.map((member, index) => (
                    <div key={index} className="bg-gray-800 p-4 rounded-lg flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#00f699] to-[#00f8bd] flex items-center justify-center text-[#007827] text-sm font-bold">
                          {member.user?.name ? member.user.name.charAt(0).toUpperCase() : "?"}
                        </div>
                        <div className="ml-3">
                          <p className="font-medium">{member.user?.name || "Unknown User"}</p>
                          <p className="text-gray-400 text-sm">{member.user?.email || "No email available"}</p>
                        </div>
                      </div>
                      <div className="bg-gray-700 text-xs px-2 py-1 rounded">
                        {member.role === "LEADER" ? "Leader" : "Member"}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-center mt-6">
                  <button
                    onClick={() => setShowJoinModal(true)}
                    className="bg-transparent border border-[#00f8bd] text-[#00f8bd] px-6 py-2 rounded-full hover:bg-[#00f8bd] hover:text-[#007827] transition-colors"
                  >
                    Join Another Team
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      
      {showJoinModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setShowJoinModal(false)}
        >
          <div 
            className="bg-gray-900 rounded-xl w-full max-w-md p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold text-[#00f8bd] mb-4">Join a Team</h3>
            <p className="text-gray-400 mb-4">Enter the team code shared by your team leader</p>
            
            <div className="mb-4">
              <input
                type="text"
                value={joinTeamCode}
                onChange={(e) => setJoinTeamCode(e.target.value)}
                placeholder="Enter team code (e.g. AB12CD)"
                className="w-full p-3 rounded-lg border border-gray-700 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#00f8bd] text-white"
              />
            </div>
            
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowJoinModal(false)}
                className="px-4 py-2 rounded-full text-gray-400 hover:text-white"
                disabled={joiningTeam}
              >
                Cancel
              </button>
              <button
                onClick={handleJoinTeam}
                className={`${joiningTeam ? 'bg-gray-600' : 'bg-[#007827] hover:bg-[#00582d]'} text-white px-6 py-2 rounded-full transition-colors flex items-center justify-center`}
                disabled={joiningTeam}
              >
                {joiningTeam ? (
                  <>
                    <span className="animate-spin h-4 w-4 mr-2 border-t-2 border-b-2 border-white rounded-full"></span>
                    Joining...
                  </>
                ) : (
                  'Join Team'
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}