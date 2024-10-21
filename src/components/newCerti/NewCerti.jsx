import { useState } from "react";
import { exportComponentAsPNG } from "react-component-export-image";
import { useRef } from "react";
import certTemplate from "../../assets/Certificate Of Participation (1).png";
import certTemplateWinners from "../../assets/Certificate Of Participation.png";
import "./NewCerti.css";
import confetti from "canvas-confetti";
// import Leave from "../../assets/leaves1.png";

const NewCerti = () => {
  const [name, setName] = useState("");
  const [isNameValid, setIsNameValid] = useState(null);
  const certificateRef = useRef();
  const [isWinner, setIsWinner] = useState(false);

  const handleChange = (e) => {
    setName(e.target.value);
    setIsWinner(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const winners = [
        "Atharv Gupta",
        "Tejas Rastogi",
        "Avani Sharma",
        "Antas Kumar Dubey",
        "Ameera Arfeen",
      ];
      const participants = [
        "Abhijeet Kumar Gautam",
        "Nishant Vishwakarma",
        "Arpit Srivastava",
        "Anurag shrivastav",
        "Jatin Gupta",
        "Anant Mittal",
        "Aashi Chaudhary",
        "Tulika Anand",
        "Rishika Batra",
        "Preeti Singh",
        "Tanya Mishra",
        "Aditi Narang",
        "Luv Agarwal",
        "Yuvika Jindal",
        "Dipti Gupta",
        "Vaibhav Gupta",
        "Shaswat Mishra",
        "Pari Gupta",
        "Shreyasi Rawat",
        "Sonali Tyagi",
        "Dipali Singh",
        "Saransh Sahu",
        "Aaditya Sharma",
        "Aniket Tyagi",
        "Vansh Gautam",
        "Aditya Chauhan",
        "Viraj Jain",
        "Priyanz Varshney",
        "Kashish Tyagi",
        "Anshika Chaurasia",
        "Krishna Sharma",
        "Janak Singh",
        "Rishi Raj",
        "Dhruv Srivastava",
        "Vanshika Arora",
        "Dhruv Chaudhary",
        "Pranjali Sehrawat",
        "Siddhant Gupta",
        "Avani K Singhal",
        "Karnveer Dixit",
        "Anmol Choubey",
        "Shreya Baranwal",
        "Mahima Goyal",
        "Rupesh Chaurasia",
        "Harsh Maheshwari",
      ];
      const participantsExists = participants.some(
        (entry) => entry.toLowerCase().trim() === name.toLowerCase().trim()
      );
      const winnerExists = winners.some(
        (entry) => entry.toLowerCase().trim() === name.toLowerCase().trim()
      );

      if (participantsExists || winnerExists) {
        if (winnerExists) setIsWinner(winnerExists);
        setIsNameValid(true);

        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      } else {
        setIsNameValid(false);
        alert(
          "Name not found. Please check your name or you have not participated in this event."
        );
      }
    } catch (error) {
      alert("Error checking name.");
    }
  };

  return (
    <div className="flex gap-10 flex-col lg:flex-row items-center justify-center relative bg-custom-gradient min-h-screen pt-14 px-4 bg-white/90 dark:bg-[#0c0c0c]">
      {/* Form Column */}
      {/* <img
        loading="lazy"
        src={Leave}
        alt=""
        className="absolute top-[7rem] left-0  block "
      /> */}
      <div className="flex flex-col w-full lg:w-1/2 max-w-md mr-0 md:mr-14">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold pb-4 lg:py-6 text-center md:text-start text-black/90 dark:text-white/90">
          Break the Mould <span className="text-[#4d55bb]">Certificate</span>
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="mb-4 p-2 border-2 border-gray-400 rounded-lg w-full bg-transparent text-black-90 dark:text-white/90 font-medium"
            value={name}
            onChange={(e) => {
              handleChange(e);
              setIsNameValid(false);
            }}
            required
          />
          <button
            type="submit"
            className="bg-[#4d55bb] text-white px-4 py-2 rounded-lg w-full"
          >
            Generate Certificate
          </button>
        </form>
      </div>

      {/* Certificate Preview Column */}
      {isNameValid && (
        <>
          <div
            className={`flex flex-col  w-full lg:w-1/2 mt-10 lg:mt-0 items-center justify-center`}
          >
            <div
              className="relative  !w-full h-[80%] md:h-full"
              ref={certificateRef}
            >
              <img
                loading="lazy"
                src={isWinner ? certTemplateWinners : certTemplate}
                alt=""
                className="w-full pr-0 md:pr-5 h-full"
              />
              <div className="absolute w-full top-[50%] md:top-[53%] left-1/2 -translate-x-1/2 text-center  text-black font-semibold text-xl md:text-3xl">
                <p className="text-center certiFields ">{name}</p>
              </div>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                exportComponentAsPNG(certificateRef);
              }}
              className="bg-[#4d55bb] text-white px-4 py-2 rounded-lg mt-4 mb-10 z-10"
            >
              Download Certificate
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default NewCerti;
