import React, { useState } from "react";
import { Link } from "react-router-dom";

const Summary = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleConfirmClick = () => {
    setShowAlert(true);

    // Menutup alert setelah beberapa detik
    setTimeout(() => setShowAlert(false), 1000);
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md w-full max-w-sm mx-auto">
      {/* Judul */}
      <h2 className="text-base sm:text-lg font-bold mb-4">Ringkasan E-Waste</h2>

      {/* Detail Ringkasan */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm sm:text-base">
          <p>Total E-Waste</p>
          <p>2</p>
        </div>
        <div className="flex justify-between text-sm sm:text-base">
          <p>Total Points</p>
          <p>50</p>
        </div>
      </div>

      {/* Tombol Konfirmasi */}
      <button
        onClick={handleConfirmClick}
        className="mt-4 w-full bg-primary text-white py-2 rounded-md font-semibold text-sm sm:text-base hover:bg-primary-dark transition"
      >
        Konfirmasi E-Waste
      </button>

      {/* Alert */}
      {showAlert && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center">
            {/* Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-green-500 mb-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <p className="sm:text-lg text-base font-medium">
              Penjemputan Dikonfirmasi
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Summary;
