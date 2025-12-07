import { GoogleGenAI } from "@google/genai";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const description: string = typeof body.description === "string" ? body.description : "";
    const cost: string = typeof body.cost === "string" ? body.cost : "unknown";
    const category: string = typeof body.category === "string" ? body.category : "general craft";

    // FIX 1: MUST INCLUDE API KEY
    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY ?? ""
    });

    const prompt = `
Suggest a market-friendly selling price for this handmade craft.

DESCRIPTION: "${description}"
CATEGORY: "${category}"
COST: "${cost}"

Return STRICT JSON ONLY:
{
  "suggestedPrice": number,
  "priceRange": "₹X - ₹Y",
  "editable": true,
  "reason": "string"
}
`.trim();

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      config: { responseMimeType: "application/json" }
    });

    // FIX 2: ALWAYS SAFE STRING
    const raw: string = response.text ?? "";

    if (!raw.trim()) {
      return Response.json(
        { error: "AI returned empty response." },
        { status: 500 }
      );
    }

    // FIX 3: SAFE JSON PARSE
    let json;
    try {
      json = JSON.parse(raw);
    } catch (err) {
      console.error("❌ JSON PARSE FAILED >>>", raw);
      return Response.json(
        { error: "AI returned invalid JSON.", raw },
        { status: 500 }
      );
    }

    return Response.json(json);

  } catch (error: any) {
    console.error("SERVER ERROR:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
