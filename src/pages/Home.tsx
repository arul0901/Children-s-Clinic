import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight, Stethoscope, Baby, ShieldPlus, HeartPulse, Hospital, Clock, ArrowRight, Users, Syringe, Droplets, Apple, Brain } from 'lucide-react';
import HeroStatic from '../components/HeroStatic';
import SpecializedCareShowcase from '../components/SpecializedCareShowcase';
import CareSplit from '../components/CareSplit';
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

      {/* ─── 3. NUMBERED SERVICE CARDS ───────────────────────── */}
      <section className="home-section" id="services" >
        <div className="container">
          <div className="section-header fade-up" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="eyebrow">Comprehensive Care</span>
            <h2 className="serif-heading" style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)' }}>
              Dedicated to every stage.
            </h2>
          </div>

          <div className="premium-services-grid">
            {SERVICES.map((s, i) => (
              <div
                className="premium-service-card fade-up"
                key={i}
                onClick={() => navigate(s.link)}
              >
                <div className="card-top-row">
                  <div className="service-icon-minimal">
                    {s.icon}
                  </div>
                  <span className="service-number">{String(i + 1).padStart(2, '0')}.</span>
                </div>
                <div className="card-content-area">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
                <div className="card-graphic-area">
                  <div className="graphic-shape shape-left" style={{ backgroundImage: `url(${s.img})` }}></div>
                  <div className="graphic-shape shape-center" style={{ backgroundImage: `url(${s.img})` }}></div>
                  <div className="graphic-shape shape-right" style={{ backgroundImage: `url(${s.img})` }}></div>
                </div>
                <div className="card-bottom-row">
                  <span className="learn-more-text">Learn More</span>
                  <div className="service-arrow">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. TRUST / KEY METRICS ───────────────────────── */}
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

      {/* ─── 5. LARGE EDITORIAL SECTION ────────────────────────────── */}
      <section className="home-section editorial-section">
        <div className="container editorial-grid">
          <div className="editorial-content fade-up">
            <span className="eyebrow">Holistic Wellness</span>
            <h2 className="serif-heading editorial-title">
              Thoughtful care at every stage of childhood.
            </h2>
            <p className="editorial-desc">
              We believe that caring for an unwell child can feel overwhelming. Our role is to stand beside you, explain every decision clearly, and guide your family every step of the way with the most advanced pediatric practices available.
            </p>
            <button className="btn-secondary" onClick={() => navigate('/about')} style={{ marginTop: '2rem' }}>
              Explore Our Care
            </button>
          </div>

          <div className="editorial-image-wrapper fade-up">
            <img src="/service_editorial_1_1789990863800.jpg" alt="Parent and child in warm consultation" className="editorial-main-img" />
            <div className="editorial-floating-card">
              <h4>Newborn Care</h4>
              <p>Gentle support during the earliest stages.</p>
              <span className="floating-explore">Explore <ArrowRight size={16} style={{ marginLeft: '4px' }} /></span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. SPECIALIZED CARE SHOWCASE (Immersive Stacked Cards) ──── */}
      <SpecializedCareShowcase />

      {/* ─── 7. CARESPLIT (Preserved & Upgraded) ───────────────── */}
      <CareSplit />

      {/* ─── 7. VISION & MISSION (Humanized & Warm Layout) ─── */}
      <section className="hvm-section" id="vision-mission">
        <div className="container">
          <div className="section-header fade-up" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="eyebrow">Our Foundation</span>
            <h2 className="serif-heading" style={{ fontSize: 'clamp(2.4rem, 4vw, 3.4rem)', color: 'var(--color-primary-dark)' }}>
              Vision & Mission
            </h2>
          </div>

          <div className="hvm-grid">
            {/* Our Vision Card */}
            <div className="hvm-card fade-up">
              <div className="hvm-card-top">
                <span className="hvm-label">01 / Our Vision</span>
                <h3 className="hvm-card-title">Where Every Child Thrives</h3>
              </div>

              <p className="hvm-text">
                To be the region's most trusted pediatric and neonatal center, setting the benchmark for compassionate, evidence-based healthcare where every child can thrive and reach their full potential in a safe, nurturing environment.
              </p>

              <div className="hvm-card-footer">
                <span className="hvm-dot"></span>
                <span>Compassionate & Evidence-Based Pediatric Care</span>
              </div>
            </div>

            {/* Our Mission Card */}
            <div className="hvm-card fade-up">
              <div className="hvm-card-top">
                <span className="hvm-label">02 / Our Mission</span>
                <h3 className="hvm-card-title">Dedicated to Family Well-being</h3>
              </div>

              <p className="hvm-text">
                To provide world-class, holistic medical care to infants, children, and adolescents through advanced clinical expertise, transparent communication with families, and a deep commitment to preventive health and overall well-being.
              </p>

              <div className="hvm-card-footer">
                <span className="hvm-dot"></span>
                <span>Clinical Expertise & Transparent Communication</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 8. TESTIMONIALS ───────────────────────── */}
      <section className="home-section bg-lavender">
        <div className="container">
          <div className="section-header fade-up" style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span className="eyebrow">What Parents Say</span>
          </div>

          <div className="testimonial-carousel fade-up">
            <div className="testimonial-view">
              {TESTIMONIALS.map((t, i) => {
                const isMobileActive = i === testIdx;
                const isDesktopActive1 = i === testIdx;
                const isDesktopActive2 = i === (testIdx + 1) % TESTIMONIALS.length;

                return (
                  <div
                    key={i}
                    className={`testimonial-slide ${isMobileActive ? 'mobile-active' : ''} ${isDesktopActive1 ? 'desktop-active-1' : ''} ${isDesktopActive2 ? 'desktop-active-2' : ''}`}
                  >
                    <p className="testimonial-quote">"{t.quote}"</p>
                    <p className="testimonial-author">{t.author}</p>
                    <p className="testimonial-role">{t.role}</p>
                  </div>
                );
              })}
            </div>

            <div className="testimonial-nav">
              <button className="test-arrow" onClick={prevTest} aria-label="Previous">
                <ChevronLeft size={20} />
              </button>
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  className={`test-dot ${i === testIdx ? 'active' : ''}`}
                  onClick={() => setTestIdx(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
              <button className="test-arrow" onClick={nextTest} aria-label="Next">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 8. FINAL CTA ──────────────────────────── */}
      <section className="final-cta-section">
        <div className="container final-cta-content fade-up">
          <span className="eyebrow" style={{ color: 'var(--color-lavender-light)' }}>Take the First Step</span>
          <h2 className="serif-heading">Your child's health deserves thoughtful, expert care.</h2>
          <button className="btn-primary" style={{ backgroundColor: 'var(--color-gold)', borderColor: 'var(--color-gold)' }} onClick={() => navigate('/appointment')}>
            Book an Appointment
          </button>
        </div>
      </section>

    </div>
  );
};

export default Home;
