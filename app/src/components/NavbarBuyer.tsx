"use client";

import { useState } from "react";
import { FiSearch, FiMessageSquare, FiHeart, FiShoppingCart, FiPackage, FiShoppingBag } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

export default function NavbarBuyer() {
  const [openProducts, setOpenProducts] = useState(false);

  return (
    <header className="w-full bg-white border-b sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 h-16">

        {/* LEFT SECTION */}
        <div className="flex items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-emerald-700">KalaKriti</span>
          </div>

          {/* Marketplace */}
          <div className="relative">
            <button
              onClick={() => setOpenProducts(!openProducts)}
              className="text-gray-700 font-medium flex items-center gap-1 hover:text-emerald-600"
            >
              All Products
              <span className="text-xs">▼</span>
            </button>

            {openProducts && (
              <div className="absolute mt-3 bg-white border rounded-xl shadow-md p-3 w-56">
                <ul className="text-sm text-gray-700">
                  <li className="py-2 cursor-pointer hover:text-emerald-600">Handmade Crafts</li>
                  <li className="py-2 cursor-pointer hover:text-emerald-600">Textiles</li>
                  <li className="py-2 cursor-pointer hover:text-emerald-600">Paintings</li>
                  <li className="py-2 cursor-pointer hover:text-emerald-600">Decor</li>
                  <li className="py-2 cursor-pointer hover:text-emerald-600">Art Prints</li>
                  <li className="py-2 cursor-pointer hover:text-emerald-600">Festive Items</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* SEARCH */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-xl">
            <FiSearch className="absolute left-4 top-3 text-gray-400" />
            <input
              type="text"
              className="w-full border rounded-full py-2 pl-10 pr-4 text-gray-700 bg-gray-50"
              placeholder="Search for handmade crafts..."
            />
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-6">
         <a
  href="/buyer"
  className="text-gray-600 hover:text-emerald-600 flex items-center gap-2 text-sm font-medium"
>
  <FiShoppingBag size={18} />
  Marketplace
</a>


          {/* Chat */}
          <a
            href="/buyer/chat"
            className="text-gray-600 hover:text-emerald-600 flex items-center gap-2 text-sm font-medium"
          >
            <FiMessageSquare size={18} />
            Chat
          </a>

          {/* Orders */}
          <a
            href="/buyer/orders"
            className="text-gray-600 hover:text-emerald-600 flex items-center gap-2 text-sm font-medium"
          >
            <FiPackage size={18} />
            Orders
          </a>

          {/* Wishlist */}
          <a
            href="/buyer/wishlist"
            className="text-gray-600 hover:text-emerald-600"
          >
            <FiHeart size={20} />
          </a>

          {/* Cart */}
          <a
            href="/buyer/cart"
            className="text-gray-600 hover:text-emerald-600"
          >
            <FiShoppingCart size={20} />
          </a>

         {/* Profile */}
<a href="/buyer/profile">
  <FaUserCircle className="w-9 h-9 text-gray-400 hover:text-gray-600 transition" />
</a>

        </div>
      </div>
    </header>
  );
}
