import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1 className="hero-title">
          CREAMOS E IMPULSAMOS MARCAS <br />
          A TRAVÉS DE EXPERIENCIAS DE ALTO IMPACTO.
        </h1>
        <p className="hero-subtitle">
          "EL ÉXITO DE UNA MARCA SE MIDE EN LAS EXPERIENCIA QUE GENERA"
        </p>
      </div>
    </section>
  );
};

export default Hero;
