import { useNavigate } from 'react-router-dom';

interface AppointmentCTAProps {
  serviceName: string;
}

const AppointmentCTA = ({ serviceName }: AppointmentCTAProps) => {
  const navigate = useNavigate();

  return (
    <section className="service-section bg-white" style={{ paddingBottom: '8rem' }}>
      <div className="service-container scta-container">
        <h2 className="scta-title">Need {serviceName}?</h2>
        <p className="scta-desc">
          Book a consultation with our specialized team to discuss your child's health and development.
        </p>
        <button 
          className="btn-primary" 
          onClick={() => navigate('/appointment')}
        >
          Book an Appointment
        </button>
      </div>
    </section>
  );
};

export default AppointmentCTA;
