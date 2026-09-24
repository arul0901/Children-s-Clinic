import { useNavigate } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import './ServiceComponents.css';

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  image: string;
}

const ServiceHero = ({ title, subtitle, image }: ServiceHeroProps) => {
  const navigate = useNavigate();

  return (
    <section className="service-hero-section">
      <div className="container service-hero-grid">
        <div className="service-hero-content">
          <span className="eyebrow" style={{ color: 'var(--color-gold)', marginBottom: '1rem', display: 'block' }}>
            Specialized Pediatric Care
          </span>
          <h1 className="serif-heading service-hero-title">{title}</h1>
          <p className="service-hero-subtitle">{subtitle}</p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button 
              className="btn-primary" 
              style={{ backgroundColor: 'var(--color-gold)', borderColor: 'var(--color-gold)' }}
              onClick={() => navigate('/appointment')}
            >
              <Calendar size={18} style={{ marginRight: '8px' }} />
              Book Consultation
            </button>
          </div>
        </div>
        <div className="service-hero-img-wrapper">
          <img src={image} alt={title} />
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
