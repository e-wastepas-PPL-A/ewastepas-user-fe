// import { useState } from 'react'
import "../styles/style.css";
import Navbar from "../components/Navbar/Navbar";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-16 mt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center md:text-left mt-10">
            <h1 className="text-4xl font-bold mb-4 drop-shadow-lg leading-normal">
              JUAL, DAUR ULANG DAN SELAMATKAN LINGKUNGAN!
            </h1>
            <p className="text-lg mb-8 mt-8">
              Dengan menjual dan mendaur ulang, Anda berkontribusi dalam
              mengurangi limbah elektronik dan menjaga kelestarian lingkungan.
            </p>
            <button className="bg-primary  text-white font-medium py-2 px-3 rounded-2xl flex items-center">
              Baca Selengkapnya
              <svg
                className="pl-2"
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  d="M3 6.804v10.392c0 1.54 1.667 2.502 3 1.732l3-1.732V6.804L6 5.072c-1.333-.77-3 .192-3 1.732Zm18 3.464c1.333.77 1.333 2.694 0 3.464l-9 5.196c-1.333.77-3-.192-3-1.732V6.804c0-1.54 1.667-2.502 3-1.732z"
                ></path>
              </svg>
            </button>
          </div>
          <div className="-mt-12 ">
            <img
              src="/public/images/landingPage.png"
              alt="Gambar sampah elektronik"
              className="rounded-lg w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}
