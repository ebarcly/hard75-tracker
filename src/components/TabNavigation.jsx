import React from "react";

const TabNavigation = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: "today", label: "Today" },
    { id: "week", label: "Week" },
  ];

  return (
    <div className="px-4 py-3">
      <div className="flex bg-white/5 backdrop-blur-sm rounded-2xl p-1 border border-white/10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-2 px-4 rounded-xl text-sm font-medium transition-all cursor-pointer ${
              activeTab === tab.id
                ? "bg-white/15 text-white shadow-sm"
                : "text-white/70 hover:text-white/90"
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
