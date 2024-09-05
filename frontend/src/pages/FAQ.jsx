import React, { useState } from "react";
import { FaAngleRight, FaAngleDown } from "react-icons/fa6";
import "../pages/FAQ.css";

function FAQ() {
  // const faqData = [
  //   {
  //     desc: "Driver must be 25+ years old to drive economy, luxury cars and supercars.",
  //   },
  //   {
  //     desc: "Driver must be 25+ years old to drive economy, luxury cars and supercars.",
  //   },
  //   {
  //     desc: "Driver must be 25+ years old to drive economy, luxury cars and supercars.",
  //   },
  // ];

  // const FAQItem = ({ faq, index, toggleFAQ, isOpen }) => {
  //   return (
  //     <div className="faq-item">
  //       <div className="faq-question" onClick={() => toggleFAQ(index)}>
  //         {faq.question}
  //       </div>
  //       {isOpen && <div className="faq-answer">{faq.answer}</div>}
  //     </div>
  //   );
  // };

  // const FAQ = () => {
  //   const [openIndex, setOpenIndex] = useState(null);

  //   const toogleFAQ = (index) => {
  //     setOpenIndex(openIndex === index ? null : index);
  //   };

    return (
      <div>
        <div className="faq-title">
          <div className="faq-title-text">
            <h4>Frequently Asked Questions</h4>
            <h1>Popular Questions</h1>
          </div>
        </div>
        <div className="faq-questions">
          <div className="faq-left">
            {/* <div className="faq-section">
              <h2>Frequently Asked Questions</h2>
                {faqData.map((faq, index) => (
                  <FAQItem
                    key={index}
                    faq={faq}
                    index={index}
                    isOpen={openIndex === index}
                    toggleFAQ={toggleFAQ}
                  />
                ))}
              </div> */}
          </div>
          {/* <div className="faq-middle">
            <img src="../images/faq2.png" alt="faq-image"></img>
          </div>
          <div className="faq-right"></div> */}
        </div>
      </div>
    );
  };
// }

export default FAQ;
