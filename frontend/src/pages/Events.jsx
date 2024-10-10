import { useEffect, useState } from "react";
import "./Events.css";
import EventDropdown from "../components/EventDropdown";
import EventCard from "../components/EventCard";
import { monthData, departmentData } from "../data/dropdown_data";
import EventHero from "../components/EventHero";

function Events() {
    const [events, setEvents] = useState([]);
    const [futureEvents, setFutureEvents] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState([]);
    const [showAllEvents, setShowAllEvents] = useState(false);
    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('src/data/eventsall.json');
            const data = await response.json();

            setEvents(data);

            const currentDate = new Date();
            const upcomingEvents = data
                .filter(event => new Date(event.date) >= currentDate)
                .sort((a, b) => new Date(a.date) - new Date(b.date)); 
    
            setFilteredEvents(upcomingEvents);
            setFutureEvents(upcomingEvents)
        }
        fetchData();
    }, []);

    useEffect(() => {
        const filtered = events.filter(event => {
            const dateParts = event.date.split('-');
            const eventMonth = dateParts[1]; 

            const matchesMonth = selectedMonth ? eventMonth === selectedMonth : true;
            const matchesDepartment = selectedDepartment ? event.department === selectedDepartment : true;
            return matchesMonth && matchesDepartment;
        });

        setFilteredEvents(filtered);
    }, [selectedMonth, selectedDepartment, selectedCategory]);
    

    function handleShowAll() {
        setShowAllEvents(true)
    }

    return (
        <>
            <main id="event-main">
                <EventHero events={futureEvents}/>
                <div id="event-nav">
                    <div>
                        <h1>Events</h1>
                    </div>
                    <div id="event-dropdowns">
                        <EventDropdown title="Month" options={monthData} onSelect={setSelectedMonth} />
                        <EventDropdown title="Department" options={departmentData} onSelect={setSelectedDepartment}/>
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
                {!showAllEvents && filteredEvents.length >= 4 && 
                    <div id="event-button">
                        <button onClick={handleShowAll}>See More</button>
                    </div>
                }
                {filteredEvents.length == 0 && (
                    <div id="event-message">
                        <p>No Available events.</p>
                    </div>
                )}
            </main>
        </>
    )
}

export default Events;