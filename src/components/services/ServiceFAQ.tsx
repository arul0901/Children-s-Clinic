import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './ServiceComponents.css';

interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  faqs: FAQItem[];
}

const ServiceFAQ = ({ faqs }: ServiceFAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="service-faq-section">
      <div className="container">
        <div className="service-header-center">
          <span className="eyebrow">Got Questions?</span>
          <h2 className="serif-heading service-section-title">Frequently Asked Questions</h2>
        </div>
        
        <div className="faq-accordion">
          {faqs.map((faq, idx) => (
            <div key={idx} className="faq-item">
              <div className="faq-header" onClick={() => toggle(idx)}>
                <span>{faq.question}</span>
                {openIndex === idx ? <ChevronUp size={20} color="var(--color-primary)" /> : <ChevronDown size={20} />}
              </div>
              {openIndex === idx && (
                <div className="faq-body">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFAQ;
