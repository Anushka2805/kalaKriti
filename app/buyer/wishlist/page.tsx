export default function BuyerWishlist() {

  const items = [
    { id: 1, name: "Clay Ganesha", img: "https://picsum.photos/300", price: "₹450" },
    { id: 2, name: "Handwoven Scarf", img: "https://picsum.photos/301", price: "₹950" },
  ];

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold text-gray-900">My Wishlist</h1>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map(item => (
          <div key={item.id} className="bg-white rounded-xl shadow-sm border p-3">
            <img src={item.img} className="rounded-lg w-full h-40 object-cover" />
            <p className="mt-3 font-medium">{item.name}</p>
            <p className="font-bold text-gray-900">{item.price}</p>
            <button className="mt-2 w-full bg-emerald-600 text-white rounded-lg py-2 text-sm">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
