import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom';
import './ServiceComponents.css';

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  image: string;
}

const ServiceHero = ({ title, subtitle, image }: ServiceHeroProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.sh-reveal', 
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
      );
      
      gsap.fromTo('.sh-image-container',
        { scale: 0.9, opacity: 0, clipPath: 'inset(10% 10% 10% 10% round 30px)' },
        { scale: 1, opacity: 1, clipPath: 'inset(0% 0% 0% 0% round 30px)', duration: 1.5, ease: 'power3.out' }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [title]); // re-run if route changes

  return (
    <section className="service-hero-section" ref={containerRef}>
      <div className="service-hero-container">
        <div className="sh-content">
          <span className="sh-eyebrow sh-reveal">{title}</span>
          <h1 className="sh-title sh-reveal">{subtitle}</h1>
          
          <div className="sh-actions sh-reveal">
            <button 
              className="btn-primary"
              onClick={() => navigate('/appointment')}
            >
              Book an Appointment
            </button>
          </div>
        </div>
        
        <div className="sh-visual">
          <div className="sh-image-container">
            <img src={image} alt={title} className="sh-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
