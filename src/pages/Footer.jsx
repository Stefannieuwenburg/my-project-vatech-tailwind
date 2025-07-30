
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {

  return (
    <>
    <footer className="w-full bg-[#1F2630] text-gray-300 py-6">
      <div className="max-w-6xl mx-auto px-6">
        {/* Socials */}
        <div className="flex justify-center space-x-6 mb-4 text-xl">
          <a
            href="https://linkedin.com/in/stefan-nieuwenburg"
            className="text-gray-400 hover:text-white transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/stefan-nieuwenburg"
            className="text-gray-400 hover:text-white transition duration-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/webdevstefan/"
            className="text-gray-400 hover:text-white transition duration-300"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
        {/* Contactinformatie */}
        <div className="flex flex-col md:flex-row gap-4 text-center md:text-center text-sm">
          <div className="flex-1 space-y-2">
            <p className="text-gray-400">
              Volg mij op social media voor de laatste updates en tips!
            </p>
            <p className="text-gray-400">
              Heb je vragen of wil je samenwerken?<br/> 
              Stuur een e-mail naar:{' '}
              <a
                href="mailto:info@webdevstefan.nl"
                className="text-orange-500 hover:underline"
              >
               info@webdevstefan.nl
              </a>
            </p>
          </div>
          <div className="flex-1 space-y-2">
            <p className="text-gray-400">
                Je kunt me bereiken op  📞
              <a
                href="tel:+31626142085"
                className="text-orange-500 hover:underline"
              >
               +31626142085
              </a>
            </p>
            <p className="text-gray-400">
              Bezoek mijn portfolio:{' '}
              <a
                href="https://portfolio-stefan-nieuwenburg.netlify.app/"
                className="text-orange-500 hover:underline"
              >
                WebDevStefan
              </a>
            </p>
          </div>
        </div>
        {/* Copyright */}
        <p className="text-center text-gray-500 mt-6 text-xs">
          &copy; {new Date().getFullYear()} Tech Virtual Assistant. All rights reserved by Stefan Nieuwenburg. Alle rechten voorbehouden.
        </p>
      </div>
    </footer>
  </>
  );
};

export default Footer;

