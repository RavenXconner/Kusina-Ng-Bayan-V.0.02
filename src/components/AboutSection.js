import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom"; // Add Link from react-router-dom
import Footer from "./footer"; // Adjust the path based on your folder structure

const Home = () => {
  return (
    <div className="container-xxl bg-white p-0">
      {/* Navbar & Hero Start */}
      <div className="container-xxl position-relative p-0">
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
              <Link to="/" className="nav-item nav-link">
                Home
              </Link>
              <Link to="/about" className="nav-item nav-link active">
                About
              </Link>
              <Link to="/menu" className="nav-item nav-link">
                Menu
              </Link>
              <div className="nav-item dropdown">
                <Link
                  to="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  More
                </Link>
                <div className="dropdown-menu m-0">
                  <Link to="/maintenance" className="dropdown-item">
                    Profile
                  </Link>
                  <Link to="/team" className="dropdown-item">
                    Our Team
                  </Link>
                  <Link to="/maintenance" className="dropdown-item">
                    In Progress
                  </Link>
                </div>
              </div>
              <Link to="/contact" className="nav-item nav-link">
                Contact
              </Link>
            </div>
            <Link to="/signup" className="btn btn-primary py-2 px-4">
              SignUp
            </Link>
          </div>
        </nav>

        <div className="container-xxl py-5 bg-dark hero-header mb-5">
          <div className="container text-center my-5 pt-5 pb-4">
            <h1 className="display-3 text-white mb-3 animated slideInDown">
              About Us
            </h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center text-uppercase">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li
                  className="breadcrumb-item text-white active"
                  aria-current="page"
                >
                  About
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/* Navbar & Hero End */}
      {/* About Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6 text-start">
                  <img
                    className="img-fluid rounded w-100 wow zoomIn"
                    data-wow-delay="0.1s"
                    src="img/about-1.jpg"
                    alt="About 1"
                  />
                </div>
                <div className="col-6 text-start">
                  <img
                    className="img-fluid rounded w-75 wow zoomIn"
                    data-wow-delay="0.3s"
                    src="img/about-2.jpg"
                    style={{ marginTop: "25%" }}
                    alt="About 2"
                  />
                </div>
                <div className="col-6 text-end">
                  <img
                    className="img-fluid rounded w-75 wow zoomIn"
                    data-wow-delay="0.5s"
                    src="img/about-3.jpg"
                    alt="About 3"
                  />
                </div>
                <div className="col-6 text-end">
                  <img
                    className="img-fluid rounded w-100 wow zoomIn"
                    data-wow-delay="0.7s"
                    src="img/about-4.jpg"
                    alt="About 4"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h5 className="section-title ff-secondary text-start text-primary fw-normal">
                About Us
              </h5>
              <h1 className="mb-4">
                Welcome to <i className="fa fa-utensils text-primary me-2"></i>
                Kusina Ng Bayan
              </h1>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet
                lorem sit.
              </p>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <div className="row g-4 mb-4">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                    <h1
                      className="flex-shrink-0 display-5 text-primary mb-0"
                      data-toggle="counter-up"
                    >
                      3
                    </h1>
                    <div className="ps-4">
                      <p className="mb-0">Years of</p>
                      <h6 className="text-uppercase mb-0">Experience</h6>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                    <h1
                      className="flex-shrink-0 display-5 text-primary mb-0"
                      data-toggle="counter-up"
                    >
                      50
                    </h1>
                    <div className="ps-4">
                      <p className="mb-0">Popular</p>
                      <h6 className="text-uppercase mb-0">Filipino Dish</h6>
                    </div>
                  </div>
                </div>
              </div>
              <Link to="#" className="btn btn-primary py-3 px-5 mt-2">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
      {/* Back to Top */}
      <Link
        to="#"
        className="new-back-to-top btn-lg btn-primary btn-lg-square"
        onClick={(e) => {
          e.preventDefault(); // Prevent default anchor behavior
          window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top smoothly
        }}
      >
        <i className="bi bi-arrow-up"></i>
      </Link>
      {/* Footer Component */}
      <Footer /> {/* Add Footer component here */}
    </div>
  );
};

export default Home;
