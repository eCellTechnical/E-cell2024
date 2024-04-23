import { useState, useEffect, useCallback, memo } from "react";
import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import FAQ from "../../../components/FAQ/FAQ";
import { Link } from "react-router-dom";

const SpecificEvent = () => {
  const [disable, setDisable] = useState(false);
  const history = useNavigate();
  const { eventId } = useParams();
  const [event, setEvent] = useState({});
  const [teamName, setTeamName] = useState("");
  const [formData, setFormData] = useState([]);
  const [register, setRegister] = useState(0);
  const [payment, setPayment] = useState(0);
  const [isRegistered, setIsRegistered] = useState(0);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.post(
        `https://e-cell2024backend-production.up.railway.app/event/${eventId}`,
        { userId: localStorage.getItem("userId") }
      );
      const data = response.data;
      if (data) {
        setEvent(data.event);
        // console.log(data.event);
        if (data.event.minMembers) {
          if (data.event.minMembers == 2) {
            setFormData((prevState) => [
              ...prevState,
              { userId: "", readonlyValue: "" }, // Add empty member data
            ]);
          }
        }
        if (data.registration === "Done") {
          setIsRegistered(1);
          if (data.payment === "Done") {
            setPayment(1);
          } else if (data.payment === "Not Done") {
            setPayment(0);
          }
        } else if (data.registration === "Not Done") {
          setIsRegistered(0);
        }
      } else {
        toast.warn("Error fetching event", {
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
  }, [eventId]);

  const handleSearch = useCallback(
    async (memberId, index) => {
      setDisable(true);
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
          { memberId, event }
        );
        const data = response.data;
        if (data === "Already In A Team") {
          setDisable(true);
          toast.warn(`${memberId} Already Joined A Team`, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            theme: "colored",
          });
        } else if (data === "User Not Exists") {
          setDisable(true);
          toast.warn("No user with this User ID exists", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            theme: "colored",
          });
        } else {
          setFormData((prevState) =>
            prevState.map((member, i) =>
              i === index ? { ...member, readonlyValue: data } : member
            )
          );
          setDisable(false);
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
    },
    [event]
  );

  const handleAddMember = useCallback(() => {
    setDisable(true);
    if (formData.length < event.teamSize - 1) {
      setFormData((prevState) => [
        ...prevState,
        { userId: "", readonlyValue: "" }, // Add empty member data
      ]);
    } else {
      toast.warn(
        `Can't Add more than ${event.teamSize} Members (Leader Included)`,
        {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          theme: "colored",
        }
      );
    }
  }, [event, formData]);

  const handleRemoveMembers = (index) => {
    // setFormData([]);
    setDisable(true);
    setFormData((prevState) => {
      const updatedFormData = [...prevState];
      updatedFormData.splice(index, 1); // Remove the field at the specified index
      return updatedFormData;
    });
    setDisable(false);
  };

  const handleChange = useCallback((event, index) => {
    const { name, value } = event.target;
    setFormData((prevState) =>
      prevState.map((member, i) =>
        i === index ? { ...member, [name]: value } : member
      )
    );
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setDisable(true);
      const leaderId = localStorage.getItem("userId");
      const filteredData1 = formData.filter((item) => item.userId !== "");
      const filteredData = filteredData1.filter(
        (item) => item.readonlyValue !== ""
      );
      if (event.minMembers == 2 && filteredData.length < 1) {
        setDisable(false);
        return toast.warn("Can't have less than 2 members", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          theme: "colored",
        });
      }
      try {
        const response = await axios.post(
          `https://e-cell2024backend-production.up.railway.app/registerteam`,
          { filteredData, teamName, leaderId, eventId },
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        const data = response.data;
        if (data === "Team Created Successfully") {
          setIsRegistered(1);
          setRegister(0);
          setDisable(false);
          toast.success("Team Created Successfully", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            theme: "colored",
          });
        } else if (
          data === "User Not Exists" ||
          data === "Error, Please Try again after sometime"
        ) {
          setDisable(true);
          toast.error("Error, Please Try again after sometime", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            theme: "colored",
          });
        }
      } catch (error) {
        toast.error("Error, Please Try again after sometime", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          theme: "colored",
        });
      }
    },
    [eventId, formData, teamName, event.minMembers]
  );

  const handleRegister = useCallback(() => {
    if (localStorage.getItem("userName")) {
      if (isRegistered === 0) {
        setRegister(1);
      }
    } else {
      toast.warn("Login to register", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "colored",
      });
      history("/endeavour/login");
    }
  }, [history, isRegistered]);

  const checkIfLeaderForPayment = async (amount) => {
    try {
      const response = await axios.get(
        `https://e-cell2024backend-production.up.railway.app/isLeaderforpayment/${localStorage.getItem(
          "userId"
        )}/${eventId}`
      );
      console.log(response.data);
      if (response.data) {
        if (response.data.msg == "leader") {
          checkoutHandler(amount);
        } else if (response.data.msg == "Not a Leader") {
          toast.warn("Only leader can do payment", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            theme: "colored",
          });
        }
      }
    } catch (error) {
      // console.error("Error registering team:", error);
      toast.error("Error, Please Try again after sometime", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "colored",
      });
    }

    // checkoutHandler(amount);
  };

  const checkoutHandler = async (amount) => {
    if (!localStorage.getItem("userId")) {
      return history("/endeavour/login");
    }
    try {
      const {
        data: { key },
      } = await axios.get(
        `https://e-cell2024backend-production.up.railway.app/api/getkey`
      );

      const {
        data: { order },
      } = await axios.post(
        `https://e-cell2024backend-production.up.railway.app/api/checkout`,
        {
          amount,
        }
      );

      const options = {
        key,
        amount: order.amount,
        currency: "INR",
        name: `${event.name}`,
        description: `${event.name}`,
        image:
          "https://res.cloudinary.com/dwtytn7fl/image/upload/q_auto/f_auto/v1700479048/cmxocblhvvpbkl7xk407.png",
        order_id: order.id,
        callback_url: `https://e-cell2024backend-production.up.railway.app/api/paymentverification/${localStorage.getItem(
          "userId"
        )}/${eventId}/${amount}`,
        prefill: {
          name: `${localStorage.getItem("userName")}`,
        },
        notes: {
          address: "E-CELL, KIET GROUP OF INSTITUTIONS",
        },
        theme: {
          color: "#4d55ba",
        },
      };
      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error("Error processing payment :( ");
    }
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="pt-[12vh] text-black dark:text-white flex flex-col md:flex-row justify-center h-full md:h-[100vh] relative bg-white dark:bg-black">
      <div className="bg-white z-10 dark:bg-black w-full md:w-[65%] md:overflow-scroll p-8 md:p-10 md:px-20 order-last md:order-first flex flex-col">
        <h1 className="font-bold text-center text-4xl">{event.name}</h1>
        <h2 className=" text-center font-semibold text-xl text-green-600 mt-2">
          {event.price == "Free"
            ? "Free"
            : `Rs. ${event.price ? event.price : ""}`}
        </h2>
        <h3 className="mb-5 text-center font-semibold text-lg text-black dark:text-white mt-2">
          Date -&gt;{" "}
          <span className="font-medium">{event.date ? event.date : ""}</span>
        </h3>
        <div className="z-50 text-black dark:text-white">
          {event.description ? (
            event.description?.map((desc, index) => (
              <div key={index} className="mb-4">
                <h3 className="font-semibold text-lg">{desc.title}</h3>
                {desc.paragraphs.type == "para" ? (
                  <div className="mt-2">
                    <p>{desc.paragraphs.content}</p>
                  </div>
                ) : desc.paragraphs.type == "list" ? (
                  <div className="mt-2 ml-4 md:ml-5">
                    {desc.paragraphs.content
                      .split(".")
                      ?.filter((item) => item.trim() !== "")
                      ?.map((listItem, index) => (
                        <li key={index}>{listItem}.</li>
                      ))}
                  </div>
                ) : (
                  <div className="w-full mt-2">
                    {desc.paragraphs.content?.map((faq, index) => (
                      <FAQ faq={faq} key={index + Math.random() * 100} />
                    ))}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="w-full flex justify-center items-center text-center mt-5 font-medium">
              Loading...
            </div>
          )}
        </div>
      </div>

      <div
        className={`${
          !register && "hidden"
        } absolute top-0 left-0 right-0 bottom-0 w-full h-full flex justify-center items-center bg-[#0000005b] z-50`}
      >
        <form
          onSubmit={handleSubmit}
          className={`${
            !register && "hidden"
          } bg-white dark:bg-[#000000] relative rounded-xl w-[90%] md:w-[70%] h-[80%] flex flex-col justify-center items-center overflow-scroll mt-5`}
        >
          <div className="flex text-black dark:text-white flex-col absolute top-0 justify-center items-center w-full pt-8">
            <div className="flex flex-row justify-between items-center w-[90%]">
              <p></p>
              <h1 className="text-2xl font-bold underline mb-3">Register</h1>
              <p
                onClick={() => setRegister(0)}
                className="font-bold text-xl cursor-pointer border-2 border-black dark:border-[#acacac] p-2 py-1 z-10 rounded-lg"
              >
                X
              </p>
            </div>

            <div className="flex flex-col w-[80%] md:w-[60%]">
              <label
                htmlFor="teamName"
                className="font-semibold text-gray-600 dark:text-[#acacac]"
              >
                Team Name
              </label>
              <input
                className="p-2 bg-transparent border-2 border-black dark:border-[#dcdcdc] rounded-lg focus:outline-none font-semibold"
                type="text"
                name="teamName"
                id="teamName"
                onChange={(e) => {
                  setTeamName(e.target.value);
                }}
                value={teamName}
                required="required"
              />
            </div>

            <div className="flex flex-col  mt-5  justify-center items-center">
              <h1 className="font-bold text-xl text-black dark:text-white">
                Members
              </h1>
              <h2 className="font-semibold text-lg my-3 text-black dark:text-white">
                Leader
              </h2>
            </div>

            <div className="flex flex-col w-[80%] md:w-[60%]">
              <div className="flex flex-col w-full">
                <label
                  htmlFor={"leader"}
                  className="font-semibold text-gray-600 dark:text-[#acacac]"
                >
                  Leader Name
                </label>
                <input
                  className="p-2 bg-transparent border-2 border-black dark:border-[#dcdcdc] rounded-lg focus:outline-none font-semibold"
                  type="text"
                  name="leader"
                  id={"leader"}
                  value={localStorage.getItem("userName") || ""}
                  readOnly
                />
              </div>
            </div>

            {formData.map((member, index) => (
              <div key={index} className="member-form mt-5 w-[80%] md:w-[60%]">
                <div className="flex flex-col w-full justify-center items-center">
                  <h1 className="font-semibold text-lg my-2 text-black dark:text-white">
                    Member {index + 1}
                  </h1>
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor={`userId-${index}`}
                      className="font-semibold text-gray-600 dark:text-[#acacac]"
                    >
                      User ID:
                    </label>
                    <input
                      className="p-2 bg-transparent border-2 border-black dark:border-[#dcdcdc] rounded-lg focus:outline-none font-semibold"
                      type="text"
                      name="userId"
                      id={`userId-${index}`}
                      value={member.userId}
                      onChange={(e) => handleChange(e, index)}
                    />
                  </div>
                  <div className="flex flex-col w-full mt-2">
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
                        id={`readonlyValue-${index}`}
                        value={member.readonlyValue}
                        readOnly
                      />
                      <button
                        className="p-2 font-semibold text-gray-600 cursor-zoom-in z-10 dark:text-[#acacac]"
                        onClick={(e) => {
                          e.preventDefault();
                          handleSearch(member.userId, index);
                        }}
                      >
                        Search
                      </button>
                    </div>
                  </div>
                  <p
                    className="my-3 font-semibold text-md text-red-600 cursor-cell"
                    onClick={() => handleRemoveMembers(index)}
                  >
                    - Remove Member
                  </p>
                </div>
              </div>
            ))}
            <div>
              <p
                className="my-3 font-bold text-lg text-black dark:text-white cursor-cell"
                onClick={handleAddMember}
              >
                + Add member
              </p>
            </div>
            <input
              type="submit"
              className="border-2 p-2 cursor-pointer border-[#7982ff] bg-[#4d55ba] z-10 text-white rounded-md py-2 w-[50%] md:w-[30%] font-bold text-md disabled:bg-[#a7acfff2] disabled:cursor-not-allowed"
              disabled={disable}
              value={"Submit"}
            />
          </div>
        </form>
      </div>

      <div className=" flex flex-col w-full md:w-[35%] p-6 justify-center items-center rounded-xl md:h-[90%] md:m-8 md:my-4">
        <div>
          <img src={event.poster} alt="" className="rounded-lg" />
        </div>
        <div className="p-2 mt-3 w-full">
          <button
            className={`border-4 dark:border-4 border-[#a2a8ff] dark:border-[#a2a8ff] bg-[#4d55ba] dark:bg-[#ffffff] text-white dark:text-black rounded-lg font-semibold text-lg py-2 cursor-pointer z-10  w-full ${
              isRegistered === 1 && "hidden"
            }`}
            onClick={() => {
              if (isRegistered == 1) {
                return alert("Already registered");
              }
              handleRegister();
            }}
          >
            Register Now
          </button>
          <button
            className={`border-2 flex justify-center items-center border-[#868eff] bg-[#4d55ba] text-white rounded-lg font-semibold text-lg  py-2 z-10 cursor-pointer  w-full ${
              isRegistered === 0
                ? "hidden"
                : `${payment === 0 ? `flex` : `hidden`}`
            }`}
            onClick={() => checkIfLeaderForPayment(event.price)}
          >
            Pay Rs. {event.price}
          </button>
          <button
            className={`border-[#868eff] border-2  flex justify-center items-center  rounded-lg  text-black dark:text-white bg-transparent font-semibold text-lg py-2  z-10  w-full cursor-not-allowed ${
              isRegistered === 1
                ? `${payment == 1 ? "flex" : "hidden"}`
                : "hidden"
            }`}
          >
            All Done ! See You At Event
          </button>
          <Link
            to={
              "https://evepaper.com/unstops-article-writing-competition-keit/"
            }
            target="_blank"
          >
            <button
              className={`border-2 flex justify-center items-center border-[#868eff] bg-[#4d55ba] text-white rounded-lg font-semibold text-lg  py-2 z-10 cursor-pointer  w-full mt-4 ${
                isRegistered === 1
                  ? `${payment == 1 ? "flex" : "hidden"}`
                  : "hidden"
              }`}
            >
              One More Step To Go !
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const MemoizedSpecificEvent = memo(SpecificEvent);
export default MemoizedSpecificEvent;
