"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { FiHeart } from "react-icons/fi";

export default function ProductInfo() {

  // 👇 GET params from the URL
  const params = useParams();
  const id = params.id as string;
  const [showStylist, setShowStylist] = useState(false);


  console.log("PARAMS:", params);

  const products: any = {
    "1": {
      img: "https://i.imgur.com/jJX1.jpg",
      category: "Handmade Toys & Plushies",
      name: "Pretty Little Nightmare Companion Doll",
      description:
        "This handcrafted doll blends dark surreal visuals with playful charm. Designed as a unique collectible piece.",
      artisanPrice: 280000,
      minOffer: 250000,
    },
    "2": {
      img: "https://i.imgur.com/lMn2.jpg",
      category: "Festive Confectionery",
      name: "Theobroma Chocolate Coated Strawberry",
      description:
        "Layered chocolate strawberry bites created for festive celebrations.",
      artisanPrice: 230,
      minOffer: 150,
    },
    "3": {
      img: "https://i.imgur.com/iuj3.jpg",
      category: "Anime Fan Art Print",
      name: "Ippo Makunouchi Boxing Spirit Art",
      description:
        "Premium Japanese boxing art print capturing intensity of Ippo Makunouchi.",
      artisanPrice: 525,
      minOffer: 300,
    },
    "4": {
      img: "https://i.imgur.com/szq5.jpg",
      category: "Audio Electronics",
      name: "Apple AirPods Pro (2nd Gen)",
      description:
        "Premium AirPods Pro with upgraded ANC and spatial audio.",
      artisanPrice: 22500,
      minOffer: 18000,
    },
  };

  // Get product using string key
  const product = products[id];

  if (!product) {
    return (
      <div className="p-10">
        <p className="text-xl font-semibold">Product not found</p>
        <Link href="/buyer" className="text-emerald-600 underline mt-3 block">
          Back to Marketplace
        </Link>
      </div>
    );
  }

  const [myOffer, setMyOffer] = useState(product.artisanPrice);

  return (
    <main className="p-8 max-w-6xl mx-auto">

      <Link href="/buyer" className="inline-block border px-4 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
        ← Back to Marketplace
      </Link>

      {/* Your UI same as before */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-10">

        <div className="bg-white shadow-sm border rounded-2xl p-4">
          <img src={product.img} className="w-full rounded-xl object-cover" />
        </div>

        <div className="bg-white p-6 shadow-sm border rounded-2xl">
          
          <p className="text-emerald-700 font-semibold text-sm">{product.category}</p>
          <h1 className="text-3xl font-bold text-gray-900 mt-1">{product.name}</h1>
          <p className="text-gray-600 text-sm mt-3">{product.description}</p>

          {/* Offer Panel */}
          <div className="mt-7 bg-gray-50 border rounded-xl p-4">
            <p className="font-semibold text-gray-900">Make an Offer</p>
            <p className="text-xs text-gray-500 mt-1">
              Artisan price is ₹{product.artisanPrice}. Offer what you feel is fair.
            </p>

            <div className="mt-4">
              <div className="flex justify-between text-sm font-medium text-gray-600">
                <span>₹{product.minOffer}</span>
                <span>Your Offer: ₹{myOffer}</span>
                <span>₹{product.artisanPrice}</span>
              </div>

              <input
                type="range"
                min={product.minOffer}
                max={product.artisanPrice}
                value={myOffer}
                onChange={(e) => setMyOffer(e.target.value)}
                className="w-full mt-2 accent-emerald-600"
              />
            </div>
          </div>

          <div className="mt-6 flex gap-3">
           <button
  onClick={() => setShowStylist(true)}
  className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 rounded-lg font-medium"
>
  ✨ AI Stylist
</button>

            <button className="w-12 border rounded-lg flex items-center justify-center text-gray-500 hover:text-red-500">
              <FiHeart size={20} />
            </button>
          </div>

          <button className="mt-3 w-full bg-emerald-600 text-white py-2 rounded-lg font-semibold hover:bg-emerald-700">
            Make Offer
          </button>
        </div>

      </div>
      {/* AI STYLING MODAL */}
{showStylist && (
  <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
    
    <div className="bg-white w-full max-w-2xl rounded-2xl shadow-xl p-6 relative">

      {/* Close Button */}
      <button
        onClick={() => setShowStylist(false)}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-lg"
      >
        ✕
      </button>

      <h2 className="text-xl font-semibold text-gray-900">
        AI Styling Assistant
      </h2>

      <p className="text-sm text-gray-600 mt-2">
        Not sure how it fits your style? Choose an aesthetic and let AI show you.
      </p>

      {/* Style Options */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">

        <button className="border rounded-xl p-4 hover:border-emerald-600 hover:bg-emerald-50 text-center transition">
          <p className="font-semibold text-gray-900">Minimalist</p>
          <p className="text-xs text-gray-500 mt-1">
            Clean, serene, and simple.
          </p>
        </button>

        <button className="border rounded-xl p-4 hover:border-emerald-600 hover:bg-emerald-50 text-center transition">
          <p className="font-semibold text-gray-900">Bohemian</p>
          <p className="text-xs text-gray-500 mt-1">
            Earthy, artistic, and free-spirited.
          </p>
        </button>

        <button className="border rounded-xl p-4 hover:border-emerald-600 hover:bg-emerald-50 text-center transition">
          <p className="font-semibold text-gray-900">Extravagant</p>
          <p className="text-xs text-gray-500 mt-1">
            Luxurious, opulent, and bold.
          </p>
        </button>

        <button className="border rounded-xl p-4 hover:border-emerald-600 hover:bg-emerald-50 text-center transition">
          <p className="font-semibold text-gray-900">Classic</p>
          <p className="text-xs text-gray-500 mt-1">
            Timeless, elegant, and traditional.
          </p>
        </button>
      </div>
    </div>
  </div>
)}
    </main>
  );
}
