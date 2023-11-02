import React from "react";
import "../styles/ImageStyles.css";

function ImageComponent({ image }) {
  return (
    <div>
      <img src={image} alt="img.." className="heroImg"></img>
      <div className="textContainer">
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
