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
    question: "Where can I get a pediatric consultation for seizures in Krishnagiri?",
    answer: "The Children's Clinic provides pediatric assessment for seizures and fits in babies and children in Krishnagiri. The child's symptoms, medical history and overall condition can be assessed to determine whether further evaluation is appropriate."
  },
  {
    question: "Does every shaking episode mean my child is having a seizure?",
    answer: "No. Some movements can resemble seizures without actually being seizures. A healthcare professional can assess the episode based on its characteristics, timing, associated symptoms and the child's medical history."
  },
  {
    question: "What should I do if my child has a seizure?",
    answer: "Keep the child away from hazards, stay with them, observe the episode and note its duration. Do not put anything in the child's mouth. Seek emergency medical attention when the seizure is prolonged, repeated without recovery or associated with serious symptoms."
  },
  {
    question: "Should my baby be assessed after a suspected seizure?",
    answer: "Yes. A suspected seizure in a baby should be discussed with a healthcare professional, particularly when the episode is new, unexplained or recurrent."
  },
  {
    question: "Can fever cause seizures in children?",
    answer: "Some children can have seizures associated with fever. However, the child's age, episode characteristics and overall clinical situation need to be considered rather than assuming every seizure with fever has the same cause."
  },
  {
    question: "What information should I record during a seizure?",
    answer: "Note what happened immediately before the episode, what movements occurred, whether the child remained responsive, approximately how long it lasted and how the child behaved afterward."
  },
  {
    question: "Can I show a video of the episode to the doctor?",
    answer: "Yes. If a safe video was already recorded without delaying care or putting the child at risk, it may provide useful information about what parents observed."
  },
  {
    question: "Does one seizure mean my child has epilepsy?",
    answer: "Not necessarily. A single episode does not automatically establish epilepsy. The child's clinical history and the characteristics of the episode need to be evaluated."
  },
  {
    question: "When is a child's seizure an emergency?",
    answer: "A seizure requires emergency medical attention when it is prolonged, repeated without recovery, associated with significant breathing difficulty, serious injury, concerning skin colour changes or persistent unresponsiveness."
  },
  {
    question: "Where is The Children's Clinic located?",
    answer: "The Children's Clinic is located at 35/13, 2nd Cross Rd, Co-operative Colony, Thiruvalluvar Nagar, Krishnagiri, Tamil Nadu 635002."
  }
];

const SeizuresFits = () => {
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
        <img className="sd-hero-bg" src="/src/assets/services/seizure-banner.jpeg" alt="Seizures & Fits in Babies and Children in Krishnagiri" />
        <div className="sd-hero-overlay">
          <div className="container sd-hero-inner">
            <h2 className="font-plus-jakarta banner-font">Seizures &amp; Fits in Babies and Children </h2>
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
              <img src="/src/assets/services/seizure1.jpeg" alt="Seizures and Fits in Babies and Children Consultation" />
            </div>

            {/* Overview Intro */}
            <div className="sd-reveal" data-reveal>
                <h1 className="sd-heading">Seizures and Fits in Babies and Children in Krishnagiri</h1>
              <p className="sd-copy sd-text">
                Seeing a baby or child have unusual movements, staring episodes, shaking or a suspected seizure can be frightening for parents. Not every unusual movement is necessarily a seizure, but some episodes require prompt medical assessment to understand what is happening.
              </p>
              <p className="sd-copy sd-text">
                <span className='sp-span'>The Children's Clinic in Krishnagiri provides pediatric assessment for seizures and fits in babies and children.</span> Led by <span className='sp-span'>Dr. Haseen Fathima, MD, DNB (Pediatrics), with 9+ years of experience</span>, the clinic provides child-focused care while considering the child's age, medical history, symptoms and overall condition.
              </p>
            </div>

            {/* Top Prompt Callout Box */}
            <div className="ls-callout-box sd-reveal" data-reveal>
              <h3>Concerned about a seizure or unusual episode in your child?</h3>
              <p>A pediatric assessment can help determine whether the episode needs further evaluation and what the appropriate next step may be.</p>
              <div className="ls-actions">
                <button onClick={() => navigate('/appointment')} className="ls-btn-gold">
                  Book a Pediatric Consultation
                </button>
                <button onClick={() => navigate('/contact')} className="ls-btn-outline">
                  Contact the Clinic
                </button>
              </div>
            </div>

            {/* ── Section: What Are Seizures in Babies and Children? ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              What Are Seizures in Babies and Children?
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              <span className="sp-span">A seizure is a sudden episode caused by abnormal electrical activity in the brain. It can result in changes in movement, awareness, behaviour or responsiveness.</span>
            </p>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              Seizures can look different from one child to another. Some may involve obvious shaking, while others may appear as brief periods of staring, altered awareness or unusual movements.
            </p>
            <p className="sd-copy sd-reveal sd-text sd-note-italic-muted" data-reveal>
              A suspected seizure should not be diagnosed based on appearance alone. A healthcare professional may need to understand exactly what happened before, during and after the episode.
            </p>

            {/* ── Section: Seizures & Fits in Babies and Children: What Parents Should Know ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              Seizures &amp; Fits in Babies and Children: What Parents Should Know
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              A child's unusual movement or change in behaviour can have several possible explanations. Some movements may not be seizures, while others may need medical evaluation.
            </p>

            <div className="ls-guidance-card sd-reveal" data-reveal>
              <div className="ls-guidance-circle" />
              <h3 className=" ls-guidance-title">
                <FeedingBottle size={24} color="var(--color-gold)" />
                Parents may notice:
              </h3>
              <div className="ls-guidance-grid">
                {[
                  'Sudden shaking or jerking',
                  'Stiffening of the body',
                  'Repeated unusual movements',
                  'Blank or staring episodes',
                  'Temporary unresponsiveness',
                  'Sudden changes in awareness',
                  'Abnormal movements involving one part of the body',
                  'Changes in behaviour before or after an episode',
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
            <p className="sd-copy sd-reveal sd-text sp-span" data-reveal>
              The appearance, duration, frequency and circumstances of an episode can all be useful when discussing it with a pediatrician.
            </p>

            {/* ── Section: When Should a Child With a Suspected Seizure See a Pediatrician? ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              When Should a Child With a Suspected Seizure See a Pediatrician?
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              <span className="sp-span">A child should be medically assessed after a suspected seizure, particularly when the episode is new, unexplained, recurrent or associated with changes in consciousness, breathing or general health.</span>
            </p>

            <div className="ls-guidance-card sd-reveal" data-reveal>
              <div className="ls-guidance-circle" />
              <h3 className="ls-guidance-title">Parents should seek medical evaluation when they notice:</h3>
              <ul className="ls-guidance-grid">
                {[
                  'A first suspected seizure',
                  'Repeated episodes',
                  'Unusual movements that keep occurring',
                  'Episodes involving loss of responsiveness',
                  'Stiffening or rhythmic jerking',
                  'A significant change in behaviour after an episode',
                  'Concerns about development following repeated episodes',
                  'Any episode that makes the child appear seriously unwell',
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
              The urgency depends on the child's symptoms and overall condition.
            </p>

            {/* ── Section: What Can a Seizure Look Like? ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              What Can a Seizure Look Like?
            </h2>
            <p className="sd-copy sd-reveal sd-text sp-span" data-reveal>
              Seizures can present in different ways, so not every seizure involves dramatic shaking.
            </p>
            <p className="sd-copy sd-reveal sd-text " data-reveal>
              Depending on the type of seizure, a child may experience changes involving:
            </p>
            <div className="ls-cards-stack">
              {[
                { title: 'Movement', desc: 'There may be rhythmic jerking, sudden stiffening or unusual repetitive movements.' },
                { title: 'Awareness', desc: 'A child may appear briefly unresponsive, confused or unaware of what is happening.' },
                { title: 'Behaviour', desc: 'Some episodes may appear as unusual repetitive behaviour or sudden changes in responsiveness.' },
                { title: 'Muscle Tone', desc: 'A child may suddenly become stiff or, in some situations, lose normal muscle tone.' },
              ].map((card) => (
                <article key={card.title} className="ls-info-card sd-reveal" data-reveal>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </article>
              ))}
            </div>
            <p className="sd-copy sd-reveal sd-text sd-note-italic" data-reveal>
              Because different conditions can produce similar-looking episodes, a medical assessment is important when a seizure is suspected.
            </p>

            {/* ── Section: Is Every Shaking or Staring Episode a Seizure? ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              Is Every Shaking or Staring Episode a Seizure?
            </h2>
            <p className="sd-copy sd-reveal sd-text sp-span" data-reveal>
              No. An unusual movement, staring episode or shaking does not automatically mean that a child has epilepsy or another seizure disorder.
            </p>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              Children can have movements or behaviours that resemble seizures for other reasons.
            </p>
            <p className="sd-copy sd-reveal sd-text sd-note-italic-muted" data-reveal>
              This is why parents should avoid trying to diagnose the episode from a video or description alone. A pediatrician can consider the circumstances, medical history and characteristics of the event and decide whether further evaluation is appropriate.
            </p>

            {/* ── Section: What Should Parents Observe During an Episode? (CTA Banner) ── */}
            <div className="ls-cta-banner sd-reveal" data-reveal>
              <h3>What Should Parents Observe During an Episode?</h3>
              <p>
                Details about what happened before, during and after an episode can be valuable during a pediatric assessment.
              </p>

              <p> <strong>If it is safe to do so, parents can note:</strong></p>
              <div className="ls-guidance-grid service-neo">
                {[
                  'What the child was doing immediately before the episode',
                  'How the episode started',
                  'Whether the child remained responsive',
                  'Which parts of the body moved',
                  'Whether the body became stiff',
                  'How long the episode appeared to last',
                  'Whether breathing or skin colour changed',
                  'What happened immediately afterward',
                  'Whether similar episodes have occurred previously',
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
                <span className="font-happy-monkey strong">If a safe video can be obtained without delaying emergency care, it may also help the healthcare professional understand what parents observed.</span>
              </p>
              <button onClick={() => navigate('/appointment')} className="ls-btn-gold">
                Book a Pediatric Consultation <ArrowRight size={18} />
              </button>
            </div>

            {/* ── Section: What Should You Do During a Suspected Seizure? (Warning Box) ── */}
            <div className="ls-warning-box sd-reveal" data-reveal>
              <div className="ls-warning-head">
                <AlertCircle size={24} color="#DC2626" />
                <h3>What Should You Do During a Suspected Seizure?</h3>
              </div>
              <p className="ls-warning-desc">
                During a seizure, the priority is to keep the child safe and avoid actions that could cause injury. Parents should:
              </p>
              <ul className="ls-warning-list">
                {[
                  'Move dangerous objects away from the child',
                  'Keep the child away from falls or other hazards',
                  'Stay with the child',
                  'Observe the episode',
                  'Note approximately how long it lasts',
                  'Seek urgent medical care when emergency warning signs are present',
                ].map((warn) => (
                  <li key={warn} className="ls-warning-item">
                    <FeedingBottle size={16} color="#DC2626" className="sd-bottle-icon sd-bottle-icon-shrink" />
                    <span>{warn}</span>
                  </li>
                ))}
              </ul>
              <p className="ls-warning-footer ">
                Parents should not attempt to force anything into the child's mouth during a seizure. If the child is seriously unwell, has significant breathing difficulty, remains unresponsive or the seizure does not stop, seek emergency medical attention immediately.
              </p>
            </div>

            {/* ── Section: What Happens After a Seizure? ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              What Happens After a Seizure?
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              A child may behave differently for some time after an episode.
            </p>

            <div className="ls-guidance-card sd-reveal" data-reveal>
              <h3 className="ls-guidance-title">Parents may notice:</h3>
              <div className="ls-guidance-circle" />
              <div className="ls-guidance-grid">
                {[
                  'Sleepiness',
                  'Confusion',
                  'Tiredness',
                  'Temporary changes in behaviour',
                  'Reduced responsiveness for a period',
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
              The recovery period can vary depending on the child and the nature of the episode.
            </p>
            <p className="sd-copy sd-reveal sd-text sd-note-italic-primary" data-reveal>
              A child who does not recover appropriately, remains significantly unresponsive or has concerning symptoms after an episode requires prompt medical assessment.
            </p>

            {/* ── Section: Seizures in Babies: Why Evaluation Matters ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              Seizures in Babies: Why Evaluation Matters
            </h2>
            <div className="sd-feature">
              <img src="/src/assets/services/seizure2.jpeg" alt="Seizures and Fits in Babies and Children Consultation" />
            </div>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              Babies cannot describe what they are experiencing, which can make unusual episodes particularly difficult for parents to interpret.
            </p>
            <p className="sd-copy sd-reveal sd-text sd-text-bold-primary" data-reveal>
              Parents may notice:
            </p>
            <ul className="sd-points sd-reveal" data-reveal>
              {[
                'Repetitive movements',
                'Sudden stiffening',
                'Jerking movements',
                'Changes in responsiveness',
                'Unusual eye movements',
                'Episodes that repeatedly occur in a similar pattern',
              ].map((prob) => (
                <li key={prob}>
                  <FeedingBottle size={20} color="var(--color-primary)" className="sd-bottle-icon" />
                  <div><strong>{prob}</strong></div>
                </li>
              ))}
            </ul>
            <p className="sd-copy sd-reveal sd-text sp-span" data-reveal>
              Any suspected seizure in a baby should be discussed with a healthcare professional because the cause and appropriate evaluation can vary considerably.
            </p>

            {/* ── Section: What Can Cause Seizure-Like Episodes? ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              What Can Cause Seizure-Like Episodes?
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              There can be different reasons for seizures or episodes that resemble seizures.
            </p>

            <div className="ls-guidance-card sd-reveal" data-reveal>
              <div className="ls-guidance-circle" />
              <h3 className="ls-guidance-title">The cause may depend on factors such as:</h3>
              <div className="ls-guidance-grid">
                {[
                  "The child's age",
                  'Previous health history',
                  'Fever or illness',
                  'Previous neurological concerns',
                  'Developmental history',
                  'Birth and newborn history',
                  'Other associated symptoms',
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
              It is important not to assume that a particular cause is responsible without appropriate medical assessment.
            </p>

            {/* ── Section: Fever and Seizures in Children ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              Fever and Seizures in Children
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              Some children can experience seizures associated with fever. However, <span className="sp-span">not every seizure occurring during an illness should automatically be assumed to be a febrile seizure.</span>
            </p>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              The child's age, fever, episode characteristics, medical history and recovery all matter.
            </p>
            <p className="sd-copy sd-reveal sd-text sd-note-italic-muted" data-reveal>
              If your child has a seizure associated with fever, particularly if it is the first such episode, discuss it with a pediatrician and seek urgent medical attention when emergency symptoms are present.
            </p>

            {/* ── Section: When Is a Seizure an Emergency? (Warning Box) ── */}
            <div className="ls-warning-box sd-reveal" data-reveal>
              <div className="ls-warning-head">
                <AlertCircle size={24} color="#DC2626" />
                <h3>When Is a Seizure an Emergency?</h3>
              </div>
              <p className="ls-warning-desc">
                A suspected seizure requires urgent medical attention when it is prolonged, repeated without recovery, associated with significant breathing difficulty, serious injury or the child does not regain appropriate responsiveness. Seek emergency medical care when:
              </p>
              <ul className="ls-warning-list">
                {[
                  'The seizure continues for an extended period',
                  'Seizures occur repeatedly without the child recovering',
                  'The child has significant difficulty breathing',
                  'The child does not regain appropriate responsiveness',
                  'The child is seriously injured during the episode',
                  'The child develops a concerning change in skin colour',
                  'The child appears seriously unwell after the episode',
                ].map((warn) => (
                  <li key={warn} className="ls-warning-item">
                    <FeedingBottle size={16} color="#DC2626" className="sd-bottle-icon sd-bottle-icon-shrink" />
                    <span>{warn}</span>
                  </li>
                ))}
              </ul>
              <p className="ls-warning-footer ">
                When in doubt about a serious or prolonged episode, seek emergency medical care rather than waiting for a routine pediatric appointment.
              </p>
            </div>

            {/* ── Section: What Information Should Parents Bring to a Seizure Consultation? ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              What Information Should Parents Bring to a Seizure Consultation?
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              A detailed description of the episode can be extremely useful.
            </p>
            <div className="ls-checklist-box sd-reveal" data-reveal>
              <p className="sd-copy sd-reveal sd-text sd-text-mt1 ls-guidance-title" data-reveal>
                Parents can bring:
              </p>
              <ul className="ls-checklist-grid">
                {[
                  'Previous medical records',
                  'Birth history, particularly for babies',
                  'Previous neurological or pediatric reports',
                  'Medication information',
                  'Details of previous episodes',
                  'Fever or illness history around the episode',
                  'Information about developmental progress',
                  'A record of when episodes occurred',
                  'A safe video of an episode, if one was already recorded without delaying care',
                ].map((bring) => (
                  <li key={bring} className="ls-checklist-item">
                    <FeedingBottle size={18} color="var(--color-gold)" className="sd-bottle-icon sd-bottle-icon-shrink" />
                    <span>{bring}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="sd-copy sd-reveal sd-text sd-note-italic" data-reveal>
              Try to note the approximate duration and what happened before and after the episode.
            </p>

            {/* ── Section: Seizure Assessment and Child Development ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              Seizure Assessment and Child Development
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              When a child has repeated or unexplained episodes, the pediatrician may consider the child's wider health and development.
            </p>

            <div className="ls-guidance-card sd-reveal" data-reveal>
              <div className="ls-guidance-circle" />
              <h3 className="ls-guidance-title">This may include discussion of:</h3>
              <div className="ls-guidance-grid">
                {[
                  'Developmental milestones',
                  'Speech and communication',
                  'Movement',
                  'Behaviour',
                  'School or everyday functioning',
                  'Previous illnesses',
                  'Birth history',
                  'Growth',
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
            <p className="sd-copy sd-reveal sd-text sp-span" data-reveal>
              A seizure-like episode should be considered within the child's overall clinical history rather than viewed in isolation.
            </p>

            {/* ── Section: Why One Episode Does Not Automatically Establish a Diagnosis ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              Why One Episode Does Not Automatically Establish a Diagnosis
            </h2>
            <p className="sd-copy sd-reveal sp-span" data-reveal>
              A single unusual episode does not by itself establish a diagnosis of epilepsy or another neurological condition.
            </p>
            <p className="sd-copy sd-reveal sd-text sd-text-bold-primary" data-reveal>
              The healthcare professional may need to understand:
            </p>
            <ul className="sd-points sd-reveal" data-reveal>
              {[
                'What the episode looked like',
                'How long it lasted',
                'Whether consciousness changed',
                'Whether there was fever or illness',
                'Whether similar episodes occurred previously',
                "The child's medical and developmental history",
              ].map((stepItem) => (
                <li key={stepItem}>
                  <FeedingBottle size={20} color="var(--color-gold)" className="sd-bottle-icon" />
                  <div><strong>{stepItem}</strong></div>
                </li>
              ))}
            </ul>
            <p className="sd-copy sd-reveal sd-text sd-note-italic" data-reveal>
              Further evaluation may be recommended depending on the clinical situation.
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
                    <span className="sp-span">Dr. Haseen Fathima, MD, DNB (Pediatrics), has 9+ years of experience caring for newborns, infants and children.</span> Her areas of focus include seizures and fits in babies and children, newborn and neonatal care, vaccination, lactation support, child growth and development, and common pediatric concerns.
                  </p>
                </div>
              </div>

              <p className="ls-doctor-paragraph">
                Her approach is focused on understanding the child's symptoms within the context of their age, medical history, development and overall health, while helping parents understand when an episode requires further medical assessment.
              </p>

              <blockquote className="sd-quote ls-doctor-quote sp-span">
                "When parents notice an unusual episode in their child, understanding what happened and knowing when to seek medical care can make a difficult situation easier to navigate."
              </blockquote>

              <div className="ls-actions ls-actions-mt">
                <button onClick={() => navigate('/about')} className="ls-btn-outline">
                  Meet Dr. Haseen Fathima
                </button>
                <button onClick={() => navigate('/appointment')} className="ls-btn-gold">
                  Book a Pediatric Consultation
                </button>
              </div>
            </div>

            {/* ── Section: Clinic Info & Address ── */}
            <div className="ls-clinic-card sd-reveal" data-reveal>
              <h2>Seizures &amp; Fits Care in Krishnagiri</h2>
              <p>
                <span className="sp-span">The Children's Clinic provides pediatric assessment for seizures and fits in babies and children in Krishnagiri.</span>
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
                If your child has experienced an unexplained seizure, fit, unusual movement or episode of reduced responsiveness, contact the clinic for appropriate pediatric guidance. <span className="sp-span"> For a prolonged seizure, significant breathing difficulty or a child who is seriously unwell, seek emergency medical care immediately.</span>
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
              Frequently Asked Questions About Seizures &amp; Fits
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              Common questions families ask about seizures and fits in babies and children in Krishnagiri, with clear answers from our care team.
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
              <h3>When Your Child Experiences Sudden Symptoms &amp; Unexplained Movements, Get the Right Guidance</h3>
              <p className="ls-sub">
                A seizure or unexplained episode can be frightening for parents. Understanding what to observe, what information to record and when urgent medical attention is needed can help families respond appropriately.
              </p>
              <p className="ls-highlight">
                The Children's Clinic in Krishnagiri provides pediatric assessment for seizures and fits in babies and children, alongside broader newborn and pediatric care.
              </p>
              <p className="ls-question">
                Concerned about an unusual episode, seizure or fit?
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

export default SeizuresFits;