import './ServiceComponents.css';

interface ServiceOverviewProps {
  title: string;
  paragraphs: string[];
}

const ServiceOverview = ({ title, paragraphs }: ServiceOverviewProps) => {
  return (
    <section className="service-overview-section">
      <div className="container service-overview-grid">
        <div>
          <span className="eyebrow">Overview</span>
          <h2 className="serif-heading service-overview-title">{title}</h2>
        </div>
        <div className="service-overview-body">
          {paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
