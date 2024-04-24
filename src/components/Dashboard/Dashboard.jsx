import { useEffect, useState } from "react";
import axios from "axios";
function Dashboard() {
  const [totalRegistrations, setTotalRegistrations] = useState(0);
  const [eventWiseCount, setEventWiseCount] = useState();
  const [totalRegistrationsPaid, setTotalRegistrationsPaid] = useState();
  const [totalRegistrationsUnPaid, setTotalRegistrationsUnPaid] = useState();
  const [eveRegistrations, setEveRegistrations] = useState();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://e-cell2024backend-production.up.railway.app/admin/admin-dashboard`
        );
        if (response.data) {
          setTotalRegistrations(response.data.totalRegistrations);
          setEventWiseCount(response.data.eventWiseCount);
          setTotalRegistrationsPaid(response.data.totalRegistrationsPaid);
          setTotalRegistrationsUnPaid(response.data.totalRegistrationsUnPaid);
          setEveRegistrations(response.data.eveRegistrations);
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
        <div>
          <p>total</p>
          <p className="text-2xl font-medium">{totalRegistrations}</p>
        </div>
        <div>
          <p>Paid</p>
          <p className="text-2xl font-medium">{totalRegistrationsPaid}</p>
        </div>
        <div>
          <p>UnPaid</p>
          <p className="text-2xl font-medium">{totalRegistrationsUnPaid}</p>
        </div>
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
      <div>
        <h2 className="font-bold text-2xl mt-5">
          Entertainment Eve Registration
        </h2>
      </div>
      <div className="flex flex-wrap mt-5 gap-8">
        {eveRegistrations && (
          <div className="flex flex-col bg-blue-300 justify-between items-center  py-5 px-5 rounded-xl">
            <h2 className="font-semibold mb-2">Entertainment Eve</h2>
            <p className="font-medium">{eveRegistrations}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
