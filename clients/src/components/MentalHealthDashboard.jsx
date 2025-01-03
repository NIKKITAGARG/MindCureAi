import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import StudentApp from "./StudentBoardComp";

const MentalHealthDashboard = () => {
  const [mood, setMood] = useState("");
  const [stressLevel, setStressLevel] = useState(5);
  const [activities, setActivities] = useState([]);
  const [notes, setNotes] = useState("");

  const handleAddActivity = (activity) => {
    setActivities([...activities, activity]);
  };

  return (
    <>
    <StudentApp/>
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Mental Health Dashboard</h1>

      {/* Mood Tracker */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Mood Tracker</h2>
        <div className="flex space-x-4 mt-2">
          {["😊", "😐", "😢", "😡"].map((emoji) => (
            <button
              key={emoji}
              onClick={() => setMood(emoji)}
              className={`p-3 text-2xl rounded ${
                mood === emoji ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              {emoji}
            </button>
          ))}
        </div>
        <p className="mt-2">Today's mood: {mood || "Not set yet"}</p>
      </div>

      {/* Stress Level */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Stress Level</h2>
        <input
          type="range"
          min="1"
          max="10"
          value={stressLevel}
          onChange={(e) => setStressLevel(e.target.value)}
          className="w-full mt-2"
        />
        <p>Current stress level: {stressLevel}</p>
      </div>

      {/* Activity Tracker */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Activity Tracker</h2>
        <div className="flex space-x-4 mt-2">
          {["Study", "Exercise", "Leisure"].map((activity) => (
            <button
              key={activity}
              onClick={() => handleAddActivity(activity)}
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              {activity}
            </button>
          ))}
        </div>
        <ul className="mt-4 list-disc pl-6">
          {activities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      </div>

      {/* Notes */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Confidential Notes</h2>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="w-full mt-2 p-2 border rounded"
          placeholder="Write your thoughts here..."
        ></textarea>
      </div>
    </div>
    </>
  );
};

export default MentalHealthDashboard;
