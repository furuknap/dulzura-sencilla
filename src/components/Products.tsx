
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  category: "tortas" | "galletas";
}

const products: Product[] = [
  {
    id: 1,
    name: "Torta de Chocolate",
    description: "Deliciosa torta de chocolate con ganache y frutos rojos",
    image: "/placeholder.svg",
    category: "tortas",
  },
  {
    id: 2,
    name: "Galletas de Mantequilla",
    description: "Galletas artesanales decoradas a mano",
    image: "/placeholder.svg",
    category: "galletas",
  },
  // Add more products as needed
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState<"todos" | "tortas" | "galletas">("todos");

  const filteredProducts = activeCategory === "todos"
    ? products
    : products.filter(product => product.category === activeCategory);

  return (
    <section id="productos" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-center">Nuestros Productos</h2>
        
        <div className="flex justify-center gap-4 mb-12">
          {["todos", "tortas", "galletas"].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category as typeof activeCategory)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeCategory === category
                  ? "bg-brown-900 text-white"
                  : "bg-brown-50 text-brown-600 hover:bg-brown-100"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="font-playfair text-xl font-semibold text-brown-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-brown-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
