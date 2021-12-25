import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../helpers/Animation";
import Thankyou from "../components/Thankyou";
import Love from "../components/Love";
import Message from "../components/Message";
import Buttons from "../components/Buttons";

const Appreciation = () => {
  return (
    <motion.div
      className="grid col-1 row-4"
      variants={pageAnimation}
      animate="show"
      initial="hidden"
      exit="exit"
    >
      <Thankyou />
      <Love />
      <Message />
      <motion.div
        // variants={appear}
        animate="show"
        initial="hidden"
        className="cta u-flex-center"
      >
        <Buttons message="open presents" type="cta" />
      </motion.div>
    </motion.div>
  );
};

export default Appreciation;
