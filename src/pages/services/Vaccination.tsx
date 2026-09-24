import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, NavLink } from 'react-router-dom';
import { ChevronRight, Download, Headphones, Minus, Plus } from 'lucide-react';
import FeedingBottle from '../../components/common/FeedingBottle';
import './ServicePage.css';
import './ServiceSidebar.css';
  
const PHONE = '+91 XXXXX XXXXX';

const SERVICES = [
  { id: 'newborn-care', label: 'New Born Care' },
  { id: 'pediatric-care', label: 'Pediatric Care' },
  { id: 'neonatal-care', label: 'Neonatal Care' },
  { id: 'vaccination', label: 'Vaccination' },
  { id: 'lactation-support', label: 'Lactation Support' },
];

const newbornCare = {
  title: 'New Born Care',
  heroImage: '/service_neonatal_care_1789988898999.jpg',
  overview: [
    'The first month of life is the most closely watched chapter of childhood. A newborn is learning to feed, regulate temperature, clear jaundice, and settle into a sleep rhythm, often all in the same day. Our newborn care visits are built for that pace: unhurried exams, clear explanations, and a plan you can follow at home.',
    'Every baby is seen soon after hospital discharge. We compare birth weight with the current weight, watch how feeding is going, check the skin and cord, and look for jaundice before it becomes a worry. Parents leave with a written sense of what is expected this week and what should prompt a call.',
    'Care continues through the early follow-up and the one-month visit. Growth, feeding method, sleep, and the first developmental responses are reviewed together, so small changes are noticed early. Breastfeeding, expressed milk, and formula are all supported. The goal is a well-fed baby and a parent who feels steady.',
    'Between visits, the same team remains available for questions about night waking, cluster feeding, spit-up, rashes, and the ordinary surprises of the first weeks. Newborn care here is not a single check-up. It is a short, guided stretch of care from the day you come home until the first month is safely behind you.',
  ],
  keyPoints: [
    { title: 'First-week assessment', description: 'A full exam within days of birth, covering weight change, temperature, tone, reflexes, heart, lungs, hips, and the healing cord.' },
    { title: 'Jaundice screening', description: 'Skin review and bilirubin testing when needed, with a clear plan for home observation or phototherapy follow-up.' },
    { title: 'Feeding review', description: 'Latch, bottle flow, wet diapers, stools, and weight are checked together so intake is measured, not guessed.' },
    { title: 'Cord and skin care', description: 'Guidance on keeping the cord clean and dry, and on common rashes, dryness, and newborn acne that do not need treatment.' },
    { title: 'Safe sleep coaching', description: 'A firm, flat sleep surface, back sleeping, and a clear cot, explained in practical terms for night feeds.' },
    { title: 'Illness warning signs', description: 'What fever, poor feeding, breathing effort, and unusual sleepiness look like in a baby under two months, and when to come in the same day.' },
    { title: 'Growth tracking', description: 'Weight, length, and head circumference plotted over the first visits so a slow gain is seen before it becomes a problem.' },
    { title: 'Parent questions', description: 'Time set aside for night routine, visitors, bathing, vitamin drops, and the worries that do not fit into a symptom list.' },
  ],
  schedule: {
    columns: ['Visit', 'When', 'What we review'],
    rows: [
      ['First clinic visit', '2–5 days after birth', 'Weight change, feeding, jaundice, cord, and a full exam'],
      ['Feeding check', 'Same week if gain is slow', 'Latch or bottle flow, diapers, stools, and a follow-up weight'],
      ['Jaundice review', 'As bilirubin requires', 'Colour, feeding, hydration, and whether light treatment is needed'],
      ['Early follow-up', 'Around 2 weeks', 'Growth curve, cord healing, sleep, and parent questions'],
      ['One-month visit', '4 weeks', 'Weight, length, head growth, feeding pattern, and the next plan'],
      ['Urgent review', 'Same day if needed', 'Fever, poor feeding, laboured breathing, or marked sleepiness'],
    ],
  },
  center: {
    title: 'Care Center',
    intro: 'The newborn rooms are quiet, warm, and set up for a baby who may need to feed midway through the visit. Parents stay beside the cot for the entire exam. Scales, a bilirubin check, and time with the clinician are in the same space, so you are not moved from room to room with a newborn.',
    quote: 'The first weeks are a time of rapid change. We watch weight, feeding, jaundice, and sleep closely so small concerns are caught early and parents leave feeling confident.',
    images: [
      { src: '/phototherapy_treatment_1789989308209.jpg', caption: 'Jaundice screening and gentle phototherapy when bilirubin levels need close follow-up.' },
      { src: '/doctor_portrait_1789986143658.jpg', caption: 'One-to-one guidance on feeding, cord care, safe sleep, and what is normal in the first month.' },
    ],
  },
  guidance: [
    { title: 'When to call the same day', content: 'Contact the clinic immediately if a baby under two months has a fever of 100.4°F (38°C) or higher, is too sleepy to feed, has fewer wet diapers than expected, breathes with effort, or looks pale, blue, or yellowing quickly. These are not wait-until-morning concerns.' },
    { title: 'What to bring', content: 'Bring the hospital discharge summary, the baby’s weight at birth and at discharge, any feeding notes, and a list of questions. Dress the baby in clothes that open easily so the exam stays calm and brief.' },
    { title: 'What is ordinary', content: 'A small weight drop in the first days, frequent night waking, hiccups, sneezes, mild spit-up, and peeling skin are common. We still review them at the visit, because “common” and “fine for this baby” are not always the same thing.' },
    { title: 'How visits are paced', content: 'Appointments are kept long enough for a feed to be observed if needed. You will not be rushed through weight, jaundice, and questions in a few minutes. If a concern needs a closer look, the next step is arranged before you leave.' },
  ],
  faqs: [
    { question: 'When should my newborn have their first clinic visit?', answer: 'Usually within 2 to 5 days after birth, or 1 to 2 days after leaving the hospital. Babies who were early, small, or treated for jaundice are often seen even sooner. We confirm the timing from the discharge note.' },
    { question: 'How do I know if my baby is getting enough milk?', answer: 'By the end of the first week, most well-fed newborns have about 6 or more wet diapers a day, regular stools, and a return toward birth weight. We weigh the baby at each visit and, when useful, watch a feed so the plan is based on intake, not worry alone.' },
    { question: 'Is it normal for my baby to sleep all day?', answer: 'Newborns often sleep 14 to 17 hours across a day, in short stretches. They should still wake to feed about every 2 to 3 hours in the early weeks. A baby who cannot be woken for feeds, or who seems floppy, needs a same-day review.' },
    { question: 'How much weight loss is expected after birth?', answer: 'Many babies lose a little weight in the first few days, then begin to gain. We compare birth weight, discharge weight, and today’s weight. If the drop is larger than expected, or gain is slow, feeding support is started at that visit rather than waiting.' },
    { question: 'What does newborn jaundice look like, and when is it urgent?', answer: 'A yellow tone on the face that moves down the chest can appear in the first week. Mild cases are watched. Deepening colour, poor feeding, or sleepiness needs a bilirubin check the same day. We tell you which pattern fits your baby before you go home.' },
    { question: 'How should I care for the umbilical cord?', answer: 'Keep the cord stump clean and dry, fold the nappy below it, and avoid pulling it. It usually separates in the first one to two weeks. Redness spreading onto the skin, a foul smell, or bleeding that does not stop with gentle pressure should be seen promptly.' },
    { question: 'Can I bathe my baby in the first week?', answer: 'A sponge bath is enough until the cord has fallen off and the area is dry. Keep the room warm, wash the face with water, and use a mild cleanse only where needed. We go through a simple routine at the first visit if you would like one demonstrated.' },
    { question: 'Who can I ask between appointments?', answer: 'Feeding, sleep, rashes, and “is this normal?” questions can be brought to the clinic between scheduled visits. If the baby is under two months and has a fever, trouble breathing, or will not feed, do not wait for a routine slot. Call for a same-day review.' },
  ],
};

const NewbornCare = () => {
  const navigate = useNavigate();
  const pageRef = useRef<HTMLDivElement>(null);
  const [openFaqs, setOpenFaqs] = useState<number[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const page = pageRef.current;
    if (!page) return;
    page.classList.add('sd-motion');

    const nodes = page.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.2, rootMargin: '0px 0px -6% 0px' });

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaqs((current) =>
      current.includes(index) ? current.filter((item) => item !== index) : [...current, index]
    );
  };

  return (
    <div className="sd-page" ref={pageRef}>
      <section className="sd-hero">
        <img className="sd-hero-bg" src={newbornCare.heroImage} alt="" />
        <div className="sd-hero-overlay">
          <div className="container sd-hero-inner">
            <h1>{newbornCare.title}</h1>
            <nav className="sd-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <ChevronRight size={14} />
              <Link to="/services">Services</Link>
              <ChevronRight size={14} />
              <span>{newbornCare.title}</span>
            </nav>
          </div>
        </div>
      </section>

      <section className="sd-body">
        <div className="container sd-layout">
          <aside className="service-sidebar">
            <nav className="service-sidebar-nav" aria-label="Services">
              <ul>
                {SERVICES.map((item) => (
                  <li key={item.id}>
                    <NavLink
                      to={`/services/${item.id}`}
                      className={({ isActive }) => `service-sidebar-link${isActive ? ' active' : ''}`}
                    >
                      <span>{item.label}</span>
                      <ChevronRight size={18} />
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="service-sidebar-advice">
              <Headphones size={42} strokeWidth={1.5} />
              <h2>Contact with us for any advice</h2>
              <p>Need help? Talk to an expert</p>
              <a href={`tel:${PHONE.replace(/\s/g, '')}`}>{PHONE}</a>
            </div>
            <button type="button" className="service-sidebar-book" onClick={() => navigate('/appointment')}>
              <Download size={18} />
              Book a visit
            </button>
          </aside>

          <article className="sd-content">
            <div className="sd-feature">
              <img src={newbornCare.heroImage} alt={newbornCare.title} />
            </div>

            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              Service Overview
            </h2>
            {newbornCare.overview.map((paragraph) => (
              <p key={paragraph} className="sd-copy sd-reveal sd-text" data-reveal>{paragraph}</p>
            ))}

            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              Key Points
            </h2>
            <ul className="sd-points" data-reveal>
              {newbornCare.keyPoints.map((point, index) => (
                <li key={point.title} style={{ animationDelay: `${index * 0.28}s` }}>
                  <FeedingBottle size={22} color="var(--color-primary)" className="sd-bottle-icon" />
                  <div>
                    <strong>{point.title}</strong>
                    <p>{point.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              Care Schedule
            </h2>
            <div className="sd-table-wrap sd-reveal" data-reveal>
              <table className="sd-table">
                <thead>
                  <tr>
                    {newbornCare.schedule.columns.map((column) => (
                      <th key={column}>{column}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {newbornCare.schedule.rows.map((row) => (
                    <tr key={row[0]}>
                      {row.map((cell) => (
                        <td key={cell}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              {newbornCare.center.title}
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>{newbornCare.center.intro}</p>
            <blockquote className="sd-quote sd-reveal sd-text" data-reveal>{newbornCare.center.quote}</blockquote>

            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              Guidance for Parents
            </h2>
            <div className="sd-notes">
              {newbornCare.guidance.map((item) => (
                <article key={item.title} className="sd-reveal sd-text" data-reveal>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </article>
              ))}
            </div>

            <div className="sd-gallery">
              {newbornCare.center.images.map((image) => (
                <figure key={image.src}>
                  <img src={image.src} alt="" />
                  <figcaption className="sd-reveal sd-text" data-reveal>{image.caption}</figcaption>
                </figure>
              ))}
            </div>

            <h2 className="sd-heading sd-faq-title sd-reveal" data-reveal>Frequently Asked Question</h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              Common questions families ask about new born care, with clear answers from our care team.
            </p>
            <div className="sd-faq">
              {newbornCare.faqs.map((faq, index) => {
                const open = openFaqs.includes(index);
                return (
                  <div key={faq.question} className={`sd-faq-item ${open ? 'open' : ''}`}>
                    <button type="button" className="sd-faq-q" aria-expanded={open} onClick={() => toggleFaq(index)}>
                      <span>{faq.question}</span>
                      {open ? <Minus size={18} /> : <Plus size={18} />}
                    </button>
                    <div className="sd-faq-a">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default NewbornCare;
