import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../helpers/Animation";
import Thankyou from "../components/Thankyou";
import Love from "../components/Love";
import Message from "../components/Message";

const Appreciation = () => {
  return (
    <motion.div
      className="grid col-1 row-3"
      variants={pageAnimation}
      animate="show"
      initial="hidden"
      exit="exit"
    >
      <Thankyou />
      <Love />
      <Message />
    </motion.div>
  );
};

export default Appreciation;
