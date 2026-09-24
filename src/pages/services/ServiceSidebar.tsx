import { NavLink, useNavigate } from 'react-router-dom';
import { ChevronRight, Download, Headphones } from 'lucide-react';
import './ServiceSidebar.css';

export const SERVICE_LINKS = [
  { id: 'newborn-care', label: 'New Born Care' },
  { id: 'pediatric-care', label: 'Pediatric Care' },
  { id: 'neonatal-care', label: 'Neonatal Care' },
  { id: 'vaccination', label: 'Vaccination' },
  { id: 'lactation-support', label: 'Lactation Support' },
];

const PHONE = '+91 XXXXX XXXXX';

const ServiceSidebar = () => {
  const navigate = useNavigate();

  return (
    <aside className="service-sidebar">
      <nav className="service-sidebar-nav" aria-label="Services">
        <ul>
          {SERVICE_LINKS.map((item) => (
            <li key={item.id}>
              <NavLink
                to={`/services/${item.id}`}
                className={({ isActive }) =>
                  `service-sidebar-link${isActive ? ' active' : ''}`
                }
              >
                <span>{item.label}</span>
                <ChevronRight size={18} />
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="service-sidebar-advice">
        <Headphones size={42} strokeWidth={1.5} />
        <h2>Contact with us for any advice</h2>
        <p>Need help? Talk to an expert</p>
        <a href={`tel:${PHONE.replace(/\s/g, '')}`}>{PHONE}</a>
      </div>

      <button
        type="button"
        className="service-sidebar-book"
        onClick={() => navigate('/appointment')}
      >
        <Download size={18} />
        Book a visit
      </button>
    </aside>
  );
};

export default ServiceSidebar;
