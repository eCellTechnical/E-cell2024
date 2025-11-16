import { useState, useRef } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence, useInView } from "framer-motion";

const FAQItem = ({ question, answer, index, isOpen, onClick }) => {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: true, amount: 0.1 });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1]
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
        className={`rounded-lg overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 ${
          isOpen ? "ring-1 ring-[#9700d1]/20" : ""
        }`}
        whileHover={{ scale: isOpen ? 1 : 1.01 }}
        whileTap={{ scale: 0.98 }}
        layout
      >
        <button
          className="w-full p-4 md:p-6 text-left flex justify-between items-center focus:outline-none"
          onClick={onClick}
          aria-expanded={isOpen}
        >
          <h3 className="text-sm md:text-md font-medium text-white transition-colors">
            {question}
          </h3>
          <div className="flex-shrink-0 ml-4">
            <motion.div
              className="w-6 h-6 md:w-7 md:h-7 flex items-center justify-center border border-white/10 rounded-full bg-white/3"
              animate={{ rotate: isOpen ? 45 : 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <span className="block w-3 h-[2px] bg-[#e4affc]" />
            </motion.div>
          </div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
            >
              <div className="px-4 pb-4 md:px-6 md:pb-6 text-gray-300 text-sm md:text-base">
                <p>{answer}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

FAQItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  isOpen: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

const FAQSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [openIndex, setOpenIndex] = useState(null);

const faqData = [
  {
    question: "What is IdeateX 3.0?",
    answer:
      "IdeateX 3.0 is the flagship innovation and entrepreneurship challenge organized by E-Cell KIET. It provides a platform for students to ideate, innovate, and pitch their business ideas to industry mentors and investors.",
  },
  {
    question: "Who can participate in IdeateX 3.0?",
    answer:
      "Students from any college, university, or discipline who have an innovative idea or startup concept are eligible to participate.",
  },
  {
    question: "Do I need a fully developed startup to register?",
    answer:
      "No, it is not necessary to have a running startup. Participants can register even with just an idea, and our mentors will guide them in shaping it into a viable business model.",
  },
  {
    question: "How can I register for IdeateX 3.0?",
    answer:
      "Registration can be done through the official E-Cell KIET website or app, where the registration form and event details are available.",
  },
  {
    question: "Can I participate individually or in a team?",
    answer:
      "Participants can register either individually or in a team of up to four members. Team participation is encouraged for better collaboration and idea development.",
  },
  {
    question: "Is there any registration fee?",
    answer:
      "Will be updated soon", // Keep it blank, will be updated soon
  },
  {
    question: "What will participants gain from the event?",
    answer:
      "Participants will gain access to expert mentorship, real-time feedback, networking opportunities, and the chance for incubation or funding support to turn their ideas into reality.",
  },
  {
    question: "Will there be any winners or prizes?",
    answer:
      "Yes, the best-performing teams will be recognized with prizes, certificates, and potential incubation support from TBI-KIET and other partners.",
  },
  {
    question: "What is the format of the event?",
    answer:
      "The event consists of multiple stages, including idea submission, shortlisting, mentorship sessions, and final pitching before an expert jury panel.",
  },
  {
    question: "Why should I participate in IdeateX 3.0?",
    answer:
      "IdeateX 3.0 is more than just a competition. It serves as a launchpad for entrepreneurial journeys, providing students with the right exposure, mentorship, and opportunities to turn their passion into purpose.",
  },
];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        when: "beforeChildren"
      }
    }
  };

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      className="py-12 bg-gradient-to-r from-[#211E3F] to-black md:py-20  mx-auto relative "
      id="faq"
    >
      <div className="absolute inset-0 pointer-events-none z-0 ">
        <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full filter blur-[120px] opacity-10" style={{background: 'rgba(151,0,209,0.12)'}} />
        <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full filter blur-[120px] opacity-10" style={{background: 'rgba(109,40,217,0.08)'}} />
      </div>

      <motion.div
        className="max-w-5xl mx-auto px-4 md:px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="text-center mb-6 md:mb-16">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-block px-3 py-1 md:px-4 md:py-2 bg-white/6 backdrop-blur-sm border border-white/10 rounded-full mb-2 md:mb-3">
              <p className="text-[#e4affc] font-medium text-sm md:text-base">FAQS</p>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 md:mb-3">
              ANY QUESTIONS?
            </h2>
          
          </motion.div>
          <motion.p
            className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {"Everything you need to know about Ideatex 3.0. Can't find your answer? Feel free to "}
            <a
              href="https://e-cell.in/contactus"
              className="text-[#e4affc] hover:text-[#b800ff] underline"
            >
              contact us
            </a>{" "}
            for more information.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-3 md:gap-4">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
              isOpen={openIndex === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FAQSection;