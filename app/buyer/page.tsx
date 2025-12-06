"use client";
import Link from "next/link";
import { FiHeart } from "react-icons/fi";

export default function MarketplacePage() {
    
  const categories = [
    "All",
    "Handmade Toys & Plushies",
    "Festive Confectionery",
    "Home Decor",
    "Pottery",
    "Textiles",
    "Sarees",
    "Paintings",
    "Jewelry",
  ];


  const products = [
    {
      id: 1,
      name: "Pretty Little Nightmare Companion Doll",
      price: "₹280,000",
      category: "Handmade Toys & Plushies",
      artist: "Ruby Jha",
      img: "https://i.imgur.com/jJX1.jpg",
    },
    {
      id: 2,
      name: "Theobroma Chocolate Coated Strawberry",
      price: "₹230",
      category: "Festive Confectionery",
      artist: "Kriti Kumari",
      img: "https://i.imgur.com/lMn2.jpg",
    },
    {
      id: 3,
      name: "Ippo Makunouchi Boxing Spirit Art",
      price: "₹525",
      category: "Anime Fan Art Print",
      artist: "Tamanna",
      img: "https://i.imgur.com/iuj3.jpg",
    },
    {
      id: 4,
      name: "Apple AirPods Pro (2nd Gen)",
      price: "₹22,500",
      category: "Audio Electronics",
      artist: "Ruby Jha",
      img: "https://i.imgur.com/szq5.jpg",
    },
  ];

  return (
    <main className="px-6 pb-16">

      {/* NAVBAR (already from layout) */}


      {/* CATEGORIES */}
      <h2 className="text-center text-2xl font-bold text-gray-900 mt-10">
        Browse by Category
      </h2>

      <div className="mt-6 flex flex-wrap gap-3 justify-center">
        {categories.map((c, idx) => (
          <button
            key={idx}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              idx === 0
                ? "bg-emerald-600 text-white shadow-sm"
                : "bg-white border text-gray-800 hover:border-emerald-500"
            }`}
          >
            {c}
          </button>
        ))}
      </div>


      {/* FEATURED TITLE */}
      <h2 className="text-center text-2xl font-bold text-gray-900 mt-14">
        Featured Products
      </h2>

      {/* PRODUCT GRID */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">

       {products.map((p) => (
  <Link
    key={p.id}
    href={`/buyer/product/${p.id}`}
    className="group"
  >
    <div className="bg-white rounded-2xl border shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300">

      {/* IMAGE */}
      <div className="relative w-full h-56 overflow-hidden bg-gray-100">
        <img
          src={p.img}
          alt={p.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Wishlist Icon */}
        <button
          className="absolute top-3 right-3 bg-white/70 backdrop-blur-sm p-2 rounded-full text-gray-700 hover:text-red-500 hover:bg-white shadow-sm"
        >
          <FiHeart className="w-5 h-5" />
        </button>
      </div>

      {/* PRODUCT TEXT */}
      <div className="p-4">
        <p className="text-emerald-600 font-medium text-xs uppercase tracking-wide">
          {p.category}
        </p>

        <p className="mt-1 font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
          {p.name.length > 28 ? p.name.slice(0, 28) + "..." : p.name}
        </p>

        <p className="text-gray-500 text-sm mt-1">by {p.artist}</p>

        <p className="font-bold text-gray-900 mt-3">{p.price}</p>
      </div>
    </div>
  </Link>
))}


      </div>

    </main>
  );
}
