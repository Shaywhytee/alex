import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faTwitch, faTiktok } from '@fortawesome/free-brands-svg-icons'

function NavBar() {
  return (
    <div className="nav_bg">
      <div className="nav_bar_wrapper">
        <div className="icon_wrapper"></div>
        <div className="btn_wrapper">
          <button className="home_btn">Home</button>
          <button className="about_btn">About</button>
          <button className="portfolio_btn">Portfolio</button>
          <button className="contact_btn">Contact</button>
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
