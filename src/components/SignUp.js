import React, { useState } from "react";
import { supabase } from "../supabaseClient"; // Import the Supabase client
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Signup.css"; // Custom styles
import { Link } from "react-router-dom";
import Navbar from "./Navbar"; // Import the Navbar component
import Footer from "./FooterPage";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setErrorMessage(null);

    const { email, password } = formData;

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setErrorMessage(error.message);
    } else {
      setSuccessMessage("Account created successfully. Please check your email.");
    }
  };

  return (
    <div className="new-container bg-white p-0">
      <Navbar />
      <div className="new-container py-5 d-flex justify-content-center align-items-center">
        <div className="new-container text-center">
          <div className="new-text-center">
            <h5 className="new-section-title ff-secondary new-text-primary fw-normal">Join Us</h5>
            <h1 className="new-title">Create Your Account</h1>
          </div>
          <div className="new-row justify-content-center">
            <div className="new-col-md-6">
              <form onSubmit={handleSignUp}>
                <div className="new-row">
                  <div className="new-col-6">
                    <input
                      type="text"
                      className="new-input w-100"
                      placeholder="First Name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="new-col-6">
                    <input
                      type="text"
                      className="new-input w-100"
                      placeholder="Last Name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="new-col-12">
                    <input
                      type="email"
                      className="new-input w-100"
                      placeholder="Your Email"
                      name="email"
                      value={formData.email}
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
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="new-col-12">
                    <button className="new-btn w-100 py-3" type="submit">Sign Up</button>
                  </div>
                  {errorMessage && <div className="new-col-12"><p className="text-danger">{errorMessage}</p></div>}
                  {successMessage && <div className="new-col-12"><p className="text-success">{successMessage}</p></div>}
                  <div className="new-col-12">
                    <p className="mt-3">Already have an account? <Link to="/login">Login</Link></p>
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

export default SignupPage;
