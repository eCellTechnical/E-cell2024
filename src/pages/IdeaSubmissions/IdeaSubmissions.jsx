import { useEffect, useState } from "react";
import "./IdeaSubmissions.css";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import mail from "../../assets/ContactUs/Animation - 1703696474947.json";
import Lottie from "lottie-react";

import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";
import useTheme from "../../context/theme";
const IdeaSubmissions = () => {
  const { pathname } = useLocation();
  const { themeMode } = useTheme();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  const [nextBlock, setNextBlock] = useState(0);

  const [submitted2, setSubmitted2] = useState(false);
  const [formCount, setFormCount] = useState(1);
  const [formData, setFormData] = useState({
    startUpName: "",
    email: "",
    ideaSector: "Other",
    IdeaStage: "Ideation Phase",
    TeamDetails: {
      Leader: { name: "", email: "", contact: "", organization: "" },
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLeaderChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      TeamDetails: {
        ...formData.TeamDetails,
        Leader: {
          ...formData.TeamDetails.Leader,
          [name]: value,
        },
      },
    });
  };

  const handleAddMember = () => {
    const memberCount = Object.keys(formData.TeamDetails).filter((key) =>
      key.startsWith("member")
    ).length;
    const newMemberKey = `member${memberCount + 1}`;
    setFormData({
      ...formData,
      TeamDetails: {
        ...formData.TeamDetails,
        [newMemberKey]: { name: "", email: "" },
      },
    });
  };

  const handleMemberChange = (e, memberId) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      TeamDetails: {
        ...formData.TeamDetails,
        [memberId]: {
          ...formData.TeamDetails[memberId],
          [name]: value,
        },
      },
    });
  };

  const handlePrev = (e) => {
    e.preventDefault();
    if (formCount === 1) {
      setFormCount(formCount);
    } else {
      setFormCount(formCount - 1);
    }
  };
  const handleNext = (e) => {
    if (
      (formCount == 2 &&
        formData.TeamDetails.Leader.name &&
        formData.TeamDetails.Leader.email &&
        formData.TeamDetails.Leader.contact &&
        formData.TeamDetails.Leader.organization) ||
      nextBlock > 0
    ) {
      e.preventDefault();
      setNextBlock(1);
    }
    if (!formData.startUpName) {
      setFormCount(formCount);
    } else if (!formData.email) {
      setFormCount(formCount);
    } else if (formCount === 2) {
      if (!formData.TeamDetails.Leader.name) {
        setFormCount(formCount);
      } else if (!formData.TeamDetails.Leader.email) {
        setFormCount(formCount);
      } else if (formData.TeamDetails.Leader.contact.length < 10) {
        setFormCount(formCount);
      } else if (/\D/.test(formData.TeamDetails.Leader.contact)) {
        setFormCount(formCount);
      } else if (!formData.TeamDetails.Leader.organization) {
        setFormCount(formCount);
      } else {
        for (let j in formData) {
          if (j == "TeamDetails") {
            for (let k in formData[j]) {
              if (!formData[j][k].name) {
                delete formData[j][k];
              }
            }
          }
        }
        setFormCount(formCount + 1);
      }
    } else {
      setFormCount(formCount + 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted2(true);
    setTimeout(() => {
      setSubmitted2(false);
      setFormData({
        startUpName: "",
        email: "",
        ideaSector: "Other",
        IdeaStage: "Ideation Phase",
        TeamDetails: {
          Leader: { name: "", email: "", contact: "", organization: "" },
        },
      });
      setFormCount(1);
    }, 2500);
  };
  const steps = [
    {
      key: 1,
      label: "Basic Details",
      description: `Elaborate your business by filling in the complete details about your startup.`,
    },
    {
      key: 2,
      label: "Team Details",
      description:
        "Register the details of all your teammates/partners in the business.",
    },
    {
      key: 3,
      label: "Review",
      description: `Review and recheck your entered details before making the final submission.`,
    },
  ];

  return (
    <div className="form-container !pt-[15vh] flex flex-col lg:flex-row  items-center text-white min-h-[100vh] bg-white dark:bg-black">
      <div
        data-aos="fade-right"
        className=" w-[90%] lg:w-[50%] flex  items-center lg:ml-8"
      >
        <Lottie
          animationData={mail}
          loop={true}
          autoplay
          className="z-[1] lg:flex lg:w-full opacity-90"
        />
      </div>
      <div
        data-aos="fade-left"
        className="flex flex-col items-center w-full lg:w-[80%]"
      >
        <div>
          <h2 className="text-3xl md:text-4xl text-center font-bold text-black dark:text-white">
            Idea <span className="text-[#4d55ba]">Submissions</span>
          </h2>
        </div>
        <div
          className="w-[90%] lg:w-[80%] mt-8 bbb"
          data-theme={themeMode == "dark" ? "dark" : "light"}
        >
          <Box sx={{ width: "100%", textAlign: "center" }}>
            <Stepper activeStep={formCount - 1} alternativeLabel>
              {steps.map((step) => (
                <Step className="!text-black dark:text-white" key={step.key}>
                  <StepLabel>{step.label}</StepLabel>
                  <Typography
                    className="md:flex hidden text-black dark:text-white"
                    sx={{ fontSize: "small" }}
                  >
                    {step.description}
                  </Typography>
                </Step>
              ))}
            </Stepper>
          </Box>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center overflow-hidden mt-8 lg:!w-[70%] mb-0 lg:mb-10 w-full text-black dark:text-white"
        >
          <div className="flex w-full">
            <div
              className={`${
                formCount === 2 || formCount === 3
                  ? "w-0 hidden opacity-0"
                  : "w-full text-lg lg:flex lg:flex-col lg:justify-center lg:items-center flex flex-col items-center justify-center"
              }`}
            >
              <div className="mb-2 w-[90%] lg:w-full">
                <label htmlFor="startUpName">Startup Name:</label>
                <input
                  className="w-full bg-transparent !border-0 !border-b-2 !rounded-none"
                  type="text"
                  id="startUpName"
                  name="startUpName"
                  value={formData.startUpName}
                  onChange={handleChange}
                  required="required"
                  placeholder="Startup Name"
                  autoComplete="off"
                />
              </div>
              <div className="mb-2 w-[90%] lg:w-full">
                <label htmlFor="email">E-mail:</label>
                <input
                  className="w-full bg-transparent !border-0 !border-b-2 !rounded-none"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required="required"
                  placeholder="E-mail"
                  autoComplete="off"
                />
              </div>
              <div className="mb-5 w-[90%] lg:w-full">
                <label htmlFor="ideaSector">Idea Sector:</label>
                <select
                  className="w-full bg-transparent !border-0 !border-b-2 !rounded-none mt-1 p-2"
                  id="ideaSector"
                  name="ideaSector"
                  value={formData.ideaSector}
                  onChange={handleChange}
                  required="required"
                >
                  <option value="Other" className="text-black">
                    Select Idea Sector
                  </option>
                  <option value="Fintech" className="text-black">
                    Fintech
                  </option>
                  <option value="Software" className="text-black">
                    Software
                  </option>
                  <option value="Logistics" className="text-black">
                    Logistics
                  </option>
                  <option value="Healthcare" className="text-black">
                    Healthcare
                  </option>
                  <option value="Construction" className="text-black">
                    Construction
                  </option>
                  <option value="Others" className="text-black">
                    Others
                  </option>
                </select>
              </div>
              <div className="form-group mb-2 w-[90%] lg:w-full">
                <label htmlFor="IdeaStage" className="form-label ">
                  Idea Stage:
                </label>
                <div className="mt-2">
                  <div className="mb-2">
                    <input
                      type="radio"
                      name="IdeaStage"
                      value="Ideation Phase"
                      className=""
                      onChange={handleChange}
                      checked={formData.IdeaStage === "Ideation Phase"}
                    />
                    <label htmlFor="Ideation Phase">Ideation Phase</label>
                  </div>
                  <div className="mb-2">
                    <input
                      type="radio"
                      name="IdeaStage"
                      value="Registered"
                      onChange={handleChange}
                      checked={formData.IdeaStage === "Registered"}
                    />
                    <label htmlFor="Registered">Registered</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="IdeaStage"
                      value="Funded"
                      onChange={handleChange}
                      checked={formData.IdeaStage === "Funded"}
                    />
                    <label htmlFor="Funded">Funded</label>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${
                formCount === 1 || formCount === 3
                  ? "w-0 hidden opacity-0"
                  : "lg:w-full text-lg lg:flex lg:flex-col lg:justify-center lg:items-center flex flex-col items-center justify-center"
              }`}
            >
              <h3 className="mb-5 text-2xl font-bold ">Team Details</h3>
              <div className="w-[90%] lg:w-full self-center ">
                <h4 className="mb-3 text-xl font-bold">Leader</h4>
              </div>
              <div className="flex justify-center  lg:justify-between w-[90%] lg:w-[100%]">
                <div className="flex flex-col lg:w-full w-[90%]">
                  <label
                    htmlFor="leaderName"
                    className="font-medium text-[#3b3b3b] dark:text-[#ccc]"
                  >
                    Name:
                  </label>
                  <input
                    className="w-[90%] bg-transparent !border-0 !border-b-2 !rounded-none "
                    type="text"
                    id="leaderName"
                    name="name"
                    value={formData.TeamDetails.Leader.name}
                    onChange={handleLeaderChange}
                    {...(formCount === 2 ? { required: true } : {})}
                    placeholder="Name"
                    autoComplete="off"
                  />
                </div>
                <div className="flex flex-col lg:w-full w-[90%]">
                  <label
                    htmlFor="leaderEmail"
                    className="font-medium text-[#3b3b3b] dark:text-[#ccc]"
                  >
                    E-mail:
                  </label>
                  <input
                    className="w-[90%] bg-transparent !border-0 !border-b-2 !rounded-none "
                    type="email"
                    id="leaderEmail"
                    name="email"
                    value={formData.TeamDetails.Leader.email}
                    onChange={handleLeaderChange}
                    {...(formCount === 2 ? { required: true } : {})}
                    placeholder="E-mail"
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="flex lg:justify-between lg:w-full w-[90%]">
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="leaderContact"
                    className="font-medium text-[#3b3b3b] dark:text-[#ccc]"
                  >
                    Contact:
                  </label>
                  <input
                    className="w-[90%] bg-transparent !border-0 !border-b-2 !rounded-none p-2"
                    type="tel"
                    pattern="[6-9]{1}[0-9]{9}"
                    id="leaderContact"
                    name="contact"
                    value={formData.TeamDetails.Leader.contact}
                    onChange={handleLeaderChange}
                    {...(formCount === 2 ? { required: true } : {})}
                    placeholder="1234567890"
                    autoComplete="off"
                    maxLength={10}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="leaderOrganization"
                    className="font-medium text-[#3b3b3b] dark:text-[#ccc]"
                  >
                    Organization:
                  </label>
                  <input
                    className="w-[90%] bg-transparent !border-0 !border-b-2 !rounded-none "
                    type="text"
                    id="leaderOrganization"
                    name="organization"
                    value={formData.TeamDetails.Leader.organization}
                    onChange={handleLeaderChange}
                    {...(formCount === 2 ? { required: true } : {})}
                    placeholder="Organization"
                    autoComplete="off"
                  />
                </div>
              </div>
              {Object.keys(formData.TeamDetails).map(
                (memberId) =>
                  memberId !== "Leader" && (
                    <div
                      key={memberId}
                      className="lg:w-full lg:flex lg:flex-col lg:justify-center lg:items-center flex flex-col items-center justify-center"
                    >
                      <div className="w-[90%] lg:w-full self-center ">
                        <h4 className="mb-3 mt-5 text-xl font-bold self-start">
                          Member {memberId.slice(6)}
                        </h4>
                      </div>
                      <div className="flex lg:justify-between lg:w-full w-[90%]">
                        <div className="flex flex-col w-full">
                          <label
                            htmlFor={`memberName${memberId}`}
                            className="font-medium text-[#3b3b3b] dark:text-[#ccc]"
                          >
                            Name:
                          </label>
                          <input
                            className="w-[90%] bg-transparent !border-0 !border-b-2 !rounded-none "
                            type="text"
                            id={`memberName${memberId}`}
                            name="name"
                            value={formData.TeamDetails[memberId].name}
                            onChange={(e) => handleMemberChange(e, memberId)}
                            placeholder="Name"
                            autoComplete="off"
                          />
                        </div>
                        <div className="flex flex-col w-full">
                          <label
                            htmlFor={`memberEmail${memberId}`}
                            className="font-medium text-[#3b3b3b] dark:text-[#ccc]"
                          >
                            E-mail:
                          </label>
                          <input
                            className="w-[90%] bg-transparent !border-0 !border-b-2 !rounded-none "
                            type="email"
                            id={`memberEmail${memberId}`}
                            name="email"
                            value={formData.TeamDetails[memberId].email}
                            onChange={(e) => handleMemberChange(e, memberId)}
                            placeholder="E-mail"
                            autoComplete="off"
                          />
                        </div>
                      </div>
                      <div className="flex lg:justify-between lg:w-full w-[90%]">
                        <div className="flex flex-col w-full">
                          <label
                            htmlFor={`memberName${memberId}`}
                            className="font-medium text-[#3b3b3b] dark:text-[#ccc]"
                          >
                            Contact:
                          </label>
                          <input
                            className="w-[90%] bg-transparent !border-0 !border-b-2 !rounded-none p-2"
                            type="tel"
                            pattern="[6-9]{1}[0-9]{9}"
                            id={`memberName${memberId}`}
                            name="contact"
                            value={formData.TeamDetails[memberId].contact}
                            onChange={(e) => handleMemberChange(e, memberId)}
                            placeholder="1234567890"
                            autoComplete="off"
                            maxLength={10}
                          />
                        </div>
                        <div className="flex flex-col w-full">
                          <label
                            htmlFor={`memberEmail${memberId}`}
                            className="font-medium text-[#3b3b3b] dark:text-[#ccc]"
                          >
                            Organization:
                          </label>
                          <input
                            className="w-[90%] bg-transparent !border-0 !border-b-2 !rounded-none "
                            type="text"
                            id={`memberEmail${memberId}`}
                            name="organiztion"
                            value={formData.TeamDetails[memberId].organiztion}
                            onChange={(e) => handleMemberChange(e, memberId)}
                            placeholder="Organization"
                            autoComplete="off"
                          />
                        </div>
                      </div>
                    </div>
                  )
              )}
              <div className="w-[90%] lg:w-full self-center ">
                <p
                  className="cursor-pointer lg:w-1/5 self-start mt-2 text-sm text-[#3b3b3b] dark:text-[#ccc] font-medium"
                  onClick={handleAddMember}
                >
                  + Add Member
                </p>
              </div>
            </div>
            <div
              className={`${
                formCount === 1 || formCount === 2
                  ? "w-0 hidden opacity-0"
                  : "w-full lg:w-full text-lg"
              }`}
            >
              {formData && (
                <div className="submitted-data flex flex-col items-center">
                  <h3 className="text-2xl font-semibold ">Review</h3>
                  <p className="mb-5 text-[#3b3b3b] dark:text-[#ccc]">
                    Please verify your details.
                  </p>
                  <div className="border-2 rounded-xl p-5 lg:p-8 w-[90%] lg:w-full">
                    {Object.entries(formData).map(([key, value]) => (
                      <p key={key}>
                        <strong className="text-blue-500 mr-4">
                          {key.toUpperCase()}:
                        </strong>
                        {typeof value === "object" ? (
                          <span>
                            {JSON.stringify(value, null, 3)
                              .replaceAll("{", "")
                              .replaceAll("}", "")
                              .replaceAll("[", "")
                              .replaceAll("]", "")
                              .replaceAll('"', "")
                              .replaceAll(",", "")
                              .slice(1, JSON.stringify(value, null, 3).length)}
                          </span>
                        ) : (
                          <span>{value}</span>
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div
            className={`w-[80%] flex ${
              formCount == 1 ? "justify-center" : "justify-between"
            } text-lg mt-3 mb-8 md:mb-8 lg:mb-0`}
          >
            <button
              onClick={handlePrev}
              className={` ${
                formCount == 1 && "hidden"
              } btn w-[80%] rounded-lg py-2 mt-5 cursor-pointer  text-center mr-5 text-black dark:text-white`}
              id="prevBtn"
            >
              Previous
            </button>

            {formCount === 3 ? (
              <button
                type="submit"
                className="btn w-[80%] rounded-lg py-2 mt-5 cursor-pointer text-center text-black dark:text-white"
                id={`${submitted2 ? "submittedBtn" : "submitBtn"}`}
              >
                {submitted2 ? "Submitted ✅" : "Submit"}
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="btn w-[80%] rounded-lg  py-2 mt-5 cursor-pointer text-center text-black dark:text-white"
                id="nextBtn"
              >
                Next
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default IdeaSubmissions;
