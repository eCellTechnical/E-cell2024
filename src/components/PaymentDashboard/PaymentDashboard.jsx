import { useEffect, useState } from "react";
import axios from "axios";
function PaymentDashboard() {
  const [totalPayments, setTotalPayments] = useState(0);
  const [eventWisePayments, setEventWisePayments] = useState();
  const [eveRegistrations, setEveRegistrations] = useState();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://e-cell2024backend-production.up.railway.app/admin/payment-dashboard`
        );
        if (response.data) {
          setTotalPayments(response.data.totalPayments);
          setEventWisePayments(response.data.eventWisePayments);
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
        <h1 className="text-2xl font-bold">Total Collections(except eve)</h1>
        <p className="text-2xl font-medium">{totalPayments}</p>
      </div>
      <div>
        <h2 className="font-bold text-2xl mt-5">Event Wise Collections</h2>
      </div>
      <div className="flex flex-wrap mt-5 gap-8">
        {eventWisePayments &&
          Object.entries(eventWisePayments).map(([eventName, totalPayment]) => (
            <div
              className="flex flex-col bg-blue-300 justify-between items-center  py-5 px-5 rounded-xl"
              key={eventName}
            >
              <h2 className="font-semibold mb-2">{eventName}</h2>
              <p className="font-medium">{totalPayment}</p>
            </div>
          ))}
      </div>
      <div>
        <h2 className="font-bold text-2xl mt-5">Entertainment Eve Payments</h2>
      </div>
      <div className="flex flex-wrap mt-5 gap-8">
        {eveRegistrations && (
          <div className="flex flex-col bg-blue-300 justify-between items-center  py-5 px-5 rounded-xl">
            <h2 className="font-semibold mb-2">Entertainment Eve</h2>
            <p className="font-medium">{eveRegistrations * 250}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PaymentDashboard;
