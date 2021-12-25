import React from "react";
import { motion } from "framer-motion";
import { titleAnimation } from "../helpers/Animation";

const Message = () => {
  return (
    <motion.div>
      <div className="hide">
        <motion.div variants={titleAnimation} className="body accent-heading">
          <span className="special-heading wavy-text">
            Heart warmth appreciation
          </span>{" "}
          to every loved one who took time off their schedule to{" "}
          <span className="special-heading wavy-text">
            wish and shower blessings
          </span>{" "}
          on me on my birthday, I say a big thank you and{" "}
          <span className="special-heading wavy-text">God richly bless</span>{" "}
          you so so much. I really appreciate.
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Message;
