// import React from 'react'
import "./style.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlay } from '@fortawesome/free-solid-svg-icons'
// import { faInstagram } from "@fortawesome/free-brands-svg-icons";
// import { MdOutlineAttachEmail } from "react-icons/md";
// import { BsTwitterX } from "react-icons/bs";
import img1 from "../../../assets/curtains.jpg";
import img2 from "../../../assets/271454876_665523707960012_7603993009814993163_n-removebg-preview.png";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Main = () => {
  const history = useNavigate();
  const [isPayment, setIsPayment] = useState(false);
  const [libId, setLibId] = useState("");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.post(
          `https://e-cell2024backend-production.up.railway.app/api/eveverify`,
          {
            userId: localStorage.getItem("userId"),
          }
        );
        if (res.data.msg == "Done") {
          setIsPayment(true);
        } else {
          setIsPayment(false);
        }
      } catch (error) {
        // toast.error("Error during Google login", {
        //   position: "top-center",
        //   autoClose: 3000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   theme: "colored",
        // });
        alert("Error");
      }
    };

    fetchData();
  }, []);

  const handlePayClick = async (amount) => {
    if (!localStorage.getItem("userId")) {
      history("/endeavour/login");
      return toast.warn("First Login to register", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "colored",
      });
    }

    if (libId.length < 8) {
      return toast.warn("Enter Correct Library Id of KIET", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "colored",
      });
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
        name: `EnterTainment Eve`,
        description: `EnterTainment Eve`,
        image:
          "https://res.cloudinary.com/dwtytn7fl/image/upload/v1700479048/cmxocblhvvpbkl7xk407.png",
        order_id: order.id,
        callback_url: `https://e-cell2024backend-production.up.railway.app/api/evepaymentverification/${localStorage.getItem(
          "userId"
        )}/eve/${amount}/${libId}`,
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
      console.error("Error processing payment:", error);
    }
  };
  return (
    <section className="main-section h-full z-40" id="home">
      <div
        className={`${
          open ? "flex" : "hidden"
        } absolute  top-0 left-0 !z-50 w-full h-full flex justify-center items-center text-white bg-[#ffffff38]`}
      >
        <div className="bg-black w-[80%] h-[70%] flex justify-center items-center flex-col  rounded-xl">
          <div className="flex flex-row w-[60%] justify-between items-center mb-11">
            <div></div>
            <div className="text-center">
              <h1 className="text-4xl font-bold">Howdy</h1>
              <p className="text-gray-300 mt-2 text-lg ">
                Ready to join us for a prodigious evening
              </p>
            </div>
            <p
              className="border-2 p-2 rounded-md border-white cursor-pointer"
              onClick={() => setOpen(false)}
            >
              X
            </p>
          </div>
          <div className="flex flex-col w-[30%]">
            <label htmlFor="libraryID" className="font-semibold text-gray-300">
              Library Id (Don&apos;t add fake Ids, otherwise payment isn&apos;t
              refundable)
            </label>
            <input
              type="text"
              name="libraryID"
              id="libraryID"
              className="p-3 rounded-md bg-transparent border-4 border-gray-500 mb-8"
              onChange={(e) => setLibId(e.target.value)}
            />
          </div>
          <button
            className="z-10 border-4 border-[#4d5abb] py-3 text-lg px-8 rounded-md"
            onClick={() => handlePayClick(250)}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="main-container">
        <img
          src={img1}
          alt="backgroung"
          className="background brightness-100"
        />
        <div className="contant">
          <h4 className="main-header mt-10 justify-center flex items-center text-2xl md:text-6xl font-semibold">
            The Entertainment <br /> Eve
          </h4>
          <p className="paragragh mt-5 text-lg justify-center flex items-center">
            Join us for a night of enchantment and delight, where laughter
            echoes and memories take flight. With captivating performances,
            delicious delights, and a sprinkle of magic, let&apos;s create an
            unforgettable evening under the stars.
          </p>
        </div>

        <div className="watch-us w-[350px] md:w-[400px] h-[170px] mr-[10px] mt-10 bg-white flex items-center  rounded-md !z-30">
          {!isPayment && (
            <div className="w-full">
              <p className="text-md  text-gray-600">Early Bird Offer</p>
              <p className="text-md line-through text-gray-600">₹300</p>
              <p className="text-3xl font-semibold">₹250</p>
            </div>
          )}

          {isPayment ? (
            <button className=" w-full ">
              <p className="text-lg  md:text-xl font-semibold border-2 border-black p-5 rounded-md">
                Already Registered
              </p>
            </button>
          ) : (
            <>
              <button
                className="ml-10"
                onClick={() => {
                  // handlePayClick(250);
                  setOpen(true);
                  // alert("Maintanence is going on Sorry for inconvenience");
                }}
              >
                <p className="text-lg w-[180px] md:text-xl font-semibold border-2 border-black p-5">
                  Register Now
                </p>
                <p className="font-semibold text-md text-red-600 w-full">
                  **Only for KIET Students no outside students are allowed.
                </p>
              </button>
            </>
          )}
        </div>
        {/* <div className="media">
          <ul>
            <a href="" target="_blank" rel="noreferrer">
              <li>
                <FontAwesomeIcon icon={faInstagram} className="fainsta" />
              </li>
            </a>
            <a href="" target="_blank" rel="noreferrer">
              <li>
                <MdOutlineAttachEmail className="fainsta" />
              </li>
            </a>
            <a href="" target="_blank" rel="noreferrer">
              <li>
                <BsTwitterX className="fainsta" />
              </li>
            </a>
          </ul>
        </div> */}

        <div className="ellipse-container mt-1">
          <img src={img2} alt="squadra" className="squadra z-20" />

          <div className="ellipse thin"></div>
          <div className="ellipse thick"></div>
          <div className="ellipse yellow"></div>
        </div>
      </div>
    </section>
  );
};

export default Main;
