import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const kategoriData = [
  {
    image: "/images/kulkas.png",
    bgImage: "/images/bg.jpg",
    title: "Peralatan rumah tangga besar",
  },
  {
    image: "/images/kulkas.png",
    bgImage: "/images/bg.jpg",
    title: "Peralatan rumah tangga kecil",
  },
  {
    image: "/images/kulkas.png",
    bgImage: "/images/bg.jpg",
    title: "Mainan elektronik",
  },
];

const CardSlider = () => {
  const [activeCard, setActiveCard] = useState(null); // State untuk menyimpan card yang aktif

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleCardClick = (index) => {
    setActiveCard(index); // Mengubah kartu yang aktif saat di-klik
  };

  const Card = ({ image, bgImage, title, isActive, onClick }) => {
    return (
      <div
        onClick={onClick}
        className={`cursor-pointer transform transition-transform duration-300 
          ${isActive ? "scale-110" : "hover:scale-105"}`} // Kartu membesar saat di klik
      >
        <div
          className="relative w-full h-96 bg-cover bg-center rounded-xl shadow-lg"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Product image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={image}
              alt={title}
              className="w-full object-contain z-10"
            />
          </div>
        </div>
        {/* Content Section */}
        <div className="text-center mt-6 mb-12">
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto py-16">
      <Slider {...settings}>
        {kategoriData.map((card, index) => (
          <div key={index} className="px-4">
            <Card
              image={card.image}
              bgImage={card.bgImage}
              title={card.title}
              isActive={activeCard === index} // Menentukan apakah kartu ini yang sedang aktif
              onClick={() => handleCardClick(index)} // Menangani event klik pada kartu
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
