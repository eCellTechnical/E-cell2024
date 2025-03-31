import  { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: false, amount: 0.3 });

  const variants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <motion.div
      ref={itemRef}
      className="w-full"
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div
        className={`border border-teal-500/30 backdrop-blur-sm rounded-lg overflow-hidden ${
          isOpen ? "bg-teal-900/10" : "bg-black/40"
        }`}
        whileHover={{ scale: isOpen ? 1 : 1.01 }}
        layout
      >
        <button
          className="w-full p-6 text-left flex justify-between items-center focus:outline-none group"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h3 className="text-md md:text-md font-medium text-white group-hover:text-teal-300 transition-colors">
            {question}
          </h3>
          <div className="flex-shrink-0 ml-4">
            <motion.div
              className="w-6 h-6 flex items-center justify-center border border-teal-500/50 rounded-full"
              animate={{ rotate: isOpen ? 45 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <span className="block w-3 h-0.5 bg-teal-400" />
              <span
                className="block h-3 w-0.5 bg-teal-400 absolute"
                style={{
                  transformOrigin: "center",
                }}
              />
            </motion.div>
          </div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-6 pt-4 text-gray-300 border-t border-teal-500/20">
                <p>{answer}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

const FAQSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  const faqData = [
    {
      question: "What is Endeavour 2025?",
      answer: "Endeavour 2025 is our flagship annual tech festival that brings together innovators, industry leaders, and enthusiasts from around the globe. It features workshops, competitions, talks, and exhibitions showcasing cutting-edge technology and ideas."
    },
    {
      question: "When and where will Endeavour 2025 take place?",
      answer: "Endeavour 2025 will be held from April 15-17, 2025, at our main campus. Some events will also be accessible virtually for global participants."
    },
    {
      question: "How can I register for the events?",
      answer: "Registration is open through our official website. Simply navigate to the specific event you're interested in and click the 'Register' button. Early bird registrations receive special discounts and exclusive access to certain workshops."
    },
    {
      question: "Are there any prerequisites for participating in the hackathons?",
      answer: "The prerequisites vary by hackathon. While some are open to beginners, others might require specific skills or knowledge. Check the detailed requirements on each hackathon's page before registering."
    },
    {
      question: "Will there be accommodation facilities for outstation participants?",
      answer: "Yes, we provide accommodation options for outstation participants. You can select this option during registration for an additional fee. Limited free accommodations are also available for select competition finalists."
    },
    {
      question: "How can I become a sponsor for Endeavour 2025?",
      answer: "We offer various sponsorship packages for organizations looking to connect with talented individuals and showcase their brand. Please contact our sponsorship team at sponsors@endeavour2025.com for more information."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section ref={sectionRef} className="py-20 w-full relative">
      {/* Star/space accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-teal-500 rounded-full filter blur-[100px] opacity-5"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-teal-400 rounded-full filter blur-[100px] opacity-5"></div>
        
      
     
      </div>

      <motion.div
        className="max-w-screen-xl mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="text-center mb-16">
        <motion.div
          className="text-center "
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
                  <div className="inline-block px-4 py-2 bg-opacity-20 bg-[#00FCB8] rounded-md mb-3">
              <p className="text-[#00FCB8] font-medium">About The Event</p>
            </div>
          <h2 className="text-5xl font-bold text-white mb-3">ANY QUESTIONS?</h2>
          <div className="flex items-center justify-center mb-6">
            <div className="h-1 w-10 bg-gray-700"></div>
            <div className="h-1 w-20 bg-[#00FCB8] mx-2"></div>
            <div className="h-1 w-10 bg-gray-700"></div>
          </div>
        </motion.div>
          <motion.p
            className="text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Everything you need to know about Endeavour 2025. Can't find your answer? Feel free to
            <br /> 
            <a href="#contact" className="text-teal-400 hover:text-teal-300 mx-1 underline">contact us</a>
            for more information.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-2 ">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
            />
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
      
        </motion.div>
      </motion.div>

 
      
 
    </section>
  );
};

export default FAQSection;