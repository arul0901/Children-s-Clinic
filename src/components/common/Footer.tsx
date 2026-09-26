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
              <a href="#" className="social-circle" aria-label="Facebook">
                {/* Facebook */}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="#" className="social-circle" aria-label="Instagram">
                {/* Instagram */}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a href="#" className="social-circle" aria-label="YouTube">
                {/* YouTube – official logo path */}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <Link to="/" onClick={() => window.scrollTo(0,0)}>Home</Link>
            <Link to="/about" onClick={() => window.scrollTo(0,0)}>About Us</Link>
            <Link to="/our-space" onClick={() => window.scrollTo(0,0)}>Gallery</Link>
            <Link to="/contact" onClick={() => window.scrollTo(0,0)}>Contact Us</Link>
          </div>

          {/* Our Services */}
          <div className="footer-col">
            <h4>Services</h4>
            <Link to="/services/lactation-support-in-krishnagiri" onClick={() => window.scrollTo(0,0)}>Lactation Support</Link>
            <Link to="/services/neonatal-care-in-krishnagiri" onClick={() => window.scrollTo(0,0)}>Neonatal Care</Link>
            <Link to="/services/newborn-care-jaundice-krishnagiri" onClick={() => window.scrollTo(0,0)}>Newborn Care</Link>
            <Link to="/services/child-growth-development-krishnagiri" onClick={() => window.scrollTo(0,0)}>Growth & Development</Link>
            <Link to="/services/pediatric-fever-cold-cough-krishnagiri" onClick={() => window.scrollTo(0,0)}>Pediatric Care</Link>
            <Link to="/services/child-vaccination-krishnagiri" onClick={() => window.scrollTo(0,0)}>Vaccination</Link>
            <Link to="/services/seizures-fits-babies-children-krishnagiri" onClick={() => window.scrollTo(0,0)}>Seizures & Fits Care</Link>
          </div>

          {/* Contact & CTA */}
          <div className="footer-col">
            <h4>Get in Touch</h4>
            
            <div className="footer-contact-item">
              <MapPin size={18} />
              <span> 35/13, 2nd Cross Rd, Co-operative Colony, Thiruvalluvar Nagar, Krishnagiri, Tamil Nadu 635002.</span>
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
              className="btn-primary footer-btn-full" 
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
