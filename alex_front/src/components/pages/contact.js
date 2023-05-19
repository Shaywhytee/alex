import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faCat, faShieldCat, faFaceLaughSquint, faExplosion } from "@fortawesome/free-solid-svg-icons";
import ContactForm from "./contact_form";


function Contact() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (option === 'discord') {
      window.open('https://discord.gg/2xGPggtY', '_blank');
    }
  };

  return (
    <div className="contact_container">
      <div className="title_container">
        <h1>Honest Editz</h1>
        <p>Whether you're an up and coming content creator or a veteran, I can help you achieve new heights.</p>
      </div>
      <div className="new_clients">
        <h1>Now accepting new clients! Send an email or join Discord!</h1>
      </div>
      <div className="ad_squares">
        <div className="ad_square">
          <FontAwesomeIcon icon={faCat} size="4x" />
          <p>For the Noobs</p>
        </div>
        <div className="ad_square">
          <FontAwesomeIcon icon={faShieldCat} size="4x" />
          <p>For the Veterans</p>
        </div>
        <div className="ad_square">
          <FontAwesomeIcon icon={faFaceLaughSquint} size="4x" />
          <p>For the Humor</p>
        </div>
        <div className="ad_square">
          <FontAwesomeIcon icon={faExplosion} size="4x" />
          <p>For the Epic</p>
        </div>
      </div>
      <div className="form_wrapper">
        <div className="form_selection">
          <button onClick={() => handleOptionClick('discord')} className={selectedOption === 'discord' ? 'active' : ''}>
            <FontAwesomeIcon icon={faDiscord} size="2x" />
            <p>Join Discord</p>
          </button>
          <button onClick={() => handleOptionClick('email')} className={selectedOption === 'email' ? 'active' : ''}>
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
            <p>Send Email</p>
          </button>
        </div>
        {selectedOption === 'email' && (
          <ContactForm />
        )}
      </div>
    </div>
  );
}

export default Contact;
