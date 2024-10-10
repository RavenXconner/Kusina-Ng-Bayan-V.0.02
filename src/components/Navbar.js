import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

const Navbar = ({ loggedIn }) => { // Accept loggedIn prop
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
      <Link to="/" className="navbar-brand p-0">
        <h1 className="text-primary m-0">
          <i className="fa fa-utensils me-3"></i>Kusina Ng Bayan
        </h1>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="fa fa-bars"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0 pe-4">
          <Link to="/" className="nav-item nav-link active">
            Home
          </Link>
          <Link to="/about" className="nav-item nav-link">
            About
          </Link>
          <Link to="/menu" className="nav-item nav-link">
            Menu
          </Link>

          <Link to="/contact" className="nav-item nav-link">
            Contact
          </Link>
          <div className="nav-item dropdown">
            <Link
              to="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Pages
            </Link>
            <div className="dropdown-menu m-0">
              {loggedIn ? ( // Conditionally render Profile link based on loggedIn status
                <Link to="/profile" className="dropdown-item">
                  Profile
                </Link>
              ) : (
                <Link to="/login" className="dropdown-item">
                  Login
                </Link>
              )}
              <Link to="/team" className="dropdown-item">
                Our Team
              </Link>
              <Link to="/maintenance" className="dropdown-item">
                in progress
              </Link>
            </div>
          </div>
        </div>
        {!loggedIn && ( // Show Sign Up button only when logged out
          <Link to="/signup" className="btn btn-primary py-2 px-4">
            Sign up
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
