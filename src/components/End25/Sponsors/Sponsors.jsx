import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const SponsorsCarousel = () => {
  const controlsTop = useAnimation();
  const controlsBottom = useAnimation();

  const sponsorsData = [
    {
      id: 1,
      name: "Bank of Baroda",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Bank_of_Baroda_Logo.svg/1200px-Bank_of_Baroda_Logo.svg.png",
    },
    {
      id: 2,
      name: "Department of Science & Technology",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Department_of_Science_%26_Technology_%28India%29_Logo.png/220px-Department_of_Science_%26_Technology_%28India%29_Logo.png",
    },
    {
      id: 3,
      name: "Westbridge Capital",
      logo: "https://westbridge.com/wp-content/uploads/2022/03/Westbridge-logo-1.png",
    },
    {
      id: 4,
      name: "NPCI",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/National_Payments_Corporation_of_India_Logo.svg/1200px-National_Payments_Corporation_of_India_Logo.svg.png",
    },
    {
      id: 5,
      name: "Deutsche Bank",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Deutsche_Bank_AG_Logo.svg/1200px-Deutsche_Bank_AG_Logo.svg.png",
    },
    {
      id: 6,
      name: "Deloitte",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Deloitte_Logo.svg/1200px-Deloitte_Logo.svg.png",
    },
    {
      id: 7,
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
    },
  ];

  useEffect(() => {
    controlsTop.start({
      x: [0, -1200],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    });

    controlsBottom.start({
      x: [-1200, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    });
  }, [controlsTop, controlsBottom]);

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

        {/* Revealing Soon Section */}
        <motion.div 
          className="flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
         

          <div className="relative w-full max-w-md h-48 flex items-center justify-center">
            <div className="absolute inset-0 bg-teal-900/20 rounded-xl border border-teal-500/30 flex items-center justify-center">
              <div className="animate-pulse flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-teal-400 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-teal-300 text-lg">Coming Soon</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Sponsor Carousel (Hidden until ready) */}
        <div className="relative flex flex-col gap-8 overflow-hidden opacity-0 h-0">
          <motion.div className="flex items-center" animate={controlsTop}>
            {[...sponsorsData, ...sponsorsData].map((sponsor, index) => (
              <motion.div
                key={`top-${sponsor.id}-${index}`}
                className="flex-shrink-0 mx-4 bg-gradient-to-br from-black/30 to-teal-900/20 rounded-xl p-6 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 border border-teal-500/20"
                style={{
                  width: "220px",
                  height: "140px",
                  filter: "grayscale(80%)",
                  transition: "all 0.3s ease",
                }}
                whileHover={{
                  filter: "grayscale(0%)",
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(0, 252, 184, 0.2)"
                }}
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="flex items-center" animate={controlsBottom}>
            {[...sponsorsData, ...sponsorsData].map((sponsor, index) => (
              <motion.div
                key={`bottom-${sponsor.id}-${index}`}
                className="flex-shrink-0 mx-4 bg-gradient-to-br from-black/30 to-teal-900/20 rounded-xl p-6 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 border border-teal-500/20"
                style={{
                  width: "220px",
                  height: "140px",
                  filter: "grayscale(80%)",
                  transition: "all 0.3s ease",
                }}
                whileHover={{
                  filter: "grayscale(0%)",
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(0, 252, 184, 0.2)"
                }}
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>
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