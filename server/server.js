import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("API_KEY");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = `Create a JSON response for a patient query based on the following input. The menu should include categories like personality type ENFJ, age is 19 , the course is btech and the problem in life which is query is "I am facing stress" with at least two solutions you have to give according to the problem. Include the name, description, and what you should do, and show some concern for the problem.`;

(async () => {
  try {
    const result = await model.generateContent(prompt);
    console.log(result.response.text());
  } catch (error) {
    console.error("Error generating content:", error);
  }
})();
