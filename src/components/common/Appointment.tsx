import { useState, useId } from 'react';
import { Clock, CheckCircle2, Calendar, Phone, User, Baby, MessageSquare, AlertCircle, Loader2, Mail } from 'lucide-react';
import { submitAppointmentForm } from '../../config/api';
import './Appointment.css';

const getAvailableTimeSlots = (selectedDate: string) => {
  if (!selectedDate) {
    return {
      dayLabel: 'Mon–Sat: 12pm–4pm & 6:30pm–8:30pm | Sun: 12pm–2pm',
      slots: [
        { label: 'Select Preferred Time Slot', value: '' },
        { label: '12:00 PM - 4:00 PM (Mon-Sat Afternoon)', value: '12:00 PM - 4:00 PM' },
        { label: '6:30 PM - 8:30 PM (Mon-Sat Evening)', value: '6:30 PM - 8:30 PM' },
        { label: '12:00 PM - 2:00 PM (Sunday)', value: '12:00 PM - 2:00 PM' },
      ]
    };
  }

  const [year, month, day] = selectedDate.split('-').map(Number);
  const dateObj = new Date(year, month - 1, day);
  const dayOfWeek = dateObj.getDay();

  if (dayOfWeek === 0) {
    // Sunday: 12pm to 2pm
    return {
      dayLabel: 'Sunday Consultation Timings (12:00 PM – 2:00 PM)',
      slots: [
        { label: '12:00 PM - 2:00 PM (Sunday Session)', value: '12:00 PM - 2:00 PM' },
        { label: '12:00 PM', value: '12:00 PM' },
        { label: '12:30 PM', value: '12:30 PM' },
        { label: '1:00 PM', value: '1:00 PM' },
        { label: '1:30 PM', value: '1:30 PM' },
        { label: '2:00 PM', value: '2:00 PM' },
      ]
    };
  } else {
    // Monday to Saturday: 12pm to 4pm and 6:30pm to 8:30pm
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return {
      dayLabel: `${days[dayOfWeek]} (Today) Consultation Timings (12:00 PM – 4:00 PM & 6:30 PM – 8:30 PM)`,
      slots: [
        { label: '--- Afternoon Session (12:00 PM - 4:00 PM) ---', value: '12:00 PM - 4:00 PM (Afternoon)' },
        { label: '12:00 PM', value: '12:00 PM' },
        { label: '12:30 PM', value: '12:30 PM' },
        { label: '1:00 PM', value: '1:00 PM' },
        { label: '1:30 PM', value: '1:30 PM' },
        { label: '2:00 PM', value: '2:00 PM' },
        { label: '2:30 PM', value: '2:30 PM' },
        { label: '3:00 PM', value: '3:00 PM' },
        { label: '3:30 PM', value: '3:30 PM' },
        { label: '4:00 PM', value: '4:00 PM' },
        { label: '--- Evening Session (6:30 PM - 8:30 PM) ---', value: '6:30 PM - 8:30 PM (Evening)' },
        { label: '6:30 PM', value: '6:30 PM' },
        { label: '7:00 PM', value: '7:00 PM' },
        { label: '7:30 PM', value: '7:30 PM' },
        { label: '8:00 PM', value: '8:00 PM' },
        { label: '8:30 PM', value: '8:30 PM' },
      ]
    };
  }
};

const Appointment = () => {
  const parentNameId = useId();
  const childNameId = useId();
  const emailId = useId();
  const phoneId = useId();
  const dateId = useId();
  const timeId = useId();
  const reasonId = useId();

  const todayStr = new Date().toISOString().split('T')[0];

  const [form, setForm] = useState({
    parentName: '',
    childName: '',
    email: '',
    phone: '',
    date: todayStr,
    timeSlot: '12:00 PM - 4:00 PM (Afternoon)',
    reason: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const timingInfo = getAvailableTimeSlots(form.date);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value;
    const newTimingInfo = getAvailableTimeSlots(newDate);
    const validValues = newTimingInfo.slots.map(s => s.value).filter(v => Boolean(v) && !v.startsWith('---'));
    const newTime = validValues.length > 0 ? validValues[0] : '';
    setForm(prev => ({
      ...prev,
      date: newDate,
      timeSlot: newTime,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    const res = await submitAppointmentForm({
      parent_name: form.parentName,
      child_name: form.childName,
      email: form.email,
      phone_no: form.phone,
      date: form.date,
      time: form.timeSlot,
      message: form.reason,
    });

    setIsSubmitting(false);

    if (res.success) {
      setSubmitted(true);
    } else {
      setErrorMsg(res.error || 'Failed to submit appointment request. Please try again.');
    }
  };

  return (
    <section className="section appointment-section" id="contact">
      <div className="container">
        <div className="appointment-wrapper">
          
          <div className="appointment-text">
            <h2>Let's take care of their next chapter.</h2>
            <p>Book a consultation with our specialists at The Children's Clinic.</p>

            {/* Clinic Consultation Timings Badge */}
            <div className="appointment-timings-card">
              <h4><Clock size={18} /> Appointment Timings</h4>
              <div className="app-timing-row">
                <span className="app-timing-days">Monday to Saturday:</span>
                <span className="app-timing-badge">12:00 PM – 4:00 PM &amp; 6:30 PM – 8:30 PM</span>
              </div>
              <div className="app-timing-row">
                <span className="app-timing-days">Sunday:</span>
                <span className="app-timing-badge">12:00 PM – 2:00 PM</span>
              </div>
            </div>
          </div>

          <div className="appointment-form-container">
            {submitted ? (
              <div className="appointment-success-state">
                <CheckCircle2 size={54} className="app-success-icon" />
                <h3>Appointment Request Submitted!</h3>
                <p>
                  Thank you <strong>{form.parentName || 'Parent'}</strong>. Your appointment request for <strong>{form.childName || 'your child'}</strong> has been registered.
                </p>
                <div className="app-summary-card">
                  <p>📅 <strong>Date:</strong> {form.date}</p>
                  <p>⏰ <strong>Booking Time:</strong> {form.timeSlot}</p>
                  {form.email && <p>✉️ <strong>Email:</strong> {form.email}</p>}
                  <p>📞 <strong>Phone:</strong> {form.phone}</p>
                </div>
                <button
                  type="button"
                  className="btn-primary submit-btn"
                  onClick={() => setSubmitted(false)}
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form className="appointment-form" onSubmit={handleSubmit}>
                {errorMsg && (
                  <div className="appointment-error-box" style={{ background: '#fee2e2', color: '#991b1b', padding: '0.8rem 1rem', borderRadius: '8px', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <AlertCircle size={18} />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor={parentNameId}><User size={15} /> Parent / Guardian Name</label>
                    <input
                      id={parentNameId}
                      type="text"
                      placeholder="Parent Name"
                      value={form.parentName}
                      onChange={(e) => setForm({ ...form, parentName: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor={childNameId}><Baby size={15} /> Child's Name</label>
                    <input
                      id={childNameId}
                      type="text"
                      placeholder="Child's Name"
                      value={form.childName}
                      onChange={(e) => setForm({ ...form, childName: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor={emailId}><Mail size={15} /> Email Address</label>
                    <input
                      id={emailId}
                      type="email"
                      placeholder="parent@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor={phoneId}><Phone size={15} /> Phone Number</label>
                    <input
                      id={phoneId}
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group full-width">
                    <label htmlFor={dateId}><Calendar size={15} /> Preferred Date</label>
                    <input
                      id={dateId}
                      type="date"
                      min={todayStr}
                      value={form.date}
                      onChange={handleDateChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group full-width">
                  <label htmlFor={timeId}><Clock size={15} /> Booking Time Slot</label>
                  <select
                    id={timeId}
                    className="time-slot-select"
                    value={form.timeSlot}
                    onChange={(e) => setForm({ ...form, timeSlot: e.target.value })}
                    required
                  >
                    {timingInfo.slots.map((slot, index) => (
                      <option key={index} value={slot.value} disabled={slot.value.startsWith('---')}>
                        {slot.label}
                      </option>
                    ))}
                  </select>
                  <span className="timing-hint-tag">{timingInfo.dayLabel}</span>
                </div>

                <div className="form-group full-width">
                  <label htmlFor={reasonId}><MessageSquare size={15} /> Reason for Visit</label>
                  <textarea
                    id={reasonId}
                    placeholder="Please briefly describe the reason for your visit..."
                    rows={3}
                    value={form.reason}
                    onChange={(e) => setForm({ ...form, reason: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn-primary submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Loader2 size={18} className="animate-spin" /> Submitting Request...
                    </span>
                  ) : (
                    'Request Appointment'
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Appointment;
