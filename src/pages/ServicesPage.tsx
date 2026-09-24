import { useEffect, useRef, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ChevronRight, Minus, Plus } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import ServiceSidebar from './services/ServiceSidebar';
import './services/ServicePage.css';

const ServicePage = () => {
  const { id } = useParams<{ id: string }>();
  const [openFaqs, setOpenFaqs] = useState<number[]>([]);
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setOpenFaqs([]);

    const page = pageRef.current;
    if (!page) return;
    page.classList.add('sd-motion');

    const nodes = page.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.2, rootMargin: '0px 0px -6% 0px' });

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [id]);

  const toggleFaq = (index: number) => {
    setOpenFaqs((current) =>
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index]
    );
  };

  if (!id || !servicesData[id]) {
    return <Navigate to="/services" replace />;
  }

  const data = servicesData[id];
  const schedule = data.schedule ?? {
    columns: ['Stage', 'Focus', 'What to expect'],
    rows: data.process.map((step, index) => [
      `0${index + 1}`,
      step.title,
      step.description,
    ]),
  };
  const center = data.center ?? {
    title: 'Care Center',
    intro: data.overview.paragraphs[0],
    quote: data.information[0]?.content ?? data.subtitle,
    images: [
      { src: data.heroImage, caption: data.includes[0]?.description ?? data.subtitle },
      { src: data.heroImage, caption: data.includes[1]?.description ?? data.subtitle },
    ],
  };

  return (
    <div className="sd-page" ref={pageRef}>
      <section className="sd-hero">
        <img className="sd-hero-bg" src={data.heroImage} alt="" />
        <div className="sd-hero-overlay">
          <div className="container sd-hero-inner">
            <h1 key={data.title}>{data.title}</h1>
            <nav className="sd-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <ChevronRight size={14} />
              <Link to="/services">Services</Link>
              <ChevronRight size={14} />
              <span>{data.title}</span>
            </nav>
          </div>
        </div>
      </section>

      <section className="sd-body">
        <div className="container sd-layout">
          <ServiceSidebar />

          <article className="sd-content" key={id}>
            <div className="sd-feature">
              <img src={data.heroImage} alt={data.title} />
            </div>

            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              Service Overview
            </h2>
            {data.overview.paragraphs.map((paragraph) => (
              <p key={paragraph} className="sd-copy sd-reveal sd-text" data-reveal>{paragraph}</p>
            ))}

            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              Key Points
            </h2>
            <ul className="sd-points" data-reveal>
              {data.includes.map((point, index) => (
                <li key={point.title} style={{ animationDelay: `${index * 0.28}s` }}>
                  <span className="sd-bullet" aria-hidden="true" />
                  <div>
                    <strong>{point.title}</strong>
                    <p>{point.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              Care Schedule
            </h2>
            <div className="sd-table-wrap sd-reveal" data-reveal>
              <table className="sd-table">
                <thead>
                  <tr>
                    {schedule.columns.map((column) => (
                      <th key={column}>{column}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {schedule.rows.map((row) => (
                    <tr key={row.join('-')}>
                      {row.map((cell) => (
                        <td key={cell}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              {center.title}
            </h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>{center.intro}</p>

            <blockquote className="sd-quote sd-reveal sd-text" data-reveal>{center.quote}</blockquote>

            <h2 className="sd-heading sd-reveal" data-reveal>
              <span className="sd-mark" />
              Guidance for Parents
            </h2>
            <div className="sd-notes">
              {data.information.map((item) => (
                <article key={item.title} className="sd-reveal sd-text" data-reveal>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </article>
              ))}
            </div>

            <div className="sd-gallery">
              {center.images.map((image) => (
                <figure key={image.caption}>
                  <img src={image.src} alt="" />
                  <figcaption className="sd-reveal sd-text" data-reveal>{image.caption}</figcaption>
                </figure>
              ))}
            </div>

            <h2 className="sd-heading sd-faq-title sd-reveal" data-reveal>Frequently Asked Question</h2>
            <p className="sd-copy sd-reveal sd-text" data-reveal>
              Common questions families ask about {data.title.toLowerCase()}, with clear answers from our care team.
            </p>

            <div className="sd-faq">
              {data.faqs.map((faq, index) => {
                const open = openFaqs.includes(index);
                return (
                  <div key={faq.question} className={`sd-faq-item ${open ? 'open' : ''}`}>
                    <button
                      type="button"
                      className="sd-faq-q"
                      aria-expanded={open}
                      onClick={() => toggleFaq(index)}
                    >
                      <span>{faq.question}</span>
                      {open ? <Minus size={18} /> : <Plus size={18} />}
                    </button>
                    <div className="sd-faq-a">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
