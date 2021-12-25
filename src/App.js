import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

//? import of the compiled css
import "./css/styles.css";

//? imports of components
import Nav from "./components/Nav";
import Appreciation from "./pages/Appreciation";
import Presents from "./pages/Presents";
import FAQs from "./pages/FAQs";

//? imports of assets
import leftTopCircle from "./assets/svg/left-top.svg";
import leftBottomCircle from "./assets/svg/down-left.svg";
import rightMiddleCircle from "./assets/svg/right-middle.svg";
import NavBackground from "./components/NavBackground";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  const [navCheck, setNavCheck] = useState(false);

  return (
    <div id="app">
      <img
        className="svg left-top-svg"
        src={leftTopCircle}
        alt="SVG for the background"
      />
      <Nav navCheck={navCheck} setNavCheck={setNavCheck} />
      <NavBackground navCheck={navCheck} setNavCheck={setNavCheck} />
      <img
        className="svg left-bottom-svg"
        src={leftBottomCircle}
        alt="SVG for the background"
      />
      <img
        className="svg right-middle-svg"
        src={rightMiddleCircle}
        alt="SVG for the background"
      />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Appreciation />}></Route>
          <Route path="presents" element={<Presents />} />
          <Route path="faqs" element={<FAQs />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default App;
