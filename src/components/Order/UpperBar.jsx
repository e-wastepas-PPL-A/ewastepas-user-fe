import React from "react";

const UpperBar = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex mb-4 border rounded-lg border-gray-200">
      <button
        onClick={() => setActiveTab("ongoing")}
        className={`flex-1 text-center py-2 ${
          activeTab === "ongoing"
            ? "text-white bg-primary font-semibold"
            : "text-gray-600 border-b"
        } rounded-t-lg`}
      >
        On Going
      </button>
      <button
        onClick={() => setActiveTab("history")}
        className={`flex-1 text-center py-2 ${
          activeTab === "history"
            ? "text-white bg-primary font-semibold"
            : "text-gray-600 border-b"
        } rounded-t-lg`}
      >
        Histori
      </button>
    </div>
  );
};

export default UpperBar;
