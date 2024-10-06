import React, { useEffect, useState } from 'react';
import laptopic from '../assets/products/laptopic.png';
import '../components/ProductsCarousel.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

function ProductsCarousel() {
  const [products, setProducts] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchedProducts = [
      { id: 1, image: laptopic, alt: 'laptop' },
      { id: 2, image: laptopic, alt: 'laptop' },
      { id: 3, image: laptopic, alt: 'laptop' },
      { id: 4, image: laptopic, alt: 'laptop' },
      { id: 5, image: laptopic, alt: 'laptop' },
      { id: 6, image: laptopic, alt: 'laptop' },
      { id: 7, image: laptopic, alt: 'laptop' },
      { id: 8, image: laptopic, alt: 'laptop' },
    ];
    setProducts(fetchedProducts);
  }, []);

  const handleRadioChange = (index) => {
    setActiveIndex(index);
  };

  const getTransformStyles = (index) => {
    const totalItems = products.length;
    const previousIndex = (activeIndex - 1 + totalItems) % totalItems; // Previous item
    const nextIndex = (activeIndex + 1) % totalItems; // Next item

    if (index === activeIndex) {
      return {
        transform: `translateX(0) scale(1)`,
        opacity: 1,
        zIndex: 3,
      };
    } else if (index === previousIndex) {
      return {
        transform: `translateX(-40%) scale(0.8)`,
        opacity: 0.6,
        zIndex: 2,
      };
    } else if (index === nextIndex) {
      return {
        transform: `translateX(40%) scale(0.8)`,
        opacity: 0.6,
        zIndex: 2,
      };
    } else {
      return {
        transform: `translateX(0) scale(0.6)`,
        opacity: 0,
        zIndex: 1,
        visibility: 'hidden',
      };
    }
  };

  return (
    <div className="carouselcontainer">
      <div className="container">
        {products.map((_, index) => (
          <input
            key={index}
            className="rdbtn"
            type="radio"
            name="slider"
            id={`itemm-${index + 1}`}
            checked={activeIndex === index}
            onChange={() => handleRadioChange(index)}
          />
        ))}

        <div className="cards">
          {products.map((product, index) => (
            <label
              key={index}
              className="prodcard"
              htmlFor={`itemm-${index + 1}`}
              id={`song-${index + 1}`}
              style={getTransformStyles(index)}
            >
              <img className="eventpic" src={product.image} alt={product.alt} />
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsCarousel;
