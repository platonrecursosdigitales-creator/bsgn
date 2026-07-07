import React, { useState } from 'react';
import { X, ChevronDown, ChevronUp, Compass, Target, Eye } from 'lucide-react';
import './UneteCausa.css';

import imgEducacion from '../assets/causa_educacion_1783104093008.png';
import imgSalud from '../assets/causa_salud_1783104100239.png';
import imgAlimentacion from '../assets/causa_alimentacion_1783104107824.png';
import imgAdultos from '../assets/causa_adultos_mayores_1783104114896.png';
import imgMujeres from '../assets/causa_mujeres_1783104122231.png';
import imgNinez from '../assets/causa_ninez_1783104129354.png';
import imgDiscapacidad from '../assets/causa_discapacidad_1783104141104.png';
import imgMigrantes from '../assets/causa_migrantes_1783104148009.png';
import imgCultura from '../assets/causa_cultura_1783104154820.png';
import imgMedioAmbiente from '../assets/causa_medio_ambiente_1783104162155.png';
import imgEmergencias from '../assets/causa_emergencias_1783104170052.png';

function UneteCausa({ isOpen, onClose }) {
  const [actoresOpen, setActoresOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="unete-modal-overlay">
      <div className="unete-modal-content">
        <button className="unete-modal-close" onClick={onClose}>
          <X size={32} />
        </button>

        <div className="unete-section unete-hero">
          <h2 className="unete-hero-title">Nuestra Causa</h2>
          <div className="unete-hero-content">
            <div className="unete-lead-statement">
              <p>Creemos que detrás de cada sueño existe una oportunidad esperando ser descubierta y detrás de cada oportunidad hay alguien dispuesto a hacerla posible.</p>
            </div>
            
            <div className="unete-text-grid">
              <div className="unete-text-column">
                <p>Nuestra causa nace de la convicción de que ninguna persona debería enfrentar sola sus desafíos y de que las grandes transformaciones ocurren cuando miles de voluntades deciden caminar en la misma dirección.</p>
              </div>
              <div className="unete-text-column">
                <p>Por eso unimos personas, empresas, organizaciones e instituciones que comparten un mismo propósito: abrir puertas donde antes solo había obstáculos, fortalecer a quienes dedican su vida a servir a los demás y crear oportunidades que cambien historias para siempre.</p>
              </div>
            </div>

            <div className="unete-highlight-banner">
              <p>No solo apoyamos proyectos sociales; impulsamos una red de esperanza que conecta corazones, talento y recursos para que el impacto llegue cada vez más lejos y permanezca en el tiempo.</p>
            </div>

            <div className="unete-text-grid">
              <div className="unete-text-column">
                <p>Trabajamos para construir una sociedad donde ayudar vuelva a ser un acto de confianza; donde cada donación tenga un rostro, cada esfuerzo deje una huella y cada acción se convierta en un cambio real y medible.</p>
              </div>
              <div className="unete-text-column">
                <p>Porque creemos que cuando una persona encuentra una oportunidad, no solo recupera la esperanza, la ilusión por vivir, y reúne la fortaleza para transformar su vida, impacta su entorno y así cambia el futuro de una comunidad exponencialmente.</p>
              </div>
            </div>

            <div className="unete-closing-statement">
              <p>Estamos convencidos que cuando una sociedad decide unirse para crear esas oportunidades, podemos cambiar el mundo de forma sostenible con resultados sólidos.</p>
            </div>
          </div>
        </div>

        <div className="unete-section">
          <h2 className="section-title text-center">Filosofía</h2>
          <div className="unete-philosophy-grid">
            <div className="unete-card text-center">
              <Compass size={48} className="unete-card-icon" />
              <h3>Propósito</h3>
              <p>Multiplicar oportunidades que unen historias de esperanza, ilusión y fortaleza para transformar realidades de forma sostenible, fortaleciendo a cada persona que dedica su vida a construir un mundo más justo.</p>
            </div>
            <div className="unete-card text-center">
              <Target size={48} className="unete-card-icon" />
              <h3>Misión</h3>
              <p>Conectar personas, empresas e instituciones con proyectos sociales de alto impacto mediante un modelo transparente, medible y sostenible que fortalezca el desarrollo de grupos vulnerables y organizaciones de la sociedad civil.</p>
            </div>
            <div className="unete-card text-center">
              <Eye size={48} className="unete-card-icon" />
              <h3>Visión</h3>
              <p>Ser la plataforma de referencia en México para la inversión social y la filantropía transparente, reconocida por generar confianza, fortalecer organizaciones y multiplicar el impacto social.</p>
            </div>
          </div>
        </div>

        <div className="unete-section">
          <h2 className="section-title text-center">Nuestro Enfoque</h2>
          <div className="unete-enfoque-grid">
            <div className="unete-enfoque-card" style={{ backgroundImage: `url(${imgEducacion})` }}>
              <div className="unete-enfoque-overlay"></div>
              <h4>Educación</h4>
            </div>
            <div className="unete-enfoque-card" style={{ backgroundImage: `url(${imgSalud})` }}>
              <div className="unete-enfoque-overlay"></div>
              <h4>Salud</h4>
            </div>
            <div className="unete-enfoque-card" style={{ backgroundImage: `url(${imgAlimentacion})` }}>
              <div className="unete-enfoque-overlay"></div>
              <h4>Alimentación</h4>
            </div>
            <div className="unete-enfoque-card" style={{ backgroundImage: `url(${imgAdultos})` }}>
              <div className="unete-enfoque-overlay"></div>
              <h4>Adultos Mayores</h4>
            </div>
            <div className="unete-enfoque-card" style={{ backgroundImage: `url(${imgMujeres})` }}>
              <div className="unete-enfoque-overlay"></div>
              <h4>Mujeres</h4>
            </div>
            <div className="unete-enfoque-card" style={{ backgroundImage: `url(${imgNinez})` }}>
              <div className="unete-enfoque-overlay"></div>
              <h4>Niñez</h4>
            </div>
            <div className="unete-enfoque-card" style={{ backgroundImage: `url(${imgDiscapacidad})` }}>
              <div className="unete-enfoque-overlay"></div>
              <h4>Discapacidad</h4>
            </div>
            <div className="unete-enfoque-card" style={{ backgroundImage: `url(${imgMigrantes})` }}>
              <div className="unete-enfoque-overlay"></div>
              <h4>Migrantes</h4>
            </div>
            <div className="unete-enfoque-card" style={{ backgroundImage: `url(${imgCultura})` }}>
              <div className="unete-enfoque-overlay"></div>
              <h4>Cultura</h4>
            </div>
            <div className="unete-enfoque-card" style={{ backgroundImage: `url(${imgMedioAmbiente})` }}>
              <div className="unete-enfoque-overlay"></div>
              <h4>Medio Ambiente</h4>
            </div>
            <div className="unete-enfoque-card" style={{ backgroundImage: `url(${imgEmergencias})` }}>
              <div className="unete-enfoque-overlay"></div>
              <h4>Emergencias</h4>
            </div>
          </div>
        </div>

        <div className="unete-section unete-ctas">
          <button className="btn btn-white btn-large">DONAR</button>
          <div className="unete-ctas-grid">
            <div className="unete-cta-card">
              <h4>Inscribe tu causa</h4>
              <p>AFÍLIATE: Organizaciones sociales y proyectos comunitarios.</p>
              <button className="btn btn-outline-white btn-sm" onClick={() => document.getElementById('unete-form').scrollIntoView({behavior:'smooth'})}>Caja de inscripción</button>
            </div>
            <div className="unete-cta-card">
              <h4>Círculo de Confianza</h4>
              <p>Sé parte de nuestro círculo de confianza. Contamos con varios niveles de participación. Regístrate y uno de nuestros guías de causa te contactará.</p>
              <button className="btn btn-outline-white btn-sm" onClick={() => document.getElementById('unete-form').scrollIntoView({behavior:'smooth'})}>Donantes Recurrentes</button>
            </div>
            <div className="unete-cta-card">
              <h4>Únete a Nuestra Red de Apoyo</h4>
              <p>HOY POR TI, MAÑANA POR MÍ: Beneficiarios finales, si estás pasando por una situación vulnerable donde requieres reunir fuerza, date de alta.</p>
              <button className="btn btn-outline-white btn-sm" onClick={() => document.getElementById('unete-form').scrollIntoView({behavior:'smooth'})}>Darse de alta</button>
            </div>
          </div>
        </div>

        <div className="unete-section unete-red">
          <div className="unete-red-intro">
            <p>El desarrollo social no depende únicamente de una organización.</p>
            <p>Es el resultado de la interacción entre múltiples actores.</p>
            <p><strong>TÚ PUEDES SER PIEZA CLAVE EN EL CAMBIO DE UNA O MILES DE VIDAS Y REALIDADES.</strong></p>
          </div>
          
          <button className="unete-accordion-btn" onClick={() => setActoresOpen(!actoresOpen)}>
            INSCRÍBETE {actoresOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>
          
          {actoresOpen && (
            <div className="unete-accordion-content">
              <div className="red-grid">
                <div className="red-category">
                  <h5>Ciudadanos</h5>
                  <ul>
                    <li>Donantes</li>
                    <li>Voluntarios</li>
                    <li>Influencers</li>
                    <li>Líderes comunitarios</li>
                  </ul>
                </div>
                <div className="red-category">
                  <h5>Empresas</h5>
                  <ul>
                    <li>Responsabilidad Social</li>
                    <li>ESG</li>
                    <li>Fundaciones corporativas</li>
                    <li>Voluntariado</li>
                    <li>Patrocinios</li>
                  </ul>
                </div>
                <div className="red-category">
                  <h5>Gobierno</h5>
                  <ul>
                    <li>Programas</li>
                    <li>Convocatorias</li>
                    <li>Políticas públicas</li>
                  </ul>
                </div>
                <div className="red-category">
                  <h5>Organismos Internacionales</h5>
                  <ul>
                    <li>ONU</li>
                    <li>BID</li>
                    <li>Banco Mundial</li>
                    <li>USAID</li>
                    <li>Unión Europea</li>
                  </ul>
                </div>
                <div className="red-category">
                  <h5>Organizaciones Sociales</h5>
                  <ul>
                    <li>Asociaciones</li>
                    <li>Fundaciones</li>
                    <li>Colectivos</li>
                    <li>Cooperativas</li>
                  </ul>
                </div>
                <div className="red-category">
                  <h5>Academia</h5>
                  <ul>
                    <li>Investigación</li>
                    <li>Medición</li>
                    <li>Innovación</li>
                    <li>Capacitación</li>
                  </ul>
                </div>
              </div>

              <div id="unete-form" style={{ marginTop: '40px', textAlign: 'center' }}>
                <h4 style={{ color: 'var(--color-primary)' }}>FORMULARIO DE INSCRIPCIÓN</h4>
              </div>
            </div>
          )}
        </div>

        <div className="unete-section unete-impacto">
          <h2 className="section-title text-center">Nuestro Impacto</h2>
          <div className="unete-timeline-vertical">
            <div className="unete-timeline-item">
              <div className="unete-timeline-dot"></div>
              <div className="unete-timeline-content">
                <span className="unete-timeline-year">2000 - 2004</span>
                <h4>Kinder Cáncer</h4>
                <p>Salva a más de 5,000 niños con cáncer con trasplantes de médula ósea.</p>
              </div>
            </div>
            
            <div className="unete-timeline-item">
              <div className="unete-timeline-dot"></div>
              <div className="unete-timeline-content">
                <span className="unete-timeline-year">2020</span>
                <h4>Solidaridad en un momento crítico</h4>
                <p>Se donaron más de 15,000 litros de agua y 5,000 despensas en Cancún Q.Roo.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default UneteCausa;
