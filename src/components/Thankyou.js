import React from "react";
import { motion } from "framer-motion";
import { titleAnimation } from "../helpers/Animation";

const Thankyou = () => {
  return (
    <motion.div className="hide">
      <motion.div
        variants={titleAnimation}
        animate="show"
        initial="hidden"
        className="primary-heading header special-heading"
      >
        Thank you
      </motion.div>
    </motion.div>
  );
};

export default Thankyou;
