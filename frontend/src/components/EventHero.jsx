import "./EventHero.css"
import horn from "../assets/common/5.png";
import ball from "../assets/common/4.png";
import cube1 from "../assets/common/6.png";
import cube2 from "../assets/common/3.png";
import EventCarousel from "./EventCarousel";

function EventHero({events}) {

    return (
        <>
            <img className="event-hero-designs horn" src={horn} alt={horn}/>
            <img className="event-hero-designs ball" src={ball} alt={ball}/>
            <img className="event-hero-designs cube1" src={cube1} alt={cube1}/>
            <img className="event-hero-designs cube2" src={cube2} alt={cube2}/>
            <div id="event-hero-main">
                <h1>Upcoming Events</h1>
                <p>Come and join our exciting events where</p>
                <p className="event-text-highlight">together, we discover future</p>
                <div className="event-banner-container">
                    {events.length > 0 ? (
                        <EventCarousel events={events.slice(0,5)}/>
                    ) : (
                        <p>No upcoming events available.</p>
                    )}
                </div>
            </div>
        </>
    )
}

export default EventHero;