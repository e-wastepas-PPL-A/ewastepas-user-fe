import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-sky-950 text-white py-10">
      <div className="container mx-auto flex justify-between">
        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            Siap Mengelola Sampah Elektronik Anda?
          </h2>
          <p className="text-sm md:text-lg mb-6 max-w-xl">
            Ayo mulai langkah kecil untuk melindungi lingkungan dengan mendaur
            ulang sampah elektronik Anda bersama kami!
          </p>
        </div>
        <div>
          <Link
            to="RegisterPage"
            className="bg-white inline-flex items-center text-sm sm:text-xl text-primary sm:py-2 sm:px-4 px-3 py-2 rounded-md font-bold shadow hover:bg-gray-200 transition duration-300 space-x-2"
          >
            <span>Daftar Sekarang</span>
            <MdArrowOutward size={25} />
          </Link>
        </div>
      </div>
      <div className="container mx-auto text-center mt-4 border-t border-gray-300 pt-4">
        <h5 className="text-sm font-semibold -mb-4">
          Copyright © 2024 ewhale.
        </h5>
      </div>
    </footer>
  );
};

export default Footer;
