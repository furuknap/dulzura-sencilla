
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contacto" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-center">Contáctanos</h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto bg-brown-100 rounded-full flex items-center justify-center mb-4">
              <Phone className="text-brown-600" size={24} />
            </div>
            <h3 className="font-playfair font-semibold text-lg mb-2">Teléfono</h3>
            <p className="text-brown-600">+57 123 456 7890</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 mx-auto bg-brown-100 rounded-full flex items-center justify-center mb-4">
              <Mail className="text-brown-600" size={24} />
            </div>
            <h3 className="font-playfair font-semibold text-lg mb-2">Email</h3>
            <p className="text-brown-600">contacto@azucarmorena.co</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 mx-auto bg-brown-100 rounded-full flex items-center justify-center mb-4">
              <MapPin className="text-brown-600" size={24} />
            </div>
            <h3 className="font-playfair font-semibold text-lg mb-2">Ubicación</h3>
            <p className="text-brown-600">Manizales, Colombia</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
