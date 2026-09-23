import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import FeedingBottle from './FeedingBottle';
import './CareSplit.css';

const CareSplit = () => {
  const [hovered, setHovered] = useState<'neonatal' | 'pediatric' | null>(null);

  return (
    <section className="care-split-section section-padding" id="care">
      <div className="container">
        
        <div className="care-split-header">
          <span className="eyebrow">Comprehensive Healthcare</span>
          <h2 className="serif-heading" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', marginBottom: '3rem' }}>
            Two Dedicated Specialties.<br/>One Coordinated Experience.
          </h2>
        </div>

        <div className="care-split-container">
          
          <div 
            className={`split-card neonatal-card ${hovered === 'pediatric' ? 'shrink' : ''} ${hovered === 'neonatal' ? 'expand' : ''}`}
            onMouseEnter={() => setHovered('neonatal')}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="split-card-bg">
               <img src="/service_neonatal_care_1789988898999.jpg" alt="Neonatal care background" />
               <div className="split-card-overlay"></div>
            </div>

            <div className="split-card-content">
              <h3 className="split-card-title">Neonatal Care</h3>
              <div className="split-card-details">
                <ul className="bottle-list">
                  <li><FeedingBottle color="var(--color-gold)" size={18} /> Newborn care</li>
                  <li><FeedingBottle color="var(--color-gold)" size={18} /> Neonatal emergency</li>
                  <li><FeedingBottle color="var(--color-gold)" size={18} /> Lactational support</li>
                  <li><FeedingBottle color="var(--color-gold)" size={18} /> Neonatal ventilation expertise</li>
                  <li><FeedingBottle color="var(--color-gold)" size={18} /> Neonatal POCUS</li>
                </ul>
                <button className="split-card-btn">
                  Explore Neonatal <ArrowRight size={18} className="arrow" />
                </button>
              </div>
            </div>
          </div>

          <div 
            className={`split-card pediatric-card ${hovered === 'neonatal' ? 'shrink' : ''} ${hovered === 'pediatric' ? 'expand' : ''}`}
            onMouseEnter={() => setHovered('pediatric')}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="split-card-bg">
               <img src="/service_preventative_care_1789988969044.jpg" alt="Pediatric care background" />
               <div className="split-card-overlay"></div>
            </div>

            <div className="split-card-content">
              <h3 className="split-card-title">Pediatric Care</h3>
              <div className="split-card-details">
                <ul className="bottle-list">
                  <li><FeedingBottle color="var(--color-gold)" size={18} /> Vaccination</li>
                  <li><FeedingBottle color="var(--color-gold)" size={18} /> Common childhood illnesses</li>
                  <li><FeedingBottle color="var(--color-gold)" size={18} /> Pediatric emergency</li>
                  <li><FeedingBottle color="var(--color-gold)" size={18} /> Preventive care</li>
                </ul>
                <button className="split-card-btn">
                  Explore Pediatric <ArrowRight size={18} className="arrow" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CareSplit;
