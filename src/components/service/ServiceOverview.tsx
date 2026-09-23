import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface ServiceOverviewProps {
  title: string;
  paragraphs: string[];
}

const ServiceOverview = ({ title, paragraphs }: ServiceOverviewProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.so-reveal',
        { y: 30, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%'
          }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, [title]);

  return (
    <section className="service-section bg-white" ref={sectionRef}>
      <div className="service-container so-container">
        <h2 className="so-title so-reveal">{title}</h2>
        <div className="so-text">
          {paragraphs.map((p, i) => (
            <p key={i} className="so-reveal">{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
