import { useEffect, useState } from "react";
import "./Events.css";
import EventDropdown from "../components/EventDropdown";
import EventCard from "../components/EventCard";

function Events() {
    const [events, setEvents] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState([]);
    const [showAllEvents, setShowAllEvents] = useState(false);
    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('src/data/eventsall.json');
            const data = await response.json();
            setEvents(data)
            setFilteredEvents(data);
        };
        fetchData();
    }, [])

    useEffect(() => {
        const filtered = events.filter(event => {
            const dateParts = event.date.split('-');
            const eventMonth = dateParts[1]; 

            const matchesMonth = selectedMonth ? eventMonth === selectedMonth : true;
            return matchesMonth;
        });

        setFilteredEvents(filtered);
    }, [selectedMonth, selectedDepartment, selectedCategory, events]);
    

    function handleShowAll() {
        setShowAllEvents(true)
    }

    const monthData = [
        { name: 'January', value: '01' },
        { name: 'February', value: '02' },
        { name: 'March', value: '03' },
        { name: 'April', value: '04' },
        { name: 'May', value: '05' },
        { name: 'June', value: '06' },
        { name: 'July', value: '07' },
        { name: 'August', value: '08' },
        { name: 'September', value: '09' },
        { name: 'October', value: '10' },
        { name: 'November', value: '11' },
        { name: 'December', value: '12' },
    ];

    return (
        <>
            <main id="event-main">
                <div id="event-nav">
                    <div>
                        <h1>Events</h1>
                    </div>
                    <div id="event-dropdowns">
                        <EventDropdown title="Month" options={monthData} onSelect={setSelectedMonth} />
                        <EventDropdown title="Department" options={['Web Development', "Game Development", "Data Science", "UI/UX"]} onSelect={setSelectedDepartment}/>
                        <EventDropdown title="Category" options={['Workshops', 'Conferences', 'Webinars']} onSelect={setSelectedCategory}/>
                    </div>
                </div>
                <div id="event-container">
                    {(showAllEvents ? filteredEvents : filteredEvents.slice(0, 4)).map((event) => {
                        const date = event.date.split('-');
                        const month = date[1];
                        const day = parseInt(date[2], 10);

                        const formattedMonth = monthData.find(monthObj => monthObj.value === month);
                        const monthName = formattedMonth.name.substring(0, 3).toUpperCase();
                        const formattedDay = `${day}`;

                        return (
                            <EventCard key={event.id} {...event} day={formattedDay} month={monthName}/>
                        );
                    })}
                </div>
                {!showAllEvents && filteredEvents.length !== 0 && 
                    <div id="event-button">
                        <button onClick={handleShowAll}>See More</button>
                    </div>
                }
            </main>
        </>
    )
}

export default Events;