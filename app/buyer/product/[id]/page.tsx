"use client";

import { useParams } from "next/navigation";
import { useMemo, useState } from "react";
import { getProductById } from "../../data/products";
import {
  FiArrowLeft,
  FiCheckCircle,
  FiDollarSign,
  FiEdit3,
  FiInfo,
  FiMapPin,
  FiStar,
} from "react-icons/fi";
import Link from "next/link";

export default function BuyerProductDetailPage() {
  const params = useParams<{ id: string }>();
  const product = useMemo(() => getProductById(params.id), [params.id]);

  const [activeMockupTab, setActiveMockupTab] =
    useState<"product" | "workspace">("product");
  const [showCustomizationSuccess, setShowCustomizationSuccess] =
    useState(false);
  const [showOrderSuccess, setShowOrderSuccess] = useState(false);

  // Negotiation (slider based)
  const [offer, setOffer] = useState<number | null>(null);
  const [counterOffer, setCounterOffer] = useState<number | null>(null);
  const [negotiationMessage, setNegotiationMessage] = useState<string>("");

  if (!product) {
    return (
      <main className="max-w-3xl mx-auto px-4 py-10">
        <p className="text-sm text-gray-500 mb-3">Product not found.</p>
        <Link
          href="/buyer"
          className="inline-flex items-center gap-2 text-emerald-700 text-sm"
        >
          <FiArrowLeft className="w-4 h-4" />
          Back to marketplace
        </Link>
      </main>
    );
  }

  const minOffer = Math.round(product.basePrice * 0.6);
  const maxOffer = Math.round(product.basePrice * 1.2);
  const effectiveOffer =
    offer ?? Math.round(product.basePrice * 0.9); // default slider

  const handleSubmitOffer = () => {
    const offerValue = effectiveOffer;
    const base = product.basePrice;

    if (!offerValue || offerValue <= 0) {
      setNegotiationMessage("Please move the slider to set your offer.");
      setCounterOffer(null);
      return;
    }

    if (offerValue < 0.6 * base) {
      const counter = Math.round(base * 0.95);
      setCounterOffer(counter);
      setNegotiationMessage(
        "This is quite low for this piece. Artisan is likely to offer a small goodwill discount only."
      );
    } else if (offerValue < 0.9 * base) {
      const counter = Math.round((offerValue + base * 0.9) / 2);
      setCounterOffer(counter);
      setNegotiationMessage(
        "Reasonable starting point. A midpoint counter-offer is a realistic outcome."
      );
    } else if (offerValue < base) {
      const counter = Math.round((offerValue + base) / 2);
      setCounterOffer(counter);
      setNegotiationMessage(
        "You’re close to the base price. Meeting somewhere in between is likely."
      );
    } else {
      setCounterOffer(offerValue);
      setNegotiationMessage(
        "This matches or exceeds the base price. Artisan will almost always accept this."
      );
    }
  };

  const handleCustomizationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowCustomizationSuccess(true);
    setTimeout(() => setShowCustomizationSuccess(false), 2000);
  };

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowOrderSuccess(true);
    setTimeout(() => setShowOrderSuccess(false), 2000);
  };

  // Small helper for static placement tip
  const placementLabel =
    product.category === "Toys"
      ? "Kids’ room / play corner"
      : product.category === "Food"
      ? "Dining / party table"
      : product.category === "Art"
      ? "Feature wall or corridor"
      : "Sofa side / console / shelf";

  return (
    <main className="max-w-6xl mx-auto px-4 py-6 space-y-6">
      {/* Back link */}
      <Link
        href="/buyer"
        className="inline-flex items-center gap-2 text-xs text-gray-500 hover:text-gray-700"
      >
        <FiArrowLeft className="w-3 h-3" />
        Back to marketplace
      </Link>

      <section className="space-y-6">
        {/* TOP: image left, details right */}
        <div className="grid lg:grid-cols-[1.1fr,1.5fr] gap-6">
          {/* LEFT: main image, smaller and side-aligned */}
          <div className="border border-gray-100 rounded-3xl bg-white shadow-sm p-4 flex flex-col items-center gap-3">
            <div className="relative w-full max-w-xs md:max-w-sm aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[11px] text-gray-500 text-center">
              Handmade piece · actual colors may vary slightly on screen.
            </p>
          </div>


          {/* RIGHT: core info + negotiation + order */}
          <div className="space-y-4">
            {/* Basic info */}
            <div className="border border-gray-100 rounded-3xl bg-white p-4 shadow-sm space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div className="space-y-1">
                  <p className="text-[11px] text-emerald-700 font-semibold uppercase tracking-wide">
                    {product.category}
                  </p>
                  <h1 className="text-lg md:text-xl font-semibold text-gray-900">
                    {product.name}
                  </h1>
                  <p className="text-xs text-gray-700">{product.artisanName}</p>
                  <p className="text-[11px] text-gray-500 inline-flex items-center gap-1">
                    <FiMapPin className="w-3 h-3" />
                    {product.artisanLocation}
                  </p>
                </div>
                <div className="text-right text-xs">
                  <span className="inline-flex items-center gap-1 text-gray-700 bg-gray-50 px-2 py-1 rounded-full">
                    <FiStar className="w-3 h-3 text-amber-400" />
                    {product.rating.toFixed(1)} · {product.reviews}
                  </span>
                  <p className="mt-1 text-[11px] text-gray-500">
                    {product.deliveryEstimate}
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-700 line-clamp-3">
                {product.description}
              </p>

              <div className="flex items-center justify-between pt-1">
                <div>
                  <p className="text-2xl font-semibold text-gray-900">
                    ₹{product.price.toLocaleString("en-IN")}
                  </p>
                  <p className="text-[11px] text-gray-500">
                    Base price per unit
                  </p>
                </div>
                <div className="flex flex-wrap gap-1 justify-end">
                  {product.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full bg-emerald-50 text-[11px] text-emerald-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Offer-based negotiation – slider */}
            <div className="border border-gray-100 rounded-3xl bg-white p-4 space-y-3">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                  <FiDollarSign className="w-4 h-4 text-emerald-700" />
                  Make an offer
                </h2>
                <span className="text-[11px] text-gray-500">
                  Static demo · buyer-side only
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <p className="text-gray-600">
                  Move the slider to choose your offer for one unit. We simulate
                  how an artisan might respond.
                </p>

                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[11px] text-gray-500">
                    <span>Lower</span>
                    <span>Higher</span>
                  </div>
                  <input
                    type="range"
                    min={minOffer}
                    max={maxOffer}
                    step={50}
                    value={effectiveOffer}
                    onChange={(e) => setOffer(Number(e.target.value))}
                    className="w-full accent-emerald-600"
                  />
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-[11px] text-gray-500">
                      Base price: ₹{product.basePrice.toLocaleString("en-IN")}
                    </span>
                    <span className="text-xs font-semibold text-emerald-700">
                      Your offer: ₹{effectiveOffer.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={handleSubmitOffer}
                    className="px-4 py-1.5 rounded-full bg-emerald-600 text-white text-xs font-medium hover:bg-emerald-700"
                  >
                    Get counter-offer
                  </button>
                </div>

                {negotiationMessage && (
                  <div className="mt-2 rounded-2xl bg-gray-50 border border-gray-100 p-3 space-y-1">
                    {counterOffer && (
                      <p className="text-xs text-gray-900 font-medium">
                        Artisan counter-offer:{" "}
                        <span className="text-emerald-700 font-semibold">
                          ₹{counterOffer.toLocaleString("en-IN")}
                        </span>{" "}
                        per unit
                      </p>
                    )}
                    <p className="text-[11px] text-gray-600">
                      {negotiationMessage}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Order placement – minimal */}
            <div className="border border-gray-100 rounded-3xl bg-white p-4 space-y-3">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold text-gray-900">
                  Place an order
                </h2>
                {showOrderSuccess && (
                  <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700">
                    <FiCheckCircle className="w-3 h-3" />
                    Order draft created
                  </span>
                )}
              </div>

              <form
                className="space-y-2 text-xs rounded-2xl bg-gray-50 border border-gray-100 p-3"
                onSubmit={handleOrderSubmit}
              >
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <label className="block text-gray-600">Quantity</label>
                    <input
                      type="number"
                      min={1}
                      defaultValue={1}
                      name="buyQuantity"
                      className="w-full rounded-xl border border-gray-200 px-3 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-gray-600">Pincode</label>
                    <input
                      required
                      name="pincode"
                      className="w-full rounded-xl border border-gray-200 px-3 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500"
                      placeholder="e.g. 560001"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-gray-600">Address</label>
                  <input
                    required
                    name="address"
                    className="w-full rounded-xl border border-gray-200 px-3 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    placeholder="House / street / landmark"
                  />
                </div>

                <div className="flex items-center justify-between pt-1">
                  <p className="text-[11px] text-gray-500">
                    Payment & final shipping will be confirmed in the next step.
                  </p>
                  <button
                    type="submit"
                    className="px-4 py-1.5 rounded-full bg-emerald-700 text-white text-xs font-medium hover:bg-emerald-800"
                  >
                    Create order draft
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* BOTTOM: AR/VR-style mockup + static “how to place” tips */}
        <div className="grid md:grid-cols-[1.3fr,1fr] gap-4">
          {/* AR/VR style mockup (hardcoded demo) */}
          <div className="border border-gray-100 rounded-3xl bg-white shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <h2 className="text-sm font-semibold text-gray-900">
                Room preview (static demo)
              </h2>
              <div className="flex items-center gap-2 text-[11px] text-gray-500">
                <FiInfo className="w-3 h-3" />
                <span>Not interactive · buyer-side only</span>
              </div>
            </div>

            <div className="relative aspect-[16/9] bg-gray-900">
              {/* Background room */}
              <img
                src="https://images.pexels.com/photos/6585763/pexels-photo-6585763.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Room mockup"
                className="w-full h-full object-cover opacity-70"
              />
              {/* Product as framed overlay */}
              <div className="absolute inset-6 md:inset-10 flex items-center justify-center">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-md">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 md:h-56 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* How to place – STATIC helper card */}
          <div className="border border-gray-100 rounded-3xl bg-white p-4 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold text-gray-900">
                How to place this
              </h2>
              <span className="text-[11px] text-gray-400">
                Static guidelines (no AI)
              </span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="rounded-2xl bg-gray-50 p-3 space-y-1.5">
                <p className="font-medium text-gray-800">
                  Suggested spot
                </p>
                <p className="text-gray-600 text-[11px]">
                  {placementLabel}
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-3 space-y-1.5">
                <p className="font-medium text-gray-800">Lighting</p>
                <p className="text-gray-600 text-[11px]">
                  Soft, warm lighting usually works best. Avoid very harsh
                  direct light that can flatten textures.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-3 space-y-1.5">
                <p className="font-medium text-gray-800">
                  Customization request
                </p>
                {showCustomizationSuccess && (
                  <p className="text-[11px] text-emerald-700 inline-flex items-center gap-1">
                    <FiCheckCircle className="w-3 h-3" />
                    Sent to artisan
                  </p>
                )}
                <form
                  onSubmit={handleCustomizationSubmit}
                  className="space-y-2 mt-1"
                >
                  <textarea
                    name="notes"
                    rows={3}
                    className="w-full rounded-xl border border-gray-200 px-3 py-1.5 text-[11px] focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    placeholder="Write a short note about colors, names, packaging, etc."
                  />
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-3 py-1.5 rounded-full bg-emerald-700 text-white text-[11px] font-medium hover:bg-emerald-800"
                    >
                      Send request
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <p className="text-[11px] text-gray-500 pt-1">
              These are simple placement ideas, not AI recommendations. Final
              layout depends on your space.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
