import React from "react";

const Questions = ({ no, question, answer }) => {
  return (
    <div className="faq__container">
      <div className="faq__container--question">
        {no}. {question}
      </div>
      <div className="faq__container--answer">{answer}</div>
    </div>
  );
};

export default Questions;
