import { useState } from "react";
import { exportComponentAsPNG } from "react-component-export-image";
import { useRef } from "react";
import certTemplate from "../../assets/Certificate Of Participation (1).png";
import certTemplateWinners from "../../assets/Certificate Of Participation (1).png";
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
      const winners = [];
      const participants = [
        "Shriyansh",
        "Nipun Mittal",
        "Akshat Aggarwal",
        "Keshav Gupta",
        "Pratyaksh Varshney",
        "Naman Singhal",
        "Shorya Mittal",
        "Vansh Agarwal",
        "Dheeraj Bansal",
        "Priyanshu Mishra",
        "Aditya Rajawat",
        "Khushi Saini",
        "Aastha Singh",
        "Abhigyan Patel",
        "Sugandh garj",
        "Vibhanshu arya",
        "Pari gupta",
        "Shreya punani",
        "Shail panwar",
        "Yash Kumar Gaur",
        "Pratibha Singh",
        "Nilesh Yadav",
        "Pari garg",
        "Nimisha Agrarwal",
        "Kundan Yadav",
        "Sanjay Kumar Gupta",
        "Radhika",
        "Palak Tiwari",
        "Rudrika",
        "Ananya Garg",
        "Anant Singh",
        "Abdul Rafey",
        "Syed Ali Ahmad",
        "Shavyam Chitranshi",
        "Saurabh Kashyap",
        "Rehan Ahmad",
        "Abhilash Maurya",
        "Devansh Jadon",
        "Sanskar Gupta",
        "Nitish Pal",
        "Nishant Tripathi",
        "Shashank  singh",
        "Sneha yadav",
        "Somya mishra",
        "Swayam srivastava",
        "Varshit Sharma",
        "Krish jain",
        "Shivraj",
        "Naman Kansal",
        "HImanshu Soni",
        "Mukesh Pal",
        "Anshika Chaurasia",
        "Aman Yadav",
        "Aadi Jain",
        "Dhruv Jain",
        "Kasak Jain",
        "Ayushi Saini",
        "Bhoomika Singh",
        "Divyanshi Singh Karakoti",
        "Diksha Jha",
        "Gaurav",
        "Satvik Kumar",
        "Arman",
        "Vishal",
        "Sakshi Singh",
        "Ridhima Goyal",
        "Tushar Singh",
        "Abhay Singh",
        "Shivansh Baranwal",
        "Yash Kumar",
        "Harsh Pratap Yadav",
        "Nitin Pandey",
        "Keshav Gopalka",
        "Harsh Anand",
        "Aakil",
        "Farhan",
        "Abinash Mishra",
        "Kartik Gupta",
        "Himanshu",
        "Manas Bhaintwal",
        "Ritesh gautam",
        "somesh tiwari",
        "Saharsh Singh",
        "Rudra Sharma",
        "Gaurav Soni",
        "Prathamesh Singh",
        "Ishan Gupta",
        "Harshit",
        "Subrat Dwivedi",
        "Jitendra Nainwal",
        "Vaibhav Chaturvedi",
        "Sakshi Rana",
        "Niharika Chaurasia",
        "Ojasv Mishra",
        "Shrashti Agarwal",
        "Prateek Singh",
        "ARPIT SINGH",
        "Anpurnima Sain",
        "Anurag Dwivedi",
        "Arpita sahu",
        "Arsal Masood",
        "Divyam Asthana",
        "Aman Kumar",
        "Ayush",
        "Anubhav Mittal",
        "Ajmuni bhardwaj",
        "Aniket vishwakarma",
        "Prateek Srivastava",
        "Prateek dubey",
        "Nikhil",
        "Prerna Kashyap",
        "Ishika Singh",
        "Vaibhav Tayal",
        "Muskan Verma",
        "Anirudh Kumar",
        "Raghav Pathak",
        "Mayank Motla",
        "Paarth Aggarwal",
        "Mangan kumar",
        "Chitwan Bajpai",
        "Harshita Nathrani",
        "Abhishek Kumar",
        "Mayank Pal",
        "Vanshika Agarwal",
        "Atharv Gupta",
        "Harshit Gupta",
        "Aayansh Singh",
        "Aayushi Gupta",
        "Jahnavi Pandey",
        "Arpit Agarwal",
        "Rahul Kumar",
        "Rajan Kushwaha",
        "Prashant Jain",
        "Aditya Tyagi",
        "Ayush Vaish",
        "Shivansh Srivastava",
        "Anshuman Tirpathi",
        "Kritagya Jha",
        "Mahek Bhatia",
        "Abhinav Singh",
        "Aditi Sharma",
        "Akshat Saxena",
        "Divyanshu",
        "Harshit Gupta",
        "Himanshu maurya",
        "Kavin gupta",
        "Prashant Rai",
        "Anshika Goel",
        "Anushree Bose",
        "ADITYA RAUNIYAR",
        "AARUSHI GUPTA",
        "ABHINAV SRIVASTAVA",
        "ABHISHEK CHAUDHARY",
        "Shivam Singh",
        "Yash Singhal",
        "Tushar Singh",
        "Madhu Kasaudhan",
        "Purnima Deep",
        "Lovelesh Yadav",
        "Ujjwal upadhyay",
        "Sumit pandey",
        "Vanshika mudgal",
        "Sonali verma",
        "Aman Mishra",
        "Ujjwal Tiwari",
        "Suyash Yadav",
        "Vasu Arora",
        "Prasant Singh",
        "Abhishek Kumar",
        "TANISH GOEL",
        "DEEPANSHU BHARDWAJ",
        "AVINASH SHARMA",
        "DAKSH SINGH",
        "Sarthak Sharma",
        "Satvick Shekhawat",
        "Gargi Kaushik",
        "Krishna kumar",
        "Kashika Maurya",
        "DIVYANSH TIWARI",
        "DIVANKAR SINGH",
        "Dipanshu",
        "AYUSH VISHWAKARMA",
        "RADHIKA SAXENA",
        "Amit Kumar",
        "Ayush Prasad",
        "NUMAN AHMAD",
        "Abdul rehman",
        "Arman vora",
        "Ayush gupta",
        "Garv Agarwal",
        "Shashwat Singh",
        "Anay Sharma",
        "Raghvender tyagi",
        "Vishant Bhardwaj",
        "Vishal Kumar Pandey",
        "Aditya Singh",
        "Krishnam",
        "Achin Sahu",
        "Srijan Dwivedi",
        "Tejashv Srivastava",
        "GAURAV SHUKLA",
        "MANISH SINGH",
        "TEJASVI GUPTA",
        "GARV ADITYA SHANDILYA",
        "Adyanshi Singh",
        "Anmol Khurana",
        "Abhinav Tyagi",
        "Samarth Tyagi",
        "Shivam kumar",
        "Shubham Mishra",
        "Siddhant Tiwari",
        "Saumya Dubey",
        "GANESH KANOJIYA",
        "AYUSH PRATAP SINGH",
        "Kunal Gautam",
        "Anuj Gautam",
        "Akanksha Mandal",
        "Shivanshu Gupta",
        "Dev Pandey",
        "Paridhi Joshi",
        "Vatsal Awasthi",
        "Prince Singh Baghel",
        "Rishabh Srivastava",
        "Abhishek Sharma",
        "Shashwat Gupta",
        "Ayush Raj",
        "Pallavi",
        "Shivani yadav",
        "Prince Kumar Gupta",
        "Ashish Kumar keshri",
        "Vibhuti Agrawal",
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
          IdeateX <span className="text-[#4d55bb]">Certificate</span>
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
            className="bg-[#4d55bb] text-white px-4 py-2 rounded-lg w-full z-10"
          >
            Get Your Certificate
          </button>
        </form>
      </div>

      {/* Certificate Preview Column */}
      {isNameValid && (
        <>
          <div
            className={`flex flex-col  w-full lg:w-1/2 mt-10 lg:mt-0 items-center justify-center`}
          >
            <div className="relative" ref={certificateRef}>
              <img
                loading="lazy"
                src={isWinner ? certTemplateWinners : certTemplate}
                alt=""
                className="w-full pr-0 md:pr-5 h-full"
              />
              <div className="absolute w-full top-[50%] md:top-[51%] left-1/2 -translate-x-1/2 text-center  text-black font-semibold text-xl md:text-3xl">
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
