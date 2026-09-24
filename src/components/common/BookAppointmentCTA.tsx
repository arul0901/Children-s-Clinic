import { useNavigate } from 'react-router-dom';
import './BookAppointmentCTA.css';

const BookAppointmentCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="creative-cta-section">
      <div className="container creative-cta-container">
        <h2 className="creative-cta-title">
          <span className="font-plus-jakarta">We Combine innovative </span>
          <span className="cta-inline-pill">
            <img src="/service_emergency_care_1789988990048.jpg" alt="Innovative technology" />
          </span>{' '}
          <span className="font-happy-monkey">technologies with a</span>
          <br />
          <span className="font-happy-monkey">human approach to make every patient </span>
          <span className="cta-inline-avatars">
            <img src="/doctor_portrait.jpg" alt="Doctor" className="avatar-img-1" />
            <img src="/phototherapy_treatment_1789989308209.jpg" alt="Care Specialist" className="avatar-img-2" />
            <img src="/service_neonatal_care_1789988898999.jpg" alt="Medical Team" className="avatar-img-3" />
          </span>
          <br />
          <span className="font-dm-sans creative-cta-bold">Feel condition and calm</span>
        </h2>

        <p className="creative-cta-desc">
          Expert pediatric care, advanced facilities, and a child-friendly environment designed to keep your little ones safe, comfortable, and healthy.
        </p>

        <div className="creative-cta-btn-wrapper">
          <button 
            className="creative-cta-btn" 
            onClick={() => navigate('/appointment')}
          >
            Book a Appointment
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookAppointmentCTA;
