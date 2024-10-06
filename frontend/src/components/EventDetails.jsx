import React from 'react';
import './EventDetails.css';

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
      <div className="event-details-column"> {/* Flex column for event details and image */}
        {/* Image container */}
        <div className="image-container">
          <img 
            src="https://via.placeholder.com/300x200" // Replace with your image URL
            alt="Event"
            style={{ width: '100%', height: 'auto' }} // Make the image responsive
          />
        </div>

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
      </div>

      {/* Right-side flexible container */}
      <div className="flexible-container">
        {/* New content container inside flexible container */}
        <div className="flexible-content-container">
          <h2>Additional Content</h2>
          <p>
            This container is added inside the flexible container. You can place any
            content here, similar to the event details container.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
