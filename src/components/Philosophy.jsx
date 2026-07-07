import React from 'react';
import './Philosophy.css';

function Philosophy() {
  const manifesto = [
    "We believe in global networks.",
    "We believe in leaders creating leaders.",
    "We don't sell products and services, we create experiences.",
    "Timing is everything."
  ];

  return (
    <section id="filosofia" className="section philosophy-section section-dark">
      <div className="container">
        <h2 className="section-title">Nuestra Filosofía</h2>
        
        <div className="manifesto-list">
          {manifesto.map((phrase, index) => (
            <div key={index} className="manifesto-item">
              <span className="manifesto-bullet"></span>
              <h3 className="manifesto-text">{phrase}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Philosophy;
