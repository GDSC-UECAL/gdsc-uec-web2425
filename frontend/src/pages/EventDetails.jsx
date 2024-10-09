import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EventComponent from '../components/EventComponent';

function EventDetails() {
    const { id } = useParams();
    const [event, setEvent] = useState([]);

    useEffect(() => {
        async function fetchEvents() {
                const response = await fetch('/src/data/eventsall.json');
                const data = await response.json();
                const foundEvent = data.find(event => event.id === parseInt(id));
                setEvent(foundEvent);
            }
        fetchEvents();
    }, []);

    return (
        <>
            <p>{event.id}</p>
            <p>{event.title}</p>
            <p>{event.location}</p>
            <p>{event.date}</p>

            <EventComponent/>
        </>

        
    )
    
}

export default EventDetails;