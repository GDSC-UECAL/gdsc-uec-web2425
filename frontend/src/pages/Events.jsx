import { useEffect, useState } from "react";
import "./Events.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Events() {
    const [events, setEvents] = useState([]);
    const [showAllEvents, setShowAllEvents] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('src/data/eventsall.json');
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
                        <img src={event.banner} alt={event.banner} />
                        <h6>{event.title}</h6>
                        <p>{event.date}</p>
                    </div>
                ))}
            </div>
            {!showAllEvents && (
                <div id="event-button">
                    <button className="btn btn-primary text-white" onClick={handleShowAll}>See More</button>
                </div>
            )}
        </main>
    )
}

export default Events;