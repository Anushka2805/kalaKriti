import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

async function test() {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    console.log("SUCCESS: Your API key is valid.");
    console.log("Your version supports the following stable models:");
    console.log("- gemini-pro");
    console.log("- gemini-pro-vision");
    console.log("- gemini-1.0-pro");
    console.log("- gemini-1.0-pro-vision");
  } catch (e) {
    console.error("ERROR: Cannot access model. Details:", e.message);
  }
}

test();
