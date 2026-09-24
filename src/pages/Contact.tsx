import { useEffect } from 'react';
import { EmergencyCTA } from '../components';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: '120px', minHeight: '80vh' }} className="container">
      <h1 className="section-title" style={{ color: 'var(--color-primary)', marginBottom: '2rem', textAlign: 'center' }}>
        Get in Touch
      </h1>
      <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 4rem', fontSize: '1.2rem', opacity: 0.8 }}>
        Whether you have a general inquiry or need immediate assistance, our team is here for you and your child.
      </p>
      <EmergencyCTA />
    </div>
  );
};

export default Contact;
