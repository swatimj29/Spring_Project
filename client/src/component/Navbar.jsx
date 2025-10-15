import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // External CSS for styling

const Navbar = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <div className="navbar">
        <Link to="/">Home</Link>
        <a href="/about#">About</a>
        <Link to="/bookdetails">Book Details</Link>
        <Link to="/contact">Contact Us</Link>
      </div>     
    </div>
  );
};

export default Navbar;
