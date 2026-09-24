import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Stethoscope, Baby, HeartPulse, Users, Syringe, Droplets } from 'lucide-react';
import { HeroStatic, HolisticWellness, SpecializedCareShowcase, CareSplit, HospitalInfrastructure, BookAppointmentCTA, Testimonials } from '../components';

import './Home.css';

gsap.registerPlugin(ScrollTrigger);

const SPECIALTIES = [
  { name: 'Internal Medicine', Icon: Stethoscope, id: 'stethoscope' },
  { name: 'Family Medicine', Icon: Users, id: 'users' },
  { name: 'Pediatrics', Icon: Baby, id: 'baby' },
  { name: 'Neonatology', Icon: HeartPulse, id: 'heartpulse' },
  { name: 'Immunisation', Icon: Syringe, id: 'syringe' },
  { name: 'Lactation', Icon: Droplets, id: 'droplets' }
];

const Home = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

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
