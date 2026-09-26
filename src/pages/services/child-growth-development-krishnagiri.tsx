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
    question: "What is child growth and development monitoring?",
    answer: "Child growth and development monitoring involves assessing physical growth and developmental progress over time. It may include reviewing height, weight, developmental skills, feeding, behaviour and other age-appropriate factors."
  },
  {
    question: "Where can I find a child growth and development clinic in Krishnagiri?",
    answer: "The Children's Clinic in Krishnagiri provides child growth and development monitoring as part of its pediatric services. Parents can discuss concerns about growth, milestones, nutrition or developmental progress."
  },
  {
    question: "How often should my child's growth be monitored?",
    answer: "The appropriate frequency depends on the child's age, health, growth pattern and individual needs. Your pediatrician can advise how often monitoring may be appropriate."
  },
  {
    question: "What are developmental milestones?",
    answer: "Developmental milestones are skills that many children acquire around particular stages of development. They can help healthcare professionals and parents discuss progress, but children may reach individual milestones at different times."
  },
  {
    question: "Should I worry if my child is shorter than other children?",
    answer: "Not necessarily. Children can have different heights because of individual and family factors. A pediatrician can look at the child's growth pattern over time rather than relying on comparison with other children."
  },
  {
    question: "When should I be concerned about my child's development?",
    answer: "Consider discussing a concern with a pediatrician if your child is persistently struggling with movement, communication, speech, social interaction, behaviour or other age-appropriate skills, particularly if there is a loss of previously acquired abilities."
  },
  {
    question: "Can nutrition affect a child's growth?",
    answer: "Nutrition can contribute to healthy growth, but growth is influenced by multiple factors. If you are concerned about appetite, eating patterns, weight or growth, a pediatric assessment can help put the concern in context."
  },
  {
    question: "What should I bring to a growth and development consultation?",
    answer: "Previous height and weight records, medical reports, vaccination records, developmental assessments and information about feeding or specific concerns can be useful."
  },
  {
    question: "Does every developmental difference mean there is a problem?",
    answer: "No. Children develop at different rates. A developmental difference does not automatically indicate a medical or developmental disorder. Persistent concerns or loss of previously acquired skills should be discussed with a healthcare professional."
  },
  {
    question: "Where is The Children's Clinic located?",
    answer: "The Children's Clinic is located at 35/13, 2nd Cross Rd, Co-operative Colony, Thiruvalluvar Nagar, Krishnagiri, Tamil Nadu 635002."
  }
];

const GrowthDevelopment = () => {
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
        <img className="sd-hero-bg" src="/grow-banner.png" alt="Child Growth & Development Monitoring in Krishnagiri" />
        <div className="sd-hero-overlay">
          <div className="container sd-hero-inner">
            <h2 className="font-plus-jakarta banner-font">Child Growth &amp; Development Monitoring </h2>
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
              <img src="/grow2.jpg" alt="Child Growth and Development Monitoring Consultation" />
            </div>

            {/* Overview Intro */}
            <div className="sd-reveal" data-reveal>
              <h1 className="sd-heading">Child Growth &amp; Development Monitoring in Krishnagiri</h1>
              <p className="sd-copy sd-text">
                Children do not all grow or develop at exactly the same pace. Parents may have questions about height, weight, nutrition, speech, movement, behaviour, learning or whether their child is reaching expected developmental milestones.
              </p>
              <p className="sd-copy sd-text">
                <span className='sp-span'>The Children’s Clinic in Krishnagiri provides child growth and development monitoring as part of its pediatric care services.</span> Led by <span className='sp-span'>Dr. Haseen Fathima, MD, DNB (Pediatrics), with 9+ years of experience</span>, the clinic focuses on understanding each child's individual health, growth and developmental needs.
              </p>
            </div>

            {/* Top Prompt Callout Box */}
            <div className="ls-callout-box sd-reveal" data-reveal>
              <h3>Concerned about your child's growth or development?</h3>
              <p>A pediatric assessment can help you understand your child's progress and whether further evaluation or support may be appropriate.</p>
              <div className="ls-actions">
                <button onClick={() => navigate('/appointment')} className="ls-btn-gold">
                  Book a Pediatric Consultation
                </button>
                <button onClick={() => navigate('/contact')} className="ls-btn-outline">
                  Contact the Clinic
                </button>
              </div>
            </div>

            {/* ── Section: What Is Child Growth & Development Monitoring? ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              What Is Child Growth &amp; Development Monitoring?
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              <span className="sp-span">Child growth and development monitoring involves regularly assessing a child's physical growth and developmental progress over time.</span> It helps parents and healthcare professionals understand how a child is progressing and identify concerns that may need closer assessment.
            </p>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              Growth and development are related but are not the same thing.
            </p>

            <div className="ls-guidance-card sd-reveal" data-reveal>
              <div className="ls-guidance-circle" />
              <h3 className=" ls-guidance-title">
                <FeedingBottle size={24} color="var(--color-gold)" />
                Growth generally refers to measurable physical changes such as:
              </h3>
              <div className="ls-guidance-grid">
                {[
                  'Height or length',
                  'Weight',
                  'Growth pattern over time',
                  'Other age-appropriate physical measurements',
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

            <div className="ls-guidance-card sd-reveal" data-reveal>
              <h3 className="ls-guidance-title">Development refers to the gradual acquisition of skills such as:</h3>
              <div className="ls-guidance-circle" />
              <div className="ls-guidance-grid">
                {[
                  'Movement',
                  'Communication',
                  'Social interaction',
                  'Behaviour',
                  'Age-appropriate abilities',
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
              Looking at progress over time can provide more useful information than focusing on one measurement or milestone in isolation.
            </p>

            {/* ── Section: Child Growth & Development Clinic in Krishnagiri ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              Child Growth &amp; Development Clinic in Krishnagiri
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              Parents may seek a <span className="sp-span">child growth and development clinic in Krishnagiri</span> when they want to understand whether their child's physical growth or developmental progress is appropriate for their age.
            </p>

            <div className="ls-guidance-card sd-reveal" data-reveal>
              <h3 className="ls-guidance-title">A consultation can be useful when parents have concerns about:</h3>
              <div className="ls-guidance-circle" />
              <div className="ls-guidance-grid">
                {[
                  'Weight gain or growth',
                  'Height or physical development',
                  'Speech and communication',
                  'Movement and motor skills',
                  'Social interaction',
                  'Behaviour',
                  'Developmental milestones',
                  'Feeding and nutrition',
                  "Changes in a child's overall development",
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
              The purpose of monitoring is not to compare one child with another. It is to understand the child's individual pattern and determine whether further assessment may be useful.
            </p>

            {/* ── Section: Why Is Growth Monitoring Important? ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              Why Is Growth Monitoring Important?
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              <span className="sp-span">Regular growth monitoring helps track how a child is progressing over time and can provide useful information when there are concerns about nutrition, growth or general health.</span>
            </p>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              A single height or weight measurement does not always tell the complete story.
            </p>
            <p>For example, a child may naturally be smaller or larger than another child while still following an appropriate growth pattern. What matters is understanding the child's measurements over time in the context of age, sex, health and other relevant factors.</p>
            <p className="sd-copy sd-reveal sd-text sd-note-italic-muted" data-reveal>
              Parents should therefore discuss persistent concerns rather than trying to interpret a single measurement on their own.
            </p>

            {/* ── Section: What Does Developmental Monitoring Include? ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              What Does Developmental Monitoring Include?
            </h2>

            <p className="sd-copy sd-reveal sd-text sp-span" data-reveal>
              Developmental monitoring looks at how a child is acquiring skills appropriate to their stage of development.
            </p>
            <p className="ls-guidance-title">Depending on the child's age, a pediatric consultation may consider areas such as:</p>
            <div className="ls-cards-stack">
              {[
                { title: 'Gross Motor Skills', desc: 'These involve larger body movements such as sitting, standing, walking and other age-appropriate physical activities.' },
                { title: 'Fine Motor Skills', desc: 'These involve smaller movements and coordination, including age-appropriate use of the hands and fingers.' },
                { title: 'Communication', desc: "This may include sounds, gestures, understanding language and developing speech appropriate to the child's stage." },
                { title: 'Social & Emotional Development', desc: "A child's interaction with parents, caregivers and other people can provide information about social and emotional development." },
                { title: 'Behaviour & Everyday Skills', desc: 'Age-appropriate behaviour, interaction and developing independence may also be considered.' },
              ].map((card) => (
                <article key={card.title} className="ls-info-card sd-reveal" data-reveal>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </article>
              ))}
            </div>
            <p className="sd-copy sd-reveal sd-text sd-note-italic" data-reveal>
              Development is individual, and children may reach different skills at somewhat different times.
            </p>

            {/* ── Section: Is My Child Growing Normally? ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              Is My Child Growing Normally?
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              <span className="sp-span">There is no single height or weight that is considered “normal” for every child.</span> Pediatricians look at growth over time and consider the child's individual circumstances.
            </p>

            <div className="ls-guidance-card sd-reveal" data-reveal>
              <h3 className="ls-guidance-title">Parents may have questions if:</h3>
              <div className="ls-guidance-circle" />
              <ul className="ls-guidance-grid">
                {[
                  'Their child appears much smaller or larger than peers',
                  'Weight gain seems to have changed',
                  'Height growth appears slower than expected',
                  'Appetite has changed significantly',
                  'There are concerns about nutrition',
                  'A child has a chronic health concern',
                  "A previously established growth pattern appears to have changed",
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
              A pediatric assessment can help determine whether the concern represents a normal variation or requires closer evaluation.
            </p>

            {/* ── Section: Growth vs Development: What Is the Difference? ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              Growth vs Development: What Is the Difference?
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              This is an important distinction for parents.
            </p>

            <div className="ls-cards-stack">
              {[
                { title: 'Growth', desc: 'Growth refers mainly to physical changes such as height, weight and body size.' },
                { title: 'Development', desc: 'Development refers to the acquisition of skills involving movement, communication, social interaction, behaviour and other age-appropriate abilities.' },
              ].map((card) => (
                <article key={card.title} className="ls-info-card sd-reveal" data-reveal>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </article>
              ))}
            </div>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              A child can have an issue related to growth without having a developmental concern, or vice versa.
            </p>
            <p className="sd-copy sd-reveal sd-text " data-reveal>
              This is why both physical growth and developmental progress may need to be considered during pediatric care.
            </p>

            {/* ── Section: What Happens During a Growth & Development Consultation? ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              What Happens During a Growth &amp; Development Consultation?
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              <span className="sp-span">A pediatric growth and development consultation begins by understanding the child's health history, growth pattern and the specific concern raised by the parents.</span>
            </p>
            <p className="sd-copy sd-reveal sd-text sd-text-bold-primary" data-reveal>
              Depending on the child's age and reason for consultation, the doctor may discuss:
            </p>
            <ul className="sd-points sd-reveal" data-reveal>
              {[
                'Previous height and weight measurements',
                'Feeding and nutrition',
                'Medical history',
                'Developmental milestones',
                'Communication and behaviour',
                'Physical activity',
                'School or everyday functioning where relevant',
                'Previous concerns or assessments',
                'Changes noticed by parents',
                'Whether additional evaluation may be appropriate',
              ].map((stepItem) => (
                <li key={stepItem}>
                  <FeedingBottle size={20} color="var(--color-gold)" className="sd-bottle-icon" />
                  <div><strong>{stepItem}</strong></div>
                </li>
              ))}
            </ul>
            <p className="sd-copy sd-reveal sd-text sd-note-italic" data-reveal>
              The exact assessment depends on the child's age and individual needs.
            </p>

            {/* ── Section: What Are Developmental Milestones? ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              What Are Developmental Milestones?
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              <span className="sp-span">Developmental milestones are skills that many children achieve around particular stages of childhood.</span> They can provide a useful framework for discussing development, but they should not be treated as a rigid deadline for every child.
            </p>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              Children can develop at different rates.
            </p>
            <p className="sd-copy sd-reveal sd-text sd-text-bold-primary" data-reveal>
              For example, parents may have questions about:
            </p>
            <ul className="sd-points sd-reveal" data-reveal>
              {[
                'Sitting',
                'Standing',
                'Walking',
                'Using hands and objects',
                'Making sounds',
                'Speaking',
                'Understanding instructions',
                'Social interaction',
                'Playing',
                'Developing independence',
              ].map((prob) => (
                <li key={prob}>
                  <FeedingBottle size={20} color="var(--color-primary)" className="sd-bottle-icon" />
                  <div><strong>{prob}</strong></div>
                </li>
              ))}
            </ul>
            <p className="sd-copy sd-reveal sd-text sd-note-italic" data-reveal>
              If a parent notices a persistent concern or a loss of a previously acquired skill, discussing it with a pediatrician is appropriate.
            </p>

            {/* ── Section: When Should Parents Discuss a Developmental Concern? (CTA Banner) ── */}
            <div className="ls-cta-banner sd-reveal" data-reveal>
              <h3>When Should Parents Discuss a Developmental Concern?</h3>
              <p>
                Parents should consider a pediatric assessment when they have a persistent concern about their child's development, particularly if the child is not progressing in an expected area or has lost a skill they previously had.
              </p>
              <p><strong>Parents may want to discuss concerns involving:</strong></p>
              <div className="ls-guidance-grid service-neo">
                {[
                  'Movement',
                  'Speech',
                  'Communication',
                  'Interaction',
                  'Behaviour',
                  'Learning',
                  'Feeding',
                  'Everyday skills',
                  'Loss of previously acquired abilities',
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
                Parents know their children well. If something about a child's development feels different from what they have previously observed, discussing the concern with a pediatrician can provide clarity.
              </p>
              <button onClick={() => navigate('/appointment')} className="ls-btn-gold">
                Book a Pediatric Consultation <ArrowRight size={18} />
              </button>
            </div>

            {/* ── Section: What Can Affect a Child's Growth and Development? ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              What Can Affect a Child's Growth and Development?
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              Children's growth and development can be influenced by many factors.
            </p>

            <div className="ls-guidance-card sd-reveal" data-reveal>
              <div className="ls-guidance-circle" />
              <h3 className="ls-guidance-title">These May Include :</h3>
              <div className="ls-guidance-grid">
                {[
                  'Nutrition',
                  'Genetics',
                  'Overall health',
                  'Physical activity',
                  'Sleep',
                  'Prematurity',
                  'Medical conditions',
                  'Environmental factors',
                  'Individual developmental differences',
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
              This is why growth or developmental concerns should be assessed in context rather than attributed to a single factor without evaluation.
            </p>

            {/* ── Section: Growth Monitoring and Nutrition ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              Growth Monitoring and Nutrition
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              Nutrition can be an important part of a child's growth.
            </p>
            <p className="sd-copy sd-reveal sd-text sd-text-bold-primary" data-reveal>
              Parents may seek guidance when they are concerned about:
            </p>
            <ul className="sd-points sd-reveal" data-reveal>
              {[
                'Poor appetite',
                'Selective eating',
                'Weight gain',
                'Food intake',
                'Feeding patterns',
                "A child's growth trajectory",
              ].map((prob) => (
                <li key={prob}>
                  <FeedingBottle size={20} color="var(--color-primary)" className="sd-bottle-icon" />
                  <div><strong>{prob}</strong></div>
                </li>
              ))}
            </ul>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              Nutrition concerns should be considered alongside the child's overall health and growth pattern.
            </p>
            <p className="sd-copy sd-reveal sd-text sd-note-italic-muted" data-reveal>
              A child who is eating less than expected may not necessarily have a growth problem, just as a child who eats well may still require assessment if there is a concern about growth.
            </p>

            {/* ── Section: When Is a Growth Concern Different From a Developmental Concern? ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              When Is a Growth Concern Different From a Developmental Concern?
            </h2>
            <div className="sd-feature">
              <img src="/grow1.jpg" alt="Child Growth and Development Monitoring Consultation" />
            </div>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              Understanding the difference can help parents know what they are observing.
            </p>
            <div className="ls-cards-grid">
              {[
                { title: 'Growth Concern', desc: "The concern is mainly about physical growth, such as height, weight or a change in the child's growth pattern." },
                { title: 'Developmental Concern', desc: 'The concern involves skills such as movement, speech, communication, social interaction or behaviour.' },
                { title: 'Both', desc: 'Some children may have concerns involving both growth and development.' },
              ].map((card) => (
                <article key={card.title} className="ls-concern-card sd-reveal" data-reveal>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </article>
              ))}
            </div>
            <p className="sd-copy sd-reveal sd-text sd-text-mt1" data-reveal>
              <strong>A pediatric assessment can help determine which areas need closer attention rather than assuming that one issue explains everything.</strong>
            </p>

            {/* ── Section: What Should Parents Bring to a Growth & Development Consultation? ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              What Should Parents Bring to a Growth &amp; Development Consultation?
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              Parents can bring information that helps show how their child's health and development have progressed over time.
            </p>
            <div className="ls-checklist-box sd-reveal" data-reveal>
              <p className="sd-copy sd-reveal sd-text sd-text-mt1 ls-guidance-title" data-reveal>
                Useful information may include:
              </p>
              <ul className="ls-checklist-grid">
                {[
                  'Previous height and weight records',
                  'Vaccination records',
                  'Medical reports',
                  'Previous developmental assessments',
                  'School or preschool observations where relevant',
                  'Information about feeding and nutrition',
                  'A list of concerns noticed at home',
                  'Details of any significant changes',
                ].map((bring) => (
                  <li key={bring} className="ls-checklist-item">
                    <FeedingBottle size={18} color="var(--color-gold)" className="sd-bottle-icon sd-bottle-icon-shrink" />
                    <span>{bring}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="sd-copy sd-reveal sd-text sd-note-italic" data-reveal>
              Parents may also write down specific examples of what they have observed. This can make it easier to discuss concerns during the consultation.
            </p>

            {/* ── Section: What If My Child Is Developing Differently From Other Children? ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              What If My Child Is Developing Differently From Other Children?
            </h2>
            <p className="sd-copy sd-reveal sd-text sp-span" data-reveal>
              Children can develop at different rates, and comparison with other children does not by itself establish a developmental problem.
            </p>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              Parents may notice that one child starts speaking earlier while another develops physical skills earlier. Individual variation can occur.
            </p>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              However, persistent concerns, significant delays or loss of previously acquired skills deserve professional discussion.
            </p>
            <p className="sd-copy sd-reveal sd-text sd-note-italic-muted" data-reveal>
              The goal of assessment is to understand the individual child rather than simply compare them with other children.
            </p>

            {/* ── Section: When Should Parents Seek Further Assessment? ── */}
            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              When Should Parents Seek Further Assessment?
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              A pediatrician may recommend additional assessment when a concern requires more detailed evaluation.
            </p>

            <div className="ls-guidance-card sd-reveal" data-reveal>
              <h3 className="ls-guidance-title">This may depend on:</h3>
              <div className="ls-guidance-circle" />
              <ul className="ls-guidance-grid">
                {[
                  "The child's age",
                  'The specific developmental concern',
                  'How long the concern has been present',
                  'Whether the child is making progress',
                  'Whether previously acquired skills have been lost',
                  'Associated health concerns',
                  "The child's overall development",
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
            <p className="sd-copy sd-reveal sd-text sd-note-italic" data-reveal>
              Further assessment does not automatically mean that a child has a particular condition. It can simply be the next step in understanding the concern.
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
                    <span className="sp-span">Dr. Haseen Fathima, MD, DNB (Pediatrics), has 9+ years of experience caring for newborns, infants and children.</span> Her areas of focus include child growth and development monitoring, newborn and neonatal care, lactation support, vaccination and common pediatric health concerns.
                  </p>
                </div>
              </div>

              <p className="ls-doctor-paragraph">
                Her approach to pediatric care focuses on understanding each child's individual health needs while helping parents understand growth patterns, developmental progress and concerns that may require closer attention.
              </p>

              <blockquote className="sd-quote ls-doctor-quote sp-span">
                “Every child develops in their own way. My goal is to understand each child's needs carefully and help parents make informed decisions about their child's health and development.”
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
              <h2>Child Growth &amp; Development Monitoring in Krishnagiri</h2>
              <p>
                <span className="sp-span">The Children's Clinic provides child growth and development monitoring in Krishnagiri as part of its pediatric care services.</span>
              </p>
              <p>
                The clinic focuses on supporting children through different stages of childhood while helping parents understand concerns related to physical growth, developmental milestones, nutrition and general wellbeing.
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
                If you have concerns about your child's growth, development, milestones, nutrition or overall health, you can contact the clinic to discuss a pediatric consultation.
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
              Frequently Asked Questions About Child Growth &amp; Development
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              Common questions families ask about child growth and development monitoring in Krishnagiri, with clear answers from our care team.
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
              <h3>Support Your Child's Growth at Every Stage</h3>
              <p className="ls-sub">
                Understanding your child's growth and development can help you recognize progress, discuss concerns early and seek appropriate guidance when needed.
              </p>
              <p className="ls-highlight">
                The Children's Clinic in Krishnagiri provides child growth and development monitoring with pediatric care focused on the individual needs of every child.
              </p>
              <p className="ls-question">
                Have concerns about your child's growth, milestones or development?
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

export default GrowthDevelopment;