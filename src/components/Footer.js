import React from "react";
import { motion } from "framer-motion";
import { appear } from "../helpers/Animation";

const Footer = () => {
  return (
    <motion.div
      variants={appear}
      initial="hidden"
      animate="show"
      className="footer"
    >
      Developed by: &ensp;
      <a
        href="https://www.linktr.ee/qwamicodes"
        target="_blank"
        rel="noreferrer"
        className="footer__link"
      >
        @qwamicodes
      </a>
    </motion.div>
  );
};

export default Footer;
