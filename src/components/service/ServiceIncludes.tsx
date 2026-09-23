import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface ServiceIncludesProps {
  includes: { title: string; description: string; }[];
}

const ServiceIncludes = ({ includes }: ServiceIncludesProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.si-card',
        { y: 40, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: {
            trigger: '.si-grid',
            start: 'top 85%'
          }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, [includes]);

  return (
    <section className="service-section bg-lavender" ref={sectionRef}>
      <div className="service-container si-container">
        <div className="si-header fade-up">
          <span className="si-eyebrow">What's Included</span>
        </div>
        
        <div className="si-grid">
          {includes.map((item, i) => (
            <div key={i} className="si-card">
              <div className="si-number">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceIncludes;
