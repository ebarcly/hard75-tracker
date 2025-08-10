import React from "react";
import { CheckCircle2, Circle } from "lucide-react";
import { taskDefinitions } from "../utils/taskDefinitions";

const MobileTaskList = ({ dailyTasks, onTaskToggle }) => {
  return (
    <div className="space-y-3">
      {taskDefinitions.map((task) => {
        const IconComponent = task.icon;
        const isCompleted = dailyTasks[task.id];

        return (
          <div
            key={task.id}
            onClick={() => onTaskToggle(task.id)}
            className={`p-4 rounded-2xl border transition-all duration-300 active:scale-95 ${
              isCompleted
                ? "bg-green-500/10 border-green-500/30 shadow-lg shadow-green-500/10"
                : "bg-white/5 border-white/10 active:bg-white/10"
            } backdrop-blur-sm`}
          >
            <div className="flex items-center gap-4">
              <div
                className={`p-3 rounded-xl ${
                  isCompleted ? "bg-green-500/20" : task.bg
                }`}
              >
                <IconComponent
                  className={isCompleted ? "text-green-300" : task.color}
                  size={24}
                />
              </div>
              <div className="flex-1 min-w-0">
                <p
                  className={`font-semibold text-base ${
                    isCompleted ? "text-green-100" : "text-white"
                  }`}
                >
                  {task.label}
                </p>
                <p
                  className={`text-sm ${
                    isCompleted ? "text-green-200/70" : "text-gray-400"
                  }`}
                >
                  {task.sublabel}
                </p>
              </div>
              <div className="flex-shrink-0">
                {isCompleted ? (
                  <CheckCircle2 className="text-green-300" size={24} />
                ) : (
                  <Circle className="text-gray-500" size={24} />
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MobileTaskList;
