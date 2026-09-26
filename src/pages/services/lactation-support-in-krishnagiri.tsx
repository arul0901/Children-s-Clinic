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
    question: "Where can I get lactation support in Krishnagiri?",
    answer: "The Children's Clinic in Krishnagiri provides lactation and breastfeeding support as part of its pediatric and newborn-care services. Parents can discuss breastfeeding, infant-feeding and related concerns with the pediatric team."
  },
  {
    question: "Is there a lactation consultant in Krishnagiri?",
    answer: "Parents looking for lactation support in Krishnagiri can consult The Children's Clinic for breastfeeding and infant-feeding concerns. The clinic provides this support within its pediatric and newborn-care setting."
  },
  {
    question: "Where can I get breastfeeding support in Krishnagiri?",
    answer: "The Children's Clinic provides breastfeeding support in Krishnagiri for mothers experiencing feeding, attachment, milk-supply or newborn-feeding concerns. Support is tailored to the mother and baby's individual circumstances."
  },
  {
    question: "When should I seek lactation support?",
    answer: "You can consider lactation support when breastfeeding difficulties persist or when you have concerns about attachment, positioning, milk supply, feeding patterns or your baby's feeding and growth."
  },
  {
    question: "Can lactation support help with breastfeeding attachment?",
    answer: "Yes. Attachment and positioning can be discussed during a breastfeeding consultation, with guidance based on the mother and baby's individual feeding situation."
  },
  {
    question: "Can I get help if I am worried about low milk supply?",
    answer: "Yes. Concerns about milk supply can be discussed during a consultation. The baby's feeding pattern, growth and overall health may be considered when assessing the concern."
  },
  {
    question: "Can premature babies receive breastfeeding support?",
    answer: "Yes. Premature babies may have individualized feeding needs depending on their gestational age, maturity and health. Feeding and growth may require closer observation."
  },
  {
    question: "Should I bring my baby's medical records?",
    answer: "Yes. Relevant health records, growth information and details about the baby's feeding pattern can provide useful context during the consultation."
  },
  {
    question: "Can lactation support replace pediatric care?",
    answer: "No. Lactation support focuses on breastfeeding and infant-feeding concerns. Pediatric care addresses the child's overall health, and babies who appear seriously unwell require appropriate medical assessment."
  },
  {
    question: "Where is The Children's Clinic located?",
    answer: "The Children's Clinic is located at 35/13, 2nd Cross Rd, Co-operative Colony, Thiruvalluvar Nagar, Krishnagiri, Tamil Nadu 635002."
  }
];

const LactationSupport = () => {
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
        <img className="sd-hero-bg" src="/banner.jpg" alt="Lactation Support in Krishnagiri" />
        <div className="sd-hero-overlay">
          <div className="container sd-hero-inner">
            <h2 className="font-plus-jakarta banner-font">Lactation Support </h2>
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
              <img src="/lactationsupport.jpg" alt="Lactation and Breastfeeding Support Consultation" />
            </div>

            {/* Overview Intro */}
            <div className="sd-reveal" data-reveal>
              <h1 className="sd-heading h1-font">Lactation Support in Krishnagiri for Breastfeeding Mothers</h1>
              <p className="sd-copy sd-text">
                Breastfeeding can be an important part of newborn care, but every mother and baby may have a different feeding experience. Questions about positioning, attachment, feeding frequency, milk supply, or whether a baby is feeding well are common, particularly during the early weeks.
              </p>
              <p className="sd-copy sd-text">
                At <span className='sp-span'>The Children’s Clinic in Krishnagiri</span>, lactation and breastfeeding support is provided as part of child-focused pediatric and newborn care. <span className='sp-span'>Dr. Haseen Fathima, MD, DNB (Pediatrics), with 9+ years of experience</span>, provides guidance for mothers and families dealing with breastfeeding and infant-feeding concerns.
              </p>
            </div>

            {/* Top Prompt Callout Box */}
            <div className="ls-callout-box sd-reveal" data-reveal>
              <h3>Having concerns about breastfeeding or your baby's feeding?</h3>
              <p>Get individual guidance based on your baby's needs, feeding pattern and overall health.</p>
              <div className="ls-actions">
                <button onClick={() => navigate('/appointment')} className="ls-btn-gold">
                  Book a Lactation Consultation
                </button>
                <button onClick={() => navigate('/contact')} className="ls-btn-outline">
                  Contact the Clinic
                </button>
              </div>
            </div>

            {/* ── Section: What Can It Help With? ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              Lactation Support in Krishnagiri: What Can It Help With?
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              <span className="sp-span">Lactation support helps mothers understand and address common breastfeeding and infant-feeding concerns while considering the baby's overall health and development</span>. Support may be useful when parents have questions about breastfeeding technique, attachment, feeding patterns, milk supply or feeding a premature baby.
            </p>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              Every breastfeeding experience is different. Rather than assuming that one approach works for everyone, a consultation can focus on the specific concerns affecting the mother and baby.
            </p>

            {/* ── Guidance Included Card Container ── */}
            <div className="ls-guidance-card sd-reveal" data-reveal>
              <div className="ls-guidance-circle" />
              <h3 className="font-happy-monkey ls-guidance-title">
                <FeedingBottle size={24} color="var(--color-gold)" />
                Lactation support may include guidance related to:
              </h3>

              <div className="ls-guidance-grid">
                {[
                  'Breastfeeding positioning',
                  'Baby attachment during feeding',
                  'Feeding frequency and routine',
                  'Concerns about milk supply',
                  'Newborn feeding',
                  'Infant feeding difficulties',
                  'Feeding premature babies',
                  'Concerns about feeding and growth',
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

            {/* ── Section: Support for New Mothers ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              Breastfeeding Support in Krishnagiri for New Mothers
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              The early days of breastfeeding can involve a period of adjustment for both mother and baby. Parents may have questions about how frequently their baby should feed, whether the baby is attaching properly or whether the baby appears satisfied after feeding.
            </p>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              <span className="sp-span">Breastfeeding support in Krishnagiri can help parents understand these concerns and determine what type of guidance or pediatric assessment may be appropriate.</span>
            </p>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              Support is individualized rather than based on a single feeding routine. The baby's age, health, feeding pattern and growth may all be relevant when discussing breastfeeding concerns.
            </p>

            {/* ── Section: When Should You See a Lactation Consultant? ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              When Should You See a Lactation Consultant in Krishnagiri?
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              <span className="sp-span">A mother may consider a lactation consultation when breastfeeding difficulties continue or when she is uncertain about feeding, attachment, milk supply or her baby's feeding pattern. </span>Professional guidance can help identify the concern and determine whether practical breastfeeding support or further pediatric evaluation is appropriate.
            </p>

            <div className="ls-guidance-card sd-reveal" data-reveal>
              <h3 className="ls-guidance-title">You may consider seeking support if you have:</h3>
              <div className="ls-guidance-circle" />
              <ul className="ls-guidance-grid">
                {[
                  'Difficulty establishing breastfeeding',
                  'Questions about baby\'s attachment',
                  'Concerns about positioning',
                  'Persistent concerns about milk supply',
                  'Uncertainty about feeding frequency',
                  'Concerns about whether your baby is feeding adequately',
                  'Questions about breastfeeding a premature baby',
                  'Concerns about your baby\'s feeding and growth',
                  'Ongoing breastfeeding difficulties',
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
              You do not need to wait until a feeding concern becomes severe before discussing it with a healthcare professional.
            </p>

            {/* ── Section: What Does Lactation Support Include? ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              What Does Lactation Support Include?
            </h2>
            <div className="ls-cards-stack">
              {[
                { title: 'Breastfeeding Positioning', desc: 'Comfortable positioning can be an important part of breastfeeding. During a consultation, parents can discuss positioning concerns and receive guidance appropriate to their individual situation.' },
                { title: 'Baby Attachment', desc: 'Parents may have questions about whether their baby is attaching properly during feeds. Understanding the feeding process can help identify areas where additional support may be useful.' },
                { title: 'Feeding Patterns', desc: 'Newborn feeding patterns can vary. Parents may need guidance when they are unsure about feeding frequency or whether their baby\'s feeding behaviour is concerning.' },
                { title: 'Milk-Supply Concerns', desc: 'Some mothers worry that they are not producing enough breast milk. A perceived low milk supply does not necessarily mean that milk production is insufficient. The baby\'s feeding pattern, growth and overall health may be considered when assessing this concern.' },
                { title: 'Newborn Feeding', desc: 'Feeding concerns during the newborn period can sometimes require consideration of the baby\'s wider health and development. Pediatric assessment may be appropriate when feeding difficulties are persistent or associated with other concerns.' },
              ].map((card) => (
                <article key={card.title} className="ls-info-card sd-reveal" data-reveal>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </article>
              ))}
            </div>

            {/* ── Section: Breastfeeding Problems That May Need Professional Support ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              Breastfeeding Problems That May Need Professional Support
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              Breastfeeding challenges can be different for every mother and baby. Some concerns may improve with practical guidance, while others may require closer pediatric evaluation.
            </p>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              Parents may seek support when they notice:
            </p>
            <ul className="sd-points sd-reveal" data-reveal>
              {[
                'Difficulty with breastfeeding',
                'Persistent feeding concerns',
                'Difficulty with attachment',
                'Uncertainty about milk supply',
                'Difficulty establishing a feeding routine',
                'Concerns about the baby\'s feeding behaviour',
                'Concerns about feeding and growth',
                'Feeding challenges involving a premature baby',
              ].map((prob) => (
                <li key={prob}>
                  <FeedingBottle size={20} color="var(--color-primary)" className="sd-bottle-icon" />
                  <div><strong>{prob}</strong></div>
                </li>
              ))}
            </ul>
            <p className="sd-copy sd-reveal sd-text sd-note-italic-muted" data-reveal>
              The purpose of a consultation is not to assume a cause but to understand the individual feeding concern and identify an appropriate next step.
            </p>

            {/* ── Section: Support for Newborns & Premature Babies ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              Lactation Support for Newborns and Premature Babies
            </h2>
            <div className="sd-feature">
              <img src="/lactationsupport1.jpg" alt="Lactation and Breastfeeding Support Consultation" />
            </div>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              Premature babies can have different feeding requirements depending on their gestational age, maturity and health.
            </p>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              Some premature babies may require closer observation of feeding and growth. Their individual ability to feed safely can influence how breastfeeding is introduced and supported.
            </p>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              At The Children's Clinic, breastfeeding concerns can be considered alongside newborn and pediatric care. This can be particularly useful when parents have questions about feeding and their baby's overall wellbeing.
            </p>

            {/* ── Section: How Does a Consultation Work? ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              How Does a Lactation Consultation Work?
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              <span className="sp-span">A lactation consultation starts by understanding the mother’s and baby’s individual feeding concerns.</span> The discussion may include feeding patterns, the baby's health, growth, positioning, attachment and any previous difficulties.
            </p>
            <p className="sd-copy sd-reveal sd-text sd-text-bold-primary" data-reveal>
              Depending on the concern, the consultation may consider:
            </p>
            <ul className="sd-points sd-reveal" data-reveal>
              {[
                "Baby's age and health",
                "Mother's primary breastfeeding concern",
                "Current feeding pattern",
                "Positioning and attachment",
                "Concerns about milk supply",
                "Baby's growth and feeding history",
                "Prematurity or other newborn factors",
                "Whether additional pediatric assessment is needed",
              ].map((stepItem) => (
                <li key={stepItem}>
                  <FeedingBottle size={20} color="var(--color-gold)" className="sd-bottle-icon" />
                  <div><strong>{stepItem}</strong></div>
                </li>
              ))}
            </ul>
            <p className="sd-copy sd-reveal sd-text sd-note-italic" data-reveal>
              The exact approach depends on the individual mother and baby.
            </p>

            {/* ── Section: Lactation Support With Pediatric Care ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              Lactation Support With Pediatric Care
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              Breastfeeding does not exist separately from a baby's overall health.
            </p>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              For example, feeding concerns may occur alongside questions about prematurity, newborn jaundice, growth or general wellbeing. Understanding the wider pediatric context can therefore be important when discussing infant feeding.
            </p>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              At <span className="sp-span">The Children's Clinic,</span> lactation support is provided within a broader pediatric and newborn-care setting. This gives parents an opportunity to discuss breastfeeding concerns while also considering their child's overall health and development.
            </p>

            {/* ── Section: Is Your Baby Feeding Well? (CTA Banner) ── */}
            <div className="ls-cta-banner sd-reveal" data-reveal>
              <h3>Is Your Baby Feeding Well?</h3>
              <p>
                Parents often wonder whether their newborn is getting enough milk, particularly during the early weeks. <strong>Feeding concerns should be considered in the context of the baby's overall health, feeding pattern and growth rather than relying on one sign alone.</strong>
              </p>
              <p className="ls-sub">
                If you are unsure whether your baby is feeding well, a pediatric consultation can help you discuss what you are observing and understand whether additional feeding support or assessment may be appropriate.
              </p>
              <button onClick={() => navigate('/appointment')} className="ls-btn-gold">
                Talk to Our Pediatric Team <ArrowRight size={18} />
              </button>
            </div>

            {/* ── Section: Breastfeeding Support for Different Feeding Concerns ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              Breastfeeding Support for Different Feeding Concerns
            </h2>
            <div className="ls-cards-grid">
              {[
                { title: 'Concerns About Milk Supply', desc: 'Feeling that milk supply may be low can be stressful for a new mother. A consultation can help explore the concern and consider the baby\'s feeding and growth.' },
                { title: 'Difficulty With Baby\'s Attachment', desc: 'Parents may seek support when they are unsure about how their baby attaches during breastfeeding. Individual guidance can help address positioning and attachment concerns.' },
                { title: 'Feeding a Premature Baby', desc: 'Premature babies may require individualized feeding support. Their gestational age, health and feeding ability can influence the appropriate approach.' },
                { title: 'Questions About Feeding Frequency', desc: 'Parents may have questions about how often their newborn should feed. Rather than relying on a rigid routine, feeding concerns can be discussed based on the individual baby\'s circumstances.' },
              ].map((card) => (
                <article key={card.title} className="ls-concern-card sd-reveal" data-reveal>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </article>
              ))}
            </div>

            {/* ── Section: When Concerns Need Urgent Pediatric Attention ── */}
            <div className="ls-warning-box sd-reveal" data-reveal>
              <div className="ls-warning-head">
                <AlertCircle size={24} color="#DC2626" />
                <h3>When Breastfeeding Concerns Need Pediatric Attention</h3>
              </div>
              <p className="ls-warning-desc">
                Lactation support focuses on breastfeeding and feeding concerns, but some symptoms may require broader medical assessment. Parents should seek appropriate medical attention if a baby appears seriously unwell or develops concerning symptoms such as:
              </p>
              <ul className="ls-warning-list">
                {[
                  'Significant difficulty breathing',
                  'Unusual unresponsiveness',
                  'Marked weakness',
                  'Repeated vomiting',
                  'Signs suggesting dehydration',
                  'Significant deterioration in general condition',
                ].map((warn) => (
                  <li key={warn} className="ls-warning-item">
                    <FeedingBottle size={16} color="#DC2626" className="sd-bottle-icon sd-bottle-icon-shrink" />
                    <span>{warn}</span>
                  </li>
                ))}
              </ul>
              <p className="ls-warning-footer">
                Breastfeeding support should not delay urgent medical care when a newborn or infant appears seriously unwell.
              </p>
            </div>

            {/* ── Section: What Should You Bring? ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              What Should You Bring to a Lactation Consultation?
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              Having relevant information available can make the consultation more useful. Parents may bring:
            </p>
            <div className="ls-checklist-box sd-reveal" data-reveal>
              <ul className="ls-checklist-grid">
                {[
                  "Baby's health records",
                  "Growth information, if available",
                  "Vaccination records where relevant",
                  "Details about feeding frequency",
                  "Previous medical reports",
                  "Information about previous breastfeeding difficulties",
                  "Questions they would like to discuss",
                ].map((bring) => (
                  <li key={bring} className="ls-checklist-item">
                    <FeedingBottle size={18} color="var(--color-gold)" className="sd-bottle-icon sd-bottle-icon-shrink" />
                    <span>{bring}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="sd-copy sd-reveal sd-text sd-note-italic" data-reveal>
              Parents should also explain what they have noticed during feeds and at home.
            </p>

            {/* ── Section: Choosing the Right Support ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              Lactation Consultant in Krishnagiri: Choosing the Right Support
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              When searching for a <span className="sp-span">lactation consultant in Krishnagiri</span>, parents should look for support that considers both breastfeeding and the baby's health.
            </p>
            <p className="sd-copy sd-reveal sd-text sd-text-bold-primary" data-reveal>
              Useful questions to ask include:
            </p>
            <ul className="sd-points sd-reveal" data-reveal>
              {[
                "What type of breastfeeding concern are we experiencing?",
                "Does my baby appear to be feeding appropriately?",
                "Could my baby's growth be relevant to the feeding concern?",
                "Do we need additional pediatric assessment?",
                "Does my baby need specific support because of prematurity?",
                "What should I monitor at home?",
              ].map((q) => (
                <li key={q}>
                  <FeedingBottle size={20} color="var(--color-primary)" className="sd-bottle-icon" />
                  <div><strong>{q}</strong></div>
                </li>
              ))}
            </ul>
            <p className="sd-copy sd-reveal sd-text sd-text-mt1" data-reveal>
              At The Children's Clinic, breastfeeding concerns are considered within a pediatric care setting, allowing parents to discuss feeding alongside relevant newborn and child-health concerns.
            </p>

            {/* ── Section: Clinic Info & Address ── */}
            <div className="ls-clinic-card sd-reveal" data-reveal>
              <h2>Know about Lactation Support in Krishnagiri at The Children's Clinic</h2>
              <p>
                The Children's Clinic provides lactation and breastfeeding support as part of its focus on newborn and pediatric care in Krishnagiri. The clinic is led by <span className="sp-span">Dr. Haseen Fathima, MD, DNB (Pediatrics)</span>, with 9+ years of experience. Her areas of focus include newborn care, neonatal care, lactation support, vaccination, growth and development monitoring and common pediatric concerns.
              </p>

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
                Parents looking for <span className="sp-span">lactation support in Krishnagiri</span>, breastfeeding guidance or help understanding infant-feeding concerns can contact the clinic for a consultation.
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
                    <span className="sp-span">Dr. Haseen Fathima, MD, DNB (Pediatrics), has 9+ years of experience caring for newborns, infants and children.</span> Her areas of focus include lactation support, breastfeeding concerns, newborn care, neonatal care, premature baby care, vaccination, and child growth and development.
                  </p>
                </div>
              </div>

              <p className="ls-doctor-paragraph">
                With a pediatric perspective, Dr. Haseen Fathima focuses on understanding breastfeeding and infant-feeding concerns in the context of the baby's overall health, feeding pattern and growth. Parents can discuss concerns such as breastfeeding difficulties, attachment, feeding patterns, milk-supply concerns and feeding challenges in premature babies.
              </p>

              <blockquote className="sd-quote ls-doctor-quote sp-span">
                “Every mother and baby has a different breastfeeding journey. My goal is to understand their individual needs and provide thoughtful guidance while supporting the baby’s health and wellbeing.”
              </blockquote>

              <div className="ls-actions ls-actions-mt">
                <button onClick={() => navigate('/about')} className="ls-btn-outline">
                  Meet Dr. Haseen Fathima
                </button>
                <button onClick={() => navigate('/appointment')} className="ls-btn-gold">
                  Book a Lactation Consultation
                </button>
              </div>
            </div>

            {/* ── Section: Frequently Asked Questions ── */}
            <h2 className="sd-heading sd-faq-title sd-reveal" data-reveal>
              Frequently Asked Questions About Lactation Support
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              Common questions families ask about breastfeeding and lactation support in Krishnagiri, with clear answers from our care team.
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
              <h3>Get the Right Support for Your Breastfeeding Journey</h3>
              <p className="ls-sub">
                Breastfeeding can come with questions, adjustments and concerns, particularly during the early weeks. Getting appropriate guidance can help parents understand their baby's feeding needs and know when further assessment may be useful.
              </p>
              <p className="ls-highlight">
                At The Children's Clinic in Krishnagiri, lactation and breastfeeding support is provided alongside pediatric and newborn care.
              </p>
              <p className="ls-question">
                Concerned about breastfeeding, feeding or your baby's growth?
              </p>
              <button onClick={() => navigate('/appointment')} className="ls-btn-gold">
                Book a Lactation Consultation <ArrowRight size={18} />
              </button>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default LactationSupport;
