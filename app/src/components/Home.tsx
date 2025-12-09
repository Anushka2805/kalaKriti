"use client";

import { motion } from "framer-motion";

export default function HomePage() {
  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const containerStagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <main className="bg-[#F7FBF8] w-full overflow-hidden">

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="relative pt-24 pb-20 px-6 bg-gradient-to-r from-[#F8FCEF] to-[#EAFBF3]"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span
              variants={fadeUp}
              className="inline-block bg-yellow-100 text-yellow-600 px-4 py-1 rounded-full font-medium"
            >
              Bridging Tradition & Technology
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="mt-6 text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight"
            >
              Empowering Rural
              <br />
              Artisans with{" "}
              <span className="text-emerald-600">AI Intelligence</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-lg text-gray-600 leading-relaxed"
            >
              KalaKriti bridges the gap between rural craftsmanship and modern market demands.
              We provide real-time trend analysis, fair pricing guidance, and digital tools to help artisans thrive.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex gap-6">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                href="#choose"
                className="bg-emerald-600 text-white px-6 py-3 rounded-full font-medium shadow hover:shadow-lg"
              >
                Explore Now
              </motion.a>
            </motion.div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="bg-white shadow-xl rounded-3xl p-6"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-200 rounded-full" />
                <div className="h-3 w-24 bg-gray-900 rounded" />
              </div>
              <motion.span
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-emerald-600 font-medium"
              >
                Trending
              </motion.span>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gray-100 rounded-xl p-6 flex items-center justify-center text-gray-500 font-medium"
              >
                Pottery
              </motion.div>

              <div className="bg-emerald-50 rounded-xl p-6">
                <h3 className="font-semibold text-emerald-700 mb-2">AI Analysis</h3>
                <div className="w-full h-2 bg-emerald-200 rounded-full">
                  <motion.div
                    className="h-full bg-emerald-500 rounded-full"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "80%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                  />
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
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="bg-emerald-600 w-10 h-10 rounded-full flex items-center justify-center text-white text-lg"
              >
                ✓
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= PROBLEM ================= */}
      <section id="problem" className="py-24 px-6 bg-white">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={fadeUp} className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-extrabold text-gray-900">
              The Problem
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Rural artisans possess incredible skill but remain disconnected from the modern digital economy.
            </p>
          </motion.div>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            {/* cards */}
            <motion.div className="grid gap-6" variants={containerStagger}>
              {[
                { color: "bg-red-50 border-red-100", title: "Outdated Designs", text: "Lack of access to current urban trends." },
                { color: "bg-yellow-50 border-yellow-100", title: "Unfair Pricing", text: "Middlemen take up to 70% profit." },
                { color: "bg-blue-50 border-blue-100", title: "Low Digital Skills", text: "No ability to create digital listings." },
                { color: "bg-yellow-50 border-yellow-100", title: "Market Isolation", text: "No data on what sells → wasted inventory." },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ scale: 1.03 }}
                  className={`${card.color} border rounded-2xl p-6 shadow-sm`}
                >
                  <h3 className="text-xl font-semibold text-gray-800">{card.title}</h3>
                  <p className="text-gray-600 mt-2">{card.text}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* DONUT STATIC */}
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center"
            >
              <motion.h3
                variants={fadeUp}
                className="text-xl font-semibold text-gray-800 mb-6"
              >
                Current Sales Channel Distribution
              </motion.h3>

            <div className="relative w-64 h-64">
  <svg viewBox="0 0 42 42" className="w-full h-full -rotate-90">
    
    {/* RED 60% */}
    <circle
      cx="21" cy="21" r="15.915"
      fill="none"
      stroke="#EF4444"
      strokeWidth="6"
      strokeDasharray="60 40"
      strokeDashoffset="-15"
      strokeLinecap="round"
    />

    {/* YELLOW 20% */}
    <circle
      cx="21" cy="21" r="15.915"
      fill="none"
      stroke="#FCD34D"
      strokeWidth="6"
      strokeDasharray="20 80"
      strokeDashoffset="-75"
      strokeLinecap="round"
    />

    {/* GREEN 12% */}
    <circle
      cx="21" cy="21" r="15.915"
      fill="none"
      stroke="#10B981"
      strokeWidth="6"
      strokeDasharray="12 88"
      strokeDashoffset="-95"
      strokeLinecap="round"
    />

    {/* BLUE 8% */}
    <circle
      cx="21" cy="21" r="15.915"
      fill="none"
      stroke="#3B82F6"
      strokeWidth="6"
      strokeDasharray="8 92"
      strokeDashoffset="-107"
      strokeLinecap="round"
    />

  </svg>

  {/* Center Text */}
  <div className="absolute inset-0 flex flex-col items-center justify-center">
    <p className="text-gray-500 text-sm">Rural</p>
    <h3 className="text-xl font-bold text-gray-800">Sales</h3>
  </div>
</div>

            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ================= SOLUTION ================= */}
      <section id="solution" className="py-24 px-6 bg-[#F1FBF6]">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.h2 variants={fadeUp} className="text-center text-4xl font-extrabold text-gray-900">
            Our Solution: KalaKriti
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-center max-w-4xl mx-auto text-gray-600 text-lg"
          >
            An all-in-one platform where artisans upload a photo of their craft and AI handles everything.
          </motion.p>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              "AI Trend Intelligence",
              "Smart Pricing",
              "Hybrid Marketplace",
            ].map((title, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-2xl shadow p-8 text-center"
              >
                <h3 className="font-semibold text-xl text-gray-800">{title}</h3>
                <p className="mt-3 text-gray-600">
                  {i === 0 && "Analyzes global design trends to suggest colors and patterns."}
                  {i === 1 && "Calculates fair market value based on material and labor."}
                  {i === 2 && "Connects artisans directly with buyers & shops."}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= MANAGER ================= */}
      <section id="manager" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={fadeUp} className="text-3xl font-extrabold text-gray-900">
              Your Digital Manager
            </motion.h2>

            <motion.ul variants={fadeUp} className="mt-8 space-y-4 text-gray-700 text-lg">
              {["Better Designs", "Fair Pricing", "Auto-Marketing", "Direct Orders"].map((item, i) => (
                <motion.li key={i} whileHover={{ scale: 1.02 }}>
                  ✔ {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* CARD */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
            className="bg-white shadow-xl rounded-3xl p-6"
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-yellow-100 rounded-full" />
              <div>
                <h3 className="font-semibold text-lg">Lakshmi Devi</h3>
                <p className="text-sm text-gray-600">
                  Madhubani Artist • Bihar
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm font-medium text-gray-600">Trend Score</p>
            <div className="w-full h-2 bg-green-100 rounded-full">
              <motion.div
                className="h-full bg-green-500 rounded-full"
                initial={{ width: "0%" }}
                whileInView={{ width: "94%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= BUYER ================= */}
      <section id="buyers" className="py-24 px-6 bg-[#F7FBF8]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* CHAT MOCK */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="bg-white shadow-xl rounded-2xl p-6"
          >
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
          </motion.div>

          {/* BUYER FEATURES */}
          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={fadeUp} className="text-3xl font-extrabold text-gray-900">
              Authentic Crafts, Simplified
            </motion.h2>

            <motion.ul variants={fadeUp} className="mt-8 space-y-4 text-gray-700 text-lg">
              {[
                "Visual Search: See how it looks in your room",
                "Bulk Boards: Post requirements",
                "Custom Orders: Personalize directly",
                "Transparent: No middlemen",
              ].map((item, i) => (
                <motion.li key={i} whileHover={{ scale: 1.02 }}>{item}</motion.li>
              ))}
            </motion.ul>
          </motion.div>

        </div>
      </section>

      {/* ================= JOIN ================= */}
      <section id="choose" className="py-20 px-6 bg-emerald-700 text-white text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold"
        >
          Ready to Join Our Community?
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 text-lg max-w-2xl mx-auto text-emerald-100"
        >
          Whether you're an artisan or a shopper, your journey starts here.
        </motion.p>

        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <motion.a
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            href="/artisan/signup"
            className="bg-white text-emerald-700 font-semibold px-8 py-3 rounded-full shadow hover:shadow-xl"
          >
            I'm an Artisan
          </motion.a>

          <motion.a
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            href="#shopping"
            className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-emerald-700 shadow transition"
          >
            Start Shopping
          </motion.a>
        </motion.div>
      </section>

    </main>
  );
}
