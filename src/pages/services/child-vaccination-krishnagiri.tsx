import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Minus, Plus,
  MapPin, ArrowRight,
  ExternalLink
} from 'lucide-react';
import FeedingBottle from '../../components/common/FeedingBottle';
import ServiceSidebar from './ServiceSidebar';
import './ServicePage.css';
import './ServiceSidebar.css';

const FAQS = [
  {
    question: "Where can I find a vaccination centre in Krishnagiri?",
    answer: "The Children's Clinic provides child vaccination in Krishnagiri as part of its pediatric and preventive healthcare services. Parents can discuss vaccination schedules, records and related concerns with the pediatric team."
  },
  {
    question: "What should I bring for my child's vaccination?",
    answer: "Bring your child's vaccination record and any relevant medical information. If your child has had a previous vaccine reaction or has an important medical condition, inform the pediatrician."
  },
  {
    question: "What if my child missed a vaccination?",
    answer: "A missed vaccine should be reviewed with a pediatrician rather than handled by guessing or restarting the schedule. The appropriate catch-up approach depends on the child's age, previous doses and the specific vaccine."
  },
  {
    question: "Can my child receive a vaccine if they have a cold?",
    answer: "It depends on the child's current health and the severity of the illness. Parents should inform the pediatrician about fever, significant illness or other symptoms so the child can be appropriately assessed."
  },
  {
    question: "Are reactions after vaccination normal?",
    answer: "Some vaccines can cause temporary reactions such as injection-site soreness, mild fever or irritability. Parents should ask the pediatrician what reactions may be expected after the specific vaccine their child receives."
  },
  {
    question: "How should I maintain my child's vaccination record?",
    answer: "Keep the vaccination record safely and update it after every vaccination. Bring it to pediatric appointments so the healthcare team can review previous doses."
  },
  {
    question: "Can I ask questions before my child's vaccination?",
    answer: "Yes. Parents can discuss the vaccine, vaccination history, previous reactions and any current health concerns with the pediatric team before vaccination."
  },
  {
    question: "Why are multiple vaccine doses sometimes needed?",
    answer: "Some vaccines require multiple doses to establish or maintain protection. The number and timing of doses depend on the particular vaccine and applicable immunization recommendations."
  },
  {
    question: "Should I restart my child's vaccines if records are missing?",
    answer: "Do not assume that vaccination needs to be restarted. If records are incomplete or unavailable, discuss the situation with a pediatrician, who can determine the appropriate approach based on the information available."
  },
  {
    question: "Where is The Children's Clinic located?",
    answer: "The Children's Clinic is located at 35/13, 2nd Cross Rd, Co-operative Colony, Thiruvalluvar Nagar, Krishnagiri, Tamil Nadu 635002."
  }
];

const ChildVaccination = () => {
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
        <img className="sd-hero-bg" src="/src/assets/services/vaccine-banner.jpg" alt="Child Vaccination in Krishnagiri" />
        <div className="sd-hero-overlay">
          <div className="container sd-hero-inner">
            <h2 className="font-plus-jakarta banner-font">Child Vaccination </h2>
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
              <img src="/src/assets/services/vaccine1.jpg" alt="Child Vaccination Consultation" />
            </div>

            {/* Overview Intro */}
            <div className="sd-reveal" data-reveal>
              <h1 className="sd-heading">Child Vaccination in Krishnagiri</h1>
              <p className="sd-copy sd-text">
                Vaccination is an important part of preventive healthcare during childhood. Parents may have questions about which vaccines their child needs, when they are due, what to expect after vaccination and what to do if a scheduled dose has been missed.
              </p>
              <p className="sd-copy sd-text">
                <span className='sp-span'>The Children's Clinic in Krishnagiri provides child vaccination as part of its pediatric and preventive healthcare services.</span> Led by <span className='sp-span'>Dr. Haseen Fathima, MD, DNB (Pediatrics), with 9+ years of experience</span>, the clinic supports parents in understanding their child's vaccination needs alongside their overall health and development.
              </p>
            </div>

            {/* Top Prompt Callout Box */}
            <div className="ls-callout-box sd-reveal" data-reveal>
              <h3>Need to plan your child's next vaccination?</h3>
              <p>Discuss your child's vaccination schedule and any questions or concerns with the pediatric team.</p>
              <div className="ls-actions">
                <button onClick={() => navigate('/appointment')} className="ls-btn-gold">
                  Book a Pediatric Consultation
                </button>
                <button onClick={() => navigate('/contact')} className="ls-btn-outline">
                  Contact the Clinic
                </button>
              </div>
            </div>

            {/* ── Section: Child Vaccination in Krishnagiri: Why It Matters ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              Child Vaccination in Krishnagiri: Why It Matters
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              <span className="sp-span">Vaccination helps protect children against specific infectious diseases by preparing the immune system to recognize and respond to them.</span> Vaccines are given according to recommended schedules because protection may need to be established or maintained at different stages of childhood.
            </p>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              Vaccination is part of preventive pediatric care and can be discussed alongside routine health monitoring, growth and development, and other age-appropriate healthcare needs.
            </p>

            <div className="ls-guidance-card sd-reveal" data-reveal>
              <div className="ls-guidance-circle" />
              <h3 className=" ls-guidance-title">
                <FeedingBottle size={24} color="var(--color-gold)" />
                Parents may seek vaccination guidance when they need help with:
              </h3>
              <div className="ls-guidance-grid">
                {[
                  "Understanding their child's vaccination schedule",
                  'Planning an upcoming vaccine',
                  'Checking whether a vaccine is due',
                  'Catching up on a missed vaccination',
                  'Understanding common post-vaccination reactions',
                  'Discussing vaccination concerns',
                  'Reviewing vaccination records',
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

            {/* ── Section: Vaccination Centre in Krishnagiri for Children ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              Vaccination Centre in Krishnagiri for Children
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              When looking for a <span className="sp-span">vaccination centre in Krishnagiri</span>, parents may want more than simply a place to receive a vaccine. Understanding the child's health history, previous vaccinations and any relevant concerns can be important when planning immunization.
            </p>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              At The Children's Clinic, vaccination is provided within a broader pediatric-care setting.
            </p>

            <div className="ls-guidance-card sd-reveal" data-reveal>
              <h3 className="ls-guidance-title">This means parents can discuss vaccination alongside questions about:</h3>
              <div className="ls-guidance-circle" />
              <div className="ls-guidance-grid">
                {[
                  'Child growth',
                  'Development',
                  'Nutrition',
                  'Previous illnesses',
                  'Current health concerns',
                  'Previous vaccine reactions',
                  'Missed vaccinations',
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
              The appropriate vaccination plan depends on the child's age, vaccination history and applicable recommendations.
            </p>

            {/* ── Section: How Does Childhood Vaccination Work? ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              How Does Childhood Vaccination Work?
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              <span className="sp-span">Vaccines expose the immune system to an antigen or antigenic material in a way that helps the body develop immune protection without causing the disease in the same way as the natural infection.</span>
            </p>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              Different vaccines work in different ways, and some require more than one dose to establish or maintain protection.
            </p>
            <p className="sd-copy sd-reveal sd-text sd-note-italic-muted" data-reveal>
              This is why parents should follow the vaccination schedule recommended by their pediatrician or relevant health authority rather than assuming that one vaccination provides lifelong protection in every situation.
            </p>

            {/* ── Section: How Is a Child's Vaccination Schedule Decided? ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              How Is a Child's Vaccination Schedule Decided?
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              <span className="sp-span">A child's vaccination schedule depends on factors such as age, previous vaccination history and the applicable immunization recommendations.</span>
            </p>
            <p className="sd-copy sd-reveal sd-text sd-text-bold-primary" data-reveal>
              During a vaccination consultation, parents may discuss:
            </p>
            <ul className="sd-points sd-reveal" data-reveal>
              {[
                "The child's age",
                'Previous vaccination records',
                'Vaccines already received',
                'Upcoming doses',
                'Any missed doses',
                'Relevant medical history',
                'Previous vaccine reactions',
                'Current health concerns',
                'Whether any additional vaccination guidance is needed',
              ].map((stepItem) => (
                <li key={stepItem}>
                  <FeedingBottle size={20} color="var(--color-gold)" className="sd-bottle-icon" />
                  <div><strong>{stepItem}</strong></div>
                </li>
              ))}
            </ul>
            <p className="sd-copy sd-reveal sd-text sd-note-italic" data-reveal>
              Keeping an updated vaccination record can make future appointments easier to manage.
            </p>

            {/* ── Section: What If My Child Missed a Vaccine? ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              What If My Child Missed a Vaccine?
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              <span className="sp-span">A missed vaccination does not necessarily mean that the entire vaccination process has to start again.</span> The appropriate catch-up approach depends on the vaccine, the child's age and which doses have already been received.
            </p>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              Parents should bring the child's available vaccination records so the pediatrician can review what has already been given and advise on the appropriate next step.
            </p>
            <p className="sd-copy sd-reveal sd-text sd-note-italic-muted" data-reveal>
              Avoid creating a new schedule independently based only on information found online, because catch-up requirements can vary.
            </p>

            {/* ── Section: What Should Parents Bring to a Vaccination Appointment? ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              What Should Parents Bring to a Vaccination Appointment?
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              A vaccination visit is easier to plan when the child's relevant records are available.
            </p>
            <div className="ls-checklist-box sd-reveal" data-reveal>
              <p className="sd-copy sd-reveal sd-text sd-text-mt1 ls-guidance-title" data-reveal>
                Parents should bring:
              </p>
              <ul className="ls-checklist-grid">
                {[
                  "Child's vaccination record",
                  'Previous medical records where relevant',
                  'Information about previous vaccine reactions',
                  'Current medication information',
                  'Details of significant medical conditions',
                  'Any questions about upcoming vaccines',
                ].map((bring) => (
                  <li key={bring} className="ls-checklist-item">
                    <FeedingBottle size={18} color="var(--color-gold)" className="sd-bottle-icon sd-bottle-icon-shrink" />
                    <span>{bring}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="sd-copy sd-reveal sd-text sd-note-italic" data-reveal>
              If the vaccination record is incomplete, tell the pediatrician what information is available rather than guessing which vaccines the child has received.
            </p>

            {/* ── Section: Can a Child Be Vaccinated When They Have a Cold or Fever? ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              Can a Child Be Vaccinated When They Have a Cold or Fever?
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              <span className="sp-span">Whether a child should receive a vaccine while unwell depends on the child's symptoms, severity of illness and the specific clinical situation.</span> A mild illness does not automatically mean that every vaccination must be postponed, but the child should be assessed appropriately when there are health concerns.
            </p>

            <div className="ls-guidance-card sd-reveal" data-reveal>
              <div className="ls-guidance-circle" />
              <h3 className="ls-guidance-title">Parents should tell the pediatrician if their child currently has:</h3>
              <div className="ls-guidance-grid">
                {[
                  'Fever',
                  'Significant cough',
                  'Vomiting',
                  'Diarrhea',
                  'Reduced activity',
                  'Another acute illness',
                  'Any recent medical treatment',
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
            <p className="sd-copy sd-reveal sd-text sd-note-italic-primary" data-reveal>
              The doctor can determine whether vaccination should proceed or whether another approach is appropriate.
            </p>

            {/* ── Section: What Happens During a Child Vaccination Visit? ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              What Happens During a Child Vaccination Visit?
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              <span className="sp-span">A vaccination visit generally includes reviewing the child's vaccination history and current health before administering the recommended vaccine.</span>
            </p>
            <p className="sd-copy sd-reveal sd-text sd-text-bold-primary" data-reveal>
              Depending on the situation, the pediatric team may:
            </p>
            <ul className="sd-points sd-reveal" data-reveal>
              {[
                'Review vaccination records',
                'Confirm the vaccine due',
                'Ask about previous vaccine reactions',
                'Consider relevant medical history',
                'Address parent questions',
                'Administer the vaccine when appropriate',
                'Explain what parents may observe afterward',
              ].map((q) => (
                <li key={q}>
                  <FeedingBottle size={20} color="var(--color-primary)" className="sd-bottle-icon" />
                  <div><strong>{q}</strong></div>
                </li>
              ))}
            </ul>
            <p className="sd-copy sd-reveal sd-text sd-note-italic" data-reveal>
              Parents should feel comfortable asking questions before vaccination.
            </p>

            {/* ── Section: What Can Parents Expect After Vaccination? (CTA Banner) ── */}
            <div className="ls-cta-banner sd-reveal" data-reveal>
              <h3>What Can Parents Expect After Vaccination?</h3>
              <p>
                Some children may experience temporary reactions after vaccination, such as soreness at the injection site, mild fever or irritability. The type and intensity of reactions can vary depending on the vaccine and the individual child. 
              </p>
              <p><strong>Parents can ask the pediatrician:</strong></p>
              <div className="ls-guidance-grid service-neo">
                {[
                  'What reactions are commonly expected?',
                  'How long might they last?',
                  'What should I monitor?',
                  'When should I contact the doctor?',
                  'Are there symptoms that require urgent attention?',
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
                <span className="font-happy-monkey strong">Do not assume that every symptom occurring after vaccination was necessarily caused by the vaccine. If a child becomes significantly unwell, appropriate medical assessment is important.</span>
              </p>
              <button onClick={() => navigate('/appointment')} className="ls-btn-gold">
                Book a Pediatric Consultation <ArrowRight size={18} />
              </button>
            </div>

            {/* ── Section: What If My Child Is Afraid of Vaccinations? ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              What If My Child Is Afraid of Vaccinations?
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              Fear of injections is common among children.
            </p>

            <div className="ls-guidance-card sd-reveal" data-reveal>
              <div className="ls-guidance-circle" />
              <h3 className="ls-guidance-title">Parents can help by:</h3>
              <div className="ls-guidance-grid">
                {[
                  'Speaking calmly about the appointment',
                  'Avoiding threatening language',
                  'Explaining what will happen in simple terms',
                  'Bringing a familiar comfort item when appropriate',
                  'Allowing the child to ask questions',
                  'Remaining calm during the procedure',
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
              The healthcare team can also help make the vaccination visit as comfortable as possible.
            </p>

            {/* ── Section: Keeping Your Child's Vaccination Records Updated ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              Keeping Your Child's Vaccination Records Updated
            </h2>
            <div className="sd-feature">
              <img src="/src/assets/services/vaccine2.jpeg" alt="Child Vaccination Consultation" />
            </div>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              <span className="sp-span">A vaccination record helps parents and healthcare professionals understand which vaccines a child has already received and which may be due.</span>
            </p>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              Keep the record safely and update it after each vaccination.
            </p>

            <div className="ls-guidance-card sd-reveal" data-reveal>
              <h3 className="ls-guidance-title">It can be especially useful when:</h3>
              <div className="ls-guidance-circle" />
              <div className="ls-guidance-grid">
                {[
                  'Changing doctors',
                  'Moving to another location',
                  'Starting school',
                  'Travelling',
                  'Reviewing missed vaccinations',
                  'Attending a new pediatric consultation',
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
              A complete vaccination record reduces uncertainty and helps the healthcare team make informed decisions about future doses.
            </p>

            {/* ── Section: Vaccination and Preventive Pediatric Care ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              Vaccination and Preventive Pediatric Care
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              Vaccination is one part of a child's overall preventive healthcare.
            </p>
            <p className="sd-copy sd-reveal sd-text sd-text-bold-primary" data-reveal>
              A pediatric visit may also provide an opportunity to discuss:
            </p>
            <ul className="sd-points sd-reveal" data-reveal>
              {[
                'Growth and development',
                'Nutrition',
                'Feeding',
                'Sleep',
                'Common childhood illnesses',
                'Developmental milestones',
                'General health concerns',
              ].map((prob) => (
                <li key={prob}>
                  <FeedingBottle size={20} color="var(--color-primary)" className="sd-bottle-icon" />
                  <div><strong>{prob}</strong></div>
                </li>
              ))}
            </ul>
            <p className="sd-copy sd-reveal sd-text sd-note-italic" data-reveal>
              At <span className="sp-span">The Children's Clinic</span>., vaccination is therefore positioned within broader child-focused pediatric care rather than as an isolated service.
            </p>

            {/* ── Section: Vaccination Schedule vs Catch-Up Vaccination ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              Vaccination Schedule vs Catch-Up Vaccination
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              These are two different situations parents may encounter.
            </p>
            <div className="ls-cards-grid">
              {[
                { title: 'Routine Vaccination', desc: 'The child receives vaccines according to the applicable age-based schedule.' },
                { title: 'Missed Vaccination', desc: 'A child has missed one or more scheduled doses and needs the vaccination history reviewed.' },
                { title: 'Catch-Up Vaccination', desc: "The healthcare professional determines how missed doses can be addressed based on the child's previous vaccination history and applicable recommendations." },
              ].map((card) => (
                <article key={card.title} className="ls-concern-card sd-reveal" data-reveal>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </article>
              ))}
            </div>
            <p className="sd-copy sd-reveal sd-text sd-text-mt1" data-reveal>
              <span className="sp-span">Parents should bring the vaccination record whenever possible so the pediatrician can determine the appropriate next step rather than restarting or repeating vaccines unnecessarily.</span>
            </p>

            {/* ── Section: When Should Parents Discuss Vaccination With a Pediatrician? ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              When Should Parents Discuss Vaccination With a Pediatrician?
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              A consultation can be useful when parents:
            </p>

            <div className="ls-guidance-card sd-reveal" data-reveal>
              <div className="ls-guidance-circle" />
              <ul className="ls-guidance-grid">
                {[
                  'Are unsure which vaccine is due',
                  'Have lost or incomplete vaccination records',
                  'Have missed a scheduled dose',
                  'Have concerns about a previous vaccine reaction',
                  'Have questions about vaccination during an illness',
                  'Want to understand upcoming vaccinations',
                  "Have questions related to their child's medical history",
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
              A pediatrician can review the child's individual circumstances and provide appropriate guidance.
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
                    <span className="sp-span">Dr. Haseen Fathima, MD, DNB (Pediatrics), has 9+ years of experience caring for newborns, infants and children.</span> Her areas of focus include childhood vaccination, newborn and neonatal care, lactation support, child growth and development, and common pediatric health concerns.
                  </p>
                </div>
              </div>

              <p className="ls-doctor-paragraph">
                Her approach to preventive pediatric care focuses on helping parents understand their child's healthcare needs while considering vaccination history, age, health status and individual circumstances.
              </p>

              <blockquote className="sd-quote ls-doctor-quote sp-span">
                "Preventive care is an important part of childhood healthcare. My goal is to help parents understand their child's vaccination and health needs clearly, so they can approach each stage of childhood with confidence."
              </blockquote>

              <div className="ls-actions ls-actions-mt">
                <button onClick={() => navigate('/about')} className="ls-btn-outline">
                  Meet Dr. Haseen Fathima
                </button>
                <button onClick={() => navigate('/appointment')} className="ls-btn-gold">
                  Book a Vaccination Appointment
                </button>
              </div>
            </div>

            {/* ── Section: Clinic Info & Address ── */}
            <div className="ls-clinic-card sd-reveal" data-reveal>
              <h2>Child Vaccination in Krishnagiri at The Children's Clinic</h2>
              <p>
                <span className="sp-span">The Children's Clinic provides child vaccination in Krishnagiri as part of its pediatric and preventive healthcare services.</span>
              </p>
              <p>
                Parents can discuss vaccination schedules, missed doses, vaccination records, previous reactions and other questions with the pediatric team.
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
                If your child's vaccination is due or you have questions about a missed dose or vaccination record, contact the clinic to arrange a pediatric consultation.
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
                  Book a Vaccination Appointment
                </button>
              </div>
            </div>

            {/* ── Section: Frequently Asked Questions ── */}
            <h2 className="sd-heading sd-faq-title sd-reveal" data-reveal>
              Frequently Asked Questions About Child Vaccination
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              Common questions families ask about child vaccination in Krishnagiri, with clear answers from our care team.
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
              <h3>Keep Your Child's Vaccinations on Track</h3>
              <p className="ls-sub">
                Keeping vaccination records updated and discussing upcoming or missed doses with a pediatrician can help parents stay organized with their child's preventive healthcare.
              </p>
              <p className="ls-highlight">
                The Children's Clinic in Krishnagiri provides child vaccination alongside broader pediatric care, allowing parents to discuss immunization together with their child's overall health and development.
              </p>
              <p className="ls-question">
                Need to check your child's vaccination status?
              </p>
              <button onClick={() => navigate('/appointment')} className="ls-btn-gold">
                Book a Vaccination Appointment <ArrowRight size={18} />
              </button>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default ChildVaccination;