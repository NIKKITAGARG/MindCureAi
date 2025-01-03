import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import { FiMoon, FiSun, FiMessageCircle, FiBell } from "react-icons/fi";

function PGround() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />

      <div className="ml-20 p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Hello, User! 👋
            </h1>
            <p className="text-gray-600">Welcome back to your dashboard</p>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <FiBell size={20} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <FiMoon size={20} />
            </button>
            <img
              src="https://placekitten.com/40/40"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Sleep Level"
            value="8.2h"
            icon={<FiMoon className="text-primary" size={20} />}
          />
          <StatCard
            title="Health Score"
            value="97.24%"
            icon={<FiSun className="text-secondary" size={20} />}
          />
          <StatCard
            title="Chat Messages"
            value="187+"
            icon={<FiMessageCircle className="text-accent" size={20} />}
          />
          <StatCard
            title="Stress Level"
            value="8.2x"
            icon={<FiSun className="text-primary" size={20} />}
          />
        </div>

        {/* Main Content Area */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Activity Overview</h2>
          <div className="h-64 flex items-center justify-center text-gray-400">
            Chart will be displayed here
          </div>
        </div>
      </div>
    </div>
  );
}

export default PGround;
