import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp, X } from 'lucide-react';
import './About.css';

function About({ isOpen, onClose }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 1.5 : scrollLeft + clientWidth / 1.5;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const timelineData = [
    {
      year: '2008',
      title: 'El Comienzo',
      text: 'Nuestra trayectoria comenzó en 2008 con la colaboración y desarrollo de imagen y campaña de fundraising y desarrollo de conferencias para la atleta, ultramaratonista Nahila Hernández San Juan. Puedes ver parte del impacto y desarrollo de nuestra estrategia en este enlace.'
    },
    {
      year: '2010',
      title: 'Expansión y Liderazgo',
      text: 'En 2010, inauguramos la sede en Cancún, nos consolidamos como la agencia líder en medios y eventos de primer nivel. Al ser la elección preferida de todas las agencias de autos así como a restaurantes de primer nivel.\n\nMediante la representación de los principales medios de comunicación en la zona, rápidamente nos posicionamos como top of mind y líderes del mercado para campañas publicitarias de alto impacto así como eventos, lanzamientos, activaciones y product placement.\n\nLlevando la difusión de eventos como el concierto de Shakira / Usher / Enrique Iglesias entre otros. Así como lanzamientos y campañas para marcas como BMW - Acura - Audi - Mazda - Lincoln - Volvo - Chevrolet - GMC - Papa John\'s - Moon Palace, entre otros.'
    },
    {
      year: '2010 - 2018',
      title: 'Customer Experience',
      text: 'Del 2010 al 2018 nos consolidamos como agencia líder en customer experience atendiendo clientes de la talla de Ruth\'s Chris Steak House - La Habichuela - Thai - Porfirio\'s - Fred\'s - Harry\'s - CAO - Puerto Cancun, entre otros.'
    },
    {
      year: '2018',
      title: 'Innovación en Dining',
      text: 'En 2018 de la mano y gracias a la confianza de nuestros amigos de Grupo RosaNgra redefinimos el Dining Experience, siendo ellos el primer grupo restaurantero que innovó al retomar el concepto de happenings sin ser un día especial, sino como un suceso habitual, liderando el mercado, obligando a toda la industria a seguir sus pasos.'
    },
    {
      year: 'Actualidad',
      title: 'Impacto Global',
      text: 'En BSGN sabemos que cada marca es especial y cuenta con necesidades distintas, nuestro servicio integral y equipo multidisciplinario nos permite desarrollar e implementar estrategias específicas acorde a las necesidades y objetivos de cada cliente, que favorecen su imagen y comunicación integral, impactando positivamente en el posicionamiento y la relación con sus consumidores.\n\nAnualmente apoyamos de 1 a 3 empresarios a darle vida a sus proyectos. Contamos con más de 15 casos de éxito, capacitamos a más de 15 grupos de trabajo impactando en el logro de objetivos y realizamos más de 70 eventos de alto impacto.\n\nNuestros eventos han deleitado a millones alrededor de toda la República con efectos de Pirotecnia, Laser Show, Drone Light Show, Fuego, Co2 en eventos deportivos, Conciertos, Zócalo Capitalino, Restaurantes y eventos sociales.\n\nTrabajamos con tecnología de punta para ofrecer eventos de primer nivel. Atendemos empresas desde startups hasta transnacionales.'
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="about-modal-overlay">
      <div className="about-modal-content">
        <button className="about-modal-close" onClick={onClose}>
          <X size={32} />
        </button>
        
        <div className="container">
          <div className="about-accordion-header">
            <h2 className="section-title">Nuestra Trayectoria</h2>
          </div>

          <div className="about-accordion-content">
            <div className="about-intro text-center">
              <p className="about-intro-text">
                <strong>BSGN Consulting Group</strong> es una firma de consultoría estratégica especializada en transformación empresarial, liderazgo, imagen y experiencias de alto impacto formada por un grupo de especialistas y expertos que trabajan unidos con el propósito de apoyar e impulsar profesionales, empresas, marcas e instituciones de toda índole y sector mediante el desarrollo e implementación de soluciones empresariales, estrategias y procesos de innovación que optimizan la imagen, metodologías, procesos, flujos operativos y comerciales que impactan en el crecimiento y logro de objetivos de nuestros clientes con resultados que trascienden.
              </p>
            </div>
            
            <div className="timeline-horizontal-wrapper">
              <button className="timeline-nav-btn left" onClick={() => scroll('left')}>
                <ChevronLeft size={24} />
              </button>
              
              <div className="timeline-horizontal-scroll" ref={scrollRef}>
                {timelineData.map((item, index) => (
                  <div className="timeline-card-wrapper" key={index}>
                    <div className="timeline-node">
                      <div className="timeline-dot"></div>
                      <div className="timeline-line"></div>
                    </div>
                    <div className="timeline-content glass-card">
                      <span className="timeline-year">{item.year}</span>
                      <h3 className="timeline-title">{item.title}</h3>
                      <div className="timeline-text-scroll">
                        {item.text.split('\n\n').map((paragraph, pIndex) => (
                          <p key={pIndex} className="timeline-text">{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="timeline-nav-btn right" onClick={() => scroll('right')}>
                <ChevronRight size={24} />
              </button>
            </div>

            <div className="about-cta glass-card text-center">
              <p className="cta-text">
                Así que si tienes una idea o proyecto que te gustaría desarrollar exitosamente, o alguna área de oportunidad que te gustaría atender en tu negocio o empresa, acércate a nuestros expertos, con gusto podremos atenderte. 
                <br/><br/>
                <strong>Nuestra pasión principal es impulsar y colaborar en el éxito de nuestros clientes.</strong>
              </p>
              <a href="#contacto" className="btn btn-primary mt-4" onClick={onClose}>Habla con un experto</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
