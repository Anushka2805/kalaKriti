"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiSearch,
  FiMessageSquare,
  FiHeart,
  FiShoppingCart,
  FiPackage,
  FiShoppingBag,
} from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

export default function NavbarBuyer() {
  const [openProducts, setOpenProducts] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/buyer") {
      return pathname === "/buyer";
    }
    return pathname.startsWith(href);
  };

  const navLinkClasses = (href: string) =>
    `flex items-center gap-2 text-sm font-medium px-3 py-1.5 rounded-full transition ${
      isActive(href)
        ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
        : "text-gray-600 hover:text-emerald-600 hover:bg-gray-50"
    }`;

  return (
    <header className="w-full bg-white/90 backdrop-blur border-b sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 h-16 max-w-7xl mx-auto gap-4">
        {/* LEFT SECTION */}
        <div className="flex items-center gap-6">
          {/* Logo */}
          <Link href="/buyer" className="flex items-center gap-2">
            <span className="text-xl font-bold text-emerald-700 tracking-tight">
              KalaKriti
            </span>
            <span className="hidden sm:inline text-[11px] text-gray-500 border-l pl-3">
              Curated marketplace for Indian artisans
            </span>
          </Link>

          {/* All Products dropdown */}
          <div className="relative hidden md:block">
            <button
              onClick={() => setOpenProducts((prev) => !prev)}
              className="text-gray-700 text-sm font-medium flex items-center gap-1 hover:text-emerald-600"
            >
              All Products
              <span className="text-xs">▼</span>
            </button>
            {openProducts && (
              <div className="absolute mt-3 bg-white border rounded-2xl shadow-md p-3 w-56 z-50">
                <p className="text-[11px] text-gray-400 mb-2 px-1">
                  Popular buyer categories
                </p>
                <ul className="text-sm text-gray-700">
                  <li className="py-2 px-2 rounded-lg cursor-pointer hover:bg-gray-50 hover:text-emerald-600">
                    Handmade Crafts
                  </li>
                  <li className="py-2 px-2 rounded-lg cursor-pointer hover:bg-gray-50 hover:text-emerald-600">
                    Textiles & Sarees
                  </li>
                  <li className="py-2 px-2 rounded-lg cursor-pointer hover:bg-gray-50 hover:text-emerald-600">
                    Paintings & Prints
                  </li>
                  <li className="py-2 px-2 rounded-lg cursor-pointer hover:bg-gray-50 hover:text-emerald-600">
                    Home Decor
                  </li>
                  <li className="py-2 px-2 rounded-lg cursor-pointer hover:bg-gray-50 hover:text-emerald-600">
                    Festive & Gifts
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* SEARCH */}
        <div className="flex-1 hidden sm:flex justify-center">
          <div className="relative w-full max-w-xl">
            <FiSearch className="absolute left-4 top-2.5 text-gray-400 w-4 h-4" />
            <input
              type="text"
              className="w-full border border-gray-200 rounded-full py-2 pl-10 pr-4 text-sm text-gray-700 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="Search for handmade crafts, artisans, or styles..."
            />
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-2 md:gap-3">
          <Link href="/buyer" className={navLinkClasses("/buyer")}>
            <FiShoppingBag size={16} />
            <span className="hidden md:inline">Marketplace</span>
            <span className="md:hidden">Shop</span>
          </Link>

          <Link href="/buyer/bulk-orders" className={navLinkClasses("/buyer/bulk-orders")}>
            <FiPackage size={16} />
            <span className="hidden md:inline">Bulk Orders</span>
            <span className="md:hidden">Bulk</span>
          </Link>

          <Link href="/buyer/chat" className={navLinkClasses("/buyer/chat")}>
            <FiMessageSquare size={16} />
            <span className="hidden md:inline">Chat</span>
            <span className="relative inline-block md:hidden">
              Chat
              <span className="absolute -top-1 -right-2 w-2 h-2 bg-emerald-500 rounded-full" />
            </span>
          </Link>

          <Link href="/buyer/orders" className={navLinkClasses("/buyer/orders")}>
            <FiPackage size={16} />
            <span className="hidden md:inline">Orders</span>
          </Link>

          <Link
            href="/buyer/wishlist"
            className={`relative p-2 rounded-full border transition ${
              isActive("/buyer/wishlist")
                ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                : "border-transparent text-gray-600 hover:text-emerald-600 hover:bg-gray-50"
            }`}
          >
            <FiHeart size={18} />
          </Link>

          <Link
            href="/buyer/cart"
            className={`relative p-2 rounded-full border transition ${
              isActive("/buyer/cart")
                ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                : "border-transparent text-gray-600 hover:text-emerald-600 hover:bg-gray-50"
            }`}
          >
            <FiShoppingCart size={18} />
            {/* dummy cart count dot */}
            <span className="absolute -top-0.5 -right-0.5 h-4 min-w-[16px] px-0.5 rounded-full bg-emerald-600 text-[10px] leading-4 text-white text-center">
              2
            </span>
          </Link>

          <Link
            href="/buyer/profile"
            className={`ml-1 rounded-full border transition ${
              isActive("/buyer/profile")
                ? "border-emerald-200 bg-emerald-50"
                : "border-transparent hover:bg-gray-50"
            }`}
          >
            <FaUserCircle className="w-8 h-8 text-gray-400 hover:text-gray-600 transition" />
          </Link>
        </div>
      </div>

      {/* MOBILE SEARCH (below navbar) */}
      <div className="px-4 pb-2 pt-1 sm:hidden border-b bg-white/90 backdrop-blur">
        <div className="relative">
          <FiSearch className="absolute left-4 top-2.5 text-gray-400 w-4 h-4" />
          <input
            type="text"
            className="w-full border border-gray-200 rounded-full py-2 pl-10 pr-4 text-sm text-gray-700 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
            placeholder="Search crafts & artisans..."
          />
        </div>
      </div>
    </header>
  );
}
