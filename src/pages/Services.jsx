const ServicesOverview = () => {
    return (
        <section id="services" className="min-h-screen rounded-full py-16 md:py-24 bg-orange-400 text-white">
            <div className="container mx-auto px-4 md:px-8">
                <h2 className="text-center italic text-3xl md:text-4xl font-bold mb-6">Welke diensten bied ik aan?</h2>
                <p className="text-center text-lg md:text-xl mb-8 mx-4">
                    Als ervaren webontwikkelaar bied ik een scala aan diensten aan om jouw online aanwezigheid te
                    versterken. <br />
                    Van het bouwen van maatwerkwebsites tot het optimaliseren van bestaande platforms, <br />
                    ik zorg ervoor dat jouw digitale oplossingen naadloos aansluiten bij jouw bedrijfsdoelen.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
                {/* Website Ontwikkeling met Wix.com */}
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition hover:-translate-y-2">
                    <p className="text-xl font-semibold text-[#F37021]">Website Ontwikkeling met Wix.com</p>
                    <ul className="text-gray-600 mt-4 space-y-2">
                        <li>
                            <strong>Waarom Wix?</strong>: Snel professionele sites bouwen, zonder kwaliteitsverlies.
                        </li>
                        <li>
                            <strong>Voordelen voor jou</strong>:
                        </li>
                        <li>
                            <strong>Snel live</strong> dankzij drag & drop-editor.
                        </li>
                        <li>
                            <strong>Zelf beheren</strong>: Pas teksten en foto’s eenvoudig aan.
                        </li>
                        <li>
                            <strong>Betrouwbare hosting</strong>: Beveiliging en back-ups automatisch geregeld.
                        </li>
                        <li>
                            <strong>Handige tools</strong>: Boekingen, webshop en blog naadloos geïntegreerd.
                        </li>
                        <li>
                            <strong>SEO & responsive</strong>: Goed vindbaar en mobielvriendelijk.
                        </li>
                        <li>
                            <strong>Betaalbaar</strong>: Perfecte balans tussen prijs en professionaliteit.
                        </li>
                    </ul>
                </div>
                {/* Website met React en Tailwind CSS */}
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition hover:-translate-y-2">
                    <p className="text-xl font-semibold text-[#F37021]">Website met React en Tailwind CSS</p>
                    <ul className="text-gray-600 mt-4 space-y-2">
                        <li>
                            <strong>Waarom deze stack?</strong>: Supersnelle, schaalbare en volledig op maat gemaakte
                            websites.
                        </li>
                        <li>
                            <strong>Jouw voordelen</strong>:
                        </li>
                        <li>
                            <strong>Volledig maatwerk</strong>: Geen templates—jouw merk, jouw stijl.
                        </li>
                        <li>
                            <strong>Razendsnelle laadtijden</strong>: Geoptimaliseerde code voor top performance.
                        </li>
                        <li>
                            <strong>Modulair & schaalbaar</strong>: Groeit mee met jouw bedrijf.
                        </li>
                        <li>
                            <strong>Consistent design</strong>: Modern, overzichtelijk en onderhoudsvriendelijk.
                        </li>
                        <li>
                            <strong>Responsive</strong>: Perfect op mobiel, tablet en desktop.
                        </li>
                        <li>
                            <strong>Flexibele integraties</strong>: Alles van API's tot animaties is mogelijk.
                        </li>
                    </ul>
                </div>

                {/* Website Onderhoud en Updates */}
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition hover:-translate-y-2">
                    <p className="text-xl font-semibold text-[#F37021]">Website Onderhoud & Updates</p>
                    <ul className="text-gray-600 mt-4 space-y-2">
                        <li>
                            <strong>Waarom onderhoud?</strong>: Houd je site veilig, snel en probleemloos draaiend.
                        </li>
                        <li>
                            <strong>Updates</strong>: CMS, plugins en thema’s altijd up-to-date.
                        </li>
                        <li>
                            <strong>Beveiliging</strong>: Voorkom hacks en malware met actieve monitoring.
                        </li>
                        <li>
                            <strong>Back-ups</strong>: Automatisch herstel bij dataverlies of foutmeldingen.
                        </li>
                        <li>
                            <strong>Snelheid</strong>: Technische optimalisatie voor betere prestaties.
                        </li>
                        <li>
                            <strong>SEO & content</strong>: Actuele content die scoort in zoekmachines.
                        </li>
                    </ul>
                </div>

                {/* Technische Website Ondersteuning */}
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition hover:-translate-y-2">
                    <p className="text-xl font-semibold text-[#F37021]">Technische Website Ondersteuning</p>
                    <ul className="text-gray-600 mt-4 space-y-2">
                        <li>
                            <strong>Plug-ins & extensies</strong>: Installatie, configuratie en optimalisatie van
                            plug-ins voor extra functionaliteit.
                        </li>
                        <li>
                            <strong>Beveiligingsmodificaties</strong>: Inbouwen van extra beveiligingslagen zoals SSL,
                            firewalls en anti-spam tools.
                        </li>
                        <li>
                            <strong>Integraties</strong>: Koppelingen met externe systemen zoals CRM, e-mailmarketing of
                            betalingsproviders.
                        </li>
                        <li>
                            <strong>Legacy website updates</strong>: Moderniseren van verouderde websites met nieuwe
                            technologieën en design.
                        </li>
                        <li>
                            <strong>Performance optimalisatie</strong>: Snellere laadtijden, caching en
                            codeverbeteringen voor betere gebruikerservaring.
                        </li>
                        <li>
                            <strong>Technische troubleshooting</strong>: Snel oplossen van bugs, foutmeldingen en
                            compatibiliteitsproblemen.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ServicesOverview;
