import React, { useEffect, useState } from 'react';
import laptopic from '../assets/products/laptopic.png';
import laptopic2 from '../assets/products/laptopic2.png';
import laptopic3 from '../assets/products/laptopic3.png';
import laptopic4 from '../assets/products/laptopic4.png';
import laptopic5 from '../assets/products/laptopic5.png';
import '../components/ProductsCarousel.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import bell from '../assets/products/bell.png';
import ball1right from '../assets/products/ball1right.png';
import ball1left from '../assets/products/ball1left.png';
import ball2left from '../assets/products/ball1left.png';
import square1 from '../assets/products/square1.png';
import nextLeft from '../assets/products/nextLeft.png';
import nextRight from '../assets/products/nextRight.png';
import redHeadProjects from '../assets/products/redHeadProjects.png';
import yellowHeadProjects from '../assets/products/yellowHeadProjects.png';
import leftLineProjects from '../assets/products/leftLineProjects.png';
import rightLineProjects from '../assets/products/rightLineProjects.png';

function ProductsCarousel({banner, title, link, description }) {
  const [products, setProducts] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false); // New state for transition

  useEffect(() => {
    fetch('http://localhost:8000/api/v1/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data.data);
      })
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  const handleNext = () => {
    if (isTransitioning) return; // Prevent action if currently transitioning
    setIsTransitioning(true);
    setActiveIndex((prevIndex) => (prevIndex + 1) % products.length);
    
    setTimeout(() => {
      setIsTransitioning(false); // Reset transition state after delay
    }, 400); // Delay in milliseconds
  };

  const handlePrev = () => {
    if (isTransitioning) return; // Prevent action if currently transitioning
    setIsTransitioning(true);
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );

    setTimeout(() => {
      setIsTransitioning(false); // Reset transition state after delay
    }, 400); // Delay in milliseconds
  };

  const handleRadioChange = (index) => {
    setActiveIndex(index);
  };

  const getTransformStyles = (index) => {
    const totalItems = products.length;
    const previousIndex = (activeIndex - 1 + totalItems) % totalItems;
    const nextIndex = (activeIndex + 1) % totalItems;

    if (index === activeIndex) {
      return {
        transform: `translateX(0) scale(1)`,
        opacity: 1,
        zIndex: 3,
        
      };
    } else if (index === previousIndex) {
      return {
        transform: `translateX(-40%) scale(0.8)`,
        opacity: 1,
        zIndex: 2,
        filter: 'blur(2px)',
      };
    } else if (index === nextIndex) {
      return {
        transform: `translateX(40%) scale(0.8)`,
        opacity: 1,
        zIndex: 2,
        filter: 'blur(2px)',
      };
    } else {
      return {
        transform: `translateX(0) scale(0.6)`,
        opacity: 0,
        zIndex: 1,
        visibility: 'hidden',
      };
    }
  };

  return (
    <>
      <div className="elementsdiv">
      {/* Background Elements */}
      <img src={bell} alt="" className="bellCar elements" />
      <img src={ball1left} alt="" className="ball1leftCar elements2" />
      <img src={ball2left} alt="" className="ball2leftCar elements2" />
      <img src={ball1right} alt="" className="ball1rightCar elements2" />
      <img src={square1} alt="" className="square1Car elements1" />
      <img src={redHeadProjects} alt="" className="redHeadProjectsCar elements1" />
      <img src={leftLineProjects} alt="" className="leftLineProjectsCar elements1" />
      <img src={yellowHeadProjects} alt="" className="yellowHeadProjectsCar elements2" />
      <img src={rightLineProjects} alt="" className="rightLineProjectsCar elements2" />
      </div>
      <div className="carouselcontainer">
        <div className="container">
          {/* Radio Buttons for direct selection */}
          {products.map((_, index) => (
            <input
              key={index}
              className="rdbtn"
              type="radio"
              name="slider"
              id={`itemm-${index + 1}`}
              checked={activeIndex === index}
              onChange={() => handleRadioChange(index)}
            />
          ))}

          <div className="cardscon">
            {/* Left and Right Buttons for navigation */}
            <img
              src={nextLeft}
              alt="Previous"
              className="nextLeftCar"
              onClick={handlePrev}
              style={{ cursor: 'pointer' }}
            />
            <img
              src={nextRight}
              alt="Next"
              className="nextRightCar"
              onClick={handleNext}
              style={{ cursor: 'pointer' }}
            />
            {/* Product Cards */}
            {products.length > 0 &&
              products.map((product, index) => (
                <label
                  key={index}
                  className="prodcard"
                  htmlFor={`itemm-${index + 1}`}
                  id={`song-${index + 1}`}
                  style={getTransformStyles(index)}
                >
                  {activeIndex === index ? (
                    <a
                      className="txtinsidea"
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: 'block', width: '100%', height: '100%' }}
                    >
                      <img
                        className="eventpic"
                        src={`http://localhost:8000/storage/${product.banner}`}
                        alt={product.alt}
                      />
                      <div className="txtinside">
                        <p>{product.title}</p>
                      </div>
                      <div className="txtinside2">
                        <p>{product.description}</p>
                      </div>
                    </a>
                  ) : (
                    <>
                      <img
                        className="eventpic"
                        src={`http://localhost:8000/storage/${product.banner}`}
                        alt={product.alt}
                      />
                      <div className="txtinside">
                        <p>{product.title}</p>
                      </div>
                      <div className="txtinside2">
                        <p>{product.description}</p>
                      </div>
                    </>
                  )}
                </label>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsCarousel;
