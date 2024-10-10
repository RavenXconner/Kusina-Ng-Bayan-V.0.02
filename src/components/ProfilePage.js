import React, { useState, useEffect } from "react";
import { auth, database } from "./firebase/firebase";
import { ref, onValue } from "firebase/database";
import { signOut } from "firebase/auth"; // Import signOut for logging out
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import Navbar from "./Navbar";
import Footer from "./FooterPage";
import "./css/ProfilePage.css"; // Create a new CSS file similar to Signup.css for styling

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isLoggedOut, setIsLoggedOut] = useState(false); // New state for tracking logout
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchData = async () => {
      const user = auth.currentUser;

      if (user) {
        const userRef = ref(database, "users/" + user.uid);
        onValue(userRef, (snapshot) => {
          const data = snapshot.val();
          setUserData(data);
          setLoading(false);
        });
      }
    };

    fetchData();
  }, []);

  const handleLogout = async () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?"); // Confirmation dialog
    if (confirmLogout) {
      try {
        await signOut(auth); // Sign out from Firebase
        setUserData(null); // Clear user data
        setIsLoggedOut(true); // Set logged out state to true
        setLoading(false); // Stop loading state
      } catch (error) {
        console.error("Error logging out:", error);
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (isLoggedOut) {
    return (
      <div className="new-container bg-white p-0">
        <Navbar loggedIn={false} /> {/* Pass false to indicate user is logged out */}
        <div className="new-container py-5 d-flex justify-content-center align-items-center">
          <div className="new-container text-center">
            <h5 className="new-section-title ff-secondary new-text-primary fw-normal">Logged Out</h5>
            <h1 className="new-title">You have been logged out successfully.</h1>
            <button className="new-btn w-100 py-3" onClick={() => navigate("/")}>
              Back to Home
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="new-container bg-white p-0">
      <Navbar loggedIn={true} /> {/* Pass true to indicate user is logged in */}
      <div className="new-container py-5 d-flex justify-content-center align-items-center">
        <div className="new-container text-center">
          <div className="new-text-center">
            <h5 className="new-section-title ff-secondary new-text-primary fw-normal">Welcome</h5>
            <h1 className="new-title">Your Profile</h1>
          </div>
          <div className="new-row justify-content-center">
            <div className="new-col-md-6">
              <div className="profile-card">
                <h2 className="profile-name">
                  Name: {userData.firstName} {userData.lastName}
                </h2>
                <p className="profile-email">Email: {userData.email}</p>
                <p className="profile-date">
                  Date Joined: {new Date(userData.dateJoined).toLocaleDateString()}
                </p>
                <button className="new-btn w-100 py-3" onClick={handleLogout}>Logout</button> {/* Logout button */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
