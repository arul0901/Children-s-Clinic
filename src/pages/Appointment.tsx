import { useEffect } from 'react';
import AppointmentComponent from '../components/Appointment';

const Appointment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: '80px', minHeight: '80vh' }}>
      <AppointmentComponent />
    </div>
  );
};

export default Appointment;
