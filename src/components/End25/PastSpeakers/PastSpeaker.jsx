import  { useState } from 'react';
import { motion } from 'framer-motion';

const PastSpeakers = () => {
  // Sample data for past artists
  const artistsData = [
    {
      id: 1,
      name: "Abhishek Singh",
      designation: "IAS Officer & Actor",
      company: "",
      image: "/src/assets/people/abhishek_singh.jpeg"
    },
    {
      id: 2,
      name: "Aditi Singh",
      designation: "Stand-up Comedian",
      company: "Comedy Circuit",
      image: "/src/assets/people/aditi.jpg"
    },
    {
      id: 3,
      name: "Sandeep Jain",
      designation: "Founder",
      company: "GeeksforGeeks",
      image: "/src/assets/people/sandeep.jpg"
    },
    {
      id: 4,
      name: "Sachin Saxena",
      designation: "Marketing Head",
      company: "Innovaccer",
      image: "/src/assets/people/sachin.jpeg"
    },
    {
      id: 5,
      name: "Ramveer Tanwar",
      designation: "Founder",
      company: "Say Earth",
      image: "/src/assets/people/ramveer_tanver.jpeg"
    },
    {
      id: 6,
      name: "Sourabh Goyal",
      designation: "Founder",
      company: "Goalchy Club",
      image: "/src/assets/people/saurabh.jpeg"
    },
    {
      id: 7,
      name: "Aditi Mittal",
      designation: "Stand-up Comedian",
      company: "Netflix Special Artist",
      image: "/src/assets/people/sourabh.jpeg"
    }
  ];

  // Function to render artist cards with different sizes for masonry effect
  const getClassName = (index) => {
    const patterns = [
      "col-span-1 row-span-1",
      "col-span-1 row-span-2",
      "col-span-1 row-span-1",
      "col-span-1 row-span-1",
      "col-span-1 row-span-1",
      "col-span-1 row-span-1",
      "col-span-1 row-span-2"
    ];
    return patterns[index % patterns.length];
  };

  return (
    <div className="w-full  py-12 px-4">
      <div className="container mx-auto">
      <div className="text-white  text-center mb-12 font-modern">
      <div className="inline-block px-4 py-2 bg-opacity-20 bg-[#00FCB8] rounded-md mb-3">
              <p className="text-[#00FCB8] font-medium">About The Event</p>
            </div>
          <h1 className="text-3xl md:text-5xl font-bold text-black dark:text-white">
            All <span className="text-[#00FCB8]">SPEAKERS</span>
          </h1>
          <div className="flex items-center justify-center mt-3 mb-6">
            <div className="h-1 w-10 bg-gray-700"></div>
            <div className="h-1 w-20 bg-[#00FCB8] mx-2"></div>
            <div className="h-1 w-10 bg-gray-700"></div>
          </div>
        </div>             
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-auto">
          {artistsData.map((artist, index) => (
            <ArtistCard 
              key={artist.id} 
              artist={artist} 
              className={getClassName(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Artist card component with hover effect
const ArtistCard = ({ artist, className }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className={`relative overflow-hidden rounded-lg ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <img 
        src={artist.image} 
        alt={artist.name} 
        className="w-full h-full object-cover"
      />
      
      <motion.div 
        className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl font-bold text-white">{artist.name}</h3>
          <p className="text-sm font-medium text-[#00FCB8]">{artist.designation}</p>
          <p className="text-xs text-white opacity-80">{artist.company}</p>
        </motion.div>
      </motion.div>
      
      {/* Accent line using the requested color */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-1 bg-[#00FCB8]"
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
};

export default PastSpeakers;