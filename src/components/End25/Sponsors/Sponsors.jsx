import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import Adda247 from "../../../assets/EndeavorLogoSponsors/EndeavorLogoSponsors/adda247.png";
import DelhiEvents from "../../../assets/EndeavorLogoSponsors/EndeavorLogoSponsors/delhievents_logo.jpg";
import MyEquation from "../../../assets/EndeavorLogoSponsors/EndeavorLogoSponsors/download.png";
import EatMyNews from "../../../assets/EndeavorLogoSponsors/EndeavorLogoSponsors/eatmynews.png";
import EdTimes from "../../../assets/EndeavorLogoSponsors/EndeavorLogoSponsors/edtimes.png";
import EthIndia from "../../../assets/EndeavorLogoSponsors/EndeavorLogoSponsors/ethindia.png";
import EvePaper from "../../../assets/EndeavorLogoSponsors/EndeavorLogoSponsors/evepaper.jpg";
import Finlatics from "../../../assets/EndeavorLogoSponsors/EndeavorLogoSponsors/finlatics.png";
import Herody from "../../../assets/EndeavorLogoSponsors/EndeavorLogoSponsors/herody.jpg";
import InterviewBuddy from "../../../assets/EndeavorLogoSponsors/EndeavorLogoSponsors/interviewbuddy.webp";
import KashiHomes from "../../../assets/EndeavorLogoSponsors/EndeavorLogoSponsors/kashihomes.webp";
import KodeKloud from "../../../assets/EndeavorLogoSponsors/EndeavorLogoSponsors/kodekloud_logo.jpg";
import Polygon from "../../../assets/EndeavorLogoSponsors/EndeavorLogoSponsors/polygon.webp";
import PrepInsta from "../../../assets/EndeavorLogoSponsors/EndeavorLogoSponsors/prepinsta_logo.jpg";
import SevaHub from "../../../assets/EndeavorLogoSponsors/EndeavorLogoSponsors/sevahub.jpeg";
import SharpEconomy from "../../../assets/EndeavorLogoSponsors/EndeavorLogoSponsors/sharpeconomy.png";
import StartupNews from "../../../assets/EndeavorLogoSponsors/EndeavorLogoSponsors/startupnewsLogo.jpeg";
import StarWorks from "../../../assets/EndeavorLogoSponsors/EndeavorLogoSponsors/starworks.png";
import TheCarzilla from "../../../assets/EndeavorLogoSponsors/EndeavorLogoSponsors/thecarzilla.jpg";
import Trends from "../../../assets/EndeavorLogoSponsors/EndeavorLogoSponsors/trends.png";
import TruScholar from "../../../assets/EndeavorLogoSponsors/EndeavorLogoSponsors/truscholar.webp";
import Unstop from "../../../assets/EndeavorLogoSponsors/EndeavorLogoSponsors/unstop.png";
import WeBuild from "../../../assets/EndeavorLogoSponsors/EndeavorLogoSponsors/webuild.png";
import Wolfram from "../../../assets/EndeavorLogoSponsors/EndeavorLogoSponsors/wolfram.jpg";
import XCentic from "../../../assets/EndeavorLogoSponsors/EndeavorLogoSponsors/XCENTIC.webp";
import YouthIncorporated from "../../../assets/EndeavorLogoSponsors/EndeavorLogoSponsors/youthincorporsatedd.jpg";


const SponsorsCarousel = () => {
  const controlsTop = useAnimation();
  const controlsMiddle = useAnimation();
  const controlsBottom = useAnimation();

  const sponsorsData = [
    {
      id: 1,
      name: "Adda247",
      logo: `${Adda247}`,
    },
    {
      id: 2,
      name: "DelhiEvents",
      logo: `${DelhiEvents}`,
    },
    {
      id: 3,
      name: "My Equation",
      logo: `${MyEquation}`,
    },
    {
      id: 4,
      name: "Eat My News",
      logo: `${EatMyNews}`,
    },
    {
      id: 5,
      name: "Ed Times",
      logo: `${EdTimes}`,
    },
    {
      id: 6,
      name: "Eth India",
      logo: `${EthIndia}`,
    },
    {
      id: 7,
      name: "Eve Paper",
      logo: `${EvePaper}`,
    },
    {
      id: 8,
      name: "Finlatics",
      logo: `${Finlatics}`,
    },
    {
      id: 9,
      name: "Herody",
      logo: `${Herody}`,
    },
    {
      id: 10,
      name: "Interview Buddy",
      logo: `${InterviewBuddy}`,
    },
    {
      id: 11,
      name: "Kashi Homes",
      logo: `${KashiHomes}`,
    },
    {
      id: 12,
      name: "Kode Kloud",
      logo: `${KodeKloud}`,
    },
    {
      id: 13,
      name: "Polygon",
      logo: `${Polygon}`,
    },
    {
      id: 14,
      name: "PrepInsta",
      logo: `${PrepInsta}`,
    },
    {
      id: 15,
      name: "Seva Hub",
      logo: `${SevaHub}`,
    },
    {
      id: 16,
      name: "Sharp Economy",
      logo: `${SharpEconomy}`,
    },
    {
      id: 17,
      name: "Startup News",
      logo: `${StartupNews}`,
    },
    {
      id: 18,
      name: "Star Works",
      logo: `${StarWorks}`,
    },
    {
      id: 19,
      name: "The Carzilla",
      logo: `${TheCarzilla}`,
    },
    {
      id: 20,
      name: "Trends",
      logo: `${Trends}`,
    },
    {
      id: 21,
      name: "TruScholar",
      logo: `${TruScholar}`,
    },
    {
      id: 22,
      name: "Unstop",
      logo: `${Unstop}`,
    },
    {
      id: 23,
      name: "We Build",
      logo: `${WeBuild}`,
    },
    {
      id: 24,
      name: "Wolfram",
      logo: `${Wolfram}`,
    },
    {
        id : 25 ,
        name : "XCentric" ,
        logo : `${XCentic}`
     },
     {
        id : 26 ,
        name : "Youth Incorporated" ,
        logo : `${YouthIncorporated}`
    }
  ];

  const chunkSize = Math.ceil(sponsorsData.length / 3);
  const sponsorGroups = [
    sponsorsData.slice(0, chunkSize),
    sponsorsData.slice(chunkSize, chunkSize * 2),
    sponsorsData.slice(chunkSize * 2),
  ];

  const createInfiniteItems = (items) => [...items, ...items, ...items];

  useEffect(() => {
    const startAnimation = async () => {
      // Reset to initial position
      await controlsTop.start({ x: 0 });
      await controlsMiddle.start({ x: -1200 });
      await controlsBottom.start({ x: 0 });

      // Start infinite animations
      controlsTop.start({
        x: -1200 * 2, // Move two full widths
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 60,
            ease: "linear",
          },
        },
      });

      controlsMiddle.start({
        x: 0,
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 50,
            ease: "linear",
          },
        },
      });

      controlsBottom.start({
        x: -1200 * 2,
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 70,
            ease: "linear",
          },
        },
      });
    };

    startAnimation();
  }, [controlsTop, controlsMiddle, controlsBottom]);

  return (
    <div className="w-full py-16 overflow-hidden bg-gradient-to-b from-black/80 to-[#001a1a]/80 relative">
      {/* Glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-teal-500 rounded-full filter blur-[100px] opacity-10"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-teal-400 rounded-full filter blur-[100px] opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-opacity-20 bg-[#00FCB8] rounded-md mb-4">
              <p className="text-[#00FCB8] font-medium tracking-wider text-sm md:text-base">
                OUR PARTNERS
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-[#00FCB8]">Sponsors</span>
            </h1>
            <div className="flex items-center justify-center mt-4 mb-8">
              <div className="h-1 w-10 bg-gray-600"></div>
              <div className="h-1 w-20 bg-[#00FCB8] mx-2"></div>
              <div className="h-1 w-10 bg-gray-600"></div>
            </div>
          </motion.div>
        </div>

        <div className="relative flex flex-col gap-8">
          {/* Top Carousel */}
          <div className="overflow-hidden">
            <motion.div className="flex items-center w-max" animate={controlsTop}>
              {createInfiniteItems(sponsorGroups[0]).map((sponsor, index) => (
                <motion.div
                  key={`top-${sponsor.id}-${index}`}
                  className="flex-shrink-0 mx-4 bg-gradient-to-br from-black/30 to-teal-900/20 rounded-xl p-6 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 border border-teal-500/20"
                  style={{
                    width: "220px",
                    height: "140px",
                    transition: "all 0.3s ease",
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(0, 252, 184, 0.2)"
                  }}
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-w-full max-h-full bg-white object-contain"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Middle Carousel */}
          <div className="overflow-hidden">
            <motion.div className="flex items-center w-max" animate={controlsMiddle}>
              {createInfiniteItems(sponsorGroups[1]).map((sponsor, index) => (
                <motion.div
                  key={`middle-${sponsor.id}-${index}`}
                  className="flex-shrink-0 mx-4 bg-gradient-to-br from-black/30 to-teal-900/20 rounded-xl p-6 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 border border-teal-500/20"
                  style={{
                    width: "220px",
                    height: "140px",
                    transition: "all 0.3s ease",
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(0, 252, 184, 0.2)"
                  }}
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-w-full max-h-full bg-white object-contain"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bottom Carousel */}
          <div className="overflow-hidden">
            <motion.div className="flex items-center w-max" animate={controlsBottom}>
              {createInfiniteItems(sponsorGroups[2]).map((sponsor, index) => (
                <motion.div
                  key={`bottom-${sponsor.id}-${index}`}
                  className="flex-shrink-0 mx-4 bg-gradient-to-br from-black/30 to-teal-900/20 rounded-xl p-6 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 border border-teal-500/20"
                  style={{
                    width: "220px",
                    height: "140px",
                    transition: "all 0.3s ease",
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(0, 252, 184, 0.2)"
                  }}
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-w-full bg-white max-h-full object-contain"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-teal-400 to-teal-600 text-gray-900 font-semibold rounded-full hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-teal-500/20 relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open("mailto:ecell@kiet.edu", "_blank")}
          >
            <span className="relative z-10">Become a Sponsor</span>
            <span className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default SponsorsCarousel;