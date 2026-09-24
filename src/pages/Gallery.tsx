import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, ZoomIn, ArrowRight } from 'lucide-react';
import './Gallery.css';

interface GalleryItem {
  id: number;
  title: string;
  category: 'clinic' | 'nicu' | 'pediatrics' | 'doctor';
  categoryLabel: string;
  image: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'Dr. Haseen Fathima Consultation Room',
    category: 'doctor',
    categoryLabel: 'Doctor & Team',
    image: '/doctor_portrait_1789986143658.jpg',
    description: 'Dr. Haseen Fathima providing warm, attentive consultation to parents and children in a friendly, comfortable setting.'
  },
  {
    id: 2,
    title: 'Level III Neonatal Intensive Care Unit (NICU)',
    category: 'nicu',
    categoryLabel: 'NICU & Care',
    image: '/service_neonatal_care_1789988898999.jpg',
    description: 'Advanced NICU suite equipped with continuous monitoring, incubators, and specialized newborn life support.'
  },
  {
    id: 3,
    title: 'Pediatric Examination & Well-Child Zone',
    category: 'pediatrics',
    categoryLabel: 'Pediatric Services',
    image: '/pediatric-care-hero.jpg',
    description: 'Welcoming examination space designed to put children at ease during routine check-ups and milestone evaluations.'
  },
  {
    id: 4,
    title: 'Preventative Health & Immunization Center',
    category: 'pediatrics',
    categoryLabel: 'Pediatric Services',
    image: '/service_preventative_care_1789988969044.jpg',
    description: 'Dedicated room for gentle, evidence-based childhood vaccinations and growth assessment.'
  },
  {
    id: 5,
    title: '24/7 Pediatric Emergency Response',
    category: 'clinic',
    categoryLabel: 'Clinic & Facilities',
    image: '/service_emergency_care_1789988990048.jpg',
    description: 'Fully equipped emergency care setup ready for rapid triage and pediatric medical emergencies.'
  },
  {
    id: 6,
    title: 'Lactation Consultation & Feeding Suite',
    category: 'clinic',
    categoryLabel: 'Clinic & Facilities',
    image: '/services_image.jpg',
    description: 'Private, soothing environment for mothers receiving specialized breastfeeding and infant feeding guidance.'
  },
  {
    id: 7,
    title: 'Clinic Reception & Waiting Lounge',
    category: 'clinic',
    categoryLabel: 'Clinic & Facilities',
    image: '/hero-bg.jpg',
    description: 'Modern, child-friendly atmosphere featuring clean design and comforting colors for young patients and parents.'
  }
];

const categories = [
  { key: 'all', label: 'All Photos' },
  { key: 'doctor', label: 'Doctor & Team' },
  { key: 'nicu', label: 'NICU & Care' },
  { key: 'pediatrics', label: 'Pediatrics' },
  { key: 'clinic', label: 'Clinic & Facilities' },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="gallery-page">
      {/* Header */}
      <section className="container gallery-hero">
        <span className="gallery-subtitle">Visual Tour</span>
        <h1 className="gallery-title">Our Clinic & Care Gallery</h1>
        <p className="gallery-description">
          Explore our state-of-the-art pediatric clinic, Level III NICU facilities, private consultation suites, and child-friendly medical environments located in Krishnagiri.
        </p>
      </section>

      {/* Category Filters */}
      <div className="gallery-filters">
        {categories.map(cat => (
          <button
            key={cat.key}
            className={`gallery-filter-btn ${activeCategory === cat.key ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <section className="container">
        <div className="gallery-grid">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="gallery-card"
              onClick={() => setSelectedItem(item)}
            >
              <div className="gallery-card-img-wrapper">
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="gallery-card-overlay">
                  <span className="gallery-zoom-badge">
                    <ZoomIn size={14} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} /> Click to View
                  </span>
                </div>
              </div>
              <div className="gallery-card-body">
                <span className="gallery-card-tag">{item.categoryLabel}</span>
                <h3 className="gallery-card-title">{item.title}</h3>
                <p className="gallery-card-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div className="lightbox-backdrop" onClick={() => setSelectedItem(null)}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button
              className="lightbox-close-btn"
              onClick={() => setSelectedItem(null)}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
            <div className="lightbox-img-col">
              <img src={selectedItem.image} alt={selectedItem.title} />
            </div>
            <div className="lightbox-info-col">
              <span className="gallery-card-tag">{selectedItem.categoryLabel}</span>
              <h2 style={{ color: 'var(--color-primary)', fontSize: '1.8rem', marginBottom: '1rem' }}>
                {selectedItem.title}
              </h2>
              <p style={{ color: 'var(--color-navy)', opacity: 0.85, lineHeight: 1.7, marginBottom: '2rem' }}>
                {selectedItem.description}
              </p>
              <button
                className="btn-primary"
                onClick={() => {
                  setSelectedItem(null);
                  navigate('/appointment');
                }}
              >
                Schedule Clinic Visit <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section style={{ backgroundColor: 'var(--color-primary)', color: '#fff', padding: '5rem 2rem', textAlign: 'center', margin: '2rem 2rem 5rem', borderRadius: '30px' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', marginBottom: '1.25rem', color: '#fff' }}>
            Experience World-Class Care in Person
          </h2>
          <p style={{ fontSize: '1.1rem', opacity: 0.9, marginBottom: '2.5rem', lineHeight: 1.8 }}>
            Visit Dr. Haseen Fathima at The Children's Clinic, Krishnagiri. We are dedicated to delivering compassionate, expert medical care for your child.
          </p>
          <button
            className="btn-primary"
            style={{ backgroundColor: '#fff', color: 'var(--color-primary)' }}
            onClick={() => navigate('/appointment')}
          >
            Book an Appointment
          </button>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
