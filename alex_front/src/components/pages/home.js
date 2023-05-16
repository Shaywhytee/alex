import React, { Component } from "react";

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
      <div className="option_wrapper">
        <div className="services_wrapper">
          <h2>Services</h2>
          <ul>
            <p>Video Editing</p>
            <p>Personality Coaching</p>
            <p>Twitch to Youtube</p>
          </ul>
        </div>
        <div className="pricing_wrapper">
          <h2>Pricing</h2>
          <div className="price_options">
            <p>$40 Single Video</p>
            <p>$70 Two Videos</p>
            <p>$90 Three Videos</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
