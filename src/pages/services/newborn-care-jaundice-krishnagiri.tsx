import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Minus, Plus,
  MapPin, ArrowRight, AlertCircle,
  ExternalLink
} from 'lucide-react';
import FeedingBottle from '../../components/common/FeedingBottle';
import ServiceSidebar from './ServiceSidebar';
import './ServicePage.css';
import './ServiceSidebar.css';

const FAQS = [
  {
    question: "Where can I get newborn care in Krishnagiri?",
    answer: "The Children's Clinic provides newborn care in Krishnagiri, including support for newborn health concerns, premature babies, feeding concerns and jaundice."
  },
  {
    question: "What causes newborn jaundice?",
    answer: "Newborn jaundice occurs when bilirubin builds up in the baby's blood, causing yellowing of the skin or eyes. It is common in newborns, but the baby's age, bilirubin level and clinical condition determine whether assessment or treatment is needed."
  },
  {
    question: "Does every newborn with jaundice need treatment?",
    answer: "No. Not every newborn with jaundice requires treatment. The need for treatment depends on factors such as the baby's age, bilirubin level, gestational age and overall clinical condition."
  },
  {
    question: "What is phototherapy for newborn jaundice?",
    answer: "Phototherapy is a treatment that uses specific light to help lower bilirubin levels when treatment is clinically indicated. The decision to use phototherapy depends on the baby's individual assessment."
  },
  {
    question: "When should I take my baby to a doctor for jaundice?",
    answer: "Seek medical assessment if your newborn develops noticeable jaundice, particularly when you are concerned about the baby's feeding, alertness or general condition, or if the baby appears seriously unwell."
  },
  {
    question: "Can premature babies develop jaundice?",
    answer: "Yes. Premature babies can develop jaundice and may require individualized monitoring depending on their gestational age, bilirubin level and overall health."
  },
  {
    question: "Can breastfeeding difficulties affect newborn care?",
    answer: "Feeding concerns can be relevant when assessing a newborn's overall health. If breastfeeding is difficult, parents may benefit from appropriate lactation and pediatric guidance."
  },
  {
    question: "What should I bring to a newborn consultation?",
    answer: "Parents can bring birth records, discharge summaries, previous reports, bilirubin results, weight information and details about feeding or previous treatment."
  },
  {
    question: "When does a newborn need urgent medical attention?",
    answer: "A newborn needs prompt medical assessment when there is significant breathing difficulty, marked reduced responsiveness, serious feeding difficulty, suspected seizures, repeated vomiting, significant deterioration or other signs that the baby is seriously unwell."
  },
  {
    question: "Where is The Children's Clinic located?",
    answer: "The Children's Clinic is located at 35/13, 2nd Cross Rd, Co-operative Colony, Thiruvalluvar Nagar, Krishnagiri, Tamil Nadu 635002."
  }
];

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
    }, { threshold: 0.15, rootMargin: '0px 0px -5% 0px' });

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
      {/* ── 1) Hero Banner ── */}
      <section className="sd-hero">
        <img className="sd-hero-bg" src="/newborn-banner.jpg" alt="Newborn Care in Krishnagiri" />
        <div className="sd-hero-overlay">
          <div className="container sd-hero-inner">
            <h2 className="font-plus-jakarta banner-font">Newborn Care &amp; Jaundice Treatment</h2>
          </div>
        </div>
      </section>

      {/* ── 2) Main Section Body & Sidebar ── */}
      <section className="sd-body">
        <div className="container sd-layout">
          <ServiceSidebar />

          <article className="sd-content">
            {/* Main Feature Image */}
            <div className="sd-feature">
              <img src="/newborn1.jpg" alt="Newborn Care and Jaundice Treatment Consultation" />
            </div>

            {/* Overview Intro */}
            <div className="sd-reveal" data-reveal>
              <h1 className='sd-heading'>Newborn Care &amp; Jaundice Treatment in Krishnagiri</h1>
              <p className="sd-copy sd-text">
                Newborn babies go through important changes during the first days and weeks of life. Parents may have questions about feeding, jaundice, sleep, weight, general behaviour and whether something they notice is part of normal newborn adjustment or needs medical attention.
              </p>
              <p className="sd-copy sd-text">
                <span className='sp-span'>The Children’s Clinic in Krishnagiri provides newborn care with attention to the individual health and developmental needs of babies.</span> The clinic is led by <span className='sp-span'>Dr. Haseen Fathima, MD, DNB (Pediatrics), with 9+ years of experience</span>, with a focus that includes newborn care, neonatal care, premature baby care and newborn jaundice management.
              </p>
            </div>

            {/* Top Prompt Callout Box */}
            <div className="ls-callout-box sd-reveal" data-reveal>
              <h3>Concerned about your newborn's health or yellowing of the skin or eyes?</h3>
              <p>Get your baby assessed and understand whether monitoring, treatment or further care is appropriate.</p>
              <div className="ls-actions">
                <button onClick={() => navigate('/appointment')} className="ls-btn-gold">
                  Book a Newborn Consultation
                </button>
                <button onClick={() => navigate('/contact')} className="ls-btn-outline">
                  Contact the Clinic
                </button>
              </div>
            </div>

            {/* ── Section: What Is Newborn Care? ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              What Is Newborn Care?
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              <span className="sp-span">Newborn care involves monitoring and supporting a baby's health during the early period after birth, including feeding, growth, general wellbeing and common newborn health concerns.</span>
            </p>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              The first days of life can involve significant changes as a baby adapts to life outside the womb. Some babies require only routine newborn care, while others may need closer pediatric or neonatal assessment.
            </p>

            <div className="ls-guidance-card sd-reveal" data-reveal>
              <div className="ls-guidance-circle" />
              <h3 className=" ls-guidance-title">
                <FeedingBottle size={24} color="var(--color-gold)" />
                Newborn care may involve attention to:
              </h3>
              <div className="ls-guidance-grid">
                {[
                  'Feeding and breastfeeding',
                  'Weight and growth',
                  'Newborn jaundice',
                  'Prematurity',
                  'General newborn wellbeing',
                  'Temperature and hydration concerns',
                  'Unusual movements or seizures',
                  'Breathing-related concerns',
                  'Other health issues identified after birth',
                ].map((item) => (
                  <div key={item} className="ls-guidance-item">
                    <div className="ls-guidance-icon-wrap">
                      <FeedingBottle size={20} color="var(--color-gold)" />
                    </div>
                    <span className="ls-guidance-text">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="sd-copy sd-reveal sd-text sd-note-italic" data-reveal>
              The appropriate level of care depends on the individual baby.
            </p>

            {/* ── Section: Newborn Care in Krishnagiri for the Early Days of Life ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              Newborn Care in Krishnagiri for the Early Days of Life
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              The early newborn period can be reassuring but also stressful for parents, particularly when they are unsure whether a change in feeding, sleep or appearance is expected.
            </p>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              A newborn consultation provides an opportunity to discuss what parents are observing and determine whether the baby requires routine monitoring, additional assessment or treatment.
            </p>

            <div className="ls-guidance-card sd-reveal" data-reveal>
              <h3 className="ls-guidance-title">At The Children's Clinic, newborn care can include consideration of:</h3>
              <div className="ls-guidance-circle" />
              <div className="ls-guidance-grid">
                {[
                  'Newborn health and wellbeing',
                  'Feeding concerns',
                  'Premature baby care',
                  'Growth monitoring',
                  'Newborn jaundice',
                  'Phototherapy when clinically indicated',
                  'Other neonatal concerns requiring pediatric assessment',
                ].map((item) => (
                  <div key={item} className="ls-guidance-item">
                    <div className="ls-guidance-icon-wrap">
                      <FeedingBottle size={20} color="var(--color-gold)" />
                    </div>
                    <span className="ls-guidance-text">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Section: Newborn Jaundice: What Parents Should Know ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              Newborn Jaundice: What Parents Should Know
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              <span className="sp-span">Newborn jaundice causes yellowing of a baby's skin or the whites of the eyes because of increased bilirubin in the blood.</span> It is common during the newborn period, but some babies need assessment and treatment depending on their bilirubin level, age and clinical circumstances.
            </p>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              The visible amount of yellowing alone does not determine whether a baby requires treatment.
            </p>
            <p className="sd-copy sd-reveal sd-text sd-note-italic-muted" data-reveal>
              This is why parents should discuss jaundice with a healthcare professional rather than relying only on how yellow the baby appears.
            </p>

            {/* ── Section: When Does Newborn Jaundice Need Medical Assessment? ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              When Does Newborn Jaundice Need Medical Assessment?
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              <span className="sp-span">Newborn jaundice should be medically assessed when the baby appears significantly yellow, when jaundice develops unusually early or when parents are concerned about the baby's condition.</span>
            </p>


            <div className="ls-guidance-card sd-reveal" data-reveal>
              <div className="ls-guidance-circle" />
              <h3 className="ls-guidance-title">The healthcare professional may consider factors such as:</h3>
              <ul className="ls-guidance-grid">
                {[
                  "Baby's age",
                  'Gestational age',
                  'Overall health',
                  'Feeding',
                  'Clinical appearance',
                  'Bilirubin measurement when required',
                  'Other relevant risk factors',
                ].map((checkItem) => (
                  <li key={checkItem} className="ls-guidance-item">
                    <div className="ls-guidance-icon-wrap">
                      <FeedingBottle size={20} color="var(--color-gold)" />
                    </div>
                    <span className="ls-guidance-text">{checkItem}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="sd-copy sd-reveal sd-text sd-note-italic-primary" data-reveal>
              The decision about whether treatment is necessary depends on the baby's individual clinical assessment.
            </p>

            {/* ── Section: Newborn Jaundice Treatment in Krishnagiri ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              Newborn Jaundice Treatment in Krishnagiri
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              <span className="sp-span">The Children's Clinic provides newborn jaundice care and phototherapy</span> as part of its newborn and pediatric services.
            </p>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              Treatment is not automatically required for every baby with jaundice. The need for treatment depends on the baby's bilirubin level, age and other clinical factors.
            </p>
            <p className="sd-copy sd-reveal sd-text sd-note-italic-muted" data-reveal>
              Parents should therefore seek professional assessment when they are concerned about jaundice rather than attempting to determine treatment needs from appearance alone.
            </p>

            {/* ── Section: What Is Phototherapy for Newborn Jaundice? ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              What Is Phototherapy for Newborn Jaundice?
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              <span className="sp-span">Phototherapy is a treatment that uses specific light to help reduce bilirubin levels in a newborn when treatment is clinically indicated.</span>
            </p>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              Whether a newborn needs phototherapy depends on the baby's individual assessment.
            </p>
            <p className="sd-copy sd-reveal sd-text sd-text-bold-primary" data-reveal>
              Parents may have questions such as:
            </p>
            <ul className="sd-points sd-reveal" data-reveal>
              {[
                'Does every jaundiced baby need phototherapy?',
                'How is the need for treatment determined?',
                "Does the baby's age matter?",
                'Does prematurity affect assessment?',
                'How is the baby monitored?',
              ].map((q) => (
                <li key={q}>
                  <FeedingBottle size={20} color="var(--color-primary)" className="sd-bottle-icon" />
                  <div><strong>{q}</strong></div>
                </li>
              ))}
            </ul>
            <p className="sd-copy sd-reveal sd-text sd-note-italic" data-reveal>
              These questions can be discussed with the pediatric team based on the baby's individual condition.
            </p>

            {/* ── Section: Newborn Jaundice vs Normal Newborn Changes (CTA Banner) ── */}
            <div className="ls-cta-banner sd-reveal" data-reveal>
              <h3>Newborn Jaundice vs Normal Newborn Changes</h3>
              <p>
                One of the most useful things parents can understand is that not every change in a newborn has the same significance. <strong>For example, newborns may have changes in:</strong>
              </p>
              <div className="ls-guidance-grid service-neo">
                {[
                  'Sleeping patterns',
                  'Feeding frequency',
                  'Skin appearance',
                  'Bowel movements',
                  'Weight during the early days',
                  'General activity',
                ].map((item) => (
                  <div key={item} className="ls-guidance-item">
                    <div className="ls-guidance-icon-wrap">
                      <FeedingBottle size={20} color="var(--color-gold)" />
                    </div>
                    <span className="ls-guidance-text">{item}</span>
                  </div>
                ))}
              </div>
              <p className="ls-sub">
                However, some changes require medical assessment. <span className="font-happy-monkey strong">A useful approach for parents: observe → identify the change → consider the baby's overall condition → seek professional advice when concerned.</span>
              </p>
              <p> Parents should particularly seek medical attention when a newborn is difficult to wake, feeding poorly, appears seriously unwell or develops other concerning symptoms along with jaundice.</p>
              <button onClick={() => navigate('/appointment')} className="ls-btn-gold">
                Book a Newborn Consultation <ArrowRight size={18} />
              </button>
            </div>

            {/* ── Section: Newborn Feeding and Jaundice ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              Newborn Feeding and Jaundice
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              Feeding and jaundice can sometimes be relevant to one another, which is why feeding should be considered when assessing a jaundiced newborn.
            </p>
            <p className="sd-copy sd-reveal sd-text sd-text-bold-primary" data-reveal>
              Parents may have concerns about:
            </p>
            <ul className="sd-points sd-reveal" data-reveal>
              {[
                'How frequently the baby is feeding',
                'Whether the baby is feeding effectively',
                'Breastfeeding difficulties',
                "The baby's weight",
                'Whether the baby appears unusually sleepy during feeds',
              ].map((prob) => (
                <li key={prob}>
                  <FeedingBottle size={20} color="var(--color-primary)" className="sd-bottle-icon" />
                  <div><strong>{prob}</strong></div>
                </li>
              ))}
            </ul>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              If breastfeeding is difficult, lactation support may also be useful.
            </p>
            <div className="ls-actions">
              <button onClick={() => navigate('/lactation-support')} className="ls-btn-outline">
                Explore Lactation &amp; Breastfeeding Support
              </button>
            </div>

            {/* ── Section: Newborn Care for Premature Babies ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              Newborn Care for Premature Babies
            </h2>
            <div className="sd-feature">
              <img src="/newborn2.jpg" alt="Newborn Care and Jaundice Treatment Consultation" />
            </div>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              Premature babies may have different healthcare needs from babies born at term.
            </p>


            <div className="ls-guidance-card sd-reveal" data-reveal>
              <div className="ls-guidance-circle" />
              <h3 className="ls-guidance-title"><h3 className="ls-guidance-title">At The Children's Clinic, newborn care can include consideration of:</h3></h3>
              <div className="ls-guidance-grid">
                {[
                  'Feeding',
                  'Growth',
                  'Temperature regulation',
                  'Breathing',
                  'General wellbeing',
                  'Jaundice',
                ].map((item) => (
                  <div key={item} className="ls-guidance-item">
                    <div className="ls-guidance-icon-wrap">
                      <FeedingBottle size={20} color="var(--color-gold)" />
                    </div>
                    <span className="ls-guidance-text">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              <span className="sp-span">Premature baby care should be individualized because the health and developmental needs of one premature baby may differ from another.</span>
            </p>
            <p className="sd-copy sd-reveal sd-text sd-note-italic" data-reveal>
              Parents should discuss concerns about feeding, growth, jaundice or other symptoms with the baby's pediatric or neonatal care team.
            </p>

            {/* ── Section: How Is a Newborn Evaluated? ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              How Is a Newborn Evaluated?
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              <span className="sp-span">A newborn assessment looks at the baby's overall condition rather than focusing on one symptom alone.</span>
            </p>
            <p className="sd-copy sd-reveal sd-text sd-text-bold-primary" data-reveal>
              Depending on the reason for consultation, the doctor may consider:
            </p>
            <ul className="sd-points sd-reveal" data-reveal>
              {[
                "Baby's age",
                'Birth history',
                'Gestational age',
                'Feeding pattern',
                'Weight and growth',
                'General activity and behaviour',
                'Skin or eye colour when jaundice is suspected',
                'Relevant medical history',
                'Any previous treatment or reports',
                'Symptoms that may require additional assessment',
              ].map((stepItem) => (
                <li key={stepItem}>
                  <FeedingBottle size={20} color="var(--color-gold)" className="sd-bottle-icon" />
                  <div><strong>{stepItem}</strong></div>
                </li>
              ))}
            </ul>
            <p className="sd-copy sd-reveal sd-text sd-note-italic" data-reveal>
              The exact assessment depends on the baby's individual circumstances.
            </p>

            {/* ── Section: What Should Parents Bring to a Newborn Consultation? ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              What Should Parents Bring to a Newborn Consultation?
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              Parents can bring any relevant information that helps explain the baby's health history.
            </p>
            <div className="ls-checklist-box sd-reveal" data-reveal>
              <p className="sd-copy sd-reveal sd-text sd-text-mt1 ls-guidance-title" data-reveal>
                Useful records may include:
              </p>
              <ul className="ls-checklist-grid">
                {[
                  'Birth records',
                  'Discharge summary',
                  'Previous medical reports',
                  'Bilirubin reports, if available',
                  'Weight records',
                  'Feeding information',
                  'Details of previous treatment',
                  'Medication information',
                  'Vaccination records where relevant',
                ].map((bring) => (
                  <li key={bring} className="ls-checklist-item">
                    <FeedingBottle size={18} color="var(--color-gold)" className="sd-bottle-icon sd-bottle-icon-shrink" />
                    <span>{bring}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="sd-copy sd-reveal sd-text sd-note-italic" data-reveal>
              Parents should also note any changes they have observed at home.
            </p>

            {/* ── Section: When Should Parents Seek Urgent Medical Attention? ── */}
            <div className="ls-warning-box sd-reveal" data-reveal>
              <div className="ls-warning-head">
                <AlertCircle size={24} color="#DC2626" />
                <h3>When Should Parents Seek Urgent Medical Attention?</h3>
              </div>
              <p className="ls-warning-desc">
                Newborns require particular attention because their condition can change quickly. Seek prompt medical attention if your newborn has:
              </p>
              <ul className="ls-warning-list">
                {[
                  'Significant difficulty breathing',
                  'Marked difficulty waking or reduced responsiveness',
                  'Significant feeding difficulty',
                  'Repeated vomiting',
                  'Suspected seizures or fits',
                  'Unusual or concerning skin colour',
                  'A significant deterioration in general condition',
                  'Appears seriously unwell',
                ].map((warn) => (
                  <li key={warn} className="ls-warning-item">
                    <FeedingBottle size={16} color="#DC2626" className="sd-bottle-icon sd-bottle-icon-shrink" />
                    <span>{warn}</span>
                  </li>
                ))}
              </ul>
              <p className="ls-warning-footer ">
                A baby who appears seriously unwell should receive appropriate medical assessment promptly rather than waiting for a routine appointment.
              </p>
            </div>

            {/* ── Section: Is It Normal Newborn Adjustment or a Concern? ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              Is It Normal Newborn Adjustment or a Concern?
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              Parents often find it difficult to know whether something they notice is part of normal newborn adjustment.
            </p>
            <p className="sd-copy sd-reveal sd-text sd-text-bold-primary" data-reveal>
              A useful distinction is:
            </p>
            <div className="ls-cards-grid">
              {[
                { title: 'Normal Adjustment May Involve', desc: 'Changes in feeding, sleeping and daily patterns as the baby adapts to life outside the womb.' },
                { title: 'A Concern May Require Assessment When', desc: 'A change is persistent, significant, associated with poor feeding or accompanied by other concerning symptoms.' },
                { title: 'Urgent Assessment May Be Needed When', desc: 'The baby has significant breathing difficulty, reduced responsiveness, suspected seizures or appears seriously unwell.' },
              ].map((card) => (
                <article key={card.title} className="ls-concern-card sd-reveal" data-reveal>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </article>
              ))}
            </div>
            <p className="sd-copy sd-reveal sd-text sd-text-mt1" data-reveal>
              This does not allow parents to diagnose a condition at home. It provides a framework for understanding <span className="sp-span">when professional assessment may be appropriate.</span>
            </p>

            {/* ── Section: Meet Dr. Haseen Fathima ── */}
            <div className="ls-doctor-card sd-reveal" data-reveal>
              <div className="ls-doctor-profile">
                <div className="ls-doctor-img-wrap">
                  <img src="/doctor_portrait.jpg" alt="Dr. Haseen Fathima" />
                </div>
                <div className="ls-doctor-info">
                  <h2 className="ls-doctor-name">Meet Dr. Haseen Fathima</h2>
                  <p className="ls-doctor-creds">MD, DNB (Pediatrics) • 9+ Years of Experience</p>
                  <p className="ls-doctor-bio">
                    <span className="sp-span">Dr. Haseen Fathima, MD, DNB (Pediatrics), has 9+ years of experience caring for newborns, infants and children.</span> Her areas of focus include newborn care, neonatal care, premature baby care, lactation support, vaccination and child growth and development.
                  </p>
                </div>
              </div>

              <p className="ls-doctor-paragraph">
                Her approach to newborn care focuses on understanding each baby's individual needs while helping parents understand health concerns that may arise during the early stages of life, including feeding difficulties, jaundice and other newborn conditions requiring medical attention.
              </p>

              <blockquote className="sd-quote ls-doctor-quote sp-span">
                “Every newborn deserves attentive care, and every parent deserves clear guidance when they have concerns about their baby's health.”
              </blockquote>

              <div className="ls-actions ls-actions-mt">
                <button onClick={() => navigate('/about')} className="ls-btn-outline">
                  Meet Dr. Haseen Fathima
                </button>
                <button onClick={() => navigate('/appointment')} className="ls-btn-gold">
                  Book a Newborn Consultation
                </button>
              </div>
            </div>

            {/* ── Section: Newborn Care With Pediatric & Neonatal Support ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              Newborn Care With Pediatric &amp; Neonatal Support
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              <span className="sp-span">Newborn care sometimes overlaps with neonatal services</span> when a baby requires closer observation or additional medical support.
            </p>

            <div className="ls-guidance-card sd-reveal" data-reveal>
              <div className="ls-guidance-circle" />
              <h3 className="ls-guidance-title"><h3 className="ls-guidance-title">At The Children's Clinic, newborn care can include consideration of:</h3></h3>
              <div className="ls-guidance-grid">
                {[
                  'Newborn care',
                  'Neonatal care',
                  'Premature baby care',
                  'Newborn jaundice care',
                  'Phototherapy',
                  'Lactation and breastfeeding support',
                  'Neonatal intensive care',
                  'Newborn ventilator support',
                ].map((item) => (
                  <div key={item} className="ls-guidance-item">
                    <div className="ls-guidance-icon-wrap">
                      <FeedingBottle size={20} color="var(--color-gold)" />
                    </div>
                    <span className="ls-guidance-text">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="sd-copy sd-reveal sd-text sd-note-italic" data-reveal>
              The appropriate service depends on the baby's individual health condition.
            </p>

            {/* ── Section: Clinic Info & Address ── */}
            <div className="ls-clinic-card sd-reveal" data-reveal>
              <h2>Newborn Care &amp; Jaundice Treatment in Krishnagiri</h2>
              <p>
                <span className="sp-span">The Children's Clinic provides newborn care and newborn jaundice management in Krishnagiri,</span> including phototherapy when clinically indicated.
              </p>
              <p>The clinic is led by <span className="sp-span">Dr. Haseen Fathima, MD, DNB (Pediatrics), with 9+ years of experience.</span></p>

              <div className="ls-clinic-address">
                <h4>
                  <MapPin size={18} color="var(--color-gold)" /> Clinic Address
                </h4>
                <address>
                  <strong>The Children's Clinic</strong><br />
                  35/13, 2nd Cross Rd,<br />
                  Co-operative Colony,<br />
                  Thiruvalluvar Nagar,<br />
                  Krishnagiri, Tamil Nadu 635002
                </address>
              </div>

              <p>
                If you are concerned about your newborn's feeding, jaundice, growth, prematurity or general health, contact the clinic to discuss an appropriate consultation.
              </p>

              <div className="ls-actions">
                <a
                  href="https://maps.app.goo.gl/uGGSLB9q34tbxSyr7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ls-btn-outline"
                >
                  Get Directions <ExternalLink size={16} />
                </a>
                <button onClick={() => navigate('/appointment')} className="ls-btn-gold">
                  Book an Appointment
                </button>

              </div>
            </div>



            {/* ── Section: Frequently Asked Questions ── */}
            <h2 className="sd-heading sd-faq-title sd-reveal" data-reveal>
              Frequently Asked Questions About Newborn Care &amp; Jaundice
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              Common questions families ask about newborn care and jaundice treatment in Krishnagiri, with clear answers from our care team.
            </p>
            <div className="sd-faq">
              {FAQS.map((faq, index) => {
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

            {/* ── Section: Bottom CTA Banner ── */}
            <div className="ls-footer-banner sd-reveal" data-reveal>
              <h3>Give Your Newborn the Care They Need From the Beginning</h3>
              <p className="ls-sub">
                The first days of a baby's life can bring important questions about feeding, jaundice, growth and general health. Understanding what may require routine monitoring and what should be medically assessed can help parents respond appropriately.
              </p>
              <p className="ls-highlight">
                The Children's Clinic in Krishnagiri provides newborn care, premature baby care and newborn jaundice management, including phototherapy when clinically indicated.
              </p>
              <p className="ls-question">
                Concerned about your baby's health or jaundice?
              </p>
              <button onClick={() => navigate('/appointment')} className="ls-btn-gold">
                Book a Newborn Consultation <ArrowRight size={18} />
              </button>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default NewbornCare;