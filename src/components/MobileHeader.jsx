import React from "react";
import { Menu, X } from "lucide-react";

const MobileHeader = ({ showMenu, setShowMenu, onReset }) => {
  return (
    <>
      {/* Mobile Header */}
      <div className="sticky top-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-white">Hard 75</h1>
              <p className="text-purple-200 text-sm">Developer Edition</p>
            </div>
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="p-2 rounded-xl bg-white/10 text-white"
            >
              {showMenu ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={() => setShowMenu(false)}
        >
          <div className="absolute top-20 right-4 bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
            <button
              onClick={() => {
                onReset();
                setShowMenu(false);
              }}
              className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-sm transition-colors"
            >
              Reset Challenge
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileHeader;
