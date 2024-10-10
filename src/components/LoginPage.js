import React, { useState } from "react";
import { supabase } from "../supabaseClient";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Login.css"; 
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar"; 
import Footer from "./FooterPage";
import { Modal } from "react-bootstrap"; // Importing Bootstrap Modal

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage(null);
    setLoading(true); // Set loading to true

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false); // Set loading to false after response

    if (error) {
      setErrorMessage(error.message);
    } else {
      setShowSuccessModal(true); // Show success modal
      setTimeout(() => {
        setShowSuccessModal(false);
        navigate("/"); // Navigate to the home page after delay
      }, 2000); // 2 seconds delay before navigating
    }
  };

  return (
    <div className="new-container bg-white p-0">
      <Navbar />
      <div className="new-container py-5 d-flex justify-content-center align-items-center">
        <div className="new-container text-center">
          <div className="new-text-center">
            <h5 className="new-section-title ff-secondary new-text-primary fw-normal">Login</h5>
            <h1 className="new-title">Sign In To Your Account</h1>
          </div>
          <div className="new-row justify-content-center">
            <div className="new-col-md-6">
              <form onSubmit={handleLogin}>
                <div className="new-row">
                  <div className="new-col-12">
                    <input
                      type="email"
                      className="new-input w-100"
                      placeholder="Your Email"
                      name="email"
                      value={email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="new-col-12">
                    <input
                      type="password"
                      className="new-input w-100"
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="new-col-12">
                    <button className="new-btn w-100 py-3" type="submit" disabled={loading}>
                      {loading ? (
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                      ) : (
                        "Login"
                      )}
                    </button>
                  </div>
                  {errorMessage && <div className="new-col-12"><p className="text-danger">{errorMessage}</p></div>}
                  <div className="new-col-12">
                    <p className="mt-3">
                      Forgot your password? <Link to="/forgot-password">Reset here</Link>
                    </p>
                    <p>
                      Don't have an account? <Link to="/signup">Sign Up</Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Success!</Modal.Title>
        </Modal.Header>
        <Modal.Body>You have logged in successfully!</Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={() => setShowSuccessModal(false)}>
            Close
          </button>
        </Modal.Footer>
      </Modal>

      <Footer />
    </div>
  );
};

export default LoginPage;
