import React, { useState, useEffect } from "react";
import ImageComponent from "../components/ImageComponent";
import img1 from "../assets/image-card-1.webp";
import img2 from "../assets/image-card-2.webp";
import img3 from "../assets/image-card-3.webp";
import Img from "../assets/image.png";
import "../styles/ImageStyles.css";
import Cards from "../components/Cards";
import cardImg from "../assets/Image-card.webp";

function Home() {
  const [data, setData] = useState([
    {
      heading: "Wasserstofhochlauf",
      tags: ["ENERGIEWIRTSCHAFT", "INDUSTRIEPOLITIK", "REDEN", "20.10.2023"],
      url: img1,
    },
    {
      heading: "Bezahlbarer Strom",
      tags: ["ENERGIEWIRTSCHAFT", "INDUSTRIEPOLITIK", "REDEN", "20.10.2023"],
      url: img3,
    },
    {
      heading: "Wasserstofhochlauf",
      tags: [
        "ALLGEMEIN",
        "DUISBURG UND DAS RUHRGEBIET",
        "ENERGIEWIRTSCHAFT",
        "26.09.2023",
      ],
      url: cardImg,
    },
    {
      heading: "Wasserstofhochlauf",
      tags: [
        "ALLGEMEIN",
        "DUISBURG UND DAS RUHRGEBIET",
        "ENERGIEWIRTSCHAFT",
        "26.09.2023",
      ],
      url: img2,
    },
    {
      heading: "Wasserstofhochlauf",
      tags: ["ENERGIEWIRTSCHAFT", "INDUSTRIEPOLITIK", "REDEN", "20.10.2023"],
      url: img1,
    },
    {
      heading: "Wasserstofhochlauf",
      tags: ["ENERGIEWIRTSCHAFT", "INDUSTRIEPOLITIK", "REDEN", "20.10.2023"],
      url: img3,
    },
  ]);

  const [val, setVal] = useState(3);
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
  });

  const handleClick = () => {
    setData([
      ...data,
      {
        heading: "Wasserstofhochlauf",
        tags: ["ENERGIEWIRTSCHAFT", "INDUSTRIEPOLITIK", "REDEN", "20.10.2023"],
        url: img1,
      },
      {
        heading: "Bezahlbarer Strom",
        tags: ["ENERGIEWIRTSCHAFT", "INDUSTRIEPOLITIK", "REDEN", "20.10.2023"],
        url: img3,
      },
      {
        heading: "Wasserstofhochlauf",
        tags: [
          "ALLGEMEIN",
          "DUISBURG UND DAS RUHRGEBIET",
          "ENERGIEWIRTSCHAFT",
          "26.09.2023",
        ],
        url: cardImg,
      },
      {
        heading: "Wasserstofhochlauf",
        tags: [
          "ALLGEMEIN",
          "DUISBURG UND DAS RUHRGEBIET",
          "ENERGIEWIRTSCHAFT",
          "26.09.2023",
        ],
        url: img2,
      },
      {
        heading: "Wasserstofhochlauf",
        tags: ["ENERGIEWIRTSCHAFT", "INDUSTRIEPOLITIK", "REDEN", "20.10.2023"],
        url: img1,
      },
      {
        heading: "Wasserstofhochlauf",
        tags: ["ENERGIEWIRTSCHAFT", "INDUSTRIEPOLITIK", "REDEN", "20.10.2023"],
        url: img3,
      },
    ]);
  };

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
              url={card.url}
              className={(index + 1) % val === 0 ? "third" : "first"}
            />
          ))}
        </div>
        <div className="btn_container">
          <button onClick={handleClick}>MEHR ANZEIGEN</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
