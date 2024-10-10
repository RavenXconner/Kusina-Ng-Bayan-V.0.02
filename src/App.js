import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/AboutSection";
import MenuPage from "./components/Menu"; // Adjust the path accordingly
import TeamPage from "./components/OurTeam";
import ContactPage from "./components/Contact"; // Import ContactPage component
import SignupPage from "./components/SignUp"; // Import SignupPage component
import LoginPage from "./components/LoginPage"; // Import LoginPage component
import ForgotPasswordPage from "./components/ForgotPasswordPage"; // Import ForgotPasswordPage component
import UnderMaintenance from "./components/Maintenance"; // Updated import
import ProfilePage from "./components/ProfilePage"; // Import ProfilePage component
import EmptyUserPage from "./components/EmptyUser"; // Import the new UserCredentialsPage

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/maintenance" element={<UnderMaintenance />} />
          <Route path="/profile" element={<ProfilePage />} /> {/* New route for ProfilePage */}
          <Route path="/empty-user" element={<EmptyUserPage />} /> {/* New route for UserCredentialsPage */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
