import React, { useState } from "react";
import { FaAngleRight, FaAngleDown } from "react-icons/fa6";
import "../pages/FAQ.css";

const leftdata = [
  {title: 'Age and Responsibility', desc:'Driver must be 25+ years old to drive economy, luxury cars and supercars.'},
  {title: 'Deposite', desc:'500 USD will be blocked on your card for the duration of 24 days, cash deposits are also accepted. This amount will be used only for fines and toll road charges. terms & conditions apply.'},
  {title: 'Documents', desc:'A Passport copy is required, Valid Driving License, Mobile number, Email address and Location and Time of delivery'},
]

const rightdata = [
  {title: 'Car Delivery', desc:'At the time of Delivery our team will contact And Deliver the car to your Location. On spot, You will check the car, Sign the contract & receive the key. Enjoy your ride !'},
  {title: 'Enquire Now', desc:'You can contact us for a quotation & our team will assist you with the booking process. You can use the contact methods available on this page.'},
  {title: 'Payment Methods', desc:'We offer a variety of payment methods. We accept cash, Crypto and the majority of credit cards such as Visa, MasterCard and American Express.'},
]

const FAQ = () => {
  const [ left_selected, left_setSelected ] = useState(null)
  const [ right_selected, right_setSelected ] = useState(null)

  const left_toggle = (i) => {
    if(left_selected == i){
      return left_setSelected(null)
    }
    left_setSelected(i)
  }

  const right_toggle = (j) => {
    if(right_selected == j){
      return right_setSelected(null)
    }
    right_setSelected(j)
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
            {leftdata.map( (faqitem, i) => (
              <div className="faq-item">
                <div className="question-title" onClick={() => left_toggle(i)}>
                  <h2><span>{i + 1}.   </span>{faqitem.title}</h2>
                  <span>{left_selected == i ? <FaAngleDown /> : <FaAngleRight />}</span>
                </div>
                <div className={left_selected == i ? 'question-desc show' : 'question-desc'}>
                  <p>{faqitem.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="faq-middle">
          <img src="../images/faq2.png" alt="faq-image"></img>
        </div>
        <div className="faq-right">
        <div className="accordion">
            {rightdata.map((faq_item, j=4) => (
              <div className="faq-item">
                <div className="question-title" onClick={() => right_toggle(j)}>
                  <h2><span>{j+4  }.   </span>{faq_item.title}</h2>
                  <span>{right_selected == j ? <FaAngleDown /> : <FaAngleRight />}</span>
                </div>
                <div className={right_selected == j ? 'question-desc show' : 'question-desc'}>
                  <p>{faq_item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
