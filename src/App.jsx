import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Metrics from './components/Metrics'; // Actually InfoBand
import About from './components/About';
import StrategicAreas from './components/StrategicAreas';
import Philosophy from './components/Philosophy';
import StrategicComm from './components/StrategicComm';
import Leadership from './components/Leadership'; // Dyr Charaf
import Contact from './components/Contact';
import Footer from './components/Footer';
import UneteCausa from './components/UneteCausa';
import Startups from './components/Startups';
import DesarrolloPersonal from './components/DesarrolloPersonal';
import ServiceModal from './components/ServiceModal';

function App() {
  const [isTrayectoriaOpen, setIsTrayectoriaOpen] = useState(false);
  const [isUneteOpen, setIsUneteOpen] = useState(false);
  const [isStartupsOpen, setIsStartupsOpen] = useState(false);
  const [isDesarrolloOpen, setIsDesarrolloOpen] = useState(false);
  const [activeServiceId, setActiveServiceId] = useState(null);

  return (
    <div className="app">
      <Header onOpenTrayectoria={() => setIsTrayectoriaOpen(true)} />
      <main>
        <Hero />
        <Metrics />
        <StrategicAreas 
          onOpenUneteCausa={() => setIsUneteOpen(true)} 
          onOpenStartups={() => setIsStartupsOpen(true)}
          onOpenDesarrollo={() => setIsDesarrolloOpen(true)}
          onOpenService={(id) => setActiveServiceId(id)}
        />
        <Philosophy />
        <Leadership />
        <Contact />
      </main>
      <Footer />
      <About isOpen={isTrayectoriaOpen} onClose={() => setIsTrayectoriaOpen(false)} />
      <UneteCausa isOpen={isUneteOpen} onClose={() => setIsUneteOpen(false)} />
      <Startups isOpen={isStartupsOpen} onClose={() => setIsStartupsOpen(false)} />
      <DesarrolloPersonal isOpen={isDesarrolloOpen} onClose={() => setIsDesarrolloOpen(false)} />
      <ServiceModal isOpen={activeServiceId !== null} onClose={() => setActiveServiceId(null)} serviceId={activeServiceId} />
    </div>
  );
}

export default App;
