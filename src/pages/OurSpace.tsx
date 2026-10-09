import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  ShieldCheck,
  Baby,
  Gamepad2,
  Stethoscope,
  HeartHandshake,
  Smile,
  CheckCircle2,
  X,
  Maximize2,
  Calendar,
  Building2,
  Heart,
  Sparkle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './OurSpace.css';

interface AmbienceItemData {
  id: string;
  src: string;
  alt: string;
  badge: string;
  category: string;
  title: string;
  description: string;
  highlights: string[];
  icon: any;
  isPortrait?: boolean;
  objectFit?: 'cover' | 'contain';
  objectPosition?: string;
}

const HIGHLIGHT_FEATURES = [
  { icon: ShieldCheck, label: '100% Sanitized Environment' },
  { icon: Baby, label: 'Private Feeding & Nursing Suite' },
  { icon: Gamepad2, label: 'Engaging Play Area' },
  { icon: Stethoscope, label: 'Child-Friendly Examination' },
];

const AMBIENCE_ITEMS: AmbienceItemData[] = [
  {
    id: 'consultation',
    src: '/consultation.jpeg',
    alt: 'Pediatric Consultation Room',
    badge: 'Consultation Room',
    category: 'Clinical Care',
    icon: Stethoscope,
    title: '1. Child-Friendly Consultation Suite',
    description: 'Designed specifically for young patients, our consultation rooms combine modern clinical excellence with a warm, comforting interior. Gentle lighting and welcoming colors encourage open communication and stress-free check-ups.',
    highlights: ['Pediatric-height seating', 'Warm & welcoming decor', 'Doctor consultation desk'],
  },
  {
    id: 'reception',
    src: '/reception.jpeg',
    alt: 'Welcoming Reception Desk',
    badge: 'Reception Lounge',
    category: 'Welcome Zone',
    icon: HeartHandshake,
    title: '2. Welcoming Reception & Lounge',
    description: 'Our entrance lobby and reception lounge are crafted to provide a calm, reassuring arrival experience. Soothing pastel tones, comfortable family seating, and helpful staff ensure children feel relaxed right from the start.',
    highlights: ['Streamlined check-in desk', 'Comfortable lounge seating', 'Soothing ambient lighting'],
  },
  {
    id: 'waiting',
    src: '/waiting-area.jpeg',
    alt: 'Safe & Playful Waiting Area',
    badge: 'Waiting Lounge',
    category: 'Comfort Zone',
    icon: Smile,
    title: '3. Safe & Playful Waiting Environment',
    description: 'A cheerful waiting space equipped with engaging activities and comfortable seating. We aim to keep children happily occupied and stress-free while waiting for their appointments.',
    highlights: ['Interactive activity kits', 'Sanitized play elements', 'Spacious family waiting hall'],
  },
  {
    id: 'examination',
    src: '/Child-friendly-environment-for-examination.jpeg',
    alt: 'Child-Friendly Environment for Examination',
    badge: 'Examination Suite',
    category: 'Clinical Diagnostics',
    icon: Building2,
    title: '4. Child-Friendly Environment for Examination',
    description: 'Our clinical examination space is designed to minimize anxiety for children, featuring kid-friendly decor, non-threatening diagnostic tools, and a gentle setting during physical exams.',
    highlights: ['Non-intimidating setup', 'Hygiene-certified surfaces', 'Calming examination bed'],
  },
  {
    id: 'ambient-toys',
    src: '/ambient-atmosphere-and-engaging-toys.jpeg',
    alt: 'Ambient Atmosphere and Engaging Toys',
    badge: 'Play & Comfort Zone',
    category: 'Child Engagement',
    icon: Gamepad2,
    title: '5. Ambient Atmosphere & Engaging Toys',
    description: 'We offer a warm, soothing atmosphere complete with age-appropriate toys and activities that keep children entertained, distracted, and at ease during clinic visits.',
    highlights: ['Educational activity kits', 'Distraction techniques', 'Child-safe non-toxic toys'],
  },
  {
    id: 'feeding-area',
    src: '/small-dedicated-area-for-feeding.jpeg',
    alt: 'Small Dedicated Area for Feeding',
    badge: 'Feeding & Nursing Suite',
    category: 'Mother & Infant Care',
    icon: Baby,
    title: '6. Small Dedicated Area for Feeding',
    description: 'A pristine, cozy, and 100% private space dedicated to mothers and infants, offering a peaceful environment for feeding, nursing, and quiet rest during your visit.',
    highlights: ['100% Private nursing station', 'Soft plush seating', 'Sanitizer & wipes station'],
    isPortrait: true,
  },
];

const OurSpace = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<AmbienceItemData | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="our-space-page">
      <div className="our-space-container">
        
        {/* Header Section */}
        <motion.div
          className="ambience-header"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="ambience-top-pill font-jakarta">
            <Sparkles size={15} className="pill-icon" />
            <span>Thoughtfully Crafted Pediatric Infrastructure</span>
          </div>

          <h1 className="ambience-main-title">Our Space &amp; Ambience</h1>
          
          <p className="ambience-main-subtitle font-jakarta">
            Welcome to our specialized pediatric clinic in Krishnagiri. Every detail—from our private feeding area to our playful waiting lounge—is designed to provide a serene, hygienic, and comforting environment for children and parents.
          </p>
        </motion.div>

        {/* Feature Highlights Grid */}
        <motion.div
          className="ambience-highlights-grid"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          {HIGHLIGHT_FEATURES.map((feat, idx) => {
            const IconComponent = feat.icon;
            return (
              <div key={idx} className="highlight-card font-jakarta">
                <div className="highlight-icon-box">
                  <IconComponent size={20} />
                </div>
                <span>{feat.label}</span>
              </div>
            );
          })}
        </motion.div>

        {/* Ambience Alternating Feature List */}
        <section className="ambience-section">
          <div className="ambience-list">
            {AMBIENCE_ITEMS.map((item, index) => {
              const isEven = index % 2 === 1;
              const IconComp = item.icon;

              return (
                <motion.div
                  key={item.id}
                  className={`ambience-item ${isEven ? 'reverse' : ''}`}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-10%' }}
                  transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Image Card Container */}
                  <div
                    className={`ambience-image-box ${item.isPortrait ? 'portrait-box' : ''}`}
                    onClick={() => setSelectedImage(item)}
                    role="button"
                    tabIndex={0}
                    title="Click to view high-resolution image"
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      style={{
                        objectFit: item.objectFit || 'cover',
                        objectPosition: item.objectPosition || 'center',
                      }}
                    />

                    {/* Corner Badge */}
                    <div className="ambience-badge font-jakarta">
                      <IconComp size={13} className="badge-icon" />
                      <span>{item.badge}</span>
                    </div>

                    {/* Expand Zoom Overlay */}
                    <div className="ambience-zoom-hint font-jakarta">
                      <Maximize2 size={16} />
                      <span>Expand Photo</span>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="ambience-content-box">
                    <div className="ambience-category-tag font-jakarta">
                      <Sparkle size={12} />
                      <span>{item.category}</span>
                    </div>

                    <h2 className="ambience-heading">{item.title}</h2>
                    <p className="ambience-text font-jakarta">{item.description}</p>

                    {/* Key Highlights List */}
                    <div className="ambience-item-highlights">
                      {item.highlights.map((point, pIdx) => (
                        <div key={pIdx} className="highlight-point font-jakarta">
                          <CheckCircle2 size={15} className="check-icon" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* CTA Bottom Banner */}
        <motion.div
          className="ambience-cta-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="cta-content">
            <div className="cta-badge font-jakarta">
              <Heart size={14} className="cta-heart" />
              <span>Personalized Care for Every Child</span>
            </div>
            <h2 className="cta-title">Experience Our Comforting Space in Person</h2>
            <p className="cta-desc font-jakarta">
              Schedule a visit or consultation with Dr. Haseen Fathima (MD Pediatrics) at Children’s Clinic, Krishnagiri.
            </p>
          </div>
          <div className="cta-actions">
            <button
              className="cta-btn primary font-jakarta"
              onClick={() => navigate('/contact')}
            >
              <Calendar size={18} />
              <span>Book Appointment</span>
            </button>
          </div>
        </motion.div>

      </div>

      {/* Lightbox Image Preview Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="ambience-lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="ambience-lightbox-card"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="lightbox-close-btn"
                onClick={() => setSelectedImage(null)}
                aria-label="Close Preview"
              >
                <X size={20} />
              </button>

              <div className="lightbox-img-wrap">
                <img src={selectedImage.src} alt={selectedImage.alt} />
              </div>

              <div className="lightbox-details font-jakarta">
                <span className="lightbox-badge">{selectedImage.badge}</span>
                <h3 className="lightbox-title">{selectedImage.title}</h3>
                <p className="lightbox-desc">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OurSpace;
