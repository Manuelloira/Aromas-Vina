import React from "react";
import { fotosVino } from "../utils/fotosVino";

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  region: string;
}

interface ProductsProps {
  products: Product[];
}

const Products: React.FC<ProductsProps> = ({ products }) => {
  return (
    <section className="p-8 bg-gray-50 flex-grow">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Nuestros Vinos
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105"
          >
            <div className="w-full h-64 overflow-hidden">
              <img
                src={fotosVino[product.id]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{product.description}</p>
              <p className="text-lg font-bold text-blue-600 mb-4">
                {product.price}
              </p>
              <button
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg text-sm hover:bg-blue-600 transition duration-300"
                onClick={() => alert(`Más información sobre ${product.name}`)}
              >
                Más información
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;