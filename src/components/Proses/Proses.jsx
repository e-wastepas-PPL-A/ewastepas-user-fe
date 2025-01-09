const Proses = () => {
  return (
    <div className="container mx-auto sm:px-36 px-20 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 transition-transform hover:scale-105 w-full h-auto flex flex-col items-center justify-center">
            <h2 className="text-[#1e4b8f] text-xl font-bold mb-4 text-center">
              PROSES 1
            </h2>
            <div className="relative w-48 h-48">
              <img
                src="/images/proses1.png"
                alt="Lokasi dan jadwal penjemputan"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <p className="text-gray-600 text-center max-w-xs sm:text-base text-sm">
            Tentukan lokasi dan jadwal penjemputan sampah elektronik dengan
            mudah melalui aplikasi.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 transition-transform hover:scale-105 w-full h-auto flex flex-col items-center justify-center">
            <h2 className="text-[#1e4b8f] text-xl font-bold mb-4 text-center">
              PROSES 2
            </h2>
            <div className="relative w-48 h-48">
              <img
                src="/images/proses2.png"
                alt="Konfirmasi penjemputan"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <p className="text-gray-600 text-center max-w-xs sm:text-base text-sm">
            Konfirmasi jadwal penjemputan sampah elektronik melalui aplikasi.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 transition-transform hover:scale-105 w-full h-auto flex flex-col items-center justify-center">
            <h2 className="text-[#1e4b8f] text-xl font-bold mb-4 text-center">
              PROSES 3
            </h2>
            <div className="relative w-48 h-48">
              <img
                src="/images/proses3.png"
                alt="Penjemputan dan pengolahan"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <p className="text-gray-600 text-center max-w-xs sm:text-base text-sm">
            Tim kami akan menjemput sampah elektronik sesuai jadwal yang
            dikonfirmasi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Proses;
