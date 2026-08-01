import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the SDK. Ensure this only runs on your server.
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  // This is where you inject your portfolio context
  systemInstruction: `You are a helpful assistant for my developer portfolio. 
  I am a full-stack developer specializing in ReactJS, Node.js, Express, and Supabase. 
  Keep your answers concise, professional, and highlight my ability to build automated systems and mobile apps.`,
});

// Example Express or Next.js API handler
export async function handleChat(req, res) {
  const userMessage = req.body.message;
  const chatHistory = req.body.history || []; // Pass previous messages to maintain context

  try {
    const chat = model.startChat({
      history: chatHistory,
    });

    const result = await chat.sendMessage(userMessage);
    const responseText = result.response.text();

    res.json({ reply: responseText });
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    res.status(500).json({ error: "Failed to fetch response" });
  }
}
