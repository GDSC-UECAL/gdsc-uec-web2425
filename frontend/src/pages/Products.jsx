import React from 'react';
import ProductsCarousel from '../components/ProductsCarousel.jsx';
import "../components/ProductsCarousel.css"
import Merchandises from '../components/Merchandises.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported



function Products() {
    return(
        <>
            <h1>Merchandises</h1>
            <Merchandises></Merchandises>
            <h1>Products</h1>
            <ProductsCarousel/>
            
            
            
            
        </>
    );
};

export default Products;