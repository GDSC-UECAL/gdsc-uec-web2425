import { useState } from 'react';
import "./EventDropdown.css";

function EventDropdown({title, options, onSelect}) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option.name);
        setIsOpen(false); 
        onSelect(option.value); 
        console.log(option)
    };

    return (
        <div className="event-dropdown">
            <div className="event-dropdown-button" onClick={toggleDropdown}>
                {isOpen ? (
                    <>
                        <span>{title}</span>
                        <span className={`event-dropdown-arrow ${isOpen ? 'open' : ''}`}>▲</span>
                    </>
                ) : (
                    <>
                        <span>{selectedOption ? selectedOption : title}</span>
                        <span className={`event-dropdown-arrow ${isOpen ? 'open' : ''}`}>▼</span>
                    </>
                )}
            </div>
            {isOpen && (
                <div className="event-dropdown-options">
                    {options.map((option) => (
                        <div className="event-dropdown-option" key={option.value} onClick={() => handleOptionClick(option)}>
                            {option.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default EventDropdown;