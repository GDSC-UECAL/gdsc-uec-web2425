import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../components/Merchandises.css';
import FRONT1 from '../assets/products/FRONT1.jpg';

// Card Component
function Card({ image, title, text, buttonText, link }) {
  return (
    <div className="card custom-card no-margin-padding">
      <img
        src={image}
        className="card-img-top"
        alt="Card"
      />
      <div className="card-body text-start">
        <h5 className="card-title" style={{ marginTop: '-5px' }}>{title}</h5>
        <p className="card-text" style={{ marginTop: '-5px' }}>{text}</p>
        <a href={link} className="btn btn-primary button1" style={{ marginTop: '-5px' }}>
          {buttonText}
        </a>
      </div>
    </div>
  );
}

function Merchandises() {
  return (
    <div className="container mt-4 no-margin-padding merchContainer">
      <div className="row g-5"> {/* Add gap here */}
        <div className="col-lg-4 col-md-4 col-sm-6"> {/* Responsive columns */}
          <Card
            image={FRONT1}
            title="GDSC UEC T-Shirt"
            text="A black t-shirt with a minimal printed GDSC logo"
            buttonText="Order"
            link="#"
          />
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6">
          <Card
            image={FRONT1}
            title="GDSC UEC T-Shirt"
            text="A black t-shirt with a minimal printed GDSC logo"
            buttonText="Order"
            link="#"
          />
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6">
          <Card
            image={FRONT1}
            title="GDSC UEC T-Shirt"
            text="A black t-shirt with a minimal printed GDSC logo"
            buttonText="Order"
            link="#"
          />
        </div>
      </div>
    </div>
  );
}

export default Merchandises;
