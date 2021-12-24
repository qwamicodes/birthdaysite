import React from "react";
import { Link } from "react-router-dom";

const NavBackground = ({ navCheck, setNavCheck }) => {
  return (
    <div
      className={
        navCheck ? "nav__background nav__background--active" : "nav__background"
      }
    >
      <ul className="nav__links">
        <li onClick={() => setNavCheck(!navCheck)} className="nav__links--item">
          <Link to="/">Appreciation</Link>
        </li>
        <li onClick={() => setNavCheck(!navCheck)} className="nav__links--item">
          <Link to="presents">Presents</Link>
        </li>
        <li onClick={() => setNavCheck(!navCheck)} className="nav__links--item">
          <Link to="faqs">FAQ</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBackground;
