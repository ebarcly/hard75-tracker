import React from "react";
import { useHard75Data } from "./hooks/useHard75Data";
import { calculateProgress } from "./utils/calculations";
import Header from "./components/Header";
import StatsBar from "./components/StatsBar";
import TaskGrid from "./components/TaskGrid";
import WeeklyOverview from "./components/WeeklyOverview";
import DeveloperTips from "./components/DeveloperTips";
import MotivationalQuote from "./components/MotivationalQuote";
import "./App.css";

function App() {
  const {
    currentDay,
    dailyTasks,
    allDays,
    streak,
    setStreak,
    updateTask,
    navigateToDay,
    resetChallenge,
  } = useHard75Data();

  const { completedTasks, totalTasks, progressPercentage, isDayComplete } =
    calculateProgress(dailyTasks);

  const handleTaskToggle = (taskId) => {
    const newValue = !dailyTasks[taskId];
    updateTask(taskId, newValue);

    // Update streak if day becomes complete
    if (
      !isDayComplete &&
      Object.values({ ...dailyTasks, [taskId]: newValue }).every(Boolean)
    ) {
      setStreak(streak + 1);
    }
  };

  const goToNextDay = () => {
    if (currentDay < 75 && isDayComplete) {
      navigateToDay(currentDay + 1);
    }
  };

  const goToPrevDay = () => {
    if (currentDay > 1) {
      navigateToDay(currentDay - 1);
    }
  };

  const handleReset = () => {
    if (
      window.confirm(
        "Are you sure you want to reset your Hard 75 challenge? This will clear all progress."
      )
    ) {
      resetChallenge();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <div className="max-w-4xl mx-auto">
        <Header />

        <StatsBar
          currentDay={currentDay}
          streak={streak}
          completedTasks={completedTasks}
          totalTasks={totalTasks}
          progressPercentage={progressPercentage}
          isDayComplete={isDayComplete}
        />

        {/* Day Navigation */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={goToPrevDay}
            disabled={currentDay <= 1}
            className="px-4 py-2 bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg border border-white/20 transition-colors"
          >
            ← Previous Day
          </button>
          <button
            onClick={goToNextDay}
            disabled={currentDay >= 75 || !isDayComplete}
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
          >
            Next Day →
          </button>
        </div>

        <TaskGrid dailyTasks={dailyTasks} onTaskToggle={handleTaskToggle} />
        <WeeklyOverview currentDay={currentDay} allDays={allDays} />
        <DeveloperTips />
        <MotivationalQuote />

        {/* Reset Button */}
        <div className="text-center">
          <button
            onClick={handleReset}
            className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
          >
            Reset Challenge
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
