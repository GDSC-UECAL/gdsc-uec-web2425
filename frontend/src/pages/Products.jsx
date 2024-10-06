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
                <h1>Merchandises</h1>
                <Merchandises></Merchandises>
                <h1>Products</h1>
                <ProductsCarousel />
            </div>



        </>
    );
};

export default Products;