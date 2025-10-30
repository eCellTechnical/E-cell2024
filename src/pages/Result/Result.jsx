import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';


const recruitsData = [
  // Technical
  { id: 1, name: "Tejash Prakash", email: "tejash.2428elce1613@kiet.edu", branch: "ELCE", year: "2nd", domain: "Technical" },
  { id: 2, name: "Rohit Chauhan", email: "rohit.2428cse2064@kiet.edu", branch: "CSE", year: "2nd", domain: "Technical" },
  { id: 3, name: "Ayush Srivastava", email: "ayush.25006050@kiet.edu", branch: "IT", year: "1st", domain: "Technical" },
  { id: 4, name: "Krishna Singh", email: "krishna.25004191@kiet.edu", branch: "CSE-AIML", year: "1st", domain: "Technical" },
  { id: 5, name: "Shreya", email: "shreya.25009033@kiet.edu", branch: "EEE", year: "1st", domain: "Technical" },
  { id: 6, name: "Prakhar Srivastava", email: "prakhar.25002243@kiet.edu", branch: "CSE", year: "1st", domain: "Technical" },
  { id: 7, name: "Rudresh Rajvansh", email: "rudresh.25001222@kiet.edu", branch: "CS", year: "1st", domain: "Technical" },
  { id: 8, name: "Harshika Pal", email: "harshika.25003108@kiet.edu", branch: "CSE-AI", year: "1st", domain: "Technical" },
  { id: 9, name: "Madhav Vashistra", email: "madhav.25004204@kiet.edu", branch: "CSE-AIML", year: "1st", domain: "Technical" },
  { id: 10, name: "Anuj Yadav", email: "anuj.25001056@kiet.edu", branch: "CS", year: "1st", domain: "Technical" },

  // Graphics
  { id: 11, name: "Piyush Mishra", email: "piyush.25004237@kiet.edu", branch: "CSE-AIML", year: "1st", domain: "Graphics" },
  { id: 12, name: "Anurag Singh", email: "anurag.25006032@kiet.edu", branch: "IT", year: "1st", domain: "Graphics" },
  { id: 13, name: "Abhishek Raghav", email: "abhishek.25006009@kiet.edu", branch: "IT", year: "1st", domain: "Graphics" },
  { id: 14, name: "Harshit Singh", email: "harshit.2428cs2009@kiet.edu", branch: "CS", year: "1st", domain: "Graphics" },
  { id: 15, name: "Rudransh Singh", email: "rudransh.25004267@kiet.edu", branch: "CSE-AIML", year: "1st", domain: "Graphics" },
  { id: 16, name: "Divyansh Mishra", email: "divyansh.25001100@kiet.edu", branch: "CS", year: "1st", domain: "Graphics" },
  { id: 17, name: "Tanishq Sharma", email: "tanishq.25004337@kiet.edu", branch: "CSE-AIML", year: "1st", domain: "Graphics" },
  { id: 18, name: "Vrinda Agrawal", email: "vrinda.25002369@kiet.edu", branch: "CSE", year: "1st", domain: "Graphics" },
  { id: 19, name: "Kaustubh Yadav", email: "kaustubh.2428cs2463@kiet.edu", branch: "CS", year: "2nd", domain: "Graphics" },
  { id: 20, name: "Sumit Raput", email: "sumit.2428cs1665@kiet.edu", branch: "CS", year: "2nd", domain: "Graphics" },

  // Public Relations
  { id: 22, name: "Nikhil Kumar Singh", email: "nikhil.2428cseai1016@kiet.edu", branch: "CSE-AI", year: "2nd", domain: "Public Relations" },
  { id: 23, name: "Divyesh Gupta", email: "divyesh.25007071@kiet.edu", branch: "ECE", year: "1st", domain: "Public Relations" },
  { id: 24, name: "Krishna Sharma", email: "krishna.25005119@kiet.edu", branch: "CSIT", year: "1st", domain: "Public Relations" },
  { id: 25, name: "Shristi Singhal", email: "shristi.25003245@kiet.edu", branch: "CSE-AI", year: "1st", domain: "Public Relations" },
  { id: 26, name: "Nivedita Tyagi", email: "nivedita.2428bph2664@kiet.edu", branch: "Other", year: "2nd", domain: "Public Relations" },
  { id: 27, name: "Alok Kumar Mishra", email: "alok.2428cseai2208@kiet.edu", branch: "CSE-AI", year: "2nd", domain: "Public Relations" },
  { id: 28, name: "Krish Gupta", email: "krish.25002185@kiet.edu", branch: "CSE", year: "1st", domain: "Public Relations" },
  { id: 29, name: "Nirmal Kumar", email: "nirmal.2428cseai2008@kiet.edu", branch: "CSE-AI", year: "2nd", domain: "Public Relations" },
  { id: 30, name: "Jaya Chaturvedi", email: "jaya.25006075@kiet.edu", branch: "IT", year: "1st", domain: "Public Relations" },
  { id: 31, name: "Anushka Garg", email: "anushka.25007037@kiet.edu", branch: "ECE", year: "1st", domain: "Public Relations" },
  { id: 32, name: "Arnav Singh", email: "arnav.25005054@kiet.edu", branch: "CSIT", year: "1st", domain: "Public Relations" },

  // Corporate Relations
  { id: 33, name: "Krishna Sharma", email: "krishna.25005119@kiet.edu", branch: "CSIT", year: "1st", domain: "Corporate Relations" },
  { id: 34, name: "Archit Mittal", email: "archit.25001059@kiet.edu", branch: "CS", year: "1st", domain: "Corporate Relations" },
  { id: 35, name: "Rohit Chauhan", email: "rohit.2428cse2064@kiet.edu", branch: "CSE", year: "2nd", domain: "Corporate Relations" },
  { id: 36, name: "Dherya Varshney", email: "dherya.25005093@kiet.edu", branch: "CSIT", year: "1st", domain: "Corporate Relations" },
  { id: 37, name: "Pratish Singh", email: "pratish.2428cse797@kiet.edu", branch: "CSE", year: "2nd", domain: "Corporate Relations" },
  { id: 38, name: "Nikhil", email: "nikhil.25003167@kiet.edu", branch: "CSEAI", year: "1st", domain: "Corporate Relations" },
  { id: 39, name: "Venus Chauhan", email: "venus.25003292@kiet.edu", branch: "CSEAI", year: "1st", domain: "Corporate Relations" },
  { id: 40, name: "Priyanshu Kumar", email: "priyanshu.25003193@kiet.edu", branch: "CSEAI", year: "1st", domain: "Corporate Relations" },
  { id: 41, name: "Nishika Bhushan", email: "nishika.25005140@kiet.edu", branch: "CSIT", year: "1st", domain:"Corporate Relations" },
  { id: 42, name: "Aman Yadav", email: "aman.25006022@kiet.edu", branch: "IT", year: "1st", domain: "Corporate Relations" },
  { id: 43, name: "Shakti Yadav", email: "shakti.25005174@kiet.edu", branch: "CSIT", year: "1st", domain: "Corporate Relations" },
  { id: 44, name: "Lokesh Kumar Chaudary", email: "lokesh.25014024@kiet.edu", branch: "CSE- Cyber Security", year: "1st", domain: "Corporate Relations" },

  // Events
  { id: 45, name: "Aditya Sogarwal", email: "aditya.25006014@kiet.edu", branch: "IT", year: "1st", domain: "Events" },
  { id: 46, name: "Nihal", email: "nihal.25005137@kiet.edu", branch: "CSIT", year: "1st", domain: "Events" },
  { id: 47, name: "Muskan Kumari", email: "muskan.25002215@kiet.edu", branch: "CSE", year: "1st", domain: "Events" },
  { id: 48, name: "Nirnay Mathur", email: "nirnay.25004230@kiet.edu", branch: "CSE-AIML", year: "1st", domain: "Events" },
  { id: 49, name: "Ambikesh Pratap Singh", email: "ambikesh.25002384@kiet.edu", branch: "CSE", year: "1st", domain: "Events" },
  { id: 50, name: "Ayush Kumar", email: "ayush.25006047@kiet.edu", branch: "IT", year: "1st", domain: "Events" },
  { id: 51, name: "Vanshika Wadhwani", email: "vanshika.25005212@kiet.edu", branch: "CSIT", year: "1st", domain: "Events" },
  { id: 52, name: "Astha Singh", email: "astha.25002100@kiet.edu", branch: "CSE", year: "1st", domain: "Events" },
  { id: 53, name: "Aditi Singh", email: "aditi.25005016@kiet.edu", branch: "CSIT", year: "1st", domain: "Events" },
  { id: 54, name: "Sristi Singh", email: "srishti.2428ece1465@kiet.edu", branch: "ECE", year: "2nd", domain: "Events" },
];

const domains = [
  "Technical",
  "Graphics",
  "Public Relations",
  "Corporate Relations",
  "Events",
];

const recruitsByDomain = domains.reduce((acc, domain) => {
  acc[domain] = recruitsData.filter((recruit) => recruit.domain === domain);
  return acc;
}, {});


const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const CelebrationBackground = () => (
  <>
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
      {[...Array(50)].map((_, i) => {
        const style = {
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: `${Math.random() * 3 + 1}px`,
          height: `${Math.random() * 3 + 1}px`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${Math.random() * 5 + 5}s`,
        };
        return <div key={i} style={style} className="particle rounded-full dark:bg-white/50 bg-black/10" />;
      })}
    </div>
    <style>{`
      @keyframes float {
        0% { transform: translateY(0px) rotate(0deg); opacity: 1; }
        100% { transform: translateY(-1000px) rotate(720deg); opacity: 0; }
      }
      .particle {
        position: absolute;
        animation: float linear infinite;
      }
    `}</style>
  </>
);

export default function App() { 
  useEffect(() => {
    const duration = 3000;
    const end = Date.now() + duration;

    const interval = setInterval(() => {
      if (Date.now() > end) {
        clearInterval(interval);
        return;
      }
      confetti({
        particleCount: 40,
        startVelocity: 30,
        spread: 160,
        origin: {
          x: Math.random(),
          y: Math.random() * 0.6 + 0.2,
        },
      });

      // occasional larger burst
      if (Math.random() > 0.85) {
        confetti({
          particleCount: 100,
          spread: 200,
          origin: { x: Math.random(), y: Math.random() * 0.6 + 0.2 },
        });
      }
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (

    <div style={{ paddingTop: 'var(--navbar-height, 72px)' }} className="min-h-screen w-full font-sans relative bg-white text-black dark:bg-black dark:text-white">
      <CelebrationBackground />
      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        
        <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#4D55BA]">
            <span className='text-black dark:text-white'>Recruitment </span>Results
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Congratulations to our new team members!
          </p>
        </motion.div>

        {Object.entries(recruitsByDomain).map(([domain, recruits]) => (
            recruits.length > 0 && (
                <div key={domain} className="mb-12">
                    <motion.h2 
                        className="text-2xl md:text-3xl font-bold mb-6 text-center border-b-2 border-[#4D55BA]/50 pb-2 text-[#4D55BA]"
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true, amount: 0.5}}
                        transition={{duration: 0.5}}
                    >
                        {domain} 
                    </motion.h2>

                    <motion.div
                      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      {recruits.map((recruit) => (
                        <motion.div
                          key={recruit.id}
                          className="bg-white dark:bg-[#101227] border border-gray-200 dark:border-[#4D55BA]/30 rounded-xl shadow-sm dark:shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
                          variants={cardVariants}
                        >
                          <div className="p-5 text-center">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{recruit.name}</h3>
                            <p className="text-gray-600 dark:text-gray-400 mt-1">{recruit.branch}</p>
                            <p className="text-gray-500 text-sm">{recruit.year} Year</p>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                </div>
            )
        ))}
      </div>
    </div>
  );
}
