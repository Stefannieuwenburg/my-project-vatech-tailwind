import { useState } from 'react';
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section id="Contact" className="h-[calc(100vh-195px)] py-16 md:py-24 bg-white text-center">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          Laten we kennismaken
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          Heb je een vraag, wil je samenwerken of gewoon even sparren? Stuur me gerust een bericht of neem direct contact op!
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
          <a
            href="mailto:nieuwenburg.stefan@gmail.com"
            className="inline-flex items-center justify-center gap-2 bg-[#F37021] text-white px-6 py-3 rounded hover:bg-orange-600 transition"
          >
            <FaEnvelope /> Stuur een e-mail
          </a>

          <div className="relative inline-block">
            <button
              onClick={() => setShowPopup((prev) => !prev)}
              className="inline-flex items-center justify-center gap-2 border border-[#F37021] text-[#F37021] px-6 py-3 rounded hover:bg-[#F37021] hover:text-white transition"
            >
              <FaPhone /> Bel mij
            </button>

            {showPopup && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white border border-gray-300 shadow-md rounded px-4 py-3 text-sm text-gray-800 z-10">
                📞 Je kunt me bereiken op <br/> <strong>06-26142085</strong>
              </div>
            )}
          </div>
          <a
            href="https://www.linkedin.com/in/stefan-nieuwenburg/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded hover:border-gray-500 transition"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>

        <p className="text-sm text-gray-400">Je hoort meestal binnen 1 werkdag van me</p>
      </div>
    </section>
  );
};

export default Contact;
