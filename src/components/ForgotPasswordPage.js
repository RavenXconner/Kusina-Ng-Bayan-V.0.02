import React, { useState } from "react";
import { supabase } from "../supabaseClient";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/ForgotPassword.css"; 
import { Link } from "react-router-dom";
import Navbar from "./Navbar"; 
import Footer from "./FooterPage";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    const { error } = await supabase.auth.resetPasswordForEmail(email);

    if (error) {
      setErrorMessage(error.message);
    } else {
      setSuccessMessage("Password reset link sent! Please check your email.");
    }
  };

  return (
    <div className="new-container bg-white p-0">
      <Navbar />
      <div className="new-container py-5 d-flex justify-content-center align-items-center">
        <div className="new-container text-center">
          <div className="new-text-center">
            <h5 className="new-section-title ff-secondary new-text-primary fw-normal">Forgot Password</h5>
            <h1 className="new-title">Reset Your Password</h1>
          </div>
          <div className="new-row justify-content-center">
            <div className="new-col-md-6">
              <form onSubmit={handleForgotPassword}>
                <div className="new-row">
                  <div className="new-col-12">
                    <input
                      type="email"
                      className="new-input w-100"
                      placeholder="Your Email"
                      value={email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="new-col-12">
                    <button className="new-btn w-100 py-3" type="submit">Send Reset Link</button>
                  </div>
                  {errorMessage && <div className="new-col-12"><p className="text-danger">{errorMessage}</p></div>}
                  {successMessage && <div className="new-col-12"><p className="text-success">{successMessage}</p></div>}
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
      <Footer />
    </div>
  );
};

export default ForgotPasswordPage;
