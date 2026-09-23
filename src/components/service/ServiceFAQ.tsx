import { useState, useRef, useEffect } from 'react';
import { Plus } from 'lucide-react';
import gsap from 'gsap';

interface ServiceFAQProps {
  faqs: { question: string; answer: string; }[];
}

const ServiceFAQ = ({ faqs }: ServiceFAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.sfaq-item',
        { y: 20, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: {
            trigger: '.sfaq-container',
            start: 'top 85%'
          }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, [faqs]);

  return (
    <section className="service-section bg-lavender" ref={sectionRef}>
      <div className="service-container sfaq-container">
        <div className="sfaq-header">
          <h2>Frequently Asked Questions</h2>
        </div>
        
        <div className="sfaq-list">
          {faqs.map((faq, i) => (
            <div key={i} className={`sfaq-item ${openIndex === i ? 'active' : ''}`}>
              <button 
                className="sfaq-question"
                onClick={() => toggleFaq(i)}
                aria-expanded={openIndex === i}
              >
                {faq.question}
                <Plus size={24} className="sfaq-icon" />
              </button>
              <div className="sfaq-answer" aria-hidden={openIndex !== i}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFAQ;
