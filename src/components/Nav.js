import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Nav = ({ navCheck, setNavCheck }) => {
  const [viewportWidth, setViewportWidth] = useState();

  //* function to update the width in the state
  const updateWindowWidth = () => {
    setViewportWidth(window.innerWidth);
  };

  //* Event listener to keep track of the window
  window.addEventListener("resize", updateWindowWidth);

  useEffect(() => {
    setViewportWidth(window.innerWidth);
  }, []);

  return (
    <div
      className={viewportWidth >= 1366 ? "nav u-flex-right" : "nav u-flex-left"}
    >
      {viewportWidth >= 1366 ? (
        <ul className="nav__link">
          <li className="nav__link--item">
            <Link to="/">Appreciation</Link>
          </li>
          <li className="nav__link--item">
            <Link to="presents">Presents</Link>
          </li>
          <li className="nav__link--item">
            <Link to="faqs">FAQs</Link>
          </li>
        </ul>
      ) : (
        <div className="nav-icon">
          {navCheck ? (
            <div onClick={() => setNavCheck(!navCheck)} className="nav__mobile">
              <span className="nav__mobile--selected nav__mobile--selected-1"></span>
              <span className="nav__mobile--selected nav__mobile--selected-2"></span>
            </div>
          ) : (
            <div onClick={() => setNavCheck(!navCheck)} className="nav__mobile">
              <span className="nav__mobile--notselected nav__mobile--notselected-1"></span>
              <span className="nav__mobile--notselected nav__mobile--notselected-2"></span>
              <span className="nav__mobile--notselected nav__mobile--notselected-3"></span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Nav;
