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
    <section className="service-includes-section service-bg-white">
      <div className="container">
        <div className="service-header-center">
          <span className="eyebrow">Important Details</span>
          <h2 className="serif-heading service-section-title">Patient Information</h2>
        </div>
        <div className="service-includes-grid service-info-grid">
          {information.map((info, idx) => (
            <div key={idx} className="service-include-card service-card-bg">
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
