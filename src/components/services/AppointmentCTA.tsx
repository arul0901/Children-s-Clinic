import { useNavigate } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import './ServiceComponents.css';

interface AppointmentCTAProps {
  serviceName: string;
}

const AppointmentCTA = ({ serviceName }: AppointmentCTAProps) => {
  const navigate = useNavigate();

  return (
    <section className="service-cta-section">
      <div className="container service-cta-content">
        <h2>Schedule Your {serviceName} Visit Today</h2>
        <p>Expert, compassionate pediatric and neonatal healthcare for your family in Krishnagiri.</p>
        <button 
          className="btn-primary service-btn-white" 
          onClick={() => navigate('/appointment')}
        >
          <Calendar size={18} className="btn-icon-right" />
          Book Appointment
        </button>
      </div>
    </section>
  );
};

export default AppointmentCTA;
