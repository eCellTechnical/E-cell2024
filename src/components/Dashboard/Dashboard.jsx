import { useEffect, useState } from "react";
import axios from "axios";
function Dashboard() {
  const [totalRegistrations, setTotalRegistrations] = useState(0);
  const [eventWiseCount, setEventWiseCount] = useState();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://e-cell2024backend-production.up.railway.app/admin/admin-dashboard`
        );
        if (response.data) {
          setTotalRegistrations(response.data.totalRegistrations);
          setEventWiseCount(response.data.eventWiseCount);
        }
      } catch (error) {
        alert("Error fetching Event:");
      }
    }
    fetchData();
  }, []);
  return (
    <div className="w-full">
      <div className="flex bg-blue-300 justify-between items-center w-full py-5 px-5 rounded-xl">
        <h1 className="text-2xl font-bold">Total Registrations</h1>
        <p className="text-2xl font-medium">{totalRegistrations}</p>
      </div>
      <div>
        <h2 className="font-bold text-2xl mt-5">Event Wise Registration</h2>
      </div>
      <div className="flex flex-wrap mt-5 gap-8">
        {eventWiseCount &&
          Object.entries(eventWiseCount).map(([eventName, count]) => (
            <div
              className="flex flex-col bg-blue-300 justify-between items-center  py-5 px-5 rounded-xl"
              key={eventName}
            >
              <h2 className="font-semibold mb-2">{eventName}</h2>
              <p className="font-medium">{count}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Dashboard;
