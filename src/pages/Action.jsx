
import { useNavigate } from 'react-router-dom';
const Action = () => {

const navigate = useNavigate();
const handleContactClick = () => {
    // Navigeren naar de contactpagina
    navigate('/contact');

  };
  return (
    <section
      id="Action"
      className="min-h-screen py-16 md:py-24 bg-[#F6E4D4] text-zwart text-center"
    >
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl italic md:text-4xl font-bold mb-6">
          Klaar om Jouw Tech Taken Uit Te Besteden?
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10">
          Laten we kennismaken en ontdekken hoe ik jou kan helpen om efficiënter en zorgeloos te werken.
        </p>
{/* 3x kaart */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">

  {/* Kaart 1 */}
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition">
    <h3 className="text-xl font-semibold text-gray-800 mb-2">
      Website met Wix: vanaf €250 (excl. btw), excl. hosting en domein.
    </h3>
    <p className="text-sm text-gray-600 mb-4">
      Perfect voor wie snel online wil met een professioneel ogende website. Ideaal voor groeiende bedrijven.
    </p>
    <ul className="space-y-1 text-sm text-gray-700">
      {[
        "Wix builder",
        "Professionele website die je zelf kunt beheren, zonder technische kennis",
        "3 pagina’s: Home, Over mij, Contact (andere op aanvraag mogelijk)",
        "Portfolio of blogsectie op aanvraag (meerprijs)",
        "Responsive: tablet- en mobielvriendelijk",
        "Koppeling van je social media",
        "SSL-certificaat geactiveerd",
        "Volledig in jouw huisstijl",
        "2 revisierondes",
        "30 dagen technische ondersteuning na oplevering",
        "SEO-ready & mobielvriendelijk"
      ].map((text, i) => (
        <li key={i} className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-gray-700">
          {text}
        </li>
      ))}
    </ul>
  </div>

  {/* Kaart 2 */}
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition">
    <h3 className="text-xl font-semibold text-gray-800 mb-2">
      Website met Wix: vanaf €500 (excl. btw), excl. hosting en domein.
    </h3>
    <p className="text-sm text-gray-600 mb-4">
      Perfect voor wie snel online wil met een professioneel ogende website. Ideaal voor groeiende bedrijven.
    </p>
    <ul className="space-y-1 text-sm text-gray-700">
      {[
        "Wix builder",
        "Professionele website die je zelf kunt beheren, zonder technische kennis",
        "5 pagina’s: Home, Over mij, Contact, Aanbod (meer op aanvraag)",
        "Portfolio of blogsectie op aanvraag (meerprijs)",
        "Responsive: tablet- en mobielvriendelijk",
        "Koppeling van je social media",
        "SSL-certificaat geactiveerd",
        "Volledig in jouw huisstijl",
        "2 revisierondes",
        "30 dagen technische ondersteuning na oplevering",
        "SEO-ready & mobielvriendelijk"
      ].map((text, i) => (
        <li key={i} className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-gray-700">
          {text}
        </li>
      ))}
    </ul>
  </div>

  {/* Kaart 3 */}
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition">
    <h3 className="text-xl font-semibold text-gray-800 mb-2">
      React & Tailwind CSS vanaf €1000 (excl. btw), excl. hosting en domein.
    </h3>
    <p className="text-sm text-gray-600 mb-4">
      Volledig maatwerk voor ultieme performance, flexibiliteit en schaalbaarheid.
    </p>
    <ul className="space-y-1 text-sm text-gray-700">
      {[
        "Gemaakt met React + Tailwind: moderne en flexibele technologie",
        "Volledig maatwerk — geen templates, maar alles afgestemd op jouw merk",
        "5 unieke pagina’s: zoals Home, Over mij, Contact, Aanbod en meer op aanvraag",
        "Responsief design: perfect op mobiel, tablet en desktop",
        "Integratie van je social media en externe API’s indien nodig",
        "Snelle laadtijden dankzij schone, geoptimaliseerde code",
        "Stijlt consistent via utility-first CSS (Tailwind)",
        "2 revisierondes inbegrepen voor finetuning",
        "30 dagen technische ondersteuning na oplevering",
        "SEO-vriendelijke structuur klaar voor zoekmachineoptimalisatie"
      ].map((text, i) => (
        <li key={i} className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-gray-700">
          {text}
        </li>
      ))}
    </ul>
  </div>
  
</div>
{/* Einde van de kaarten */}
        <button
          onClick={handleContactClick}
          className="bg-[#F37021] text-white px-6 py-3 rounded hover:bg-orange-600 transition"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          Bel of mail mij voor een kennismaking
        </button>
      </div>
    </section>
  );
};

export default Action;