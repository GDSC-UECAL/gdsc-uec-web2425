import React, { useEffect } from 'react';
import laptopic from '../assets/products/laptopic.png';
import "../components/ProductsCarousel.css";

function ProductsCarousel() {
  
  useEffect(() => {
    const handleInputChange = () => {
      document.body.classList.toggle('blue');
    };

    const radioButtons = document.querySelectorAll('input[type="radio"]');

    radioButtons.forEach((radio) => {
      radio.addEventListener('change', handleInputChange);
    });

    return () => {
      radioButtons.forEach((radio) => {
        radio.removeEventListener('change', handleInputChange);
      });
    };
  }, []); 

  return (
    <div className="carouselcontainer">
      <div className="container">
        <input className='rdbtn' type="radio" name="slider" id="itemm-1" defaultChecked />
        <input className='rdbtn' type="radio" name="slider" id="itemm-2" />
        <input className='rdbtn' type="radio" name="slider" id="itemm-3" />
        <input className='rdbtn' type="radio" name="slider" id="itemm-4" />
        <input className='rdbtn' type="radio" name="slider" id="itemm-5" />
        
        <div className="cards">
          <label className="prodcard" htmlFor="itemm-1" id="song-1">
            <img className="eventpic" src={laptopic} alt="laptop" />
          </label>
          <label className="prodcard" htmlFor="itemm-2" id="song-2">
            <img className="eventpic" src={laptopic} alt="laptop" />
          </label>
          <label className="prodcard" htmlFor="itemm-3" id="song-3">
            <img className="eventpic" src={laptopic} alt="laptop" />
          </label>
          <label className="prodcard" htmlFor="itemm-4" id="song-4">
            <img className="eventpic" src={laptopic} alt="laptop" />
          </label>
          <label className="prodcard" htmlFor="itemm-5" id="song-5">
            <img className="eventpic" src={laptopic} alt="laptop" />
          </label>
        </div>
      </div>
    </div>
  );
}

export default ProductsCarousel;
