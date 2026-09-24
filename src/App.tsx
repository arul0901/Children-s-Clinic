import { useEffect } from 'react';
import 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Layout, CustomCursor } from './components';
import Home from './pages/Home';
import Services from './pages/ServicesPage';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Appointment from './pages/Appointment';
import OurSpace from './pages/OurSpace';

// 5 Separate Service Pages
import {
  PediatricCare,
  NeonatalCare,
  Vaccination,
  NewbornCare,
  LactationSupport
} from './pages/services/index';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Smooth scroll setup can go here if needed
  }, []);

  return (
    <BrowserRouter>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          
          {/* 5 Dedicated Service Pages */}
          <Route path="services/pediatric-care" element={<PediatricCare />} />
          <Route path="services/neonatal-care" element={<NeonatalCare />} />
          <Route path="services/vaccination" element={<Vaccination />} />
          <Route path="services/newborn-care" element={<NewbornCare />} />
          <Route path="services/lactation-support" element={<LactationSupport />} />
          

          <Route path="about" element={<About />} />
          <Route path="our-space" element={<OurSpace />} />
          <Route path="facilities" element={<OurSpace />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="appointment" element={<Appointment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
