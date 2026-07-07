import React from 'react';
import './Leadership.css';
import dyrseImage from '../assets/dyrse-new.jpg';

function Leadership() {
  return (
    <section id="dyrcharaf" className="section dyrse-section">
      <div className="container dyrse-container">
        
        <div className="dyrse-image-col">
          <div className="dyrse-image-wrapper">
            <div className="dyrse-l-shape"></div>
            <img src={dyrseImage} alt="Dyrse Charaf" className="dyrse-img" />
          </div>
        </div>
        
        <div className="dyrse-text-col">
          <h2 className="dyrse-name">DYRSE CHARAF</h2>
          <h3 className="dyrse-title">EXPERTA EN DESARROLLO PERSONAL, PROFESIONAL Y LIDERAZGO.</h3>
          
          <p className="dyrse-quote">
            "La vida es un juego de percepción, sueño y pasión, para ganar hay que aprender a jugar"
          </p>
          
          <div className="dyrse-bio">
            <p>
              Se ha dedicado a lo largo de su trayectoria a capacitar personas, empresas, equipos de trabajo, así como empresarios de alto nivel en distintas áreas. Cuenta con 10 años de experiencia en consultoría de Comunicación Estratégica, Imagen Pública, Desarrollo de Negocios y Manejo de Crisis.
            </p>
            <p>
              Maestra en Imagen Pública e Innovación Empresarial. Especialista en Liderazgo Empresarial, Lenguaje Corporal, Conducta y Comportamiento No Verbal.
            </p>
            <p>
              Su pasión principal es brindar las herramientas para formar e impulsar personas, y marcas a lograr sus objetivos y cumplir sus sueños.
            </p>
          </div>

          <div className="dyrse-featured">
            <p className="dyrse-featured-title">Conoce más de mi trayectoria en:</p>
            <div className="dyrse-logos">
              <a
                href="https://www.nyweeklymagazine.com/blog/top-10-women-leaders-making-an-impact?fbclid=PAQ0xDSwNNpQtleHRuA2FlbQIxMAABp51XGWFdCNKn5h8Se8HY4uvWtBma1BzrBUuktf9aBXu4gHlsEu0UfAV1aULf_aem_ccdQKbcH-UTDVCBUfBGAYQ"
                target="_blank"
                rel="noopener noreferrer"
                className="dyrse-logo-link"
                title="Top 10 Women Leaders Making An Impact"
              >
                <span className="logo-nyweekly">NY WEEKLY MAGAZINE</span>
              </a>
              
              <a 
                href="https://foundersinsidernews.com/top-entrepreneurs-of-2025/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="dyrse-logo-link"
                title="Top Entrepreneurs of 2025"
              >
                <span className="logo-founders">FOUNDERS<br/>INSIDER</span>
              </a>

              <div className="dyrse-logo-group">
                <a 
                  href="https://thenycjournal.com/top-20-life-coaches-to-look-out-for-in-2022/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="dyrse-logo-link"
                  title="Top 20 Life Coaches to Look Out For in 2022"
                >
                  <span className="logo-nycjournal">The NYC Journal</span>
                </a>
                <a 
                  href="https://thenycjournal.com/top-30-women-leaders-to-look-out-for-in-2022/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="dyrse-logo-link"
                  title="Top 30 Women Leaders to Look Out For in 2022"
                >
                  <span className="logo-nycjournal">The NYC Journal</span>
                </a>
              </div>
            </div>
          </div>

          <a 
            href="https://linktr.ee/dyrcharaf?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleASsOsJwZG9mAmV4dG4DYWVtAjExAHNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABpwfPcDuwx0jzEGzXYY-6fhgeAgVpmrEJbxBIQ5pKe_JQ_xJk8GZLhUor-a0I_aem_wlN2kvKo79-ycRCLbW4Yvw" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary dyrse-contact-btn"
          >
            Contáctame
          </a>
        </div>

      </div>
    </section>
  );
}

export default Leadership;
