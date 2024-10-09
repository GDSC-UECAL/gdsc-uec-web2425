import React, { useEffect, useState } from 'react';
import '../components/Aboutuscarousel.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import pic1 from '../assets/teams/exec.webp'
import pic2 from '../assets/teams/creatives.webp'
import pic3 from '../assets/teams/operations.webp'
import pic4 from '../assets/teams/technology.webp'
import nextLeft from '../assets/products/nextLeft.png';
import nextRight from '../assets/products/nextRight.png';

function Aboutuscarousel() {

    const [activeIndex, setActiveIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false); // New state for transition

    const [carousel, setCarousel] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/api/v1/carousel')
        .then(response => response.json())
        .then(data => {
            setCarousel(data.data);
        })
        .catch(error => console.error('Error fetching events:', error));
    }, []);


    // Handle next button click (move to the next card)
    const handleNext = () => {
    if (isTransitioning) return; // Prevent action if currently transitioning
    setIsTransitioning(true);
    setActiveIndex((prevIndex) => (prevIndex + 1) % carousel.length);
    
    setTimeout(() => {
      setIsTransitioning(false); // Reset transition state after delay
    }, 400); // Delay in milliseconds
  };

  const handlePrev = () => {
    if (isTransitioning) return; // Prevent action if currently transitioning
    setIsTransitioning(true);
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? carousel.length - 1 : prevIndex - 1
    );

    setTimeout(() => {
      setIsTransitioning(false); // Reset transition state after delay
    }, 400); // Delay in milliseconds
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
        <>
            <div className="carouselcontainer2">
                <div className="container">
                    {/* Radio Buttons for direct selection */}
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
                    <div className="cardscon2">
                        {/* Left and Right Buttons for navigation */}
                        <img
                            src={nextLeft}
                            alt="Previous"
                            className="nextLeftCar2"
                            onClick={handlePrev}
                            style={{ cursor: 'pointer' }}
                        />
                        <img
                            src={nextRight}
                            alt="Next"
                            className="nextRightCar2"
                            onClick={handleNext}
                            style={{ cursor: 'pointer' }}
                        />
                        {/* Product Cards */}
                        {carousel.map((product, index) => {
                            const isActive = activeIndex === index;

                            return (
                                <label
                                    key={index}
                                    className="prodcard2"
                                    htmlFor={`itemm-${index + 1}`}
                                    id={`song-${index + 1}`}
                                    style={getTransformStyles(index)}
                                >
                                    
                                    {isActive ? (
                                        <img className="eventpic2" src={`http://localhost:8000/storage/${product.image}`} alt={product.alt} />
                                    ) : (
                                        <>
                                        <img className="eventpic2" src={`http://localhost:8000/storage/${product.image}`} alt={product.alt} />
                                        </>
                                    )}
                                </label>
                            );
                        })}

                    </div>
                </div>
            </div>
        </>
    );
}

export default Aboutuscarousel;
