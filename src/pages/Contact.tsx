import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', subject: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
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
                35/13, 2nd Cross Rd, Co-operative Colony, Thiruvalluvar Nagar, Krishnagiri, Tamil Nadu 635002.
              </p>
            </div>

            {/* Card 2 – Phone */}
            <div className="contact-card">
              <div className="contact-card-top">
                <div className="contact-card-icon">
                  <Phone size={18} />
                </div>
                <span className="contact-card-label">24/7 Service<br />Call Us On</span>
              </div>
              <h3 className="contact-card-title">Call Us On</h3>
              <p className="contact-card-detail">
                Tel: +91-XXXXX-XXXXX<br />
                Mob: +91-XXXXX-XXXXX
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
                Mon – Fri: 9am – 6pm<br />
                Sunday (Closed)
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
                src="/contact-doctor.jpg"
                alt="Dr. Haseen Fathima"
                className="contact-person-img"
              />
              <div className="contact-chat-card">
                <div className="contact-chat-icon">
                  <MessageCircle size={20} color="#fff" />
                </div>
                <h4>Chat With Live!</h4>
                <p>
                  Have a quick question? Chat directly with our medical team for instant support.
                </p>
                <button className="contact-chat-btn">Let's Chat</button>
              </div>
            </div>

            {/* Right – Form */}
            <div className="contact-form-col">
              <div className="contact-section-eyebrow">
                <span>Contact Us</span>
              </div>
              <h2 className="contact-form-heading">
                <em>Reach</em> &amp; Get In Touch<br />With Us!
              </h2>

              {submitted && (
                <div className="contact-success-msg">
                  ✓ Message sent! We'll get back to you shortly.
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
                <div className="contact-form-row">
                  <input
                    className="contact-input"
                    type="tel"
                    name="phone"
                    placeholder="Your Number*"
                    value={form.phone}
                    onChange={handleChange}
                  />
                  <input
                    className="contact-input"
                    type="text"
                    name="subject"
                    placeholder="Your Subject*"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <textarea
                  className="contact-textarea"
                  name="message"
                  placeholder="Enter message"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
                <button type="submit" className="contact-submit-btn">
                  Send Message
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
