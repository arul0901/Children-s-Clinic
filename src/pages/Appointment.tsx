import { useEffect } from 'react';
import { Appointment as AppointmentComponent } from '../components';

const Appointment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="appointment-page-wrapper">
      <AppointmentComponent />
    </div>
  );
};

export default Appointment;
