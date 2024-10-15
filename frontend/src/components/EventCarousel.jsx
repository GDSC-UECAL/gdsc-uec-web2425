import React, { useState } from 'react';
import './EventCarousel.css';

const EventCarousel = ({events}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index)
  };

  const getClassName = (index) => {
    const position = (index - activeIndex + events.length) % events.length;
    const itemCount = events.filter(event => event.banner).length;

    if (itemCount === 0) return '';

    if (itemCount === 1) {
        return 'carousel-items item-3';
    }

    if (itemCount === 2) {
        return position === 0 ? 'carousel-items item-2' : 'carousel-items item-4';
    }

    if (itemCount === 3) {
        return `carousel-items item-${position + 2}`;
    }

    if (itemCount === 4) {
      if (position === 0) {
        return `carousel-items item-4`
      }
      if (position === 1) {
        return `carousel-items item-5`
      }
      if (position === 2) {
        return `carousel-items item-1`
      }
      if (position === 3) {
        return `carousel-items item-2`
      }
    }

    if (itemCount === 5) {
        return `carousel-items item-${(position + 2) % 5 + 1}`; 
    }
};

  return (
    <div className="carousel-container">
       {events.filter(event => event.banner).length > 0 && ( 
        <div className="carousel">
          {events
            .filter(event => event.banner) 
            .map((event, index) => (
              <div 
                className={getClassName(index)} 
                key={event.id}
                onClick={() => handleItemClick(index)}
              >
                <img src={`http://localhost:8000/storage/${event.banner}`} alt={event.title} />
                <p className="carousel-event-title">{event.title}</p>
              </div>
            ))}
        </div>
        )}
    </div>
  );
}

export default EventCarousel;
