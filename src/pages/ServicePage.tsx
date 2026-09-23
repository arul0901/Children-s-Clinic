import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import ServiceHero from '../components/service/ServiceHero';
import ServiceOverview from '../components/service/ServiceOverview';
import ServiceIncludes from '../components/service/ServiceIncludes';
import ServiceProcess from '../components/service/ServiceProcess';
import ServiceInformation from '../components/service/ServiceInformation';
import ServiceFAQ from '../components/service/ServiceFAQ';
import AppointmentCTA from '../components/service/AppointmentCTA';
import './ServicePage.css';

const ServicePage = () => {
  const { id } = useParams<{ id: string }>();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!id || !servicesData[id]) {
    // Redirect to home or a generic services page if not found
    return <Navigate to="/" replace />;
  }

  const data = servicesData[id];

  return (
    <div className="service-page-wrapper">
      <ServiceHero 
        title={data.title}
        subtitle={data.subtitle}
        image={data.heroImage}
      />
      
      <ServiceOverview 
        title={data.overview.title}
        paragraphs={data.overview.paragraphs}
      />
      
      <ServiceIncludes 
        includes={data.includes}
      />
      
      <ServiceProcess 
        process={data.process}
      />
      
      <ServiceInformation 
        information={data.information}
      />
      
      <ServiceFAQ 
        faqs={data.faqs}
      />
      
      <AppointmentCTA 
        serviceName={data.title}
      />
    </div>
  );
};

export default ServicePage;
