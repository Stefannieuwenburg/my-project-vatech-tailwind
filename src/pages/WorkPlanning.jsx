

const WorkPlanning = () => {
  // Functie om de strokeDashoffset te berekenen voor de voortgangscirkel
  const calculateStrokeDashoffset = (percentage) => {
    const circumference = 2 * Math.PI * 40; // 2 * PI * radius (radius is 40)
    return circumference * (1 - percentage / 100);
  };

  return (
    <section id="how-we-work" className="min-h-screen rounded-full py-16 md:py-24 bg-[#F6E4D4] text-black">
       <div className="container mx-auto px-4 md:px-8">
      <h2 className="text-center italic text-3xl md:text-4xl font-bold mb-6">
         Een paar simpelen stappen naar jouw nieuwe website
        </h2>
      <p className="text-center text-lg md:text-xl mb-8 mx-8">
        dit is hoe ik werk. Ik geloof in een gestructureerde aanpak die zorgt voor transparantie en betrokkenheid. Elke stap is gericht op het leveren van kwaliteit en het behalen van jouw doelen. Of je nu een nieuwe website wilt of een bestaande site wilt optimaliseren, we doorlopen samen deze stappen om het beste resultaat te bereiken.
      </p>
      </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {/* Stap 1 - 25% */}
      <div className="bg-white flex flex-col items-center p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Stap 1</h2>
        <div className="relative w-24 h-24 mb-4">
          <svg className="w-full h-full" viewBox="0 0 100 100">

            {/* Achtergrondcirkel */}
            <circle
              className="text-gray-200"
              strokeWidth="5" // Dikte aangepast naar dunner
              stroke="currentColor"
              fill="transparent"
              r="40"
              cx="50"
              cy="50"
            />
            {/* Voortgangscirkel (Oranje, dun) */}
            <circle
              className="text-orange-500" // Oranje kleur
              strokeWidth="5" // Dikte aangepast naar dunner
              strokeDasharray={2 * Math.PI * 40}
              strokeDashoffset={calculateStrokeDashoffset(25)}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"

              r="40"
              cx="50"
              cy="50"
              transform="rotate(-90 50 50)" // Start bovenaan de cirkel
            />
            <text
              x="50"
              y="50"
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-lg font-bold text-gray-700"
            >
              25%
            </text>
          </svg>
        </div>
        <h4 className="text-xl font-semibold text-gray-800 mb-4">Kennis makings gesprek</h4>
        <p className="text-gray-600">
          Allereerst plannen we een digitale kennismakingsgesprek in. Hierin kunnen we elkaar een beetje leren kennen, jouw wensen bespreken en jouw vragen beantwoorden. Als jij voelt dat er een klik is, dan gaan we samenwerken!
        
        </p>

      </div>

      {/*  Stap 2 - 50% */}
      <div  className="bg-white flex flex-col items-center p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Stap 2</h2>
        <div className="relative w-24 h-24 mb-4">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            {/* Achtergrondcirkel */}
            <circle
              className="text-gray-200"
              strokeWidth="5"
              stroke="currentColor"
              fill="transparent"
              r="40"
              cx="50"
              cy="50"
            />
            {/* Voortgangscirkel (Oranje, dun) */}
            <circle
              className="text-orange-500"

              strokeWidth="5"
              strokeDasharray={2 * Math.PI * 40}
              strokeDashoffset={calculateStrokeDashoffset(50)}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="40"
              cx="50"
              cy="50"
              transform="rotate(-90 50 50)"
            />
            <text
              x="50"
              y="50"
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-lg font-bold text-gray-700"
            >
              50%
            </text>
          </svg>

        </div>
        <h4 className="text-xl font-semibold text-gray-800 mb-4"> Ontwerp & Strategie</h4>
        <p className="text-gray-600">
          in deze fase duiken we diep in jouw project. We analyseren je concurrentie en brengen in kaart wat wel en niet werkt op je huidige site (indien van toepassing).Op basis van de informatie die we hebben gekregen en jouw doelgroep in kaart is gebracht ontwikkelen we wireframes, sitemaps en visuele moodboards. We maken keuzes rond user flow, merkbeleving en functionaliteit. De focus ligt hier op gebruiksvriendelijkheid, responsiviteit en conversiegericht denken. Jij wordt bij elke iteratie betrokken.
        </p>
      </div>

      {/* Stap 3 - 75% */}
      <div  className="bg-white flex flex-col items-center p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Stap 3</h2>
        <div className="relative w-24 h-24 mb-4">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            {/* Achtergrondcirkel */}
            <circle
              className="text-gray-200"
              strokeWidth="5"
              stroke="currentColor"
              fill="transparent"

              r="40"
              cx="50"
              cy="50"
            />
            {/* Voortgangscirkel (Oranje, dun) */}
            <circle
              className="text-orange-500"
              strokeWidth="5"
              strokeDasharray={2 * Math.PI * 40}
              strokeDashoffset={calculateStrokeDashoffset(75)}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="40"
              cx="50"
              cy="50"
              transform="rotate(-90 50 50)"
            />
            <text
              x="50"
              y="50"
              textAnchor="middle"

              dominantBaseline="middle"
              className="text-lg font-bold text-gray-700"
            >
              75%
            </text>
          </svg>
        </div>
        <h4 className="text-xl font-semibold text-gray-800 mb-4"> Ontwikkeling & Implementatie</h4>
        <p className="text-gray-600">
         Hier komt de site tot leven. De designs worden omgezet naar code (het maken van de website met wix.com of een site met maatwerk met React met tailwind Css, zodat de site werkt als gewenst is). We bouwen interactieve elementen, optimaliseren laadtijden en zorgen dat alles SEO-vriendelijk is. Als het gaat om aanpassingen aan een bestaande site, pakken we dit modulair aan met minimale downtime.
        </p>
      </div>

      {/* Stap 4 - 100% */}
      <div  className="bg-white flex flex-col items-center p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Stap 4</h2>
        <div className="relative w-24 h-24 mb-4">
          <svg className="w-full h-full" viewBox="0 

0 100 100">
            {/* Achtergrondcirkel */}
            <circle
              className="text-gray-200"
              strokeWidth="5"
              stroke="currentColor"
              fill="transparent"
              r="40"
              cx="50"
              cy="50"
            />
            {/* Voortgangscirkel (Oranje, dun) */}
            <circle
              className="text-orange-500"
              strokeWidth="5"
              strokeDasharray={2 * Math.PI * 40}
              strokeDashoffset={calculateStrokeDashoffset(100)} // 100%
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="40"
              cx="50"

              cy="50"
              transform="rotate(-90 50 50)"
            />
            <text
              x="50"
              y="50"
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-lg font-bold text-gray-700"
            >
              100%
            </text>
          </svg>
        </div>
        <h4 className="text-xl font-semibold text-gray-800 mb-4">Testen, Lanceren & Optimaliseren</h4>
        <p className="text-gray-600">
         Voor livegang testen we alles grondig: op bugs, browsers, mobiel-vriendelijkheid en toegankelijkheid (WCAG). Daarna volgt de lancering, met opvolging van prestaties via tools zoals Google Analytics. We blijven verbeteren op basis van gebruikersdata.
         Als je wil, kunnen we één van deze stappen samen in detail uitwerken of zelfs een checklist maken voor jouw specifieke project. Zin om ergens in te duiken? 

        </p>
      </div>
    </div>
    </section>
  );
};


export default WorkPlanning;

