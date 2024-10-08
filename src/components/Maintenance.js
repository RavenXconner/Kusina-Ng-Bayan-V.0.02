// src/UnderMaintenance.js

import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./css/Maintenance.css"; // Update the CSS import to match the new filename
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesome
import { faTimes } from "@fortawesome/free-solid-svg-icons"; // Import the X icon

const UnderMaintenance = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleClose = () => {
    navigate(-1); // Navigate back to the last page
  };

  return (
    <div className="under-maintenance-container">
      <button className="close-button" onClick={handleClose} aria-label="Close">
        <FontAwesomeIcon icon={faTimes} size="2x" />
      </button>
      <h1 className="maintenance-title">Under Maintenance</h1>
      <p className="maintenance-message">
        We're currently performing maintenance. Please check back later.
      </p>
    </div>
  );
};

export default UnderMaintenance;
