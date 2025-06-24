import VideoBal from "../assets/video/bal.mp4";

const Hero = () => {
  return (
    <section id="hero" className="relative w-full min-h-screen md:h-[80vh] flex items-center justify-center text-gray-800 overflow-hidden mt-16 md:mt-0"> {/* mt-16 om ruimte te maken voor de fixed navbar */}
      {/* Video Placeholder */}
      <video
        autoPlay
        loop
        muted

        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={VideoBal} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

     

      {/* Inhoud Hero */}
      <div className="relative z-20 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          Jouw Partner in Technologische Efficiëntie
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">

          Ontdek hoe een gespecialiseerde Virtual Assistant jouw bedrijf naar een hoger niveau tilt.
        </p>
        <a
          href="#how-we-work"
         className="bg-[#F37021] text-white px-6 py-3 rounded hover:bg-orange-600 transition"
        rel="noopener noreferrer">
          Start nu jouw project
        </a>
      </div>
    </section>
  );
};

export default Hero;