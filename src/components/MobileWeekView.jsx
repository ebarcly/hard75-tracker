import React from "react";

const MobileWeekView = ({ currentDay, allDays }) => {
  const getWeekDays = () => {
    const start = Math.max(1, currentDay - 6);
    const end = Math.min(75, currentDay + 6);
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 mb-6 border border-white/10">
      <h3 className="text-white font-semibold mb-4">Week Overview</h3>
      <div className="grid grid-cols-7 gap-1">
        {getWeekDays().map((day) => {
          const dayData = allDays[day];
          const dayComplete = dayData && Object.values(dayData).every(Boolean);
          const isToday = day === currentDay;

          return (
            <div
              key={day}
              className={`p-2 rounded-lg text-center text-xs transition-all ${
                isToday
                  ? "bg-purple-600 text-white ring-2 ring-purple-300"
                  : dayComplete
                  ? "bg-green-500/20 text-green-200"
                  : day < currentDay
                  ? "bg-red-500/20 text-red-200"
                  : "bg-white/5 text-gray-400"
              }`}
            >
              <div className="font-medium">{day}</div>
              {dayComplete && (
                <div className="w-2 h-2 bg-green-400 rounded-full mx-auto mt-1" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MobileWeekView;
