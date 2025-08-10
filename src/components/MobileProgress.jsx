import React from "react";
import { CheckCircle2 } from "lucide-react";

const MobileProgress = ({
  completedTasks,
  totalTasks,
  progressPercentage,
  isDayComplete,
}) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 mb-6 border border-white/10">
      <div className="flex items-center justify-between mb-3">
        <p className="text-purple-200 text-sm font-medium">Today's Progress</p>
        <span className="text-white text-sm font-bold">
          {completedTasks}/{totalTasks}
        </span>
      </div>
      <div className="w-full bg-white/10 rounded-full h-3 mb-3">
        <div
          className="bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full transition-all duration-700 ease-out"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
      {isDayComplete ? (
        <div className="flex items-center gap-2 text-green-300 text-sm">
          <CheckCircle2 size={16} />
          <span className="font-medium">Day Complete! 🎉</span>
        </div>
      ) : (
        <p className="text-gray-400 text-xs">
          {totalTasks - completedTasks} tasks remaining
        </p>
      )}
    </div>
  );
};

export default MobileProgress;
