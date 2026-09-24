import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Testimonials.css';

export interface TestimonialItem {
  id: number;
  author: string;
  category: string;
  quote: string;
  accentColor: 'lime' | 'purple' | 'blue';
}

const TESTIMONIAL_DATA: TestimonialItem[] = [
  {
    id: 1,
    author: 'Aravind Kumar',
    category: 'Neonatal Care',
    quote: "Specialised monitoring and gentle support for your baby's critical first days and weeks.",
    accentColor: 'lime'
  },
  {
    id: 2,
    author: 'Priya S.',
    category: 'Neonatal Care',
    quote: "Dr. Fathima and her team made us feel completely confident from our very first visit. Our newborn received the most attentive care.",
    accentColor: 'purple'
  },
  {
    id: 3,
    author: 'Ramesh K.',
    category: 'Newborn Care',
    quote: "We heard so much about the expertise here. Every visit reassured us that our child was in the most capable hands.",
    accentColor: 'blue'
  },
  {
    id: 4,
    author: 'Meena L.',
    category: 'Lactational Support',
    quote: "The doctors explained everything so clearly. I never felt rushed or dismissed. I finally felt truly understood as a parent.",
    accentColor: 'lime'
  },
  {
    id: 5,
    author: 'Kavitha M.',
    category: 'Vaccination',
    quote: "Gentle, stress-free vaccination experience. The staff went out of their way to make my toddler feel safe and relaxed.",
    accentColor: 'purple'
  },
  {
    id: 6,
    author: 'Rajesh & Divya',
    category: 'Pediatric Emergency',
    quote: "Immediate attention, warm empathetic staff, and top-tier facilities when we needed urgent pediatric support.",
    accentColor: 'blue'
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    let closestIndex = 0;
    let minDistance = Infinity;

    Array.from(container.children).forEach((child, i) => {
      const childEl = child as HTMLElement;
      const childCenter = childEl.offsetLeft + childEl.offsetWidth / 2;
      const distance = Math.abs(childCenter - containerCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = i;
      }
    });

    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);
    }
  };

  const scrollToCard = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cards = container.children;
    if (cards[index]) {
      const childEl = cards[index] as HTMLElement;
      const containerWidth = container.clientWidth;
      const childWidth = childEl.offsetWidth;
      const targetScrollLeft = childEl.offsetLeft - (containerWidth / 2 - childWidth / 2);
      container.scrollTo({ left: targetScrollLeft, behavior: 'smooth' });
      setActiveIndex(index);
    }
  };

  const scrollPrev = () => {
    const prevIdx = Math.max(0, activeIndex - 1);
    scrollToCard(prevIdx);
  };

  const scrollNext = () => {
    const nextIdx = Math.min(TESTIMONIAL_DATA.length - 1, activeIndex + 1);
    scrollToCard(nextIdx);
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        {/* Top Outlined Badge */}
        <div className="testimonials-badge-wrapper">
          <span className="testimonials-top-badge font-dm-sans">
            Testimonials
          </span>
        </div>

        {/* Main Title & Subtitle */}
        <h2 className="testimonials-title font-lato">
          What Parent Says
        </h2>
        <p className="testimonials-subtitle font-dm-sans">
          Specialised monitoring and gentle support for your baby's critical first days and weeks
        </p>

        {/* Scrollable Carousel Container */}
        <div className="testimonials-carousel-wrapper">
          <button
            className="testimonials-nav-arrow arrow-left"
            onClick={scrollPrev}
            disabled={activeIndex === 0}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>

          <div
            className="testimonials-scroll-track"
            ref={scrollRef}
            onScroll={handleScroll}
          >
            {TESTIMONIAL_DATA.map((t) => (
              <div
                key={t.id}
                className={`testimonial-card-wrapper card-accent-${t.accentColor}`}
              >
                {/* Tilted Pastel Backdrop Block */}
                <div className="testimonial-tilted-backdrop" />

                {/* Main White Front Card */}
                <div className="testimonial-card-front">
                  <span className="testimonial-author font-happy-monkey">
                    {t.author}
                  </span>
                  <h3 className="testimonial-category font-plus-jakarta">
                    {t.category}
                  </h3>
                  <p className="testimonial-quote font-dm-sans">
                    {t.quote}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            className="testimonials-nav-arrow arrow-right"
            onClick={scrollNext}
            disabled={activeIndex === TESTIMONIAL_DATA.length - 1}
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="testimonials-dots">
          {TESTIMONIAL_DATA.map((_, i) => (
            <button
              key={i}
              className={`testimonials-dot ${i === activeIndex ? 'active' : ''}`}
              onClick={() => scrollToCard(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
