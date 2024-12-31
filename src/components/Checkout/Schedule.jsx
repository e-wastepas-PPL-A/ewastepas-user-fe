import React from "react";

const Schedule = ({
  minDate,
  maxDate,
  pickupTime,
  setPickupTime,
  timeOptions,
}) => {
  return (
    <div className="w-full mx-auto max-w-lg">
      <div className="bg-gray-100 p-4 rounded-lg shadow-md ">
        {/* Judul */}
        <h2 className="text-base sm:text-lg font-bold mb-4">
          Jadwal Penjemputan
        </h2>

        <div className="space-y-4">
          <div>
            <label
              htmlFor="pickupDate"
              className="block text-sm sm:text-base font-medium text-gray-700"
            >
              Tanggal Penjemputan
            </label>
            <input
              type="date"
              id="pickupDate"
              min={minDate}
              max={maxDate}
              className="mt-1 w-full border border-gray-300 rounded-md p-2 text-sm sm:text-base"
            />
          </div>

          <div>
            <label
              htmlFor="pickupTime"
              className="block text-sm sm:text-base font-medium text-gray-700"
            >
              Waktu Penjemputan
            </label>
            <select
              id="pickupTime"
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
              className="mt-1 w-full border border-gray-300 rounded-md p-2 text-sm sm:text-base"
            >
              {timeOptions.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
