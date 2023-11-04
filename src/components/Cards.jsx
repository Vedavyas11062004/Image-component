import React from "react";
import "../styles/ImageStyles.css";
import playbtn from '../assets/playButton.svg'

function Cards({ tags, heading, url, className }) {
  console.log(url);
  console.log(tags);
  return (
    <div className={`card ${className}`}>
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
