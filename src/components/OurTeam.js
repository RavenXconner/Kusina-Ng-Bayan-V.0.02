// src/TeamPage.js
import React from "react";
import { Link } from "react-router-dom"; // Add this line
import Footer from "./FooterPage"; // Adjust the path as necessary
import teamMember1 from "./img/Profiles/Villarta.png";
import teamMember2 from "./img/Profiles/Javy-Rodillon.png";
import teamMember3 from "./img/Profiles/JAMAICA PATAC.png";
import teamMember4 from "./img/Profiles/Jeason_neil_Paigna-removebg-preview.png";
import teamMember5 from "./img/Profiles/Caseres__Shun_Cyrel_-removebg-preview.png";
import teamMember6 from "./img/Profiles/CHRISTINE_SEVILLA.png";
import teamMember7 from "./img/Profiles//Gutierrez_Faith-removebg-preview.png";
import teamMember8 from "./img/Profiles/JAYRILLE TUBERA.png";
import teamMember9 from "./img/Profiles/devpic.jpg";
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
                  className="nav-link dropdown-toggle active"
                  data-bs-toggle="dropdown"
                  onClick={(e) => e.preventDefault()}
                >
                  Pages
                </Link>

                <div className="dropdown-menu m-0">
                  <Link to="/booking" className="dropdown-item">
                    in progress
                  </Link>
                  <Link to="/team" className="dropdown-item">
                    Our Team
                  </Link>
                  <Link to="/testimonial" className="dropdown-item">
                    in progress
                  </Link>
                </div>
              </div>
              <Link to="/contact" className="nav-item nav-link">
                Contact
              </Link>
            </div>
            <Link to="/signup" className="btn btn-primary py-2 px-4">
              Sign up
            </Link>
          </div>
        </nav>
      </div>
      {/* Navbar End */}

      {/* Hero Start */}
      <div className="container-xxl py-5 bg-dark hero-header mb-5">
        <div className="container text-center my-5 pt-5 pb-4">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            Our Team
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
                Team
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Hero End */}

      {/* Team Start */}
      <div className="container-xxl pt-5 pb-3">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 className="section-title ff-secondary text-center text-primary fw-normal">
              Team Members
            </h5>
            <h1 className="mb-5">Our Developers</h1>
          </div>
          <div className="row g-4">
            {/* Team Member 1 */}
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="team-item text-center rounded overflow-hidden">
                <div className="rounded-circle overflow-hidden m-4">
                  <img
                    className="img-fluid"
                    src={teamMember1}
                    alt="Team Member 1"
                  />
                </div>
                <h5 className="mb-0">ARIEL JAY LYSTER VILLARTA</h5>
                <small>PROJECT MANAGER</small>
                <div className="d-flex justify-content-center mt-3">
                  <Link className="btn btn-square btn-primary mx-1" to="#">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link className="btn btn-square btn-primary mx-1" to="#">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link className="btn btn-square btn-primary mx-1" to="#">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </div>
              </div>
            </div>
            {/* Team Member 2 */}
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="team-item text-center rounded overflow-hidden">
                <div className="rounded-circle overflow-hidden m-4">
                  <img
                    className="img-fluid"
                    src={teamMember2}
                    alt="Team Member 2"
                  />
                </div>
                <h5 className="mb-0">JAVY MALISUD RODILLON</h5>
                <small>FULL-STACK DEV</small>
                <div className="d-flex justify-content-center mt-3">
                  <Link className="btn btn-square btn-primary mx-1" to="#">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link className="btn btn-square btn-primary mx-1" to="#">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link className="btn btn-square btn-primary mx-1" to="#">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </div>
              </div>
            </div>
            {/* Team Member 3 */}
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="team-item text-center rounded overflow-hidden">
                <div className="rounded-circle overflow-hidden m-4">
                  <img
                    className="img-fluid"
                    src={teamMember3}
                    alt="Team Member 3"
                  />
                </div>
                <h5 className="mb-0">JAMAICA PATAC</h5>
                <small>FRONTEND DEV</small>
                <div className="d-flex justify-content-center mt-3">
                  <Link className="btn btn-square btn-primary mx-1" to="#">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link className="btn btn-square btn-primary mx-1" to="#">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link className="btn btn-square btn-primary mx-1" to="#">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </div>
              </div>
            </div>
            {/* Team Member 4 */}
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="team-item text-center rounded overflow-hidden">
                <div className="rounded-circle overflow-hidden m-4">
                  <img
                    className="img-fluid"
                    src={teamMember4}
                    alt="Team Member 1"
                  />
                </div>
                <h5 className="mb-0">JEASON NEIL PAIGNA</h5>
                <small>FRONTEND DEV</small>
                <div className="d-flex justify-content-center mt-3">
                  <Link className="btn btn-square btn-primary mx-1" to="#">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link className="btn btn-square btn-primary mx-1" to="#">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link className="btn btn-square btn-primary mx-1" to="#">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </div>
              </div>
            </div>
            {/* Team Member 5 */}
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="team-item text-center rounded overflow-hidden">
                <div className="rounded-circle overflow-hidden m-4">
                  <img
                    className="img-fluid"
                    src={teamMember5}
                    alt="Team Member 1"
                  />
                </div>
                <h5 className="mb-0">SHUN CYREL CASERES</h5>
                <small>FRONTEND DEV</small>
                <div className="d-flex justify-content-center mt-3">
                  <Link className="btn btn-square btn-primary mx-1" to="#">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link className="btn btn-square btn-primary mx-1" to="#">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link className="btn btn-square btn-primary mx-1" to="#">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </div>
              </div>
            </div>
            {/* Team Member 6 */}
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="team-item text-center rounded overflow-hidden">
                <div className="rounded-circle overflow-hidden m-4">
                  <img
                    className="img-fluid"
                    src={teamMember6}
                    alt="Team Member 1"
                  />
                </div>
                <h5 className="mb-0">CHRISTINE SEVILLA</h5>
                <small>UI/UX</small>
                <div className="d-flex justify-content-center mt-3">
                  <Link className="btn btn-square btn-primary mx-1" to="#">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link className="btn btn-square btn-primary mx-1" to="#">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link className="btn btn-square btn-primary mx-1" to="#">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </div>
              </div>
            </div>
            {/* Team Member 7 */}
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="team-item text-center rounded overflow-hidden">
                <div className="rounded-circle overflow-hidden m-4">
                  <img
                    className="img-fluid"
                    src={teamMember7}
                    alt="Team Member 1"
                  />
                </div>
                <h5 className="mb-0">FAITH GRACE GUTIERREZ</h5>
                <small>UI/UX</small>
                <div className="d-flex justify-content-center mt-3">
                  <Link className="btn btn-square btn-primary mx-1" to="#">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link className="btn btn-square btn-primary mx-1" to="#">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link className="btn btn-square btn-primary mx-1" to="#">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </div>
              </div>
            </div>
            {/* Team Member 8 */}
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="team-item text-center rounded overflow-hidden">
                <div className="rounded-circle overflow-hidden m-4">
                  <img
                    className="img-fluid"
                    src={teamMember8}
                    alt="Team Member 1"
                  />
                </div>
                <h5 className="mb-0">JAYRILLE TUBERA</h5>
                <small>UI/UX</small>
                <div className="d-flex justify-content-center mt-3">
                  <Link className="btn btn-square btn-primary mx-1" to="#">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link className="btn btn-square btn-primary mx-1" to="#">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link className="btn btn-square btn-primary mx-1" to="#">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </div>
              </div>
            </div>
            {/* Team Member 9 */}
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="team-item text-center rounded overflow-hidden">
                <div className="rounded-circle overflow-hidden m-4">
                  <img
                    className="img-fluid"
                    src={teamMember9}
                    alt="Team Member 1"
                  />
                </div>
                <h5 className="mb-0">ABBA JOY TAUTO-AN</h5>
                <small>SCRUM MASTER</small>
                <div className="d-flex justify-content-center mt-3">
                  <Link className="btn btn-square btn-primary mx-1" to="#">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link className="btn btn-square btn-primary mx-1" to="#">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link className="btn btn-square btn-primary mx-1" to="#">
                    <i className="fab fa-instagram"></i>
                  </Link>
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
    </div>
  );
};

export default TeamPage;
