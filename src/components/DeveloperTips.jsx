import React from "react";

const DeveloperTips = () => {
  const tips = [
    {
      title: "Morning Routine",
      description:
        "Start with physical exercise to boost mental clarity for coding sessions",
    },
    {
      title: "Evening Coding",
      description:
        "Focus on algorithms, system design, or building portfolio projects",
    },
    {
      title: "Tech Reading",
      description:
        "Clean Code, System Design books, or industry blogs and documentation",
    },
    {
      title: "Job Applications",
      description:
        "Apply to 2-3 positions daily, track responses, and follow up professionally",
    },
  ];

  return (
    <div className="bg-white/10 backdrop-blur rounded-lg p-6 border border-white/20 mb-8">
      <h3 className="text-xl font-bold text-white mb-4">
        Developer Success Tips
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tips.map((tip, index) => (
          <div key={index} className="space-y-2">
            <h4 className="font-semibold text-purple-200">{tip.title}</h4>
            <p className="text-sm text-gray-300">{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeveloperTips;
