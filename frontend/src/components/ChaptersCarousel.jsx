import React, { useState } from 'react';
import './ChaptersCarousel.css';
import img1 from '../assets/about/igma1.png';
import img2 from '../assets/about/igma2.png';
import img3 from '../assets/about/igma3.png';
import img4 from '../assets/about/igma4.png';

const EventCarousel = () => {
  const images = [
    { id: 1, src: img1, alt: 'Event 1' },
    { id: 2, src: img2, alt: 'Event 2' },
    { id: 3, src: img3, alt: 'Event 3' },
    { id: 4, src: img4, alt: 'Event 4' },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  const getClassName = (index) => {
    const position = (index - activeIndex + images.length) % images.length;
    switch (position) {
      case 0:
        return 'ch-carousel-items ch-items-1';
      case 1:
        return 'ch-carousel-items ch-items-2';
      case 2:
        return 'ch-carousel-items ch-items-3';
      case 3:
        return 'ch-carousel-items ch-items-4';
      default:
        return ''; 
    }
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="ch-carousel col-12 d-flex justify-content-center align-items-center">
          {images.map((image, index) => (
            <div
              className={getClassName(index)}
              key={index}
              onClick={() => handleItemClick(index)}
            >
              <img src={image.src} alt={image.alt} className="img-fluid" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventCarousel;
