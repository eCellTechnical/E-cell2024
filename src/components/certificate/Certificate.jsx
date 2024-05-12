import "./Certificate.css";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import certt from "../../assets/Certificate_participants (1).png";
import { exportComponentAsPNG } from "react-component-export-image";
import { toast } from "react-toastify";
function Certificate() {
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

  const history = useNavigate();

  const certClicked = async () => {
    try {
      if (!localStorage.getItem("userId")) {
        toast.warn("Login to access", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          theme: "colored",
        });
        setTimeout(() => {}, 2000);
        return history("/endeavour/login");
      }
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

  useEffect(() => {
    certClicked();
  }, []);

  return (
    <div
      className={`flex w-full bg-white dark:bg-black flex-col justify-start relative items-center md:py-11 px-8 pb-11 min-h-[100vh] md:p-0`}
    >
      <div
        className={`${
          getName && "hidden"
        } bg-[#ffffffb7] dark:bg-[#000000b7] backdrop-blur-3xl absolute top-0 left-0 w-full h-[110vh] z-10 flex justify-center items-center`}
      >
        <div className="w-[70%] h-[50%] bg-white dark:bg-black rounded-lg flex flex-col items-center justify-center">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold underline mb-1 text-black dark:text-white">
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
        <h1 className="text-4xl font-bold underline mb-8 text-black dark:text-white">
          Certificates
        </h1>
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
              }}
              className="bg-[#003557] text-white font-medium mt-5 p-3 mb-5 w-full"
            >
              Download
            </button>
          </div>
        ))
      ) : (
        <p className="mt-5 z-20 text-white">No Certificates</p>
      )}
    </div>
  );
}

export default Certificate;
