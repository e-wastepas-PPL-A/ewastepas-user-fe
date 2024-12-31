import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-sky-950 text-white py-10">
      <div className="container mx-auto flex flex-wrap justify-between items-center px-4">
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0 text-center lg:pl-16 lg:text-left">
          <h2 className="text-lg md:text-xl font-bold mb-4">
            Siap Mengelola Sampah Elektronik Anda?
          </h2>
          <p className="text-sm md:text-base mb-6 max-w-xl mx-auto lg:mx-0">
            Ayo mulai langkah kecil untuk melindungi lingkungan dengan mendaur
            ulang sampah elektronik Anda bersama kami!
          </p>
        </div>
        <div className="w-full lg:w-auto flex justify-center lg:justify-end lg:pr-20">
          <Link
            to="RegisterPage"
            className="bg-white inline-flex items-center text-primary text-sm lg:text-base lg:py-2 lg:px-4 py-3 px-3 rounded-md font-bold shadow hover:bg-gray-200 transition duration-300 space-x-2"
          >
            <span>Daftar Sekarang</span>
            <MdArrowOutward size={18} />
          </Link>
        </div>
      </div>
      <div className="container mx-auto text-center mt-4 border-t border-gray-300 pt-4">
        <h5 className="text-xs lg:text-sm font-semibold">
          Copyright © 2024 ewhale.
        </h5>
      </div>
    </footer>
  );
};

export default Footer;
