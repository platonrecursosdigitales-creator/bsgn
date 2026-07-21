import React, { useState } from 'react';
import './Metrics.css';
import heroImg from '../assets/skyscraper.png';
import AsesoriaModal from './AsesoriaModal';

function Metrics() {
  const [isAsesoriaModalOpen, setIsAsesoriaModalOpen] = useState(false);
  return (
    <section className="skyscraper-section" id="nosotros">
      <div className="container skyscraper-content">
        <h2 className="skyscraper-title">Strategic Intelligence &<br/>High-impact experiences.</h2>
        <div className="skyscraper-divider"></div>
        <p className="skyscraper-description">
          Convertimos conocimiento, percepción y estrategia en soluciones que impulsan el crecimiento sostenible de líderes y organizaciones, nos enfocamos en cada detalle para transformar tus resultados implementando estrategias y desarrollando experiencias de alto impacto.
          <br/><br/>
          Hemos creado e impulsado más de 20 líderes de mercado en distintas industrias.
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
