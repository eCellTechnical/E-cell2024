import { useState, useEffect } from "react";
import axios from "axios";
// import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function ProfileRegisteredEvents() {
  const [loading, setLoading] = useState(true);
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    fetchRegisteredEvents();
  }, []);

  const fetchRegisteredEvents = async () => {
    setLoading(true);
    const userId = localStorage.getItem("userId");
    
    if (!userId) {
      setLoading(false);
      return;
    }
    
    try {
      const response = await axios.post(
        "https://two5-backend.onrender.com/api/v1/team/user/registered-events",
        { userId },
        { 
          headers: { 
            Authorization: `Bearer ${localStorage.getItem("token")}` 
          } 
        }
      );
      
      if (response.data.success) {
        setRegisteredEvents(response.data.data.teams);
      }
    } catch (error) {
      console.error("Error fetching registered events:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-gray-900 rounded-lg p-4 w-full">
        <h3 className="text-xl font-semibold text-[#00f8bd] mb-3">Registered Events</h3>
        <div className="text-gray-400">Loading...</div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 rounded-lg p-4 w-full">
      <h3 className="text-xl font-semibold text-[#00f8bd] mb-3">Registered Events</h3>
      
      {registeredEvents.length === 0 ? (
        <div className="text-gray-400 py-2">
          <p>You haven`t registered for any events yet.</p>
          <button 
            onClick={() => navigate("/events")} 
            className="mt-2 text-[#00f8bd] hover:underline text-sm"
          >
            Explore available events →
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {registeredEvents.map((team) => (
            <div 
              key={team._id} 
              className="border border-gray-800 rounded-lg p-3 hover:bg-gray-800 transition-colors cursor-pointer"
              onClick={() => navigate(`/event/${team.eventSlug}`)}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-white">
                    {team.eventId?.name || "Event Name Not Available"}
                  </h4>
                  <p className="text-sm text-gray-400 mt-1">
                    Team: {team.teamName} • Role: {team.leaderId === localStorage.getItem("userId") ? "Leader" : "Member"}
                  </p>
                </div>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/team/${team._id}`);
                  }}
                  className="text-xs bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded transition-colors"
                >
                  Team Details
                </button>
              </div>
            </div>
          ))}
          
          <button 
            onClick={() => navigate("/registered-events")} 
            className="block w-full text-center text-[#00f8bd] hover:underline text-sm py-1"
          >
            View all registered events →
          </button>
        </div>
      )}
    </div>
  );
}

export default ProfileRegisteredEvents;