import { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Phone } from 'lucide-react';
import './NotFound.css';

const LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Gallery', to: '/our-space' },
  { label: 'Contact', to: '/contact' },
  { label: 'Book Appointment', to: '/appointment' },
];

const NotFound = () => {
  const navigate = useNavigate();
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = "404 — Page Not Found | The Children's Clinic";
    window.scrollTo(0, 0);

    // Stagger link items in
    const items = document.querySelectorAll<HTMLElement>('.nf-link-row');
    items.forEach((el, i) => {
      el.style.animationDelay = `${0.45 + i * 0.07}s`;
      el.classList.add('nf-animate-in');
    });
  }, []);

  return (
    <div className="nf-root">

      {/* Left panel — the typographic statement */}
      <aside className="nf-left">
        <div className="nf-left-inner">

          {/* Eyebrow */}
          <p className="nf-eyebrow">Error 404</p>

          {/* Giant number — editorial */}
          <div className="nf-four-wrapper" aria-hidden="true">
            <span className="nf-four">4</span>
            <span className="nf-zero">0</span>
            <span className="nf-four">4</span>
          </div>

          {/* Ruled line */}
          <div className="nf-rule" ref={lineRef} />

          {/* Copy */}
          <div className="nf-copy-block">
            <h1 className="nf-heading">This page<br />doesn't exist.</h1>
            <p className="nf-body">
              The link may have changed or the page was removed.
              Everything else at The Children's Clinic is exactly where you'd expect.
            </p>
          </div>

          {/* Primary actions */}
          <div className="nf-actions">
            <button className="nf-btn-primary" onClick={() => navigate(-1)}>
              <ArrowLeft size={16} strokeWidth={2.2} />
              Go back
            </button>
            <Link to="/" className="nf-btn-ghost">
              Return home
            </Link>
          </div>

          {/* Emergency line */}
          <a href="tel:+918056629061" className="nf-emergency">
            <Phone size={14} strokeWidth={2.5} />
            <span>24 / 7 — +91 80566 29061</span>
          </a>

        </div>
      </aside>

      {/* Right panel — site map / navigation */}
      <aside className="nf-right">
        <div className="nf-right-inner">

          <p className="nf-nav-label">Where to next?</p>

          <nav className="nf-link-list" aria-label="Site navigation shortcuts">
            {LINKS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="nf-link-row"
              >
                <span className="nf-link-text">{item.label}</span>
                <ArrowRight size={16} className="nf-link-arrow" strokeWidth={1.8} />
              </Link>
            ))}
          </nav>

          {/* Decorative — clinic name watermark */}
          <div className="nf-watermark" aria-hidden="true">
            The Children's<br />Clinic
          </div>

        </div>
      </aside>

    </div>
  );
};

export default NotFound;
