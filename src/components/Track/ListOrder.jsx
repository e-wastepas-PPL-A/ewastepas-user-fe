import React from "react";

const ListOrder = () => {
  const orderStatuses = [
    {
      date: "16 Des",
      time: "10:42",
      title: "Menunggu Penjemputan",
      description:
        "Permintaan sudah diterima, menunggu kurir untuk memulai perjalanan.",
    },
    {
      date: "16 Des",
      time: "11:02",
      title: "Dalam Perjalanan",
      description: "Kurir sedang menuju lokasi penjemputan.",
    },
    {
      date: "16 Des",
      time: "11:42",
      title: "Sampah Telah Dijemput",
      description: "Sampah elektronik telah berhasil dijemput oleh kurir.",
    },
    {
      date: "16 Des",
      time: "12:42",
      title: "Pesanan Selesai",
      description:
        "Proses penjemputan selesai dan sampah berhasil diterima di tempat pengolahan.",
    },
    {
      date: "16 Des",
      time: "13:00",
      title: "Penjemputan Gagal",
      description:
        "Penjemputan tidak berhasil dilakukan karena alasan tertentu (Barang terlalu banyak).",
    },
  ];

  return (
    <div className="mx-auto  p-4 sm:p-6 border-2 rounded-lg w-full">
      <h3 className="text-lg sm:text-xl text-center font-bold mb-10">
        List Order Tracking
      </h3>
      <ul className="space-y-4 w-full">
        {orderStatuses.map((status, index) => (
          <li key={index} className="border-b pb-4 last:border-b-0 flex w-full">
            {/* Bagian Tanggal dan Waktu */}
            <div className="mr-6 text-center w-1/5">
              <p className="text-sm sm:text-base font-semibold">
                {status.date}
              </p>
              <p className="text-xs sm:text-sm text-gray-500">{status.time}</p>
            </div>
            {/* Bagian Konten Utama */}
            <div className="w-4/5">
              <h4 className="text-sm sm:text-base font-semibold">
                {status.title}
              </h4>
              <p className="text-xs sm:text-sm text-gray-600">
                {status.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListOrder;
