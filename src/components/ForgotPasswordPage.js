import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/ForgotPassword.css'; // Custom styles
import { Link } from 'react-router-dom';
import Navbar from './Navbar'; // Import the Navbar component
import Footer from './footer';

const ForgotPasswordPage = () => {
  return (
    <div className="new-container bg-white p-0">
      {/* Navbar Component */}
      <Navbar />

      {/* Forgot Password Form Section */}
      <div className="new-container py-5 d-flex justify-content-center align-items-center">
        <div className="new-container text-center">
          <div className="new-text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 className="new-section-title ff-secondary new-text-primary fw-normal">Forgot Password</h5>
            <h1 className="new-title">Reset Your Password</h1>
          </div>
          <div className="new-row justify-content-center">
            <div className="new-col-md-6">
              <div className="wow fadeInUp" data-wow-delay="0.2s">
                <form>
                  <div className="new-row">
                    <div className="new-col-12">
                      <input type="email" className="new-input w-100" placeholder="Your Email" required />
                    </div>
                    <div className="new-col-12">
                      <button className="new-btn w-100 py-3" type="submit">Send Reset Link</button>
                    </div>
                    <div className="new-col-12">
                      <p className="mt-3">
                        Remember your password? <Link to="/login">Login</Link>
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
      <a href="#" className="new-back-to-top btn-lg btn-primary btn-lg-square">
        <i className="bi bi-arrow-up"></i>
      </a>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default ForgotPasswordPage;
