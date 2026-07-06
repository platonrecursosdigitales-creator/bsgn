import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="nosotros" className="section about-section">
      <div className="container">
        <h2 className="section-title">Nosotros</h2>
        
        <div className="about-content">
          <p className="about-text drop-cap">
            Somos una agencia de consultoría integral en gestión estratégica, líder en desarrollo empresarial formada por un grupo de especialistas y expertos que trabajan unidos con el propósito de apoyar e impulsar a profesionales, empresas, marcas e instituciones de toda índole y sector mediante el desarrollo e implementación de soluciones empresariales, estrategias y procesos de innovación que optimizan la imagen, metodologías, flujos operativos y comerciales que impactan en el crecimiento y logro de objetivos de nuestros clientes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
