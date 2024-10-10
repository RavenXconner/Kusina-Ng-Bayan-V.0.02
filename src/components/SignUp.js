// src/components/SignUp.js
import React, { useState } from 'react';
import { auth } from './firebaseConfig'; // Adjust path if necessary
import { createUserWithEmailAndPassword } from 'firebase/auth';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./FooterPage";

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(''); // Clear any previous errors
    setSuccessMessage(''); // Clear any previous success messages

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccessMessage("Account created successfully! You can now log in.");
      setEmail(''); // Clear email input after successful signup
      setPassword(''); // Clear password input after successful signup
    } catch (error) {
      setError(error.message); // Set error message if sign-up fails
    }
  };

  return (
    <div className="new-container bg-white p-0">
      <Navbar />
      <div className="new-container py-5 d-flex justify-content-center align-items-center">
        <div className="new-container text-center">
          <h1 className="new-title">Create Your Account</h1>
          <form onSubmit={handleSignup}>
            <input
              type="email"
              className="new-input w-100 mb-3"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              className="new-input w-100 mb-3"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className="new-btn w-100 py-3" type="submit">
              Sign Up
            </button>
            {error && <p className="text-danger mt-3">{error}</p>}
            {successMessage && <p className="text-success mt-3">{successMessage}</p>}
          </form>
          <p className="mt-3">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignupPage;
