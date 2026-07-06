import React from 'react';
import './Leadership.css';
import dyrseImage from '../assets/dyrse.webp';

const Leadership = () => {
  return (
    <section id="acerca-de" className="section leadership-section">
      <div className="container">
        <div className="leadership-content">
          <div className="leadership-image-wrapper">
            <div className="image-frame"></div>
            <img src={dyrseImage} alt="Dyrse Charaf" className="leadership-image" />
          </div>
          
          <div className="leadership-text-wrapper">
            <h2 className="leadership-name">DYRSE CHARAF</h2>
            <h3 className="leadership-role">Experta en desarrollo personal, profesional y liderazgo.</h3>
            
            <div className="leadership-quote-box">
              <span className="quote-mark">«</span>
              <p className="leadership-quote">
                La vida es un juego de percepción, sueño y pasión; para ganar hay que aprender a jugar.
              </p>
              <span className="quote-mark right">»</span>
            </div>
            
            <div className="leadership-decorative-line"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
