import { Link, useNavigate } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="container">
        
        <div className="footer-grid">
          {/* Brand & Social */}
          <div className="footer-brand">
            <Link to="/" className="logo-mark" onClick={() => window.scrollTo(0,0)}>
              <img src="/logo.png" alt="The Children's Clinic" className="logo-image footer-logo-image" />
            </Link>
            <p>
              Premium pediatric and neonatal care led by Dr. Haseen Fathima. We combine deep medical expertise with an instinctive understanding of how children and families experience illness.
            </p>
            <div className="social-links">
              <a href="#" className="social-circle" aria-label="Facebook">FB</a>
              <a href="#" className="social-circle" aria-label="Instagram">IG</a>
              <a href="#" className="social-circle" aria-label="Twitter">TW</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <Link to="/" onClick={() => window.scrollTo(0,0)}>Home</Link>
            <Link to="/about" onClick={() => window.scrollTo(0,0)}>About Us</Link>
            <Link to="/services" onClick={() => window.scrollTo(0,0)}>Services</Link>
            <Link to="/#vision-mission" onClick={() => window.scrollTo(0,0)}>Vision</Link>
            <Link to="/contact" onClick={() => window.scrollTo(0,0)}>Contact Us</Link>
          </div>

          {/* Specialties */}
          <div className="footer-col">
            <h4>Specialties</h4>
            <p>Neonatal Care</p>
            <p>Pediatric Care</p>
            <p>Vaccination</p>
            <p>Lactation Support</p>
            <p>Emergency Care</p>
          </div>

          {/* Contact & CTA */}
          <div className="footer-col">
            <h4>Get in Touch</h4>
            
            <div className="footer-contact-item">
              <MapPin size={18} />
              <span>Krishnagiri, Tamil Nadu, India</span>
            </div>
            
            <div className="footer-contact-item">
              <Phone size={18} />
              <span>+91 XXXXX XXXXX</span>
            </div>
            
            <div className="footer-contact-item">
              <Mail size={18} />
              <span>contact@childrensclinic.com</span>
            </div>
            
            <div className="footer-contact-item">
              <Clock size={18} />
              <span>Available 24/7 for Emergencies</span>
            </div>

            <button 
              className="btn-primary" 
              style={{ marginTop: '1.5rem', width: '100%', padding: '0.8rem 1rem', fontSize: '0.9rem' }}
              onClick={() => navigate('/appointment')}
            >
              Book Appointment
            </button>
          </div>
        </div>

        {/* Bottom Legal */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} The Children's Clinic, Krishnagiri. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
