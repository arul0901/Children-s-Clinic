import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ServicesComponent from '../components/Services';
import { ArrowRight } from 'lucide-react';
import FeedingBottle from '../components/FeedingBottle';

const ServicesPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ backgroundColor: 'var(--color-ivory)', minHeight: '100vh', paddingTop: '100px' }}>
      
      {/* Page Header */}
      <section className="container" style={{ padding: '6rem 2rem', textAlign: 'center' }}>
        <h4 style={{ color: 'var(--color-teal-muted)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', fontFamily: 'var(--font-body)', fontSize: '0.9rem' }}>
          Comprehensive Pediatric & Neonatal Services
        </h4>
        <h1 style={{ color: 'var(--color-primary)', fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '2rem', maxWidth: '900px', margin: '0 auto 2rem' }}>
          Dedicated to the Health of Your Little Ones.
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--color-navy)', opacity: 0.8, maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
          At our premium pediatric clinic, we believe every child deserves world-class medical attention in a comforting environment. From the delicate first days in our state-of-the-art Neonatal Intensive Care Unit (NICU) to routine childhood vaccinations and rapid-response pediatric emergency care, our specialized doctors are here for your family's journey.
        </p>
      </section>

      {/* Main Interactive Services Component */}
      <ServicesComponent />

      {/* Detailed SEO-Optimized Content Sections */}
      <section style={{ backgroundColor: '#fff', padding: '4rem 0' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <h2 style={{ color: 'var(--color-primary)', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', marginBottom: '1.5rem' }}>
              Specialized Medical Care Areas
            </h2>
            <p style={{ fontSize: '1.1rem', opacity: 0.7, maxWidth: '700px', margin: '0 auto' }}>
              We combine advanced medical technology with a warm, compassionate touch. Learn more about our specialized pediatric departments designed to deliver the best health outcomes.
            </p>
          </div>

          {/* Feature 1: Neonatal Care */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center', marginBottom: '4rem' }}>
            <div className="hover-zoom" style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.08)' }}>
              <img src="/service_neonatal_care_1789988898999.jpg" alt="Neonatal Intensive Care Unit" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div>
              <h3 style={{ color: 'var(--color-primary)', fontSize: '2.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Neonatal Intensive Care (NICU)</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', opacity: 0.8, marginBottom: '1.5rem', color: 'var(--color-navy)' }}>
                Our Level III Neonatal Intensive Care Unit is equipped with the latest medical advancements to care for premature and critically ill newborns. Our multidisciplinary team of neonatologists, specialized nurses, and respiratory therapists work around the clock to provide comprehensive, life-saving support.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0' }}>
                {['24/7 Neonatologist availability', 'Advanced respiratory support', 'Family-centered care approach'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', fontSize: '1.1rem', opacity: 0.9 }}>
                    <FeedingBottle color="var(--color-gold)" size={20} /> {item}
                  </li>
                ))}
              </ul>
              <button 
                style={{ color: 'var(--color-primary)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid var(--color-primary)', paddingBottom: '4px', background: 'none', border: 'none', cursor: 'pointer' }}
                onClick={() => navigate('/services/neonatal-care')}
              >
                Learn more about Neonatal Care <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Feature 2: Preventative Health (Reversed) */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center', marginBottom: '4rem' }}>
            <div className="hover-zoom" style={{ order: 2, borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.08)' }}>
              <img src="/service_preventative_care_1789988969044.jpg" alt="Preventative Health and Vaccination for Toddlers" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ order: 1 }}>
              <h3 style={{ color: 'var(--color-primary)', fontSize: '2.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Preventative Health & Vaccination</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', opacity: 0.8, marginBottom: '1.5rem', color: 'var(--color-navy)' }}>
                The cornerstone of a healthy childhood is preventative care. We offer routine well-child checkups to monitor growth, developmental milestones, and overall health. Our evidence-based immunization programs are designed to protect your child from preventable diseases.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0' }}>
                {['Comprehensive well-child exams', 'State-mandated vaccination schedules', 'Nutritional and developmental counseling'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', fontSize: '1.1rem', opacity: 0.9 }}>
                    <FeedingBottle color="var(--color-gold)" size={20} /> {item}
                  </li>
                ))}
              </ul>
              <button 
                style={{ color: 'var(--color-primary)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid var(--color-primary)', paddingBottom: '4px', background: 'none', border: 'none', cursor: 'pointer' }}
                onClick={() => navigate('/services/pediatric-care')}
              >
                View Pediatric Care Details <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Feature 3: Emergency Support */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div className="hover-zoom" style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.08)' }}>
              <img src="/service_emergency_care_1789988990048.jpg" alt="Pediatric Emergency Room and Support" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div>
              <h3 style={{ color: 'var(--color-primary)', fontSize: '2.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Pediatric Emergency Care</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', opacity: 0.8, marginBottom: '1.5rem', color: 'var(--color-navy)' }}>
                When the unexpected happens, you need a team you can trust. Our dedicated pediatric emergency department is staffed by board-certified pediatric emergency physicians and nurses who specialize in treating acute childhood illnesses and injuries with speed and compassion.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0' }}>
                {['Rapid triage and assessment', 'Child-friendly emergency rooms', 'On-site advanced diagnostics and imaging'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', fontSize: '1.1rem', opacity: 0.9 }}>
                    <FeedingBottle color="var(--color-gold)" size={20} /> {item}
                  </li>
                ))}
              </ul>
              <button 
                style={{ color: 'var(--color-primary)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid var(--color-primary)', paddingBottom: '4px', background: 'none', border: 'none', cursor: 'pointer' }}
                onClick={() => navigate('/services/pediatric-care')}
              >
                Learn more about our services <ArrowRight size={16} />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ Section for SEO */}
      <section className="container" style={{ padding: '4rem 2rem' }}>
        <h2 style={{ color: 'var(--color-primary)', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', marginBottom: '3rem', textAlign: 'center' }}>
          Frequently Asked Questions
        </h2>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={{ padding: '2rem', backgroundColor: '#fff', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
            <h4 style={{ color: 'var(--color-primary)', fontSize: '1.2rem', marginBottom: '1rem', fontFamily: 'var(--font-body)', fontWeight: 600 }}>What ages of children do you treat?</h4>
            <p style={{ opacity: 0.8, lineHeight: '1.6' }}>We provide comprehensive medical care for children from the day they are born through adolescence (up to 18 years of age). Our neonatologists specialize in premature infants, while our pediatricians handle toddlers, school-aged children, and teenagers.</p>
          </div>
          <div style={{ padding: '2rem', backgroundColor: '#fff', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
            <h4 style={{ color: 'var(--color-primary)', fontSize: '1.2rem', marginBottom: '1rem', fontFamily: 'var(--font-body)', fontWeight: 600 }}>Do I need a referral to visit your specialist clinic?</h4>
            <p style={{ opacity: 0.8, lineHeight: '1.6' }}>While we gladly accept referrals from primary care providers for our specialized intensive care and neonatal services, you do not strictly need a referral to book a standard well-child or illness consultation with our pediatricians.</p>
          </div>
          <div style={{ padding: '2rem', backgroundColor: '#fff', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
            <h4 style={{ color: 'var(--color-primary)', fontSize: '1.2rem', marginBottom: '1rem', fontFamily: 'var(--font-body)', fontWeight: 600 }}>Is the pediatric emergency department open 24/7?</h4>
            <p style={{ opacity: 0.8, lineHeight: '1.6' }}>Yes, our pediatric emergency and neonatal intensive care units are fully operational 24 hours a day, 7 days a week, 365 days a year to ensure your child receives immediate attention during critical moments.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ backgroundColor: 'var(--color-primary)', color: '#fff', padding: '6rem 2rem', textAlign: 'center', margin: '0 2rem 6rem', borderRadius: '30px' }}>
        <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', marginBottom: '1.5rem', color: '#fff' }}>
          Ready to Schedule a Visit?
        </h2>
        <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 3rem', fontFamily: 'var(--font-body)' }}>
          Whether it's a routine check-up or specialized neonatal care, we are here to support your family every step of the way.
        </p>
        <button 
          className="btn-primary" 
          style={{ backgroundColor: '#fff', color: 'var(--color-primary)' }}
          onClick={() => navigate('/appointment')}
        >
          Book an Appointment
        </button>
      </section>

    </div>
  );
};

export default ServicesPage;
