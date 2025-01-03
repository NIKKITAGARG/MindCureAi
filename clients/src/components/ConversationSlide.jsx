import React, { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const ChatbotPopup = () => {
  const [conversation, setConversation] = useState([]);
  const [input, setInput] = useState("");
  const [personality, setPersonality] = useState("");
  const [age, setAge] = useState("");
  const [activity, setActivity] = useState("");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Initialize AI model
  const genAI = new GoogleGenerativeAI(
    "API_KEY"
  );
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const handleSendMessage = async () => {
    if (!query) return;

    setLoading(true);

    // Construct prompt based on user inputs
    const prompt = `
      You are an AI assistant. Respond to the user's query based on their input. 
      The user's personality type is ${personality}, they are ${age} years old, and they are currently ${activity}.
      The user is asking: "${query}". Provide a thoughtful response based on this information.
    `;

    try {
      const result = await model.generateContent(prompt);
      const aiResponse = result.response.text();

      // Update conversation with AI's response
      setConversation((prev) => [
        ...prev,
        { sender: "user", message: query },
        { sender: "ai", message: aiResponse },
      ]);
      setQuery(""); // Clear query input after sending
    } catch (error) {
      console.error("Error generating content:", error);
    } finally {
      setLoading(false);
    }
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="relative">
      {/* Chatbot button */}
      <button
        onClick={togglePopup}
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600"
      >
        Chat
      </button>

      {/* Chatbot Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg">
            <h1 className="text-2xl font-semibold mb-4">AI Chatbot</h1>
            <div className="conversation-container space-y-4 mb-6 max-h-[400px] overflow-y-auto">
              {/* Display conversation */}
              {conversation.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.sender === "user" ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`p-3 rounded-lg max-w-xs break-words ${
                      message.sender === "user" ? "bg-blue-100" : "bg-gray-200"
                    }`}
                  >
                    <p>{message.message}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* User input section */}
            <div className="input-section space-y-4">
              <div className="flex space-x-2">
                <label className="flex-1">
                  Personality Type:
                  <input
                    type="text"
                    value={personality}
                    onChange={(e) => setPersonality(e.target.value)}
                    className="w-full p-2 border rounded-md"
                    placeholder="e.g., ENFJ"
                  />
                </label>
                <label className="flex-1">
                  Age:
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="w-full p-2 border rounded-md"
                    placeholder="e.g., 19"
                  />
                  </label>
                </div>
                

                <div className="flex space-x-2">
                  <label className="flex-1">
                    What are you doing?
                    <input
                      type="text"
                      value={activity}
                      onChange={(e) => setActivity(e.target.value)}
                      className="w-full p-2 border rounded-md"
                      placeholder="e.g., studying, working"
                    />
                  </label>
                  <label className="flex-1">
                    Your Query:
                    <input
                      type="text"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      className="w-full p-2 border rounded-md"
                      placeholder="Ask a question"
                    />
                  </label>
                </div>

                {/* Send message button */}
                <button
                  onClick={handleSendMessage}
                  disabled={loading}
                  className="w-full p-2 bg-blue-500 text-white rounded-md disabled:bg-gray-400"
                >
                  {loading ? "Thinking..." : "Send"}
                </button>
              </div>

              {/* Close Button */}
              <button
                onClick={togglePopup}
                className="absolute top-2 right-2 text-xl text-gray-600 hover:text-gray-800"
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

export default ChatbotPopup;
