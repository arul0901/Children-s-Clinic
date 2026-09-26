import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

import { Layout, CustomCursor } from './components';
import Home from './pages/Home';
import Services from './pages/ServicesPage';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Appointment from './pages/Appointment';
import OurSpace from './pages/OurSpace';

// Dedicated Service Pages
import {
  LactationSupport,
  NeonatalCare,
  NewbornCare,
  GrowthDevelopment,
  PediatricCare,
  Vaccination,
  Seizures
} from './pages/services/index';

gsap.registerPlugin(ScrollTrigger);

// Helper component to reset scroll on route change with Lenis support
function ScrollToTop({ lenis }: { lenis: Lenis | null }) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, lenis]);

  return null;
}

function App() {
  useEffect(() => {
    // Initialize Lenis with custom settings for slower, smoother scrolling
    const lenis = new Lenis({
      duration: 1.8,          // Slower scroll animation duration (default is 1.2)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth deceleration
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.75,   // Reduces scroll speed per wheel notch for slower scrolling
      touchMultiplier: 1.2,
    });

    // Synchronize Lenis scroll events with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const updateRaf = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateRaf);
    gsap.ticker.lagSmoothing(0);

    // Make lenis globally accessible if needed
    (window as any).__lenis = lenis;

    return () => {
      gsap.ticker.remove(updateRaf);
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop lenis={(window as any).__lenis || null} />
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          
          {/* Dedicated Service Pages */}
          <Route path="services/lactation-support-in-krishnagiri" element={<LactationSupport />} />
          <Route path="services/neonatal-care-in-krishnagiri" element={<NeonatalCare />} />
          <Route path="services/newborn-care-jaundice-krishnagiri" element={<NewbornCare />} />
          <Route path="services/child-growth-development-krishnagiri" element={<GrowthDevelopment />} />
          <Route path="services/pediatric-fever-cold-cough-krishnagiri" element={<PediatricCare />} />
          <Route path="services/child-vaccination-krishnagiri" element={<Vaccination />} />
          <Route path="services/seizures-fits-babies-children-krishnagiri" element={<Seizures />} />
          

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
