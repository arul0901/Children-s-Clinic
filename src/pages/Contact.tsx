import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, AlertCircle, Loader2 } from 'lucide-react';
import { submitContactForm } from '../config/api';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', subject: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    const startTime = Date.now();

    const payloadMessage = form.subject
      ? `Subject: ${form.subject}\n\n${form.message}`
      : form.message;

    const res = await submitContactForm({
      name: form.name,
      email: form.email,
      phone_no: form.phone,
      message: payloadMessage,
    });

    const elapsed = Date.now() - startTime;
    if (elapsed < 500) {
      await new Promise(resolve => setTimeout(resolve, 500 - elapsed));
    }

    setIsSubmitting(false);

    if (res.success) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 6000);
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    } else {
      setErrorMsg(res.error || 'Failed to send message. Please try again.');
    }
  };

  return (
    <>
      {/* ── 1. Hero Banner ── */}
      <section className="contact-hero">
        <img src="/contact-hero.jpg" alt="Contact The Children's Clinic" className="contact-hero-img" />
        <div className="contact-hero-overlay">
          <h1 className="contact-hero-title">Contact</h1>
        </div>
      </section>

      {/* ── 2. Contact Info Strip ── */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-section-eyebrow">
            <span>Contact Info</span>
          </div>

          <h2 className="contact-info-heading">
            <em>Contact</em> &amp; Join Together
          </h2>
          <p className="contact-info-sub">
            We're here to help your little ones thrive. Reach out to us anytime — our team is always ready to assist.
          </p>

          <div className="contact-cards-row">
            {/* Card 1 – Location */}
            <div className="contact-card">
              <div className="contact-card-top">
                <div className="contact-card-icon">
                  <MapPin size={18} />
                </div>
                <span className="contact-card-label">Location<br />Visit Us At</span>
              </div>
              <h3 className="contact-card-title">Visit Us At</h3>
              <p className="contact-card-detail">
                35/13, 2nd Cross Rd, Co-operative Colony, Krishnagiri, Tamil Nadu 635001.
              </p>
            </div>

            {/* Card 2 – Phone */}
            <div className="contact-card">
              <div className="contact-card-top">
                <div className="contact-card-icon">
                  <Phone size={18} />
                </div>
                <span className="contact-card-label"> Service<br />Call Us On</span>
              </div>
              <h3 className="contact-card-title">Call Us On</h3>
              <p className="contact-card-detail">
                Mob: +91-80566-29061
              </p>
            </div>

            {/* Card 3 – Email */}
            <div className="contact-card">
              <div className="contact-card-top">
                <div className="contact-card-icon">
                  <Mail size={18} />
                </div>
                <span className="contact-card-label">Drop a Line<br />Mail Address</span>
              </div>
              <h3 className="contact-card-title">Mail Address</h3>
              <p className="contact-card-detail">
                contact@childrensclinic.com<br />
                info@childrensclinic.com
              </p>
            </div>

            {/* Card 4 – Hours */}
            <div className="contact-card">
              <div className="contact-card-top">
                <div className="contact-card-icon">
                  <Clock size={18} />
                </div>
                <span className="contact-card-label">Office Hours…<br />Opening Time</span>
              </div>
              <h3 className="contact-card-title">Opening Time</h3>
              <p className="contact-card-detail">
                Mon – Sat: 12pm – 4pm &amp; 6:30pm – 8:30pm<br />
                Sunday: 12pm – 2pm
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Form + Image Section ── */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-form-grid">

            {/* Left – Doctor image + Chat card */}
            <div className="contact-form-image-col">
              <img
                src="/dr.fathima.png"
                alt="Dr. Haseen Fathima"
                className="contact-person-img"
              />
            </div>

            {/* Right – Form */}
            <div className="contact-form-col">
              <div className="contact-section-eyebrow">
                <span>Contact Us</span>
              </div>
              <h2 className="contact-form-heading">
                <em>Reach</em> &amp; Get In Touch<br />With Us!
              </h2>

              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.98 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="contact-success-msg"
                  >
                    ✓ Message sent! We'll get back to you shortly.
                  </motion.div>
                )}
              </AnimatePresence>

              {errorMsg && (
                <div style={{ background: '#fee2e2', color: '#991b1b', padding: '0.8rem 1rem', borderRadius: '8px', fontSize: '0.9rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <AlertCircle size={18} />
                  <span>{errorMsg}</span>
                </div>
              )}

              <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
                <div className="contact-form-row">
                  <input
                    className="contact-input"
                    type="text"
                    name="name"
                    placeholder="Your Name*"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    className="contact-input"
                    type="email"
                    name="email"
                    placeholder="Your Email*"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <input
                  className="contact-input"
                  type="tel"
                  name="phone"
                  placeholder="Your Number*"
                  value={form.phone}
                  onChange={handleChange}
                />
                <textarea
                  className="contact-textarea"
                  name="message"
                  placeholder="Enter message*"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
                <button type="submit" className="contact-submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Loader2 size={18} className="animate-spin" /> Sending Message...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Google Map ── */}
      <div className="contact-map-section">
        <iframe
          title="The Children's Clinic Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3894.9629113178007!2d78.21565027402528!3d12.518616024649868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac355959e6b43d%3A0x6efb3a1c7d5a42be!2sThe%20Children's%20clinic-%20Dr.Haseen%20Fathima%20MD%2CDNB%20Peds!5e0!3m2!1sen!2sin!4v1790421681615!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
};

export default Contact;
