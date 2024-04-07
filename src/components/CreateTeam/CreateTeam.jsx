import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
function CreateTeam() {
  const { register, handleSubmit } = useForm();
  const [event, setEvent] = useState();
  const [disable, setDisable] = useState(false);

  const createteamsubmit = async (data) => {
    setDisable(true);
    const teamMembers = [
      data.teammember1 || "",
      data.teammember2 || "",
      data.teammember3 || "",
      data.teammember4 || "",
    ];

    const filteredData = teamMembers.filter((member) => member.length > 0);
    console.log(filteredData);
    try {
      const response = await axios.post(
        `https://e-cell2024backend-production.up.railway.app/admin/create-team`,
        {
          filteredData,
          teamName: data.teamname,
          leaderName: data.leadername,
          eventId: data.eventId,
        }
      );
      if (response.data === "Team Created Successfully") {
        alert(response.data);
      } else if (
        response.data === "User Not Exists" ||
        response.data === "Error, Please Try again after sometime"
      ) {
        alert("Error, Please Try again after sometime");
      }
    } catch (error) {
      alert("Error, Please Try again after sometime");
    }
    setDisable(false);
  };

  const selectevent = async (data) => {
    setDisable(true);
    try {
      const response = await axios.post(
        `https://e-cell2024backend-production.up.railway.app/admin/fetch-event`,
        { eventId: data.eventId }
      );
      if (response.data.msg == "Exists") {
        setEvent(response.data.event);
      } else {
        alert("Event Not Exists");
      }
    } catch (e) {
      alert("Error fetching Event:");
    }
    setDisable(false);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="font-bold text-4xl underline mb-8">Create Team</h1>
      <form
        onSubmit={handleSubmit(selectevent)}
        className="flex flex-col w-[60%]"
      >
        <label htmlFor="eventmm" className="font-semibold text-gray-700">
          Select Event:
        </label>
        <select
          {...register("eventId")}
          className="bg-transparent border-2 border-black rounded-md p-2 font-semibold focus:outline-none"
        >
          <option value="65f7033109b431537383fb95">Sample Event</option>
          <option value="65f74e33a298c3e1b3a7872e">Sample Event 2</option>
          <option value="65fb1f0b174e4e7ed69da1a3">Sample Event 4</option>
        </select>
        <button
          type="submit"
          className="px-3 py-2 bg-blue-300 mt-3 rounded-lg font-semibold disabled:bg-blue-100 z-10"
          disabled={disable}
        >
          Submit
        </button>
      </form>

      <div className="flex flex-col w-[60%] justify-center items-center">
        {event && (
          <>
            <h1 className="text-xl font-bold mt-5 mb-5">
              Payment To Be Taken{" "}
              <span className=" text-red-600">
                {event.price} {event.price !== "Free" && "Rs"}
              </span>
            </h1>
            <form
              onSubmit={handleSubmit(createteamsubmit)}
              className="flex flex-col justify-center items-center w-full"
            >
              <div className="flex flex-col w-full">
                <label
                  htmlFor="teamname"
                  className="font-semibold text-gray-700"
                >
                  Team Name:
                </label>
                <input
                  className="bg-transparent font-semibold border-2 border-black rounded-lg p-2 focus:outline-none"
                  type="text"
                  name="teamname"
                  id="teamname"
                  {...register("teamname")}
                />
              </div>
              <div className="flex flex-col w-full mt-2">
                <label
                  htmlFor="leadername"
                  className="font-semibold text-gray-700"
                >
                  leader Name:
                </label>
                <input
                  className="bg-transparent font-semibold border-2 border-black rounded-lg p-2 focus:outline-none"
                  type="text"
                  name="leadername"
                  id="leadername"
                  {...register("leadername")}
                />
              </div>
              <div className="flex flex-col w-full mt-2">
                <label
                  htmlFor="eventid"
                  className="font-semibold text-gray-700"
                >
                  Event Id:
                </label>
                <input
                  className="bg-transparent font-semibold border-2 border-black rounded-lg p-2 focus:outline-none"
                  type="text"
                  name="eventid"
                  id="eventid"
                  {...register("eventid")}
                  defaultValue={event._id}
                />
              </div>

              {[...Array(event.teamSize - 1 || 0)]?.map((_, index) => (
                <div key={index + 1} className="flex flex-col w-full mt-2">
                  <label
                    htmlFor={`teammember${index + 1}`}
                    className="font-semibold text-gray-700"
                  >
                    Team members {`${index + 1}`} Id
                  </label>
                  <input
                    className="bg-transparent font-semibold border-2 border-black rounded-lg p-2 focus:outline-none"
                    type="text"
                    name={`teammember${index + 1}`}
                    id={`teammember${index + 1}`}
                    {...register(`teammember${index + 1}`)}
                  />
                </div>
              ))}
              <button
                type="submit"
                className="px-3 py-2 bg-blue-300 mt-3 rounded-lg font-semibold disabled:bg-blue-100 z-10"
                disabled={disable}
              >
                Create Team
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default CreateTeam;
