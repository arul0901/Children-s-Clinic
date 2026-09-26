import { useEffect, useRef, useState } from 'react';
import {  useNavigate } from 'react-router-dom';
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
    question: "Where can I find a fever doctor for children in Krishnagiri?",
    answer: "The Children's Clinic in Krishnagiri provides pediatric consultations for children with fever and other common childhood health concerns. The doctor can assess the child's symptoms, age and overall condition to determine the appropriate next step."
  },
  {
    question: "Where can I get pediatric cold and cough treatment in Krishnagiri?",
    answer: "The Children's Clinic provides pediatric assessment and care for childhood cold and cough symptoms in Krishnagiri. The appropriate approach depends on the child's symptoms, age, duration and overall health."
  },
  {
    question: "Is every fever in a child serious?",
    answer: "No. The significance of fever depends on the child's age, temperature, duration, associated symptoms and overall condition. Persistent or concerning fever should be discussed with a pediatrician."
  },
  {
    question: "When should I take my child to a doctor for fever?",
    answer: "Consider pediatric assessment when fever persists, returns, is associated with concerning symptoms or when your child appears significantly unwell."
  },
  {
    question: "What should I do if my child has fever and cough?",
    answer: "Monitor the child's overall condition, fluid intake, breathing and symptoms. If the child appears seriously unwell, has breathing difficulty or develops other concerning symptoms, seek prompt medical attention."
  },
  {
    question: "How long does a child's cold usually last?",
    answer: "The course of a childhood cold can vary depending on the cause and the individual child. Persistent, worsening or recurrent symptoms may require pediatric assessment."
  },
  {
    question: "Should I give my child medicine for fever?",
    answer: "Medication decisions should be based on the child's age, weight, health condition and appropriate medical guidance. Parents should not assume that an adult medicine or dose is suitable for a child."
  },
  {
    question: "Can a cough with fever require medical assessment?",
    answer: "Yes. A cough with fever may occur with several illnesses. The child's breathing, activity, fluid intake, duration of symptoms and overall condition can help determine whether assessment is needed."
  },
  {
    question: "When is a child's cough an emergency?",
    answer: "Significant breathing difficulty, bluish or unusual skin colour, reduced responsiveness, seizures, severe dehydration or a child who appears seriously unwell requires prompt medical attention."
  },
  {
    question: "Where is The Children's Clinic located?",
    answer: "The Children's Clinic is located at 35/13, 2nd Cross Rd, Co-operative Colony, Thiruvalluvar Nagar, Krishnagiri, Tamil Nadu 635002."
  }
];

const FeverColdCough = () => {
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
        <img className="sd-hero-bg" src="/src/assets/services/fever-banner.jpg" alt="Pediatric Fever, Cold and Cough Care in Krishnagiri" />
        <div className="sd-hero-overlay">
          <div className="container sd-hero-inner">
            <h2 className="font-plus-jakarta banner-font">Pediatric Fever, Cold &amp; Cough Care</h2>
            
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
              <img src="/src/assets/services/cold.jpg" alt="Pediatric Fever, Cold and Cough Consultation" />
            </div>

            {/* Overview Intro */}
            <div className="sd-reveal" data-reveal>
                <h1 className="sd-heading">Pediatric Fever, Cold &amp; Cough Care in Krishnagiri</h1>
              <p className="sd-copy sd-text">
                Fever, cold and cough are among the common reasons parents seek medical advice for children. While many childhood illnesses are short-lived, parents may still have important questions: How high is too high? When should a child see a pediatrician? Is a cough part of a simple cold, or does it need further assessment?
              </p>
              <p className="sd-copy sd-text">
                <span className='sp-span'>The Children's Clinic in Krishnagiri provides pediatric care for common childhood concerns including fever, cold and cough.</span> Led by <span className='sp-span'>Dr. Haseen Fathima, MD, DNB (Pediatrics), with 9+ years of experience</span>, the clinic focuses on understanding the child's symptoms, overall condition and individual healthcare needs.
              </p>
            </div>

            {/* Top Prompt Callout Box */}
            <div className="ls-callout-box sd-reveal" data-reveal>
              <h3>Worried about your child's fever, cold or cough?</h3>
              <p>Get pediatric guidance to understand the symptoms and determine the appropriate next step.</p>
              <div className="ls-actions">
                <button onClick={() => navigate('/appointment')} className="ls-btn-gold">
                  Book a Pediatric Consultation
                </button>
                <button onClick={() => navigate('/contact')} className="ls-btn-outline">
                  Contact the Clinic
                </button>
              </div>
            </div>

            {/* ── Section: Pediatric Fever, Cold & Cough Care in Krishnagiri ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              Pediatric Fever, Cold &amp; Cough Care in Krishnagiri
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              <span className="sp-span">Pediatric fever, cold and cough care involves assessing a child's symptoms, overall condition and medical history to determine whether home care, observation, treatment or further medical evaluation may be appropriate.</span>
            </p>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              Children can experience respiratory infections and fever for many different reasons. The presence of a particular symptom does not always indicate the same illness or require the same treatment.
            </p>

            <div className="ls-guidance-card sd-reveal" data-reveal>
              <div className="ls-guidance-circle" />
              <h3 className=" ls-guidance-title">
                <FeedingBottle size={24} color="var(--color-gold)" />
                A pediatric assessment may consider:
              </h3>
              <div className="ls-guidance-grid">
                {[
                  'Fever and its pattern',
                  'Cough',
                  'Runny or blocked nose',
                  'Sore throat',
                  'Feeding and fluid intake',
                  'Breathing',
                  'Activity level',
                  'Duration of symptoms',
                  'Other symptoms occurring at the same time',
                  "The child's age and medical history",
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

            {/* ── Section: Fever in Children: What Parents Should Know ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              Fever in Children: What Parents Should Know
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              <span className="sp-span">Fever is an increase in body temperature that can occur when the body is responding to an infection or another medical condition.</span> In children, the significance of fever depends on factors such as the child's age, temperature, duration, associated symptoms and general condition.
            </p>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              Parents often focus only on the number shown on a thermometer. However,<span className="sp-span"> how the child looks and behaves can also be important when deciding whether medical assessment is needed.</span>
            </p>

            <div className="ls-guidance-card sd-reveal" data-reveal>
              <h3 className="ls-guidance-title">A child with fever may have:</h3>
              <div className="ls-guidance-circle" />
              <div className="ls-guidance-grid">
                {[
                  'Increased tiredness',
                  'Reduced appetite',
                  'Irritability',
                  'Chills',
                  'Body discomfort',
                  'Increased sleepiness',
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
              The underlying cause and the child's overall condition need to be considered.
            </p>

            {/* ── Section: When Should a Child With Fever See a Pediatrician? ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              When Should a Child With Fever See a Pediatrician?
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              <span className="sp-span">A child with persistent, concerning or unexplained fever may need pediatric assessment, particularly when fever is accompanied by changes in behaviour, breathing, hydration, feeding or general wellbeing.</span>
            </p>

            <div className="ls-guidance-card sd-reveal" data-reveal>
              <div className="ls-guidance-circle" />
              <h3 className="ls-guidance-title">Parents should consider medical evaluation when:</h3>
              <ul className="ls-guidance-grid">
                {[
                  'Fever persists or keeps returning',
                  'The child appears unusually unwell',
                  'The child is unusually sleepy or difficult to wake',
                  'There is significant difficulty breathing',
                  'The child is unable to maintain adequate fluid intake',
                  'There are signs of dehydration',
                  'The child develops a seizure or suspected fit',
                  'There are other concerning symptoms',
                  "Parents are worried about the child's overall condition",
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
              The appropriate response can vary according to the child's age and clinical situation.
            </p>

            {/* ── Section: Pediatric Cold & Cough Treatment in Krishnagiri ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              Pediatric Cold &amp; Cough Treatment in Krishnagiri
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              <span className="sp-span">Pediatric cold and cough treatment depends on the child's symptoms, likely cause, age and overall health rather than on the cough alone.</span>
            </p>
            <p className="sd-copy sd-reveal sd-text sd-text-bold-primary" data-reveal>
              A child's cold may involve:
            </p>
            <ul className="sd-points sd-reveal" data-reveal>
              {[
                'Runny nose',
                'Nasal congestion',
                'Sneezing',
                'Cough',
                'Sore throat',
                'Mild fever',
                'Reduced appetite',
              ].map((q) => (
                <li key={q}>
                  <FeedingBottle size={20} color="var(--color-primary)" className="sd-bottle-icon" />
                  <div><strong>{q}</strong></div>
                </li>
              ))}
            </ul>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              Many childhood respiratory symptoms can improve with supportive care, but persistent or worsening symptoms may require pediatric assessment.
            </p>
            <p className="sd-copy sd-reveal sd-text sd-note-italic-muted" data-reveal>
              The aim of a consultation is to understand the child's condition and determine whether observation, supportive measures, medication or further assessment may be appropriate.
            </p>

            {/* ── Section: Is Every Child's Cough the Same? ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              Is Every Child's Cough the Same?
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              No. A cough can occur with several different childhood conditions, so its duration, character and associated symptoms matter.
            </p>
            <p className="sd-copy sd-reveal sd-text sd-text-bold-primary" data-reveal>
              Parents may notice:
            </p>
            <div className="ls-guidance-card sd-reveal" data-reveal>
              <div className="ls-guidance-circle" />
              <div className="ls-guidance-grid">
                {[
                  'Dry cough',
                  'Cough with mucus',
                  'Night-time cough',
                  'Cough associated with a runny nose',
                  'Cough with fever',
                  'Persistent or recurrent cough',
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
              The type of cough alone does not establish a diagnosis.
            </p>
            <p className="sd-copy sd-reveal sd-text sd-note-italic" data-reveal>
              A pediatrician may consider the child's age, duration of symptoms, breathing, fever, general condition and medical history when assessing the concern.
            </p>

            {/* ── Section: Fever With Cold and Cough (CTA Banner) ── */}
            <div className="ls-cta-banner sd-reveal" data-reveal>
              <h3>Fever With Cold and Cough: What Does It Mean?</h3>
              <p>
                Fever occurring with cold or cough can be associated with an infection, but the combination of symptoms does not identify the cause by itself. <strong>Parents should pay attention to the child's overall condition.</strong>
              </p>
              <p><strong> For example, ask:</strong></p>
              <div className="ls-guidance-grid service-neo">
                {[
                  'Is the child drinking fluids?',
                  'Is the child reasonably alert between episodes of fever?',
                  'Is breathing comfortable?',
                  'Is the child feeding normally for their age?',
                  'Are symptoms improving or worsening?',
                  'How long have the symptoms been present?',
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
                <span className="font-happy-monkey strong">These observations can provide useful information when discussing the child's illness with a pediatrician.</span>
              </p>
              <button onClick={() => navigate('/appointment')} className="ls-btn-gold">
                Book a Pediatric Consultation <ArrowRight size={18} />
              </button>
            </div>

            {/* ── Section: How Is a Child With Fever or Cold Evaluated? ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              How Is a Child With Fever or Cold Evaluated?
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              <span className="sp-span">A pediatric evaluation begins with understanding the child's symptoms and examining the child in the context of their age, medical history and overall condition.</span>
            </p>
            <p className="sd-copy sd-reveal sd-text sd-text-bold-primary" data-reveal>
              Depending on the presentation, the doctor may consider:
            </p>
            <ul className="sd-points sd-reveal" data-reveal>
              {[
                "The child's age",
                'Temperature and fever pattern',
                'Duration of symptoms',
                'Cough and respiratory symptoms',
                'Feeding and fluid intake',
                'Breathing',
                'Activity and alertness',
                'Previous medical conditions',
                'Medications already given',
                'Other associated symptoms',
              ].map((stepItem) => (
                <li key={stepItem}>
                  <FeedingBottle size={20} color="var(--color-gold)" className="sd-bottle-icon" />
                  <div><strong>{stepItem}</strong></div>
                </li>
              ))}
            </ul>
            <p className="sd-copy sd-reveal sd-text sd-note-italic" data-reveal>
              Further evaluation may be recommended when the symptoms or examination indicate that it is necessary.
            </p>

            {/* ── Section: What Should Parents Observe at Home? ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              What Should Parents Observe at Home?
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              Parents can provide useful information by observing how their child is doing between periods of fever or illness.
            </p>
            <div className="ls-checklist-box sd-reveal" data-reveal>
              <p className="sd-copy sd-reveal sd-text sd-text-mt1 ls-guidance-title" data-reveal>
                Consider noting:
              </p>
              <ul className="ls-checklist-grid">
                {[
                  'Temperature readings',
                  'When the fever started',
                  'How often fever occurs',
                  'Cough pattern',
                  'Breathing changes',
                  'Fluid intake',
                  'Urination',
                  'Appetite',
                  'Activity level',
                  'New symptoms',
                  'Medicines already given',
                ].map((bring) => (
                  <li key={bring} className="ls-checklist-item">
                    <FeedingBottle size={18} color="var(--color-gold)" className="sd-bottle-icon sd-bottle-icon-shrink" />
                    <span>{bring}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="sd-copy sd-reveal sd-text sd-note-italic" data-reveal>
              This information can help the pediatrician understand how the illness has progressed.
            </p>

            {/* ── Section: Fever Medicine: Why the Dose Matters ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              Fever Medicine: Why the Dose Matters
            </h2>
            <div className="sd-feature">
              <img src="/src/assets/services/cough.jpg" alt="Pediatric Fever, Cold and Cough Consultation" />
            </div>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              <span className="sp-span">Children's medicines should be given according to appropriate medical guidance, because medication choice and dosing can depend on factors such as the child's age, weight and health condition</span>.
            </p>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              Parents should avoid assuming that an adult medicine or dose is suitable for a child.
            </p>

            <div className="ls-guidance-card sd-reveal" data-reveal>
              <div className="ls-guidance-circle" />
              <h3 className="ls-guidance-title">If you are uncertain about:</h3>
              <div className="ls-guidance-grid">
                {[
                  'Which medicine is appropriate',
                  'How much should be given',
                  'How frequently it should be given',
                  'Whether two medicines can be used together',
                  "Whether a medicine is suitable for your child's age",
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
              consult a pediatrician or another qualified healthcare professional.
            </p>

            {/* ── Section: When Is a Cold or Cough More Concerning? ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              When Is a Cold or Cough More Concerning?
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              A simple cold may improve with time, but some symptoms warrant closer attention.
            </p>
            <p className="sd-copy sd-reveal sd-text sd-text-bold-primary" data-reveal>
              Parents should seek pediatric advice when:
            </p>
            <ul className="sd-points sd-reveal" data-reveal>
              {[
                'Symptoms are persistent or worsening',
                'Cough interferes significantly with sleep or daily activity',
                'The child has breathing difficulty',
                'Fever persists or returns',
                'The child is drinking poorly',
                'The child appears unusually tired or unwell',
                'There are repeated episodes',
                'The child has an underlying health condition',
              ].map((prob) => (
                <li key={prob}>
                  <FeedingBottle size={20} color="var(--color-primary)" className="sd-bottle-icon" />
                  <div><strong>{prob}</strong></div>
                </li>
              ))}
            </ul>
            <p className="sd-copy sd-reveal sd-text sd-note-italic" data-reveal>
              The appropriate evaluation depends on the child's individual circumstances.
            </p>

            {/* ── Section: When Should Parents Seek Urgent Medical Attention? ── */}
            <div className="ls-warning-box sd-reveal" data-reveal>
              <div className="ls-warning-head">
                <AlertCircle size={24} color="#DC2626" />
                <h3>Fever, Cold or Cough: When Is Urgent Care Needed?</h3>
              </div>
              <p className="ls-warning-desc">
                A child who has significant breathing difficulty, reduced responsiveness, a seizure, severe dehydration or appears seriously unwell should receive prompt medical attention. Parents should seek urgent medical care if a child has signs such as:
              </p>
              <ul className="ls-warning-list">
                {[
                  'Significant difficulty breathing',
                  'Bluish or unusual skin colour',
                  'Severe difficulty waking',
                  'Seizure or suspected fit',
                  'Significant dehydration',
                  'Persistent vomiting with inability to maintain fluids',
                  'Sudden deterioration',
                  'A child who appears seriously unwell',
                ].map((warn) => (
                  <li key={warn} className="ls-warning-item">
                    <FeedingBottle size={16} color="#DC2626" className="sd-bottle-icon sd-bottle-icon-shrink" />
                    <span>{warn}</span>
                  </li>
                ))}
              </ul>
              <p className="ls-warning-footer ">
                A routine appointment may not be appropriate when a child is experiencing a medical emergency.
              </p>
            </div>

            {/* ── Section: Common Cold or Something That Needs Assessment? ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              Common Cold or Something That Needs Assessment?
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              One of the most useful questions for parents is not simply <span className="sp-span">"Does my child have a cold?"</span>, but <span className="sp-span">"How is my child doing overall?"</span>
            </p>
            <div className="ls-cards-grid">
              {[
                { title: 'A Mild Illness May Involve', desc: 'Cold symptoms with relatively normal activity, fluid intake and breathing.' },
                { title: 'A Concern May Require Assessment When', desc: 'Symptoms persist, worsen or are associated with significant fever, poor intake, breathing changes or a noticeable change in behaviour.' },
                { title: 'Urgent Assessment May Be Required When', desc: 'The child has significant breathing difficulty, reduced responsiveness, seizures, severe dehydration or appears seriously unwell.' },
              ].map((card) => (
                <article key={card.title} className="ls-concern-card sd-reveal" data-reveal>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </article>
              ))}
            </div>
            <p className="sd-copy sd-reveal sd-text sd-text-mt1" data-reveal>
              This framework does not replace a medical diagnosis. It helps parents understand <span className="sp-span">when professional assessment may be appropriate.</span>
            </p>

            {/* ── Section: Pediatric Fever Care for Infants and Young Children ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              Pediatric Fever Care for Infants and Young Children
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              The age of the child matters when assessing fever.
            </p>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              <span className="sp-span">Infants, particularly very young babies, may require a different approach to fever than older children.</span> Parents should seek medical advice when a young infant develops fever rather than relying only on general advice intended for older children.
            </p>
            <p className="sd-copy sd-reveal sd-text sd-note-italic" data-reveal>
              The child's age, symptoms and overall condition should guide the next step.
            </p>

            {/* ── Section: What Should You Bring to a Pediatric Fever Consultation? ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              What Should You Bring to a Pediatric Fever Consultation?
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              Parents can bring:
            </p>
            <div className="ls-checklist-box sd-reveal" data-reveal>
              <ul className="ls-checklist-grid">
                {[
                  'Recent temperature readings',
                  'Details of when symptoms began',
                  'Previous medical reports',
                  'Vaccination information where relevant',
                  'List of medicines already given',
                  'Information about fluid intake',
                  'Details of previous illnesses',
                  'Information about recurring fever or cough',
                  'Any relevant medical history',
                ].map((bring) => (
                  <li key={bring} className="ls-checklist-item">
                    <FeedingBottle size={18} color="var(--color-gold)" className="sd-bottle-icon sd-bottle-icon-shrink" />
                    <span>{bring}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="sd-copy sd-reveal sd-text sd-note-italic" data-reveal>
              If possible, note how the child's symptoms have changed over time.
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
                    <span className="sp-span">Dr. Haseen Fathima, MD, DNB (Pediatrics), has 9+ years of experience caring for newborns, infants and children.</span> Her areas of focus include common pediatric concerns such as fever, cold and cough, along with newborn care, neonatal care, lactation support, vaccination and child growth and development.
                  </p>
                </div>
              </div>

              <p className="ls-doctor-paragraph">
                Her approach focuses on understanding the child's symptoms within the wider context of their age, health history and overall wellbeing, while helping parents understand when a common childhood illness can be monitored and when medical assessment may be appropriate.
              </p>

              <blockquote className="sd-quote ls-doctor-quote sp-span">
                "When a child is unwell, parents need clear information as much as they need medical care. My goal is to understand each child's needs carefully and guide families with clarity and compassion."
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
              <h2>Pediatric Cold &amp; Fever Care in Krishnagiri</h2>
              <p>
                <span className="sp-span">The Children's Clinic provides pediatric care for fever, cold and cough in Krishnagiri,</span> with an approach focused on understanding the child's individual symptoms and overall health.
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
                If your child has persistent fever, cold, cough or other concerning symptoms, contact the clinic to discuss an appropriate pediatric consultation.
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
              Frequently Asked Questions About Pediatric Fever, Cold &amp; Cough
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              Common questions families ask about pediatric fever, cold and cough care in Krishnagiri, with clear answers from our care team.
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
              <h3>When Your Child Is Unwell, Get the Right Guidance</h3>
              <p className="ls-sub">
                Fever, cold and cough are common childhood concerns, but every child responds differently to illness. Understanding the child's symptoms, overall condition and when professional assessment is needed can help parents respond appropriately.
              </p>
              <p className="ls-highlight">
                The Children's Clinic in Krishnagiri provides pediatric care for childhood fever, cold and cough, along with broader pediatric and newborn services.
              </p>
              <p className="ls-question">
                Concerned about your child's fever, cold or cough?
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

export default FeverColdCough;