import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const Address = () => {
  return (
    <div>
      <div className="flex text-primary">
        <FaLocationDot className="mr-2 mt-1" />
        <h2 className="text-xl font-bold mb-2">Alamat Penjemputan</h2>
      </div>
      <div className="p-4 bg-gray-100 rounded-md">
        <p className="font-bold">Aufaa Husniati</p>
        <p>
          jl. Aki padma selatan, No. 45, 02/07 (Depan masjid al-marhamah),
          Babakan ciparay, Kota Bandung, Jawa Barat, 6285156983812
        </p>
        <div className="mt-4 space-x-2">
          <button className="text-sm font-semibold text-blue-600">
            Ganti Alamat
          </button>
        </div>
      </div>
    </div>
  );
};

export default Address;
