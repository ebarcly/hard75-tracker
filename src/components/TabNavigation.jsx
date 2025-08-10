import React from "react";

const TabNavigation = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: "today", label: "Today" },
    { id: "week", label: "Week" },
  ];

  return (
    <div className="px-4 py-3 bg-black/10">
      <div className="flex bg-white/10 rounded-2xl p-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-2 px-4 rounded-xl text-sm font-medium transition-all ${
              activeTab === tab.id
                ? "bg-white/20 text-white shadow-lg"
                : "text-gray-300 hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabNavigation;
