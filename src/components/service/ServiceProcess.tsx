import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface ServiceProcessProps {
  process: { title: string; description: string; }[];
}

const ServiceProcess = ({ process }: ServiceProcessProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.sp-step',
        { y: 30, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power2.out',
          scrollTrigger: {
            trigger: '.sp-timeline',
            start: 'top 85%'
          }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, [process]);

  return (
    <section className="service-section bg-white" ref={sectionRef}>
      <div className="service-container sp-container">
        <div className="si-header">
          <span className="si-eyebrow">Care Process</span>
        </div>
        
        <div className="sp-timeline">
          {process.map((step, i) => (
            <div key={i} className="sp-step">
              <div className="sp-step-number">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
