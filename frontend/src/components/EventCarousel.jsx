import React, { useState } from 'react';
import './EventCarousel.css';

const EventCarousel = ({ events }) => {

  const getInitialActiveIndex = (events) => {
    const itemCount = events.filter(event => event.banner).length;

    if (itemCount === 1) return 0;
    if (itemCount === 2) return ""; 
    if (itemCount === 3) return 1; 
    if (itemCount === 4) return ""; 
    if (itemCount === 5) return 2; 
  };

  const [activeIndex, setActiveIndex] = useState(getInitialActiveIndex(events));

  const handleItemClick = (index) => {
    const itemCount = events.filter(event => event.banner).length;

    if (itemCount < 2 || itemCount > 4) {
      setActiveIndex(index);
    }
  };

  const getClassName = (index) => {
    const position = (index - activeIndex + events.length) % events.length;
    const itemCount = events.filter(event => event.banner).length;

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
      if (position === 2) {
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
      {events.filter(event => event.banner).length > 0 ? ( 
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
      ) : (
        <div className="events-message">
          <span>There's no upcoming events.</span>
        </div>
      )}
    </div>
  );
};

export default EventCarousel;
