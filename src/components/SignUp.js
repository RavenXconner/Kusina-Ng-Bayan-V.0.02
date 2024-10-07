import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure you include Bootstrap
import './css/signup.css'; // Import your custom CSS file
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import Navbar from './Navbar'; // Import the Navbar component
import Footer from './footer'; // Import the Footer component

const SignUp = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your sign-up logic here
  };

  return (
    <>
      <Navbar /> {/* Include the Navbar */}
      <div className="container">
        <div className="signup-box">
          <div className="back-button">
            <button type="button" className="btn btn-secondary" onClick={handleBack}>Back</button>
          </div>
          <h1 className="title">Create an Account</h1>
          <p className="subtitle">Join us and enjoy delicious meals!</p>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" required />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
            </div>
            <div className="input-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input type="password" id="confirm-password" name="confirm-password" required />
            </div>
            <button type="submit" className="btn btn-primary">Sign Up</button>
            <button type="button" className="btn btn-outline-secondary guest-btn">Continue as Guest</button>
          </form>
          <p className="login-link">Already have an account? <a href="/login">Log in here</a></p>
        </div>
      </div>
      <Footer /> {/* Include the Footer */}
    </>
  );
};

export default SignUp;
