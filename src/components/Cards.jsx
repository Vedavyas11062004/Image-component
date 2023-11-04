import React, { useState,useEffect } from "react";
import "../styles/ImageStyles.css";
import playbtn from '../assets/playButton.svg'

function Cards({ tags, heading, url, className,animationDelay}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("cardsContainer");
      if (element) {
        const rect = element.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
        setIsVisible(rect.top < windowHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`card ${className} ${isVisible? 'card-visible' : ""}`}
    style={{ animationDelay: `${animationDelay}s` }}
    id="cardsContainer"
    >
      <ul>
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
      <h2>{heading}</h2>
      <div className="card_imgContainer">
        <div className="overlay"></div>
        <img src={url} alt="img.. " className="card_img"></img>
        <img src={playbtn} alt="play.." className="play_btn"></img>
      </div>
      <span className="span_nextPage">WEITERLESEN</span>
    </div>
  );
}

export default Cards;
