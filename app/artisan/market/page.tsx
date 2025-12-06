export default function PhotoStudio() {
  return (
    <main className="p-10">

      {/* HEADER */}
      <h1 className="text-3xl font-bold text-gray-900">
        AI Photo Studio
      </h1>
      <p className="text-gray-600 mt-2 max-w-2xl">
        Upload a photo of your product and use AI to edit it with simple text prompts.
      </p>


      {/* PANELS → Upload + Result */}
      <div className="grid md:grid-cols-2 gap-8 mt-10">

        {/* LEFT → Input Form */}
        <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm">

          {/* Upload */}
          <label className="font-medium text-gray-700">
            1. Upload Your Photo
          </label>

          <div className="mt-3 border border-dashed border-gray-300 rounded-xl h-52 flex items-center justify-center text-gray-500 cursor-pointer">
            Click to upload image
          </div>


          {/* Themes */}
          <label className="font-medium text-gray-700 mt-8 block">
            2. Choose a Theme (Optional)
          </label>

          <div className="grid grid-cols-2 gap-3 mt-3">
            <button className="border rounded-xl p-4 text-left hover:bg-gray-50">
              <div className="font-semibold text-gray-800">Clean & Modern</div>
              <p className="text-sm text-gray-500">
                Perfect for e-commerce listings.
              </p>
            </button>

            <button className="border rounded-xl p-4 text-left hover:bg-gray-50">
              <div className="font-semibold text-gray-800">Vibrant Celebration</div>
              <p className="text-sm text-gray-500">
                For festivals & special occasions.
              </p>
            </button>

            <button className="border rounded-xl p-4 text-left hover:bg-gray-50">
              <div className="font-semibold text-gray-800">Creative Showcase</div>
              <p className="text-sm text-gray-500">
                Dramatic & eye-catching.
              </p>
            </button>

            <button className="border rounded-xl p-4 text-left hover:bg-gray-50">
              <div className="font-semibold text-gray-800">Rustic & Earthy</div>
              <p className="text-sm text-gray-500">
                Authentic & traditional feel.
              </p>
            </button>
          </div>


          {/* Prompt */}
          <label className="font-medium text-gray-700 mt-8 block">
            3. Describe Your Edits
          </label>

          <textarea
            rows={3}
            placeholder="e.g., 'add a wooden background', 'make lighting brighter', etc."
            className="mt-3 w-full border border-gray-200 rounded-xl p-4 text-gray-700 focus:ring-2 focus:ring-emerald-500"
          />

          <button className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-2 rounded-lg">
            Enhance Image
          </button>

        </div>



        {/* RIGHT → Result Box */}
        <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm">

          <h3 className="font-semibold text-gray-800 mb-4">
            Result
          </h3>

          <div className="flex items-center justify-center bg-gray-50 h-full rounded-xl text-gray-400">
            Your edited image will appear here
          </div>

        </div>

      </div>

    </main>
  );
}
