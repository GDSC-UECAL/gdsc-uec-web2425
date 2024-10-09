import { useEffect, useState } from "react";
import "./Events.css";
import EventDropdown from "../components/EventDropdown";
import EventCard from "../components/EventCard";

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

    const monthData = [
        "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
        "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
    ];

    return (
        <>
            <main id="event-main">
                <div id="event-nav">
                    <div>
                        <h1>Events</h1>
                    </div>
                    <div id="event-dropdowns">
                        <EventDropdown title="Month"/>
                        <EventDropdown title="Department"/>
                        <EventDropdown title="Category"/>
                    </div>
                </div>
                <div id="event-container">
                    {(showAllEvents ? events : events.slice(0, 4)).map((event) => {
                        const date = event.date.split('-');
                        const month = parseInt(date[1], 10) - 1;
                        const day = parseInt(date[2], 10);

                        const formattedMonth = monthData[month];
                        const formattedDay = `${day}`;

                        return (
                            <EventCard key={event.id} {...event} day={formattedDay} month={formattedMonth}/>
                        );
                    })}
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