import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'services', label: 'Diensten' },
  { id: 'about', label: 'Over Mij' },
  { id: 'testimonials', label: 'Reviews' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    scroller.scrollTo(id, {
      duration: 500,
      smooth: true,
      offset: -80,
    });
  };

  const handleClick = (id) => {
    setMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      // Scroll na route-wijziging
      setTimeout(() => scrollToSection(id), 100);
    } else {
      scrollToSection(id);
    }
  };

  return (
    <nav className="bg-white shadow-md p-4 fixed w-full z-50 top-0">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-black" onClick={() => handleClick('hero')}>
          WebDevStefan
        </Link>

        {/* Navigatie desktop */}
        <div className="hidden md:flex space-x-6">
          {sections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleClick(id)}
              className="text-gray-700 hover:text-[#F37021] transition duration-300"
            >
              {label}
            </button>
          ))}
          <Link to="/contact" className="text-gray-700 hover:text-[#F37021] transition duration-300">
            Contact
          </Link>
          <a
            href="https://freelancestefannieuwenburg.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-[#F37021]"
          >
            Portfolio
          </a>
        </div>

        {/* Hamburger knop */}
        <button
          className="md:hidden text-gray-600 hover:text-[#F37021] focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg className="w-6 h-6" viewBox="0 0 24 24"><path stroke="currentColor" d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-6 h-6" viewBox="0 0 24 24"><path stroke="currentColor" d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>

        {/* Hamburger menu mobiel */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md p-4">
            <ul className="space-y-2">
              {sections.map(({ id, label }) => (
                <li key={id}>
                  <button
                    onClick={() => handleClick(id)}
                    className="text-gray-700 hover:text-[#F37021] transition duration-300"
                  >
                    {label}
                  </button>
                </li>
              ))}
              <li>
                <Link to="/contact" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-[#F37021]">
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="https://portfolio-stefan-nieuwenburg.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-[#F37021]"
                >
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
