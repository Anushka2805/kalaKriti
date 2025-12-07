import { GoogleGenAI } from "@google/genai";
import { Buffer } from "buffer";

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    // Safely extract fields
    const file = form.get("image") as File | null;

    const platformInput = form.get("platform");
    const textInput = form.get("text");

    // SAFE STRING VALUES
    const platform: string =
      typeof platformInput === "string" && platformInput.trim() !== ""
        ? platformInput
        : "Instagram";

    const userText: string =
      typeof textInput === "string" ? textInput : "";

    // Convert image → base64
    let base64 = "";
    let mimeType = "image/png";

    if (file) {
      mimeType = file.type || "image/png";
      const buffer = Buffer.from(await file.arrayBuffer());
      base64 = buffer.toString("base64");
    }

    // Gemini client (FIXED: apiKey required)
    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY ?? ""
    });

    const prompt = `
Generate a social media post for a handmade craft.

Platform: ${platform}
User Description: "${userText}"

Analyze product style, material, colors, vibe if image is provided.

RETURN STRICT JSON ONLY:
{
  "caption": "string caption",
  "hashtags": ["#tag1", "#tag2"],
  "promo": "short promotional line"
}
`.trim();

    // Build Gemini content
    const contents: any[] = [
      {
        role: "user",
        parts: [{ text: prompt }]
      }
    ];

    // Attach image only if present
    if (file) {
      contents[0].parts.push({
        inlineData: {
          data: base64,
          mimeType
        }
      });
    }

    // Final Gemini request
    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents,
      config: {
        responseMimeType: "application/json"
      }
    });

    // ALWAYS SAFE STRING
    const raw: string = result.text ?? "";

    // If AI returns empty
    if (!raw.trim()) {
      return Response.json(
        { error: "AI returned empty response." },
        { status: 500 }
      );
    }

    // Try parsing JSON
    let jsonData;
    try {
      jsonData = JSON.parse(raw);
    } catch (err) {
      console.error("❌ FAILED JSON >>>", raw);
      return Response.json(
        { error: "AI returned invalid JSON.", raw },
        { status: 500 }
      );
    }

    // SUCCESS
    return Response.json(jsonData);

  } catch (error: any) {
    console.error("SERVER ERROR:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
