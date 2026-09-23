import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface ServiceInformationProps {
  information: { title: string; content: string; }[];
}

const ServiceInformation = ({ information }: ServiceInformationProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.sinfo-container',
        { y: 40, opacity: 0, scale: 0.98 },
        { 
          y: 0, opacity: 1, scale: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: {
            trigger: '.sinfo-container',
            start: 'top 85%'
          }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, [information]);

  return (
    <section className="service-section bg-white" ref={sectionRef} style={{ paddingTop: 0 }}>
      <div className="service-container">
        <div className="sinfo-container">
          <div className="sinfo-header">
            <h2>Key Information</h2>
          </div>
          
          <div className="sinfo-grid">
            {information.map((item, i) => (
              <div key={i} className="sinfo-item">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceInformation;
