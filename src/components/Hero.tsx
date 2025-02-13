
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative bg-gradient-to-b from-brown-50 to-white px-4">
      <div className="text-center space-y-6 animate-fade-in">
        <h1 className="hero-text">
          Dulzura artesanal<br />en cada detalle
        </h1>
        <p className="text-lg md:text-xl text-brown-600 max-w-2xl mx-auto">
          Descubre nuestras deliciosas creaciones hechas con amor en Manizales
        </p>
      </div>
      
      <a
        href="#productos"
        className="absolute bottom-8 animate-bounce cursor-pointer"
        aria-label="Ver productos"
      >
        <ChevronDown className="text-brown-400 hover:text-brown-600 transition-colors" size={32} />
      </a>
    </section>
  );
};

export default Hero;
