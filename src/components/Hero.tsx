import { useEffect, useRef } from 'react';
import 'react';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.fromTo(imageRef.current, 
        { scale: 1.05, opacity: 0, filter: 'blur(10px)' }, 
        { scale: 1, opacity: 1, filter: 'blur(0px)', duration: 2, ease: 'power3.out' }
      );

      if (textRef.current) {
        tl.fromTo(textRef.current.children, 
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: 'power4.out' },
          "-=1.5"
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero-section" ref={heroRef} id="home">
      <div className="container hero-container">
        
        <div className="hero-content" ref={textRef}>
          <h1 className="hero-title">Expert care<br/>for the smallest<br/>beginnings.</h1>
          <p className="hero-subtitle">
            Compassionate neonatal and pediatric care, from the first days of life through childhood.
          </p>
          <div className="hero-cta-group">
            <button className="btn-primary">
              Book an Appointment <ArrowRight size={18} className="arrow" />
            </button>
            <button className="btn-secondary">Explore Our Care</button>
          </div>
        </div>

        <div className="hero-image-wrapper" ref={imageRef}>
          <div className="img-placeholder-wrapper">
             <img src="/hero_image.jpg" alt="Doctor and child interaction" />
          </div>
          
          <div className="floating-elements">
            <div className="float-item float-1">Neonatal Care</div>
            <div className="float-item float-2">Pediatric Care</div>
            <div className="float-item float-3">Vaccination</div>
            <div className="float-item float-4">Emergency</div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
