import React, { useEffect } from "react";
import "../styles/ImageStyles.css";

function ImageComponent({ image }) {
  useEffect(() => {
    const element = document.getElementById("textcontainer");
    const element2 = document.getElementById("imageContent"); 
    if (element) {
      element.classList.add("text-visible");
    }
    if (element2) {
      element2.classList.add("imgText-visible");
    }
  }, []);
  return (
    <div>
      <div className="image_container">
        {/* <img src={image} alt="img.." className="heroImg"></img> */}
        <div className="heroImg">
          <div className="ImageContent" id="imageContent">
            <h1>Industriepolitik</h1>
            <p>KLIMANEUTRALITÄT BIS 2045</p>
          </div>
        </div>
      </div>
      <div className={`textContainer`} id="textcontainer">
        <h2>Klimaneutralität bis 2045</h2>
        <p>
          Im Ausschuss bin ich für meine Fraktion zuständig für Stahl, Chemie
          und Baustoffe. Hier liegt mein Fokus darauf, zielgerichtete Wege für
          den 1,5-Grad Pfad und die Zielmarke der bundesweiten Klimaneutralität
          bis 2045 zu erarbeiten.
        </p>
        <p>
          Damit unsere Industrie auf dem Weg in die Transformation bestens
          vorbereitet ist, arbeite ich mit an passgenauen Lösungen für die
          zukunftsorientierte Umgestaltung der Rahmenbedingungen für
          klimafreundliche Prozesse - für Arbeitnehmer:innen und Unternehmen.
        </p>
      </div>
    </div>
  );
}

export default ImageComponent;

// className={`card ${className} ${isVisible? 'card-visible' : ""}`
