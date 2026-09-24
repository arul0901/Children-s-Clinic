import { UserCheck } from 'lucide-react';
import FeedingBottle from '../common/FeedingBottle';
import './CareSplit.css';

const NEONATAL_PILLS = [
  { title: 'New Born Care', subtitle: 'Always here for you' },
  { title: 'Neonatal Emergency', subtitle: 'Always here for you' },
  { title: 'Lactational Support', subtitle: 'Always here for you' },
  { title: 'Neonatal Ventilation Expertise', subtitle: 'Always here for you' },
  { title: 'Neonatal POCUS', subtitle: 'Always here for you' }
];

const PEDIATRIC_PILLS = [
  { title: 'Vaccination', subtitle: 'Always here for you' },
  { title: 'Common Childhood Illnesses', subtitle: 'Always here for you' },
  { title: 'Pediatric Emergency', subtitle: 'Always here for you' },
  { title: 'Preventive Care', subtitle: 'Always here for you' },
  { title: 'Growth & Development', subtitle: 'Always here for you' }
];

const CareSplit = () => {
  return (
    <section className="care-split-section" id="care">
      <div className="container">
        {/* Main Section Header */}
        <div className="care-split-main-header">
          <h2 className="care-split-main-title font-plus-jakarta">
            Two Dedicated Specialties.<br />
            One Co- ordinated Experience
          </h2>
          <p className="care-split-main-subtitle">
            Specialised monitoring and gentle support for your baby's critical first days and weeks
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
                <span className="badge-title">Neonatal Care</span>
                <span className="badge-sub">Always here for you</span>
              </div>
            </div>
            <div className="specialty-arch-image-wrapper arch-left">
              <img
                src="/hero_image_1789986082265.jpg"
                alt="Neonatal doctor examining baby with stethoscope"
                className="arch-img"
              />
            </div>
          </div>

          {/* Right Content & Staggered Pill Cards */}
          <div className="specialty-info-container">
            <h3 className="specialty-row-title font-plus-jakarta">Neonatal Care</h3>
            <p className="specialty-row-desc">
              Specialised monitoring and gentle support for your baby's critical first days and weeks
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
            <h3 className="specialty-row-title font-plus-jakarta">Pediatric Care</h3>
            <p className="specialty-row-desc">
              Specialised monitoring and gentle support for your baby's critical first days and weeks
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
                <span className="badge-title">Pediatric Care</span>
                <span className="badge-sub">Always here for you</span>
              </div>
            </div>
            <div className="specialty-arch-image-wrapper arch-right">
              <img
                src="/service_preventative_care_1789988969044.jpg"
                alt="Pediatric doctor examining child with stethoscope"
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
