import { useState, useRef, useEffect } from "react";
import "./FAQ.css";
import { FiPlus } from "react-icons/fi";

export default function FAQ({ faq }) {
  const [active, setActive] = useState(false);

  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [contentRef, active]);

  const toggleAccordion = () => {
    setActive(!active);
  };
  return (
    <div className="App w-full">
      <div className="w-full mb-2">
        <button
          className={`question-section ${active} p-3 w-full`}
          onClick={toggleAccordion}
        >
          <div>
            <div className="question-align">
              <h4 className="question-style">{faq.ques}</h4>
              <FiPlus
                className={active ? `question-icon rotate` : `question-icon`}
              />
            </div>
            <div
              ref={contentRef}
              className={active ? `answer pt-3 answer-divider` : `answer pt-3`}
            >
              <p>{faq.ans}</p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
