import { useEffect, useState } from "react";
import "./Events.css";
import cube from '../assets/common/6.png';
import ball from "../assets/common/1.png";
import vector1 from '../assets/common/vector_c.png';
import vector2 from '../assets/common/vector_f.png';

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
        <>
            <img className="event-image cube" src={cube} alt="cube"/>
            <img className="event-image ball" src={ball} alt="ball"/>
            <img className="event-image vector1" src={vector1} alt="vector1"/>
            <img className="event-image vector2" src={vector2} alt="vector2"/>
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
                        <button onClick={handleShowAll}>See More</button>
                    </div>
                )}
            </main>
        </>
    )
}

export default Events;