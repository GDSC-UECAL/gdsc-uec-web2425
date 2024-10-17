import React, { useEffect, useState } from 'react';
import '../components/Aboutuscarousel.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import nextLeft from '../assets/products/nextLeft.png';
import nextRight from '../assets/products/nextRight.png';

function Aboutuscarousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [carousel, setCarousel] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/api/v1/carousel')
            .then(response => response.json())
            .then(data => {
                setCarousel(data.data);
            })
            .catch(error => console.error('Error fetching events:', error));
    }, []);

    const handleNext = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setActiveIndex((prevIndex) => (prevIndex + 1) % carousel.length);
        
        setTimeout(() => {
            setIsTransitioning(false);
        }, 400);
    };

    const handlePrev = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? carousel.length - 1 : prevIndex - 1
        );

        setTimeout(() => {
            setIsTransitioning(false);
        }, 400);
    };

    const handleRadioChange = (index) => {
        setActiveIndex(index);
    };

    const getTransformStyles = (index) => {
        const totalItems = carousel.length;
        const previousIndex = (activeIndex - 1 + totalItems) % totalItems;
        const nextIndex = (activeIndex + 1) % totalItems;
        const beforePreviousIndex = (activeIndex - 2 + totalItems) % totalItems;
        const afterNextIndex = (activeIndex + 2) % totalItems;

        if (index === activeIndex) {
            return {
                transform: `translateX(0) scale(1)`,
                opacity: 1,
                zIndex: 5,
            };
        } else if (index === previousIndex) {
            return {
                transform: `translateX(-33%) scale(0.7)`,
                zIndex: 4,
                filter: 'blur(5px)'
            };
        } else if (index === nextIndex) {
            return {
                transform: `translateX(33%) scale(0.7)`,
                zIndex: 4,
                filter: 'blur(5px)'
            };
        } else if (index === beforePreviousIndex) {
            return {
                transform: `translateX(-58%) scale(0.4) translateY(-45%)`,
                zIndex: 3,
                filter: 'blur(5px)'
            };
        } else if (index === afterNextIndex) {
            return {
                transform: `translateX(58%) scale(0.4) translateY(-45%)`,
                zIndex: 3,
                filter: 'blur(5px)'
            };
        } else {
            return {
                transform: `scale(0.5)`,
                opacity: 0,
                zIndex: 1,
                visibility: 'hidden',
            };
        }
    };

    return (
        <div className="carouselcontainer2">
            <div className="container">
                <div className="cardscon2">
                    <button className="nav-button prev-button" onClick={handlePrev}>
                        <img src={nextLeft} alt="Previous" />
                    </button>
                    <button className="nav-button next-button" onClick={handleNext}>
                        <img src={nextRight} alt="Next" />
                    </button>
                    {carousel.map((product, index) => (
                        <div
                            key={index}
                            className={`prodcard2 ${activeIndex === index ? 'active' : ''}`}
                            style={getTransformStyles(index)}
                        >
                            <img 
                                className="eventpic2" 
                                src={`http://localhost:8000/storage/${product.image}`} 
                                alt={product.alt} 
                            />
                        </div>
                    ))}
                </div>
                <div className="radio-buttons">
                    {carousel.map((_, index) => (
                        <input
                            key={index}
                            className="rdbtn2"
                            type="radio"
                            name="slider"
                            id={`itemm-${index + 1}`}
                            checked={activeIndex === index}
                            onChange={() => handleRadioChange(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Aboutuscarousel;