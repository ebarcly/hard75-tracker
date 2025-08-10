import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MobileNavigation = ({
  currentDay,
  isDayComplete,
  onPrevDay,
  onNextDay,
}) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <button
        onClick={onPrevDay}
        disabled={currentDay <= 1}
        className="flex items-center gap-2 px-4 py-3 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed text-white rounded-2xl border border-white/10 transition-all active:scale-95"
      >
        <ChevronLeft size={18} />
        <span className="text-sm">Previous</span>
      </button>

      <div className="text-center">
        <p className="text-white font-semibold">Day {currentDay}</p>
        <p className="text-purple-200 text-xs">{75 - currentDay} days left</p>
      </div>

      <button
        onClick={onNextDay}
        disabled={currentDay >= 75 || !isDayComplete}
        className="flex items-center gap-2 px-4 py-3 bg-purple-600 hover:bg-purple-700 disabled:opacity-30 disabled:cursor-not-allowed text-white rounded-2xl transition-all active:scale-95"
      >
        <span className="text-sm">Next</span>
        <ChevronRight size={18} />
      </button>
    </div>
  );
};

export default MobileNavigation;
