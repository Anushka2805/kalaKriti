"use client";

import { useState } from "react";

type CartItem = {
  id: number;
  name: string;
  price: number;
  qty: number;
  img: string;
};

export default function BuyerCart() {
  const [cart, setCart] = useState<CartItem[]>([
    { id: 1, name: "Wooden Bowl", price: 540, qty: 2, img: "https://picsum.photos/303" },
    { id: 2, name: "Clay Lamp", price: 250, qty: 1, img: "https://picsum.photos/304" },
  ]);

  const [showCheckout, setShowCheckout] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");

  function updateQty(id: number, newQty: number) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, newQty) } : item
      )
    );
  }

  function removeItem(id: number) {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const shipping = cart.length > 0 ? 80 : 0;
  const total = subtotal + shipping;

  function handleCheckout(e: React.FormEvent) {
    e.preventDefault();
    console.log("Cart checkout:", { name, phone, address, note, cart, total });
    setShowCheckout(false);
  }

  return (
    <main className="p-8 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900">Your Cart</h1>
      <p className="text-sm text-gray-600 mt-1">
        Review your items before sending a combined order request to artisans.
      </p>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-6">
        {/* CART ITEMS */}
        <div className="space-y-4">
          {cart.length === 0 ? (
            <div className="bg-white border rounded-xl p-6 text-sm text-gray-600">
              Your cart is empty right now.
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="bg-white border px-4 py-3 rounded-xl shadow-sm flex gap-4 items-center"
              >
                <img
                  src={item.img}
                  className="w-20 h-20 rounded-lg object-cover border"
                />
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{item.name}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    Handcrafted · eligible for customization
                  </p>
                  <div className="mt-2 flex items-center gap-3 text-sm">
                    <span className="font-semibold text-gray-900">
                      ₹{item.price * item.qty}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-gray-600">
                      Qty:
                      <input
                        type="number"
                        min={1}
                        className="w-16 border rounded-lg px-2 py-1 text-xs"
                        value={item.qty}
                        onChange={(e) =>
                          updateQty(item.id, Number(e.target.value) || 1)
                        }
                      />
                    </div>
                  </div>
                </div>
                <button
                  className="text-xs text-gray-500 hover:text-red-500"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        {/* SUMMARY */}
        <div className="bg-white border rounded-xl shadow-sm p-5 h-fit">
          <h2 className="text-sm font-semibold text-gray-900">Order summary</h2>
          <div className="mt-3 space-y-2 text-sm">
            <div className="flex justify-between text-gray-700">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Shipping (approx)</span>
              <span>{shipping > 0 ? `₹${shipping}` : "—"}</span>
            </div>
            <div className="border-t pt-2 mt-2 flex justify-between font-semibold text-gray-900">
              <span>Estimated total</span>
              <span>₹{total}</span>
            </div>
          </div>
          <p className="text-[11px] text-gray-500 mt-2">
            Exact shipping & payment details can be finalized with artisans later.
          </p>

          <button
            className="mt-4 w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg py-2.5 text-sm font-medium disabled:bg-gray-300 disabled:cursor-not-allowed"
            onClick={() => cart.length > 0 && setShowCheckout(true)}
            disabled={cart.length === 0}
          >
            Checkout & send order request
          </button>
        </div>
      </div>

      {showCheckout && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl p-6 relative">
            <button
              onClick={() => setShowCheckout(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-lg"
            >
              ✕
            </button>
            <h2 className="text-xl font-semibold text-gray-900 mb-1">
              Checkout — Estimated ₹{total}
            </h2>
            <p className="text-xs text-gray-500 mb-4">
              We&apos;ll send your combined order request to relevant artisans.
            </p>
            <form onSubmit={handleCheckout} className="space-y-3 text-sm">
              <div>
                <label className="text-xs font-medium text-gray-700">Full name</label>
                <input
                  className="mt-1 w-full border rounded-lg px-3 py-2"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="text-xs font-medium text-gray-700">Phone</label>
                <input
                  className="mt-1 w-full border rounded-lg px-3 py-2"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="text-xs font-medium text-gray-700">Address</label>
                <textarea
                  className="mt-1 w-full border rounded-lg px-3 py-2"
                  rows={3}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="text-xs font-medium text-gray-700">
                  Note for artisans (optional)
                </label>
                <textarea
                  className="mt-1 w-full border rounded-lg px-3 py-2"
                  rows={2}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Any combined delivery request / timelines."
                />
              </div>
              <button
                type="submit"
                className="mt-2 w-full bg-emerald-600 text-white py-2 rounded-lg font-semibold hover:bg-emerald-700 text-sm"
              >
                Confirm & send order request
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
