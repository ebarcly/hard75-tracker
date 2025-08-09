import React from "react";
import { Calendar, Flame, CheckCircle2, Circle } from "lucide-react";

const StatsBar = ({
  currentDay,
  streak,
  completedTasks,
  totalTasks,
  progressPercentage,
  isDayComplete,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-purple-200 text-sm">Current Day</p>
            <p className="text-2xl font-bold text-white">{currentDay}/75</p>
          </div>
          <Calendar className="text-purple-300" size={24} />
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-purple-200 text-sm">Streak</p>
            <p className="text-2xl font-bold text-white">{streak}</p>
          </div>
          <Flame className="text-orange-300" size={24} />
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
        <div>
          <p className="text-purple-200 text-sm">Today's Progress</p>
          <div className="flex items-center gap-2 mt-1">
            <div className="flex-1 bg-white/20 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <span className="text-white text-sm">
              {completedTasks}/{totalTasks}
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
        <div className="text-center">
          {isDayComplete ? (
            <div className="text-green-300">
              <CheckCircle2 size={24} className="mx-auto mb-1" />
              <p className="text-sm">Day Complete!</p>
            </div>
          ) : (
            <div className="text-yellow-300">
              <Circle size={24} className="mx-auto mb-1" />
              <p className="text-sm">In Progress</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatsBar;
