import { useEffect } from 'react';
import { motion } from 'framer-motion';
import './OurSpace.css';
import './services/ServicePage.css';

const OurSpace = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="our-space-page">
      {/* ──────────────── 1. HERO BANNER (Same as Lactation Support) ──────────────── */}
      <section className="sd-hero">
        <img className="sd-hero-bg" src="/banner.jpg" alt="Our Space & Gallery" />
        <div className="sd-hero-overlay">
          <div className="container sd-hero-inner">
            <h2 className="font-plus-jakarta banner-font">Our Space &amp; Gallery</h2>
          </div>
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
