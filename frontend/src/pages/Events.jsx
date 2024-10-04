import { useEffect, useState } from "react";
import "./Events.css";

function Events() {
    const [events, setEvents] = useState([]);
    const [showAllEvents, setShowAllEvents] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('src/data/events.json');
            const data = await response.json();
            setEvents(data)
        };
        fetchData();
    }, [])

    function handleShowAll() {
        setShowAllEvents(true)
    }

    return (
        <main id="event-main">
            <h1>Events</h1>
            <div id="event-container">
                {(showAllEvents ? events : events.slice(0, 4)).map((event) => (
                    <div key={event.id}>
                        <img src={event.eventImage} alt={event.eventName} />
                        <h6>{event.eventName}</h6>
                        <p>{event.eventDate}</p>
                    </div>
                ))}
            </div>
            {!showAllEvents && (
                <div id="event-button">
                    <button onClick={handleShowAll}>See More</button>
                </div>
            )}
        </main>
    )
}

export default Events;