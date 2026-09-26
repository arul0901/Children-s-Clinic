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
      // Fade-up text elements sequentially
      gsap.from('.hero-anim', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.18,
        ease: 'power3.out',
        delay: 0.3
      });

      // Slide in images from the right
      gsap.from('.hero-img-main', {
        x: 80,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.5
      });

      gsap.from('.hero-img-secondary', {
        x: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.7
      });

      // Scale in the decorative arc
      gsap.from('.hero-decor-arc', {
        scale: 0.5,
        opacity: 0,
        duration: 1.4,
        ease: 'power3.out',
        delay: 0.4
      });

      // Slide in floating cards
      gsap.from('.hero-float-card', {
        x: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.25,
        ease: 'power3.out',
        delay: 1.0
      });

      // Subtle continuous float on cards
      gsap.to('.hero-float-card-top', {
        y: -8,
        duration: 3,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });

      gsap.to('.hero-float-card-bottom', {
        y: 8,
        duration: 3.5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });

      // Slow zoom on main image
      gsap.to('.hero-img-main img', {
        scale: 1.04,
        duration: 14,
        ease: 'none',
        repeat: -1,
        yoyo: true,
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero-split" ref={comp} id="home">
      {/* Left Content */}
      <div className="hero-split-left">
        <h1 className="hero-split-title hero-anim">
          <span className="hero-title-highlight">Trusted Pediatric & Newborn Care</span> in Krishnagiri
        </h1>
        <h2 className="hero-split-subtitle hero-anim">
          Caring for Little Ones at Every Stage
        </h2>
        <p className="hero-split-desc hero-anim">
         From newborn care and lactation support to vaccinations, growth monitoring and childhood illnesses, The Children’s Clinic provides personalized care for your child’s changing healthcare needs.
        </p>
        <div className="hero-split-cta hero-anim">
          <button className="hero-cta-btn" onClick={() => navigate('/appointment')}>
            Book a Appointment
          </button>
        </div>
      </div>

      {/* Right Visual */}
      <div className="hero-split-right">
        {/* Decorative purple arc */}
        <div className="hero-decor-arc"></div>

        {/* Main image (larger, front) */}
        <div className="hero-img-main">
          <img src="/hero_baby_main.jpg" alt="Baby wrapped in a cozy blanket" />
        </div>

        {/* Secondary image (smaller, behind/overlapping) */}
        <div className="hero-img-secondary">
          <img src="/hero_baby_secondary.jpg" alt="Newborn baby resting peacefully" />
        </div>

        {/* Floating info card - top */}
        <div className="hero-float-card hero-float-card-top">
          <div className="hero-float-card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="6" fill="#4F1975"/>
              <path d="M12 6C12.5523 6 13 6.44772 13 7V11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H13V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V13H7C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11H11V7C11 6.44772 11.4477 6 12 6Z" fill="white"/>
            </svg>
          </div>
          <div className="hero-float-card-text">
            <span className="hero-float-card-title">Neonatal Ventilation</span>
            <span className="hero-float-card-sub">Expertise</span>
          </div>
        </div>

        {/* Floating info card - bottom */}
        <div className="hero-float-card hero-float-card-bottom">
          <div className="hero-float-card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="6" fill="#4F1975"/>
              <path d="M12 4L14.5 9.5L20 10L16 14L17 20L12 17L7 20L8 14L4 10L9.5 9.5L12 4Z" fill="white"/>
            </svg>
          </div>
          <div className="hero-float-card-text">
            <span className="hero-float-card-title">9+ Years of</span>
            <span className="hero-float-card-sub">Child Care Experience</span>
          </div>
        </div>
      </div>

      {/* Background decorative dots */}
      <div className="hero-bg-dots"></div>
    </section>
  );
};

export default HeroStatic;
