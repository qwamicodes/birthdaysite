import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../helpers/Animation";

const Presents = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      the presents part{" "}
    </motion.div>
  );
};

export default Presents;
