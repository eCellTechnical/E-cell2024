import "../styles/fonts.css";

import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import Kullu from "../assets/images/Kullu.jpg";
import Shivam_Ahuja from "../assets/images/Shivam_Ahuja.png";
import Yash from "../assets/images/Yash.jpg";
import Samaakshi_Jha from "../assets/images/itti_chokhaaaa.jpg";

const Past_Performers = () => {
  const teamMembers = [
    {
      name: "Aaditya Kulshreshth",
      role: "Stand-Up Comedian & Storyteller",
      image: Kullu,
      description: "Aaditya Kulshreshth, aka Kullu, is a master of storytelling and punchlines, lighting up stages with wit and realness.",
      insta: "http://instagram.com/kullubaaazi/?hl=en",
      facebook: "https://facebook.com/adibhai14/",
    },
    {
      name: "Shivam Ahuja",
      role: "Soulful Singer | Live Performer",
      image: Shivam_Ahuja,
      description: "Shivam Ahuja pours soul into every note. A voice that sticks with you long after the performance ends.",
      insta: "https://www.instagram.com/shivamahuja_music/",
      facebook: "https://www.facebook.com/shivam.ahuja.397501/",
    },
    {
      name: "Yash Rathi",
      role: "Comedian | Performer | Voice of the Youth",
      image: Yash,
      description: "Yash Rathi brings fire to the mic with bold poetry, sharp humor, and a fearless voice that resonates with the youth.",
      insta: "https://www.instagram.com/yashrathi.r/?hl=en",
      facebook: "https://www.facebook.com/yashrathicomedy/",
    },
    {
      name: "Samaakshi Jha",
      role: "Poet | Performer | Voice with Grace",
      image: Samaakshi_Jha,
      description: "Samaakshi Jha delivers poetry with poise and power, capturing hearts with grace and deeply felt emotion.",
      insta: "https://www.instagram.com/littiii_chokha/?hl=en",
      facebook: "https://www.facebook.com/p/Samaakshi-Jha-100011596448688/",
    },
  ];
  

  return (
    <>

    <div
      id="past-performers"
      className=" md:min-h-screen text-white py-1 md:py-16 px-8 md:px-4 bg-gradient-to-b "
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="bg-clip-text text-transparent font-medium uppercase tracking-wider mb-2">
            PAST Performers
          </p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-2">
            MEET THE PERFORMERS THAT MAKE THE
          </h1>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
            EVENT{" "}
            <span className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent custom-font">
              UNSTOPPABLE
            </span>
          </h2>
        </div>

        {/* Speaker Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-full overflow-hidden rounded-lg mb-4 group">
                {/* Image */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full object-cover aspect-[3/4] transform transition duration-300 ease-in-out group-hover:scale-110 border-4 border-[#00FCB8] "
                />

                <div className="absolute inset-3  bg-[#001711] opacity-0 flex flex-col justify-center rounded-lg items-center space-y-4  scale-0 group-hover:opacity-80 group-hover:scale-100 transition-all duration-400 ease-in-out">
                  <div className="absolute bottom-1 left-3 right-3 text-white opacity-10 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-10">
                    <p className="text-green-400 font-semibold">
                      {member.role}
                    </p>
                    <p className="text-sm">
                      {member.description}
                    </p>
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={member.insta}
                      className="bg-[#00FCB8] text-black p-3 rounded-full hover:scale-130 "
                    >
                      <i className="">
                        <FaInstagramSquare />
                      </i>
                    </a>
                    <a
                      href={member.facebook}
                      className="bg-[#00FCB8] text-black p-3 rounded-full hover:scale-130 transition "
                    >
                      <i>
                        <FaFacebook />
                      </i>
                    </a>
                   
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1 bg-gradient-to-r from-[#00FCB8] via-[#00c2a8] to-[#4eedd8] bg-clip-text text-transparent">
                {member.name}
              </h3>
              <p className="text-gray-300">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Past_Performers;
