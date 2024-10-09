import React from 'react';
import './EventComponent.css';
import teach from '../assets/events/teach.png';

const EventComponent = () => {
  const event = {
    title: 'React Conference 2024',
    date: 'March 12, 2024',
    time: '10:00 AM - 4:00 PM',
    location: 'Tech Convention Center, San Francisco, CA',
    description: 'Join us for a day full of learning and networking with the brightest minds in the React community. This event will feature talks from top developers and hands-on workshops to enhance your React skills.',
  };

  return (
    <div className="event-details-page">
      {/* Image container */}
      <div className="image-container">
        <img 
          src={teach} 
          alt="Event"
          style={{ width: '100%', height: 'auto' }} 
          className="image"
        />
      </div>

      {/* Event details and flexible container side by side */}
      <div className="event-details-flex-container">
        {/* Event details container */}
        <div className="event-details-container">
          <div className="event-details">
            <h1 className="event-title">{event.title}</h1>
            <p className="event-date-time">
              <span className="event-date">{event.date}</span> | <span className="event-time">{event.time}</span>
            </p>
            <p className="event-location">{event.location}</p>
            <p className="event-description">{event.description}</p>
          </div>
        </div>

        {/* Right-side flexible container */}
        <div className="flexible-container">
          <div className="flexible-content-container">
            <div className="additional-container">Container 1</div>
            <div className="additional-container">Container 2</div>
            <div className="additional-container">Container 3</div>
            <div className="additional-container">Container 4</div>
            <div className="additional-container">Container 5</div>
            <div className="additional-container">Container 6</div>
            <div className="additional-container">Container 7</div>
            <div className="additional-container">Container 8</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventComponent;
