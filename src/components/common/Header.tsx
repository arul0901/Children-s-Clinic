import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import './Header.css';

const NAV = [
  { label: 'Home', to: '/' },
  { 
    label: 'Services', 
    to: '/services',
    subItems: [
      { label: 'Pediatric Care', to: '/services/pediatric-care' },
      { label: 'Neonatal Care', to: '/services/neonatal-care' },
      { label: 'Vaccination', to: '/services/vaccination' },
      { label: 'Newborn Care', to: '/services/newborn-care' },
      { label: 'Lactation Support', to: '/services/lactation-support' },
    ]
  },
  { label: 'About', to: '/about' },
  { label: 'Gallery', to: '/our-space' },
  { label: 'Contact', to: '/contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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
                  {n.subItems && <ChevronDown size={14} style={{ opacity: 0.8 }} />}
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
            {menuOpen ? <X size={28} color="#fff" /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* ── Mobile Overlay ── */}
      <div className={`mobile-nav-overlay ${menuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav-links">
          {NAV.map(n => (
            <div key={n.to} style={{ textAlign: 'center', width: '100%' }}>
              <Link
                to={n.to}
                className="mobile-nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {n.label}
              </Link>
              {n.subItems && (
                <div className="mobile-services-sub">
                  {n.subItems.map(sub => (
                    <Link
                      key={sub.to}
                      to={sub.to}
                      className="mobile-service-sublink"
                      onClick={() => setMenuOpen(false)}
                    >
                      • {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button
            className="btn-primary"
            style={{ marginTop: '1.5rem', width: '80%', backgroundColor: 'var(--color-gold)', borderColor: 'var(--color-gold)' }}
            onClick={() => { navigate('/appointment'); setMenuOpen(false); }}
          >
            Book Appointment
          </button>

          <div style={{ marginTop: '2rem', paddingBottom: '2rem', textAlign: 'center' }}>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', lineHeight: 1.8 }}>
              Dr. Haseen Fathima<br />
              <span style={{ color: 'var(--color-gold)' }}>MBBS · M.D. · DNB (Pediatrics)</span>
            </p>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
