// app/artisan/studio/page.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function StudioPage() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [aiData, setAiData] = useState<any>(null);

  async function analyzeImage(file: File) {
    try {
      setLoading(true);
      setAiData(null);

      const form = new FormData();
      form.append("image", file);

      const res = await fetch("/api/analyze", {
        method: "POST",
        body: form,
      });

      const json = await res.json();
      console.log("AI RESULT:", json);

      if (!res.ok) {
        alert(json.error || "AI processing failed.");
        return;
      }

      setAiData(json);
    } catch (err) {
      console.error("CLIENT ERROR:", err);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  function onUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setImagePreview(URL.createObjectURL(file));
    analyzeImage(file);
  }

  const demand = aiData?.demand ?? 0;
  const demandWidth = String(demand) + "%";

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold text-gray-900">AI Photo Studio</h1>
      <p className="text-gray-600 mt-2 max-w-xl">
        Upload a craft image and get real-time AI analysis for trends, design
        recommendations & pricing.
      </p>

      {/* Upload Box */}
      <div className="mt-6 border-2 border-dashed border-gray-300 rounded-xl p-10 text-center">
        <input
          type="file"
          accept="image/*"
          onChange={onUpload}
          className="hidden"
          id="fileInput"
        />

        <label htmlFor="fileInput" className="cursor-pointer text-gray-600">
          Click to upload image
        </label>

        {imagePreview && (
          <img
            src={imagePreview}
            className="mx-auto mt-4 w-56 h-56 object-cover rounded-lg shadow"
            alt="Uploaded preview"
          />
        )}

        {loading && (
          <p className="mt-3 text-emerald-600 font-medium animate-pulse">
            AI is analyzing your craft image…
          </p>
        )}
      </div>

      {/* AI Results */}
      {aiData && (
        <motion.div
          className="mt-10 grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* TREND ANALYZER */}
          <div className="bg-white p-6 rounded-xl shadow border">
            <h2 className="text-lg font-bold text-emerald-700">Trend Analyzer</h2>

            <p className="text-sm mt-3 font-semibold text-black">
              Dominant Colors:
            </p>
            <div className="flex gap-2 mt-2">
              {aiData?.colors?.map((c: string, i: number) => (
                <span
                  key={i}
                  className="w-7 h-7 rounded-full border"
                  style={{ backgroundColor: c }}
                ></span>
              ))}
            </div>

            <p className="text-sm mt-4 font-semibold text-black">Trend Tags:</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {aiData?.tags?.map((tag: string, i: number) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs bg-emerald-50 border border-emerald-200 rounded-full text-emerald-700"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <p className="mt-4 text-sm font-semibold text-black">Demand Score:</p>
            <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
              <div
                className="bg-emerald-500 h-full rounded-full"
                style={{ width: demandWidth }}
              ></div>
            </div>

            <p className="text-xs text-black mt-1 font-medium">
              Demand: {demand > 75 ? "High" : demand > 50 ? "Medium" : "Low"}
            </p>
          </div>

          {/* DESIGN RECOMMENDATIONS */}
          <div className="bg-white p-6 rounded-xl shadow border">
            <h2 className="text-lg font-bold text-blue-600">
              Design Recommendations
            </h2>

            <ul className="list-disc ml-5 mt-4 text-black text-sm space-y-2">
              {aiData?.recommendations?.map((r: string, i: number) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </div>

          {/* PRICING ADVISOR */}
          <div className="bg-white p-6 rounded-xl shadow border">
            <h2 className="text-lg font-bold text-yellow-600">Pricing Advisor</h2>

            {aiData?.pricing ? (
              <>
                <p className="text-sm mt-4 text-black">
                  Minimum Price: <strong>₹{aiData.pricing.min}</strong>
                </p>
                <p className="text-sm text-black">
                  Fair Price: <strong>₹{aiData.pricing.fair}</strong>
                </p>
                <p className="text-sm text-black">
                  Market Range: <strong>{aiData.pricing.range}</strong>
                </p>

                <p className="text-xs mt-3 text-black">
                  {aiData.pricing.reason}
                </p>
              </>
            ) : (
              <p className="text-sm text-gray-500 mt-3 italic">
                Pricing could not be generated for this image.
              </p>
            )}
          </div>
        </motion.div>
      )}
    </main>
  );
}
