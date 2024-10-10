import React from "react";
import Navbar from "./Navbar"; // Adjust the path based on your folder structure
import Footer from "./FooterPage"; // Adjust the path based on your folder structure
import "./css/EmptyUser.css"; // Create a new CSS file for styling

const UserCredentialsPage = () => {
  return (
    <div className="new-container bg-white p-0">
      <Navbar loggedIn={false} /> {/* Pass false to indicate user is logged out */}
      <div className="new-container py-5 d-flex justify-content-center align-items-center">
        <div className="new-container text-center">
          <div className="new-text-center">
            <h5 className="new-section-title ff-secondary new-text-primary fw-normal">User Credentials</h5>
            <h1 className="new-title">Your Credentials</h1>
          </div>
          <div className="new-row justify-content-center">
            <div className="new-col-md-6">
              <div className="profile-card">
                <h2 className="profile-name">Name: [First Name] [Last Name]</h2>
                <p className="profile-email">Email: [Email]</p>
                <p className="profile-date">Date Joined: [Date]</p>
                <button className="new-btn w-100 py-3" onClick={() => alert('Logout functionality not implemented')}>Logout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserCredentialsPage;
