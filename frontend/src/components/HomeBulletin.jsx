import React, { useState, useEffect } from 'react';
import './HomeBulletin.css';
import arrow from '../assets/common/arrow.png';

const HomeBulletin = () => {
  const departments = [
    { img: 'https://via.placeholder.com/150', department: 'Executive Department', color: '#ef4234', eventName: 'FWDP | Monthly Community Day', eventDate: 'March 31, 2024' },
    { img: 'https://via.placeholder.com/150', department: 'Technology Department', color: '#f4b704', eventName: 'Level Up: Game Dev for Beginners', eventDate: 'March 31, 2024' },
    { img: 'https://via.placeholder.com/150', department: 'Operations Department', color: '#0f9d58', eventName: 'Teach Talk 1.0: A Seminar about eme eme', eventDate: 'March 31, 2024' },
    { img: 'https://via.placeholder.com/150', department: 'Creative Department', color: '#2977f6', eventName: 'Designing the Future: UI/UX Exploration with Figma', eventDate: 'March 31, 2024' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(1);
      } else if (window.innerWidth < 992) {
        setItemsToShow(2);
      } else if (window.innerWidth < 1200) {
        setItemsToShow(3);
      } else {
        setItemsToShow(4);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call once to set initial state

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? departments.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % departments.length
    );
  };

  const visibleDepartments = [...departments.slice(currentIndex), ...departments.slice(0, currentIndex)].slice(0, itemsToShow);

  return (
    <div id="customCarousel" className="carousel slide">
      <div className="carousel-inner">
        <div className="row">
          {visibleDepartments.map((dept, index) => (
            <div className="col" key={index} style={{ width: `${100 / itemsToShow}%` }}>
              <div className="card-container text-start">
                <div className="image-placeholder">
                  <img
                    src={dept.img}
                    alt={dept.department}
                    className="img-fluid rounded"
                  />
                </div>
                <div className="content-wrapper">
                  <div className="department-label" style={{ color: dept.color }}>
                    {dept.department}
                  </div>
                  <hr className="thick-hr" style={{ borderTop: `3px solid ${dept.color}` }} />
                  <div className="event-name">{dept.eventName}</div>
                  <div className="event-date">{dept.eventDate}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="carousel-control-prev" type="button" onClick={handlePrev}>
        <img src={arrow} alt="Previous" className="arrow arrow-prev" />
      </button>
      <button className="carousel-control-next" type="button" onClick={handleNext}>
        <img src={arrow} alt="Next" className="arrow arrow-next" />
      </button>
    </div>
  );
};

export default HomeBulletin;