import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../helpers/Animation";
import Auth from "../components/Auth";

const Presents = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className="presents"
    >
      <div className="presents__heading">
        So in this section, everyone will have to log in. I asked for emails of
        everyone (maybe not everyone, if I didn't ask for your email please let
        me know so i add your email), <br />
        After that there are twenty boxes (20) so you've the chance to choose on
        box from the lot. You screenshot whatever you get and send it to me to
        redeem you present. <br /> The password is
        <strong className="special-heading wavy-text"> kwame29</strong>
      </div>
      <Auth />
    </motion.div>
  );
};

export default Presents;
