import 'react';
import { PhoneCall } from 'lucide-react';
import './EmergencyCTA.css';

const EmergencyCTA = () => {
  return (
    <section className="section emergency-section">
      <div className="container">
        <div className="emergency-card">
          <div className="emergency-content">
            <h2>When your child needs care, every moment matters.</h2>
            <p>Expert neonatal and pediatric emergency support when you need it most.</p>
            <button className="btn-primary emergency-btn">
              <PhoneCall size={18} className="btn-icon-left" />
              Contact the Clinic
            </button>
          </div>
          <div className="emergency-visual">
            <div className="pulse-ring"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyCTA;
