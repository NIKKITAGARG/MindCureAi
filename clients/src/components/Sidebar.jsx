import { FiHome, FiUser, FiSettings, FiPieChart, FiMap } from "react-icons/fi";

export default function Sidebar() {
  return (
    <div className="h-screen w-20 bg-primary fixed left-0 top-0 flex flex-col items-center py-8 text-white">
      <div className="mb-8">
        <FiPieChart size={24} />
      </div>
      <nav className="flex flex-col gap-6">
        <button className="p-3 hover:bg-white/10 rounded-lg">
          <FiHome size={20} />
        </button>
        <button className="p-3 hover:bg-white/10 rounded-lg">
          <FiMap size={20} />
        </button>
        <button className="p-3 hover:bg-white/10 rounded-lg">
          <FiUser size={20} />
        </button>
        <button className="p-3 hover:bg-white/10 rounded-lg">
          <FiSettings size={20} />
        </button>
      </nav>
    </div>
  );
}
