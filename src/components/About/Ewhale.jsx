import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Ewhale = () => {
  return (
    <div className="flex flex-col px-6 py-10 text-center bg-white md:px-16 lg:px-32">
      <h1 className="text-2xl font-bold text-blue-900 mb-6 sm:mr-28 lg:text-3xl">
        Tentang E-Whale
      </h1>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8">
        {/* Images */}
        <div className="relative mb-6 lg:mb-0">
          <LazyLoadImage
            src="/images/sampah.png"
            alt="Sampah Elektronik"
            className="max-w-72 sm:min-w-64 -translate-y-0 sm:-translate-y-16 rounded-full object-cover shadow-lg"
            effect="blur" // Efek blur saat gambar dimuat
          />
          {/* Small Circle */}
          {/* <LazyLoadImage
            src="/images/pattern.jpg"
            alt="Medical Research"
            className="absolute bottom-0 left-0 w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white object-cover shadow-md transform -translate-x-4 translate-y-4 md:-translate-x-6 md:translate-y-6"
            effect="blur"
          /> */}
        </div>

        {/* Description */}
        <div className="text-gray-700 text-center lg:text-left">
          <p className="text-sm md:text-base leading-relaxed text-justify">
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
