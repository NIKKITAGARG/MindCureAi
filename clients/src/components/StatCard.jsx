export default function StatCard({ title, value, icon, color }) {
  return (
    <div className={`bg-white p-6 rounded-2xl shadow-sm ${color}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-600 text-sm">{title}</h3>
        {icon}
      </div>
      <div className="flex items-center justify-between">
        <p className="text-2xl font-bold">{value}</p>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
