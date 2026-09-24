import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import './OurSpace.css';

const OurSpace = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="our-space-page">
      {/* ──────────────── 1. HERO SECTION ──────────────── */}
      <section className="space-hero">
        <motion.div 
          className="space-hero-bg-wrapper"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <img 
            src="/banner.png" 
            alt="The Children's Clinic Reception" 
            className="space-hero-bg-img" 
          />
          <div className="space-hero-overlay" />
        </motion.div>

        <div className="space-hero-content">
          {/* Breadcrumb */}
          <motion.nav 
            className="space-breadcrumb" 
            aria-label="Breadcrumb"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link to="/">Home</Link>
            <span className="space-breadcrumb-sep" aria-hidden="true">
              <ChevronRight size={14} />
            </span>
            <span className="space-breadcrumb-current">Our Space</span>
          </motion.nav>

          {/* Eyebrow */}
          <motion.span 
            className="space-hero-eyebrow"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            OUR SPACE
          </motion.span>

          {/* Heading */}
          <motion.h1 
            className="space-hero-title"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            A Space Designed Around Your Child
          </motion.h1>

          {/* Description */}
          <motion.p 
            className="space-hero-desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            Step inside a warm, welcoming environment thoughtfully designed to make every child and family feel comfortable, safe, and cared for.
          </motion.p>
        </div>
      </section>

      {/* ──────────────── 2. RECEPTION (01) ──────────────── */}
      <section className="space-editorial-section">
        <div className="space-editorial-container">
          {/* Image Left */}
          <motion.div 
            className="space-image-frame"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-image-wrapper">
              <img src="/reception.jpeg" alt="Clinic Reception Desk" />
            </div>
          </motion.div>

          {/* Content Right */}
          <motion.div 
            className="space-content-box"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="space-section-num">01</span>
            <h2 className="space-section-heading">A Warm Welcome</h2>
            <div className="space-decorative-line" />
            <p className="space-section-desc">
              Our reception is designed to create a welcoming first impression, offering a calm and comfortable environment for children and parents from the moment they arrive.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ──────────────── 3. WAITING AREA (02) ──────────────── */}
      <section className="space-editorial-section bg-alt">
        <div className="space-editorial-container reverse">
          {/* Content Left (Desktop) */}
          <motion.div 
            className="space-content-box"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="space-section-num">02</span>
            <h2 className="space-section-heading">Comfort While You Wait</h2>
            <div className="space-decorative-line" />
            <p className="space-section-desc">
              A relaxed and child-friendly waiting environment where families can feel comfortable before their consultation, with thoughtful spaces created to make every visit more pleasant.
            </p>
          </motion.div>

          {/* Image Right (Desktop) */}
          <motion.div 
            className="space-image-frame"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-image-wrapper">
              <img src="/waiting-area.jpeg" alt="Clinic Waiting Lounge" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ──────────────── 4. CONSULTATION ROOM (03) ──────────────── */}
      <section className="space-editorial-section">
        <div className="space-editorial-container">
          {/* Image Left */}
          <motion.div 
            className="space-image-frame"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-image-wrapper">
              <img src="/consultation.jpeg" alt="Pediatric Consultation Room" />
            </div>
          </motion.div>

          {/* Content Right */}
          <motion.div 
            className="space-content-box"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="space-section-num">03</span>
            <h2 className="space-section-heading">Thoughtful Consultation Spaces</h2>
            <div className="space-decorative-line" />
            <p className="space-section-desc">
              Our consultation rooms provide a comfortable and private setting for meaningful conversations between doctors, children, and parents, combining professional care with a reassuring environment.
            </p>
          </motion.div>
        </div>
      </section>

      
    </div>
  );
};

export default OurSpace;
