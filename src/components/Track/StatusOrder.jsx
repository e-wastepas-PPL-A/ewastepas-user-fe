import React from "react";
import { BiTime } from "react-icons/bi";
import { FaTruck } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import { MdDoneAll } from "react-icons/md";
import { AiOutlineCloseCircle } from "react-icons/ai";

const StatusOrder = ({ status, handleStatusChange }) => {
  const steps = [
    { label: "Menunggu Penjemputan", icon: <BiTime /> },
    { label: "Dalam Perjalanan", icon: <FaTruck /> },
    { label: "Sampah Telah Dijemput", icon: <FiCheckCircle /> },
    { label: "Pesanan Selesai", icon: <MdDoneAll /> },
    { label: "Penjemputan Gagal", icon: <AiOutlineCloseCircle /> },
  ];

  return (
    <div className="flex items-center">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div
            className={`flex items-center justify-center rounded-full w-10 h-10 border-2 ${
              status >= index + 1
                ? "bg-green-500 text-white"
                : "bg-white text-gray-400"
            }`}
            onClick={() => handleStatusChange(index + 1)}
            title={step.label}
          >
            {step.icon}
          </div>
          {index < steps.length - 1 && (
            <div
              className={`flex-grow h-1 ${
                status > index + 1 ? "bg-green-500" : "bg-gray-400"
              } rounded-full`}
            ></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default StatusOrder;
