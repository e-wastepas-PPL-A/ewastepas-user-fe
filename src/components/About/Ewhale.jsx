import React from "react";

const Ewhale = () => {
  return (
    <div className="bg-gray-50 py-12 px-6 sm:py-16 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
          Tentang E-Whale
        </h2>
        <p className="text-base sm:text-lg text-gray-600">
          Solusi inovatif dalam pengelolaan sampah elektronik.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
        <div className="flex justify-center">
          <img
            src="/images/waste.jpg"
            alt="Team working"
            className="w-full max-w-md sm:max-w-lg md:max-w-none rounded-lg shadow-md"
          />
        </div>

        <div>
          <p className="text-gray-700 sm:text-base text-sm mb-6 text-justify">
            E-Whale didirikan dengan visi menciptakan masa depan yang lebih
            hijau melalui pengelolaan limbah elektronik. Nama 'E-Whale'
            terinspirasi dari paus, simbol megah ekosistem laut, yang sering
            terancam oleh limbah, termasuk sampah elektronik yang mencemari
            perairan. Kami percaya bahwa teknologi dapat menjadi solusi untuk
            mengurangi dampak buruk limbah elektronik terhadap lingkungan.
            e-whale hadir sebagai platform daur ulang elektronik yang
            menghubungkan masyarakat dengan layanan daur ulang yang mudah,
            efisien, dan bertanggung jawab.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ewhale;
