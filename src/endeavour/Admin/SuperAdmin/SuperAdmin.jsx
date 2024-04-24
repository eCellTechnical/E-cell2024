import { useEffect, useState, lazy, Suspense } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Dashboard = lazy(() => import("../../../components/Dashboard/Dashboard"));
const CreateTeam = lazy(() =>
  import("../../../components/CreateTeam/CreateTeam")
);
const EditTeam = lazy(() => import("../../../components/EditTeam/EditTeam"));
const EditUser = lazy(() => import("../../../components/EditUser/EditUser"));
const PaymentDashboard = lazy(() =>
  import("../../../components/PaymentDashboard/PaymentDashboard")
);

import axios from "axios";

function SuperAdmin() {
  const history = useNavigate();
  const [isSuperAdmin, setIsSuperAdmin] = useState(0);
  const [section, setSection] = useState(0);
  const { superAdmin } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.post(
        `https://e-cell2024backend-production.up.railway.app/admin/is-authorised`,
        { adminId: superAdmin }
      );
      if (res.data == false) {
        history("/endeavour");
        alert("Don't be over smart :)");
      }
      setIsSuperAdmin(1);
    };

    fetchData();
  });

  return (
    <div className="pt-[14vh]  flex text-black bg-white  min-h-[100vh]">
      <div className="flex flex-col w-[25%] bg-white drop-shadow-xl">
        {isSuperAdmin ? (
          <div className="flex flex-col p-2">
            <button
              onClick={() => setSection(0)}
              className="px-3 py-2 bg-gray-300 mt-3 rounded-lg font-semibold mb-2 z-10"
            >
              Dashboard
            </button>
            <button
              onClick={() => setSection(1)}
              className="px-3 py-2 bg-gray-300 mt-3 rounded-lg font-semibold mb-2 z-10"
            >
              Payments
            </button>
            <button
              onClick={() => setSection(2)}
              className="px-3 py-2 bg-gray-300 mt-3 rounded-lg font-semibold mb-2 z-10"
            >
              Create Team
            </button>
            <button
              onClick={() => setSection(3)}
              className="px-3 py-2 bg-gray-300 mt-3 rounded-lg font-semibold mb-2 z-10"
            >
              Edit Team
            </button>
            <button
              onClick={() => setSection(4)}
              className="px-3 py-2 bg-gray-300 mt-3 rounded-lg font-semibold z-10"
            >
              Edit User
            </button>
          </div>
        ) : (
          <button onClick={() => setSection(0)}>
            Don&apos;t be over smart :)
          </button>
        )}
      </div>
      {isSuperAdmin && (
        <div className="flex justify-center  w-full bg-slate-50 p-8">
          {section == 0 && (
            <Suspense fallback={<div>Loading...</div>}>
              <Dashboard />
            </Suspense>
          )}
          {section == 1 && (
            <Suspense fallback={<div>Loading...</div>}>
              <PaymentDashboard />
            </Suspense>
          )}
          {section == 2 && (
            <Suspense fallback={<div>Loading...</div>}>
              <CreateTeam />
            </Suspense>
          )}
          {section == 3 && (
            <Suspense fallback={<div>Loading...</div>}>
              <EditTeam />
            </Suspense>
          )}
          {section == 4 && (
            <Suspense fallback={<div>Loading...</div>}>
              <EditUser />
            </Suspense>
          )}
        </div>
      )}

      {!isSuperAdmin && (
        <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-white flex justify-center items-center">
          <h1 className="font-bold text-6xl">Don&apos;t be over smart :) </h1>
        </div>
      )}
    </div>
  );
}

export default SuperAdmin;
