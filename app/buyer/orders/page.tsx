"use client";
import { useState } from "react";

export default function BuyerOrders() {
  const [showInvoice, setShowInvoice] = useState(false);

  const orders = [
    {
      id: "ORD-1001",
      name: "Handmade Vase",
      price: "₹1,200",
      date: "Dec 2, 2024",
      status: "Fulfilled",
      isCustom: false,
    },
    {
      id: "ORD-1002",
      name: "Macrame Wall Hanging",
      price: "₹950",
      date: "Nov 18, 2024",
      status: "Pending",
      isCustom: false,
    },
    {
      id: "CUST-2001",
      name: "Custom Hand-painted Wall Plate",
      price: "₹2,500",
      date: "Jan 5, 2025",
      status: "Custom Order",
      isCustom: true,
    },
  ];

  //  Dummy Invoice View
  if (showInvoice) {
    return (
      <main className="p-8 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Custom Invoice</h1>

<div className="bg-white border rounded-xl p-6 space-y-4 shadow-sm text-gray-900">
          <p><strong>Invoice ID:</strong> INV-CUST-2001</p>
          <p><strong>Product:</strong> Custom Hand-painted Wall Plate</p>
          <p><strong>Buyer:</strong> Anushka Aggarwal</p>
          <p><strong>Price:</strong> ₹2,500</p>
          <p><strong>Delivery:</strong> 10–12 working days</p>
          <p><strong>Status:</strong> Design Approved</p>

          <hr />

          <p className="text-sm text-gray-600">
            This is a dummy invoice for demonstration purposes only.
          </p>
        </div>

        <button
          onClick={() => setShowInvoice(false)}
          className="mt-6 px-5 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800"
        >
          ← Back to Orders
        </button>
      </main>
    );
  }

  // 👉 Orders List
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold text-gray-900">Order History</h1>

      <div className="mt-6 space-y-4">
        {orders.map((o) => (
          <div
            key={o.id}
            className="bg-white border p-4 rounded-xl flex items-center justify-between shadow-sm"
          >
            <div>
              <p className="font-semibold text-gray-900">{o.name}</p>
              <p className="text-sm text-gray-500">
                Order ID: {o.id} · {o.date}
              </p>
            </div>

            <div className="text-right space-y-2">
              <p className="font-bold">{o.price}</p>

              <span
                className={`inline-block text-xs px-3 py-1 rounded-full ${
                  o.isCustom
                    ? "bg-purple-100 text-purple-700"
                    : o.status === "Fulfilled"
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {o.status}
              </span>

              {o.isCustom && (
                <button
                  onClick={() => setShowInvoice(true)}
                  className="block text-xs mt-2 px-3 py-1 rounded-lg border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition"
                >
                  View Custom Invoice
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
