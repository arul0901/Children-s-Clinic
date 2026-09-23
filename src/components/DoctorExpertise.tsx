import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './DoctorExpertise.css';

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  { title: "MBBS", inst: "Government Chengalpattu Medical College" },
  { title: "MD Pediatrics", inst: "Pondicherry Institute of Medical Sciences" },
  { title: "DNB", inst: "Completed DNB post MD" },
  { title: "Senior Resident", inst: "Department of Neonatology, JIPMER, Puducherry" },
  { title: "Advanced Training", inst: "Courses in Neonatal Ventilation and Neonatal POCUS" },
  { title: "Certified Provider", inst: "PALS and NALS" },
  { title: "BLS Instructor", inst: "" }
];

const DoctorExpertise = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "bottom 80%",
          scrub: 1
        }
      });

      tl.fromTo(lineRef.current, { scaleY: 0 }, { scaleY: 1, transformOrigin: "top", ease: "none" });

      itemsRef.current.forEach((item) => {
        if (item) {
          gsap.fromTo(item, 
            { opacity: 0, x: -30 }, 
            { 
              opacity: 1, x: 0, duration: 0.8, 
              scrollTrigger: {
                trigger: item,
                start: "top 80%"
              }
            }
          );
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section expertise-section" id="about" ref={sectionRef}>
      <div className="container expertise-container">
        <div className="expertise-intro">
          <h2 className="expertise-title">Specialist care backed by advanced neonatal expertise.</h2>
          <div className="doctor-profile">
            <div className="img-placeholder-wrapper" style={{ width: '100%', height: '500px', borderRadius: '20px' }}>
               <img src="/doctor_portrait.jpg" alt="Doctor Portrait" />
            </div>
          </div>
        </div>

        <div className="expertise-timeline">
          <div className="timeline-line" ref={lineRef}></div>
          {timelineData.map((item, index) => (
            <div 
              className="timeline-item" 
              key={index} 
              ref={(el) => { itemsRef.current[index] = el; }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="timeline-role">{item.title}</h3>
                {item.inst && <p className="timeline-inst">{item.inst}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorExpertise;
