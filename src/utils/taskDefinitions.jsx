import {
  Target,
  Code,
  CheckCircle2,
  Droplets,
  BookOpen,
  Camera,
  Briefcase,
} from "lucide-react";

export const taskDefinitions = [
  {
    id: "workout1",
    label: "Morning Workout (45+ min)",
    icon: Target,
    color: "text-red-500",
  },
  {
    id: "workout2",
    label: "Evening Coding Session (45+ min)",
    icon: Code,
    color: "text-blue-500",
  },
  {
    id: "diet",
    label: "Clean Diet - No Cheat Meals",
    icon: CheckCircle2,
    color: "text-green-500",
  },
  {
    id: "water",
    label: "Gallon of Water",
    icon: Droplets,
    color: "text-cyan-500",
  },
  {
    id: "reading",
    label: "10 Pages Tech Reading",
    icon: BookOpen,
    color: "text-purple-500",
  },
  {
    id: "photo",
    label: "Progress Documentation",
    icon: Camera,
    color: "text-yellow-500",
  },
  {
    id: "coding",
    label: "Daily GitHub Commit",
    icon: Code,
    color: "text-indigo-500",
  },
  {
    id: "jobApps",
    label: "2-3 Job Applications",
    icon: Briefcase,
    color: "text-orange-500",
  },
  {
    id: "interview",
    label: "Coding Interview Practice",
    icon: Target,
    color: "text-pink-500",
  },
];

export const initialDailyTasks = {
  workout1: false,
  workout2: false,
  diet: false,
  water: false,
  reading: false,
  photo: false,
  coding: false,
  jobApps: false,
  interview: false,
};
