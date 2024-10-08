import React from 'react';
import ProductsCarousel from '../components/ProductsCarousel.jsx';
import "../components/ProductsCarousel.css"
import Merchandises from '../components/Merchandises.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import "../pages/Products.css"



function Products() {
    return (
        <>
            <div className="prodcontainer">
            <h1 style={{ marginTop: '170px', marginBottom:'-70px', fontSize: '100px'}}>Projects</h1>
            <ProductsCarousel />
            <h1 style={{ marginTop: '210px', marginBottom:'50px', fontSize: '100px' }}>Merchandises</h1>
            <Merchandises/>
            </div>
        </>
    );
};

export default Products;