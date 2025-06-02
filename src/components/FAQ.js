import React, { useState } from "react";
import FAQs from "@/components/FAQbank.js";
import "@/styles/faq.css";

const FAQ = () => {
  const [visible, setVisible] = useState(false); // Toggles entire FAQ visibility
  const [expanded, setExpanded] = useState({}); // Tracks which questions are expanded

  const toggleFAQ = () => {
    setVisible(!visible);
  };

  const toggleQuestion = (index) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="FAQ-container">
      <button className="FAQ-button" onClick={toggleFAQ}>
        Często zadawane pytania {visible ? "▼" : "▶"}
      </button>
      {visible && (
        <div className="FAQ-list">
          {FAQs.map((faq, index) => (
            <div key={index} className="FAQ-item">
              <button
                className="FAQ-question"
                onClick={() => toggleQuestion(index)}
              >
                {faq.question} {expanded[index] ? "▲" : "▼"}
              </button>
              {expanded[index] && <p className="FAQ-answer">{faq.answer}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FAQ;
