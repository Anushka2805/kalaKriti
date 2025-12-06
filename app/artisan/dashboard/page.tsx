export default function ArtisanDashboard() {
  return (
    <main className="p-10">

      {/* ==================== WELCOME SECTION ==================== */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900">
          Welcome back, Ruby!
        </h1>

        <p className="mt-2 text-gray-600 max-w-3xl">
          Here's your personal guide to showcasing your craft and growing your business
          with KalaKriti.
        </p>

        {/* PURPLE CTA BOX */}
        <div className="mt-10 bg-gradient-to-r from-purple-600 to-purple-500 rounded-2xl p-10 flex flex-col md:flex-row justify-between items-start md:items-center shadow-lg">

          <div>
            <h2 className="text-2xl font-bold text-white">
              Start Your Product Journey
            </h2>
            <p className="mt-3 text-purple-100 max-w-lg">
              Launch a new product in a seamless flow. We'll guide you through photo enhancement,
              voice description, and final publishing with AI assistance.
            </p>
          </div>

          <button className="mt-6 md:mt-0 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium shadow">
            Start One-Click Flow
          </button>
        </div>
      </div>


      {/* ==================== REQUEST CARDS ==================== */}
      <div className="mt-12 grid md:grid-cols-2 gap-6">

        {/* Bargain Requests */}
        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
          <h3 className="font-semibold text-lg text-gray-800 mb-4">
            Bargain Requests (0)
          </h3>
          <p className="text-gray-500">
            You have no pending bargain requests.
          </p>
        </div>

        {/* Connection Requests */}
        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
          <h3 className="font-semibold text-lg text-gray-800 mb-4">
            Connection Requests (0)
          </h3>
          <p className="text-gray-500">
            You have no pending connection requests.
          </p>
        </div>

      </div>


      {/* ==================== GET STARTED ==================== */}
      <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-8">
        How to Get Started
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {/* Partner with Volunteers */}
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-xl p-8 text-white shadow-lg">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
              <span className="text-xl">👥</span>
            </div>
            <h3 className="font-semibold text-xl">
              Explore KalaKriti
            </h3>
          </div>

          <p className="mt-2 text-emerald-100 max-w-md">
            The heart of KalaKriti. Connect with our platform for discovering trending design,a
            marketing, and more to elevate your craft.
          </p>

          <button className="mt-6 bg-white text-emerald-600 rounded-lg px-6 py-2 font-medium hover:bg-purple-50">
            Discover Now
          </button>
        </div>

        {/* Create Stunning Photos */}
        <div className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
              <span className="text-xl">📸</span>
            </div>
            <h3 className="font-semibold text-xl text-gray-800">
              Create Stunning Photos
            </h3>
          </div>

          <p className="mt-2 text-gray-600 max-w-md">
            Use our AI Photo Studio to create professional product images that attract buyers.
          </p>

          <button className="mt-6 w-full bg-gray-100 hover:bg-gray-200 px-6 py-2 rounded-lg text-black">
            Go to Photo Studio
          </button>
        </div>

      </div>

    </main>
  );
}
