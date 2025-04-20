import "../styles/fonts.css";

import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import Kullu from "../assets/images/Kullu.jpg";
// import Shivam_Ahuja from "../assets/images/Shivam_Ahuja.png";
import Yash from "../assets/images/Yash.jpg";
// import Samaakshi_Jha from "../assets/images/itti_chokhaaaa.jpg";

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
      name: "Ravi Gupta",
      role: "Stand-Up Comedian & Storyteller",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQHwO97vOcEbQg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1674197760277?e=1750896000&v=beta&t=dwaXxyq7bVnk887EoLwLRzTxjHM5l_LDDhx6qFdZjB8",
      description: "Ravi Gupta, aka “Shudh Desi Comic,” is the kind of guy who can turn your everyday struggles into a full-blown laugh riot",
      insta: "https://www.instagram.com/shudhdesicomic",
      facebook: "https://www.facebook.com/shudhdesicomic/",
    },
    {
      name: "Rahgir",
      role: "Folk Musician & Lyricist",
      image: "data:image/jpeg;base64,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",
      description: "Rahgir is a soulful wanderer who turns everyday stories into powerful folk songs, blending raw emotion with rustic charm.",
      insta: "https://www.instagram.com/rahgirlive/?hl=en",
      facebook: "https://www.facebook.com/sunilrahgir/",
    },
    // {
    //   name: "Shivam Ahuja",
    //   role: "Soulful Singer | Live Performer",
    //   image: Shivam_Ahuja,
    //   description: "Shivam Ahuja pours soul into every note. A voice that sticks with you long after the performance ends.",
    //   insta: "https://www.instagram.com/shivamahuja_music/",
    //   facebook: "https://www.facebook.com/shivam.ahuja.397501/",
    // },
    {
      name: "Yash Rathi",
      role: "Comedian | Performer | Voice of the Youth",
      image: Yash,
      description: "Yash Rathi brings fire to the mic with bold poetry, sharp humor, and a fearless voice that resonates with the youth.",
      insta: "https://www.instagram.com/yashrathi.r/?hl=en",
      facebook: "https://www.facebook.com/yashrathicomedy/",
    },
    // {
    //   name: "Samaakshi Jha",
    //   role: "Poet | Performer | Voice with Grace",
    //   image: Samaakshi_Jha,
    //   description: "Samaakshi Jha delivers poetry with poise and power, capturing hearts with grace and deeply felt emotion.",
    //   insta: "https://www.instagram.com/littiii_chokha/?hl=en",
    //   facebook: "https://www.facebook.com/p/Samaakshi-Jha-100011596448688/",
    // },
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
