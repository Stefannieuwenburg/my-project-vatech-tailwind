import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import WebDevLogo from "../assets/image/LogoOranje.png"; 
import Top from './Top';


const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'services', label: 'Diensten' },
  { id: 'about', label: 'Over Mij' },
  { id: 'testimonials', label: 'Reviews' },
  { id: 'packages', label: 'Paketten' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    scroller.scrollTo(id, {
      duration: 500,
      smooth: true,
      offset: -60,
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
    <nav className="bg-white shadow-md fixed w-full z-50 top-0">
      <Top />
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center mt-2 mb-2 space-x-2 text-2xl font-bold text-black" onClick={() => handleClick('hero')}>
         <img src={WebDevLogo} alt="WebDevStefan Logo" className="h-10 w-auto transform transition duration-300 hover:scale-110 hover:brightness-110" />
        {/* <span className="text-2xl font-bold text-black">WebDevStefan</span> */}
        </Link>

        {/* Navigatie desktop */}
        <div className="hidden md:flex space-x-6">
          {sections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleClick(id)}
              className="text-gray-700 hover:text-[#F37021] transition duration-300  hover:scale-110 hover:brightness-110"
            >
              {label}
            </button>
          ))}
          <Link to="/contact" className="text-gray-700 hover:text-[#F37021] transition duration-300 hover:scale-110 hover:brightness-110">
            Contact
          </Link>
          <a
            href="https://freelancestefannieuwenburg.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-[#F37021] transition duration-300 hover:scale-110 hover:brightness-110"
          >
            Portfolio
          </a>
        </div>

        {/* Hamburger knop */}
        <button
          className="md:hidden text-gray-600 hover:text-[#F37021] focus:outline-none transition duration-300 hover:scale-110 hover:brightness-110  "
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
                    className="text-gray-700 hover:text-[#F37021] focus:outline-none transition duration-300 hover:scale-110 hover:brightness-110  "
                  >
                    {label}
                  </button>
                </li>
              ))}
              <li>
                <Link to="/contact" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-[#F37021] focus:outline-none transition duration-300 hover:scale-110 hover:brightness-110">
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="https://portfolio-stefan-nieuwenburg.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-[#F37021] focus:outline-none transition duration-300 hover:scale-110 hover:brightness-110"
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
