const ServicesOverview = () => {
    return (
        <section id="services" className="min-h-screen rounded-full py-16 md:py-24 bg-orange-400 text-white">
            <div className="container mx-auto px-4 md:px-8">
                <h2 className="text-center italic text-3xl md:text-4xl font-bold mb-6">welke diensten bied ik aan?</h2>
                <p className="text-center text-lg md:text-xl mb-8 mx-8">
                    Als ervaren webontwikkelaar bied ik een scala aan diensten aan om jouw online aanwezigheid te
                    versterken. Van het bouwen van maatwerkwebsites tot het optimaliseren van bestaande platforms, ik
                    zorg ervoor dat jouw digitale oplossingen naadloos aansluiten bij jouw bedrijfsdoelen.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
                {/*  Website Ontwikkeling met Wix.com */}
                <div className="bg-white flex flex-col items-center p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                    <p className="text-xl font-semibold text-[#F37021]">Website Ontwikkeling met Wix.com</p>
                    <ul className="text-gray-600">
                        <strong>Waarom ik graag werk met Wix.com werk</strong>
                        <br />
                        Het stelt mij in staat om razendsnel professionele en visueel aantrekkelijke websites te
                        bouwen,Voor klanten betekent dat: snel online, zonder concessies te doen aan kwaliteit.
                   
                    <li className="text-gray-600">
                        <strong>Wat zijn de voordelen voor jou als klant?</strong>
                  </li>
                        <li className="text-gray-600">
                            
                                <strong>Snel resultaat</strong>: Omdat Wix werkt met een intuïtieve drag & drop-editor,
                                kan ik snel schakelen en de website live zetten zonder technische rompslomp.
                            </li>
                            <li>
                                <strong>Makkelijk zelf aan te passen</strong>:Na oplevering kun je zélf teksten, foto's
                                en zelfs hele secties wijzigen – zonder afhankelijk te zijn van een webbouwer.
                            </li>
                            <li>
                                <strong>Betrouwbare hosting & beveiliging</strong>:Wix regelt automatisch je webhosting,
                                beveiliging en backups. Dat betekent: geen stress over downtime of updates.{" "}
                            </li>
                            <li>
                                <strong>Geïntegreerde tools</strong>:Denk aan Wix Bookings voor afspraken, Wix Stores
                                voor webshops of Wix Blog voor content. Alles werkt naadloos samen.
                            </li>
                            <li>
                                <strong>SEO & mobielvriendelijkheid</strong>:De websites zijn standaard responsive en ik
                                zorg ervoor dat ze goed geoptimaliseerd zijn voor zoekmachines zoals Google.
                            </li>
                            <li>
                                <strong>Betaalbare oplossing</strong>:Voor ondernemers die een professionele site willen
                                zonder te investeren in maatwerk development is Wix een perfecte balans tussen
                                flexibiliteit en prijs.
                            </li>
                        </ul>
                </div>
                {/*  Website met React en Tailwind CSS */}
                <div className="bg-white flex flex-col items-center p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                    <p className="text-xl font-semibold text-[#F37021] ">
                       Website met 
                        React en Tailwind CSS
                    </p>
                    <ul className="text-gray-600">
                        <li className="text-gray-600">
                            <strong>Waarom kiezen voor React en Tailwind CSS?</strong>
                        </li>
                        <li>
                            React en Tailwind CSS vormen samen een krachtige combinatie voor het ontwikkelen van snelle,
                            schaalbare en volledig op maat gemaakte websites.
                        </li>
                        <li className="text-gray-600">
                            <strong>Wat zijn de voordelen voor jou als klant?: </strong>
                            maximale vrijheid in design en functionaliteit,zonder dat je vastzit aan templates of
                            beperkingen van een CMS.
                        </li>
                        <li className="text-gray-600">
                            <strong>Enkele voordelen van deze aanpak zijn:</strong>
                        </li>
                        <li>
                            <strong>Volledig maatwerk</strong>:Ik bouw de website vanaf de grond op, zonder sjablonen.
                            Alles wordt afgestemd op jouw merkidentiteit en doelstellingen.
                        </li>
                        <li>
                            <strong>Snelle laadtijden</strong>: React en Tailwind produceren schone, geoptimaliseerde
                            code — wat resulteert in bliksemsnelle pagina’s.
                        </li>
                        <li>
                            <strong>Modulair en schaalbaar</strong>:Nieuwe functionaliteiten of secties kunnen eenvoudig
                            worden toegevoegd, zodat je website moeiteloos met je bedrijf meegroeit.
                        </li>
                        <li>
                            <strong>Consistente styling</strong>:Dankzij Tailwind CSS is het design consistent, modern
                            én eenvoudig te onderhouden.
                        </li>
                        <li>
                            <strong>Mobielvriendelijk en responsive</strong>:Jouw site wordt volledig mobiel
                            geoptimaliseerd en ziet er strak uit op elk schermformaat.
                        </li>
                        <li>
                            <strong>Flexibele integraties</strong>:Van API-koppelingen tot animaties en formulieren: met
                            React is vrijwel alles mogelijk.
                        </li>
                      </ul>
                </div>
                {/* Website Onderhoud en Updates */}
                <div className="bg-white flex flex-col items-center p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                    <p className="text-xl font-semibold text-[#F37021] ">Website Onderhoud en Updates</p>
                        <ul className="text-gray-600">
                            <li>
                               <strong>Regelmatig onderhoud is cruciaal</strong> om de prestaties, veiligheid en functionaliteit van je
                                website te waarborgen. Het voorkomt problemen en zorgt ervoor dat je site altijd up-to-date
                                is.
                            </li>
                            <li>
                                <strong>Regelmatige software-updates</strong>: Houd je CMS, plugins en thema’s
                                up-to-date om optimale prestaties en veiligheid te garanderen.
                            </li>
                            <li>
                                <strong>Beveiligingscontroles</strong>: Bescherm je website tegen hackers en malware met
                                frequente beveiligingspatches en monitoring.
                            </li>
                            <li>
                                <strong>Back-ups en herstel</strong>: Maak automatisch back-ups zodat je je website snel
                                kunt herstellen bij problemen of dataverlies.
                            </li>
                            <li>
                                <strong>Prestatie-optimalisatie</strong>: Verbeter de laadsnelheid en gebruikerservaring
                                door technische optimalisaties en monitoring.
                            </li>
                            <li>
                                <strong>Content- en SEO-beheer</strong>: Houd je content actueel en geoptimaliseerd voor
                                zoekmachines om je online zichtbaarheid te vergroten.
                            </li>
                        </ul>
                </div>
                {/*  Basis IT Ondersteuning */}
                <div className="bg-white flex flex-col items-center p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                    <p className="text-xl font-semibold text-[#F37021]">Basis IT Ondersteuning</p>
                        <ul className="text-gray-600">
                            <li>
                                <strong>Wat is basis IT-ondersteuning?</strong> Het omvat de essentiële diensten die
                                nodig zijn om je systemen soepel te laten draaien, zonder in te boeten op kwaliteit of
                                veiligheid.
                            </li>
                            <li>
                                <strong>Monitoring en foutopsporing</strong>: We houden je systemen actief in de gaten
                                en signaleren storingen voordat ze problemen veroorzaken.
                            </li>
                            <li>
                                <strong>Software- en systeemupdates</strong>: Regelmatige updates zorgen ervoor dat je
                                systemen veilig en up-to-date blijven.
                            </li>
                            <li>
                                <strong>Beveiligingsmaatregelen</strong>: We implementeren basisbeveiliging zoals
                                firewalls, antivirus en toegangsbeheer om je data te beschermen.
                            </li>
                            <li>
                                <strong>Back-up en herstel</strong>: Automatische back-ups zorgen ervoor dat je gegevens
                                veilig zijn en snel hersteld kunnen worden bij calamiteiten.
                            </li>
                            <li>
                                <strong>Gebruikersondersteuning</strong>: We bieden hulp bij dagelijkse IT-vragen, zoals
                                e-mailinstellingen, printerproblemen of netwerkverbindingen.
                            </li>
                        </ul>
                </div>
            </div>
        </section>
    );
};

export default ServicesOverview;
