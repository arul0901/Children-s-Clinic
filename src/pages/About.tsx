import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link, useNavigate } from 'react-router-dom';
import {
  Activity, ArrowRight, ArrowUpRight, Baby, BadgeCheck,
  ChevronRight, Eye, GraduationCap, Handshake,
  Heart, HeartPulse, MapPin, Quote,
  Stethoscope, Target, Users,
} from 'lucide-react';

import './about.css';
import './services/ServicePage.css';
import FeedingBottle from '../components/common/FeedingBottle';

gsap.registerPlugin(ScrollTrigger);

/* ────────────────────────────── Dummy content ────────────────────────────── */

const DOCTOR = {
  name: 'Dr. Haseen Fathima',
  creds: 'MD, DNB (Pediatrics)',
  tagline: 'Trusted child specialist in Krishnagiri',
  bio: [
    'Dr. Haseen Fathima, MD, DNB (Pediatrics), is a pediatric doctor with 9+ years of experience in caring for newborns, infants and children. Her areas of focus include newborn and neonatal care, lactation and breastfeeding support, child growth and development monitoring, vaccination and the management of common childhood concerns such as fever, cold and cough.',
    'Her clinical focus also includes premature baby care, newborn jaundice and phototherapy, seizures or fits in babies and children, neonatal intensive care and newborn ventilator support. At The Children’s Clinic, the emphasis is on understanding each child\'s individual health needs while providing parents with clear and practical guidance throughout their child\'s healthcare journey.',
  ],
  messageTitle: 'A Message from Dr. Haseen Fathima',
  quote: 'Every child is unique, and every stage of childhood brings its own healthcare needs. My aim is to provide thoughtful, compassionate care while helping parents understand their child’s health, growth and development with confidence.',
  education: [
    'MBBS',
    'MD Pediatrics',
    'DNB (Pediatrics)',
    '9+ Years of Pediatric Experience',
  ],
  clinicalExpertise: [
    'Newborn & neonatal care',
    'Premature baby care',
    'Growth & developmental monitoring',
    'Childhood nutrition & feeding',
  ],
  focusAreas: [
    'Lactation & breastfeeding support',
    'Preventive pediatrics & immunisation',
    'Newborn jaundice & phototherapy',
    'Seizures & pediatric health concerns',
  ],
};

const CLINIC_POINTS = [
  'Newborn & Neonatal Care',
  'Lactation & Breastfeeding Support',
  'Growth & Development Monitoring',
  'Pediatric & Preventive Care',
];

const STATS = [
  { icon: Heart, value: 9, suffix: '+', label: 'Years of Experience' },
  { icon: Baby, value: 15, suffix: '+', label: 'Pediatric & Newborn Care Services' },
  { icon: Stethoscope, value: 100, suffix: '%', label: 'Personalized Attention' },
  { icon: Users, value: 5, suffix: '+', label: 'Core Pediatric Care Areas' },
];

const CREDENTIALS = [
  { icon: GraduationCap, title: '01 — Education & Training', count: 'Academic Qualifications', items: DOCTOR.education },
  { icon: Stethoscope, title: '02 — Clinical Expertise', count: 'Pediatric & Newborn Care', items: DOCTOR.clinicalExpertise },
  { icon: HeartPulse, title: '03 — Areas of Focus', count: 'Special Clinical Interests', items: DOCTOR.focusAreas },
];

const TABS = [
  {
    id: 'vision',
    label: 'Vision',
    icon: Eye,
    emoji: '🌱',
    heading: 'Healthy Childhood, Brighter Futures',
    items: [
      'To help children grow healthy, happy and confident through thoughtful healthcare.',
      'To support their wellbeing at every stage of childhood.',
    ],
  },
  {
    id: 'mission',
    label: 'Mission',
    icon: Target,
    emoji: '🎯',
    heading: 'Care That Supports Every Stage',
    items: [
      'To provide personalized pediatric and newborn care for every child.',
      'To guide parents with clarity, compassion and confidence.',
    ],
  },
  {
    id: 'values',
    label: 'Values',
    icon: Handshake,
    emoji: '❤️',
    heading: 'Compassion in Every Consultation',
    items: [
      'We treat every child with patience, kindness and individual attention.',
      'We build trust with families through safe and responsible care.',
    ],
  },
];

const JOURNEY = [
  {
    step: '01 — The Beginning',
    icon: MapPin,
    title: 'Building a Child-Focused Practice',
    text: 'The Children’s Clinic begins with a simple purpose: to provide thoughtful, accessible and child-centred pediatric care for families in Krishnagiri.',
    tags: ['Child-Centred Care', 'Pediatric Care'],
  },
  {
    step: '02 — Growing Expertise',
    icon: GraduationCap,
    title: 'Experience Built Around Children',
    text: 'With 9+ years of pediatric experience, Dr. Haseen Fathima brings dedicated medical care for newborns, infants and growing children.',
    tags: ['9+ Years', 'Pediatric Expertise'],
  },
  {
    step: '03 — Newborn Care',
    icon: Baby,
    title: 'Supporting the First Days of Life',
    text: 'The focus expands to newborn and neonatal care, including premature baby care and health support during the early stages of life.',
    tags: ['Newborn Care', 'Neonatal Care'],
  },
  {
    step: '04 — Supporting New Mothers',
    icon: Heart,
    title: 'Care Beyond the Consultation',
    text: 'Lactation and breastfeeding support become an important part of helping mothers and babies navigate feeding and early development.',
    tags: ['Lactation Support', 'Breastfeeding Care'],
  },
  {
    step: '05 — Growing With Every Child',
    icon: Activity,
    title: 'Supporting Health at Every Stage',
    text: 'From vaccinations and growth monitoring to common childhood illnesses, care continues as children grow and their healthcare needs change.',
    tags: ['Vaccination', 'Growth & Development'],
  },
  {
    step: '06 — Dedicated Pediatric Care',
    icon: BadgeCheck,
    title: 'A Continuing Commitment to Children',
    text: 'Today, The Children’s Clinic brings together pediatric, newborn and neonatal care with a continued focus on thoughtful support for children and their parents.',
    tags: ['Pediatric Care', 'Parent Support'],
  },
];

/* ────────────────────────────── Component ────────────────────────────── */

const About = () => {
  const navigate = useNavigate();

  const pageRef = useRef<HTMLDivElement>(null);
  const railFillRef = useRef<HTMLDivElement>(null);
  const statNumRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [statsOn, setStatsOn] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* GSAP animations */
  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Hero entrance */
      gsap
        .timeline({ defaults: { ease: 'power3.out' } })
        .fromTo('.abt-banner__eyebrow', { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, 0.15)
        .fromTo('.abt-banner__title-line > span', { yPercent: 110 }, { yPercent: 0, duration: 0.9, stagger: 0.12 }, 0.25)
        .fromTo('.abt-banner__sub', { y: 26, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, 0.55)
        .fromTo('.abt-banner__ctas > *', { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 }, 0.7)
        .fromTo('.abt-banner__media', { clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)', duration: 1.1 }, 0.35)
        .fromTo('.abt-scrollhint', { opacity: 0 }, { opacity: 1, duration: 0.8 }, 1.1);

      /* Image reveals */
      gsap.fromTo(
        '.abt-about__frame',
        { clipPath: 'inset(100% 0 0 0)' },
        { clipPath: 'inset(0% 0 0 0)', duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: '.abt-about', start: 'top 70%' } },
      );
      gsap.fromTo(
        '.abt-doctor__arch',
        { clipPath: 'inset(0 0 100% 0)' },
        { clipPath: 'inset(0 0 0% 0)', duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: '.abt-doctor', start: 'top 70%' } },
      );

      /* Scroll reveals */
      const reveal = (targets: string) => {
        gsap.utils.toArray<HTMLElement>(targets).forEach((el) => {
          gsap.fromTo(
            el,
            { y: 44, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 86%' } },
          );
        });
      };
      reveal('.abt-section-head > *');
      reveal('.abt-about__copy > *');
      reveal('.abt-about__media');
      reveal('.abt-doctor__intro > *');
      reveal('.abt-cred');
      reveal('.abt-vmvcard');
      reveal('.abt-statcard');
      reveal('.abt-milestone__card');
      reveal('.abt-milestone__node');
      reveal('.abt-closing__inner > *');

      /* Journey rail fill */
      gsap.fromTo(
        railFillRef.current,
        { height: '0%' },
        { height: '100%', ease: 'none', scrollTrigger: { trigger: '.abt-journey__wrap', start: 'top 65%', end: 'bottom 60%', scrub: 0.6 } },
      );

      /* Stats count-up trigger */
      ScrollTrigger.create({
        trigger: '.abt-stats',
        start: 'top 82%',
        once: true,
        onEnter: () => setStatsOn(true),
      });
    }, pageRef);

    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener('load', onLoad);
    return () => {
      window.removeEventListener('load', onLoad);
      ctx.revert();
    };
  }, []);

  /* Count-up animation when the stats band scrolls into view */
  useEffect(() => {
    if (!statsOn) return;
    const finalize = () => {
      STATS.forEach((s, i) => {
        const el = statNumRefs.current[i];
        if (el) el.textContent = String(s.value);
      });
    };
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      finalize();
      return;
    }
    const objs = STATS.map(() => ({ v: 0 }));
    objs.forEach((o, i) => {
      gsap.to(o, {
        v: STATS[i].value,
        duration: 1.8,
        delay: 0.15 * i,
        ease: 'power2.out',
        onUpdate: () => {
          const el = statNumRefs.current[i];
          if (el) el.textContent = String(Math.round(o.v));
        },
      });
    });
  }, [statsOn]);

  return (
    <div className="abt-page" ref={pageRef}>
      {/* ── Hero Banner (Service Detail Style) ── */}
      <section className="sd-hero">
        <img className="sd-hero-bg" src="/banner.png" alt="About The Children's Clinic" />
        <div className="sd-hero-overlay">
          <div className="container sd-hero-inner">
            <h1>About Us</h1>
            <nav className="sd-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <ChevronRight size={14} />
              <span>About Us</span>
            </nav>
          </div>
        </div>
      </section>

      {/* ── Doctor Section ── */}
      <section className="abt-section abt-doctor">
        <div className="container">
          <div className="abt-doctor__panel">
            <div className="abt-doctor__media">
              <div className="abt-doctor__archwrap">
                <div className="abt-doctor__arch-outline" />
                <div className="abt-doctor__arch">
                  <img src="/doctor_portrait.jpg" alt={DOCTOR.name} />
                </div>
                <div className="abt-doctor__exp">
                  <span className="abt-doctor__exp-num">9+</span>
                  <span className="abt-doctor__exp-label">Years of Experience</span>
                </div>
              </div>
            </div>
            <div className="abt-doctor__intro">
              <span className="abt-eyebrow">Meet</span>
              <h2 className="abt-doctor__name">{DOCTOR.name}</h2>
              <h2 className="abt-doctor__h2-tagline">
                {DOCTOR.tagline}
              </h2>
              <div className="abt-doctor__bio">
                {DOCTOR.bio.map((p, idx) => <p key={idx}>{p}</p>)}
              </div>
              <blockquote className="abt-quote">
                <Quote size={26} />
                <div className="abt-quote__box">
                  <h4 className="abt-quote__heading">{DOCTOR.messageTitle}</h4>
                  <p>“{DOCTOR.quote}”</p>
                </div>
              </blockquote>
            </div>
          </div>

          <div className="abt-cred__section-head">
            <h2 className="abt-cred__main-title font-plus-jakarta">Doctor Expertise</h2>
          </div>

          <div className="abt-cred__panel">
            {CREDENTIALS.map((cred, i) => {
              const CredIcon = cred.icon;
              return (
                <article className="abt-cred" key={cred.title}>
                  <div className="abt-cred__head">
                    <span className="abt-cred__glyph"><CredIcon size={20} /></span>
                    <span>
                      <h3 className="abt-cred__title">{cred.title}</h3>
                      <span className="abt-cred__count">{cred.count}</span>
                    </span>
                    <span className="abt-cred__index">0{i + 1}</span>
                  </div>
                  <ul className="abt-cred__list">
                    {cred.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 2) About the clinic ── */}
      <section className="abt-section abt-about">
        <div className="container abt-about__grid">
          <div className="abt-about__media">
            <div className="abt-about__ring" />
            <div className="abt-about__frame">
              <img src="/services_image.jpg" alt="Inside The Children’s Clinic" />
            </div>
          </div>
          <div className="abt-about__copy">
            <span className="abt-eyebrow">About the clinic</span>
            <h2 className="abt-title">About The Children’s Clinic in Krishnagiri</h2>
            <p>
              The Children’s Clinic in Krishnagiri provides child-focused pediatric and newborn care under the guidance of <span className="font-happy-monkey"> Dr. Haseen Fathima, MD, DNB (Pediatrics), with 9+ years of experience.</span> The clinic focuses on supporting children through different stages of growth, from newborn care and breastfeeding support to vaccination and common childhood health concerns.
            </p>
            <p>
              Care also extends to neonatal care, premature baby care, growth and development monitoring, newborn jaundice and phototherapy, seizures or fits, and neonatal intensive care needs. The focus is on understanding each child's needs while providing parents with clear, practical guidance.
            </p>
            
            <h3 className="abt-focus-title font-happy-monkey">
              What We Focus On
            </h3>
            <ul className="abt-checklist">
              {CLINIC_POINTS.map((point) => (
                <li key={point}>
                  <FeedingBottle size={18} color="var(--color-gold)" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="abt-sign">
              <span className="abt-sign__bar" />
              <p>Every child deserves care that understands their unique needs and every parent deserves guidance they can trust.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3) Doctor feature — white panel + arch portrait ── */}
      

      {/* ── 4) Vision · Mission · Values ── */}
      <section className="abt-section abt-vmv abt-center">
        <div className="container">
          <div className="abt-section-head">
            <span className="abt-eyebrow abt-eyebrow--line">What guides us</span>
            <h2 className="abt-title">Vision, mission & values</h2>
            <p className="abt-lead">
              Guided by compassion, trust and child-centred care, we are committed to supporting every child’s health, growth and wellbeing while giving parents clear and thoughtful guidance.
            </p>
          </div>
          <div className="abt-vmv__grid">
            {TABS.map((tab, i) => {
              const CardIcon = tab.icon;
              return (
                <article
                  className={`abt-vmvcard ${i === 1 ? 'abt-vmvcard--feature' : ''}`}
                  key={tab.id}
                >
                  <span className="abt-vmvcard__icon"><CardIcon size={26} /></span>
                  <span className="abt-vmvcard__kicker">{tab.emoji} {tab.label}</span>
                  <h3 className="abt-vmvcard__heading">{tab.heading}</h3>
                  <ul className="abt-vmvcard__list">
                    {tab.items.map((item, idx) => (
                      <li key={idx} className="abt-vmvcard__item">
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="abt-vmvcard__num">0{i + 1}</span>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4b) Stats band ── */}
      <section className="abt-stats">
        <div className="container abt-stats__grid">
          {STATS.map((s, i) => {
            const SIcon = s.icon;
            return (
              <div className="abt-statcard" key={s.label}>
                <span className="abt-statcard__icon"><SIcon size={22} /></span>
                <div className="abt-statcard__value">
                  <span ref={(el) => { statNumRefs.current[i] = el; }}>0</span>{s.suffix}
                </div>
                <div className="abt-statcard__label">{s.label}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── 5) Journey — milestones ── */}
      <section className="abt-section abt-journey">
        <div className="container">
          <div className="abt-section-head abt-center">
            <span className="abt-eyebrow abt-eyebrow--line">Our Journey</span>
            <h2 className="abt-title">Our Journey</h2>
            <p className="abt-lead">
              From the early days of pediatric care to a growing focus on newborn, neonatal and childhood healthcare, our journey is shaped by experience, compassion and a continued commitment to supporting every child and family.
            </p>
          </div>
          <div className="abt-journey__wrap">
            <div className="abt-journey__rail" />
            <div className="abt-journey__fill" ref={railFillRef} />
            {JOURNEY.map((m, i) => (
              <div className={`abt-milestone ${i % 2 === 1 ? 'abt-milestone--flip' : ''}`} key={m.step}>
                <div className="abt-milestone__node">
                  <div className="abt-milestone__dot"><m.icon size={24} /></div>
                </div>
                <div className="abt-milestone__card">
                  <span className="abt-milestone__year">{m.step}</span>
                  <h3>{m.title}</h3>
                  <p>{m.text}</p>
                  <div className="abt-milestone__tags">
                    {m.tags.map((t) => <span className="abt-tag" key={t}>{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6) Closing thought ── */}
      <section className="abt-closing">
        <div className="abt-closing__glow" />
        <div className="container abt-closing__inner abt-center">
          <div className="abt-closing__quote-mark">“</div>
          <p className="abt-closing__text">
           Be There for Every Milestone, Every Concern and <em>Every Stage of Your Child’s Growing Years</em>
          </p>
          <p className="abt-closing__note">
            Get thoughtful pediatric and newborn care from a team focused on your child’s <span className="font-happy-monkey">health, growth and development,</span> with clear guidance for parents along the way.
          </p>
          <div className="abt-closing__ctas">
            <button className="abt-btn-gold" onClick={() => navigate('/appointment')}>
               Book a Consultation <ArrowRight size={18} />
            </button>
            <Link to="/contact" className="abt-btn-ghost abt-btn-ghost--dark">
              Contact the Clinic <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
