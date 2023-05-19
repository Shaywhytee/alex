import React, { useState, useContext } from "react";
import HonestDragon from "./cards/Honest-Dragon.png"
import ThievesJersey from "./cards/Thieves-Jersey.png"
import EditSupreme from "./cards/Edit-Supreme.png"
import { ContentContext } from "../helpers/content_provider";



function About() {
  const contentData = useContext(ContentContext);
  const textBox1 = contentData.find((item) => item.name === 'textBox1');
  const textBox2 = contentData.find((item) => item.name === 'textBox2');
  const textBox3 = contentData.find((item) => item.name === 'textBox3');
  const pictureBox1 = contentData.find((item) => item.name === 'pictureBox1');
  const pictureBox2 = contentData.find((item) => item.name === 'pictureBox2');
  const pictureBox3 = contentData.find((item) => item.name === 'pictureBox3');

  if(!textBox1 || !textBox2 || !textBox3 || !pictureBox1 || !pictureBox2 || !pictureBox3) {
    return null
  }

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
          <h1>{textBox1.title}</h1>
          <p>{textBox1.content}</p>
        </div>
        <div className="group_picture">
          <img src={pictureBox1.link}></img>
        </div>
        <div className="gaming_picture">
          <img src={pictureBox2.link}></img>
        </div>
        <div className="about_square">
          <h1>{textBox2.title}</h1>
          <p>{textBox2.content}</p>
        </div>
        <div className="about_square">
          <h1>{textBox3.title}</h1>
          <p>{textBox3.content}</p>
        </div>
        <div className="jersey_picture">
          <img src={pictureBox3.link}></img>
        </div>
      </div>
    </div>
  )
}

export default About