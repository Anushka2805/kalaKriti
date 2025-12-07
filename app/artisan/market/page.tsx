"use client";

import { useState } from "react";

export default function MarketAssistant() {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const [captionData, setCaptionData] = useState<any>(null);
  const [priceData, setPriceData] = useState<any>(null);
  const [videoData, setVideoData] = useState<any>(null); // script
  const [realVideo, setRealVideo] = useState<string | null>(null); // actual video URL

  const [platform, setPlatform] = useState("Instagram");
  const [story, setStory] = useState("");
  const [description, setDescription] = useState("");

  const [loadingVideo, setLoadingVideo] = useState(false);

  // ---------------- IMAGE UPLOAD -------------------

  function onUpload(e: any) {
    const file = e.target.files?.[0];
    if (!file) return;
    setImage(file);
    setPreview(URL.createObjectURL(file));
  }

  // ---------------- GENERATE POST -------------------

  async function generatePost() {
    const form = new FormData();
    if (image) form.append("image", image);
    form.append("platform", platform);
    form.append("text", description);

    const res = await fetch("/api/generate-post", {
      method: "POST",
      body: form
    });

    const data = await res.json();
    setCaptionData(data);
  }

  // ---------------- PRICE ADVISOR -------------------

  async function generatePrice() {
    const res = await fetch("/api/editable-price", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ description })
    });

    const data = await res.json();
    setPriceData(data);
  }

  // ---------------- VIDEO SCRIPT -------------------

  async function generateVideoScript() {
    const form = new FormData();
    if (image) form.append("image", image);
    form.append("story", story);

    const res = await fetch("/api/video-script", {
      method: "POST",
      body: form
    });

    const data = await res.json();
    setVideoData(data);
  }

  // ---------------- REAL AI VIDEO (PIKA) -------------------

  async function generateRealVideo() {
    if (!image) return alert("Upload an image first!");

    const form = new FormData();
    form.append("image", image);
    form.append("story", story);

    setLoadingVideo(true);

    const res = await fetch("/api/video-generate", {
      method: "POST",
      body: form
    });

    const data = await res.json();
    setRealVideo(data.video);

    setLoadingVideo(false);
  }

  // ---------------- UI -------------------

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold text-gray-900">AI Market Assistant</h1>
      <p className="text-gray-600 mt-2">Create captions, videos & pricing instantly.</p>

      {/* Upload + Preview */}
      <div className="mt-6 border p-6 rounded-xl bg-white">
        <input type="file" onChange={onUpload} className="hidden" id="upload" />

        <label htmlFor="upload" className="cursor-pointer text-gray-900 font-medium">
          Upload Product Image
        </label>

        {preview && (
          <img src={preview} className="w-48 mt-3 rounded shadow border" />
        )}
      </div>

      {/* Description */}
      <div className="mt-6">
        <textarea
          className="border p-3 w-full rounded bg-white text-gray-900 placeholder:text-gray-600"
          placeholder="Describe your product..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      {/* PLATFORM */}
      <div className="flex gap-4 mt-3">
        {["Instagram", "Facebook", "WhatsApp"].map((p) => (
          <button
            key={p}
            className={`px-4 py-2 rounded border text-gray-900 ${
              platform === p ? "bg-green-600 text-white" : "bg-white"
            }`}
            onClick={() => setPlatform(p)}
          >
            {p}
          </button>
        ))}
      </div>

      {/* Story for video generation */}
      <div className="mt-4">
        <textarea
          className="border p-3 w-full rounded bg-white text-gray-900 placeholder:text-gray-600"
          placeholder="Write a short story for the video script..."
          value={story}
          onChange={(e) => setStory(e.target.value)}
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-6">
        <button className="bg-green-600 text-white px-4 py-2 rounded" onClick={generatePost}>
          Generate Caption
        </button>

        <button className="bg-yellow-600 text-white px-4 py-2 rounded" onClick={generatePrice}>
          Get Price
        </button>

        <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={generateVideoScript}>
          Generate Video Script
        </button>

        <button className="bg-purple-600 text-white px-4 py-2 rounded" onClick={generateRealVideo}>
          Generate Real Video
        </button>
      </div>

      {/* OUTPUT: CAPTION */}
      {captionData && (
        <div className="mt-6 p-4 border rounded bg-white text-gray-900">
          <h2 className="font-semibold">Caption</h2>
          <p>{captionData.caption}</p>

          <h2 className="font-semibold mt-3">Hashtags</h2>
          <p>{captionData.hashtags?.join(" ")}</p>

          <h2 className="font-semibold mt-3">Promo Line</h2>
          <p>{captionData.promo}</p>
        </div>
      )}

      {/* OUTPUT: PRICE */}
      {priceData && (
        <div className="mt-6 p-4 border rounded bg-white text-gray-900">
          <h2 className="font-semibold">Suggested Price</h2>
          <p>₹{priceData.suggestedPrice}</p>
          <p className="text-gray-600">{priceData.reason}</p>
        </div>
      )}

      {/* OUTPUT: SCRIPT */}
      {videoData && (
        <div className="mt-6 p-4 border rounded bg-white text-gray-900">
          <h2 className="font-semibold">Video Script</h2>
          <p>{videoData.script}</p>

          <h2 className="font-semibold mt-3">Overlays</h2>
          <p>{videoData.overlays.join(", ")}</p>

          <h2 className="font-semibold mt-3">Scenes</h2>
          <pre className="bg-gray-100 p-2 text-sm rounded text-gray-900">
            {JSON.stringify(videoData.scenes, null, 2)}
          </pre>
        </div>
      )}

      {/* OUTPUT: REAL VIDEO */}
      {loadingVideo && (
        <p className="mt-6 text-purple-600 font-semibold animate-pulse">
          Generating AI video… Please wait 15–20 seconds.
        </p>
      )}

      {realVideo && (
        <div className="mt-6 p-4 border rounded bg-white text-gray-900">
          <h2 className="font-semibold mb-2">Generated AI Video</h2>

          <video
            controls
            className="w-80 rounded shadow"
            src={realVideo}
          />

          <a
            href={realVideo}
            download
            className="mt-3 inline-block text-blue-600 underline"
          >
            Download Video
          </a>
        </div>
      )}
    </main>
  );
}
