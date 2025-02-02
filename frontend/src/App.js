import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Marketplace from "./Pages/Marketplace";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Marketplace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}






