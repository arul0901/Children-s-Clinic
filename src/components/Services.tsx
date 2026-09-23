import { useState } from 'react';
import 'react';
import { ChevronRight } from 'lucide-react';
import './Services.css';

const servicesList = [
  { id: 1, title: 'Lactational Support', desc: 'Specialized guidance and support for breastfeeding and early infant feeding, ensuring a healthy start.' },
  { id: 2, title: 'Expert Newborn Care', desc: 'Comprehensive care during the crucial newborn period, focusing on developmental milestones.' },
  { id: 3, title: 'Vaccination', desc: 'Evidence-based vaccination and immunization support to protect your child\'s future.' },
  { id: 4, title: 'Common Childhood Illness', desc: 'Thorough assessment and management of common pediatric illnesses with compassionate care.' },
  { id: 5, title: 'Neonatal Emergency', desc: 'Specialized, rapid-response emergency support for newborns in critical moments.' },
  { id: 6, title: 'Pediatric Emergency', desc: 'Timely, expert emergency care for children when every moment matters.' },
];

const Services = () => {
  const [activeId, setActiveId] = useState(1);

  return (
    <section className="section services-section" id="services">
      <div className="container">
        
        <div className="services-interactive">
          <div className="services-content">
            <h2 className="section-title" style={{ marginBottom: '3rem', color: 'var(--color-primary)', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', letterSpacing: '2px' }}>
              Areas of Care
            </h2>
            <div className="services-list">
              {servicesList.map(item => (
                <div 
                  key={item.id} 
                  className={`service-item ${activeId === item.id ? 'active' : ''}`}
                  onMouseEnter={() => setActiveId(item.id)}
                >
                  <div className="service-header">
                    <span className="service-num">0{item.id}</span>
                    <h3 className="service-title">{item.title}</h3>
                    <ChevronRight className="service-icon" size={20} />
                  </div>
                  <div className="service-desc-wrapper">
                    <p className="service-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="service-visual">
             <div className="img-placeholder-wrapper visual-placeholder">
               <img 
                 src="/services_image.jpg" 
                 alt={`Visual for ${servicesList.find(s => s.id === activeId)?.title}`} 
               />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
