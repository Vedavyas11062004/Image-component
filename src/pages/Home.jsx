import React, { useState,useEffect } from "react";
import ImageComponent from "../components/ImageComponent";
import Img from "../assets/image.png";
import "../styles/ImageStyles.css";
import Cards from "../components/Cards";
import cardImg from "../assets/Image-card.webp";

function Home() {
  const [data, setData] = useState([
    {
      heading: "Wasserstofhochlauf",
      tags: ["ENERGIEWIRTSCHAFT","INDUSTRIEPOLITIK","REDEN",'20.10.2023'],
    },
    {
      heading: "Wasserstofhochlauf",
      tags: ["ENERGIEWIRTSCHAFT","INDUSTRIEPOLITIK","REDEN",'20.10.2023'],
    },
    {
      heading: "Wasserstofhochlauf",
      tags: ["ENERGIEWIRTSCHAFT","INDUSTRIEPOLITIK","REDEN",'20.10.2023'],
    },
    {
      heading: "Wasserstofhochlauf",
      tags: ["ENERGIEWIRTSCHAFT","INDUSTRIEPOLITIK","REDEN",'20.10.2023'],
    }
  ]);

  const [val,setVal] = useState(3);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 1021) {
        setVal(3);
      } else {
        setVal(2);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

  return (
    <div className="home">
      <ImageComponent image={Img} />
      <div className="cards_container">
        <h2>Aktuelles</h2>
          <div className="cards">
            {data.map((card, index) => (
              <Cards
                key={index}
                heading={card.heading} 
                tags={card.tags}
                url={cardImg}
                className={(index+1) % val === 0 ? 'third' : index+1}
              />
            ))}
          </div>
      </div>
    </div>
  );
}

export default Home;
