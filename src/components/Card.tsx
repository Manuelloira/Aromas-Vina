import React from 'react';

interface CardProps {
  image: string;
  name: string;
  description: string;
  price: string;
  onMoreInfo: () => void;
}

const Card: React.FC<CardProps> = ({ image, name, description, price, onMoreInfo }) => {
  return (
    <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      {/* Imagen del producto */}
      <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Contenido de la tarjeta */}
      <div className="p-6">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {name}
        </h5>
        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          {description}
        </p>
        <p className="block font-sans text-lg font-bold text-blue-600 mt-4">
          {price}
        </p>
      </div>
      {/* Botón de "Más información" */}
      <div className="p-6 pt-0">
        <button
          data-ripple-light="true"
          type="button"
          className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          onClick={onMoreInfo}
        >
          Más información
        </button>
      </div>
    </div>
  );
};

export default Card;