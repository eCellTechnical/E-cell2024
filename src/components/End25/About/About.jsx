import { motion } from 'framer-motion';

const EventInfoSection = () => {
  return (
    <div className="w-full py-16 md:pl-20 md:pr-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full border border-[#00FCB8]"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full border border-[#00FCB8]"></div>
        <div className="absolute top-40 right-40 w-32 h-32 rounded-full border border-[#00FCB8]"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left side - Image */}
          <motion.div 
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
         <div className="relative w-full overflow-hidden" style={{ aspectRatio: "4/3.5" }}>
  {/* Decorative Borders */}
  <div className="absolute -top-3 -left-3 w-24 h-24 border-t-2 border-l-2 border-[#00FCB8]"></div>
  <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b-2 border-r-2 border-[#00FCB8]"></div>
  
  {/* YouTube Embed (4:5 Ratio) */}
  <iframe
    src="https://www.youtube.com/embed/VVQ2YXqLbio"
    className="absolute inset-0 w-full h-full object-cover"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>
          </motion.div>
          
          {/* Right side - Content */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-2 bg-opacity-20 bg-[#00FCB8] rounded-md mb-3">
              <p className="text-[#00FCB8] font-medium">About The Event</p>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The 11th edition of our blockbuster E-Summit
            </h2>
            
            <p className="text-gray-300 mb-10">
             It’s more than just an event — it’s a celebration of ideas, innovation, and inspiration.
<br/>
<br/>
Bringing together budding entrepreneurs, startup founders, investors, mentors, and industry leaders, Endeavour’25 creates the perfect stage to learn, compete, network, and grow. With thrilling competitions, powerful speaker sessions, hands-on workshops, and endless opportunities — it’s your gateway into the world of startups and leadership.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Event Location */}
              <div className="flex items-start gap-4 bg-gray-900 bg-opacity-40 p-4 rounded-lg">
                <div className="p-3 bg-gray-800 rounded-md">
                  <svg className="w-6 h-6 text-[#00FCB8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Event Location</h3>
                  <p className="text-gray-400">KIET, Ghaziabad, Uttar Pradesh</p>
                </div>
              </div>
              
              {/* Event Date */}
              <div className="flex items-start gap-4 bg-gray-900 bg-opacity-40 p-4 rounded-lg">
                <div className="p-3 bg-gray-800 rounded-md">
                  <svg className="w-6 h-6 text-[#00FCB8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Event Date</h3>
                  <p className="text-gray-400">9AM to 5PM - May 02-03, 2025</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-5">
              <div className="flex items-center gap-4">
                <h3 className="text-4xl font-bold text-[#00FCB8]">1.5L+</h3>
                <span className="text-gray-300">Worth Prices</span>
              </div>
              
              <motion.button 
                className="px-6 py-3 cursor-pointer z-50 bg-[#00FCB8] hover:bg-opacity-80 text-black font-medium rounded-full flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = "/endeavour/events"}
              >
                VIEW EVENT
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EventInfoSection;