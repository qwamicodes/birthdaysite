import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../helpers/Animation";
import faqs from "../json/faqs.json";
import Questions from "../components/Questions";

const FAQs = () => {
  const [faqData, setFaqData] = useState();

  useEffect(() => {
    setFaqData(faqs.faqs);
  }, []);

  return (
    <motion.div
      variants={pageAnimation}
      animate="show"
      initial="hidden"
      exit="exit"
      className="faq"
    >
      <div className="u-flex-center primary-sub-heading u-text-center">
        Frequently Asked Questions
      </div>
      <div className="body u-flex-center">
        I know you've some obvious question about me and my birthday so I'll
        answer most of them in this section
      </div>
      <div className="faq__questions u-flex-center">
        {faqData &&
          faqData.map((faq) => (
            <Questions
              key={faq.no}
              no={faq.no}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
      </div>
    </motion.div>
  );
};

export default FAQs;
