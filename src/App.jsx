import React, { useState } from "react";
import { useHard75Data } from "./hooks/useHard75Data";
import { calculateProgress } from "./utils/calculations";
import MobileHeader from "./components/MobileHeader";
import MobileStats from "./components/MobileStats";
import MobileProgress from "./components/MobileProgress";
import MobileTaskList from "./components/MobileTaskList";
import MobileWeekView from "./components/MobileWeekView";
import MobileNavigation from "./components/MobileNavigation";
import TabNavigation from "./components/TabNavigation";

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

  const [showMenu, setShowMenu] = useState(false);
  const [activeTab, setActiveTab] = useState("today");

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
        "Reset your Hard 75 challenge? This will clear all progress."
      )
    ) {
      resetChallenge();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <MobileHeader
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        onReset={handleReset}
      />

      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <div className="px-4 pb-6">
        {activeTab === "today" ? (
          <>
            <MobileStats currentDay={currentDay} streak={streak} />
            <MobileProgress
              completedTasks={completedTasks}
              totalTasks={totalTasks}
              progressPercentage={progressPercentage}
              isDayComplete={isDayComplete}
            />
            <MobileNavigation
              currentDay={currentDay}
              isDayComplete={isDayComplete}
              onPrevDay={goToPrevDay}
              onNextDay={goToNextDay}
            />
            <MobileTaskList
              dailyTasks={dailyTasks}
              onTaskToggle={handleTaskToggle}
            />
          </>
        ) : (
          <MobileWeekView currentDay={currentDay} allDays={allDays} />
        )}
      </div>

      {/* Mobile Quote/Tip */}
      <div className="px-4 pb-8">
        <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
          <p className="text-white text-sm font-medium mb-1">💡 Daily Tip</p>
          <p className="text-purple-200 text-xs leading-relaxed">
            "Discipline is choosing between what you want now and what you want
            most."
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
