'use client';
import  { useState } from "react";
import Heading from "./Heading"; // Adjust the path as needed
import { ArrowRight } from "lucide-react"; // Use lucide-react for the arrow icon

const faqs = [
  {
    question: "What is IDEATEX 2.0?",
    answer: "IDEATEX 2.0 is an entrepreneurial event by E-Cell at KIET, designed to help turn innovative ideas into viable businesses through mentorship, feedback, and networking.",
  },
  {
    question: "Who can participate?",
    answer: "Anyone with a business idea, including students, professionals, and aspiring entrepreneurs.",
  },
  {
    question: "What types of ideas are accepted?",
    answer: "All kinds, from tech solutions and social ventures to sustainability and everyday innovations.",
  },
  {
    question: "How long is each presentation?",
    answer: "Presentations are typically for 5 minutes, followed by 3 mins Q&A.",
  },
  {
    question: "Do I need business experience?",
    answer: "No experience required! IDEATEX 2.0 is open to all, with mentorship provided.",
  },
  {
    question: "Is IDEATEX 2.0 open to team or solo participation?",
    answer: "Participants can join individually or in teams. Teams typically consist of up to 4 members.",
  },
  {
    question: "What is the judging criteria?",
    answer: "Judges will evaluate ideas based on originality, practicality, scalability, market potential, and overall presentation quality.",
  }, {
    question: "Are there any registration fees?",
    answer: "Yes, there is a nominal registration fee per participant/team. Details are available on the registration page.",
  },{
    question: "How are winning ideas selected?",
    answer: "Judges will evaluate each idea’s originality, feasibility, impact, and presentation to choose the winners.",
  },
  {
    question: "Are there prizes or rewards for winners?",
    answer: "Yes, top teams will receive prizes, recognition, and possibly funding or incubation opportunities.",
  },
  {
    question: "Can international participants join the event?",
    answer: "Yes, virtual participation options are available for international or out-of-town participants.",
  },
  {
    question: "What resources are available to help me prepare?",
    answer: "Registered participants will receive access to resources, guides, and mentorship support to help prepare their pitches.",
  },

];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="flex flex-col md:flex-row items-center  text-white p-0 md:p-8">
      {/* Left Side with Heading */}
      <div className="md:w-[40%] w-full flex items-start h-full pr-8">
        <Heading top="Solutions for Your Curiosities" med="IdeateX 2.O" last="HELPDESK" />
      </div>

      {/* Right Side with FAQ */}
      <div className="md:w-[60%] w-full mt-8 md:mt-0 h-[60vh] overflow-y-auto hide-scrollbar hide-scrollbar::-webkit-scrollbar space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            onClick={() => toggleFAQ(index)}
            className="p-6 rounded-lg border-2 border-[#26222D] cursor-pointer bg-[#110C1A] transition-all ease-in-out duration-300"
          >
            <div className="flex justify-between items-center">
              <p className="text-[18px] font-[700] text-[#d2d2d2]">
                {faq.question}
              </p>
              <ArrowRight
                className={`transition-transform duration-300 ${
                  openIndex === index ? "transform rotate-90 text-[#838490]" : "text-[#838490]"
                }`}
              />
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-[500px] opacity-100 mt-6" : "max-h-0 opacity-0"
              }`}
            >
              <p className="font-[400] text-[#838490] text-[16px]">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
 