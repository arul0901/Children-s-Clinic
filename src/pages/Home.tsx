import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight, Stethoscope, Baby, ShieldPlus, HeartPulse, Hospital, Clock, ArrowRight, Users, Syringe, Droplets, Apple, Brain, CheckCircle2 } from 'lucide-react';
import { HeroStatic, HolisticWellness, SpecializedCareShowcase, CareSplit, HospitalInfrastructure, BookAppointmentCTA, Testimonials } from '../components';

import './Home.css';

gsap.registerPlugin(ScrollTrigger);

const TESTIMONIALS = [
  { quote: "Dr. Fathima and her team made us feel completely confident from our very first visit. Our newborn received the most attentive care.", author: "Priya S.", role: "Mother of a newborn, Krishnagiri" },
  { quote: "We heard so much about the expertise here. Every visit reassured us that our child was in the most capable hands.", author: "Ramesh K.", role: "Father of a 6-month-old, Krishnagiri" },
  { quote: "The doctors explained everything so clearly. I never felt rushed or dismissed. I finally felt truly understood as a parent.", author: "Meena L.", role: "Mother of twins, Krishnagiri" },
];

const SPECIALTIES = [
  { name: 'Internal Medicine', Icon: Stethoscope, id: 'stethoscope' },
  { name: 'Family Medicine', Icon: Users, id: 'users' },
  { name: 'Pediatrics', Icon: Baby, id: 'baby' },
  { name: 'Neonatology', Icon: HeartPulse, id: 'heartpulse' },
  { name: 'Immunisation', Icon: Syringe, id: 'syringe' },
  { name: 'Lactation', Icon: Droplets, id: 'droplets' }
];



const SERVICES = [
  { icon: <Baby size={24} />, title: "Newborn Care", desc: "Specialised monitoring and gentle support for your baby's critical first days and weeks.", link: "/services/newborn-care", img: "/service_neonatal_care_1789988898999.jpg" },
  { icon: <HeartPulse size={24} />, title: "Lactation Support", desc: "Expert guidance for mothers to establish successful and stress-free breastfeeding.", link: "/services/lactation-support", img: "/phototherapy_treatment_1789989308209.jpg" },
  { icon: <ShieldPlus size={24} />, title: "Vaccination", desc: "Complete immunisation schedules protecting children through every phase of development.", link: "/services/vaccination", img: "/service_preventative_care_1789988969044.jpg" },
  { icon: <Stethoscope size={24} />, title: "Pediatric Consultation", desc: "Routine check-ups, growth monitoring, and holistic preventive care for all ages.", link: "/services/pediatric-care", img: "/pediatric_bg.jpg" },
  { icon: <Hospital size={24} />, title: "Neonatal Care", desc: "Advanced NICU support for premature babies and complex newborn conditions.", link: "/services/neonatal-care", img: "/neonatal_bg.jpg" },
  { icon: <Clock size={24} />, title: "Pediatric Emergency", desc: "Rapid, expert response when your child needs urgent care, 24/7.", link: "/services/pediatric-care", img: "/service_emergency_care_1789988990048.jpg" },
  { icon: <Brain size={24} />, title: "Development Assessment", desc: "Track your child's physical, cognitive, and social milestones with expert evaluations.", link: "/services/pediatric-care", img: "/service_editorial_1_1789990863800.jpg" },
  { icon: <Apple size={24} />, title: "Nutritional Counseling", desc: "Personalized diet plans and guidance to ensure optimal growth and healthy eating habits.", link: "/services/pediatric-care", img: "/services_image.jpg" },
];

const Home = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [testIdx, setTestIdx] = useState(0);

  // Testimonial auto-advance
  useEffect(() => {
    const id = setInterval(() => setTestIdx(i => (i + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(id);
  }, []);

  const prevTest = () => setTestIdx(i => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const nextTest = () => setTestIdx(i => (i + 1) % TESTIMONIALS.length);

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // General Fade Up for section headers and elements
      gsap.utils.toArray<Element>('.fade-up').forEach(el => {
        gsap.fromTo(el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 85%' }
          }
        );
      });

      // Service Cards
      gsap.utils.toArray<Element>('.service-card').forEach((el) => {
        gsap.fromTo(el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 85%' }
          }
        );
      });

      // Specialty scroll animation fade in
      gsap.fromTo('.specialty-container',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.specialty-container', start: 'top 90%' }
        }
      );

    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      {/* ─── 1. HERO ────────────────────────── */}
      <HeroStatic />

      {/* ─── 2. HOLISTIC WELLNESS ──────────── */}
      <HolisticWellness />

      {/* ─── 2. SPECIALTIES (Horizontal Swipe) ───────────────────────── */}
      <section className="home-section bg-lavender" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="specialty-container">
            <div className="specialty-marquee">
              <div className="specialty-track">
                {SPECIALTIES.map((spec, i) => {
                  const Icon = spec.Icon;
                  return (
                    <div className="specialty-pill" key={i} data-cursor-icon={spec.id}>
                      <div className="specialty-pill-icon">
                        <Icon size={20} />
                      </div>
                      <span style={{ fontWeight: 500, color: 'var(--color-primary)', whiteSpace: 'nowrap' }}>{spec.name}</span>
                    </div>
                  );
                })}
              </div>
              {/* Duplicate track for seamless infinite scroll */}
              <div className="specialty-track">
                {SPECIALTIES.map((spec, i) => {
                  const Icon = spec.Icon;
                  return (
                    <div className="specialty-pill" key={`dup-${i}`} data-cursor-icon={spec.id}>
                      <div className="specialty-pill-icon">
                        <Icon size={20} />
                      </div>
                      <span style={{ fontWeight: 500, color: 'var(--color-primary)', whiteSpace: 'nowrap' }}>{spec.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. HOSPITAL INFRASTRUCTURE & FACILITIES ───────────────────────── */}
      <HospitalInfrastructure onCtaClick={() => navigate('/gallery')} />


      {/* ─── 4. TRUST / KEY METRICS ───────────────────────── */}

      {/* ─── 5. LARGE EDITORIAL SECTION ────────────────────────────── */}


      {/* ─── 6. SPECIALIZED CARE SHOWCASE (Immersive Stacked Cards) ──── */}
      <SpecializedCareShowcase />

      <section className="home-section trust-metrics-section">
        <div className="container">
          <div className="trust-header fade-up">
            <h2 className="serif-heading">Our Commitment to Better Care</h2>
            <hr className="trust-divider" />
          </div>
          <div className="trust-grid fade-up">
            <div className="trust-item">
              <span className="trust-num">01</span>
              <h4>Experienced Care Team</h4>
              <p>Specialized neonatology & pediatrics.</p>
            </div>
            <div className="trust-item">
              <span className="trust-num">02</span>
              <h4>Child-Centered Approach</h4>
              <p>Gentle, transparent, and empathetic.</p>
            </div>
            <div className="trust-item">
              <span className="trust-num">03</span>
              <h4>Advanced Facilities</h4>
              <p>State-of-the-art diagnostic care.</p>
            </div>
            <div className="trust-item">
              <span className="trust-num">04</span>
              <h4>Comprehensive Support</h4>
              <p>From day one through adolescence.</p>
            </div>
          </div>
        </div>
      </section>


      {/* ─── 7. CARESPLIT (Preserved & Upgraded) ───────────────── */}
      <CareSplit />

      

      {/* ─── 8. TESTIMONIALS ───────────────────────── */}
      <Testimonials />

      {/* ─── 8. FINAL CTA ──────────────────────────── */}
      <BookAppointmentCTA />

    </div>
  );
};

export default Home;
