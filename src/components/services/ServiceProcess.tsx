import './ServiceComponents.css';

interface ProcessItem {
  title: string;
  description: string;
}

interface ServiceProcessProps {
  process: ProcessItem[];
}

const ServiceProcess = ({ process }: ServiceProcessProps) => {
  return (
    <section className="service-process-section">
      <div className="container">
        <div className="service-header-center">
          <span className="eyebrow">Step by Step</span>
          <h2 className="serif-heading service-section-title">Our Care Process</h2>
        </div>
        <div className="service-process-grid">
          {process.map((step, idx) => (
            <div key={idx} className="service-process-step">
              <div className="process-step-num">0{idx + 1}</div>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
