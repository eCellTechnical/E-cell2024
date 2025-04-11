import { useState } from 'react';
import { motion } from 'framer-motion';
import sandeepImage from '../../../assets/people/sandeep.jpg';

const PastSpeakers = () => {
  const artistsData = [
    {
      id: 1,
      name: "Abhishek Singh",
      designation: "Author, TEDx speaker, and founder ",
      company: "Social Cosmo",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR27f_96gfQyyNxw9Es7FSHYHWzkN8NC4x5Xg&s"
    },
    {
      id: 2,
      name: "Saurabh Jain",
      designation: "Founder",
      company: "Fun2Do Labs and ex-VP at Paytm",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyJ2Jw4NLGyuOca8OoZjb6IQgNznsDlC0DBw&s"
    },
    {
      id: 3,
      name: "Sandeep Jain",
      designation: "Founder",
      company: "GeeksforGeeks",
      image: "https://planify-main.s3.amazonaws.com/media/images/documents/Sandeep_Jain.webp"
    },
    {
      id: 4,
      name: "Sachin Saxena",
      designation: "Marketing Head",
      company: "Innovaccer",
      image: "https://etimg.etb2bimg.com/thumb/msid-82168741,width-1200,height-900,resizemode-4/.jpg"
    },
    {
      id: 5,
      name: "Manik Sehgal",
      designation: "Founder",
      company: "Raasa Kart",
      image: "https://tianslab.com/wp-content/uploads/2023/12/Raasa-Deal-1024x576.jpg"
    },
    {
      id: 6,
      name: "Priyaranjan Kumar",
      designation: "Angel Investor, Author and Founder",
      company: "Ground Up Consulting",
      image: "https://www.printbusinessoutlook.com/wp-content/uploads/2025/01/priya.jpg"
    },
    {
      id: 7,
      name: "Major Pawan Kumar",
      designation: "Honored with the Shaurya Chakra",
      company: "Indian Army Veteran",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxGfW0fVZUnC0GZVE6r5yMAYzrUXLoO6ptQg&s"
    },
    {
      id: 8,
      name: "Sunit Dutt",
      designation: "President of Devices",
      company: "Reliance Jio",
      image: "https://etimg.etb2bimg.com/photo/36354042.cms"
    },
    {
      id: 9,
      name: "Prince Gupta",
      designation: "Founder",
      company: "Educaptain",
      image: "https://res.cloudinary.com/dlnyjfht1/image/upload/v1744355753/1688466550935_h46ixn.jpg"
    },
    {
      id: 10,
      name: "Aniket Dhiman",
      designation: "Founder",
      company: "Expotent",
      image: "https://res.cloudinary.com/dlnyjfht1/image/upload/v1744355753/images_r6hjjv.jpg"
    }
  ];

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
    <div className="w-full md:pl-20 md:pr-20 py-12 px-4">
      <div className="container mx-auto">
        <div className="text-white text-center mb-12 font-modern">
          <div className="inline-block px-4 py-2 bg-opacity-20 bg-[#00FCB8] rounded-md mb-3">
            <p className="text-[#00FCB8] font-medium">In The Event</p>
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

const ArtistCard = ({ artist, className }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isTapped, setIsTapped] = useState(false);

  const handleTap = () => {
    setIsTapped(!isTapped);
  };

  return (
    <motion.div 
      className={`relative overflow-hidden rounded-lg ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onTap={handleTap}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
    >
      <img 
        src={artist.image} 
        alt={artist.name} 
        className="w-full h-full object-cover"
         loading="lazy"
      />
      
      <motion.div 
        className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered || isTapped ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: isHovered || isTapped ? 0 : 20 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl font-bold text-white">{artist.name}</h3>
          <p className="text-sm font-medium text-[#00FCB8]">{artist.designation}</p>
          <p className="text-xs text-white opacity-80">{artist.company}</p>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-1 bg-[#00FCB8]"
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: isHovered || isTapped ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
};

export default PastSpeakers;