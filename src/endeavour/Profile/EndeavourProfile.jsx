import axios from "axios";
import { useEffect, useState, useCallback, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import profileIconw from "../../assets/navbar/Endeavour/icons8-male-user-100 (1).png";
import profileIconb from "../../assets/navbar/Endeavour/icons8-male-user-100 (2).png";

import editw from "../../assets/Profile/icons8-edit-64 (1).png";
import editb from "../../assets/Profile/icons8-edit-64.png";

import eventb from "../../assets/Profile/icons8-calendar-list-64.png";
import eventw from "../../assets/Profile/icons8-calendar-list-64 (1).png";

// import paymentb from "../../assets/Profile/icons8-exchange-rupee-64 (1).png";
// import paymentw from "../../assets/Profile/icons8-exchange-rupee-64.png";

import certb from "../../assets/Profile/certdark.png";
import certw from "../../assets/Profile/certlight.png";

import certt from "../../assets/Certificate_participants (1).png";
import { exportComponentAsPNG } from "react-component-export-image";

import "./EndeavourProfile.css";
// import { Link } from "react-router-dom";

function EndeavourProfile() {
  let certificateWrapper1 = useRef();
  let certificateWrapper2 = useRef();
  let certificateWrapper3 = useRef();
  let certificateWrapper4 = useRef();
  let certificateWrapper5 = useRef();
  let certificateWrapper6 = useRef();
  let certificateWrapper7 = useRef();

  const [getName, setGetName] = useState(true);
  const [fullName, setFullName] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [participatedEventNames, setParticipatedEventNames] = useState([]);

  const { register, handleSubmit } = useForm();
  const [disable, setDisable] = useState(true);
  const history = useNavigate();
  const [userInfo, setUserInfo] = useState([]);
  const [edit, setEdit] = useState(false);
  const [eventName, setEventName] = useState([]);
  const [eventNamePayment, setEventNamePayment] = useState([]);
  const [teamId, setTeamId] = useState([]);
  const [members, setMembers] = useState([]);

  const [paymentInfo, setPaymentInfo] = useState([]);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [college, setCollege] = useState("");
  const [course, setCourse] = useState("");
  const [year, setYear] = useState("");
  const [studentId, setStudentId] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  const [tab, setTab] = useState(0);
  const [copied, setCopied] = useState(0);

  const [addMember, setAddMember] = useState(0);
  const [memberId, setMemberId] = useState("");
  const [teamDetails, setTeamDetails] = useState();
  const [memberName, setMemberName] = useState("");

  const [eveInfo, setEveInfo] = useState();

  const isLeader = async (eventId) => {
    const response = await axios.get(
      `https://e-cell2024backend-production.up.railway.app/isLeader/${eventId}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    // teamDetails[0].teamSize - teamDetails[0].teamlength
    if (response.data.msg == "leader") {
      if (
        response.data.teamDetails[0].teamSize -
          response.data.teamDetails[0].teamlength ==
        0
      ) {
        return toast.warn("Team is Already full", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          theme: "colored",
        });
      }
      setAddMember(1);
      // console.log(response.data.teamDetails);
      setTeamDetails(response.data.teamDetails);
    } else if (response.data.msg == "not a leader") {
      toast.warn("Only Leader Can Add New Member", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "colored",
      });
    } else {
      toast.warn("Only Leader Can Add New Member", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "colored",
      });
    }
  };
  const handleAddTeamMember = async (data, e) => {
    // console.log(data);
    setDisable(true);
    return toast.warn("Adding members to the team is closed now", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      theme: "colored",
    });
    try {
      const response = await axios.post(
        `https://e-cell2024backend-production.up.railway.app/addMember`,
        {
          teammember: data.teammember,
          eventId: teamDetails[0].eventId,
          teamId: teamDetails[0].teamId,
        }
      );
      if (response.data.message == "Team not found") {
        toast.warn("Team not found", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          theme: "colored",
        });
      } else {
        toast.warn(response.data.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          theme: "colored",
        });
      }
    } catch {
      toast.error("Error Adding Member :(", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "colored",
      });
    }
    setAddMember(0);
    setDisable(false);
    setMemberName();
    e.target.reset();
  };

  const handleSearch = useCallback(
    async (memberId) => {
      if (memberId == localStorage.getItem("userId")) {
        return toast.warn("Can't add yourself as a member", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          theme: "colored",
        });
      }
      try {
        const response = await axios.post(
          `https://e-cell2024backend-production.up.railway.app/memberSearch`,
          { memberId, event: teamDetails[0].eventId }
        );
        const data = response.data;
        if (data === "Already In A Team") {
          toast.warn(`${memberId} Already Joined A Team`, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            theme: "colored",
          });
        } else if (data === "User Not Exists") {
          toast.warn("No user with this User ID exists", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            theme: "colored",
          });
        } else {
          setMemberName(data);
          setDisable(false);
          toast.success("Member found", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            theme: "colored",
          });
        }
      } catch (error) {
        toast.error("Error fetching user data  :(", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          theme: "colored",
        });
      }
    },
    [teamDetails]
  );

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://e-cell2024backend-production.up.railway.app/user-info`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.data.err) {
        toast.error(response.data.err, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          theme: "colored",
        });
        history("/endeavour");
      } else if (response.data.msg == "invalid token") {
        toast.error("Invalid token", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          theme: "colored",
        });
        history("/endeavour");
      }

      setEventName(response.data.eventl);
      setTeamId(response.data.teamIds);

      setUserInfo(response.data.user);
      setPhoneNumber(response.data.user.phoneNumber);
      setCollege(response.data.user.college);
      setCourse(response.data.user.course);
      setYear(response.data.user.year);
      setStudentId(response.data.user.studentId);
      setGender(response.data.user.gender);
      setCity(response.data.user.city);
    } catch (error) {
      toast.error("Error fetching profile :(", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "colored",
      });
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        `https://e-cell2024backend-production.up.railway.app/update-details/${localStorage.getItem(
          "userId"
        )}`,
        {
          phoneNumber,
          college,
          course,
          year,
          studentId,
          gender,
          city,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.data.err) {
        toast.error(response.data.err, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          theme: "colored",
        });
        history("/endeavour");
      } else if (response.data.msg == "invalid token") {
        toast.error("Invalid token", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          theme: "colored",
        });
        history("/endeavour");
      } else if (response.data == "Successfully Updated") {
        toast.success("Successfully Updated", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          theme: "colored",
        });
      }
    } catch (error) {
      toast.error("Bad network error,Please try again after sometime", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "colored",
      });
    }
    setEdit(false);
  };

  const editClicked = () => {
    setEdit((prev) => !prev);
  };

  const profileClicked = () => {
    setTab(0);
  };

  const registeredEventsClicked = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://e-cell2024backend-production.up.railway.app/registered-events`,
        {
          teamId,
        }
      );

      if (response.data.msg == "Not Registered in any Team") {
        setEventName("");
      }
      if (response.data.members) {
        setMembers(response.data.members);
        // console.log(response.data.members);
      }
    } catch (error) {
      toast.error("Bad network error,Please try again after sometime", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "colored",
      });
    }
    setTab(1);
  };

  const paymentClicked = async (e) => {
    try {
      const response = await axios.get(
        `https://e-cell2024backend-production.up.railway.app/payment-info/${localStorage.getItem(
          "userId"
        )}`
      );
      if (response.data.payment) {
        setPaymentInfo(response.data.payment);
        setEventNamePayment(response.data.eventname);
        setEveInfo(response.data.eveInfo);
      }
    } catch (error) {
      toast.error("Bad network error,Please try again after sometime", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "colored",
      });
    }
  };

  const certClicked = async () => {
    // e.preventDefault();

    try {
      const response = await axios.get(
        `https://e-cell2024backend-production.up.railway.app/cert-info/${localStorage.getItem(
          "userId"
        )}`
      );

      if (response.data.msg == "no") {
        setGetName(false);
      } else {
        setFullName(response.data.realName);
        setCollegeName(response.data.college);
        setParticipatedEventNames(response.data.participatedEventNames);
        setGetName(true);
      }
      setTab(2);
    } catch (error) {
      toast.error("Bad network error,Please try again after sometime", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "colored",
      });
    }
  };

  const certCreate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://e-cell2024backend-production.up.railway.app/cert-created/${localStorage.getItem(
          "userId"
        )}`,
        {
          fullName: fullName,
          collegeName: collegeName,
        }
      );
      toast.success("Successfully Submitted", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "colored",
      });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      toast.error("Bad network error,Please try again after sometime", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "colored",
      });
    }
  };

  return (
    <div className="w-full h-full text-black dark:text-white bg-white dark:bg-black">
      <div className="flex">
        <div
          className="pt-[16vh] 
        w-[30%] leftMenuBar bg-white dark:bg-black hidden md:flex flex-col justify-start pl-5 py-5  shadow-[-20px_-30px_50px_0_#8d8d8d] z-[0] h-[100vh]"
        >
          <button
            className={`text-xl font-semibold w-full text-left self-start cursor-pointer p-2 px-6 mb-5 ${
              tab === 0
                ? "bg-black dark:bg-white text-white dark:text-black transition-all ease-out w-full   flex rounded-[15px_0px_0px_15px]"
                : ""
            } `}
            onClick={profileClicked}
          >
            Profile
          </button>
          <button
            className={`text-xl font-semibold w-full text-left self-start p-2 px-6 mb-5 ${
              tab === 1
                ? "bg-black dark:bg-white text-white dark:text-black transition-all ease-out w-full    flex rounded-[15px_0px_0px_15px]"
                : ""
            } `}
            onClick={registeredEventsClicked}
          >
            Registered Events
          </button>
          <butto
            className={`text-xl font-semibold w-full text-left self-start cursor-pointer p-2 px-6 ${
              tab === 2
                ? "bg-black dark:bg-white text-white dark:text-black transition-all ease-out w-full flex rounded-[15px_0px_0px_15px]"
                : ""
            } `}
            onClick={certClicked}
          >
            Certificates
          </butto>
        </div>

        <div className="!fixed left-0 right-0 bottom-0 flex md:hidden bg-white dark:bg-black p-4 justify-around z-50">
          <div className="flex flex-col justify-center items-center">
            <img
              onClick={profileClicked}
              src={
                localStorage.getItem("theme") == "light"
                  ? profileIconb
                  : profileIconw
              }
              className="w-11 h-11"
              alt=""
            />
            <p>Profile</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              onClick={registeredEventsClicked}
              src={localStorage.getItem("theme") == "light" ? eventb : eventw}
              className="w-10 h-10"
              alt=""
            />
            <p>Registered Events</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              onClick={paymentClicked}
              src={localStorage.getItem("theme") == "light" ? certb : certw}
              className="w-10 h-10"
              alt=""
            />
            <p>Certificates</p>
          </div>
        </div>

        <div
          className={` ${
            (tab == 1 || tab == 2) && "hidden"
          } rightInfo w-[100%] flex flex-col   items-center min-h-[100vh]  md:py-11 mb-5 `}
        >
          <div className="flex pt-[13vh] flex-col md:flex-row items-center justify-center md:justify-normal mb-11 md:mb-8">
            <img
              src={
                localStorage.getItem("theme") == "light"
                  ? profileIconb
                  : profileIconw
              }
              className="w-20 h-20"
              alt=""
            />
            <div className="flex flex-col justify-center items-center md:ml-8">
              <h1 className="font-bold text-3xl text-[#4d55ba]">
                {userInfo.userName}
              </h1>
              <p className="text-md mt-2">
                <span className="font-semibold">Email - </span>
                {userInfo.email}
              </p>
              <p className="text-md mt-1">
                <span className={`font-semibold`}>UserId :</span>{" "}
                <span className={`${copied && " bg-blue-600"}`}>
                  {userInfo._id}
                </span>{" "}
                -{" "}
                <button
                  onClick={async () => {
                    await navigator.clipboard.writeText(userInfo._id);
                    setCopied(1);
                    setTimeout(() => {
                      setCopied(0);
                    }, 2000);
                  }}
                  className="border-[2px] border-[#4f4f4f] dark:border-[#fff] px-2 rounded-md font-medium text-black dark:text-white z-10"
                >
                  Copy
                </button>
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center w-[80%] md:w-[60%] mb-5">
            <div></div>
            <h2 className="text-3xl underline font-bold">Profile Info</h2>
            <button
              onClick={editClicked}
              className="border-[2px] z-10 border-black dark:border-[#a5a5a57e] rounded-md p-1"
            >
              <img
                src={localStorage.getItem("theme") == "light" ? editb : editw}
                className="w-5  h-5"
                alt=""
              />
            </button>
          </div>
          <div className="text-black dark:text-white w-full">
            <form
              onSubmit={submit}
              className="flex flex-col w-full justify-center items-center mt-4"
            >
              <div className="w-[80%] md:w-[60%] flex flex-col md:flex-row justify-between">
                <div className="flex flex-col w-full md:w-[48%]">
                  <label
                    htmlFor="phoneNumber"
                    className="font-bold text-gray-500 ml-2"
                  >
                    Phone Number:
                  </label>
                  <input
                    className={` ${
                      edit == 1
                        ? "border-black dark:border-white"
                        : "border-[#a5a5a57e]"
                    } border-2 border-[#a5a5a57e] bg-transparent rounded-lg p-2 w-full focus:outline-none font-medium`}
                    pattern="[6-9]{1}[0-9]{9}"
                    title="Phone Number should start with 6-9,and have 10 digits"
                    maxLength={10}
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={phoneNumber}
                    readOnly={edit == 0}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div className="flex flex-col w-full md:w-[48%] mt-2 md:mt-0">
                  <label
                    htmlFor="college"
                    className="font-bold text-gray-500 ml-2"
                  >
                    College:
                  </label>
                  <input
                    className={`${
                      edit == 1
                        ? "border-black dark:border-white"
                        : "border-[#a5a5a57e]"
                    } border-2 border-[#a5a5a57e] bg-transparent rounded-lg p-2 w-full focus:outline-none font-medium`}
                    type="text"
                    id="college"
                    name="college"
                    value={college}
                    readOnly={edit == 0}
                    onChange={(e) => setCollege(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-[80%] md:w-[60%] flex flex-col md:flex-row justify-between mt-2 md:mt-3">
                <div className="flex flex-col w-full md:w-[48%]">
                  <label
                    htmlFor="course"
                    className="font-bold text-gray-500 ml-2"
                  >
                    Course:
                  </label>
                  <input
                    className={`${
                      edit == 1
                        ? "border-black dark:border-white"
                        : "border-[#a5a5a57e]"
                    } border-2 border-[#a5a5a57e] bg-transparent  rounded-lg p-2 w-full focus:outline-none font-medium`}
                    type="text"
                    id="course"
                    name="course"
                    value={course}
                    readOnly={edit == 0}
                    onChange={(e) => setCourse(e.target.value)}
                  />
                </div>
                <div className="flex flex-col w-full md:w-[48%] mt-2 md:mt-0">
                  <label
                    htmlFor="year"
                    className="font-bold text-gray-500 ml-2"
                  >
                    Year:
                  </label>
                  <input
                    className={`${
                      edit == 1
                        ? "border-black dark:border-white"
                        : "border-[#a5a5a57e]"
                    } border-2 border-[#a5a5a57e] bg-transparent  rounded-lg p-2 w-full focus:outline-none font-medium`}
                    type="text"
                    id="year"
                    name="year"
                    value={year}
                    readOnly={edit == 0}
                    onChange={(e) => setYear(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-[80%] md:w-[60%] flex flex-col md:flex-row justify-between mt-2 md:mt-3">
                <div className="flex flex-col w-full md:w-[48%]">
                  <label
                    htmlFor="studentId"
                    className="font-bold text-gray-500 ml-2"
                  >
                    Student Id:
                  </label>
                  <input
                    className={`${
                      edit == 1
                        ? "border-black dark:border-white"
                        : "border-[#a5a5a57e]"
                    } border-2 border-[#a5a5a57e] bg-transparent  rounded-lg p-2 w-full focus:outline-none font-medium`}
                    type="text"
                    id="studentId"
                    name="studentId"
                    value={studentId}
                    readOnly={edit == 0}
                    onChange={(e) => setStudentId(e.target.value)}
                  />
                </div>
                <div className="flex flex-col w-full md:w-[48%] mt-2 md:mt-0">
                  <label
                    htmlFor="gender"
                    className="font-bold text-gray-500 ml-2"
                  >
                    Gender:
                  </label>
                  <input
                    className={` ${
                      edit == 1
                        ? "border-black dark:border-white"
                        : "border-[#a5a5a57e]"
                    } border-2 border-[#a5a5a57e] bg-transparent  rounded-lg p-2 w-full focus:outline-none font-medium`}
                    type="text"
                    id="gender"
                    name="gender"
                    value={gender}
                    readOnly={edit == 0}
                    onChange={(e) => setGender(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full flex justify-center mt-2 md:mt-3">
                <div className="flex flex-col w-[80%] md:w-[48%]">
                  <label
                    htmlFor="city"
                    className="font-bold text-gray-500 ml-2"
                  >
                    City:
                  </label>
                  <input
                    className={`${
                      edit == 1
                        ? "border-black dark:border-white"
                        : "border-[#a5a5a57e]"
                    } border-2 border-[#a5a5a57e] bg-transparent  rounded-lg p-2 w-full focus:outline-none font-medium`}
                    type="text"
                    id="city"
                    name="city"
                    value={city}
                    readOnly={edit == 0}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full flex justify-center mt-5 md:mt-6">
                <button
                  className={`${
                    edit ? "flex" : "hidden"
                  } border-4 border-[#7c85ff] rounded-lg w-[40%] md:w-[20%] bg-[#4d55ba] justify-center items-center z-10 py-2 font-semibold text-md text-white`}
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        <div
          className={`${
            !addMember && "hidden"
          } absolute top-0 left-0 right-0 bottom-0 w-full h-full flex justify-center items-center bg-[#0000005b] z-50`}
        >
          <form
            onSubmit={handleSubmit(handleAddTeamMember)}
            className={`${
              !addMember && "hidden"
            } bg-white dark:bg-[#000000] relative rounded-xl w-[90%] md:w-[70%] h-[80%] flex flex-col justify-center items-center overflow-scroll mt-5`}
          >
            <div className="flex text-black dark:text-white flex-col absolute top-0 justify-center items-center w-full pt-8 h-full">
              <div className="flex flex-row justify-between items-center w-[90%]">
                <p></p>
                <h1 className="text-2xl font-bold underline mb-3">
                  Add Member
                </h1>
                <p
                  onClick={() => setAddMember(0)}
                  className="font-bold text-xl cursor-pointer border-2 border-black dark:border-[#acacac] p-2 py-1 rounded-lg"
                >
                  X
                </p>
              </div>
              <div className="w-full flex flex-col justify-center items-center">
                {teamDetails &&
                  teamDetails[0].teamSize - teamDetails[0].teamlength > 0 &&
                  Array(1)
                    .fill(null)
                    .map((_, index) => (
                      <div
                        key={index}
                        className="w-full flex flex-col justify-center items-center"
                      >
                        <div className="flex flex-col w-[80%] md:w-[60%] mt-5">
                          <label
                            htmlFor={`teammember${index + 1}`}
                            className="font-semibold text-gray-600 dark:text-[#acacac]"
                          >
                            Team members Id
                          </label>
                          <input
                            className="p-2 bg-transparent border-2 border-black dark:border-[#dcdcdc] rounded-lg focus:outline-none font-semibold"
                            type="text"
                            name={`teammember${index + 1}`}
                            id={`teammember${index + 1}`}
                            {...register(`teammember`)}
                            onChange={(e) => setMemberId(e.target.value)}
                          />
                        </div>
                        <div className="flex flex-col w-[80%] md:w-[60%] mt-2">
                          <label
                            htmlFor={`readonlyValue-${index}`}
                            className="font-semibold text-gray-600 dark:text-[#acacac]"
                          >
                            Member Name:
                          </label>
                          <div className="w-full flex border-2 border-black dark:border-[#dcdcdc]  rounded-lg ">
                            <input
                              className="p-2 w-full bg-transparent focus:outline-none font-semibold "
                              type="text"
                              name="readonlyValue"
                              id={`readonlyValue`}
                              {...register(`readonlyValue`)}
                              value={memberName}
                              readOnly
                            />
                            <button
                              className="p-2 z-50 font-semibold text-gray-600 cursor-zoom-in dark:text-[#acacac]"
                              onClick={(e) => {
                                e.preventDefault();
                                handleSearch(memberId);
                              }}
                            >
                              Search
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                <button
                  type="submit"
                  className="z-50 mt-5 border-2 p-2 cursor-pointer border-[#7982ff] bg-[#4d55ba] text-white rounded-md py-2 w-[50%] md:w-[30%] font-bold text-md disabled:bg-[#a7acfff2] disabled:cursor-not-allowed"
                  disabled={disable}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>

        <div
          className={`${
            (tab == 0 || tab == 2) && "hidden"
          } flex w-full flex-col justify-start items-center pb-8 md:py-11 min-h-[100vh]`}
        >
          <div className="w-full pt-[13vh] text-center">
            <h1 className="text-4xl font-bold underline">Registered Event</h1>
          </div>
          <div className="w-full flex justify-center items-center">
            {eventName ? (
              <div className="flex flex-wrap w-full justify-around mt-5 md:mt-11 mb-8 p-8 md:p-8">
                {eventName.map((event) => (
                  <div
                    key={event.eventId}
                    className="p-5 w-[80%] md:w-[30%] px-11 shadow-2xl rounded-lg flex flex-col bg-[#9ea4ff] justify-center items-center mb-5 border-white border-4 text-center text-black"
                  >
                    <h2 className="text-2xl font-semibold ">
                      {event.eventName}
                    </h2>
                    <ul className="mt-3">
                      {members
                        .filter((member) =>
                          member.events.some((e) => e.eventId === event.eventId)
                        )
                        .map((member, index) => (
                          <li
                            key={member._id.toString()}
                            className="text-[1.1em]"
                          >
                            <span className="font-medium">
                              {index + 1 + "." + " "}
                            </span>
                            {member.userName.charAt(0).toUpperCase() +
                              member.userName.slice(1)}
                          </li>
                        ))}
                      <button
                        onClick={() => isLeader(event.eventId)}
                        className="font-semibold z-10 mt-2 text-lg"
                      >
                        + Add Member
                      </button>
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <p className="mt-11">Not Registered</p>
            )}
          </div>
          <div className="w-full pt-[13vh] text-center">
            <h1 className="text-4xl font-bold underline">Payments</h1>
          </div>
          <div className="w-full flex justify-center items-center">
            {paymentInfo.length !== 0 ? (
              <div className="flex flex-wrap w-full  gap-8 mt-5 md:mt-11 mb-8 p-8 md:p-8">
                {paymentInfo.map((payment) => {
                  const event = eventNamePayment.find(
                    (event) => event.id === payment.eventId
                  );
                  return (
                    <div
                      key={payment._id}
                      className="p-5 px-11 shadow-2xl w-[80%] md:w-[30%] rounded-lg flex flex-col bg-[#9ea4ff] justify-center items-center border-white border-4 text-center text-[1.1em] text-black"
                    >
                      <p>
                        <span className="font-semibold">Payment ID :</span>
                        {" " + " "}
                        {payment.razorpay_payment_id}
                      </p>
                      <p>
                        <span className="font-semibold">Event Name :</span>{" "}
                        {event ? event.name : "Unknown"}
                      </p>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="mt-11">No Payments</p>
            )}
          </div>
          <div className="w-full pt-[13vh] text-center flex justify-center flex-col items-center">
            <h1 className="text-4xl font-bold underline mb-11">Eve Payments</h1>
            {eveInfo ? (
              <div className="p-5 px-11 shadow-2xl w-[80%] md:w-[30%] rounded-lg flex flex-col bg-[#9ea4ff] justify-center items-center border-white border-4 text-center text-[1.1em] text-black ">
                <p>
                  <span className="font-semibold">
                    Successfully Registered For Entertainment Eve
                  </span>
                </p>
                {/* <p>
                  <span className="font-semibold">Event Name :</span>{" "}
                </p> */}
              </div>
            ) : (
              <p className="mt-5">Not Registered Yet</p>
            )}
          </div>
        </div>

        <div
          className={`${
            (tab == 0 || tab == 1) && "hidden"
          } flex w-full flex-col justify-start relative items-center md:py-11 px-8 pb-11 min-h-[100vh] md:p-0`}
        >
          <div
            className={`${
              getName && "hidden"
            } bg-[#ffffff] dark:bg-[#000000] backdrop-blur-3xl absolute top-0 left-0 w-full h-[110vh] z-10 flex justify-center items-center`}
          >
            <div className="w-[70%] h-[50%] bg-white dark:bg-black rounded-lg flex flex-col items-center justify-center">
              <div className="flex flex-col items-center">
                <h1 className="text-2xl font-bold underline mb-1">
                  Certificate
                </h1>
                <p className="text-red-500">
                  *Fill it carefully you will only get one chance
                </p>
              </div>
              <div className="flex flex-col w-[80%] md:w-[60%] mt-4">
                <label
                  className="font-semibold text-gray-600 dark:text-[#acacac]"
                  htmlFor="fullName"
                >
                  Your Full Name (to be written on certificate) :
                </label>
                <input
                  className="p-2 bg-transparent border-2 border-black dark:border-[#dcdcdc] rounded-lg focus:outline-none font-semibold"
                  type="text"
                  name="fullName"
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-[80%] md:w-[60%] mt-2">
                <label
                  className="font-semibold text-gray-600 dark:text-[#acacac]"
                  htmlFor="collegeName"
                >
                  Your College Name:
                </label>
                <input
                  className="p-2 bg-transparent border-2 border-black dark:border-[#dcdcdc] rounded-lg focus:outline-none font-semibold"
                  type="text"
                  name="collegeName"
                  id="collegeName"
                  value={collegeName}
                  onChange={(e) => setCollegeName(e.target.value)}
                />
              </div>
              <button
                className="z-10 mt-5 border-2 p-2 cursor-pointer border-[#7982ff] bg-[#4d55ba] text-white rounded-md py-2 w-[50%] md:w-[30%] font-bold text-md"
                onClick={certCreate}
              >
                Submit
              </button>
            </div>
          </div>
          <div className="w-full pt-[13vh] text-center">
            <h1 className="text-4xl font-bold underline mb-8">Certificates</h1>
          </div>

          {participatedEventNames.length ? (
            participatedEventNames.map((evnt, index) => (
              <div key={index} className={`cert w-full h-full   flex-col `}>
                <div
                  className="relative"
                  ref={
                    participatedEventNames[index] == "B-Quiz"
                      ? certificateWrapper1
                      : participatedEventNames[index] == "B-Plan"
                      ? certificateWrapper2
                      : participatedEventNames[index] == "Market-Watch"
                      ? certificateWrapper3
                      : participatedEventNames[index] == "IPL Mania"
                      ? certificateWrapper4
                      : participatedEventNames[index] == "Movie-A-thon"
                      ? certificateWrapper5
                      : participatedEventNames[index] == "E-Sports(BGMI)"
                      ? certificateWrapper6
                      : participatedEventNames[index] == "Treasure Hunt"
                      ? certificateWrapper7
                      : ""
                  }
                >
                  <img src={certt} alt="" className="w-full h-full" />
                  <div className="absolute w-full top-[53%] left-[0%] text-center  text-black font-semibold text-[0.9em] md:text-4xl">
                    <p className="text-center certFields">{fullName}</p>
                  </div>
                  <div className="absolute w-full top-[62.6%] left-[-4%] text-center  text-black font-semibold text-[0.5em] md:text-xl">
                    <p className="text-center certFields">{collegeName}</p>
                  </div>
                  <div className="absolute w-full top-[67%] left-[-4%] text-center  text-black font-semibold text-[0.5em] md:text-xl">
                    <p className="text-center certFields">{evnt}</p>
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();

                    participatedEventNames[index] == "B-Quiz"
                      ? exportComponentAsPNG(certificateWrapper1)
                      : participatedEventNames[index] == "B-Plan"
                      ? exportComponentAsPNG(certificateWrapper2)
                      : participatedEventNames[index] == "Market-Watch"
                      ? exportComponentAsPNG(certificateWrapper3)
                      : participatedEventNames[index] == "IPL Mania"
                      ? exportComponentAsPNG(certificateWrapper4)
                      : participatedEventNames[index] == "Movie-A-thon"
                      ? exportComponentAsPNG(certificateWrapper5)
                      : participatedEventNames[index] == "E-Sports(BGMI)"
                      ? exportComponentAsPNG(certificateWrapper6)
                      : participatedEventNames[index] == "Treasure Hunt"
                      ? exportComponentAsPNG(certificateWrapper7)
                      : "";

                    // exportComponentAsPNG(certificateWrapper1);
                  }}
                  className="bg-[#003557] text-white font-medium mt-5 p-3 mb-5 w-full"
                >
                  Download
                </button>
              </div>
            ))
          ) : (
            <p className="mt-5 z-20 text-black dark:text-white">
              No Certificates
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default EndeavourProfile;
