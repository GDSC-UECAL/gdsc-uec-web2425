import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './EventDetails.css';
import teach from '../assets/events/teach.png'; // Default placeholder image
import rec21 from  '../assets/events/rec21.png'; // Another placeholder image

function EventDetails() {
  const { id } = useParams(); // Get event ID from URL params
  const [event, setEvent] = useState(null); // State for storing the fetched event

  useEffect(() => {
    async function fetchEvents() {
      try {
        // Fetch data from the correct API
        const response = await fetch('http://localhost:8000/api/v1/events');
        const data = await response.json();
        // Find the event with the matching id from the URL
        const foundEvent = data.data.find(event => event.id === parseInt(id));
        setEvent(foundEvent); // Set the event to state
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    }
    fetchEvents();
  }, [id]); // Re-run the effect when id changes

  if (!event) {
    return <p>Loading event details...</p>; // Loading state before data is available
  }

  return (
    <>
      <div className="event-background">
        {/* Display event banner or a default image */}
        <img className="event-background-image" src={`http://localhost:8000/storage/${event.banner}`}/>
      </div>

      <div className="event-details-page">
        {/* Image and title container */}
        <div className="image-title-container">
          <img
            src={`http://localhost:8000/storage/${event.banner}`} 
            alt="Event"
            className="image"
          />
          <div className="title-container">
            <h1 className="event-title">{event.title}</h1>
            <span className="event-date">{event.date}</span>
            <span className="event-time">{event.time ? event.time : 'TBA'}</span> 
            <p className="event-location">{event.location}</p>
          </div>
        </div>

        {/* Event details and flexible content container */}
        <div className="event-details-flex-container">
          {/* Event details section */}
          <div className="event-details-container">
            <div className="event-details">
              <h1>About</h1>
              <p className="event-description">{event.description}</p>
            </div>
          </div>

          {/* Dynamically render speakers or additional details (if available) */}
          {event.speakers && event.speakers.length > 0 && (
            <div className="flexible-container">
              <div className="flexible-content-container">
                <div className="speakers-section">
                  <h2>Speakers</h2>
                  <div className="speakers-grid">
                    {event.speakers.map((speaker, index) => (
                      <div key={index} className="speaker-card">
                        <img
                          src={`http://localhost:8000/storage/${speaker.image}`}
                          className="speaker-image"
                        />
                        <div className="speaker-details">
                          <p className="speaker-name"><strong>{speaker.name}</strong></p>
                          <p className="speaker-title">{speaker.title}</p>
                          <p className="speaker-description">{speaker.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default EventDetails;
