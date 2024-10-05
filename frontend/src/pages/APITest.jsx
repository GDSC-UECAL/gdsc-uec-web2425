import React, { useState, useEffect } from 'react';

function APITest() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/api/v1/events')
            .then(response => response.json())
            .then(data => {
                setEvents(data.data);
            })
            .catch(error => console.error('Error fetching events:', error));
    }, []);

    return (
        <div style={{ textAlign: 'left', paddingLeft: '0', marginLeft: '0' }}>
            <h1>Events List</h1>
            <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                {events.map(event => (
                    <li key={event.id} style={{ marginBottom: '20px' }}>
                        <h3>{event.title}</h3>
                        <p>{event.description}</p>
                        <p>{event.date}</p>
                        <p>{event.location}</p>

                        {/* the right way of calling the image via the backend's storage */}
                        <img src={`http://localhost:8000/storage/${event.banner}`} alt="Event Banner" style={{ maxWidth: '200px', display: 'block' }} />

                        {/* Render Speakers */}
                        <h4>Speakers:</h4>
                        <ul style={{ paddingLeft: '20px' }}>
                            {event.speakers.map(speaker => (
                                <li key={speaker.id}>
                                    <p>Name: {speaker.name}</p>
                                    <p>Role: {speaker.role}</p>
                                    <img src={speaker.image} alt={speaker.name} style={{ maxWidth: '100px' }} />
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default APITest;
