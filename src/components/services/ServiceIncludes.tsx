import './ServiceComponents.css';
import FeedingBottle from '../common/FeedingBottle';

interface IncludeItem {
  title: string;
  description: string;
}

interface ServiceIncludesProps {
  includes: IncludeItem[];
}

const ServiceIncludes = ({ includes }: ServiceIncludesProps) => {
  return (
    <section className="service-includes-section">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
          <span className="eyebrow">Key Offerings</span>
          <h2 className="serif-heading" style={{ fontSize: '2.5rem' }}>What This Service Includes</h2>
        </div>
        <div className="service-includes-grid">
          {includes.map((item, idx) => (
            <div key={idx} className="service-include-card">
              <FeedingBottle color="var(--color-gold)" size={28} />
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceIncludes;
