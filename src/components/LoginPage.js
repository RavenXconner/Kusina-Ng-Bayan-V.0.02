import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Login.css"; // Custom styles
import { Link } from "react-router-dom";
import Navbar from "./Navbar"; // Import the Navbar component
import Footer from "./footer";

const LoginPage = () => {
  return (
    <div className="new-container bg-white p-0">
      {/* Navbar Component */}
      <Navbar />

      {/* Login Form Section */}
      <div className="new-container py-5 d-flex justify-content-center align-items-center">
        <div className="new-container text-center">
          <div className="new-text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 className="new-section-title ff-secondary new-text-primary fw-normal">
              Welcome Back
            </h5>
            <h1 className="new-title">Login to Your Account</h1>
          </div>
          <div className="new-row justify-content-center">
            <div className="new-col-md-6">
              <div className="wow fadeInUp" data-wow-delay="0.2s">
                <form>
                  <div className="new-row">
                    <div className="new-col-12">
                      <input
                        type="email"
                        className="new-input w-100"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                    <div className="new-col-12">
                      <input
                        type="password"
                        className="new-input w-100"
                        placeholder="Password"
                        required
                      />
                    </div>
                    <div className="new-col-12">
                      <button className="new-btn w-100 py-3" type="submit">
                        Login
                      </button>
                    </div>
                    <div className="new-col-12">
                      <p className="mt-3">
                        Don't have an account? <Link to="/signup">Sign Up</Link>
                      </p>
                    </div>
                    <div className="new-col-12">
                      <p className="new-forgot-password">
                        <Link to="/forgot-password">Forgot Password?</Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

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
      <Footer />
    </div>
  );
};

export default LoginPage;
