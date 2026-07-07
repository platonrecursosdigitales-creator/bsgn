import React, { useState } from 'react';
import './Metrics.css';
import heroImg from '../assets/skyscraper.png';
import AsesoriaModal from './AsesoriaModal';

function Metrics() {
  const [isAsesoriaModalOpen, setIsAsesoriaModalOpen] = useState(false);
  return (
    <section className="skyscraper-section" id="nosotros">
      <div className="container skyscraper-content">
        <h2 className="skyscraper-title">EXPERIENCIAS DE<br/>ALTO NIVEL</h2>
        <div className="skyscraper-divider"></div>
        <p className="skyscraper-description">
          Como consultoría de comunicación estratégica y empresarial, nuestra prioridad<br/>
          es centrarnos en la importancia de los detalles para reformular el impacto de tu<br/>
          marca y desarrollar experiencias de alto nivel.
        </p>
        <div className="skyscraper-image-container">
          <img src={heroImg} alt="Edificio corporativo" className="skyscraper-circular-image" />
        </div>
        <div className="skyscraper-cta-container">
          <button 
            onClick={() => setIsAsesoriaModalOpen(true)}
            className="btn-agenda-rosa"
          >
            Agenda una consultoría gratuita
          </button>
        </div>
      </div>
      
      <AsesoriaModal 
        isOpen={isAsesoriaModalOpen} 
        onClose={() => setIsAsesoriaModalOpen(false)} 
      />
    </section>
  );
}

export default Metrics;
