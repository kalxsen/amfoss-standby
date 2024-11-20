import React from 'react';
import './hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Flaunt</h1>
        <p>Your fashion destination!</p>
      </div>
      <div className="hero-image">
        <img src="bold_lady_2-removebg-preview.png" alt="Fashion" />
      </div>
    </section>
  );
}

export default Hero;