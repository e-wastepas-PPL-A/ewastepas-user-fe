import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import SideBar from "../components/SideBar";
import StatusOrder from "../components/Track/StatusOrder";
import KurirInfo from "../components/Track/KurirInfo";
import Address from "../components/Track/Address";
import ListOrder from "../components/Track/ListOrder";

const TrackPage = () => {
  const [status, setStatus] = useState(1);

  return (
    <div className="flex pt-36 pr-20 pb-20 pl-10">
      <div className="h-screen sticky top-0">
        <SideBar />
      </div>

      <div className="w-full bg-white p-6 rounded-xl border shadow ml-8">
        <div className="flex items-center mb-4">
          <Link to="/OrderPage" className="flex items-center text-gray-600">
            <IoIosArrowBack className="mr-1" />
            Back
          </Link>
        </div>
        <h2 className="text-2xl font-bold mb-6 mt-6">Status Pesanan</h2>

        <StatusOrder status={status} handleStatusChange={setStatus} />

        <div className="w-full mt-8 grid grid-cols-2 gap-6">
          <KurirInfo />
          <ListOrder />
          <Address />
        </div>
      </div>
    </div>
  );
};

export default TrackPage;
