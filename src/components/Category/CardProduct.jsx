import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../Modal";

// Data products
const productsData = [
  {
    title: "Laptop",
    points: 30,
    image: "/images/kulkas.png",
    bgImage: "/images/pattern.jpg",
  },
  {
    title: "Laptop",
    points: 30,
    image: "/images/kulkas.png",
    bgImage: "/images/pattern.jpg",
  },
  {
    title: "Laptop",
    points: 30,
    image: "/images/kulkas.png",
    bgImage: "/images/pattern.jpg",
  },
];

const Card = ({ title, points, image, bgImage, onAddToCart }) => {
  return (
    <div className="w-full mx-3">
      <div className="bg-white shadow-lg rounded-xl overflow-hidden w-64 flex flex-col items-center">
        {/* Background*/}
        <div
          className="relative w-full h-52"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Image Sampah */}
          <img
            src={image}
            alt={title}
            className="absolute top-5 left-1/2 transform -translate-x-1/2 w-44 h-44 object-contain z-10"
          />
        </div>
        {/* Title dan poin */}
        <div className="text-center mt-6 px-6">
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          <p className="text-primary text-lg font-medium">{points} Points</p>
        </div>
        {/* Button Add to Cart */}
        <button
          onClick={() => onAddToCart(title)} // Call the handler passed from parent
          className="flex items-center justify-center bg-primary font-semibold text-white rounded-full mt-2 mb-4 w-56 py-2 shadow-md transform transition-transform duration-200 hover:scale-105"
        >
          Masukkan ke keranjang
        </button>
      </div>
    </div>
  );
};

const CardProduct = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  const handleAddToCart = (title) => {
    setSelectedProduct(title); // Set the selected product title
    setModalVisible(true); // Show the modal
  };

  const closeModal = () => {
    setModalVisible(false); // Hide the modal
    setSelectedProduct(""); // Reset the selected product
  };

  return (
    <div className="flex items-center justify-center p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {productsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            points={card.points}
            image={card.image}
            bgImage={card.bgImage}
            onAddToCart={handleAddToCart} // Pass the handler to Card
          />
        ))}
      </div>
      {modalVisible && (
        <Modal
          title={`${selectedProduct} telah dimasukkan ke keranjang`}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default CardProduct;
