import React from "react";
import { motion } from "framer-motion";
import { titleAnimation } from "../helpers/Animation";

const Love = () => {
  return (
    <motion.div className="hide">
      <motion.div variants={titleAnimation} className="body secondary-heading">
        I love you so much 💖
      </motion.div>
    </motion.div>
  );
};

export default Love;
