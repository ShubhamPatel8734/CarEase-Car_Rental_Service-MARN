import React, { useState } from "react";
import { FaAngleRight, FaAngleDown } from "react-icons/fa6";
import "../pages/FAQ.css";

const data = [
  {title: 'Age and Responsibility', desc:'Driver must be 25+ years old to drive economy, luxury cars and supercars.'},
  {title: 'Age and Responsibility', desc:'Driver must be 25+ years old to drive economy, luxury cars and supercars.'},
  {title: 'Age and Responsibility', desc:'Driver must be 25+ years old to drive economy, luxury cars and supercars.'},
  {title: 'Age and Responsibility', desc:'Driver must be 25+ years old to drive economy, luxury cars and supercars.'},
  {title: 'Age and Responsibility', desc:'Driver must be 25+ years old to drive economy, luxury cars and supercars.'},
  {title: 'Age and Responsibility', desc:'Driver must be 25+ years old to drive economy, luxury cars and supercars.'},
]

function FAQ() {

  const [ selected, setSelected ] = useState(null);

  const toggle = (i) => {
    if(selected == i){
      return setSelected(null);
    }
    setSelected(i);
  }

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
          <div className="accordion">
            {data.map( (faq, i) => (
              <div className="question-container">
                <div className="question-title" onClick={() => toggle(i)}>
                  <h2>{faq.title}</h2>
                  <span>{selected === i ? <FaAngleDown /> : <FaAngleRight />}</span>
                </div>
                <div className="{selected === i ? 'question-desc show' : 'question-desc'}">
                  {faq.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="faq-middle">
          <img src="../images/faq2.png" alt="faq-image"></img>
        </div> */}
        <div className="faq-right"></div>
      </div>
    </div>
  );
}

export default FAQ;
