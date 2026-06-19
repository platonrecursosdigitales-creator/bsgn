import React from 'react';
import './ConversionBand.css';

const ConversionBand = () => {
  return (
    <section className="conversion-band">
      <div className="container conversion-container">
        <h2 className="conversion-text">
          EL ÉXITO DE UNA MARCA ES LA EXPERIENCIA QUE SE VIVE CON ELLA.
        </h2>
        <div className="conversion-actions">
          <a href="#servicios" className="btn btn-primary">Ver servicios</a>
          <a href="#contacto" className="btn btn-outline">Contactar</a>
        </div>
      </div>
    </section>
  );
};

export default ConversionBand;
