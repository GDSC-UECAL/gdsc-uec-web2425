import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

// Card Component
function Card({ image, title, text, buttonText, link }) {
  return (
    <div className="card" style={{ width: '25rem' }}>
      <img
        src={image}
        className="card-img-top"
        alt="Card"
      />
      <div className="card-body text-start"> {/* Aligning content to the left */}
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href={link} className="btn btn-primary">
          {buttonText}
        </a>
      </div>
    </div>
  );
}

function Merchandises() {
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4">
            <Card
              image="https://via.placeholder.com/150"
              title="GDSC UEC T-Shirt"
              text="A black t-shirt with a minimal printed GDSC logo"
              buttonText="Order"
              link="#"
            />
          </div>
          <div className="col-md-4">
            <Card
              image="https://via.placeholder.com/150"
              title="GDSC UEC T-Shirt"
              text="A black t-shirt with a minimal printed GDSC logo"
              buttonText="Order"
              link="#"
            />
          </div>
          <div className="col-md-4">
            <Card
              image="https://via.placeholder.com/150"
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
