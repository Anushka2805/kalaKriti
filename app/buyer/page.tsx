"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import { PRODUCTS, type Product } from "./data/products";

import {
  FiFilter,
  FiMapPin,
  FiStar,
  FiX,
} from "react-icons/fi";

const categories = ["All", "Home Decor", "Toys", "Food", "Art"] as const;
type CategoryFilter = (typeof categories)[number];

type SortOption = "recommended" | "priceLow" | "priceHigh" | "rating";

export default function BuyerMarketplacePage() {
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<CategoryFilter>("All");
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState<SortOption>("recommended");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showFilters, setShowFilters] = useState<boolean>(false);

  const filteredProducts = useMemo<Product[]>(() => {
    let list: Product[] = [...PRODUCTS];

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter((p: Product) =>
        p.name.toLowerCase().includes(q) ||
        p.artisanName.toLowerCase().includes(q) ||
        p.tags.some((t: string) => t.toLowerCase().includes(q))
      );
    }

    if (category !== "All") {
      list = list.filter((p: Product) => p.category === category);
    }

    if (maxPrice != null && maxPrice > 0) {
      list = list.filter((p: Product) => p.price <= maxPrice);
    }

    list.sort((a: Product, b: Product) => {
      switch (sortBy) {
        case "priceLow":
          return a.price - b.price;
        case "priceHigh":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        default:
          // recommended: rating * reviews
          return b.rating * b.reviews - a.rating * a.reviews;
      }
    });

    return list;
  }, [search, category, maxPrice, sortBy]);

  return (
    <main className="max-w-7xl mx-auto px-4 py-6 space-y-6">
      {/* Top row: title + sort */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Marketplace
          </h1>
          <p className="text-sm text-gray-500">
            Discover handmade pieces from verified Indian artisans.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            className="inline-flex items-center gap-1 px-3 py-1.5 text-sm border rounded-full text-gray-600 hover:bg-gray-50 sm:hidden"
            onClick={() => setShowFilters((v) => !v)}
          >
            <FiFilter className="w-4 h-4" />
            Filters
          </button>

          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-500 hidden sm:inline">Sort by</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="border border-gray-200 rounded-full px-3 py-1.5 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
            >
              <option value="recommended">Recommended</option>
              <option value="priceLow">Price: Low to High</option>
              <option value="priceHigh">Price: High to Low</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>
      </div>

      {/* Filters */}
      <section
        className={`border border-gray-100 rounded-2xl bg-white p-4 shadow-sm ${
          showFilters ? "" : "hidden sm:block"
        }`}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Search */}
          <div className="flex-1">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for products, artisans, or styles..."
              className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat: CategoryFilter) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs md:text-sm border transition ${
                  category === cat
                    ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                    : "border-gray-200 text-gray-600 hover:bg-gray-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Max price */}
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-500 hidden sm:inline">Max price</span>
            <select
              value={maxPrice ?? ""}
              onChange={(e) =>
                setMaxPrice(
                  e.target.value ? Number.parseInt(e.target.value, 10) : null
                )
              }
              className="border border-gray-200 rounded-full px-3 py-1.5 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
            >
              <option value="">No limit</option>
              <option value={1000}>₹1,000</option>
              <option value={1500}>₹1,500</option>
              <option value={2000}>₹2,000</option>
            </select>
          </div>
        </div>
      </section>

      {/* Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-14 border border-dashed rounded-2xl text-gray-500 text-sm">
          No products match your filters. Try clearing some filters.
        </div>
      ) : (
        <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product: Product) => (
            <article
              key={product.id}
              className="group border border-gray-100 rounded-2xl bg-white shadow-sm hover:shadow-md transition cursor-pointer flex flex-col"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src={product.thumbnail}
                  alt={product.name}
                  className="w-full h-52 object-cover group-hover:scale-[1.03] transition-transform"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-white/90 text-[10px] px-2 py-0.5 rounded-full text-gray-700 flex items-center gap-1">
                  <FiMapPin className="w-3 h-3" />
                  {product.artisanLocation}
                </span>
              </div>

              <div className="p-4 flex flex-col gap-2 flex-1">
                <h2 className="text-sm font-semibold text-gray-900 line-clamp-2">
                  {product.name}
                </h2>

                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{product.artisanName}</span>
                  <div className="flex items-center gap-1">
                    <FiStar className="w-3 h-3 text-amber-400" />
                    <span>
                      {product.rating.toFixed(1)} · {product.reviews}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mt-1">
                  {product.tags.slice(0, 3).map((tag: string) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-between pt-2">
                  <div>
                    <p className="text-lg font-semibold text-gray-900">
                      ₹{product.price.toLocaleString("en-IN")}
                    </p>
                    <p className="text-[11px] text-gray-500">
                      {product.deliveryEstimate}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <Link
                      href={`/buyer/product/${product.id}`}
                      onClick={(e) => e.stopPropagation()}
                      className="text-xs px-3 py-1 rounded-full bg-emerald-600 text-white hover:bg-emerald-700"
                    >
                      View details
                    </Link>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProduct(product);
                      }}
                      className="text-[11px] text-emerald-700 hover:underline"
                    >
                      Quick look
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>
      )}

      {/* Quick View Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-xl">
            <div className="flex justify-between items-center px-5 py-3 border-b">
              <h3 className="text-sm font-semibold text-gray-900">
                {selectedProduct.name}
              </h3>
              <button
                onClick={() => setSelectedProduct(null)}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <FiX className="w-4 h-4" />
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="p-5 flex flex-col gap-3">
                <p className="text-xs text-gray-500">
                  {selectedProduct.artisanName} ·{" "}
                  {selectedProduct.artisanLocation}
                </p>
                <p className="text-sm text-gray-700 line-clamp-4">
                  {selectedProduct.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {selectedProduct.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <div>
                    <p className="text-lg font-semibold text-gray-900">
                      ₹{selectedProduct.price.toLocaleString("en-IN")}
                    </p>
                    <p className="text-[11px] text-gray-500">
                      {selectedProduct.deliveryEstimate}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 items-end">
                    <Link
                      href={`/buyer/product/${selectedProduct.id}`}
                      className="px-4 py-1.5 rounded-full bg-emerald-600 text-white text-xs font-medium hover:bg-emerald-700"
                    >
                      Go to product page
                    </Link>
                    <button
                      className="text-[11px] text-emerald-700 hover:underline"
                      onClick={() =>
                        alert("This will open customization on the product page.")
                      }
                    >
                      Request customization
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
