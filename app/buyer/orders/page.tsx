export default function BuyerOrders() {

  const orders = [
    { id: "ORD-1001", name: "Handmade Vase", price: "₹1,200", date: "Dec 2, 2024", status: "Fulfilled" },
    { id: "ORD-1002", name: "Macrame Wall Hanging", price: "₹950", date: "Nov 18, 2024", status: "Pending" },
  ];

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold text-gray-900">Order History</h1>

      <div className="mt-6 space-y-4">
        {orders.map(o => (
          <div className="bg-white border p-4 rounded-xl flex items-center justify-between shadow-sm">
            <div>
              <p className="font-semibold text-gray-900">{o.name}</p>
              <p className="text-sm text-gray-500">Order ID: {o.id} · {o.date}</p>
            </div>

            <div className="text-right">
              <p className="font-bold">{o.price}</p>
              <span className={`text-xs px-3 py-1 rounded-full ${
                o.status === "Fulfilled"
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}>
                {o.status}
              </span>
            </div>
          </div>
        ))}
      </div>

    </main>
  );
}
