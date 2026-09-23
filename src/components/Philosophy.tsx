import { useEffect, useRef } from 'react';
import 'react';
import gsap from 'gsap';

const Philosophy = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(textRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1, 
          y: 0, 
          duration: 1.2, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          }
        }
      );
      
      gsap.fromTo(descRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, 
          y: 0, 
          duration: 1, 
          delay: 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          }
        }
      );
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section className="section philosophy-section" ref={sectionRef} style={{ backgroundColor: 'var(--color-blue-soft)', textAlign: 'center' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <h2 ref={textRef} style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--color-primary)', marginBottom: '2rem' }}>
          Because the smallest patients deserve the highest level of care.
        </h2>
        <p ref={descRef} style={{ fontSize: '1.2rem', color: 'var(--color-navy)', opacity: 0.9, lineHeight: 1.8 }}>
          A comprehensive clinic aimed at addressing lactational support, expert newborn care, vaccination, management of common childhood illness, and neonatal and pediatric emergency care.
        </p>
      </div>
    </section>
  );
};

export default Philosophy;
