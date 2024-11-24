import React, { useState } from "react";
import SideBar from "../components/SideBar";
import UpperBar from "../components/Order/UpperBar";
import OnGoing from "../components/Order/OnGoing";
import History from "../components/Order/History";

const OrderPage = () => {
  const [activeTab, setActiveTab] = useState("ongoing");

  return (
    <div className="flex p-10 min-h-screen pt-36">
      <SideBar />
      <div className="w-full bg-white p-6 rounded-xl shadow-xl ml-8">
        <UpperBar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="mt-4">
          {activeTab === "ongoing" && <OnGoing />}
          {activeTab === "history" && <History />}
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
