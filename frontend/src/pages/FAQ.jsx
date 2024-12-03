import React, { useState } from "react";
import { FaAngleRight, FaAngleDown } from "react-icons/fa6";
import "../pages/FAQ.css";

const leftdata = [
  {id: 1,title: 'Age and Responsibility', desc:'Driver must be 18+ years old to drive cars, must hold driving license & should obey all the rules.'},
  {id: 2,title: 'Deposite', desc:'Online & Cash deposits are accepted. This amount will be used only for fines and toll road charges. terms & conditions apply.'},
  {id: 3,title: 'Documents', desc:'A valid Driving License, Mobile number, Email address is required. (Note: The user must show a payment receipt.) '},
]

const rightdata = [
  {id: 4,title: 'Verification & Agreement ', desc:'The user must bring the original documents mentioned and the payment receipt. Then, the user must Sign the Terms & Conditions and then receive the key. Enjoy your ride!'},
  {id: 5,title: 'Enquire Now', desc:'You can contact us for a quotation & our team will assist you with the booking process. You can use the contact methods available on the contact us page.'},
  {id: 6,title: 'Payment Methods', desc:'We offer a variety of payment methods. We accept cash and the majority of credit cards such as Visa, MasterCard and RuPay.'},
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
              <div className="faq-item" key={faqitem.id}>
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
              <div className="faq-item" key={faq_item.id}>
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
