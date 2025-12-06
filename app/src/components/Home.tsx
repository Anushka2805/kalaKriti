export default function HomePage() {
  return (
    <main className="bg-[#F7FBF8] w-full">

      {/* ================= HERO SECTION ================= */}
      <section
        id="home"
        className="relative pt-24 pb-20 px-6 bg-gradient-to-r from-[#F8FCEF] to-[#EAFBF3]"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <span className="inline-block bg-yellow-100 text-yellow-600 px-4 py-1 rounded-full font-medium">
              Bridging Tradition & Technology
            </span>

            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              Empowering Rural
              <br />
              Artisans with{" "}
              <span className="text-emerald-600">AI Intelligence</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              CraftSense AI bridges the gap between rural craftsmanship and modern market demands. We provide real-time trend analysis, fair pricing guidance, and digital tools to help artisans thrive.
            </p>

            <div className="mt-10 flex gap-6">
              <a
                href="#prototype"
                className="bg-emerald-600 text-white px-6 py-3 rounded-full font-medium shadow hover:bg-emerald-700"
              >
                Try Prototype
              </a>
              <a
                href="#problem"
                className="bg-white border border-gray-200 px-6 py-3 rounded-full font-medium text-gray-700 hover:shadow"
              >
                View Problem Statement
              </a>
            </div>
          </div>

          {/* Right Card */}
          <div className="bg-white shadow-xl rounded-3xl p-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                <div className="h-3 w-24 bg-gray-200 rounded"></div>
              </div>
              <span className="text-emerald-600 font-medium flex items-center gap-1">
                Trending
              </span>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-6">
              <div className="bg-gray-100 rounded-xl p-6 flex items-center justify-center text-gray-500 font-medium">
                Pottery
              </div>
              <div className="bg-emerald-50 rounded-xl p-6">
                <h3 className="font-semibold text-emerald-700 mb-2">AI Analysis</h3>
                <div className="w-full h-2 bg-emerald-200 rounded-full">
                  <div className="w-[80%] h-full bg-emerald-500 rounded-full"></div>
                </div>
                <p className="text-sm font-medium mt-2 text-gray-600">
                  Demand: High
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm text-gray-600">
              Suggested Price: <span className="font-bold">₹450</span>
            </p>

            <div className="mt-4 w-full flex justify-end">
              <div className="bg-emerald-600 w-10 h-10 rounded-full flex items-center justify-center text-white text-lg">
                ✓
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROBLEM SECTION ================= */}
      <section id="problem" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-extrabold text-gray-900">
              The Problem
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Rural artisans possess incredible skill but remain disconnected from the modern digital economy,
              leading to exploitation and stagnation.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8">

            <div className="grid gap-6">

              <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  Outdated Designs
                </h3>
                <p className="text-gray-600 mt-2">
                  Lack of access to current urban trends and seasonal color palettes.
                </p>
              </div>

              <div className="bg-yellow-50 border border-yellow-100 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  Unfair Pricing
                </h3>
                <p className="text-gray-600 mt-2">
                  Middlemen take up to 70% of the profit margin.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  Low Digital Skills
                </h3>
                <p className="text-gray-600 mt-2">
                  Inability to create digital listings or content.
                </p>
              </div>

              <div className="bg-yellow-50 border border-yellow-100 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  Market Isolation
                </h3>
                <p className="text-gray-600 mt-2">
                  No data on what sells → wasted inventory.
                </p>
              </div>

            </div>

            {/* Donut Chart */}
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                Current Sales Channel Distribution
              </h3>

              <div className="relative w-64 h-64">
                <svg viewBox="0 0 36 36" className="w-full h-full">
                  <circle cx="18" cy="18" r="16" fill="none" stroke="#EF4444" strokeWidth="8" strokeDasharray="70 30" strokeDashoffset="25"/>
                  <circle cx="18" cy="18" r="16" fill="none" stroke="#FCD34D" strokeWidth="8" strokeDasharray="15 85" strokeDashoffset="-10"/>
                  <circle cx="18" cy="18" r="16" fill="none" stroke="#10B981" strokeWidth="8" strokeDasharray="10 90" strokeDashoffset="-27"/>
                  <circle cx="18" cy="18" r="16" fill="none" stroke="#3B82F6" strokeWidth="8" strokeDasharray="5 95" strokeDashoffset="-35"/>
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <p className="text-gray-500 text-sm">Rural</p>
                  <h3 className="text-xl font-bold text-gray-800">Sales</h3>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ================= SOLUTION SECTION ================= */}
      <section id="solution" className="py-24 px-6 bg-[#F1FBF6]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-4xl font-extrabold text-gray-900">
            Our Solution: CraftSense AI
          </h2>
          <p className="mt-4 text-center max-w-4xl mx-auto text-gray-600 text-lg">
            An all-in-one platform where artisans upload a photo of their craft and AI handles everything — from pricing to design improvements.
          </p>

          <div className="mt-16 grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-2xl shadow p-8 text-center">
              <h3 className="font-semibold text-xl text-gray-800">
                AI Trend Intelligence
              </h3>
              <p className="mt-3 text-gray-600">
                Analyzes global design trends to suggest colors and patterns.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow p-8 text-center">
              <h3 className="font-semibold text-xl text-gray-800">
                Smart Pricing
              </h3>
              <p className="mt-3 text-gray-600">
                Calculates fair market value based on material, labor.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow p-8 text-center">
              <h3 className="font-semibold text-xl text-gray-800">
                Hybrid Marketplace
              </h3>
              <p className="mt-3 text-gray-600">
                Connects artisans directly with buyers & shops.
              </p>
            </div>

          </div>
        </div>
      </section>
    

      {/* ================= MANAGER SECTION ================= */}
      <section id="manager" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              Your Digital Manager
            </h2>

            <ul className="mt-8 space-y-4 text-gray-700 text-lg">
              <li>✔ Better Designs</li>
              <li>✔ Fair Pricing</li>
              <li>✔ Auto-Marketing</li>
              <li>✔ Direct Orders</li>
            </ul>
          </div>

          <div className="bg-white shadow-xl rounded-3xl p-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-yellow-100 rounded-full"></div>
              <div>
                <h3 className="font-semibold text-lg">Lakshmi Devi</h3>
                <p className="text-sm text-gray-600">Madhubani Artist • Bihar</p>
              </div>
            </div>

            <p className="mt-6 text-sm font-medium text-gray-600">
              Trend Score
            </p>
            <div className="w-full h-2 bg-green-100 rounded-full">
              <div className="w-[94%] h-full bg-green-500 rounded-full"></div>
            </div>
          </div>

        </div>
      </section>


      {/* ================= BUYER SECTION ================= */}
      <section id="buyers" className="py-24 px-6 bg-[#F7FBF8]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* Chat UI */}
          <div className="bg-white shadow-xl rounded-2xl p-6">
            <h3 className="font-semibold text-lg mb-4">Lakshmi Devi</h3>
            <div className="space-y-3 text-gray-700">
              <div>Can you make this vase in blue?</div>
              <div className="bg-emerald-50 p-2 rounded-lg">
                Yes, I can! It will take 2 days.
              </div>
              <div>Great! Offering ₹500 for 2 pieces.</div>

              <div className="border border-dashed border-emerald-400 p-2 rounded-lg font-medium">
                Offer Sent: ₹500
              </div>
            </div>

            <div className="mt-4 flex">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 border rounded-l-lg p-2"
              />
              <button className="bg-emerald-600 text-white px-4 rounded-r-lg">
                Send
              </button>
            </div>
          </div>

          {/* Buyers Block */}
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              Authentic Crafts, Simplified
            </h2>

            <ul className="mt-8 space-y-4 text-gray-700 text-lg">
              <li><strong>Visual Search:</strong> See how it looks in your room</li>
              <li><strong>Bulk Boards:</strong> Post requirements</li>
              <li><strong>Custom Orders:</strong> Personalize directly</li>
              <li><strong>Transparent:</strong> No middlemen</li>
            </ul>
          </div>

        </div>
      </section>
            {/* ================= JOIN COMMUNITY SECTION ================= */}
      <section className="py-20 px-6 bg-emerald-700 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Ready to Join Our Community?
        </h2>

        <p className="mt-4 text-lg max-w-2xl mx-auto text-emerald-100">
          Whether you're an artisan, a volunteer, or a shopper, your journey starts here.
        </p>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6">
          
          {/* Artisan */}
          <a
            href="/artisan/signup"
            className="bg-white text-emerald-700 font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition"
          >
            I'm an Artisan
          </a>

          {/* Shopper */}
          <a
            href="#shopping"
            className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-emerald-700 transition"
          >
            Start Shopping
          </a>

        </div>
      </section>


    </main>
  );
}
