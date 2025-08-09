import React from "react";
import { CheckCircle2, Circle } from "lucide-react";
import { taskDefinitions } from "../utils/taskDefinitions";

const TaskGrid = ({ dailyTasks, onTaskToggle }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      {taskDefinitions.map((task) => {
        const IconComponent = task.icon;
        const isCompleted = dailyTasks[task.id];

        return (
          <div
            key={task.id}
            onClick={() => onTaskToggle(task.id)}
            className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 hover:scale-105 ${
              isCompleted
                ? "bg-green-500/20 border-green-500/50 shadow-green-500/25 shadow-lg"
                : "bg-white/10 border-white/20 hover:bg-white/20"
            } backdrop-blur`}
          >
            <div className="flex items-center gap-3">
              <IconComponent
                className={`${task.color} ${
                  isCompleted ? "text-green-300" : ""
                }`}
                size={24}
              />
              <div className="flex-1">
                <p
                  className={`font-medium ${
                    isCompleted ? "text-green-100" : "text-white"
                  }`}
                >
                  {task.label}
                </p>
              </div>
              {isCompleted ? (
                <CheckCircle2 className="text-green-300" size={20} />
              ) : (
                <Circle className="text-gray-400" size={20} />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskGrid;
