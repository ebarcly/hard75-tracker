export const calculateProgress = (dailyTasks) => {
  const completedTasks = Object.values(dailyTasks).filter(Boolean).length;
  const totalTasks = Object.keys(dailyTasks).length;
  const progressPercentage = (completedTasks / totalTasks) * 100;
  const isDayComplete = completedTasks === totalTasks;

  return { completedTasks, totalTasks, progressPercentage, isDayComplete };
};

export const calculateStreak = (allDays, currentDay) => {
  let streak = 0;
  for (let day = 1; day <= currentDay; day++) {
    const dayData = allDays[day];
    if (dayData && Object.values(dayData).every(Boolean)) {
      streak++;
    } else {
      streak = 0;
    }
  }
  return streak;
};
