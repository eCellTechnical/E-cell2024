import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const SponsorsCarousel = () => {
  const controlsTop = useAnimation();
  const controlsBottom = useAnimation();

  const sponsorsData = [
    {
      id: 1,
      name: "Bank of Baroda",
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQFjNtEbKoOtgg/company-logo_200_200/company-logo_200_200/0/1667315448766?e=2147483647&v=beta&t=gD8jzjVbU08wRGrhT1CZzpUwPu-qkqyCUfOijJnUyi0",
    },
    {
      id: 2,
      name: "Department of Sciences & Technology",
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQFjNtEbKoOtgg/company-logo_200_200/company-logo_200_200/0/1667315448766?e=2147483647&v=beta&t=gD8jzjVbU08wRGrhT1CZzpUwPu-qkqyCUfOijJnUyi0",
    },
    {
      id: 3,
      name: "Westbridge Capital",
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQFjNtEbKoOtgg/company-logo_200_200/company-logo_200_200/0/1667315448766?e=2147483647&v=beta&t=gD8jzjVbU08wRGrhT1CZzpUwPu-qkqyCUfOijJnUyi0",
    },
    {
      id: 4,
      name: "NPCI",
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQFjNtEbKoOtgg/company-logo_200_200/company-logo_200_200/0/1667315448766?e=2147483647&v=beta&t=gD8jzjVbU08wRGrhT1CZzpUwPu-qkqyCUfOijJnUyi0",
    },
    {
      id: 5,
      name: "Deutsche Bank",
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQFjNtEbKoOtgg/company-logo_200_200/company-logo_200_200/0/1667315448766?e=2147483647&v=beta&t=gD8jzjVbU08wRGrhT1CZzpUwPu-qkqyCUfOijJnUyi0",
    },
    {
      id: 6,
      name: "Deloitte",
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQFjNtEbKoOtgg/company-logo_200_200/company-logo_200_200/0/1667315448766?e=2147483647&v=beta&t=gD8jzjVbU08wRGrhT1CZzpUwPu-qkqyCUfOijJnUyi0",
    },
    {
      id: 7,
      name: "Google",
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQFjNtEbKoOtgg/company-logo_200_200/company-logo_200_200/0/1667315448766?e=2147483647&v=beta&t=gD8jzjVbU08wRGrhT1CZzpUwPu-qkqyCUfOijJnUyi0",
    },
    {
      id: 8,
      name: "Bank of Baroda",
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQFjNtEbKoOtgg/company-logo_200_200/company-logo_200_200/0/1667315448766?e=2147483647&v=beta&t=gD8jzjVbU08wRGrhT1CZzpUwPu-qkqyCUfOijJnUyi0",
    },
    {
      id: 9,
      name: "Department of Sciences & Technology",
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQFjNtEbKoOtgg/company-logo_200_200/company-logo_200_200/0/1667315448766?e=2147483647&v=beta&t=gD8jzjVbU08wRGrhT1CZzpUwPu-qkqyCUfOijJnUyi0",
    },
  ];

  // Animation effects
  useEffect(() => {
    controlsTop.start({
      x: [0, -1200],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 25,
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
          duration: 25,
          ease: "linear",
        },
      },
    });
  }, [controlsTop, controlsBottom]);

  return (
    <div className="w-full py-16 overflow-hidden bg-gradient-to-b bg-[#00000055]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 font-modern">
          <div className="inline-block px-4 py-2 bg-opacity-20 bg-[#00FCB8] rounded-md mb-3">
            <p className="text-[#00FCB8] font-medium tracking-wider">
              OUR PARTNERS
            </p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            Our <span className="text-[#00FCB8]">Sponsors</span>
          </h1>
          <div className="flex items-center justify-center mt-3 mb-6">
            <div className="h-1 w-10 bg-gray-300 dark:bg-gray-600"></div>
            <div className="h-1 w-20 bg-[#00FCB8] mx-2"></div>
            <div className="h-1 w-10 bg-gray-300 dark:bg-gray-600"></div>
          </div>
        </div>

        <div className="relative flex flex-col gap-8 overflow-hidden">
          <motion.div className="flex items-center" animate={controlsTop}>
            {sponsorsData.map((sponsor) => (
              <div
                key={`top-${sponsor.id}`}
                className="flex-shrink-0 mx-4  bg-opacity-20 bg-[#00FCB8] rounded-xl p-4 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                style={{
                  width: "200px",
                  height: "120px",
                  filter: "grayscale(30%)",
                  transition: "filter 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.filter = "grayscale(0%)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.filter = "grayscale(30%)")
                }
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>

          <motion.div className="flex items-center" animate={controlsBottom}>
            {sponsorsData.map((sponsor) => (
              <div
                key={`bottom-${sponsor.id}`}
                className="flex-shrink-0 mx-4 bg-opacity-20 bg-[#00FCB8] rounded-xl p-4 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                style={{
                  width: "200px",
                  height: "120px",
                  filter: "grayscale(30%)",
                  transition: "filter 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.filter = "grayscale(0%)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.filter = "grayscale(30%)")
                }
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>

        <div className="text-center mt-12">
          <button
            className="px-8 py-3 bg-[#00FCB8] text-gray-900 font-semibold rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-md hover:shadow-lg"
            onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=ecell@kiet.edu", "_blank")}
          >
            Become a Sponsor
          </button>
        </div>
      </div>
    </div>
  );
};

export default SponsorsCarousel;
