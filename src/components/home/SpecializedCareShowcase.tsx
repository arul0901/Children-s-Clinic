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
    title: 'New born',
    description: "Specialised monitoring and gentle support for your baby's critical first days and weeks",
    href: '/services/newborn-care'
  },
  {
    number: '02',
    title: 'Lactation Support',
    description: "Specialised monitoring and gentle support for your baby's critical first days and weeks",
    href: '/services/lactation-support',
    isFilled: true
  },
  {
    number: '03',
    title: 'Vaccination',
    description: "Specialised monitoring and gentle support for your baby's critical first days and weeks",
    href: '/services/vaccination'
  },
  {
    number: '04',
    title: 'Pediatric Consultation',
    description: "Specialised monitoring and gentle support for your baby's critical first days and weeks",
    href: '/services/pediatric-care'
  },
  {
    number: '05',
    title: 'Neonatal Care',
    description: "Specialised monitoring and gentle support for your baby's critical first days and weeks",
    href: '/services/neonatal-care'
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
            Our Medical<br />Services
          </h2>
          <p className="medical-services-subtitle">
            Expert pediatric care, advanced facilities, and a child-friendly environment designed to keep your little ones safe, comfortable, and healthy.
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
