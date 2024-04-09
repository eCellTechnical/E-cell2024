import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
function EditTeam() {
  const { register, handleSubmit } = useForm();
  const [found, setFound] = useState(0);
  const [teamName, setTeamName] = useState("");
  const [disable, setDisable] = useState(false);

  const searchTeam = async (data) => {
    setDisable(true);
    if (data.eventid == "not selected") {
      return alert("Select Event First");
    }
    try {
      const response = await axios.post(
        `https://e-cell2024backend-production.up.railway.app/admin/search-team`,
        { leaderId: data.leaderid, eventId: data.eventid }
      );
      if (response.data.msg == "Exists") {
        setFound(1);
        setTeamName(response.data.teamName);
      } else {
        setFound(0);
        alert("Invalid Credentials");
      }
    } catch (e) {
      alert("Error fetching Event:");
    }
    setDisable(false);
  };
  const deleteTeam = async (data) => {
    setDisable(true);
    try {
      const response = await axios.post(
        `https://e-cell2024backend-production.up.railway.app/admin/delete-team`,
        { leaderId: data.leaderid, eventId: data.eventid }
      );
      if (response.data.msg == "Team deleted successfully") {
        alert("Team deleted successfully");
      } else {
        alert("Some Error Try Again");
      }
    } catch (e) {
      alert("Error fetching Event:");
    }
    setDisable(false);
  };

  const eventsDetails = [
    { eventId: "6611852e883214b109d2e89e", eventName: "Market-Watch" },
    { eventId: "6611852e883214b109d2e89f", eventName: "B-Quiz" },
    { eventId: "6611852e883214b109d2e8a0", eventName: "B-Plan" },
    { eventId: "6611852e883214b109d2e8a1", eventName: "IPL Mania" },
    { eventId: "6611874dc1d2ef7cfdd0154b", eventName: "Movie-A-thon" },
    { eventId: "66118a00c6665db651249ee8", eventName: "E-Sports(BGMI)" },
    { eventId: "66126286c559174d3c6f41ae", eventName: "Treasure Hunt" },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="font-bold text-4xl underline mb-8">Edit Team</h1>
      <form
        onSubmit={handleSubmit(searchTeam)}
        className="flex flex-col w-[60%]"
      >
        <div className="flex flex-col w-full">
          <label htmlFor="leaderid" className="font-semibold text-gray-700">
            Leader Id:
          </label>
          <input
            className="bg-transparent font-semibold border-2 border-black rounded-lg p-2 focus:outline-none"
            type="text"
            name="leaderid"
            id="leaderid"
            {...register("leaderid")}
          />
        </div>
        <label htmlFor="eventmm" className="font-semibold text-gray-700 mt-4">
          Select Event:
        </label>
        <select
          {...register("eventid")}
          className="bg-transparent border-2 border-black rounded-md p-2  font-semibold focus:outline-none"
        >
          <option value="not selected">Select</option>
          {eventsDetails.map((event, index) => {
            return (
              <option key={index} className="flex" value={event.eventId}>
                {event.eventName}
              </option>
            );
          })}
        </select>
        <button
          type="submit"
          className="px-3 py-2 bg-blue-300 mt-3 rounded-lg font-semibold disabled:bg-blue-100 z-10"
          disabled={disable}
        >
          Submit
        </button>
      </form>

      <div className="flex flex-col w-[60%] justify-center items-center mt-5">
        {found ? (
          <>
            <h1 className="text-xl font-bold">Found It</h1>
            <p className="mt-2 text-lg font-semibold">
              Team Name :-{" "}
              <span className="font-medium text-blue-700">{teamName}</span>
            </p>
            <form onSubmit={handleSubmit(deleteTeam)}>
              <button
                type="submit"
                className="px-3 py-2 z-10 bg-blue-300 mt-3 rounded-lg font-semibold"
                disabled={disable}
              >
                Delete Team
              </button>
            </form>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default EditTeam;
