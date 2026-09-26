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
    author: 'Fahimae Fathima',
    category: 'Pediatric Care',
    quote: "Doctor Haseen was so empathetic and understanding. These are invaluable qualities. I didn't feel rushed and definitely felt heard and I can blindly trust her and the transparency in her staff is one of the best things about the Clinic. Doctors are life savers... As parents all we need is patience. Thank you Doctor.",
    accentColor: 'lime'
  },
  {
    id: 2,
    author: 'Shakthi sri S.',
    category: 'Parent',
    quote: "We felt heard and supported throughout our child's consultation. The explanations were clear and reassuring.",
    accentColor: 'purple'
  },
  {
    id: 3,
    author: 'Karthik R.',
    category: 'Parent',
    quote: "The consultation was handled with patience and care. We appreciated the guidance provided for our baby's health needs.",
    accentColor: 'blue'
  },
  {
    id: 4,
    author: 'Merlyn M.',
    category: 'Parent',
    quote: "Our concerns were explained clearly, and we felt comfortable discussing our child's health and development.",
    accentColor: 'lime'
  },
  {
    id: 5,
    author: 'Arun Kumar',
    category: 'Parent',
    quote: "A caring approach and helpful guidance made the consultation a comfortable experience for both us and our child.",
    accentColor: 'purple'
  },
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
          What Parents Say About Our Care
        </h2>
        <p className="testimonials-subtitle font-dm-sans">
          Hear from parents about their experiences with The Children’s Clinic and the care provided for their little ones.
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
