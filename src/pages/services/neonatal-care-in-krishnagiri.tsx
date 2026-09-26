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
    question: "What is neonatal care?",
    answer: "Neonatal care is medical care for newborn babies who need additional assessment, monitoring or treatment because of their health condition. The level of care depends on factors such as prematurity, symptoms and the baby's overall clinical condition."
  },
  {
    question: "Where can I get neonatal care in Krishnagiri?",
    answer: "The Children's Clinic provides newborn and neonatal care in Krishnagiri, including neonatal intensive care and newborn ventilator support as part of its stated areas of care."
  },
  {
    question: "What is neonatal intensive care?",
    answer: "Neonatal intensive care provides a higher level of medical observation and support for newborns who require closer monitoring or treatment because of their clinical condition. The specific care required varies from baby to baby."
  },
  {
    question: "Does The Children's Clinic provide newborn ventilator support?",
    answer: "Yes. Newborn ventilator support is among the stated neonatal care services at The Children's Clinic. Whether a baby requires ventilator support depends on the baby's clinical condition and medical assessment."
  },
  {
    question: "Can premature babies receive neonatal care?",
    answer: "Yes. Premature babies may require additional monitoring and care depending on their gestational age, maturity and health condition."
  },
  {
    question: "Does neonatal care include newborn jaundice treatment?",
    answer: "The Children's Clinic provides newborn jaundice care and phototherapy. Whether phototherapy is appropriate depends on the baby's bilirubin level, age and clinical assessment."
  },
  {
    question: "When does a newborn need intensive care?",
    answer: "A newborn may need intensive care when their condition requires a higher level of monitoring or medical support. Examples can include significant breathing difficulties, certain complications of prematurity or other serious newborn health concerns."
  },
  {
    question: "Can feeding difficulties require neonatal assessment?",
    answer: "Yes. Feeding difficulties may sometimes occur because of prematurity or illness. Persistent or significant feeding concerns may require pediatric or neonatal assessment."
  },
  {
    question: "When should I seek urgent care for my newborn?",
    answer: "Seek prompt medical attention if your newborn has significant breathing difficulty, reduced responsiveness, suspected seizures, serious feeding difficulty, repeated vomiting, unusual skin colour or appears seriously unwell."
  },
  {
    question: "Where is The Children's Clinic located?",
    answer: "The Children's Clinic is located at 35/13, 2nd Cross Rd, Co-operative Colony, Thiruvalluvar Nagar, Krishnagiri, Tamil Nadu 635002."
  }
];

const NeonatalCare = () => {
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
        <img className="sd-hero-bg" src="/neonatal-banner.jpg" alt="Neonatal Care in Krishnagiri" />
        <div className="sd-hero-overlay">
          <div className="container sd-hero-inner">
            <h2 className="font-plus-jakarta banner-font">Neonatal Care &amp; Intensive Care </h2>
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
              <img src="/neonatal1.jpg" alt="Neonatal and Newborn Intensive Care Consultation" />
            </div>

            {/* Overview Intro */}
            <div className="sd-reveal" data-reveal>
              <h1 className='sd-heading'>Neonatal Care &amp; Intensive Care in Krishnagiri</h1>
              <p className="sd-copy sd-text">
                Newborns can sometimes need closer medical observation and specialized care, particularly when they are born prematurely, develop jaundice, have feeding difficulties, experience breathing problems, or show other health concerns soon after birth.
              </p>
              <p className="sd-copy sd-text">
                <span className='sp-span'>The Children’s Clinic in Krishnagiri provides newborn and neonatal care, including neonatal intensive care and newborn ventilator support when clinically required.</span> The clinic is led by <span className='sp-span'>Dr. Haseen Fathima, MD, DNB (Pediatrics), with 9+ years of experience</span>, with a focus on caring for newborns, infants and children.
              </p>
            </div>

            {/* Top Prompt Callout Box */}
            <div className="ls-callout-box sd-reveal" data-reveal>
              <h3>Concerned about your newborn's health or needing specialized neonatal care?</h3>
              <p>Discuss your baby's condition with the pediatric team and understand the appropriate next step.</p>
              <div className="ls-actions">
                <button onClick={() => navigate('/appointment')} className="ls-btn-gold">
                  Book a Pediatric Consultation
                </button>
                <button onClick={() => navigate('/contact')} className="ls-btn-outline">
                  Contact the Clinic
                </button>
              </div>
            </div>

            {/* ── Section: What Is Neonatal Care? ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              What Is Neonatal Care?
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              <span className="sp-span">Neonatal care is medical care provided to newborn babies who need additional observation, assessment or treatment because of their health condition after birth.</span> The level of care required depends on the baby's age, gestational maturity, symptoms and overall clinical condition.
            </p>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              Some newborns transition to life outside the womb without significant difficulty, while others may need closer monitoring or medical support.
            </p>

            {/* ── Guidance Included Card Container ── */}
            <div className="ls-guidance-card sd-reveal" data-reveal>
              <div className="ls-guidance-circle" />
              <h3 className="font-happy-monkey ls-guidance-title">
                <FeedingBottle size={24} color="var(--color-gold)" />
                Neonatal care may be relevant for babies with concerns involving:
              </h3>

              <div className="ls-guidance-grid">
                {[
                  'Prematurity',
                  'Breathing difficulties',
                  'Newborn jaundice',
                  'Feeding difficulties',
                  'Seizures or fits',
                  'Problems requiring closer observation',
                  'Other newborn health concerns requiring medical assessment',
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
              The appropriate care depends on the individual baby's condition.
            </p>

            {/* ── Section: Neonatal Care for Newborn Health Concerns ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              Neonatal Care in Krishnagiri for Newborn Health Concerns
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              Parents may feel uncertain when a newborn requires more medical attention than expected after birth. Understanding why additional care is needed can make the situation easier to navigate.
            </p>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              <span className="sp-span">At The Children's Clinic, </span>neonatal care is approached as part of the baby's overall health and development rather than focusing on a single symptom.
            </p>

            <div className="ls-guidance-card sd-reveal" data-reveal>
              <h3 className="ls-guidance-title">Depending on the baby's condition, care may involve:</h3>
              <div className="ls-guidance-circle" />
              <div className="ls-guidance-grid">
                {[
                  'Clinical assessment',
                  'Monitoring of the baby\'s condition',
                  'Newborn jaundice management',
                  'Phototherapy where clinically appropriate',
                  'Support for feeding-related concerns',
                  'Care for premature babies',
                  'Neonatal intensive care',
                  'Newborn ventilator support when required',
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
              The exact treatment or monitoring plan depends on the baby's individual clinical needs.
            </p>

            {/* ── Section: When Does a Newborn Need Specialized Care? ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              When Does a Newborn Need Specialized Care?
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              <span className="sp-span">A newborn may require closer medical care when there are concerns about breathing, feeding, jaundice, neurological symptoms, prematurity or the baby's general condition.</span> The need for specialized neonatal care cannot be determined from one symptom alone and should be assessed by a qualified healthcare professional.
            </p>

            <div className="ls-guidance-card sd-reveal" data-reveal>
              <h3 className="ls-guidance-title">Parents may need medical evaluation when they notice:</h3>
              <div className="ls-guidance-circle" />
              <ul className="ls-guidance-grid">
                {[
                  'Difficulty with breathing',
                  'Significant feeding difficulty',
                  'Unusual sleepiness or reduced responsiveness',
                  'Concerning jaundice',
                  'Seizures or unusual movements',
                  'Concerns related to prematurity',
                  'A significant change in the baby\'s general condition',
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
              A newborn who appears seriously unwell should receive prompt medical assessment.
            </p>

            {/* ── Section: Neonatal Intensive Care in Krishnagiri ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              Neonatal Intensive Care in Krishnagiri
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              <span className="sp-span">Neonatal intensive care is intended for newborns who require a higher level of medical observation, monitoring or support because of their clinical condition.</span>
            </p>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              The need for intensive care varies between babies. Some newborns may require closer monitoring for a limited period, while others may need specific medical support depending on their condition.
            </p>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              At The Children's Clinic, neonatal intensive care is one of the stated areas of newborn care, including<span className="sp-span"> newborn ventilator support</span> when clinically indicated. The exact level and duration of care depend on the baby's medical condition and response to treatment.
            </p>

            {/* ── Section: Newborn Ventilator Support ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              Newborn Ventilator Support in Krishnagiri
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              Breathing difficulties in a newborn can require urgent medical assessment. In some situations, a baby may need respiratory support, including ventilator support.
            </p>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              <span className="sp-span">Newborn ventilator support is used when a baby is unable to maintain adequate breathing or requires mechanical assistance based on their clinical condition</span>. It is a medical intervention that requires appropriate monitoring and assessment.
            </p>
            <p className="sd-copy sd-reveal sd-text sd-note-italic-muted" data-reveal>
              Parents should understand that ventilator support is not a routine treatment for every newborn with breathing difficulty. The decision depends on factors such as the baby's condition, breathing status and medical assessment.
            </p>

            {/* ── Section: What Can Lead to Neonatal Intensive Care? ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              What Can Lead to Neonatal Intensive Care?
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              There is no single reason why a newborn may require intensive care. The clinical team considers the baby's overall condition before determining the appropriate level of support.
            </p>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              Possible circumstances may include:
            </p>

            <div className="ls-cards-stack">
              {[
                { title: 'Prematurity', desc: 'Babies born prematurely may require additional observation because their organs and physiological systems may not yet be as mature as those of a full-term newborn.' },
                { title: 'Breathing Problems', desc: 'Some newborns may experience difficulty maintaining adequate breathing and require closer observation or respiratory support.' },
                { title: 'Significant Jaundice', desc: 'Newborn jaundice is common, but some babies may develop levels of bilirubin that require medical assessment and treatment such as phototherapy.' },
                { title: 'Feeding Difficulties', desc: 'Some newborns may struggle to feed effectively, particularly when they are premature or unwell. Feeding concerns may require closer monitoring.' },
                { title: 'Seizures or Fits', desc: 'Unusual movements or suspected seizures in a newborn require medical evaluation because there can be several possible causes.' },
              ].map((card) => (
                <article key={card.title} className="ls-info-card sd-reveal" data-reveal>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </article>
              ))}
            </div>
            <p className="sd-copy sd-reveal sd-text sd-note-italic" data-reveal>
              These are examples of situations that may require assessment; they do not automatically mean that every baby with these concerns requires intensive care.
            </p>

            {/* ── Section: Premature Baby Care and Neonatal Support ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              Premature Baby Care and Neonatal Support
            </h2>
            <div className="sd-feature">
              <img src="/neonatal2.jpg" alt="Neonatal and Newborn Intensive Care Consultation" />
            </div>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              Premature babies can have different healthcare needs depending on how early they were born and their individual health condition.
            </p>
            <p className="sd-copy sd-reveal sd-text sd-text-bold-primary" data-reveal>
              They may require closer attention to:
            </p>

            <div className="ls-guidance-card sd-reveal" data-reveal>
              <div className="ls-guidance-circle" />
              <div className="ls-guidance-grid">
                {[
                  'Breathing',
                  'Feeding',
                  'Temperature regulation',
                  'Growth',
                  'General wellbeing',
                  'Other newborn health concerns',
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
              <span className="sp-span">Premature baby care should be individualized because the needs of one premature baby can differ considerably from another.</span>
            </p>
            <p className="sd-copy sd-reveal sd-text sd-note-italic" data-reveal>
              Parents should discuss concerns about feeding, breathing, growth or general health with the baby's pediatric or neonatal care team.
            </p>

            {/* ── Section: Newborn Jaundice and Neonatal Care ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              Newborn Jaundice and Neonatal Care
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              Jaundice can occur in newborn babies and causes yellowing of the skin or eyes because of increased bilirubin levels.
            </p>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              Many newborns develop jaundice during the early days of life, but the baby's age, clinical condition and bilirubin level are important when deciding whether assessment or treatment is required.
            </p>
            <p className="sd-copy sd-reveal sd-text" data-reveal>At The Children's Clinic, <span className="sp-span">newborn jaundice and phototherapy</span> are among the areas of newborn care provided.</p>
            <p className="sd-copy sd-reveal sd-text sd-text-bold-primary" data-reveal>
              When Can Phototherapy Be Used?
            </p>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              <span className="sp-span">Phototherapy may be used to help reduce bilirubin levels in newborns when treatment is clinically indicated.</span> Whether a baby needs phototherapy depends on the baby's bilirubin level, age and other clinical factors.
            </p>
            <p className="sd-copy sd-reveal sd-text sd-note-italic-muted" data-reveal>
              Parents should not rely on the visible degree of yellowing alone to determine whether treatment is needed.
            </p>

            {/* ── Section: Newborn Feeding and Neonatal Care ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              Newborn Feeding and Neonatal Care
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              Feeding is an important part of newborn wellbeing.
            </p>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              Some babies may experience difficulty feeding because of prematurity, illness or other individual factors. A baby who is struggling to feed may require assessment of both feeding and overall health.</p>
            <p className="sd-copy sd-reveal sd-text sd-text-bold-primary" data-reveal>
              Neonatal care may therefore overlap with:
            </p>
            <ul className="sd-points sd-reveal" data-reveal>
              {[
                'Breastfeeding support',
                'Infant feeding concerns',
                'Growth monitoring',
                'Premature baby care',
                'Assessment of general newborn health',
              ].map((prob) => (
                <li key={prob}>
                  <FeedingBottle size={20} color="var(--color-primary)" className="sd-bottle-icon" />
                  <div><strong>{prob}</strong></div>
                </li>
              ))}
            </ul>
            <p className="sd-copy sd-reveal sd-text sd-note-italic" data-reveal>
              Parents can discuss feeding concerns with the pediatric team to understand whether additional lactation guidance or medical assessment may be appropriate.
            </p>

            {/* ── Section: Is It Neonatal Care or Routine Newborn Care? ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              Is It Neonatal Care or Routine Newborn Care?
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              This is an important distinction for parents.
            </p>
            <div className="ls-cards-grid">
              {[
                { title: 'Routine Newborn Care', desc: 'A healthy newborn may require routine monitoring, feeding support, vaccination and assessment of normal growth and development.' },
                { title: 'Additional Neonatal Care', desc: 'A newborn may require additional medical observation or treatment when there are concerns such as prematurity, jaundice, breathing difficulties, feeding problems or other health issues.' },
                { title: 'Intensive Neonatal Care', desc: 'A baby whose condition requires a higher level of monitoring or medical support may need neonatal intensive care.' },
              ].map((card) => (
                <article key={card.title} className="ls-concern-card sd-reveal" data-reveal>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </article>
              ))}
            </div>
            <p className="sd-copy sd-reveal sd-text sd-text-mt1" data-reveal>
              <span className="sp-span">The level of care should be determined by the baby's clinical condition rather than by the parent's concern alone.</span>
            </p>
            <p className="sd-copy sd-reveal sd-text sd-text-mt1" data-reveal>
              This distinction helps parents understand why some newborns can be managed with routine pediatric follow-up while others need more specialized care.
            </p>

            {/* ── Section: What Should Parents Bring for a Neonatal Consultation? ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              What Should Parents Bring for a Neonatal Consultation?
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              If your newborn requires a medical review, relevant information can help the pediatric team understand the baby's history.
            </p>
            <div className="ls-checklist-box sd-reveal" data-reveal>
              <p className="sd-copy sd-reveal sd-text sd-text-mt1 ls-guidance-title" data-reveal>
                Parents may bring:</p>
              <ul className="ls-checklist-grid">
                {[
                  "Birth records",
                  "Discharge summary, if available",
                  "Previous medical reports",
                  "Details of the baby's birth and gestational age",
                  "Previous test reports",
                  "Medication information",
                  "Feeding details",
                  "Information about jaundice or previous treatment",
                  "Details of any unusual movements or episodes",
                ].map((bring) => (
                  <li key={bring} className="ls-checklist-item">
                    <FeedingBottle size={18} color="var(--color-gold)" className="sd-bottle-icon sd-bottle-icon-shrink" />
                    <span>{bring}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="sd-copy sd-reveal sd-text sd-note-italic" data-reveal>
              If the baby has already received treatment at another hospital or facility, bringing available medical records can help provide useful clinical context.
            </p>

            {/* ── Section: When Should Parents Seek Urgent Medical Attention? ── */}
            <div className="ls-warning-box sd-reveal" data-reveal>
              <div className="ls-warning-head">
                <AlertCircle size={24} color="#DC2626" />
                <h3>When Should Parents Seek Urgent Medical Attention?</h3>
              </div>
              <p className="ls-warning-desc">
                Newborns can become unwell quickly, and concerning symptoms should not be ignored. Parents should seek prompt medical attention if a newborn has symptoms such as:
              </p>
              <ul className="ls-warning-list">
                {[
                  'Significant breathing difficulty',
                  'Bluish or unusual skin colour',
                  'Marked difficulty waking or reduced responsiveness',
                  'Repeated vomiting',
                  'Significant feeding difficulty',
                  'Seizures or suspected fits',
                  'A baby who appears seriously unwell',
                  'Any sudden or significant deterioration in condition',
                ].map((warn) => (
                  <li key={warn} className="ls-warning-item">
                    <FeedingBottle size={16} color="#DC2626" className="sd-bottle-icon sd-bottle-icon-shrink" />
                    <span>{warn}</span>
                  </li>
                ))}
              </ul>
              <p className="ls-warning-footer">
                If a newborn appears seriously unwell, urgent medical assessment should take priority over arranging a routine consultation.
              </p>
            </div>

            {/* ── Section: Neonatal Care With Pediatric Expertise ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              Neonatal Care With Pediatric Expertise
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              Newborn care requires an understanding of how rapidly a baby's health can change during the early period of life.
            </p>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              <span className="sp-span">At The Children's Clinic,</span> neonatal care forms part of a broader pediatric approach led by <span className="sp-span">Dr. Haseen Fathima, MD, DNB (Pediatrics), with 9+ years of experience.</span> The clinic's stated newborn and pediatric focus includes:
            </p>

            <div className="ls-guidance-card sd-reveal" data-reveal>
              <div className="ls-guidance-circle" />
              <div className="ls-guidance-grid">
                {[
                  'Newborn care',
                  'Neonatal care',
                  'Premature baby care',
                  'Lactation support',
                  'Newborn jaundice and phototherapy',
                  'Seizures or fits in babies and children',
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
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              Parents can discuss their baby's specific concern and understand whether further evaluation or specialized care is appropriate.
            </p>
            <div className="ls-actions">
              <button onClick={() => navigate('/about')} className="ls-btn-outline">
                Meet Dr. Haseen Fathima
              </button>
            </div>

            {/* ── Section: Not Sure What Level of Newborn Care Your Baby Needs? (CTA Banner) ── */}
            <div className="ls-cta-banner sd-reveal" data-reveal>
              <h3>Not Sure What Level of Newborn Care Your Baby Needs?</h3>
              <p>
                It is common for parents to be unsure whether a concern requires routine pediatric attention, neonatal monitoring or more intensive care. <strong>The important consideration is the baby's clinical condition, not simply the name of the symptom.</strong>
              </p>
              <div className="ls-guidance-grid service-neo">

                {[
                  'A feeding concern may require lactation or pediatric guidance.',
                  'A premature baby may need closer monitoring.',
                  'Significant jaundice may require bilirubin assessment and possible treatment.',
                  'Breathing difficulty may require urgent medical evaluation.',
                  'Suspected seizures require prompt medical assessment.',
                ].map((item) => (
                  <div key={item} className="ls-guidance-item">
                    <div className="ls-guidance-icon-wrap">
                      <FeedingBottle size={20} color="var(--color-gold)" />
                    </div>
                    <span className="ls-guidance-text">{item}</span>
                  </div>
                ))}
              </div>
              <p>A healthcare professional can determine the appropriate next step based on the baby's individual condition.</p>
              <button onClick={() => navigate('/appointment')} className="ls-btn-gold">
                Book a Pediatric Consultation <ArrowRight size={18} />
              </button>
            </div>

            {/* ── Section: Clinic Info & Address ── */}
            <div className="ls-clinic-card sd-reveal" data-reveal>
              <h2>Neonatal Care in Krishnagiri at The Children's Clinic</h2>
              <p>
                <span className="sp-span">The Children's Clinic</span> provides newborn and neonatal care in Krishnagiri, with services addressing newborn health concerns ranging from premature baby care and jaundice management to neonatal intensive care and newborn ventilator support.
              </p>
              <p> The clinic is led by <span className="sp-span">Dr. Haseen Fathima, MD, DNB (Pediatrics), with 9+ years of experience.</span></p>

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
                If you are concerned about your newborn's health, feeding, breathing, jaundice, prematurity or another neonatal issue, contact the clinic to discuss the appropriate care pathway.
              </p>

              <div className="ls-actions">
                <button onClick={() => navigate('/appointment')} className="ls-btn-gold">
                  Book a Pediatric Consultation
                </button>
                <a
                  href="https://maps.app.goo.gl/uGGSLB9q34tbxSyr7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ls-btn-outline"
                >
                  Get Directions <ExternalLink size={16} />
                </a>

              </div>
            </div>

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
                    <span className="sp-span">Dr. Haseen Fathima, MD, DNB (Pediatrics), has 9+ years of experience caring for newborns, infants and children.</span> Her areas of focus include newborn care, neonatal care, premature baby care, lactation support, newborn jaundice and phototherapy, seizures or fits, neonatal intensive care and newborn ventilator support.
                  </p>
                </div>
              </div>

              <p className="ls-doctor-paragraph">
                With a pediatric perspective, Dr. Haseen Fathima focuses on understanding a newborn's condition in the context of the baby's overall health and development, so that parents can discuss the reason for additional care and understand the appropriate next step.
              </p>

              <div className="ls-actions ls-actions-mt">
                <button onClick={() => navigate('/about')} className="ls-btn-outline">
                  Meet Dr. Haseen Fathima
                </button>
                <button onClick={() => navigate('/appointment')} className="ls-btn-gold">
                  Book a Pediatric Consultation
                </button>
              </div>
            </div>

            {/* ── Section: Frequently Asked Questions ── */}
            <h2 className="sd-heading sd-faq-title sd-reveal" data-reveal>
              Frequently Asked Questions About Neonatal Care
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              Common questions families ask about newborn and neonatal care in Krishnagiri, with clear answers from our care team.
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
              <h3>Get the Right Care for Your Newborn</h3>
              <p className="ls-sub">
                The first days and weeks of life can bring important health questions for parents. When a newborn needs additional monitoring or treatment, understanding the reason for that care can help families make informed decisions and follow appropriate medical guidance.
              </p>
              <p className="ls-highlight">
                The Children's Clinic in Krishnagiri provides newborn and neonatal care, including premature baby care, newborn jaundice and phototherapy, neonatal intensive care and newborn ventilator support.
              </p>
              <p className="ls-question">
                Concerned about your newborn's health?
              </p>
              <button onClick={() => navigate('/appointment')} className="ls-btn-gold">
                Book a Pediatric Consultation <ArrowRight size={18} />
              </button>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default NeonatalCare;