import React from "react";
import "../styles/ImageStyles.css";
function Cards({ tags, heading, url, className }) {
  console.log(url);
  console.log(tags);
  return (
    <div className={`card ${className}`}>
      <ul>
        {tags.map((tag,index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
      <h2>{heading}</h2>
      <img src={url} alt="img.. "></img>
      <span className="span_nextPage">WEITERLESEN</span>
    </div>
  );
}

export default Cards;
