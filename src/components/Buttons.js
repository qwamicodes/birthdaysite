import React from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

const Buttons = ({ message, type }) => {
  return (
    <motion.div className="btn btn-cta">
      <Link to="presents">{message}</Link>
    </motion.div>
  );
};

export default Buttons;
