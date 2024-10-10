import React, { useState } from 'react';
import './EventCarousel.css';

const EventCarousel = () => {
  const images = [
    { id: 1, src: 'https://via.placeholder.com/300x300?text=Event+1', alt: 'Event 1' },
    { id: 2, src: 'https://via.placeholder.com/300x300?text=Event+2', alt: 'Event 2' },
    { id: 3, src: 'https://via.placeholder.com/300x300?text=Event+3', alt: 'Event 3' },
    { id: 4, src: 'https://via.placeholder.com/300x300?text=Event+4', alt: 'Event 4' },
    { id: 5, src: 'https://via.placeholder.com/300x300?text=Event+5', alt: 'Event 5' },
  ];

  const [activeIndex, setActiveIndex] = useState(2);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  const getClassName = (index) => {
    const position = (index - activeIndex + images.length) % images.length;

    switch (position) {
      case 0: return 'carousel-items item-3';
      case 1: return 'carousel-items item-4';
      case 2: return 'carousel-items item-5';
      case 3: return 'carousel-items item-1';
      case 4: return 'carousel-items item-2';
      default: return ''; 
    }
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        {images.map((image, index) => (
          <div 
            className={getClassName(index)} 
            key={index}
            onClick={() => handleItemClick(index)}
          >
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCarousel;
