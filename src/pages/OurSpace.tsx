import { useEffect } from 'react';
import { motion } from 'framer-motion';
import './OurSpace.css';

interface AmbienceItemData {
  id: string;
  src: string;
  alt: string;
  badge: string;
  title: string;
  description: string;
}

const AMBIENCE_ITEMS: AmbienceItemData[] = [
  {
    id: 'consultation',
    src: '/consultation.jpeg',
    alt: 'Pediatric Consultation Room',
    badge: 'Consultation Room',
    title: '1. Child-Friendly Consultation Suite',
    description: 'Designed specifically for young patients, our consultation rooms combine modern clinical standards with a calm, friendly design. Bright spaces and gentle care encourage open communication and comfortable check-ups.',
  },
  {
    id: 'reception',
    src: '/reception.jpeg',
    alt: 'Welcoming Reception Desk',
    badge: 'Reception Desk',
    title: '2. Welcoming Reception & Lounge',
    description: 'Our entrance lobby and reception area are crafted to create a gentle, reassuring atmosphere. Soothing pastel tones, comfortable seating, and helpful staff ensure children feel relaxed and welcomed right from the start.',
  },
  {
    id: 'waiting',
    src: '/waiting-area.jpeg',
    alt: 'Safe & Playful Waiting Area',
    badge: 'Waiting Area',
    title: '3. Safe & Playful Waiting Environment',
    description: 'A cheerful waiting space equipped with engaging activities and cozy seating. We aim to keep children happily occupied and stress-free while waiting for their appointments.',
  },
];

const OurSpace = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="our-space-page">
      <div className="our-space-container">
        
        {/* Page Header */}
        <motion.div
          className="ambience-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="ambience-main-title">Our Space &amp; Ambience</h1>
          <p className="ambience-main-subtitle font-jakarta">
            Welcome to our pediatric space in Krishnagiri, designed with care to provide a serene, hygienic, and comforting environment for children and families.
          </p>
        </motion.div>

        {/* Ambience Alternating Feature Section */}
        <section className="ambience-section">
          <div className="ambience-list">
            {AMBIENCE_ITEMS.map((item, index) => {
              const isEven = index % 2 === 1;
              return (
                <motion.div
                  key={item.id}
                  className={`ambience-item ${isEven ? 'reverse' : ''}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-10%' }}
                  transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="ambience-image-box">
                    <img src={item.src} alt={item.alt} />
                    <div className="ambience-badge font-jakarta">{item.badge}</div>
                  </div>
                  <div className="ambience-content-box">
                    <h3 className="ambience-heading">{item.title}</h3>
                    <p className="ambience-text font-jakarta">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
};

export default OurSpace;
