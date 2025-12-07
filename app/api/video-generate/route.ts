import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const image = form.get("image") as File | null;
    const story = (form.get("story") as string) || "Craft promo video";

    if (!image)
      return NextResponse.json({ error: "Image missing" }, { status: 400 });

    // Convert image to Base64
    const buffer = Buffer.from(await image.arrayBuffer());
    const base64 = `data:${image.type};base64,${buffer.toString("base64")}`;

    // NEW HF ROUTER ENDPOINT (fully free)
    const HF_URL =
      "https://router.huggingface.co/hunyuan_video";

    const response = await fetch(HF_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        prompt: story,
        image: base64,
        duration: 4,
        resolution: "720p"
      })
    });

    const text = await response.text();
    console.log("HF RAW RESPONSE >>>", text);

    if (!response.ok) {
      return NextResponse.json(
        { error: "HF API Error", detail: text },
        { status: 500 }
      );
    }

    let result;
    try {
      result = JSON.parse(text);
    } catch (e) {
      return NextResponse.json(
        { error: "Invalid JSON from model", text },
        { status: 500 }
      );
    }

    if (!result.video) {
      return NextResponse.json(
        { error: "Video not generated", detail: result },
        { status: 500 }
      );
    }

    // Convert base64 video to playable URL
    const videoUrl = `data:video/mp4;base64,${result.video}`;

    return NextResponse.json({ video: videoUrl });

  } catch (err: any) {
    console.error("HUNYUAN VIDEO ERROR:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
