import 'react';
import './Appointment.css';

const Appointment = () => {
  return (
    <section className="section appointment-section" id="contact">
      <div className="container">
        <div className="appointment-wrapper">
          <div className="appointment-text">
            <h2>Let's take care of their next chapter.</h2>
            <p>Book a consultation with our specialists.</p>
          </div>
          
          <div className="appointment-form-container">
            <form className="appointment-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <label>Parent / Guardian Name</label>
                  <input type="text" placeholder="John Doe" />
                </div>
                <div className="form-group">
                  <label>Child's Name</label>
                  <input type="text" placeholder="Jane Doe" />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" placeholder="+1 (555) 000-0000" />
                </div>
                <div className="form-group">
                  <label>Preferred Date</label>
                  <input type="date" />
                </div>
              </div>
              
              <div className="form-group full-width">
                <label>Reason for Visit</label>
                <textarea placeholder="Please briefly describe the reason for your visit..." rows={4}></textarea>
              </div>
              
              <button type="submit" className="btn-primary submit-btn">Request Appointment</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
