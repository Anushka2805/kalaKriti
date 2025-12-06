export default function BuyerCart() {

  const cart = [
    { id: 1, name: "Wooden Bowl", price: 540, qty: 2, img: "https://picsum.photos/303" },
    { id: 2, name: "Clay Lamp", price: 250, qty: 1, img: "https://picsum.photos/304" },
  ];

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold text-gray-900">Your Cart</h1>

      <div className="mt-6 space-y-4">
        {cart.map(item => (
          <div className="bg-white border px-4 py-3 rounded-xl shadow-sm flex gap-4 items-center">
            <img src={item.img} className="w-20 h-20 rounded-lg object-cover" />
            <div className="flex-1">
              <p className="font-medium">{item.name}</p>
              <p className="text-gray-500 text-sm">Qty: {item.qty}</p>
            </div>
            <p className="font-bold">₹{item.price * item.qty}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-white border rounded-xl shadow-sm p-5 flex justify-between items-center">
        <p className="font-semibold text-lg">Total</p>
        <p className="font-bold text-xl text-gray-900">₹{total}</p>
      </div>

      <button className="mt-6 w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg py-3 text-lg font-medium">
        Checkout
      </button>
    </main>
  );
}
