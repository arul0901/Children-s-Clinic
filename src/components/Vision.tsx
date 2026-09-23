import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Vision.css';

gsap.registerPlugin(ScrollTrigger);

const Vision = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      textRefs.current.forEach((el) => {
        if (el) {
          gsap.to(el, {
            color: 'var(--color-primary)',
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
              end: 'top 50%',
              scrub: true
            }
          });
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="section vision-section" ref={sectionRef}>
      <div className="vision-bg">
        <div className="img-placeholder-wrapper">
           <img src="/vision_bg.jpg" alt="Vision Background" style={{ opacity: 0.15 }} />
        </div>
      </div>
      <div className="container">
        <h2 className="vision-subtitle">Our Vision</h2>
        <div className="vision-statement">
          To establish <span ref={(el) => { textRefs.current[0] = el; }}>high-end neonatal care</span> and pediatric intensive care with <span ref={(el) => { textRefs.current[1] = el; }}>easy access</span> and <span ref={(el) => { textRefs.current[2] = el; }}>affordable care</span> for <span ref={(el) => { textRefs.current[3] = el; }}>everyone</span>.
        </div>
      </div>
    </section>
  );
};

export default Vision;
