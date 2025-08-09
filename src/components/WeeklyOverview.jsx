import React from "react";
import { CheckCircle2 } from "lucide-react";

const WeeklyOverview = ({ currentDay, allDays }) => {
  const getWeekDays = () => {
    const start = Math.max(1, currentDay - 6);
    const end = Math.min(75, currentDay + 6);
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  return (
    <div className="bg-white/10 backdrop-blur rounded-lg p-6 border border-white/20 mb-8">
      <h3 className="text-xl font-bold text-white mb-4">Weekly Overview</h3>
      <div className="grid grid-cols-7 gap-2">
        {getWeekDays().map((day) => {
          const dayData = allDays[day];
          const dayComplete = dayData && Object.values(dayData).every(Boolean);
          const isToday = day === currentDay;

          return (
            <div
              key={day}
              className={`p-2 rounded text-center text-sm transition-all ${
                isToday
                  ? "bg-purple-600 text-white ring-2 ring-purple-300"
                  : dayComplete
                  ? "bg-green-500/30 text-green-100"
                  : day < currentDay
                  ? "bg-red-500/30 text-red-100"
                  : "bg-white/10 text-gray-300"
              }`}
            >
              <div className="font-medium">Day {day}</div>
              {dayComplete && (
                <CheckCircle2 size={14} className="mx-auto mt-1" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeeklyOverview;
