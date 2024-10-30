import React from "react";
import { Link } from "react-router-dom";

const Summary = () => {
  return (
    <div className="w-full lg:w-1/4 bg-white p-4 sm:p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-4">Ringkasan Sampah</h3>
      <div className="border-t border-gray-300 mt-2 pt-4">
        <div className="flex justify-between text-gray-700 mb-4">
          <span>Total Sampah</span>
          <span>1</span>
        </div>
      </div>
      <Link
        to="/CheckoutPage"
        className="bg-primary text-white rounded-md px-[23px] py-2 shadow-md items-center justify-center w-full text-center ring-white ring-1 focus:outline-double sm:justify-between sm:text-left"
      >
        Konfirmasi Sampah
      </Link>
    </div>
  );
};

export default Summary;
