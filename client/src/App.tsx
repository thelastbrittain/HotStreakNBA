import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HotStreakInfo from "./components/HotStreakInfo";

const About: React.FC = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px", color: "white" }}>
      <h1>About Hot Streak NBA</h1>
      <p>
        Welcome to Hot Streak NBA! This website showcases the hottest teams and
        players in the league based on their recent performances.
      </p>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div
        style={{ backgroundColor: "black", minHeight: "100vh", color: "white" }}
      >
        <NavBar />
        <Routes>
          <Route path="/" element={<HotStreakInfo />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
