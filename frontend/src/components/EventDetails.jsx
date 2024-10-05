import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './EventDetails.css';

function EventDetails() {
  return (
    <div className="container">
      {/* First Row: 4:4:4 layout */}
      <div className="row">
        <div className="col-md-4 col-lg-4 mb-4">
          <div className="custom-box p-3">
            <h5>Content 1</h5>
            <p>Details for the first box go here.</p>
          </div>
        </div>
        <div className="col-md-4 col-lg-4 mb-4">
          <div className="custom-box p-3">
            <h5>Content 2</h5>
            <p>Details for the second box go here.</p>
          </div>
        </div>
        <div className="col-md-4 col-lg-4 mb-4">
          <div className="custom-box p-3">
            <h5>Content 3</h5>
            <p>Details for the third box go here.</p>
          </div>
        </div>
      </div>

      {/* Second Row: 4:4:4 layout */}
      <div className="row">
        <div className="col-md-4 col-lg-4 mb-4">
          <div className="custom-box p-3">
            <h5>Content 4</h5>
            <p>Details for the fourth box go here.</p>
          </div>
        </div>
        <div className="col-md-4 col-lg-4 mb-4">
          <div className="custom-box p-3">
            <h5>Content 5</h5>
            <p>Details for the fifth box go here.</p>
          </div>
        </div>
        <div className="col-md-4 col-lg-4 mb-4">
          <div className="custom-box p-3">
            <h5>Content 6</h5>
            <p>Details for the sixth box go here.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
