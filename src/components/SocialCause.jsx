import React from 'react';
import './SocialCause.css';
import { HeartHandshake, Users, Info } from 'lucide-react';

function SocialCause() {
  const causes = [
    "Grupos vulnerables",
    "Personas de la tercera edad",
    "Migrantes",
    "Infantes",
    "Madres solteras",
    "Deportistas",
    "Maltrato",
    "Programas de salud",
    "Alimentación",
    "Discapacidad",
    "Enfermedades crónicas o terminales",
    "Adicciones",
    "Becas",
    "Infraestructura",
    "Programas culturales"
  ];

  return (
    <section id="causa" className="section social-cause-section">
      <div className="container">
        <div className="social-header">
          <div className="social-title-area">
            <h2 className="section-title">Únete a la Causa A.C.</h2>
            <h3 className="social-slogan">Juntos llegamos más lejos</h3>
          </div>
          <p className="social-desc">
            Organización no gubernamental para el desarrollo, dedicada a impulsar grupos vulnerables y proyectos de beneficio social mediante difusión, recaudación de fondos y desarrollo de programas.
          </p>
        </div>

        <div className="social-services">
          <div className="ss-card">
            <HeartHandshake size={32} className="ss-icon" />
            <h4>Networking entre donantes y beneficiarios</h4>
          </div>
          <div className="ss-card">
            <Info size={32} className="ss-icon" />
            <h4>Incubadora de proyectos de beneficio social</h4>
          </div>
          <div className="ss-card">
            <Users size={32} className="ss-icon" />
            <h4>Consultoría y apoyo a fundaciones e instituciones</h4>
          </div>
        </div>

        <div className="social-projects">
          <h4 className="projects-title">Proyectos que apoyamos:</h4>
          <div className="projects-grid">
            {causes.map((cause, index) => (
              <div key={index} className="project-pill">
                {cause}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SocialCause;
