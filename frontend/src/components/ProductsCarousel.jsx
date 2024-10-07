import React, { useEffect, useState } from 'react';
import laptopic from '../assets/products/laptopic.png';
import '../components/ProductsCarousel.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import bell from '../assets/products/bell.png';
import ball1right from '../assets/products/ball1right.png';
import ball1left from '../assets/products/ball1left.png';
import square1 from '../assets/products/square1.png';
import nextLeft from '../assets/products/nextLeft.png'
import nextRight from '../assets/products/nextRight.png'
import redHeadProjects from '../assets/products/redHeadProjects.png'
import yellowHeadProjects from '../assets/products/yellowHeadProjects.png'
import leftLineProjects from '../assets/products/leftLineProjects.png'
import rightLineProjects from '../assets/products/rightLineProjects.png'


function ProductsCarousel() {
  const [products, setProducts] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchedProducts = [
      { id: 1, image: laptopic, alt: 'laptop' },
      { id: 2, image: laptopic, alt: 'laptop' },
      { id: 3, image: laptopic, alt: 'laptop' },
      { id: 4, image: laptopic, alt: 'laptop' },
      { id: 5, image: laptopic, alt: 'laptop' },
      { id: 6, image: laptopic, alt: 'laptop' },
      { id: 7, image: laptopic, alt: 'laptop' },
      { id: 8, image: laptopic, alt: 'laptop' },
    ];
    setProducts(fetchedProducts);
  }, []);

  const handleRadioChange = (index) => {
    setActiveIndex(index);
  };

  const getTransformStyles = (index) => {
    const totalItems = products.length;
    const previousIndex = (activeIndex - 1 + totalItems) % totalItems; // Previous item
    const nextIndex = (activeIndex + 1) % totalItems; // Next item

    if (index === activeIndex) {
      return {
        transform: `translateX(0) scale(1)`,
        opacity: 1,
        zIndex: 3,
      };
    } else if (index === previousIndex) {
      return {
        transform: `translateX(-40%) scale(0.8)`,
        opacity: 0.6,
        zIndex: 2,
      };
    } else if (index === nextIndex) {
      return {
        transform: `translateX(40%) scale(0.8)`,
        opacity: 0.6,
        zIndex: 2,
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
    <img src={bell} alt="" className="bellCar elements"/>
    <img src={ball1left} alt="" className="ball1leftCar elements2"/>
    <img src={ball1right} alt="" className="ball1rightCar elements2"/>
    <img src={square1} alt="" className="square1Car elements1"/>
    <img src={redHeadProjects} alt="" className="redHeadProjectsCar elements1"/>
    <img src={leftLineProjects} alt="" className="leftLineProjectsCar elements1"/>
    <img src={yellowHeadProjects} alt="" className="yellowHeadProjectsCar elements2"/>
    <img src={rightLineProjects} alt="" className="rightLineProjectsCar elements2"/>
    
    <div className="carouselcontainer">
      <div className="container">
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

        <div className="cards">
        <img src={nextRight} alt="" className="nextRightCar"/>
        <img src={nextLeft} alt="" className="nextLeftCar"/>
          {products.map((product, index) => (
            <label
              key={index}
              className="prodcard"
              htmlFor={`itemm-${index + 1}`}
              id={`song-${index + 1}`}
              style={getTransformStyles(index)}
            >
              <img className="eventpic" src={product.image} alt={product.alt} />
            </label>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

export default ProductsCarousel;
