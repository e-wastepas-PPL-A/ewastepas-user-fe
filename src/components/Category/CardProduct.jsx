import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const ProductCard = ({ image, title, points }) => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="relative w-full h-50 bg-secondary rounded-lg shadow-md flex flex-col items-center justify-between p-4">
      {/* Points */}
      <div className="absolute -top-4 -right-4 bg-secondary text-white text-sm rounded-full w-20 h-20 flex flex-col items-center justify-center">
        <span className="text-lg font-bold">{points}</span>
        <span className="text-xs">Points</span>
      </div>

      {/* Image */}
      <div className="w-full h-[250px] bg-white rounded-md flex items-center justify-center">
        <img src={image} alt={title} className="w-full h-full object-contain" />
      </div>

      {/* Title */}
      <div className="text-center mt-2">
        <p className="text-white font-semibold text-lg">{title}</p>
      </div>

      {/* Quantity */}
      <div className="flex items-center mt-2 space-x-4 bg-white rounded-full px-4 py-2">
        <button
          onClick={handleDecrement}
          className="bg-gray-300 text-gray-800 rounded-full w-10 h-7 flex items-center justify-center"
        >
          <FiMinus />
        </button>
        <span className="text-gray-700">{count}</span>
        <button
          onClick={handleIncrement}
          className="bg-gray-300 text-gray-800 rounded-full w-10 h-7 flex items-center justify-center"
        >
          <FiPlus />
        </button>
      </div>
    </div>
  );
};

const CardProduct = () => {
  const products = [
    { id: 1, image: "/images/kulkas.png", title: "Kulkas", points: 50 },
    { id: 2, image: "/images/kulkas.png", title: "Kulkas", points: 50 },
    { id: 3, image: "/images/kulkas.png", title: "Kulkas", points: 50 },
    { id: 4, image: "/images/kulkas.png", title: "Kulkas", points: 50 },
    { id: 5, image: "/images/kulkas.png", title: "Kulkas", points: 50 },
    { id: 6, image: "/images/kulkas.png", title: "Kulkas", points: 50 },
  ];

  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            points={product.points}
          />
        ))}
      </div>
    </div>
  );
};

export default CardProduct;
