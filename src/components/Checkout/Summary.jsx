import React from "react";

const Summary = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h2 className="text-lg font-bold mb-4">Summary Ewaste</h2>
      <div className="flex justify-between mb-2">
        <p>Total Ewaste</p> <p>2</p>
      </div>
      <div className="flex justify-between mb-4">
        <p>Total Points</p> <p>50</p>
      </div>
      <button className="w-full bg-primary text-white py-2 rounded-md font-semibold">
        Confirm Ewaste
      </button>
    </div>
  );
};

export default Summary;
