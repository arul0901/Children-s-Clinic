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
          <h1 className="holistic-main-heading">
            Pediatrician <span className="text-lime">in</span> <span className="text-purple">Krishnagiri</span>
          </h1>

          <p className="holistic-desc-paragraph">
           <strong>The Children’s Clinic is dedicated to providing thoughtful, child-focused healthcare for newborns, infants and growing children.</strong>Led by <strong>Dr. Haseen Fathima, MD, DNB (Pediatrics), with 9+ years of experience</strong>, the clinic focuses on newborn care, neonatal support, lactation, vaccination, growth monitoring and common childhood health concerns.
          </p>

          <p className="holistic-desc-paragraph">
            What Makes Our Care Child-Focused?
          </p>

          {/* 5 Outlined Stat Pills (Row 1: 1, 2 | Row 2: 3, 4 | Row 3: 5 centered) */}
          <div className="holistic-pills-grid">
            {[
              { id: 1, title: 'Newborn & Neonatal Care' },
              { id: 2, title: 'Lactation & Breastfeeding Support' },
              { id: 3, title: 'Growth & Development Monitoring' },
              { id: 4, title: 'Vaccination & Immunization' },
              { id: 5, title: 'Complete Pediatric Care' },
            ].map((pill) => (
              <div key={pill.id} className="holistic-stat-pill">
                <div className="holistic-pill-icon-box">
                  <Stethoscope size={15} />
                </div>
                <div className="holistic-pill-text">
                  <span className="holistic-pill-title">{pill.title}</span>
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
            Meet Our Pediatrician
          </button>
        </div>

      </div>
    </section>
  );
}
