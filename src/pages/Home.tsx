import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Baby, HeartPulse, Syringe, Droplets, Thermometer, Activity, Sun, Zap, Shield, AlertCircle, Wind, TrendingUp, Heart } from 'lucide-react';
import { HeroStatic, HolisticWellness, SpecializedCareShowcase, CareSplit, HospitalInfrastructure, BookAppointmentCTA, Testimonials } from '../components';

import './Home.css';

gsap.registerPlugin(ScrollTrigger);

const SPECIALTIES = [
  { name: 'Newborn Care',                  Icon: Baby,          id: 'newborn-care' },
  { name: 'Neonatal Care',                 Icon: HeartPulse,    id: 'neonatal-care' },
  { name: 'Lactation Support',             Icon: Droplets,      id: 'lactation-support' },
  { name: 'Breastfeeding Support',         Icon: Heart,         id: 'breastfeeding-support' },
  { name: 'Premature Baby Care',           Icon: Shield,        id: 'premature-baby-care' },
  { name: 'Growth & Development',          Icon: TrendingUp,    id: 'growth-development' },
  { name: 'Vaccination',                   Icon: Syringe,       id: 'vaccination' },
  { name: 'Fever Care',                    Icon: Thermometer,   id: 'fever-care' },
  { name: 'Cold & Cough Care',             Icon: Wind,          id: 'cold-cough-care' },
  { name: 'Newborn Jaundice & Phototherapy', Icon: Sun,         id: 'jaundice-phototherapy' },
  { name: 'Seizures & Fits Care',          Icon: Zap,           id: 'seizures-fits' },
  { name: 'Neonatal Intensive Care',       Icon: Activity,      id: 'neonatal-icu' },
  { name: 'Newborn Ventilator Support',    Icon: Wind,          id: 'ventilator-support' },
  { name: 'Pediatric Intensive Care',      Icon: AlertCircle,   id: 'pediatric-icu' },
  { name: 'Pediatric Emergency Care',      Icon: AlertCircle,   id: 'pediatric-emergency' },
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
      <section className="home-section bg-lavender home-section-compact">
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
                      <span className="specialty-pill-name">{spec.name}</span>
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
                      <span className="specialty-pill-name">{spec.name}</span>
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
            <h2 className="serif-heading">Dedicated to Your Child’s Wellbeing </h2>
            <hr className="trust-divider" />
          </div>
          <div className="trust-grid fade-up">
            <div className="trust-item">
              <span className="trust-num">01</span>
              <h4>Trusted Pediatric Care</h4>
              <p> Reliable care focused on your child’s wellbeing.</p>
            </div>
            <div className="trust-item">
              <span className="trust-num">02</span>
              <h4>Individual Attention</h4>
              <p> Personalized care for every child’s needs.</p>
            </div>
            <div className="trust-item">
              <span className="trust-num">03</span>
              <h4>Safe & Caring Environment</h4>
              <p> A comfortable setting for children and parents.</p>
            </div>
            <div className="trust-item">
              <span className="trust-num">04</span>
              <h4>Support for Parents</h4>
              <p>Clear guidance to help parents feel confident.</p>
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
