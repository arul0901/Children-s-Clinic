import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import './OurSpace.css';

interface SpaceItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  gridArea: 'top-left' | 'top-right' | 'left-tall' | 'mid-top' | 'split-left' | 'split-right' | 'right-tall';
}

const SPACE_ITEMS: SpaceItem[] = [
  {
    id: 'reception',
    src: '/reception.jpeg',
    alt: 'Clinic Reception Desk',
    title: 'Reception & Welcoming Area',
    subtitle: 'Warm & Reassuring Entrance',
    description: 'A welcoming reception designed to make children and parents feel comfortable from the moment they arrive.',
    badge: 'Reception Desk',
    gridArea: 'top-left',
  },
  {
    id: 'waiting',
    src: '/waiting-area.jpeg',
    alt: 'Family Waiting Lounge',
    title: 'Family Waiting Lounge',
    subtitle: 'Relaxed & Calm Environment',
    description: 'A bright and child-friendly waiting space created for a calm and relaxed environment before consultations.',
    badge: 'Waiting Lounge',
    gridArea: 'top-right',
  },
  {
    id: 'consultation',
    src: '/consultation.jpeg',
    alt: 'Pediatric Consultation Suite',
    title: 'Consultation Suite',
    subtitle: 'Private & Attentive Care',
    description: 'Comfortable consultation rooms designed for private and reassuring interactions between children, parents, and doctors.',
    badge: 'Consultation Room',
    gridArea: 'left-tall',
  },
  {
    id: 'observation',
    src: '/infra1.jpeg',
    alt: 'Observation & Care Bay',
    title: 'Observation & Care Bay',
    subtitle: 'Infant Monitoring & Recovery',
    description: 'Specialized pediatric care ward equipped with continuous monitoring and soothing lighting.',
    badge: 'Observation Bay',
    gridArea: 'mid-top',
  },
  {
    id: 'vaccination',
    src: '/infra2.jpeg',
    alt: 'Vaccination Unit',
    title: 'Vaccination Unit',
    subtitle: 'Gentle Immunization Station',
    description: 'Gentle, child-focused immunization station designed for a reassuring and stress-free vaccination experience.',
    badge: 'Vaccination Unit',
    gridArea: 'split-left',
  },
  {
    id: 'play',
    src: '/infra3.jpeg',
    alt: 'Child Play Corner',
    title: 'Child Play Corner',
    subtitle: 'Safe & Interactive Play Zone',
    description: 'A safe and engaging space filled with toys and interactive activities to keep children happy and entertained.',
    badge: 'Play Corner',
    gridArea: 'split-right',
  },
  {
    id: 'growth',
    src: '/grow1.jpg',
    alt: 'Growth & Wellness Bay',
    title: 'Growth & Wellness Bay',
    subtitle: 'Physical Development Monitoring',
    description: 'Comprehensive pediatric assessment hub for regularly monitoring child growth, height, weight, and health.',
    badge: 'Growth Bay',
    gridArea: 'right-tall',
  },
];

const OurSpace = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Active focused card is either hovered on desktop/tablet or tapped on mobile
  const focusedId = hoveredId || activeId;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle tap/click outside gallery to reset focus on touch devices
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setActiveId(null);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, []);

  const handleCardClick = (id: string) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCardClick(id);
    }
  };

  return (
    <div className="our-space-page">
      <div className="our-space-container" ref={containerRef}>
        {/* ──────────────── 1. OUR HOSPITALITIES ──────────────── */}
        <section className="hosp-section">
          <motion.div
            className="hosp-header"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="hosp-main-title">Our Hospitalities</h1>
            <p className="hosp-subtitle">
              Welcome to our pediatric space, designed with care to provide a serene, hygienic, and welcoming environment for children and families. Explore our dedicated facilities crafted for comfort, safety, and comprehensive care.
            </p>

            {/* Mobile Touch Hint Pill (Visible under 768px) */}
            <div className="mobile-touch-hint font-plus-jakarta">
              <span className="hint-pulse" /> Tap any image to explore space details
            </div>
          </motion.div>

          {/* Bento Grid Layout matching Reference Image */}
          <motion.div
            className={`hosp-bento-container ${focusedId ? 'has-focus' : ''}`}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Top Row: 2 Items */}
            <div className="hosp-grid-top-row">
              {SPACE_ITEMS.slice(0, 2).map((item) => {
                const isFocused = focusedId === item.id;
                const isDimmed = focusedId !== null && !isFocused;

                return (
                  <div
                    key={item.id}
                    role="button"
                    tabIndex={0}
                    aria-label={`${item.title}: ${item.subtitle}`}
                    aria-expanded={isFocused}
                    className={`hosp-card card-${item.gridArea} ${isFocused ? 'is-focused' : ''} ${isDimmed ? 'is-dimmed' : ''}`}
                    onMouseEnter={() => setHoveredId(item.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    onClick={() => handleCardClick(item.id)}
                    onKeyDown={(e) => handleKeyDown(e, item.id)}
                  >
                    <div className="hosp-card-img-wrapper">
                      <img
                        src={item.src}
                        alt={item.alt}
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                      <div className="hosp-card-placeholder-bg" />
                    </div>

                    {/* Corner Tag */}
                    <div className="hosp-card-badge font-plus-jakarta">
                      {item.badge}
                    </div>

                    {/* Content Overlay Revealed on Focus / Tap */}
                    <div className="hosp-card-overlay">
                      <span className="hosp-overlay-badge">{item.badge}</span>
                      <h3 className="hosp-card-title">{item.title}</h3>
                      <p className="hosp-card-desc">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Main Grid: 3 Columns */}
            <div className="hosp-grid-main">
              {/* Left Tall Column */}
              <div className="hosp-col-left">
                {(() => {
                  const item = SPACE_ITEMS[2]; // consultation
                  const isFocused = focusedId === item.id;
                  const isDimmed = focusedId !== null && !isFocused;
                  return (
                    <div
                      key={item.id}
                      role="button"
                      tabIndex={0}
                      aria-label={`${item.title}: ${item.subtitle}`}
                      aria-expanded={isFocused}
                      className={`hosp-card card-tall ${isFocused ? 'is-focused' : ''} ${isDimmed ? 'is-dimmed' : ''}`}
                      onMouseEnter={() => setHoveredId(item.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      onClick={() => handleCardClick(item.id)}
                      onKeyDown={(e) => handleKeyDown(e, item.id)}
                    >
                      <div className="hosp-card-img-wrapper">
                        <img
                          src={item.src}
                          alt={item.alt}
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                        <div className="hosp-card-placeholder-bg" />
                      </div>
                      <div className="hosp-card-badge font-plus-jakarta">{item.badge}</div>
                      <div className="hosp-card-overlay">
                        <span className="hosp-overlay-badge">{item.badge}</span>
                        <h3 className="hosp-card-title">{item.title}</h3>
                        <p className="hosp-card-desc">{item.description}</p>
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* Middle Column (1 Top Card + 2 Split Bottom Cards) */}
              <div className="hosp-col-mid">
                {(() => {
                  const item = SPACE_ITEMS[3]; // observation
                  const isFocused = focusedId === item.id;
                  const isDimmed = focusedId !== null && !isFocused;
                  return (
                    <div
                      key={item.id}
                      role="button"
                      tabIndex={0}
                      aria-label={`${item.title}: ${item.subtitle}`}
                      aria-expanded={isFocused}
                      className={`hosp-card card-mid-top ${isFocused ? 'is-focused' : ''} ${isDimmed ? 'is-dimmed' : ''}`}
                      onMouseEnter={() => setHoveredId(item.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      onClick={() => handleCardClick(item.id)}
                      onKeyDown={(e) => handleKeyDown(e, item.id)}
                    >
                      <div className="hosp-card-img-wrapper">
                        <img
                          src={item.src}
                          alt={item.alt}
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                        <div className="hosp-card-placeholder-bg" />
                      </div>
                      <div className="hosp-card-badge font-plus-jakarta">{item.badge}</div>
                      <div className="hosp-card-overlay">
                        <span className="hosp-overlay-badge">{item.badge}</span>
                        <h3 className="hosp-card-title">{item.title}</h3>
                        <p className="hosp-card-desc">{item.description}</p>
                      </div>
                    </div>
                  );
                })()}

                <div className="hosp-mid-split">
                  {SPACE_ITEMS.slice(4, 6).map((item) => {
                    const isFocused = focusedId === item.id;
                    const isDimmed = focusedId !== null && !isFocused;
                    return (
                      <div
                        key={item.id}
                        role="button"
                        tabIndex={0}
                        aria-label={`${item.title}: ${item.subtitle}`}
                        aria-expanded={isFocused}
                        className={`hosp-card card-${item.gridArea} ${isFocused ? 'is-focused' : ''} ${isDimmed ? 'is-dimmed' : ''}`}
                        onMouseEnter={() => setHoveredId(item.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        onClick={() => handleCardClick(item.id)}
                        onKeyDown={(e) => handleKeyDown(e, item.id)}
                      >
                        <div className="hosp-card-img-wrapper">
                          <img
                            src={item.src}
                            alt={item.alt}
                            onError={(e) => {
                              (e.target as HTMLElement).style.display = 'none';
                            }}
                          />
                          <div className="hosp-card-placeholder-bg" />
                        </div>
                        <div className="hosp-card-badge font-plus-jakarta">{item.badge}</div>
                        <div className="hosp-card-overlay">
                          <span className="hosp-overlay-badge">{item.badge}</span>
                          <h3 className="hosp-card-title">{item.title}</h3>
                          <p className="hosp-card-desc">{item.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Tall Column */}
              <div className="hosp-col-right">
                {(() => {
                  const item = SPACE_ITEMS[6]; // growth
                  const isFocused = focusedId === item.id;
                  const isDimmed = focusedId !== null && !isFocused;
                  return (
                    <div
                      key={item.id}
                      role="button"
                      tabIndex={0}
                      aria-label={`${item.title}: ${item.subtitle}`}
                      aria-expanded={isFocused}
                      className={`hosp-card card-tall ${isFocused ? 'is-focused' : ''} ${isDimmed ? 'is-dimmed' : ''}`}
                      onMouseEnter={() => setHoveredId(item.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      onClick={() => handleCardClick(item.id)}
                      onKeyDown={(e) => handleKeyDown(e, item.id)}
                    >
                      <div className="hosp-card-img-wrapper">
                        <img
                          src={item.src}
                          alt={item.alt}
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                        <div className="hosp-card-placeholder-bg" />
                      </div>
                      <div className="hosp-card-badge font-plus-jakarta">{item.badge}</div>
                      <div className="hosp-card-overlay">
                        <span className="hosp-overlay-badge">{item.badge}</span>
                        <h3 className="hosp-card-title">{item.title}</h3>
                        <p className="hosp-card-desc">{item.description}</p>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>
          </motion.div>
        </section>

        {/* ──────────────── 2. VIEW OUR AMBIENCE ──────────────── */}
        <section className="ambience-section">
          <motion.h2
            className="ambience-main-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            View Our Ambience
          </motion.h2>

          <div className="ambience-list">
            {/* Feature 1: Image Left | Text Right */}
            <motion.div
              className="ambience-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="ambience-image-box">
                <img src="/reception.jpeg" alt="Welcoming Reception Desk" />
                <div className="ambience-img-placeholder" />
              </div>
              <div className="ambience-content-box">
                <h3 className="ambience-heading">1. Welcoming Reception & Lounge</h3>
                <p className="ambience-text">
                  Our entrance lobby and reception area are crafted to create a gentle, reassuring atmosphere. Soothing pastel tones, comfortable seating, and helpful staff ensure children feel relaxed and welcomed right from the start.
                </p>
              </div>
            </motion.div>

            {/* Feature 2: Text Left | Image Right */}
            <motion.div
              className="ambience-item reverse"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="ambience-content-box">
                <h3 className="ambience-heading">2. Child-Friendly Consultation Suite</h3>
                <p className="ambience-text">
                  Designed specifically for young patients, our consultation rooms combine modern clinical standards with a calm, friendly design. Bright spaces and gentle care encourage open communication and comfortable check-ups.
                </p>
              </div>
              <div className="ambience-image-box">
                <img src="/consultation.jpeg" alt="Pediatric Consultation Room" />
                <div className="ambience-img-placeholder" />
              </div>
            </motion.div>

            {/* Feature 3: Image Left | Text Right */}
            <motion.div
              className="ambience-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="ambience-image-box">
                <img src="/waiting-area.jpeg" alt="Safe & Playful Waiting Area" />
                <div className="ambience-img-placeholder" />
              </div>
              <div className="ambience-content-box">
                <h3 className="ambience-heading">3. Safe & Playful Waiting Environment</h3>
                <p className="ambience-text">
                  A cheerful waiting space equipped with engaging activities and cozy seating. We aim to keep children happily occupied and stress-free while waiting for their appointments.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OurSpace;
