import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Bootstrap Demo Page</h2>

      {/* 🔹 Text Examples */}
      <h4 className="text-primary">Text Colors & Styles</h4>
      <p className="text-success fw-bold">This is green bold text</p>
      <p className="text-danger fst-italic">This is red italic text</p>
      <p className="text-muted">This is muted (gray) text</p>

      {/* 🔹 Buttons */}
      <h4 className="mt-4">Buttons</h4>
      <button className="btn btn-primary me-2">Primary</button>
      <button className="btn btn-success me-2">Success</button>
      <button className="btn btn-danger me-2">Danger</button>
      <button className="btn btn-outline-dark">Outline Dark</button>

      {/* 🔹 Table */}
      <h4 className="mt-4">Table Example</h4>
      <table className="table table-bordered table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Book Title</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>The Alchemist</td>
            <td>Paulo Coelho</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Harry Potter</td>
            <td>J.K. Rowling</td>
          </tr>
        </tbody>
      </table>

      {/* 🔹 Form */}
      <h4 className="mt-4">Form Example</h4>
      <form>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter your password"
          />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="check1" />
          <label className="form-check-label" htmlFor="check1">
            Remember me
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      {/* 🔹 Card */}
      <h4 className="mt-4">Card Example</h4>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Book of the Day</h5>
          <p className="card-text">
            "The Alchemist" by Paulo Coelho is an inspiring novel about
            following your dreams.
          </p>
          <a href="#" className="btn btn-success">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
