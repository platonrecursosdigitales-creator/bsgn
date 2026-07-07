import React from 'react';
import './PublicImage.css';
import { Camera, Users, Building, ShieldAlert, Briefcase, UserCheck, Star } from 'lucide-react';

function PublicImage() {
  const subAreas = [
    { title: "Desarrollo & Gestión de Imagen Pública", icon: <Camera size={28} /> },
    { title: "Representación y Desarrollo de Figuras Públicas", icon: <Users size={28} /> },
    { title: "Desarrollo de Imagen Ambiental", icon: <Building size={28} /> },
    { title: "Manejo de Crisis", icon: <ShieldAlert size={28} /> },
    { title: "Imagen Profesional", icon: <Briefcase size={28} /> },
    { title: "Imagen Empresarial & Corporativa", icon: <UserCheck size={28} /> },
    { title: "Personal Branding", icon: <Star size={28} /> }
  ];

  return (
    <section id="imagen-publica" className="section public-image-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Consultoría en Imagen Pública</h2>
          <p className="section-subtitle">
            Proyectamos la esencia de marcas, instituciones y líderes para generar percepciones alineadas a sus objetivos estratégicos.
          </p>
        </div>

        <div className="pi-grid">
          {subAreas.map((item, index) => (
            <div key={index} className="pi-card">
              <div className="pi-icon-wrapper">
                {item.icon}
              </div>
              <h3 className="pi-card-title">{item.title}</h3>
            </div>
          ))}
        </div>
        
        <div className="pi-cta text-center">
          <a href="#contacto" className="btn btn-primary">
            Agenda sesión de consultoría
          </a>
        </div>
      </div>
    </section>
  );
}

export default PublicImage;
