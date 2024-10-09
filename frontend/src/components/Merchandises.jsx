import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../components/Merchandises.css';
import bell from '../assets/products/bell.png';
import bigBall from '../assets/products/bigBall.png';
import square2 from '../assets/products/square2.png';
import nextLeft from '../assets/products/nextLeft.png';
import nextRight from '../assets/products/nextRight.png';
import leftArrowMerch from '../assets/products/leftArrowCar.png';
import rightArrowMerch from '../assets/products/rightArrowCar.png';

function Card({ image, title, text, price, color }) {
  return (
    <div className="card custom-card no-margin-padding">
      {/* Container for the circle and image */}
      <div className="image-circle-container">
        <div className="circle-background" style={{ backgroundColor: color }}></div>
        <img
          src={`http://localhost:8000/storage/${image}`} 
          className="card-img-top image-circle"
          alt="Card"
        />
      </div>
      <div className="card-body text-start">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="card-title" style={{ marginTop: '-5px' }}>
            {title}
          </h5>
        </div>
        <p style={{ fontWeight: 'bold', color:'#611DE6'}}>
          ₱{price}
        </p>
        <p className="card-text" style={{ marginTop: '-10px' }}>{text}</p>
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

  // Array of colors to be used for the circles
  const colors = ['#DB4437', '#4285F4', '#F4B400', '#0F9D58', '#611DE6'];

  return (
    <>
    <h1 className='merchTitle'>Merchandises</h1>
      {/* Images */}
      <div className="elementsdiv">
        <img src={bell} alt="" className="bell elements1" />
        <img src={bigBall} alt="" className="bigBall elements1" />
        <img src={square2} alt="" className="square2 elements" />
        <img src={leftArrowMerch} alt="" className="leftArrowMerch elements2" />
        <img src={rightArrowMerch} alt="" className="rightArrowMerch elements2" />
      </div>

      {/* Main Content */}
      <div className="container mt-4 marginBottomCard" style={{ marginBottom: '100px' }}>
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
            <div className="col-12 col-sm-6 col-md-4" key={index}>
              <Card
                text={card.description}
                image={card.banner}
                title={card.title}
                price={card.price}
                color={colors[index % colors.length]} // Assign color based on index
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Merchandises;
