import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../components/Merchandises.css';
import FRONT1 from '../assets/products/FRONT1.jpg';
import bell from '../assets/products/bell.png';
import ball1right from '../assets/products/ball1right.png';
import ball1left from '../assets/products/ball1left.png';
import square1 from '../assets/products/square1.png';
import line from '../assets/products/line.png';
import redHead from '../assets/products/redHead.png';
import leftArrow from '../assets/products/leftArrow.png';
import nextLeft from '../assets/products/nextLeft.png'
import nextRight from '../assets/products/nextRight.png'
import bigBall from '../assets/products/bigBall.png'


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
        <a href={link} className="btn button1" style={{ marginTop: '-5px' }}>
          {buttonText}
        </a>
      </div>
    </div>
  );
}

function Merchandises() {
  return (
    <>
      {/* Images */}
      <img src={bell} alt="" className="bell elements"/>
      <img src={bigBall} alt="" className="bigBall elements1"/>
      <img src={ball1left} alt="" className="ball1left elements1"/>
      <img src={square1} alt="" className="square1 elements"/>
      <img src={line} alt="" className="line elements2"/>
      <img src={redHead} alt="" className="redHead elements2"/>
      <img src={leftArrow} alt="" className="leftArrow elements2"/>

      {/* Main Content */}
      <div className="container mt-4 no-margin-padding marginBottomCard " style={{marginBottom:'100px'}}>
      <img src={nextLeft} alt="" className="nextLeft"/>
      <img src={nextRight} alt="" className="nextRight"/>
        <div className="row g-5">
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
    </>
  );
}


export default Merchandises;
