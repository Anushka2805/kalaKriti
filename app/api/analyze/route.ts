// app/api/analyze/route.ts
// Make sure you have installed:  npm install @google/genai

import { GoogleGenAI } from "@google/genai";
import { Buffer } from "buffer";

export async function POST(req: Request) {
  try {
    console.log("------ /api/analyze HIT ------");
    console.log("Content-Type:", req.headers.get("content-type"));

    // 1) Read multipart/form-data
    const form = await req.formData();
    const file = form.get("image") as File | null;

    if (!file) {
      return Response.json(
        { error: "Image file missing. Use field name 'image'." },
        { status: 400 }
      );
    }

    const mimeType = file.type || "image/png";

    // 2) Convert file -> base64 string
    const arrayBuffer = await file.arrayBuffer();
    const base64 = Buffer.from(arrayBuffer).toString("base64");

    // 3) Init GenAI client
    // SDK will read GEMINI_API_KEY from environment automatically
    const ai = new GoogleGenAI({});

    const prompt = `
      Analyze this craft product image and return JSON with this EXACT SHAPE:

      {
        "colors": ["#aabbcc"],
        "tags": ["handmade"],
        "recommendations": ["Improve lighting"],
        "demand": 80,
        "pricing": {
          "min": 150,
          "fair": 250,
          "range": "₹150 - ₹300",
          "reason": "Handmade item with strong appeal"
        }
      }

      RULES:
      - Output ONLY valid JSON.
      - No markdown.
      - No extra text or explanation.
    `;

    console.log("Sending to Gemini (gemini-2.5-flash)...");

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        {
          role: "user",
          parts: [
            { text: prompt },
            {
              inlineData: {
                data: base64,
                mimeType,
              },
            },
          ],
        },
      ],
      config: {
        responseMimeType: "application/json",
      },
    });

    const output = response.text;
    console.log("GEMINI RAW TEXT >>>", output);

    let parsed;
    try {
      parsed = JSON.parse(output);
    } catch (err) {
      console.error("JSON PARSE ERROR >>>", err);
      return Response.json(
        { error: "Gemini returned invalid JSON", raw: output },
        { status: 500 }
      );
    }

    return Response.json(parsed);
  } catch (error: any) {
    console.error("SERVER ERROR >>>", error);
    return Response.json(
      { error: error?.message || "Server error" },
      { status: 500 }
    );
  }
}