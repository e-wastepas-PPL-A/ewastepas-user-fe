import React from "react";

const KurirInfo = () => {
  return (
    <div className="flex flex-col items-center p-4 border-2 rounded-lg">
      <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden mb-4">
        <img
          src="/images/hikel.jpg"
          name="Hikel Bahrul Hidayat"
          alt="Foto Kurir"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="text-lg font-semibold">Hikel Bahrul Hidayat</div>
    </div>
  );
};

export default KurirInfo;
