import { useState } from "react";
import { FiHome, FiCalendar, FiUser, FiSettings, FiBell } from "react-icons/fi";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function StudentApp() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const healthData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Mental Pressure",
        data: [120, 125, 118, 122, 119, 121],
        borderColor: "#1a5d1a",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-primary text-white p-6">
        <h1 className="text-2xl font-bold mb-8">MindCureAI</h1>
        <nav>
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`flex items-center space-x-2 p-3 w-full rounded-lg ${
              activeTab === "dashboard" ? "bg-white/10" : ""
            }`}
          >
            <FiHome /> <span>Dashboard</span>
          </button>
          <button
            onClick={() => setActiveTab("appointments")}
            className={`flex items-center space-x-2 p-3 w-full rounded-lg mt-2 \${
              activeTab === 'appointments' ? 'bg-white/10' : ''
            }`}
          >
            <FiCalendar /> <span>Appointments</span>
          </button>
          <button
            onClick={() => setActiveTab("profile")}
            className={`flex items-center space-x-2 p-3 w-full rounded-lg mt-2 ${
              activeTab === "profile" ? "bg-white/10" : ""
            }`}
          >
            <FiUser /> <span>Profile</span>
          </button>
          <button
            onClick={() => setActiveTab("settings")}
            className={`flex items-center space-x-2 p-3 w-full rounded-lg mt-2 \${
              activeTab === 'settings' ? 'bg-white/10' : ''
            }`}
          >
            <FiSettings /> <span>Settings</span>
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white p-4 shadow-sm flex justify-between items-center">
          <h2 className="text-xl font-semibold">Welcome Jack</h2>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <FiBell />
            </button>
            <div className="flex items-center space-x-2">
              <img
                src="https://via.placeholder.com/40"
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
              <span className="font-medium">Jack Ezendu</span>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-gray-500 mb-2">Blood Pressure</h3>
              <p className="text-3xl font-bold">120/80</p>
              <p className="text-green-500">Normal</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-gray-500 mb-2">Heart Rate</h3>
              <p className="text-3xl font-bold">72 BPM</p>
              <p className="text-green-500">Normal</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-gray-500 mb-2">Blood Sugar</h3>
              <p className="text-3xl font-bold">95 mg/dL</p>
              <p className="text-green-500">Normal</p>
            </div>
          </div>

          {/* Chart */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Health Trends</h3>
            <div className="h-[300px]">
              <Line
                data={healthData}
                options={{ maintainAspectRatio: false }}
              />
            </div>
          </div>

          {/* Upcoming Appointments */}
          <div className="mt-6 bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">
              Upcoming Appointments
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">Dr. Alison Ogaga</p>
                  <p className="text-gray-500">General Practitioner</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">October 28th, 2023</p>
                  <p className="text-gray-500">11:30 - 12:00</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default StudentApp;
