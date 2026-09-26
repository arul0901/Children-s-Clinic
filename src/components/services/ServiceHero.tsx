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
          <span className="eyebrow service-hero-eyebrow">
            Specialized Pediatric Care
          </span>
          <h1 className="serif-heading service-hero-title">{title}</h1>
          <p className="service-hero-subtitle">{subtitle}</p>
          <div className="service-hero-btn-group">
            <button 
              className="btn-primary service-btn-gold" 
              onClick={() => navigate('/appointment')}
            >
              <Calendar size={18} className="btn-icon-right" />
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
