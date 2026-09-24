import { useNavigate } from 'react-router-dom';
import { Stethoscope } from 'lucide-react';
import './HolisticWellness.css';

export default function HolisticWellness() {
  const navigate = useNavigate();

  return (
    <section className="holistic-wellness-section">
      <div className="holistic-wellness-container">
        
        {/* ── Left Side: 2x2 Asymmetric Media Collage ── */}
        <div className="holistic-media-grid">
          {/* Card 1: Top Left with Lime Arch */}
          <div className="holistic-img-card holistic-card-top-left">
            <img 
              src="/hero_image.jpg" 
              alt="Child resting comfortably in clinic bed" 
            />
          </div>

          {/* Card 2: Top Right (Doctor High Five) */}
          <div className="holistic-img-card holistic-card-top-right">
            <img 
              src="/pediatric_bg.jpg" 
              alt="Doctor giving high five to young patient" 
            />
          </div>

          {/* Card 3: Bottom Left (Doctor smiling at child) */}
          <div className="holistic-img-card holistic-card-bottom-left">
            <img 
              src="/service_editorial_1_1789990863800.jpg" 
              alt="Female pediatrician examining happy young girl" 
            />
          </div>

          {/* Card 4: Bottom Right (B&W Newborn Swaddled with Purple Arch) */}
          <div className="holistic-img-card holistic-card-bottom-right">
            <img 
              src="/service_neonatal_care_1789988898999.jpg" 
              alt="Swaddled newborn baby sleeping peacefully" 
            />
          </div>
        </div>

        {/* ── Right Side: Content Column ── */}
        <div className="holistic-content-col">
          <h2 className="holistic-main-heading">
            Thoughtful <span className="text-lime">Care</span> at every stage of <span className="text-purple">Childhood</span>
          </h2>

          <p className="holistic-desc-paragraph">
            Specialised monitoring and gentle support for your baby’s critial first days and weeks
          </p>

          <p className="holistic-desc-paragraph">
            Specialised monitoring and gentle support for your baby’s critial first days and weeks
          </p>

          {/* 4 Outlined Stat Pills */}
          <div className="holistic-pills-row">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="holistic-stat-pill">
                <div className="holistic-pill-icon-box">
                  <Stethoscope size={15} />
                </div>
                <div className="holistic-pill-text">
                  <span className="holistic-pill-title">50+ Expects</span>
                  <span className="holistic-pill-sub">Doctors</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button 
            type="button" 
            className="holistic-cta-btn" 
            onClick={() => navigate('/about')}
          >
            Explore About us
          </button>
        </div>

      </div>
    </section>
  );
}
