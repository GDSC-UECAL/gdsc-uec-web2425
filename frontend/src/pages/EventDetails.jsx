import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './EventDetails.css'; // Assuming CSS is already there for styling
import teach from '../assets/events/teach.png'; // Image file for the event

function EventDetails() {
  const { id } = useParams(); // Get event ID from URL params
  const [event, setEvent] = useState(null); // State for storing the fetched event

  useEffect(() => {
    async function fetchEvents() {
      try {
        // Fetch data from the events JSON file
        const response = await fetch('/src/data/eventsall.json');
        const data = await response.json();
        // Find the event with the matching id from the URL
        const foundEvent = data.find(event => event.id === parseInt(id));
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
        <img className="event-background-image" src={teach} alt="" />
    </div>

    <div className="event-details-page">
      {/* Image container */}

      <div className="image-title-container">
        <img
          src={teach} // Event image
          alt="Event"
          className="image"
        />
        <div className="title-container">
            <h1 className="event-title">{event.title}</h1>
            <span className="event-date">{event.date}</span> 
            <span className="event-time">{event.time}</span>
            <p className="event-location">{event.location}</p>
        </div>
       
      </div>

      {/* Event details and flexible content container */}
      <div className="event-details-flex-container">
        {/* Event details section */}
        <div className="event-details-container">
          <div className="event-details">
            <p className="event-description">{event.description}</p>
          </div>
        </div>

        {/* Dynamically render speakers or additional details (if available) */}
        <div className="flexible-container">
          <div className="flexible-content-container">
            {event.speakers && event.speakers.length > 0 && (
              <div className="speakers-section">
                <h2>Speakers</h2>
                <div className="speakers-grid">
                  {event.speakers.map((speaker, index) => (
                    <div key={index} className="speaker-card">
                      <img
                        src={speaker.image} // Assuming speaker images are available in event data
                        alt={speaker.name}
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
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default EventDetails;
