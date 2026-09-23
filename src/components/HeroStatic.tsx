import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import './HeroStatic.css';

const HeroStatic = () => {
  const comp = useRef<HTMLElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!comp.current) return;
    const ctx = gsap.context(() => {
      // Fade up text elements
      gsap.from('.home-hero-anim', {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.2
      });

      // Slow continuous zoom on the image itself
      gsap.to('.home-hero-img-container img', {
        scale: 1.05,
        duration: 15,
        ease: 'none',
        repeat: -1,
        yoyo: true,
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <section className="home-service-hero" ref={comp} id="home">
      <div className="home-hero-img-container">
        <img src="/hero_image_1789986082265.jpg" alt="Doctor consulting with a patient" />
      </div>
      <div className="home-hero-overlay"></div>
      <div className="home-hero-content">
        <span className="home-hero-eyebrow home-hero-anim">Trusted Pediatric & Neonatal Care</span>
        <h1 className="home-hero-title home-hero-anim">Compassionate Care.<br/>Designed around your child.</h1>
        <p className="home-hero-desc home-hero-anim">
          Expert medical care for newborns, infants, and children through every milestone. Led by Dr. Haseen Fathima, we provide advanced, family-centered support when you need it most.
        </p>
        <div className="home-hero-cta-group home-hero-anim">
          <button className="btn-primary" onClick={() => navigate('/appointment')}>
            Book Appointment
          </button>
          <button className="btn-secondary" style={{ borderColor: 'var(--color-white)', color: 'var(--color-white)' }} onClick={() => {
               document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
            }}>
            Explore Services
          </button>
        </div>
      </div>
      <div className="home-hero-floating-info home-hero-anim">
        15K+ Happy Patients • 4.9/5 Patient Satisfaction
      </div>
    </section>
  );
};

export default HeroStatic;
