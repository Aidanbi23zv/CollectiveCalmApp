import React from "react";
import "./home.css";

function Home() {
    return (
      <div className="home_container">
        <div className="login">
            <h2>LOGIN</h2>
        </div>
        <div className="content">
        <div className="logo">
          <img src="/logo_ph.jpg" alt="logo" />
        </div>
        <div className="info">
          <p>Mental health is often overlooked in the modern day but we are very likely to know someone with a mental health issue, whether it's visible or not. We aim to mold a world that is happier and healthier. 
            Tagline: Making life easier for everyone. Together. </p>
        </div>
        </div>
      </div>
    );
  }

export default Home;