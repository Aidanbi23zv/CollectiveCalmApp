import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import "./app.css";


function App() {
  return (
    <div>
        <div class="header">
            <div id="links">
                <p>Log an entry</p>
                <p>View history</p>
                <p>View disorders</p>
            </div>
            <button class="hb">
                <i class="fa fa-bars fa-4x"></i>
            </button>
                <h1>Supportive Solutions</h1>
        </div>
          <nav>
              <Link to="/">Home</Link> | <Link to="/about">About</Link>
          </nav>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
          </Routes>
          <p id="urgent">URGENT HELP!</p>
      </div>
  );
}

export default App;