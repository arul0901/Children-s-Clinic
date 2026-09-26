import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import './BookAppointmentCTA.css';

const BookAppointmentCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="creative-cta-section">
      <div className="container creative-cta-container">
        {/* Top Aesthetic Badge */}
        <div className="creative-cta-badge-wrapper">
          <span className="creative-cta-top-badge font-happy-monkey">
            <Sparkles size={15} className="badge-sparkle" />
            Empathetic & Expert Care
          </span>
        </div>

        {/* Creative Mixed Font Title */}
        <h2 className="creative-cta-title">
          <span className="font-plus-jakarta">Give Your Child the </span>
          <span className="font-happy-monkey cta-purple-accent">Care & Attention</span>{' '}
          <span className="cta-inline-pill">
            <img src="/service_emergency_care_1789988990048.jpg" alt="Medical Care" />
          </span>{' '}
          <span className="font-plus-jakarta">and </span>
          <span className="font-happy-monkey cta-purple-accent">Medical Support</span>{' '}
          <span className="font-plus-jakarta">They Need</span>{' '}
          <span className="cta-inline-avatars">
            <img src="/doctor_portrait.jpg" alt="Doctor" className="avatar-img-1" />
            <img src="/phototherapy_treatment_1789989308209.jpg" alt="Care Specialist" className="avatar-img-2" />
            <img src="/service_neonatal_care_1789988898999.jpg" alt="Medical Team" className="avatar-img-3" />
          </span>{' '}
          <span className="font-plus-jakarta">at Every Stage of </span>
          <span className="font-happy-monkey cta-purple-accent">Growing Up</span>
        </h2>

        {/* Description */}
        <p className="creative-cta-desc font-dm-sans">
          From newborn and neonatal care to <span className="font-happy-monkey cta-purple-accent">vaccinations</span>, <span className="font-happy-monkey cta-purple-accent">growth monitoring</span>, <span className="font-happy-monkey cta-purple-accent">common childhood illnesses</span> and <span className="font-happy-monkey cta-purple-accent">ongoing pediatric support</span>, The Children’s Clinic is here to guide parents through every stage of their child’s healthcare journey.
        </p>

        {/* Button Wrapper */}
        <div className="creative-cta-btn-wrapper">
          <button
            className="creative-cta-btn font-plus-jakarta"
            onClick={() => navigate('/appointment')}
          >
            <span>Book a Pediatric Consultation</span>
            <ArrowRight size={18} className="btn-icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookAppointmentCTA;
