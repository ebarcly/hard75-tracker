import { useState, useEffect } from "react";
import { initialDailyTasks } from "../utils/taskDefinitions";

export const useHard75Data = () => {
  const [currentDay, setCurrentDay] = useState(1);
  const [dailyTasks, setDailyTasks] = useState(initialDailyTasks);
  const [allDays, setAllDays] = useState({});
  const [streak, setStreak] = useState(0);

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("hard75Data")) || {
      allDays: {},
      currentDay: 1,
      streak: 0,
    };

    setAllDays(savedData.allDays);
    setCurrentDay(savedData.currentDay);
    setStreak(savedData.streak);

    if (savedData.allDays[savedData.currentDay]) {
      setDailyTasks(savedData.allDays[savedData.currentDay]);
    }
  }, []);

  // Save data to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem(
      "hard75Data",
      JSON.stringify({ allDays, currentDay, streak })
    );
  }, [allDays, currentDay, streak]);

  const updateTask = (taskId, value) => {
    const newTasks = { ...dailyTasks, [taskId]: value };
    setDailyTasks(newTasks);

    const newAllDays = { ...allDays, [currentDay]: newTasks };
    setAllDays(newAllDays);
  };

  const navigateToDay = (day) => {
    setCurrentDay(day);
    setDailyTasks(allDays[day] || initialDailyTasks);
  };

  const resetChallenge = () => {
    setCurrentDay(1);
    setAllDays({});
    setStreak(0);
    setDailyTasks(initialDailyTasks);
    localStorage.removeItem("hard75Data");
  };

  return {
    currentDay,
    dailyTasks,
    allDays,
    streak,
    setCurrentDay,
    setStreak,
    updateTask,
    navigateToDay,
    resetChallenge,
  };
};
