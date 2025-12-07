import { GoogleGenAI } from "@google/genai";
import { Buffer } from "buffer";

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const story = form.get("story") as string;
    const file = form.get("image") as File | null;

    let base64 = "";
    let mimeType = "image/png";

    if (file) {
      mimeType = file.type;
      const buf = Buffer.from(await file.arrayBuffer());
      base64 = buf.toString("base64");
    }

    // ✅ FIX: Gemini API requires apiKey inside GoogleGenAI options
    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY || ""
    });

    const prompt = `
    Create a short promotional video script for a handmade craft product.

    STORY/TEXT: "${story}"

    Output STRICT JSON only:
    {
      "script": "string explaining the full video flow",
      "overlays": ["text overlay line 1", "line 2"],
      "scenes": [
        { "type": "zoomIn", "duration": 3 },
        { "type": "panLeft", "duration": 2 },
        { "type": "fadeOut", "duration": 1 }
      ]
    }
    `;

    const contents: any = [
      { role: "user", parts: [{ text: prompt }] }
    ];

    if (file) {
      contents[0].parts.push({
        inlineData: { data: base64, mimeType }
      });
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents,
      config: { responseMimeType: "application/json" }
    });

    const raw = response.text ?? "{}";
    const json = JSON.parse(raw);

    return Response.json(json);

  } catch (error: any) {
    console.error("VIDEO SCRIPT ERROR >>>", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
