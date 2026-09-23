import { useEffect } from 'react';
import DoctorExpertise from '../components/DoctorExpertise';
import Vision from '../components/Vision';
import Philosophy from '../components/Philosophy';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: '80px' }}>
      <Philosophy />
      <DoctorExpertise />
      <Vision />
    </div>
  );
};

export default About;
