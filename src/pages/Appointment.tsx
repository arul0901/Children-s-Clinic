import { useEffect } from 'react';
import { Appointment as AppointmentComponent } from '../components';

const Appointment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="appointment-page-wrapper" role="main" aria-label="Book an Appointment">
      <AppointmentComponent />
    </main>
  );
};

export default Appointment;
