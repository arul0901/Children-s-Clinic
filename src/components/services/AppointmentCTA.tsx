import { useState, useId } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, CheckCircle2, User, Phone, Baby, AlertCircle, Loader2, Mail } from 'lucide-react';
import { submitAppointmentForm } from '../../config/api';
import './ServiceComponents.css';

interface AppointmentCTAProps {
  serviceName: string;
}

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
    // Sunday
    return {
      dayLabel: 'Sunday Timings (12:00 PM – 2:00 PM)',
      slots: [
        { label: '12:00 PM - 2:00 PM (Sunday Slot)', value: '12:00 PM - 2:00 PM' },
        { label: '12:00 PM', value: '12:00 PM' },
        { label: '12:30 PM', value: '12:30 PM' },
        { label: '1:00 PM', value: '1:00 PM' },
        { label: '1:30 PM', value: '1:30 PM' },
        { label: '2:00 PM', value: '2:00 PM' },
      ]
    };
  } else {
    // Monday to Saturday
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return {
      dayLabel: `${days[dayOfWeek]} Timings (12:00 PM – 4:00 PM & 6:30 PM – 8:30 PM)`,
      slots: [
        { label: '--- Afternoon Session (12:00 PM - 4:00 PM) ---', value: '12:00 PM - 4:00 PM (Afternoon Session)' },
        { label: '12:00 PM', value: '12:00 PM' },
        { label: '12:30 PM', value: '12:30 PM' },
        { label: '1:00 PM', value: '1:00 PM' },
        { label: '1:30 PM', value: '1:30 PM' },
        { label: '2:00 PM', value: '2:00 PM' },
        { label: '2:30 PM', value: '2:30 PM' },
        { label: '3:00 PM', value: '3:00 PM' },
        { label: '3:30 PM', value: '3:30 PM' },
        { label: '4:00 PM', value: '4:00 PM' },
        { label: '--- Evening Session (6:30 PM - 8:30 PM) ---', value: '6:30 PM - 8:30 PM (Evening Session)' },
        { label: '6:30 PM', value: '6:30 PM' },
        { label: '7:00 PM', value: '7:00 PM' },
        { label: '7:30 PM', value: '7:30 PM' },
        { label: '8:00 PM', value: '8:00 PM' },
        { label: '8:30 PM', value: '8:30 PM' },
      ]
    };
  }
};

const AppointmentCTA = ({ serviceName }: AppointmentCTAProps) => {
  const navigate = useNavigate();
  const parentNameId = useId();
  const childNameId = useId();
  const emailId = useId();
  const phoneId = useId();
  const dateId = useId();
  const timeId = useId();

  const todayStr = new Date().toISOString().split('T')[0];

  const [form, setForm] = useState({
    parentName: '',
    childName: '',
    email: '',
    phone: '',
    date: todayStr,
    timeSlot: '12:00 PM - 4:00 PM',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const timingInfo = getAvailableTimeSlots(form.date);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value;
    const newTimingInfo = getAvailableTimeSlots(newDate);
    const validValues = newTimingInfo.slots.map(s => s.value).filter(Boolean);
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

    const startTime = Date.now();

    const res = await submitAppointmentForm({
      parent_name: form.parentName,
      child_name: form.childName,
      email: form.email,
      phone_no: form.phone,
      date: form.date,
      time: form.timeSlot,
      message: `Requested via ${serviceName} page`,
    });

    const elapsed = Date.now() - startTime;
    if (elapsed < 500) {
      await new Promise(resolve => setTimeout(resolve, 500 - elapsed));
    }

    setIsSubmitting(false);

    if (res.success) {
      setSubmitted(true);
    } else {
      setErrorMsg(res.error || 'Failed to submit appointment request.');
    }
  };

  return (
    <section className="service-cta-section">
      <div className="container service-cta-container">
        
        {/* Left Side: Editorial Banner & Timings Info */}
        <div className="service-cta-info">
          <span className="service-cta-badge">
            <Clock size={16} /> Appointment Timings
          </span>
          <h2>Schedule Your {serviceName} Visit Today</h2>
          <p>
            Expert, compassionate pediatric and neonatal healthcare for your family in Krishnagiri.
          </p>

          <div className="cta-timings-card">
            <h4><Clock size={18} /> Clinic Consultation Hours</h4>
            <div className="cta-timing-row">
              <span className="cta-day-label">Mon – Sat:</span>
              <span className="cta-time-val">12:00 PM – 4:00 PM &amp; 6:30 PM – 8:30 PM</span>
            </div>
            <div className="cta-timing-row">
              <span className="cta-day-label">Sunday:</span>
              <span className="cta-time-val">12:00 PM – 2:00 PM</span>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Appointment Form */}
        <div className="service-cta-form-wrapper">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="cta-success"
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -15 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="cta-success-box"
              >
                <CheckCircle2 size={48} className="cta-success-icon" />
                <h3>Appointment Requested!</h3>
                <p>
                  Thank you <strong>{form.parentName || 'Parent'}</strong>. We have received your booking request for <strong>{serviceName}</strong>.
                </p>
                <div className="cta-success-details">
                  <p><strong>Date:</strong> {form.date}</p>
                  <p><strong>Selected Time:</strong> {form.timeSlot}</p>
                  {form.email && <p><strong>Email:</strong> {form.email}</p>}
                </div>
                <button 
                  className="btn-primary service-btn-white"
                  onClick={() => { setSubmitted(false); navigate('/appointment'); }}
                >
                  View Details on Booking Page
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="cta-form"
                initial={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -10 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="service-cta-form"
                onSubmit={handleSubmit}
              >
                <h3 className="cta-form-title">Quick Booking Form</h3>

                {errorMsg && (
                  <div style={{ background: '#fee2e2', color: '#991b1b', padding: '0.8rem 1rem', borderRadius: '8px', fontSize: '0.9rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <AlertCircle size={18} />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="cta-form-grid">
                  <div className="cta-form-group">
                    <label htmlFor={parentNameId}><User size={15} /> Parent Name</label>
                    <input
                      id={parentNameId}
                      type="text"
                      placeholder="Your Name"
                      value={form.parentName}
                      onChange={(e) => setForm({ ...form, parentName: e.target.value })}
                      required
                    />
                  </div>

                  <div className="cta-form-group">
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

                  <div className="cta-form-group">
                    <label htmlFor={emailId}><Mail size={15} /> Email Address</label>
                    <input
                      id={emailId}
                      type="email"
                      placeholder="parent@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>

                  <div className="cta-form-group">
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

                  <div className="cta-form-group full-width">
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

                  <div className="cta-form-group full-width">
                    <label htmlFor={timeId}><Clock size={15} /> Booking Time Slot</label>
                    <select
                      id={timeId}
                      value={form.timeSlot}
                      onChange={(e) => setForm({ ...form, timeSlot: e.target.value })}
                      required
                    >
                      {timingInfo.slots.map((slot, idx) => (
                        <option key={idx} value={slot.value} disabled={slot.value.startsWith('---')}>
                          {slot.label}
                        </option>
                      ))}
                    </select>
                    <small className="cta-day-hint">{timingInfo.dayLabel}</small>
                  </div>
                </div>

                <button type="submit" className="btn-primary cta-submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Loader2 size={18} className="animate-spin" /> Submitting Request...
                    </span>
                  ) : (
                    <>
                      <Calendar size={18} className="btn-icon-right" />
                      Confirm Booking Request
                    </>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default AppointmentCTA;
