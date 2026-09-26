import { NavLink, useNavigate } from 'react-router-dom';
import { ChevronRight, Phone } from 'lucide-react';
import './ServiceSidebar.css';

export const SERVICE_LINKS = [
  { id: 'lactation-support-in-krishnagiri', label: 'Lactation Support' },
  { id: 'neonatal-care-in-krishnagiri', label: 'Neonatal Care' },  
  { id: 'newborn-care-jaundice-krishnagiri', label: 'Newborn Care' },
  { id: 'child-growth-development-krishnagiri', label: 'Growth & Development' },
  { id: 'pediatric-fever-cold-cough-krishnagiri', label: 'Pediatric Care' },
  { id: 'child-vaccination-krishnagiri', label: 'Vaccination' },
  { id: 'seizures-fits-babies-children-krishnagiri', label: 'Seizures & Fits Care' },
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
        <Phone size={42} strokeWidth={1.5} />
        <h2>Contact with us for any advice</h2>
        <p>Need help? Talk to an expert</p>
        <a href={`tel:${PHONE.replace(/\s/g, '')}`}>{PHONE}</a>
      </div>

      <button
        type="button"
        className="service-sidebar-book"
        onClick={() => navigate('/contact')}
      >
        <Phone size={18} />
        Contact us
      </button>
    </aside>
  );
};

export default ServiceSidebar;
