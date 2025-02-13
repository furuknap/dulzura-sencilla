
const About = () => {
  return (
    <section id="sobre-nosotros" className="py-20 px-4 bg-brown-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="section-title">Sobre Nosotros</h2>
            <p className="text-brown-600 leading-relaxed">
              En Azúcar Morena, cada creación es una obra de arte dulce, elaborada con los mejores
              ingredientes y mucho amor. Desde nuestra cocina en Manizales, llevamos la dulzura
              artesanal a tu mesa.
            </p>
            <p className="text-brown-600 leading-relaxed">
              Nuestra pasión por la repostería se refleja en cada detalle, desde la selección de
              ingredientes hasta la decoración final de nuestros productos.
            </p>
          </div>
          <div className="aspect-square rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg"
              alt="Sobre Azúcar Morena"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
