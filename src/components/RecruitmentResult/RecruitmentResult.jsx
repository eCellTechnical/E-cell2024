import React, { useEffect, useState } from "react";
import confetti from "canvas-confetti";
// import "./RecruitmentResult.css";
import logolight from "../../assets/navbar/black logo br.webp";
import logodark from "../../assets/navbar/white logo br.webp";
import useTheme from "../../context/theme";
import { color } from "framer-motion";
function RecruitmentResult() {
  const [loaded, setLoaded] = useState(false);
  const { themeMode } = useTheme();

  useEffect(() => {
    setLoaded(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  const domains = [
    {
      name: "Technical",
      competitors: [
        {
          name: "Anurag shrivastav",
          branch: "CSE",
          year: "1st",
          color: "bg-blue-100",
        },

        {
          name: "Jatin Gupta ",
          branch: "IT",
          year: "1st",
          color: "bg-blue-50",
        },

        {
          name: "Vaibhav Gupta",
          branch: "CS",
          year: "1st",
          color: "bg-blue-100",
        },

        {
          name: "Krishna sharma ",
          branch: "CSIT",
          year: "1st",
          color: "bg-blue-50",
        },

        {
          name: "Pranjali Sehrawat",
          branch: "CSE",
          year: "1st",
          color: "bg-blue-100",
        },
        {
          name: "Tulika Anand",
          branch: "CS",
          year: "1st",
          color: "bg-blue-100",
        },

        {
          name: "Anant Mittal",
          branch: "CS",
          year: "1st",
          color: "bg-blue-50",
        },

        {
          name: "Arpit Srivastava",
          branch: "CSE",
          year: "1st",
          color: "bg-blue-100",
        },

        {
          name: "Sonali Tyagi",
          branch: "CSE(AI)",
          year: "2nd",
          color: "bg-blue-50",
        },

        {
          name: "Siddhant Gupta",
          branch: "CSE(AI)",
          year: "2nd",
          color: "bg-blue-100",
        },

        {
          name: "Mahima Goyal",
          branch: "MCA",
          year: "1st",
          color: "bg-blue-50",
        },
        {
          name: "Harsh Maheshwari",
          branch: "MCA",
          year: "1st",
          color: "bg-blue-50",
        },
      ],
    },
    {
      name: "Graphics Studio",
      competitors: [
        {
          name: "Aditya Chauhan",
          branch: "CSIT",
          year: "1st",
          color: "bg-pink-100",
        },

        {
          name: "NISHANT VISHWAKARMA",
          branch: "CSIT",
          year: "1st",
          color: "bg-pink-50",
        },

        {
          name: "Preeti Singh",
          branch: "CSE(AIML)",
          year: "1st",
          color: "bg-pink-100",
        },

        {
          name: "Karnveer Dixit",
          branch: "ECE",
          year: "1st",
          color: "bg-pink-50",
        },

        {
          name: "Avani Singhal",
          branch: "ELCE",
          year: "1st",
          color: "bg-pink-100",
        },

        {
          name: "Abhijeet Kumar Gautam ",
          branch: "CS",
          year: "1st",
          color: "bg-pink-50",
        },

        {
          name: "Yuvika Jindal",
          branch: "CS",
          year: "1st",
          color: "bg-pink-100",
        },

        {
          name: "SHREYASI RAWAT",
          branch: "EEE",
          year: "1st",
          color: "bg-pink-50",
        },

        {
          name: "Ayush kumar",
          branch: "ECE",
          year: "1st",
          color: "bg-pink-100",
        },

        // {
        //   name: "Dhruv Srivastava",
        //   branch: "ECE",
        //   year: "1st",
        //   color: "bg-pink-50",
        // },

        {
          name: "Ananya Baranwal",
          branch: "ECE",
          year: "1st",
          color: "bg-pink-50",
        },
        {
          name: "Vivek Chauhan",
          branch: "CS",
          year: "1st",
          color: "bg-pink-100",
        },

        {
          name: "Ishita Jindal",
          branch: "MCA",
          year: "1st",
          color: "bg-pink-50",
        },
      ],
    },
    {
      name: "Public Relations",
      competitors: [
        {
          name: "Dipti Gupta",
          branch: "IT",
          year: "1st",
          color: "bg-green-100",
        },

        {
          name: "Aaditya sharma",
          branch: "IT",
          year: "1st",
          color: "bg-green-50",
        },

        {
          name: "Atharv Gupta",
          branch: "CSE",
          year: "1st",
          color: "bg-green-100",
        },

        {
          name: "ARJUN SINGH PUNDIR",
          branch: "CSE-AIML",
          year: "1st",
          color: "bg-green-50",
        },

        {
          name: "Luv Agarwal",
          branch: "CSIT",
          year: "1st",
          color: "bg-green-100",
        },

        {
          name: "Anshika chaurasia",
          branch: "ECE",
          year: "1st",
          color: "bg-green-50",
        },

        {
          name: "Vansh Gautam",
          branch: "ECE",
          year: "1st",
          color: "bg-green-100",
        },

        {
          name: "Viraj Jain",
          branch: "ME",
          year: "1st",
          color: "bg-green-50",
        },

        {
          name: "Ameera Arfeen",
          branch: "ELCE",
          year: "1st",
          color: "bg-green-100",
        },

        {
          name: "GAURI AGARWAL",
          branch: "ELCE",
          year: "1st",
          color: "bg-green-50",
        },
      ],
    },
    {
      name: "Corporate Relations",
      competitors: [
        {
          name: "Shaswat Mishra",
          branch: "CS",
          year: "1st",
          color: "bg-yellow-100",
        },

        {
          name: "Varun Prakash Srivastava",
          branch: "CSE-AI",
          year: "1st",
          color: "bg-yellow-50",
        },

        {
          name: "Shreya baranwal",
          branch: "IT",
          year: "1st",
          color: "bg-yellow-100",
        },

        {
          name: "Vanshika Arora",
          branch: "CSE-AIML",
          year: "1st",
          color: "bg-yellow-50",
        },

        {
          name: "Yash jain",
          branch: "CSE",
          year: "1st",
          color: "bg-yellow-100",
        },

        {
          name: "Dhruv Srivastava",
          branch: "ECE",
          year: "1st",
          color: "bg-yellow-50",
        },

        {
          name: "Rupesh Chaurasia",
          branch: "CSIT",
          year: "1st",
          color: "bg-yellow-100",
        },

        {
          name: "Aniket Tyagi",
          branch: "CSIT",
          year: "1st",
          color: "bg-yellow-50",
        },

        {
          name: "Aashi Chaudhary",
          branch: "CS",
          year: "1st",
          color: "bg-yellow-100",
        },

        {
          name: "Tejas Rastogi",
          branch: "CSE",
          year: "1st",
          color: "bg-yellow-50",
        },

        {
          name: "Saransh Sahu",
          branch: "CSE",
          year: "1st",
          color: "bg-yellow-100",
        },

        {
          name: "Naman Verma",
          branch: "CSE",
          year: "1st",
          color: "bg-yellow-50",
        },

        {
          name: "Avani Sharma",
          branch: "CSE",
          year: "1st",
          color: "bg-yellow-100",
        },

        {
          name: "Anshika Shivhare",
          branch: "CSIT",
          year: "2nd",
          color: "bg-yellow-50",
        },
        {
          name: "Piyush Sharma",
          branch: "B.Pharma",
          year: "1st",
          color: "bg-yellow-100",
        },
        {
          name: "Rihan",
          branch: "B.Pharma",
          year: "2nd",
          color: "bg-yellow-50",
        },
      ],
    },
    {
      name: "Event Management",
      competitors: [
        {
          name: "Rishika Batra",
          branch: "CSIT",
          year: "1st",
          color: "bg-purple-100",
        },

        {
          name: "Aditi Narang",
          branch: "CSE-AIML",
          year: "1st",
          color: "bg-purple-50",
        },

        {
          name: "Pari Gupta",
          branch: "ECE",
          year: "1st",
          color: "bg-purple-100",
        },

        {
          name: "Tanya Mishra",
          branch: "IT",
          year: "1st",
          color: "bg-purple-50",
        },

        {
          name: "Anmol chaubey",
          branch: "CSIT",
          year: "1st",
          color: "bg-purple-100",
        },

        {
          name: "Janak Singh",
          branch: "ECE",
          year: "1st",
          color: "bg-purple-50",
        },

        {
          name: "Dhruv Chaudhary",
          branch: "ECE",
          year: "1st",
          color: "bg-purple-100",
        },

        {
          name: "Antas Kumar Dubey",
          branch: "CSIT",
          year: "1st",
          color: "bg-purple-50",
        },

        {
          name: "Rishi raj",
          branch: "ECE",
          year: "1st",
          color: "bg-purple-100",
        },

        {
          name: "Dipali Singh",
          branch: "ECE",
          year: "1st",
          color: "bg-purple-50",
        },

        {
          name: "Kashish Tyagi",
          branch: "ELCE",
          year: "1st",
          color: "bg-purple-100",
        },

        {
          name: "Priyanz Varshney",
          branch: "IT",
          year: "2nd",
          color: "bg-purple-50",
        },

        {
          name: "Kushagra ",
          branch: "CSEAI",
          year: "2nd",
          color: "bg-purple-100",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-blue-100 to-green-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 pt-24">
      <header className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
          <div
            className={`flex items-center justify-center space-x-4 transition-opacity duration-1000 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={`${themeMode == "dark" ? logodark : logolight}`}
              alt="Ecell Logo"
              width={100}
              height={100}
              className="transition-transform duration-300 ease-out transform hover:scale-110"
            />
            {/* <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-200 ">
              E-Cell
            </h1> */}
          </div>
          <p
            className={`text-2xl text-gray-600 dark:text-gray-400 mt-4 text-center transition-opacity duration-1000 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            Congratulations to all our selected candidates! Welcome to the
            E-Cell family!
          </p>
          <h2
            className={`text-4xl font-bold text-gray-800 dark:text-gray-200 relative inline-block mt-8 transition-opacity text-center duration-1000 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            Recruitment Results
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-blue-500 to-green-500 dark:from-pink-700 dark:via-blue-700 dark:to-green-700 transform scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
          </h2>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {domains.map((domain, domainIndex) => (
          <React.Fragment key={domain.name}>
            <section className="mb-16">
              <h3
                className={`text-3xl font-bold text-gray-800 dark:text-gray-200 mb-8 transition-opacity duration-1000 text-center md:text-left ${
                  loaded ? "opacity-100" : "opacity-0"
                }`}
                style={{ transitionDelay: `${600 + domainIndex * 200}ms` }}
              >
                {domain.name} Domain
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {domain.competitors.map((competitor, index) => (
                  <div
                    key={index}
                    className={`overflow-hidden transition-all duration-700 ease-out hover:shadow-xl ${
                      competitor.color
                    } ${loaded ? "opacity-100" : "opacity-0"} rounded-lg p-6`}
                    style={{
                      transitionDelay: `${800 + index * 100}ms`,
                      animation: loaded
                        ? `slideIn 0.5s ease-out ${800 + index * 100}ms both`
                        : "none",
                    }}
                  >
                    <div className="pb-0">
                      <div className="flex items-center justify-center text-center space-x-4">
                        <div>
                          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-800 transition-colors duration-300 ease-out ">
                            {competitor.name}
                          </h2>
                          <p className="text-lg text-gray-600 dark:text-gray-600 transition-colors duration-300 ease-out ">
                            {competitor.branch} , {competitor.year} year
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            {domainIndex < domains.length - 1 && (
              <div className="w-full border-t border-gray-300 dark:border-gray-600 my-16"></div>
            )}
          </React.Fragment>
        ))}
      </main>

      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 text-center transition-opacity duration-1000 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "2000ms" }}
      >
        <p className="text-xl text-gray-700 dark:text-gray-300">
          To those who didn&apos;t make it this time: Keep pushing forward! Your
          dedication and effort are commendable.<br></br>There&apos;s always a
          next opportunity waiting for you.
        </p>
      </div>
    </div>
  );
}

export default RecruitmentResult;
