import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiPlus, FiMinus, FiArrowRight } from "react-icons/fi";

const ProductCard = ({ image, title, points, onIncrement, onDecrement }) => {
  const [count, setCount] = useState(0); // Set nilai

  const handleIncrement = () => {
    setCount(count + 1);
    onIncrement();
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
      onDecrement();
    }
  };

  return (
    <div className="relative w-full h-50 bg-primary rounded-lg shadow-md flex flex-col items-center justify-between p-4">
      {/* Points */}
      <div className="absolute -top-4 -right-4 bg-primary text-white text-sm rounded-full w-20 h-20 flex flex-col items-center justify-center">
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

/* Data Product */
const CardProduct = () => {
  const products = [
    { id: 1, image: "/images/kulkas.png", title: "Kulkas", points: 50 },
    { id: 2, image: "/images/kulkas.png", title: "Kulkas", points: 50 },
    { id: 3, image: "/images/kulkas.png", title: "Kulkas", points: 50 },
    { id: 4, image: "/images/kulkas.png", title: "Kulkas", points: 50 },
    { id: 5, image: "/images/kulkas.png", title: "Kulkas", points: 50 },
    { id: 6, image: "/images/kulkas.png", title: "Kulkas", points: 50 },
  ];

  // Button Total Item
  const TotalItemButton = ({ totalItems }) => {
    return (
      <div className="fixed bottom-4 w-full flex justify-center -ml-16">
        <Link
          to="/CartPage"
          className="bg-white text-primary font-bold rounded-full px-6 py-3 shadow-md flex items-center justify-between w-full text-left ring-2 ring-primary focus:outline-double sm:w-auto lg:w-[500px] "
        >
          <span>Total {totalItems} item</span>
          <FiArrowRight className="text-primary text-lg" />
        </Link>
      </div>
    );
  };

  const [totalItems, setTotalItems] = useState(0); // Set nilai

  const incrementTotalItems = () => setTotalItems(totalItems + 1);
  const decrementTotalItems = () =>
    setTotalItems(totalItems > 0 ? totalItems - 1 : 0);

  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            points={product.points}
            onIncrement={incrementTotalItems}
            onDecrement={decrementTotalItems}
          />
        ))}
      </div>

      {totalItems > 0 && <TotalItemButton totalItems={totalItems} />}
    </div>
  );
};

export default CardProduct;
