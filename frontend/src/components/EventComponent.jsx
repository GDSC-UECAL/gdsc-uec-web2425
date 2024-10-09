import React, { useState, useEffect } from 'react';
import './EventComponent.css';
import teach from '../assets/events/teach.png';
import rec21 from '../assets/events/rec21.png';
import celis from '../assets/events/celis.png';
import additionalData from '../assets/data/additionalData.json';
// import eventsone from  '../assets/data/eventsone.json';

const EventComponent = () => {
  const event = {
    title: 'React Conference 2024',
    date: 'March 12, 2024',
    time: '10:00 AM - 4:00 PM',
    location: 'Tech Convention Center, San Francisco, CA',
    description: 'Join us for a day full of learning and networking with the brightest minds in the React community. This event will feature talks from top developers and hands-on workshops to enhance your React skills.',
  };

  const backgroundImages = {
    image2: rec21,
    image4: rec21,
    image6: rec21,
    image8: rec21,
  };

  const images = {
    image1: celis,
    image3: teach,
    image5: teach,
    image7: teach,
  };

  const [containers, setContainers] = useState([]);

  useEffect(() => {
    setContainers(additionalData);
  }, []);

  return (
    <div className="event-details-page">
      <div className="image-container">
        <img 
          src={teach} 
          alt="Event"
          style={{ width: '100%', height: 'auto' }} 
          className="image"
        />
      </div>

      <div className="event-details-flex-container">
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

        <div className="flexible-container">
          <div className="flexible-content-container">
            {/* Wrap containers 1 and 2 inside a merged container */}
            <div className="merged-container">
              {containers.slice(0, 2).map((container) => (
                <div
                  key={container.id}
                  className={`additional-container ${container.backgroundImage ? 'background-image' : ''}`}
                  style={{
                    backgroundImage: container.backgroundImage
                      ? `url(${backgroundImages[container.backgroundImage]})`
                      : 'none',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  {/* Render image for containers 1, 3, 5, and 7 */}
                  {container.image ? (
                    <img src={images[container.image]} alt={`Container ${container.id}`} className="container-image" />
                  ) : container.backgroundImage ? (
                    <span className="container-text">{container.text}</span>
                  ) : (
                    container.content
                  )}
                </div>
              ))}
            </div>

            {/* Wrap containers 3 and 4 inside a merged container */}
            <div className="merged-container">
              {containers.slice(2, 4).map((container) => (
                <div
                  key={container.id}
                  className={`additional-container ${container.backgroundImage ? 'background-image' : ''}`}
                  style={{
                    backgroundImage: container.backgroundImage
                      ? `url(${backgroundImages[container.backgroundImage]})`
                      : 'none',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  {/* Render image for containers 1, 3, 5, and 7 */}
                  {container.image ? (
                    <img src={images[container.image]} alt={`Container ${container.id}`} className="container-image" />
                  ) : container.backgroundImage ? (
                    <span className="container-text">{container.text}</span>
                  ) : (
                    container.content
                  )}
                </div>
              ))}
            </div>

            {/* Wrap containers 5 and 6 inside a merged container */}
            <div className="merged-container">
              {containers.slice(4, 6).map((container) => (
                <div
                  key={container.id}
                  className={`additional-container ${container.backgroundImage ? 'background-image' : ''}`}
                  style={{
                    backgroundImage: container.backgroundImage
                      ? `url(${backgroundImages[container.backgroundImage]})`
                      : 'none',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  {/* Render image for containers 1, 3, 5, and 7 */}
                  {container.image ? (
                    <img src={images[container.image]} alt={`Container ${container.id}`} className="container-image" />
                  ) : container.backgroundImage ? (
                    <span className="container-text">{container.text}</span>
                  ) : (
                    container.content
                  )}
                </div>
              ))}
            </div>

            {/* Wrap containers 7 and 8 inside a merged container */}
            <div className="merged-container">
              {containers.slice(6, 8).map((container) => (
                <div
                  key={container.id}
                  className={`additional-container ${container.backgroundImage ? 'background-image' : ''}`}
                  style={{
                    backgroundImage: container.backgroundImage
                      ? `url(${backgroundImages[container.backgroundImage]})`
                      : 'none',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  {/* Render image for containers 1, 3, 5, and 7 */}
                  {container.image ? (
                    <img src={images[container.image]} alt={`Container ${container.id}`} className="container-image" />
                  ) : container.backgroundImage ? (
                    <span className="container-text">{container.text}</span>
                  ) : (
                    container.content
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventComponent;
