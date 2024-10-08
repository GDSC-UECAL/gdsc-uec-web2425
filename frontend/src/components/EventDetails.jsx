import React, { useState, useEffect } from 'react';
import './EventDetails.css';
import teach from '../assets/events/teach.png';
import additionalData from '../assets/data/additionalData.json'; // Adjust the path as necessary

const EventDetails = () => {
  const event = {
    title: 'React Conference 2024',
    date: 'March 12, 2024',
    time: '10:00 AM - 4:00 PM',
    location: 'Tech Convention Center, San Francisco, CA',
    description: 'Join us for a day full of learning and networking with the brightest minds in the React community. This event will feature talks from top developers and hands-on workshops to enhance your React skills.',
  };

  // If you need to fetch the data dynamically, you can use useEffect
  const [containers, setContainers] = useState([]);

  useEffect(() => {
    // You can also fetch the JSON data here if it's stored on a server
    setContainers(additionalData); // Use the imported data directly
  }, []);

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
            {containers.map((container) => (
              <div key={container.id} className="additional-container">
                {container.content} {/* Display content from the JSON data */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
