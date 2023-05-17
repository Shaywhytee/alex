import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faVideo, faUpload } from '@fortawesome/free-solid-svg-icons'

function Home() {
  return (
    <div className="home_container">
      <div className="hero_text_wrapper">
        <h2>Elavate your Content</h2>
        <h1>Show the World</h1>
        <p>It isn't a lack of skill. Sometimes you just need help showing the world what you are truly capable of. Honest Editz will emphasize the content creator you want to be.</p>
      </div>
      <button className="contact_btn">Contact now</button>
      <div className="video_sample">
        <h1>Video Spotlight</h1>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ZCrt32WSNq0"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="steps_wrapper">
        <h1>Here's how it works...</h1>
        <div className="steps_options">
          <div className="step">
            <h1>Contact for a quote</h1>
            <FontAwesomeIcon icon={faMessage} color="rgba(55,55,55,1)" size="4x"/>
          </div>
          <div className="step">
            <h1>Submit your video</h1>
            <FontAwesomeIcon icon={faVideo} color="rgba(55,55,55,1)" size="4x"/>
          </div>
          <div className="step">
            <h1>Upload your video</h1>
            <FontAwesomeIcon icon={faUpload} color="rgba(55,55,55,1)" size="4x"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
