import "./EventDropdown.css";

function EventDropdown({title}) {
    return (
        <div className="event-dropdown">
            <div className="event-dropdown-button">
                {title}
                <span className="event-dropdown-arrow">▼</span>
            </div>
        </div>
    )
}

export default EventDropdown;