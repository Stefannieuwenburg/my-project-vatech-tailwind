import WhatsAppButtonGreen from "../assets/image/WhatsAppButtonGreen.png";
import {useNavigate} from "react-router-dom";
// Importeer de benodigde React Router hooks
// Zorg ervoor dat je de juiste versie van React Router gebruikt
const AfspraakComponent = () => {
    const navigate = useNavigate();

    const handleContactClick = () => {
        // Navigeren naar de contactpagina
        navigate("/contact");
    };
    return (
        <>
            <section className="bg-white py-16 px-6 md:px-12 lg:px-24 text-gray-800">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl italic md:text-4xl font-bold mb-6">
                        Laat mij jouw maatwerkwebsite ontwikkelen
                    </h2>
                    <p className="text-lg md:text-xl mb-4">
                        Wil jij volledige controle over de stijl, indeling en functies van je website? Wil je je echt
                        online onderscheiden? Maar vooral:
                        <span className="font-semibold text-orange-600">
                            {" "}
                            wil jij een website die jou nieuwe klanten en meer omzet oplevert?!
                        </span>
                    </p>
                    <p className="mb-4">
                        We zorgen ervoor dat jouw site precies aansluit bij jouw wensen en stijl. Geen grenzen, alleen
                        mogelijkheden.
                    </p>
                    <p className="mb-4">
                        Met een unieke website behoud je je identiteit en heb je de vrijheid om alles zelf in te
                        richten. ik bouwen voornamelijk in <span className="font-medium">wix.com</span> en met{" "}
                        <span className="font-medium">React met tailwind css framework </span>,voor op maat gemaakte
                        websites met een door mijzelf ontwikkelde basis die zorgt voor snelle, veilige en flexibele
                        websites.
                    </p>
                    <p className="mb-4">
                        Ondanks maatwerk kunnen we snel ontwikkelen en kosten besparen. Het beste van twee werelden:
                        maatwerk websites voor een betaalbare investering!
                    </p>
                    <button
                        onClick={handleContactClick}
                        className="bg-[#F37021] text-white px-6 py-3 rounded hover:bg-orange-600 transition"
                    >
                        Vraag direct een offerte aan
                    </button>
                </div>
            </section>
            <section className="bg-[#F6E4D4] rounded-full py-16 px-6 md:px-12 lg:px-24 text-gray-800">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl italic md:text-4xl font-bold mb-6">Waarom kiezen voor maatwerk?</h2>
                    <ul className="list-disc pl-6 space-y-4">
                        <li>Unieke branding die perfect aansluit bij jouw merk</li>
                        <li>Volledige flexibiliteit in design en functionaliteit</li>
                        <li>Betere gebruikservaring voor jouw doelgroep</li>
                        <li>SEO-optimalisatie vanaf de basis</li>
                        <li>Schaalbaarheid voor toekomstige groei</li>
                    </ul>
                </div>
                <div className="fixed bottom-8 right-18 z-50">
                    <a
                        aria-label="Chat on WhatsApp"
                        href="https://wa.me/31626142085?text=Hi%20Stefan%2C%20I%20found%20your%20website%20and%20wanted%20to%20connect!"
                    >
                        <img className="w-14 h-auto" alt="Chat on WhatsApp" src={WhatsAppButtonGreen} />
                    </a>
                </div>
            </section>
        </>
    );
};

export default AfspraakComponent;
