import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../helpers/Animation";

const FAQs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      animate="show"
      initial="hidden"
      exit="exit"
    >
      the faq part
    </motion.div>
  );
};

export default FAQs;
