import React, { useState } from 'react';
import './EventCarousel.css';

const EventCarousel = ({events}) => {
  const images = [
    { id: 1, src: events[0]?.banner, alt: 'Event 1' },
    { id: 2, src: events[1]?.banner, alt: 'Event 2' },
    { id: 3, src: events[2]?.banner, alt: 'Event 3' },
    { id: 4, src: events[3]?.banner, alt: 'Event 4' },
    { id: 5, src: events[4]?.banner, alt: 'Event 5' },
  ];

  const getInitialActiveIndex = (images) => {
    const itemCount = images.filter(image => image.src).length;

    if (itemCount === 1) return 0;
    if (itemCount === 2) return ""; 
    if (itemCount === 3) return 1; 
    if (itemCount === 4) return ""; 
    if (itemCount === 5) return 2; 
  };

  const [activeIndex, setActiveIndex] = useState(getInitialActiveIndex(images));

  const handleItemClick = (index) => {
    const itemCount = images.filter(image => image.src).length;

    if (itemCount < 2 || itemCount > 4) {
      setActiveIndex(index);
    }
  };

  const getClassName = (index) => {
    const position = (index - activeIndex + images.length) % images.length;
    const itemCount = images.filter(image => image.src).length;

    if (itemCount === 0) return '';

    if (itemCount === 1) {
      return 'carousel-items item-3';
    }

    if (itemCount === 2) {
      if (position === 0) {
        return 'carousel-items item-2';
      }
      if (position === 1) {
        return 'carousel-items item-4';
      }
    }

    if (itemCount === 3) {
      if (position === 0) {
        return 'carousel-items item-2';
      }
      if (position === 1) {
        return 'carousel-items item-3';
      }
      if (position === 4) {
        return 'carousel-items item-4';
      }
    }

    if (itemCount === 4) {
      if (position === 0) {
        return 'carousel-items item-1';
      }
      if (position === 1) {
        return 'carousel-items item-2';
      }
      if (position === 2) {
        return 'carousel-items item-4';
      }
      if (position === 3) {
        return 'carousel-items item-5';
      }
    }

    if (itemCount === 5) {
      if (position === 0) {
        return 'carousel-items item-3';
      }
      if (position === 1) {
        return 'carousel-items item-4';
      }
      if (position === 2) {
        return 'carousel-items item-5';
      }
      if (position === 3) {
        return 'carousel-items item-1';
      }
      if (position === 4) {
        return 'carousel-items item-2';
      }
    }
  };

  return (
    <div className="carousel-container">
       {images.filter(image => image.src).length > 0 ? ( 
        <div className="carousel">
          {images
            .filter(image => image.src)
            .map((image, index) => (
              <div 
                className={getClassName(index)} 
                key={index}
                onClick={() => handleItemClick(index)}
              >
                <img src={image.src} alt={image.alt} />
              </div>
            ))}
        </div>
      ) : (
        <div className="events-message">
          <span>There's no upcoming events.</span>
        </div>
      )}
    </div>
  );
};

export default EventCarousel;
