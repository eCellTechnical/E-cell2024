import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function RegisteredEvents() {
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
      toast.error("Please login to view your registered events");
      navigate("endeavour/login");
      return;
    }
    
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/team/user/registered-events",
        { userId },
        { 
          headers: { 
            Authorization: `Bearer ${localStorage.getItem("token")}` 
          }, 
          params: {
            userId: "67db09057770c82094111372"
          }
        }
      );
      
      if (response.data.success) {
        setRegisteredEvents(response.data.data.teams);
      } else {
        toast.error(response.data.message || "Failed to fetch events");
      }
    } catch (error) {
      const errorMsg = error.response?.data?.message || "Network error. Please try again later";
      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex justify-center items-center">
        <div className="text-xl">Loading your registered events...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white py-8 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-[#00f8bd] mb-6">Your Registered Events</h2>
      
      {registeredEvents.length === 0 ? (
        <div className="bg-gray-900 rounded-lg p-6 text-center">
          <p className="text-xl text-gray-400">You haven`t registered for any events yet</p>
          <button 
            onClick={() => navigate("/events")} 
            className="mt-4 bg-[#00f699] hover:bg-[#00f8bd] text-[#007827] font-bold rounded-full py-2 px-6 transition-colors"
          >
            Explore Events
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {registeredEvents.map((team) => (
            <div key={team._id} className="bg-gray-900 rounded-lg overflow-hidden">
              {team.eventId?.image && (
                <div className="h-40 overflow-hidden">
                  <img 
                    src={team.eventId.image} 
                    alt={team.eventId?.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#00f8bd] mb-2">
                  {team.eventId?.name || "Event Name Not Available"}
                </h3>
                
                <div className="text-gray-400 mb-4">
                  {team.eventId?.description?.substring(0, 100)}
                  {team.eventId?.description?.length > 100 ? "..." : ""}
                </div>
                
                <div className="mb-3">
                  <span className="text-gray-500">Team: </span>
                  <span className="font-semibold">{team.teamName}</span>
                </div>
                
                <div className="mb-3">
                  <span className="text-gray-500">Role: </span>
                  <span className="font-semibold">
                    {team.leaderId === localStorage.getItem("userId") ? "Team Leader" : "Team Member"}
                  </span>
                </div>
                
                {team.eventId?.startDate && team.eventId?.endDate && (
                  <div className="mb-3">
                    <span className="text-gray-500">Date: </span>
                    <span className="font-semibold">
                      {new Date(team.eventId.startDate).toLocaleDateString()} - {new Date(team.eventId.endDate).toLocaleDateString()}
                    </span>
                  </div>
                )}
                
                {team.eventId?.venue && (
                  <div className="mb-3">
                    <span className="text-gray-500">Venue: </span>
                    <span className="font-semibold">{team.eventId.venue}</span>
                  </div>
                )}
                
                <div className="flex justify-between mt-4">
                  <button 
                    onClick={() => navigate(`/event/${team.eventSlug}`)} 
                    className="bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-full py-2 px-4 text-sm transition-colors"
                  >
                    Event Details
                  </button>
                  
                  <button 
                    onClick={() => navigate(`/team/${team._id}`)} 
                    className="bg-[#00f699] hover:bg-[#00f8bd] text-[#007827] font-medium rounded-full py-2 px-4 text-sm transition-colors"
                  >
                    Team Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RegisteredEvents;