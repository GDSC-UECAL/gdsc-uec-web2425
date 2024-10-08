import React, { useState, useEffect } from 'react';
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


function Card({ image, title, text, price}) {
  return (
    <div className="card custom-card no-margin-padding">
      <img
        src={`http://localhost:8000/storage/${image}`} 
        className="card-img-top"
        alt="Card"
      />
      <div className="card-body text-start">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="card-title" style={{ marginTop: '-5px' }}>
            {title}
          </h5>
        </div>
        <p style={{ fontWeight: 'bold', marginTop: '-5px', marginLeft: '1rem' }}>
            ₱{price}
        </p>
        <p className="card-text" style={{ marginTop: '-5px' }}>{text}</p>
        <a href="#" className="btn button1" style={{ marginTop: '-5px' }}>
          Order
        </a>
      </div>
    </div>
  );
}



function Merchandises() {

  const [merchandises, setMerchandises] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/v1/merchandises')
      .then(response => response.json())
      .then(data => {
        setMerchandises(data.data);
      })
      .catch(error => console.error('Error fetching events:', error));
  }, []);


  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? merchandises.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === merchandises.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentCards = merchandises.length
    ? [
        merchandises[currentIndex],
        merchandises[(currentIndex + 1) % merchandises.length],
        merchandises[(currentIndex + 2) % merchandises.length],
      ]
    : [];

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
          {currentCards.length > 0 && currentCards.map((card, index) => (
            <div className="col-4" key={index}>
              <Card
                text={card.title}
                image={card.banner}
                title={card.title}
                price={card.price}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Merchandises;
