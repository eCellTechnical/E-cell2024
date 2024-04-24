// import "PopUp.css";
import { useEffect, useState } from "react";
import img2 from "../../assets/popup/Pop Up Notify (850 x 350 px) (1).png";
import img3 from "../../assets/popup/Pop Up Notify (850 x 350 px) (300 x 550 px).png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function PopUp() {
  const history = useNavigate();
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setClosed(true);
    }, 6000);
  }, []);

  const handleClick = () => {
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
    history("/endeavour/eve");
  };
  return (
    <main
      className={` ${
        closed && "hidden"
      } backdrop-blur-3xl h-screen w-screen flex justify-center items-center`}
    >
      <div className={`${closed && "hidden"} bg-none  py-5 px-16 z-50`}>
        <div className="flex justify-between items-center mb-5">
          <div></div>
          <h1 className="font-bold text-lg md:text-2xl">
            Entertainment Eve !!
          </h1>
          <p
            className="border-2 border-white cursor-pointer p-2 px-3 rounded"
            onClick={() => setClosed(true)}
          >
            X
          </p>
        </div>
        <img
          src={img2}
          alt=""
          className="w-full h-[550px] hidden md:flex md:w-[850px] md:h-[350px]"
        />
        <img
          src={img3}
          alt=""
          className="w-full h-[550px] flex md:hidden md:w-[850px] md:h-[350px]"
        />
        <center className="z-50 mt-5">
          <button onClick={handleClick}>Register Now</button>
        </center>
      </div>
    </main>
  );
}

export default PopUp;
