// src/TeamPage.js
import React from 'react';
import { Link } from 'react-router-dom'; // Add this line
import Footer from './footer'; // Adjust the path as necessary
import teamMember1 from './img/Profiles//323878374_390432236639156_3011448574571720372_n.jpg';
import teamMember2 from './img/Profiles/IMG_0606-removebg-preview.png';
import teamMember3 from './img/Profiles/p1.JPG';
import teamMember4 from './img/Profiles/Patac-removebg-preview.png';
// Import additional team members as needed

const TeamPage = () => {
  return (
    <div>
      {/* Navbar Start */}
      <div className="container-xxl position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
          <a href="/" className="navbar-brand p-0">
            <h1 className="text-primary m-0">
              <i className="fa fa-utensils me-3"></i>Kusina Ng Bayan
            </h1>
          </a>
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
            <Link to="/" className="nav-item nav-link">Home</Link>
              <Link to="/about" className="nav-item nav-link active">About</Link>
              <Link to="/menu" className="nav-item nav-link">Menu</Link>
              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle active" data-bs-toggle="dropdown">Pages</a>
                <div className="dropdown-menu m-0">
                  <a href="booking.html" className="dropdown-item">Booking</a>
                  <a href="team.html" className="dropdown-item active">Our Team</a>
                  <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                </div>
              </div>
              <a href="contact.html" className="nav-item nav-link">Contact</a>
            </div>
            <a href="" className="btn btn-primary py-2 px-4">Sign up</a>
          </div>
        </nav>
      </div>
      {/* Navbar End */}

      {/* Hero Start */}
      <div className="container-xxl py-5 bg-dark hero-header mb-5">
        <div className="container text-center my-5 pt-5 pb-4">
          <h1 className="display-3 text-white mb-3 animated slideInDown">Our Team</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center text-uppercase">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item text-white active" aria-current="page">Team</li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Hero End */}

      {/* Team Start */}
      <div className="container-xxl pt-5 pb-3">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 className="section-title ff-secondary text-center text-primary fw-normal">Team Members</h5>
            <h1 className="mb-5">Our Developers</h1>
          </div>
          <div className="row g-4">
            {/* Team Member 1 */}
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="team-item text-center rounded overflow-hidden">
                <div className="rounded-circle overflow-hidden m-4">
                  <img className="img-fluid" src={teamMember1} alt="Team Member 1" />
                </div>
                <h5 className="mb-0">Full Name</h5>
                <small>Designation</small>
                <div className="d-flex justify-content-center mt-3">
                  <a className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                  <a className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-twitter"></i></a>
                  <a className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
            {/* Team Member 2 */}
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="team-item text-center rounded overflow-hidden">
                <div className="rounded-circle overflow-hidden m-4">
                  <img className="img-fluid" src={teamMember2} alt="Team Member 2" />
                </div>
                <h5 className="mb-0">Full Name</h5>
                <small>Designation</small>
                <div className="d-flex justify-content-center mt-3">
                  <a className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                  <a className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-twitter"></i></a>
                  <a className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
            {/* Team Member 3 */}
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="team-item text-center rounded overflow-hidden">
                <div className="rounded-circle overflow-hidden m-4">
                  <img className="img-fluid" src={teamMember3} alt="Team Member 3" />
                </div>
                <h5 className="mb-0">Full Name</h5>
                <small>Designation</small>
                <div className="d-flex justify-content-center mt-3">
                  <a className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                  <a className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-twitter"></i></a>
                  <a className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
            {/* Team Member 4 */}
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="team-item text-center rounded overflow-hidden">
                <div className="rounded-circle overflow-hidden m-4">
                  <img className="img-fluid" src={teamMember4} alt="Team Member 4" />
                </div>
                <h5 className="mb-0">Full Name</h5>
                <small>Designation</small>
                <div className="d-flex justify-content-center mt-3">
                  <a className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                  <a className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-twitter"></i></a>
                  <a className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
            {/* Add more team members as needed */}
          </div>
        </div>
      </div>
      {/* Team End */}

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default TeamPage;
