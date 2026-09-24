import './ServiceComponents.css';

interface InfoItem {
  title: string;
  content: string;
}

interface ServiceInformationProps {
  information: InfoItem[];
}

const ServiceInformation = ({ information }: ServiceInformationProps) => {
  return (
    <section className="service-includes-section" style={{ backgroundColor: '#fff' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
          <span className="eyebrow">Important Details</span>
          <h2 className="serif-heading" style={{ fontSize: '2.5rem' }}>Patient Information</h2>
        </div>
        <div className="service-includes-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {information.map((info, idx) => (
            <div key={idx} className="service-include-card" style={{ backgroundColor: 'var(--color-bg)' }}>
              <h4>{info.title}</h4>
              <p>{info.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceInformation;
