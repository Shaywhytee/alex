import React, { Component, useState } from "react";
import HonestDragon from "./cards/Honest-Dragon.png"
import ThievesJersey from "./cards/Thieves-Jersey.png"
import EditSupreme from "./cards/Edit-Supreme.png"

function About() {
  const[activeCardIndex, setActiveCardIndex] = useState(0)
    const cardData = [
      {image: HonestDragon},
      {image: EditSupreme},
      {image: ThievesJersey},
    ];

    const handlNextCard = () => {
      setActiveCardIndex((prevIndex => (prevIndex + 1) % cardData.length))
    }
    
    const handlPrevCard = () => {
      setActiveCardIndex((prevIndex => (prevIndex - 1 + cardData.length) % cardData.length))
    }

  return (
    <div className="about_container">
      <div className="deck_wrapper">
        <button onClick={handlPrevCard}>&#8249;</button>
        <div className="deck">
          {cardData.map((card, index) => (
            <div key={index} className={`card ${index === activeCardIndex ? "active" : ""}`}>
              <img src={card.image} alt={`Card ${index +1}`} />
            </div>
          ))}
        </div>
        <button onClick={handlNextCard}>&#8250;</button>
      </div>
      <div className="squares">
        <div className="about_square">
          <h1>Gaming History</h1>
          <p>I've Always wanted to be involved in gaming. I've played video games my whole life and been a content creator for years now. I understand what consumers want. I know how you can give it to them.</p>
        </div>
        <div className="group_picture"></div>
        <div className="gaming_picture"></div>
        <div className="about_square">
          <h1>Gaming History</h1>
          <p>I've Always wanted to be involved in gaming. I've played video games my whole life and been a content creator for years now. I understand what consumers want. I know how you can give it to them.</p>
        </div>
        <div className="about_square">
          <h1>Gaming History</h1>
          <p>I've Always wanted to be involved in gaming. I've played video games my whole life and been a content creator for years now. I understand what consumers want. I know how you can give it to them.</p>
        </div>
        <div className="jersey_picture"></div>
      </div>
    </div>
  )
}

export default About