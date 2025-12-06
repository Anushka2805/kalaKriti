"use client";

type Order = {
  id: string;
  product: string;
  date: string;
  amount: string;
  status: "fulfilled" | "pending";
};

export default function OrderHistory() {

  // Dummy Data (Replace with real API later)
  const orders: Order[] = [
    {
      id: "ORD-1023",
      product: "Hand-painted Silk Scarf",
      date: "12 Nov 2024",
      amount: "₹1,200",
      status: "fulfilled",
    },
    {
      id: "ORD-1048",
      product: "Terracotta Planter Pot",
      date: "25 Oct 2024",
      amount: "₹760",
      status: "fulfilled",
    },
    {
      id: "ORD-1087",
      product: "Blue Pottery Vase",
      date: "03 Dec 2024",
      amount: "₹2,850",
      status: "pending",
    },
    {
      id: "ORD-1089",
      product: "Handwoven Cotton Scarf",
      date: "05 Dec 2024",
      amount: "₹1,400",
      status: "pending",
    },
  ];

  // Split orders
  const fulfilledOrders = orders.filter(o => o.status === "fulfilled");
  const pendingOrders = orders.filter(o => o.status === "pending");

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold text-gray-900">Order History</h1>
      <p className="text-gray-600 mt-2 max-w-2xl">
        Track your previous and ongoing orders easily.
      </p>

      {/* PENDING ORDERS */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Pending Orders
        </h2>

        {pendingOrders.length === 0 ? (
          <p className="text-gray-500">No pending orders 🎉</p>
        ) : (
          <div className="space-y-4">
            {pendingOrders.map(order => (
              <div
                key={order.id}
                className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm flex justify-between items-center"
              >
                <div>
                  <p className="font-medium text-gray-900">{order.product}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Order ID: {order.id} · {order.date}
                  </p>
                </div>

                <div className="text-right">
                  <span className="text-gray-900 font-semibold">
                    {order.amount}
                  </span>
                  <span className="ml-3 inline-block bg-yellow-100 text-yellow-700 text-xs px-3 py-1 rounded-full">
                    Pending
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>


      {/* FULFILLED ORDERS */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Fulfilled Orders
        </h2>

        {fulfilledOrders.length === 0 ? (
          <p className="text-gray-500">No fulfilled orders yet.</p>
        ) : (
          <div className="space-y-4">
            {fulfilledOrders.map(order => (
              <div
                key={order.id}
                className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm flex justify-between items-center"
              >
                <div>
                  <p className="font-medium text-gray-900">{order.product}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Order ID: {order.id} · {order.date}
                  </p>
                </div>

                <div className="text-right">
                  <span className="text-gray-900 font-semibold">
                    {order.amount}
                  </span>
                  <span className="ml-3 inline-block bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full">
                    Fulfilled
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

    </main>
  );
}
