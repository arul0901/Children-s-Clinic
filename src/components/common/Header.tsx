import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import './Header.css';

const NAV = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { 
    label: 'Services', 
    to: '/services',
    subItems: [
      { label: 'Lactation Support', to: '/services/lactation-support-in-krishnagiri' },
      { label: 'Neonatal Care', to: '/services/neonatal-care-in-krishnagiri' },
      { label: 'Newborn Care', to: '/services/newborn-care-jaundice-krishnagiri' },
      { label: 'Growth & Development', to: '/services/child-growth-development-krishnagiri' },
      { label: 'Pediatric Care', to: '/services/pediatric-fever-cold-cough-krishnagiri' },
      { label: 'Vaccination', to: '/services/child-vaccination-krishnagiri' },
      { label: 'Seizures & Fits Care', to: '/services/seizures-fits-babies-children-krishnagiri' },
    ]
  },
  { label: 'Gallery', to: '/our-space' },
  { label: 'Contact', to: '/contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header ref={headerRef} className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">

          {/* ── Logo ── */}
          <Link to="/" className="logo-mark" onClick={() => setMenuOpen(false)}>
            <img src="/logo.png" alt="The Children's Clinic" className="logo-image" />
          </Link>

          {/* ── Desktop Nav (Home, Services, About, Gallery, Contact) ── */}
          <nav className="nav-links" aria-label="Primary navigation">
            {NAV.map(n => (
              <div key={n.to} className="nav-item-wrapper">
                <Link
                  to={n.to}
                  className={`nav-link ${location.pathname.startsWith(n.to) && (n.to !== '/' || location.pathname === '/') ? 'active' : ''}`}
                >
                  {n.label}
                  {n.subItems && <ChevronDown size={14} />}
                </Link>

                {n.subItems && (
                  <div className="nav-dropdown">
                    {n.subItems.map(sub => (
                      <Link
                        key={sub.to}
                        to={sub.to}
                        className="nav-dropdown-item"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* ── Desktop CTA ── */}
          <button
            className="btn-primary header-cta"
            onClick={() => navigate('/appointment')}
          >
            Book Appointment
          </button>

          {/* ── Hamburger ── */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} color="var(--color-primary)" /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* ── Mobile Overlay ── */}
      <div className={`mobile-nav-overlay ${menuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav-links">
          {NAV.map(n => (
            <div key={n.to} className="mobile-nav-item">
              {n.subItems ? (
                <>
                  <button
                    className={`mobile-nav-link mobile-nav-link--accordion ${mobileServicesOpen ? 'expanded' : ''}`}
                    onClick={() => setMobileServicesOpen(v => !v)}
                  >
                    <span>{n.label}</span>
                    <ChevronDown size={20} className={`mobile-chevron ${mobileServicesOpen ? 'rotated' : ''}`} />
                  </button>
                  <div className={`mobile-services-sub ${mobileServicesOpen ? 'open' : ''}`}>
                    {n.subItems.map(sub => (
                      <Link
                        key={sub.to}
                        to={sub.to}
                        className="mobile-service-sublink"
                        onClick={() => setMenuOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  to={n.to}
                  className={`mobile-nav-link ${location.pathname === n.to ? 'active' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {n.label}
                </Link>
              )}
            </div>
          ))}

          <div className="mobile-nav-footer">
            <button
              className="mobile-book-btn"
              onClick={() => { navigate('/appointment'); setMenuOpen(false); }}
            >
              Book Appointment
            </button>
            <p className="mobile-doctor-info">
              Dr. Haseen Fathima<br />
              <span>MBBS · M.D. · DNB (Pediatrics)</span>
            </p>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
