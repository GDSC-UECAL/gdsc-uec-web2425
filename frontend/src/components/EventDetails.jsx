import React from 'react';
import './EventDetails.css';
import teach from '../assets/events/teach.png';

const EventDetails = () => {
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
            {/* Additional containers in 2 rows and 4 columns */}
            {[...Array(8)].map((_, index) => (
              <div key={index} className="additional-container">
                <h2>Additional Content {index + 1}</h2>
                <p>
                  This is additional content container {index + 1}. You can place any
                  content here.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
