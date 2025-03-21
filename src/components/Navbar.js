import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">EduGenius</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/tutor">AI Tutor</Link></li>
        <li><Link to="/quizzes">Quizzes</Link></li>
        <li><Link to="/essay-grader">Essay Grader</Link></li>
        <li><Link to="/career">Career</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
