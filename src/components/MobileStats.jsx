import React from "react";
import { Calendar, Flame } from "lucide-react";

const MobileStats = ({ currentDay, streak }) => {
  return (
    <div className="grid grid-cols-2 gap-3 mb-6">
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-purple-500/20 rounded-xl">
            <Calendar className="text-purple-300" size={20} />
          </div>
          <div>
            <p className="text-purple-200 text-xs font-medium">Day</p>
            <p className="text-white text-xl font-bold">{currentDay}/75</p>
          </div>
        </div>
      </div>

      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-orange-500/20 rounded-xl">
            <Flame className="text-orange-300" size={20} />
          </div>
          <div>
            <p className="text-purple-200 text-xs font-medium">Streak</p>
            <p className="text-white text-xl font-bold">{streak}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileStats;
