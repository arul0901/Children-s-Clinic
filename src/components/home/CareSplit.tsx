import { UserCheck } from 'lucide-react';
import FeedingBottle from '../common/FeedingBottle';
import './CareSplit.css';

const NEONATAL_PILLS = [
  { title: 'Age-appropriate care',      subtitle: 'Personalised for every child' },
  { title: 'Individual attention',      subtitle: 'Personalised for every child' },
  { title: 'Growth-focused support',    subtitle: 'Personalised for every child' },
  { title: 'Gentle consultations',      subtitle: 'Personalised for every child' },
  { title: 'Child-specific guidance',   subtitle: 'Personalised for every child' },
];

const PEDIATRIC_PILLS = [
  { title: 'Clear health advice',       subtitle: 'Supporting confident parents' },
  { title: 'Feeding guidance',          subtitle: 'Supporting confident parents' },
  { title: 'Developmental support',     subtitle: 'Supporting confident parents' },
  { title: 'Vaccination guidance',      subtitle: 'Supporting confident parents' },
  { title: 'Practical parenting tips',  subtitle: 'Supporting confident parents' },
];

const CareSplit = () => {
  return (
    <section className="care-split-section" id="care">
      <div className="container">
        {/* Main Section Header */}
        <div className="care-split-main-header">
          <h2 className="care-split-main-title font-plus-jakarta">
            Caring for Children,<br />
            Supporting Parents
          </h2>
          <p className="care-split-main-subtitle">
            Personalized pediatric care combined with clear, practical guidance to support your child's health, growth and development at every stage.
          </p>
        </div>

        {/* ─── Specialty Row 1: Neonatal Care (Image LEFT, Content RIGHT) ─── */}
        <div className="specialty-experience-row">
          {/* Left Arch Image with Floating Badge */}
          <div className="specialty-arch-container">
            <div className="floating-specialty-badge badge-left">
              <div className="badge-icon-box">
                <UserCheck size={18} />
              </div>
              <div className="badge-text-box">
                <span className="badge-title">Personalized Child Care</span>
                <span className="badge-sub">Focused on every child</span>
              </div>
            </div>
            <div className="specialty-arch-image-wrapper arch-left">
              <img
                src="/pediatric_bg.jpg"
                alt="Neonatal doctor examining baby"
                className="arch-img"
              />
            </div>
          </div>

          {/* Right Content & Staggered Pill Cards */}
          <div className="specialty-info-container">
            <h3 className="specialty-row-title font-plus-jakarta">Personalized Child Care</h3>
            <p className="specialty-row-desc">
              Personalized attention for every child, based on their age, health needs and development.
            </p>

            <div className="staggered-pills-wrapper">
              <div className="staggered-row row-1">
                {NEONATAL_PILLS.slice(0, 2).map((pill, i) => (
                  <div key={i} className="sub-service-pill">
                    <div className="pill-bottle-box">
                      <FeedingBottle color="#4f1975" size={18} />
                    </div>
                    <div className="pill-text">
                      <span className="pill-title">{pill.title}</span>
                      <span className="pill-sub">{pill.subtitle}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="staggered-row row-2">
                {NEONATAL_PILLS.slice(2, 4).map((pill, i) => (
                  <div key={i} className="sub-service-pill">
                    <div className="pill-bottle-box">
                      <FeedingBottle color="#4f1975" size={18} />
                    </div>
                    <div className="pill-text">
                      <span className="pill-title">{pill.title}</span>
                      <span className="pill-sub">{pill.subtitle}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="staggered-row row-3">
                {NEONATAL_PILLS.slice(4, 5).map((pill, i) => (
                  <div key={i} className="sub-service-pill">
                    <div className="pill-bottle-box">
                      <FeedingBottle color="#4f1975" size={18} />
                    </div>
                    <div className="pill-text">
                      <span className="pill-title">{pill.title}</span>
                      <span className="pill-sub">{pill.subtitle}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ─── Specialty Row 2: Pediatric Care (Content LEFT, Image RIGHT) ─── */}
        <div className="specialty-experience-row">
          {/* Left Content & Staggered Pill Cards */}
          <div className="specialty-info-container">
            <h3 className="specialty-row-title font-plus-jakarta">Guidance for Parents</h3>
            <p className="specialty-row-desc">
              Clear, practical guidance to help parents make informed decisions about their child's health.
            </p>

            <div className="staggered-pills-wrapper">
              <div className="staggered-row row-1">
                {PEDIATRIC_PILLS.slice(0, 2).map((pill, i) => (
                  <div key={i} className="sub-service-pill">
                    <div className="pill-bottle-box">
                      <FeedingBottle color="#4f1975" size={18} />
                    </div>
                    <div className="pill-text">
                      <span className="pill-title">{pill.title}</span>
                      <span className="pill-sub">{pill.subtitle}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="staggered-row row-2">
                {PEDIATRIC_PILLS.slice(2, 4).map((pill, i) => (
                  <div key={i} className="sub-service-pill">
                    <div className="pill-bottle-box">
                      <FeedingBottle color="#4f1975" size={18} />
                    </div>
                    <div className="pill-text">
                      <span className="pill-title">{pill.title}</span>
                      <span className="pill-sub">{pill.subtitle}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="staggered-row row-3">
                {PEDIATRIC_PILLS.slice(4, 5).map((pill, i) => (
                  <div key={i} className="sub-service-pill">
                    <div className="pill-bottle-box">
                      <FeedingBottle color="#4f1975" size={18} />
                    </div>
                    <div className="pill-text">
                      <span className="pill-title">{pill.title}</span>
                      <span className="pill-sub">{pill.subtitle}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Arch Image with Floating Badge */}
          <div className="specialty-arch-container">
            <div className="floating-specialty-badge badge-right">
              <div className="badge-icon-box">
                <UserCheck size={18} />
              </div>
              <div className="badge-text-box">
                <span className="badge-title">Guidance for Parents</span>
                <span className="badge-sub">Supporting confident parents</span>
              </div>
            </div>
            <div className="specialty-arch-image-wrapper arch-right">
              <img
                src="/service_editorial_1_1789990863800.jpg"
                alt="Pediatric doctor examining child"
                className="arch-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareSplit;
