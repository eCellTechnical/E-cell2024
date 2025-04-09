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
      image: "https://media.licdn.com/dms/image/v2/D4E03AQHKrTOqnofp5A/profile-displayphoto-shrink_200_200/B4EZO.vxJ3H0Ac-/0/1734072014074?e=2147483647&v=beta&t=TqwwHXuOCBMy6MexovBS7YvqOaefsyKutvVfCaGGEXc"
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
      image: "https://media.licdn.com/dms/image/v2/C4D03AQGGB6CT6NqFzQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1618725077549?e=1749686400&v=beta&t=kvhr57aPIJmClQcA2t9-qcpOVKRA9pcjeCNsDgECSmc"
    },
    {
      id: 4,
      name: "Sachin Saxena",
      designation: "Marketing Head",
      company: "Innovaccer",
      image: "https://media.licdn.com/dms/image/v2/D5603AQG6MbR3O4M14g/profile-displayphoto-shrink_400_400/B56ZRq6.ztGoAg-/0/1736960635132?e=1749686400&v=beta&t=N_GqmUu7OFO5FD6v_U90uphlda3B1Ked0QBkvOLiOos"
    },
    {
      id: 5,
      name: "Manik Sehgal",
      designation: "Founder",
      company: "Raasa Kart",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQFceU-67SCp9g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1698552827093?e=2147483647&v=beta&t=iTCraFbCpgsnNO7oWSMAIOqSzgDPij1FRk5ePVrTFyU"
    },
    {
      id: 6,
      name: "Priyaranjan Kumar",
      designation: "Angel Investor, Author and Founder",
      company: "Ground Up Consulting",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQEAuLSlKhpInQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1705894550355?e=2147483647&v=beta&t=rXjWR9WRYIxi1WfzARvVTnogqIaMBumAniq-ath6Icw"
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
      image: "https://media.licdn.com/dms/image/v2/C5103AQFPxmIaowkurA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1526956438305?e=1749686400&v=beta&t=HGC5TpYnTc_3SfNvH4L4ckRmZ2b2xwAxqerfm132FmE"
    },
    {
      id: 9,
      name: "Prince Gupta",
      designation: "Founder",
      company: "Educaptain",
      image: "https://media.licdn.com/dms/image/D4D03AQGi4ddiPa4vXA/profile-displayphoto-shrink_200_200/0/1688466550935?e=2147483647&v=beta&t=5UrgPhWXxNlnznLeqSIyGxeezqkZot_W3bi_2-gsi4I"
    },
    {
      id: 10,
      name: "Aniket Dhiman",
      designation: "Founder",
      company: "Expotent",
      image: "https://media.licdn.com/dms/image/D4D03AQElC1UzegceyA/profile-displayphoto-shrink_200_200/0/1672922272749?e=2147483647&v=beta&t=ZDGZ9sds87OuGpHTSS_kfrFNBSihPqwN2aFjIoSwzl8"
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