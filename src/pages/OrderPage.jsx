import React, { useState } from "react";
import SideBar from "../components/SideBar";
import OnGoing from "../Components/Order/OnGoing";
import History from "../Components/Order/History";

const OrderPage = () => {
  const [activeTab, setActiveTab] = useState("ongoing");

  return (
    <div className="flex p-10 min-h-screen pt-36">
      <SideBar />
      <div className="ml-8 w-full">
        <div className="bg-white p-6 rounded-xl shadow-xl">
          {/* Tab buttons */}
          <div className="flex">
            <button
              className={`flex-1 text-center py-2 rounded-xl ${
                activeTab === "ongoing"
                  ? "text-white bg-primary font-semibold"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("ongoing")}
            >
              On Going
            </button>
            <button
              className={`flex-1 text-center py-2 rounded-xl ${
                activeTab === "history"
                  ? "text-white bg-primary font-semibold"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("history")}
            >
              History
            </button>
          </div>

          <div className="mt-4">
            {activeTab === "ongoing" && <OnGoing />}
            {activeTab === "history" && <History />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;