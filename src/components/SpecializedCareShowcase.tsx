import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './SpecializedCareShowcase.css';

gsap.registerPlugin(ScrollTrigger);

export interface SpecializedService {
  number: string;
  category: string;
  title: string;
  description: string;
  image: string;
  slug: string;
  href: string;
}

const SERVICES_SHOWCASE_DATA: SpecializedService[] = [
  {
    number: '01',
    category: 'NEWBORN CARE',
    title: 'Gentle Support From Their Very First Days',
    description: "Specialised monitoring, weight checks, jaundice screening, and empathetic guidance for your baby's critical first weeks.",
    image: '/doctor_portrait_1789986143658.jpg',
    slug: 'newborn-care',
    href: '/services/newborn-care'
  },
  {
    number: '02',
    category: 'LACTATION SUPPORT',
    title: 'Expert Guidance For a Stress-Free Journey',
    description: 'Certified lactation assistance to overcome nursing challenges, manage supply, and establish a comforting feeding routine.',
    image: '/phototherapy_treatment_1789989308209.jpg',
    slug: 'lactation-support',
    href: '/services/lactation-support'
  },
  {
    number: '03',
    category: 'VACCINATION',
    title: 'Protecting Your Child Through Every Phase',
    description: 'Comprehensive WHO-aligned immunisation schedules protecting children safely from birth through adolescence.',
    image: '/service_preventative_care_1789988969044.jpg',
    slug: 'vaccination',
    href: '/services/vaccination'
  },
  {
    number: '04',
    category: 'NEONATAL CARE',
    title: 'Advanced NICU Support For Delicate Beginnings',
    description: 'Round-the-clock Level III NICU observation, respiratory assistance, and compassionate family-centered care.',
    image: '/service_neonatal_care_1789988898999.jpg',
    slug: 'neonatal-care',
    href: '/services/neonatal-care'
  }
];

const SpecializedCareShowcase = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card, i) => {
        if (!card) return;

        ScrollTrigger.create({
          trigger: card,
          start: 'top 55%',
          end: 'bottom 55%',
          onEnter: () => setActiveIndex(i),
          onEnterBack: () => setActiveIndex(i)
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleNextCard = () => {
    const nextIdx = (activeIndex + 1) % SERVICES_SHOWCASE_DATA.length;
    const targetCard = cardRefs.current[nextIdx];
    if (targetCard) {
      targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className="specialized-showcase-section" ref={containerRef} id="specialized-care">
      <div className="container">
        {/* 1. Compact Section Header */}
        <div className="specialized-showcase-header fade-up">
          <span className="specialized-eyebrow">// OUR SPECIALIZED CARE</span>
          <h2 className="serif-heading specialized-title">
            Care Designed Around Every Stage of Childhood
          </h2>
          <p className="specialized-subtitle">
            Explore our pediatric and neonatal specialties delivered with clinical excellence and gentle compassion.
          </p>
        </div>

        {/* Stacked Cards Sequence Container */}
        <div className="specialized-stacked-container">
          {SERVICES_SHOWCASE_DATA.map((service, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={service.slug + index}
                ref={(el) => { cardRefs.current[index] = el; }}
                className={`specialized-panel-wrapper ${isActive ? 'is-active' : ''}`}
                style={{
                  top: `calc(clamp(75px, 11vh, 120px) + ${index * 12}px)`,
                  zIndex: index + 1
                }}
              >
                <div className="specialized-panel">
                  {/* Panel Image */}
                  <div className="specialized-image-wrapper">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="specialized-panel-img"
                      loading={index === 0 ? 'eager' : 'lazy'}
                    />
                    <div className="specialized-image-overlay" />
                  </div>

                  {/* Translucent Floating Information Card */}
                  <div className="specialized-info-card">
                    <div className="specialized-card-pill">
                      // {service.category}
                    </div>

                    <h3 className="specialized-card-title">
                      {service.title}
                    </h3>

                    <p className="specialized-card-desc">
                      {service.description}
                    </p>

                    <button
                      className="specialized-view-btn"
                      onClick={() => navigate(service.href)}
                      aria-label={`View details for ${service.title}`}
                    >
                      <span>View Details</span>
                      <ArrowUpRight size={18} className="btn-arrow" />
                    </button>
                  </div>

                  {/* Panel Number Badge */}
                  <div className="specialized-panel-number">
                    {service.number}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Floating Controls Bar: Arrow & Progress */}
        <div className="specialized-floating-controls">
          <div className="specialized-progress">
            <span className="progress-current">
              {String(activeIndex + 1).padStart(2, '0')}
            </span>
            <span className="progress-divider">/</span>
            <span className="progress-total">
              {String(SERVICES_SHOWCASE_DATA.length).padStart(2, '0')}
            </span>
          </div>

          <button
            className="specialized-arrow-btn"
            onClick={handleNextCard}
            aria-label="Scroll to next specialized service"
            title="Next Service"
          >
            <ChevronDown size={22} className="arrow-icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpecializedCareShowcase;
