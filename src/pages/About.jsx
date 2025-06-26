import image from '../assets/image/Stefanoranje.png'; 
const About = () => {
  return (
    <section id="about" className="min-h-screen py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          {/* Afbeelding (Linker Kolom op desktop) */}
          <div className="md:w-2/5 flex justify-center mb-8 md:mb-0">
            <img
              src={image}
              alt="Jouw Naam - Virtueel Assistent"
              className="rounded-lg shadow-xl w-full max-w-xs md:max-w-none transform rotate-3 hover:rotate-0 transition-transform duration-500"
            />
          </div>
          {/* Tekst Inhoud (Rechter Kolom op desktop) */}
          <div className="md:w-3/5 text-center md:text-left">
            <h2 className="text-2xl font-semibold italic text-gray-800 mb-4">
              Welkom bij Stefan Nieuwenburg: <br />Jouw Tech VA Partner
            </h2>
            <h3 className="text-2xl font-semibold italic text-gray-800 mb-4">
              Kort en Krachtig: Wie ik Ben & Wat ik Doe
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
             Mijn naam is Stefan Nieuwenburg en ik ben jouw betrouwbare Virtual Assistant, gespecialiseerd in technische oplossingen die jouw bedrijf helpen groeien. Met een diepe passie voor technologie en een bewezen trackrecord in webontwikkeling en onderhoud, bied ik ondersteuning op maat voor elke digitale uitdaging.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
             Of je nu een professionele website bouwt met platforms zoals Wix.com, of een op maat gemaakte site ontwikkelt met React en Tailwind CSS, ik zorg ervoor dat jouw online aanwezigheid naadloos aansluit bij jouw bedrijfsdoelen.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
            Ik begrijp dat jij je wilt concentreren op je kernactiviteiten. Daarom neem ik complexe technische taken uit handen, zodat jij je volledig kunt focussen op groei en innovatie. Van het updaten van bestaande websites tot het ontwikkelen van een compleet nieuwe online omgeving en het waarborgen van een sterk digitaal fundament—ik zorg ervoor dat jouw technologie betrouwbaar en efficiënt blijft functioneren, zodat jij je kunt richten op wat écht belangrijk is.
            </p>
            <a
              href="#services"
             className="bg-[#F37021] text-white px-6 py-3 rounded hover:bg-orange-600 transition"
             rel="noopener noreferrer">
              Ontdek Mijn Diensten
            </a>
          </div>
        </div>
      </div>
    </section>
  );

};

export default About;