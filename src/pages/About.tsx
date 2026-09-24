import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link, useNavigate } from 'react-router-dom';
import {
  Activity, ArrowRight, ArrowUpRight, Baby, BadgeCheck, CalendarDays,
  Check, Clock, Eye, GraduationCap, Handshake,
  Heart, HeartPulse, MapPin, Phone, Quote,
  Stethoscope, Target, Trophy, Users,
} from 'lucide-react';

import './about.css';

gsap.registerPlugin(ScrollTrigger);

/* ────────────────────────────── Dummy content ────────────────────────────── */

const DOCTOR = {
  name: 'Dr. Haseen Fathima',
  creds: 'MBBS · M.D. · DNB (Pediatrics)',
  role: 'Founder & Consultant Pediatrician',
  bio: [
    'Dr. Haseen Fathima founded The Children’s Clinic with one simple belief — every child deserves specialist care that feels personal, unhurried and kind. After years in premier medical institutions, she chose to build a practice where parents are heard and children feel at home.',
    'Her approach blends evidence-based medicine with gentle, child-friendly care — from a newborn’s very first check-up to the adventures of the growing years.',
  ],
  quote: 'Treat every child as your own, and every worry as your own — the rest of medicine follows.',
  education: [
    'MBBS — Government Chengalpattu Medical College',
    'MD Pediatrics — Pondicherry Institute of Medical Sciences',
    'DNB (Pediatrics) — Post-doctoral board certification',
    'Senior Residency, Neonatology — JIPMER, Puducherry',
  ],
  certifications: [
    'PALS & NALS certified provider',
    'BLS Instructor (AHA certified)',
    'Advanced training — Neonatal Ventilation',
    'Advanced training — Neonatal POCUS',
  ],
  focusAreas: [
    'Newborn & neonatal care',
    'Growth & developmental monitoring',
    'Childhood nutrition & feeding',
    'Preventive paediatrics & immunisation',
  ],
};

const CLINIC_POINTS = [
  'Paediatric & neonatal specialist care under one roof',
  'Vaccination, growth & developmental monitoring',
  'Child-friendly spaces designed for comfort',
  'Same-day appointments & 24×7 emergency support',
];

const STATS = [
  { icon: Heart, value: 10, suffix: '+', label: 'Years of care' },
  { icon: Baby, value: 12, suffix: 'k+', label: 'Happy families' },
  { icon: Stethoscope, value: 24, suffix: '×7', label: 'Emergency ready' },
  { icon: Users, value: 150, suffix: '+', label: 'New patients every month' },
];

const CREDENTIALS = [
  { icon: GraduationCap, title: 'Education & Training', count: 'Academic milestones', items: DOCTOR.education },
  { icon: BadgeCheck, title: 'Certifications', count: 'Credentials & training', items: DOCTOR.certifications },
  { icon: HeartPulse, title: 'Areas of Focus', count: 'Special clinical interests', items: DOCTOR.focusAreas },
];

const TABS = [
  {
    id: 'vision',
    label: 'Vision',
    icon: Eye,
    heading: 'Our Vision',
    text: 'To be the most trusted children’s clinic in the region — where high-end paediatric and neonatal care is easy to reach, gentle to receive and affordable for every family that walks in.',
  },
  {
    id: 'mission',
    label: 'Mission',
    icon: Target,
    heading: 'Our Mission',
    text: 'To deliver evidence-based paediatric care through unhurried consultations, honest guidance and child-friendly facilities — supporting every child’s growth from the first cry to the first day of school.',
  },
  {
    id: 'promise',
    label: 'Our Promise',
    icon: Handshake,
    heading: 'Our Promise',
    text: 'To treat every child as our own and every parent’s worry as our own. No rushed visits, no unnecessary tests — just careful medicine, clearly explained and kindly delivered.',
  },
];

const JOURNEY = [
  { year: '2016', icon: MapPin, title: 'The first step', text: 'The Children’s Clinic opens its doors as a small paediatric OPD with a big promise: unhurried consultations, honest advice and care that treats children like children.', tags: ['Founding', 'Paediatric OPD'] },
  { year: '2018', icon: Heart, title: 'Newborn care unit', text: 'A dedicated newborn & neonatal care unit brings warmer beds, phototherapy and round-the-clock nursing under one roof, so fragile beginnings get strong support.', tags: ['Neonatology', 'Round-the-clock nursing'] },
  { year: '2020', icon: Clock, title: 'Care beyond the clinic', text: 'Through a challenging year, teleconsultations and home-care guidance keep families connected to their doctor — and remind us why access matters as much as expertise.', tags: ['Teleconsults', 'Home-care guidance'] },
  { year: '2022', icon: Activity, title: 'Growing services', text: 'Vaccination clinics, developmental screening and a child-friendly procedure room expand the clinic into a complete centre for everyday paediatrics.', tags: ['Immunisation', 'Development screening'] },
  { year: '2024', icon: Trophy, title: 'Recognition & milestones', text: 'The clinic crosses 10,000 little patients, earns parent-trust awards and expands its specialist network for cardiology, physiotherapy and nutrition referrals.', tags: ['10k+ patients', 'Specialist network'] },
  { year: '2026', icon: CalendarDays, title: 'The next chapter', text: 'Today we are building proactive, preventive paediatrics — scheduled wellness plans, parenting workshops and same-day slots, so care reaches children before worries do.', tags: ['Wellness plans', 'Workshops'] },
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
      {/* ── 1) Banner — split panel + inset image ── */}
      <section className="abt-banner">
        <div className="abt-blob abt-blob--gold" />
        <div className="abt-blob abt-blob--lav" />
        <div className="container abt-banner__inner">
          <div className="abt-banner__content">
            <span className="abt-banner__eyebrow">The Children’s Clinic — About Us</span>
            <h1 className="abt-banner__title">
              <span className="abt-banner__title-line"><span>Where little</span></span>
              <span className="abt-banner__title-line"><span>hearts come <em>first</em></span></span>
            </h1>
            <p className="abt-banner__sub">
              From first cries to first steps — we’ve grown alongside thousands of families with
              specialist paediatric and neonatal care that always puts your child at ease.
            </p>
            <div className="abt-banner__ctas">
              <button className="abt-btn-gold" onClick={() => navigate('/appointment')}>
                Book an Appointment <ArrowRight size={18} />
              </button>
              <Link to="/services" className="abt-btn-ghost">Explore our services</Link>
            </div>
          </div>
          <div className="abt-banner__media">
            <div className="abt-banner__ring" />
            <div className="abt-banner__frame">
              <img src="/hero_image.jpg" alt="Care at The Children’s Clinic" />
            </div>
          </div>
        </div>
        <div className="abt-scrollhint">Scroll</div>
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
            <h2 className="abt-title">A clinic built around <em>children</em>, not charts</h2>
            <p>
              The Children’s Clinic began with a simple observation: children needed a place that
              didn’t feel like a hospital. So we built one — bright, playful and calm, where a
              stethoscope comes with a smile and no question from a parent is ever too small.
            </p>
            <p>
              From a newborn’s first weigh-in to a teenager’s annual check-up, our clinic brings
              specialist paediatric and neonatal care together in one warm, family-centred space.
              We listen first, explain clearly and treat only what needs treating.
            </p>
            <ul className="abt-checklist">
              {CLINIC_POINTS.map((point) => (
                <li key={point}><Check size={18} /> {point}</li>
              ))}
            </ul>
            <div className="abt-sign">
              <span className="abt-sign__bar" />
              <p>The Children’s Clinic — care that grows with your child.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3) Doctor feature — white panel + arch portrait ── */}
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
                <span className="abt-doctor__exp-num">10+</span>
                <span className="abt-doctor__exp-label">Years of Experience</span>
              </div>
            </div>
          </div>
          <div className="abt-doctor__intro">
            <span className="abt-eyebrow">Meet the doctor</span>
            <h2 className="abt-doctor__name">{DOCTOR.name}</h2>
            <span className="abt-doctor__creds"><GraduationCap size={18} /> {DOCTOR.creds}</span>
            <div>
              <span className="abt-doctor__role"><Stethoscope size={14} /> {DOCTOR.role}</span>
            </div>
            <div className="abt-doctor__bio">
              {DOCTOR.bio.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
            </div>
            <blockquote className="abt-quote">
              <Quote size={26} />
              <p>“{DOCTOR.quote}”</p>
            </blockquote>
            <div className="abt-doctor__sign">
              <p>Dr. Haseen Fathima — {DOCTOR.role}</p>
            </div>
          </div>
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

      {/* ── 4) Vision · Mission · Values ── */}
      <section className="abt-section abt-vmv abt-center">
        <div className="container">
          <div className="abt-section-head">
            <span className="abt-eyebrow abt-eyebrow--line">What guides us</span>
            <h2 className="abt-title">Vision, mission & values</h2>
            <p className="abt-lead">
              Three simple ideas shape every consultation, every protocol and every corner of our clinic.
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
                  <h3 className="abt-vmvcard__heading">{tab.heading}</h3>
                  <span className="abt-vmvcard__kicker">{tab.label}</span>
                  <p className="abt-vmvcard__text">{tab.text}</p>
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
            <span className="abt-eyebrow abt-eyebrow--line">Our journey</span>
            <h2 className="abt-title">Every step, <em>growing with you</em></h2>
            <p className="abt-lead">
              A decade of small wins, big smiles and steady growth — told year by year.
            </p>
          </div>
          <div className="abt-journey__wrap">
            <div className="abt-journey__rail" />
            <div className="abt-journey__fill" ref={railFillRef} />
            {JOURNEY.map((m, i) => (
              <div className={`abt-milestone ${i % 2 === 1 ? 'abt-milestone--flip' : ''}`} key={m.year}>
                <div className="abt-milestone__node">
                  <div className="abt-milestone__dot"><m.icon size={24} /></div>
                </div>
                <div className="abt-milestone__card">
                  <span className="abt-milestone__year">{m.year}</span>
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
            Children don’t remember the days — they remember how the days <em>made them feel</em>.
            At The Children’s Clinic, every visit is designed to feel safe, kind and reassuring.
          </p>
          <p className="abt-closing__note">
            Whether it’s a first vaccine, a sleepless night or a milestone you’re proud of —
            we’re here, at every step of your child’s story.
          </p>
          <div className="abt-closing__ctas">
            <button className="abt-btn-gold" onClick={() => navigate('/appointment')}>
              Book an Appointment <ArrowRight size={18} />
            </button>
            <Link to="/contact" className="abt-btn-ghost abt-btn-ghost--dark">
              Contact Us <ArrowUpRight size={18} />
            </Link>
          </div>
          <p className="abt-closing__contact">
            <Phone size={15} /> +91 98765 43210 <span className="abt-dot-sep" /> <MapPin size={15} /> 12, Sunshine Street, yourcity
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
