import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HOSPITAL_HERO_CSS = `
@import url("https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,340..600&family=Inter:wght@400;500;600&display=swap");

.hh-root {
  --hh-bg: #f9f8fe;
  --hh-surface: #ffffff;
  --hh-ink: #17121e;
  --hh-muted: #5c556a;
  --hh-line: rgba(226, 221, 240, 0.3);
  --hh-accent: #264653;
  --hh-accent-ink: #ffffff;

  --hh-h-active: 380px;
  --hh-h-collapsed: 90px;
  --hh-gap: 12px;

  position: relative;
  background: var(--hh-bg);
  color: var(--hh-ink);

  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  padding: 22px clamp(16px, 3.5vw, 48px) 48px;
  box-sizing: border-box;
}

.hh-root *,
.hh-root *::before,
.hh-root *::after {
  box-sizing: border-box;
}

/* ---------- Nav ---------- */

.hh-nav {
  display: flex;
  align-items: center;
  gap: clamp(16px, 3vw, 32px);
  padding: 18px 0;
  border-bottom: 1px solid rgba(226, 221, 240, 0.6);
}

.hh-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-right: auto;
  white-space: nowrap;
}

.hh-brand-mark {
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: var(--hh-accent);
  color: #fff;
  flex: none;
  box-shadow: 0 2px 8px rgba(38, 70, 83, 0.2);
}

.hh-brand-mark svg {
  width: 18px;
  height: 18px;
}

.hh-brand-name {
  font-weight: 700;
  font-size: 0.95rem;
  letter-spacing: 0.01em;
  color: var(--hh-accent);
}

.hh-links {
  display: flex;
  gap: 10px;
}

.hh-link {
  font: inherit;
  font-size: 0.84rem;
  font-weight: 600;
  color: #4a5568;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
  padding: 9px 20px;
  border-radius: 999px;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.hh-link:hover {
  border-color: var(--hh-accent);
  color: var(--hh-accent);
  background: rgba(38, 70, 83, 0.06);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.hh-link--active {
  background: var(--hh-accent);
  color: #ffffff;
  border-color: var(--hh-accent);
  box-shadow: 0 4px 14px rgba(38, 70, 83, 0.28);
}

.hh-link--active:hover {
  border-color: var(--hh-accent);
  color: #ffffff;
  background: #1e3742;
}

.hh-nav-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  line-height: 1.35;
  margin-left: auto;
  white-space: nowrap;
}

.hh-nav-meta-top {
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--hh-muted);
}

.hh-nav-meta-bottom {
  font-size: 0.86rem;
  font-weight: 500;
}

/* ---------- Layout grid ---------- */

.hh-grid {
  display: grid;
  grid-template-columns: minmax(260px, 360px) 1fr;
  gap: clamp(24px, 4vw, 56px);
  align-items: center;
  padding-top: clamp(24px, 4vh, 56px);
}

.hh-copy {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.hh-eyebrow {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--hh-accent);
}

.hh-eyebrow-index {
  font-size: 0.78rem;
  font-weight: 700;
}

.hh-eyebrow-rule {
  width: 28px;
  height: 2px;
  background: currentColor;
  opacity: 0.6;
  border-radius: 1px;
}

.hh-eyebrow-label {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.hh-headline {
  margin: 0;
  font-family: "Fraunces", Georgia, serif;
  font-weight: 500;
  font-size: clamp(2rem, 3.6vw, 3rem);
  line-height: 1.1;
  letter-spacing: -0.01em;
  color: var(--hh-ink);
}

.hh-body {
  margin: 0;
  max-width: 38ch;
  font-size: 0.95rem;
  line-height: 1.55;
  color: var(--hh-muted);
}

.hh-cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  align-self: flex-start;
  margin-top: 4px;
  font: inherit;
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--hh-accent);
  background: none;
  border: none;
  border-bottom: 2px solid var(--hh-accent);
  padding: 2px 0 4px;
  cursor: pointer;
}

.hh-cta svg {
  width: 16px;
  height: 16px;
  transition: transform 0.25s ease;
}

.hh-cta:hover svg {
  transform: translateX(5px);
}

/* ---------- Bullets ---------- */

.hh-bullets {
  list-style: none;
  padding: 0;
  margin: 0 0 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.hh-bullet-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.88rem;
  font-weight: 500;
  color: var(--hh-ink);
}

.hh-bullet-item svg {
  flex-shrink: 0;
  color: var(--hh-accent);
}

/* ---------- Stack ---------- */

.hh-stack {
  position: relative;
  height: calc(var(--hh-h-active) + (2 * var(--hh-h-collapsed)) + (2 * var(--hh-gap)));
  margin-bottom: 55px;
}

.hh-stack::before {
  content: "";
  position: absolute;
  inset: 14px -14px -14px 14px;
  border: 1px solid rgba(226, 221, 240, 0.7);
  border-radius: 14px;
  z-index: 0;
}

.hh-card {
  position: absolute;
  left: 0;
  width: 100%;
  border: none;
  border-radius: 14px;
  padding: 0;
  cursor: pointer;
  overflow: hidden;
  background-color: #cfc7de;
  background-image: var(--bg-img);
  background-size: cover;
  background-position: center;
  box-shadow: 0 12px 28px -14px rgba(26, 12, 46, 0.3);
  transition:
    top 0.5s cubic-bezier(0.65, 0, 0.35, 1),
    height 0.5s cubic-bezier(0.65, 0, 0.35, 1),
    width 0.4s ease,
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.hh-card-scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(10, 4, 20, 0.85) 0%,
    rgba(10, 4, 20, 0.35) 46%,
    rgba(10, 4, 20, 0) 68%
  );
  transition: opacity 0.3s ease;
}

.hh-card-copy {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 18px 20px;
  color: #fff;
  text-align: left;
}

.hh-card-eyebrow {
  font-size: 0.66rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  opacity: 0.85;
}

.hh-card-title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.hh-card-title {
  font-family: "Fraunces", Georgia, serif;
  font-weight: 500;
  font-size: 1.25rem;
}

.hh-card-icon {
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.5);
  flex: none;
  transition: background 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
}

.hh-card-icon svg {
  width: 13px;
  height: 13px;
}

/* Position 0: active / hero card */
.hh-card--pos-0 {
  top: 0;
  height: var(--hh-h-active);
  z-index: 3;
  cursor: default;
}

.hh-card--pos-0:hover .hh-card-scrim {
  opacity: 0.9;
}

/* Positions 1 & 2: collapsed strips underneath */
.hh-card--pos-1,
.hh-card--pos-2 {
  height: var(--hh-h-collapsed);
}

.hh-card--pos-1 {
  top: calc(var(--hh-h-active) + var(--hh-gap));
  z-index: 2;
}

.hh-card--pos-2 {
  top: calc(var(--hh-h-active) + var(--hh-h-collapsed) + (2 * var(--hh-gap)));
  z-index: 1;
}

.hh-card--pos-1 .hh-card-title,
.hh-card--pos-2 .hh-card-title {
  font-size: 1rem;
}

.hh-card--pos-1 .hh-card-copy,
.hh-card--pos-2 .hh-card-copy {
  padding: 14px 18px;
}

/* Hover animation on the collapsed preview cards */
.hh-card--pos-1:hover,
.hh-card--pos-2:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 30px -14px rgba(26, 12, 46, 0.4);
}

.hh-card--pos-1:hover .hh-card-scrim,
.hh-card--pos-2:hover .hh-card-scrim {
  opacity: 0.65;
}

.hh-card--pos-1:hover .hh-card-icon,
.hh-card--pos-2:hover .hh-card-icon {
  background: #fff;
  border-color: #fff;
  color: var(--hh-accent);
  transform: rotate(45deg);
}

.hh-card:focus-visible {
  outline: 2px solid var(--hh-accent);
  outline-offset: 3px;
}

/* ---------- Stack controls ---------- */

.hh-stack-controls {
  position: absolute;
  right: 14px;
  bottom: -40px;
  display: flex;
  align-items: center;
  gap: 8px;
  z-index: 4;
}

.hh-stack-count {
  font-size: 0.78rem;
  color: var(--hh-muted);
  margin-right: 4px;
  font-variant-numeric: tabular-nums;
  font-weight: 500;
}

.hh-arrow {
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid rgba(226, 221, 240, 0.8);
  background: var(--hh-surface);
  color: var(--hh-ink);
  cursor: pointer;
  transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
}

.hh-arrow svg {
  width: 15px;
  height: 15px;
}

.hh-arrow:hover {
  transform: translateY(-2px);
  border-color: var(--hh-accent);
}

.hh-arrow--solid {
  background: var(--hh-accent);
  color: #fff;
  border-color: var(--hh-accent);
}

.hh-arrow--solid:hover {
  background: #1e3742;
  border-color: #1e3742;
}

/* ---------- Responsive ---------- */

@media (max-width: 1100px) {
  .hh-nav-meta {
    display: none;
  }

  .hh-grid {
    grid-template-columns: 1fr;
    padding-top: 32px;
  }

  .hh-root {
    --hh-h-active: 340px;
    --hh-h-collapsed: 84px;
  }
}

@media (max-width: 720px) {
  .hh-nav {
    flex-direction: column;
    align-items: flex-start;
    gap: 14px;
  }

  .hh-links {
    overflow-x: auto;
    scrollbar-width: none;
    width: 100%;
    padding-bottom: 4px;
  }

  .hh-links::-webkit-scrollbar {
    display: none;
  }

  .hh-brand-name {
    font-size: 0.88rem;
  }

  .hh-headline {
    font-size: clamp(1.75rem, 6vw, 2.4rem);
  }

  .hh-body {
    max-width: 100%;
  }

  .hh-root {
    --hh-h-active: 280px;
    --hh-h-collapsed: 76px;
    --hh-gap: 10px;
  }

  .hh-stack::before {
    inset: 10px -10px -10px 10px;
  }

  .hh-stack-controls {
    bottom: -36px;
  }
}

@media (max-width: 460px) {
  .hh-card-title {
    font-size: 1.05rem;
  }

  .hh-card--pos-1 .hh-card-title,
  .hh-card--pos-2 .hh-card-title {
    font-size: 0.88rem;
  }

  .hh-root {
    --hh-h-active: 230px;
    --hh-h-collapsed: 66px;
  }

  .hh-arrow {
    width: 32px;
    height: 32px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hh-card,
  .hh-cta svg,
  .hh-arrow,
  .hh-card-icon {
    transition: none !important;
  }
}
`;

export interface HeroCard {
  id: string;
  index: string;
  label: string;
  image: string;
  alt: string;
  // per-card copy
  headline: string;
  body: string;
  bullets: string[];
  ctaLabel: string;
  ctaRoute: string;
}

export interface HospitalHeroProps {
  navLinks?: { label: string; active?: boolean }[];
  cards?: HeroCard[];
  onCtaClick?: () => void;
}

const DEFAULT_NAV = [
  { label: "Newborn & Neonatal Care" },
  { label: "Pediatric Care" },
  { label: "Lactation & Infant Care" },
];

const DEFAULT_CARDS: HeroCard[] = [
  {
    id: "nicu",
    index: "01",
    label: "Specialised Care for Newborns From the Very Beginning",
    image: "./src/assets/home/infra1.jpeg",
    alt: "Specialised Care for Newborns From the Very Beginning",
    headline: "Specialised Care for Newborns From the Very Beginning",
    body: "Comprehensive newborn and neonatal support, including premature baby care, newborn jaundice, phototherapy and intensive care needs when medically required.",
    bullets: [
      "Newborn & Premature Baby Care",
      "Newborn Jaundice & Phototherapy",
      "Neonatal Intensive & Ventilator Support",
    ],
    ctaLabel: "Explore Newborn Care Services",
    ctaRoute: "/services/neonatal-care-in-krishnagiri",
  },
  {
    id: "emergency",
    index: "02",
    label: "Complete Healthcare for Growing Children",
    image: "./src/assets/home/infra2.jpeg",
    alt: "Complete Healthcare for Growing Children",
    headline: "Complete Healthcare for Growing Children",
    body: "Child-focused care covering vaccinations, growth and development monitoring, fever, cold, cough, seizures and other common pediatric concerns.",
    bullets: [
      "Childhood Vaccination",
      "Growth & Development Monitoring",
      "Fever, Cold & Cough Care",
    ],
    ctaLabel: "Explore Pediatric Care",
    ctaRoute: "/services/child-growth-and-development-in-krishnagiri",
  },  
  {
    id: "lactation",
    index: "03",
    label: "Support for Healthy Feeding & Early Development",
    image: "./src/assets/home/infra3.jpeg",
    alt: "Support for Healthy Feeding & Early Development",
    headline: "Support for Healthy Feeding & Early Development",
    body: "Personalized lactation and breastfeeding support alongside guidance for infant feeding, growth and the early stages of your child's development.",
    bullets: [
      "Lactation Support",
      "Breastfeeding Guidance",
      "Infant Feeding & Early Development",
    ],
    ctaLabel: "Explore Infant Care",
    ctaRoute: "/services/lactation-support-in-krishnagiri",
  },
];

export default function HospitalInfrastructure({
  navLinks = DEFAULT_NAV,
  cards = DEFAULT_CARDS,
  onCtaClick,
}: HospitalHeroProps) {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  const go = (dir: 1 | -1) => {
    setActive((prev) => (prev + dir + cards.length) % cards.length);
  };

  return (
    <section className="hh-root">
      <style>{HOSPITAL_HERO_CSS}</style>
      <header className="hh-nav">
        <div className="hh-brand">
          <span className="hh-brand-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 21s-7.5-4.6-10-9.3C.4 8.1 2 4.5 5.6 4c2.1-.3 4 .8 5 2.4C11.6 4.8 13.5 3.7 15.6 4c3.6.5 5.2 4.1 3.6 7.7C16.7 16.4 12 21 12 21z"
                stroke="currentColor"
                strokeWidth="1.6"
              />
            </svg>
          </span>
          <span className="hh-brand-name">Hospital Infrastructure</span>
        </div>

        <nav className="hh-links" aria-label="Section navigation">
          {navLinks.map((link, idx) => (
            <button
              key={link.label}
              type="button"
              className={`hh-link${idx === active ? " hh-link--active" : ""}`}
              onClick={() => setActive(idx)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hh-nav-meta">
          <span className="hh-nav-meta-top">Explore our environment</span>
          <span className="hh-nav-meta-bottom">Built for better outcomes</span>
        </div>
      </header>

      <div className="hh-grid">
        <div className="hh-copy">
          <div className="hh-eyebrow">
            <span className="hh-eyebrow-index">{cards[active].index}</span>
            <span className="hh-eyebrow-rule" aria-hidden="true" />
            <span className="hh-eyebrow-label">{navLinks[active]?.label}</span>
          </div>

          <h2 className="hh-headline">{cards[active].headline}</h2>
          <p className="hh-body">{cards[active].body}</p>

          <ul className="hh-bullets">
            {cards[active].bullets.map(b => (
              <li key={b} className="hh-bullet-item">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="16" height="16">
                  <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {b}
              </li>
            ))}
          </ul>

          <button type="button" className="hh-cta" onClick={() => onCtaClick ? onCtaClick() : navigate(cards[active].ctaRoute)}>
            <span>{cards[active].ctaLabel}</span>
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M4 12h15M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="hh-stack">
          {cards.map((card, i) => {
            const offset = (i - active + cards.length) % cards.length;
            return (
              <button
                type="button"
                key={card.id}
                className={`hh-card hh-card--pos-${offset}`}
                style={{ '--bg-img': `url(${card.image})` } as React.CSSProperties}
                onClick={() => setActive(i)}
                aria-label={`Show ${card.label}`}
                aria-current={offset === 0}
              >
                <span className="hh-card-scrim" aria-hidden="true" />
                <span className="hh-card-copy">
                  <span className="hh-card-eyebrow">
                    Infrastructure / {card.index}
                  </span>
                  <span className="hh-card-title-row">
                    <span className="hh-card-title">{card.label}</span>
                    <span className="hh-card-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none">
                        <path
                          d="M4 21V9l8-5 8 5v12M9 21v-6h6v6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </span>
                  </span>
                </span>
              </button>
            );
          })}

          <div className="hh-stack-controls">
            <span className="hh-stack-count">
              {String(active + 1).padStart(2, "0")} / {String(cards.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              className="hh-arrow"
              onClick={() => go(-1)}
              aria-label="Previous space"
            >
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              className="hh-arrow hh-arrow--solid"
              onClick={() => go(1)}
              aria-label="Next space"
            >
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
