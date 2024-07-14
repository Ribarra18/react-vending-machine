import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Chips from "./Chips";
import Soda from "./Soda";
import Candy from "./Candy";
import "./App.css"; // Ensure this import is present

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/chips" element={<Chips />} />
          <Route path="/soda" element={<Soda />} />
          <Route path="/candy" element={<Candy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
