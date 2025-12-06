export default function BuyerProfile() {

  return (
    <main className="p-8 max-w-xl mx-auto">

      <h1 className="text-2xl font-bold text-gray-900">My Profile</h1>

      <div className="mt-6 bg-white rounded-xl shadow-sm border p-6">
        <img
          src="https://i.pravatar.cc/100?img=8"
          className="w-20 h-20 rounded-full mx-auto"
        />

        <h2 className="text-center text-xl font-semibold mt-3">
          Guest User
        </h2>
        <p className="text-center text-gray-500">guest@example.com</p>

        <div className="mt-6 space-y-4">
          <p className="border-b pb-2 text-gray-700">Address: Not added</p>
          <p className="border-b pb-2 text-gray-700">Phone: Not added</p>
          <p className="border-b pb-2 text-gray-700">Joined: Dec 2024</p>
        </div>
      </div>

    </main>
  );
}
