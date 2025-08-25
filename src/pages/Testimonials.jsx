import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
    useEffect(() => {
        AOS.init({duration: 800, once: true});
    }, []);
    const testimonials = [
        {
            quote: "Sinds Stefan Nieuwenburg onze site heeft vernieuwd, merken we meteen verschilen. We hebben meer klanten, betere winst én een betrouwbare website zonder haperingen.Superblij met zijn werk!",
            name: "Melike Almaz",
            title: "Eigenaar, Go4Hair",
        },
        {
            quote: "Dankzij de nieuwe portfolio-pagina van Stefan Nieuwenburg ziet onze praktijk er online net zo professioneel uit als in het echt. We hebben sindsdien een duidelijke toename in nieuwe patiënten gezien. Fantastisch werk!",
            name: "Mine Yazıcı",
            title: "Portfolio Eigenaar",
        },
        {
            quote: "Stefan Nieuwenburg heeft voor mij een website gemaakt die perfect bij mijn doelgroep past. Het is gebruiksvriendelijk, visueel aantrekkelijk en zorgt voor een snelle bezoekersbeweging. en het resultaat is verbluffend. We hebben nu een moderne, gebruiksvriendelijke site die perfect aansluit bij onze doelgroep. Onze klanten zijn erg tevreden!",
            name: "Ebru Dargan",
            title: "Freelancer",
        },
    ];

    return (
        <section id="testimonials" className="min-h-screen py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-8 text-center">
                <div className="container mx-auto px-4 md:px-8">
                    <h2 className="text-center italic text-3xl md:text-4xl font-bold mb-6">
                        Wat mijn cliënten zeggen over mij service
                    </h2>
                    <p className="text-center text-lg md:text-xl mb-8 mx-8">
                        Lees de ervaringen van tevreden klanten die mijn diensten hebben gebruikt. Hun succesverhalen
                        zijn het bewijs van de impact die een goede Virtual Assistant kan maken.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-[#1F2630] p-8 rounded-lg shadow-md border border-gray-200"
                            data-aos="fade-left"
                            data-aos-delay={index * 150}
                        >
                            <div className="text-yellow-400 text-lg mb-2">★★★★★</div>
                            <p className="text-white italic mb-6">"{testimonial.quote}"</p>
                            <div className="flex items-center justify-center">
                                <div>
                                    <p className="font-semibold text-white">{testimonial.name}</p>
                                    <p className="text-sm text-white">{testimonial.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
