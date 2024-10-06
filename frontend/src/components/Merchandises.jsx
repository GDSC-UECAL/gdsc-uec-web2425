import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../components/Merchandises.css';
import FRONT1 from '../assets/products/FRONT1.jpg';
import { Container, Row, Col } from 'react-bootstrap'; 


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
    <Container fluid className="merchContainer">
      <Row className="teamsRow d-flex justify-content-center mx-3 mt-3"> 
        <Col lg={3} sm={6} className="">
          <Card
            image={FRONT1}
            title="GDSC UEC T-Shirt"
            text="A black t-shirt with a minimal printed GDSC logo"
            buttonText="Order"
            link="#"
          />
        </Col>
        <Col lg={3} sm={6} className="">
          <Card
            image={FRONT1}
            title="GDSC UEC T-Shirt"
            text="A black t-shirt with a minimal printed GDSC logo"
            buttonText="Order"
            link="#"
          />
        </Col>
        <Col lg={3} sm={6} className="">
          <Card
            image={FRONT1}
            title="GDSC UEC T-Shirt"
            text="A black t-shirt with a minimal printed GDSC logo"
            buttonText="Order"
            link="#"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Merchandises;
