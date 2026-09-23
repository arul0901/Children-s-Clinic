import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Header.css';

const NAV = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Vision', to: '/#vision-mission' },
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

  // Is the current route the home page? 
  // If we are at the top of the home page, the header should be transparent.
  // Other pages might need a solid header by default depending on their hero section, 
  // but we'll assume transparent is fine for all if they have a dark hero, or just rely on scroll.
  const isTransparent = !isScrolled && location.pathname === '/';

  return (
    <>
      <header ref={headerRef} className={`header ${!isTransparent ? 'scrolled' : 'transparent'}`}>
        <div className="container header-container">

          {/* ── Logo ── */}
          <Link to="/" className="logo-mark" onClick={() => setMenuOpen(false)}>
            <img src="/logo.png" alt="The Children's Clinic" className="logo-image" />
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="nav-links" aria-label="Primary navigation">
            {NAV.map(n => (
              <Link
                key={n.to}
                to={n.to}
                className={`nav-link ${location.pathname === n.to ? 'active' : ''}`}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          {/* ── Desktop CTA ── */}
          <button
            className={`btn-primary header-cta`}
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
            <Link key={n.to} to={n.to} className="mobile-nav-link" onClick={() => setMenuOpen(false)}>
              {n.label}
            </Link>
          ))}
          <button className="btn-primary" style={{ marginTop: '2rem', width: '80%', backgroundColor: 'var(--color-gold)', borderColor: 'var(--color-gold)' }}
            onClick={() => { navigate('/appointment'); setMenuOpen(false); }}>
            Book Appointment
          </button>

          <div style={{ marginTop: 'auto', paddingBottom: '3rem', textAlign: 'center' }}>
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
