import "./EventCard.css";
import { useNavigate } from "react-router-dom";

function EventCard(props) { 
    const {id, title, banner, location, month, day} = props;

    const navigate = useNavigate();

    function handleShowEvent(id) {
        navigate(`/event/${id}`);
    }

    return (
        <div className="event-item" key={id} onClick={() => handleShowEvent(id)}>
            <div className="event-image">
                <img src={banner} alt={banner} />
            </div>
            <div className="event-details">
                <div className="event-month-day">
                    <p className="event-month">{month}</p>
                    <p className="event-day">{day}</p>
                </div>
                <div>
                    <p className="event-title">{title}</p>
                    <p className="event-location">{location}</p>
                </div>
            </div>
        </div>
    )
}

export default EventCard;