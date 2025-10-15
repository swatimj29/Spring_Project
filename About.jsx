import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react'

function About() {
  return (
    <div className="container mt-5">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Book Title</h5>
          <h6 className="card-subtitle mb-2 text-muted">Author Name</h6>
          <p className="card-text">Price: $29.99</p>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default About;
