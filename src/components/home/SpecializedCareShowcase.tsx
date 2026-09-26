import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './SpecializedCareShowcase.css';

export interface MedicalService {
  number: string;
  title: string;
  description: string;
  href: string;
  isFilled?: boolean;
}

const MEDICAL_SERVICES: MedicalService[] = [
  {
    number: '01',
    title: 'Newborn & Infant Care',
    description: 'Gentle, attentive care for newborns and infants through their early stages.',
    href: '/services/newborn-care-jaundice-krishnagiri'
  },
  {
    number: '02',
    title: 'Growth & Development Monitoring',
    description: 'Regular monitoring of your child\'s growth and developmental milestones.',
    href: '/services/child-growth-development-krishnagiri',
    isFilled: true
  },
  {
    number: '03',
    title: 'Vaccination & Preventive Care',
    description: 'Essential vaccinations and preventive pediatric care for growing children.',
    href: '/services/child-vaccination-krishnagiri'
  },
  {
    number: '04',
    title: 'Fever, Cold & Cough Care',
    description: 'Medical support for common childhood illnesses and everyday health concerns.',
    href: '/services/pediatric-fever-cold-cough-krishnagiri'
  },
  {
    number: '05',
    title: 'Seizure & Pediatric Health Support',
    description: 'Care and clinical assessment for seizures, fits and other pediatric health concerns.',
    href: '/services/seizures-fits-babies-children-krishnagiri'
  }
];

const SpecializedCareShowcase = () => {
  const navigate = useNavigate();

  return (
    <section className="medical-services-section" id="specialized-care">
      <div className="container">
        {/* Header with Title on Left, Subtitle on Right */}
        <div className="medical-services-header">
          <h2 className="medical-services-title">
            Five Key Areas<br />of Child Support
          </h2>
          <p className="medical-services-subtitle">
            Personalized pediatric care focused on keeping children healthy, supporting their development and addressing their healthcare needs at every stage.
          </p>
        </div>

        {/* 4-Column Grid Layout matching reference image */}
        <div className="medical-services-grid">
          {MEDICAL_SERVICES.map((service) => (
            <div
              key={service.number}
              className={`medical-service-card ${service.isFilled ? 'filled-purple-card' : 'outlined-card'}`}
              onClick={() => navigate(service.href)}
              role="button"
              tabIndex={0}
            >
              <div className="service-card-number-wrapper">
                <div className="service-card-number">
                  {service.number}
                </div>
              </div>
              <div className="service-card-content-bottom">
                <h3 className="service-card-title">
                  {service.title}
                </h3>
                {service.description ? (
                  <p className="service-card-desc">
                    {service.description}
                  </p>
                ) : null}
                <div className="service-card-explore">
                  <span>Explore</span>
                  <ArrowRight size={15} className="explore-arrow" />
                </div>
              </div>
            </div>
          ))}

          {/* Row 2 Spanning Image Card (Columns 2-4) */}
          <div className="medical-service-image-card">
            <img
              src="/service_editorial_1_1789990863800.jpg"
              alt="Pediatric care patient and doctor consultation"
              className="service-image-banner"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecializedCareShowcase;
