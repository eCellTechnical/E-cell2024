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
      question: "What is Endeavour?",
      answer: "Endeavour is E-Cell KIET's annual entrepreneurial fest — a high-energy mix of ideas, innovation, and inspiration.",
    },
    {
      question: "Who can attend?",
      answer: "Anyone with a spark — students, founders, creators, techies, or just the curious.",
    },
    {
      question: "What's in it for me?",
      answer: "Meet industry pros, join workshops, win hackathons, and vibe with cultural nights.",
    },
    {
      question: "Who's been here before?",
      answer: "Leaders from RazorPay, Innov8, Paytm, GeeksForGeeks, and many more.",
    },
    {
      question: "Is there a fee?",
      answer: "Some events might have a small fee — we'll drop details soon.",
    },
    {
      question: "How do I register?",
      answer: "Keep an eye on our socials — registrations go live soon!",
    },
    {
      question: "How can I stay updated?",
      answer: "Follow @kietecell on Instagram and visit e-cell.in for all updates, schedules, and announcements.",
    },
    {
      question: "Will I get a certificate for participation?",
      answer: "Yes, all participants will receive digital certificates. Winners and top performers may receive additional recognition and awards.",
    },
    {
      question: "How can I register for the summit/events?",
      answer: "Registrations will be open soon on the official E-Cell KIET website and social media handles. You can register for individual events of the summit.",
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
            {"Everything you need to know about Ideatex 3.0. Can't find your answer? Feel free to"}
            <a
              href="#contact"
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