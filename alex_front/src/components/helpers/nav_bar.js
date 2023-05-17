import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faTwitch, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function NavBar() {
  return (
    <div className="nav_bg">
      <div className="nav_bar_wrapper">
        <div className="icon_wrapper"></div>
        <div className="btn_wrapper">
          <Link to="/home" className="nav_btn">Home</Link>
          <Link to ="/about" className="nav_btn">About</Link>
          <Link to="/portfolio" className="nav_btn">Portfolio</Link>
          <Link to="/contact" className="nav_btn">Contact</Link>
        </div>
        <div className="socials_wrapper">
          <div className="social"><FontAwesomeIcon icon={faYoutube} size="2x" /></div>
          <div className="social"><FontAwesomeIcon icon={faTwitch} size="2x" /></div>
          <div className="social"><FontAwesomeIcon icon={faTiktok} size="2x" /></div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
