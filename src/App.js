import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Tutor from "./pages/Tutor";
import Quizzes from "./pages/Quizzes";
import EssayGrader from "./pages/EssayGrader";
import Career from "./pages/Career";
import Navbar from "./components/Navbar";
import "./styles/global.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tutor" element={<Tutor />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/essay-grader" element={<EssayGrader />} />
        <Route path="/career" element={<Career />} />
      </Routes>
    </Router>
  );
}

export default App;
