import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../components/Merchandises.css';
import bell from '../assets/products/bell.png';
import ball1left from '../assets/products/ball1left.png';
import square1 from '../assets/products/square1.png';
import line from '../assets/products/line.png';
import redHead from '../assets/products/redHead.png';
import leftArrow from '../assets/products/leftArrow.png';
import nextLeft from '../assets/products/nextLeft.png';
import nextRight from '../assets/products/nextRight.png';
import bigBall from '../assets/products/bigBall.png';
import Shirt from '../assets/products/Shirt.png';
import Lanyard from '../assets/products/Lanyard.png';
import Tote from '../assets/products/Tote.png';
import EllipseRed from '../assets/products/EllipseRed.png';
import EllipseYellow from '../assets/products/EllipseYellow.png';
import EllipseBlue from '../assets/products/EllipseBlue.png';

// Card Component
function Card({ image, title, text, buttonText, link, price }) {
  return (
    <div className="card custom-card no-margin-padding">
      <img
        src={image}
        className="card-img-top"
        alt="Card"
      />
      <div className="card-body text-start">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="card-title" style={{ marginTop: '-5px' }}>
            {title}
          </h5>
          <p style={{ fontWeight: 'bold', marginTop: '-5px', marginLeft: '1rem' }}>
            ₱{price}
          </p>
        </div>
        <p className="card-text" style={{ marginTop: '-5px' }}>{text}</p>
        <a href={link} className="btn button1" style={{ marginTop: '-5px' }}>
          {buttonText}
        </a>
      </div>
    </div>
  );
}



function Merchandises() {
  // Cards data
  const cardsData = [
    {
      image: Shirt,
      title: "GDSC UEC T-Shirt",
      text: "A black t-shirt with the GDSC logo",
      buttonText: "Order",
      link: "#",
      price: "500", // Price in pesos
    },
    {
      image: Lanyard,
      title: "GDSC UEC Lanyard",
      text: "A cool lanyard to hold your ID or keys",
      buttonText: "Order",
      link: "#",
      price: "250", // Price in pesos
    },
    {
      image: Tote,
      title: "GDSC UEC Tote Bag",
      text: "A trendy tote bag with the GDSC logo",
      buttonText: "Order",
      link: "#",
      price: "300", // Price in pesos
    },
  ];

  // State to track the current starting index of the cards
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the previous card
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cardsData.length - 1 : prevIndex - 1
    );
  };

  // Function to go to the next card
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cardsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Get the current cards to display based on the currentIndex
  const currentCards = [
    cardsData[currentIndex],
    cardsData[(currentIndex + 1) % cardsData.length],
    cardsData[(currentIndex + 2) % cardsData.length],
  ];

  return (
    <>
      {/* Images */}
      <img src={bell} alt="" className="bell elements" />
      <img src={bigBall} alt="" className="bigBall elements1" />
      <img src={ball1left} alt="" className="ball1left elements1" />
      <img src={square1} alt="" className="square1 elements" />
      <img src={line} alt="" className="line elements2" />
      <img src={redHead} alt="" className="redHead elements2" />
      <img src={leftArrow} alt="" className="leftArrow elements2" />

      {/* Main Content */}
      <div className="container mt-4 no-margin-padding marginBottomCard" style={{ marginBottom: '100px' }}>
        {/* Left and Right Navigation Buttons */}
        <img
          src={nextLeft}
          alt="Previous"
          className="nextLeft"
          onClick={handlePrev}
          style={{ cursor: 'pointer' }}
        />
        <img
          src={nextRight}
          alt="Next"
          className="nextRight"
          onClick={handleNext}
          style={{ cursor: 'pointer' }}
        />

        <div className="row g-5">
          {currentCards.map((card, index) => (
            <div className="col-4" key={index}>
              <Card
                image={card.image}
                title={card.title}
                text={card.text}
                buttonText={card.buttonText}
                link={card.link}
                price={card.price} // Pass the price here
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Merchandises;
