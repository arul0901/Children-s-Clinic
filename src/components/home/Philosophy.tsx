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
    <section className="section philosophy-section philosophy-section-bg" ref={sectionRef}>
      <div className="container philosophy-container-width">
        <h2 ref={textRef} className="philosophy-heading">
          Because the smallest patients deserve the highest level of care.
        </h2>
        <p ref={descRef} className="philosophy-desc">
          A comprehensive clinic aimed at addressing lactational support, expert newborn care, vaccination, management of common childhood illness, and neonatal and pediatric emergency care.
        </p>
      </div>
    </section>
  );
};

export default Philosophy;
