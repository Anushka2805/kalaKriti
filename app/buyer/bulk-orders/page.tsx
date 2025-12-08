"use client";

import { useState } from "react";
import { FiBriefcase, FiMapPin, FiUsers } from "react-icons/fi";

type BulkRequirement = {
  id: number;
  title: string;
  quantity: string;
  budgetRange: string;
  location: string;
  deadline: string;
  notes: string;
  status: "Open" | "Shortlisting" | "Closed";
};

const SAMPLE_BULK: BulkRequirement[] = [
  {
    id: 1,
    title: "Corporate Diwali hampers with artisanal sweets",
    quantity: "250 hampers",
    budgetRange: "₹800 – ₹1,000 / hamper",
    location: "Gurugram, Haryana",
    deadline: "Needed before 20 Oct",
    notes: "Preference for attractive boxes and mixed regional sweets. Logo sticker required.",
    status: "Shortlisting",
  },
  {
    id: 2,
    title: "Handmade dolls for preschool return gifts",
    quantity: "60 pieces",
    budgetRange: "₹400 – ₹600 / piece",
    location: "Pune, Maharashtra",
    deadline: "Needed in 4 weeks",
    notes: "Soft & safe for 3–5 yrs. Custom name tags on 10 dolls.",
    status: "Open",
  },
];

export default function BulkOrdersPage() {
  const [requirements, setRequirements] = useState<BulkRequirement[]>(SAMPLE_BULK);
  const [formState, setFormState] = useState({
    title: "",
    quantity: "",
    budgetRange: "",
    location: "",
    deadline: "",
    notes: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newReq: BulkRequirement = {
      id: Date.now(),
      ...formState,
      status: "Open",
    };
    setRequirements((prev) => [newReq, ...prev]);
    setFormState({
      title: "",
      quantity: "",
      budgetRange: "",
      location: "",
      deadline: "",
      notes: "",
    });
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2500);
  };

  return (
    <main className="max-w-6xl mx-auto px-4 py-6 space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
          <FiBriefcase className="w-5 h-5 text-emerald-700" />
          Bulk Order Board
        </h1>
        <p className="text-sm text-gray-600 max-w-2xl">
          Post your bulk requirement once. Verified artisans can review details
          and apply with quotes, timelines, and sample photos. You stay in
          control on the buyer side.
        </p>
      </header>

      {/* Form */}
      <section className="border border-gray-100 rounded-3xl bg-white p-4 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-gray-900">
            Create a new bulk requirement
          </h2>
          {showSuccess && (
            <span className="text-[11px] text-emerald-700">
              Posted. Artisans will see this in their board.
            </span>
          )}
        </div>

        <form
          className="grid md:grid-cols-2 gap-3 text-xs"
          onSubmit={handleSubmit}
        >
          <div className="space-y-2">
            <div className="space-y-1">
              <label className="block text-gray-700">
                Requirement title *
              </label>
              <input
                required
                name="title"
                value={formState.title}
                onChange={handleChange}
                placeholder="e.g. Eco-friendly gift hampers for annual meet"
                className="w-full rounded-xl border border-gray-200 px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-1">
                <label className="block text-gray-700">Quantity *</label>
                <input
                  required
                  name="quantity"
                  value={formState.quantity}
                  onChange={handleChange}
                  placeholder="e.g. 150 pieces"
                  className="w-full rounded-xl border border-gray-200 px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-gray-700">
                  Budget range (per unit / hamper) *
                </label>
                <input
                  required
                  name="budgetRange"
                  value={formState.budgetRange}
                  onChange={handleChange}
                  placeholder="e.g. ₹500 – ₹700"
                  className="w-full rounded-xl border border-gray-200 px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="block text-gray-700">
                Location / delivery city *
              </label>
              <input
                required
                name="location"
                value={formState.location}
                onChange={handleChange}
                placeholder="e.g. Mumbai, Maharashtra"
                className="w-full rounded-xl border border-gray-200 px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-gray-700">
                Deadline or event date
              </label>
              <input
                type="date"
                name="deadline"
                value={formState.deadline}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="space-y-1 h-full">
              <label className="block text-gray-700">
                Describe your requirement *
              </label>
              <textarea
                required
                name="notes"
                value={formState.notes}
                onChange={handleChange}
                rows={8}
                placeholder="Mention material preferences, packaging, branding (logos), timelines, and any samples or references you have."
                className="w-full h-full rounded-xl border border-gray-200 px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-emerald-500 resize-none"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-4 py-1.5 rounded-full bg-emerald-700 text-white text-xs font-medium hover:bg-emerald-800"
              >
                Post requirement
              </button>
            </div>
          </div>
        </form>
      </section>

      {/* Existing requirements */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-gray-900">
          Your posted requirements
        </h2>

        {requirements.length === 0 ? (
          <p className="text-xs text-gray-500 border border-dashed rounded-2xl p-4 text-center">
            Once you post a bulk requirement, it will appear here with artisan
            responses and status.
          </p>
        ) : (
          <div className="grid gap-3">
            {requirements.map((req) => (
              <article
                key={req.id}
                className="border border-gray-100 rounded-2xl bg-white p-4 shadow-sm text-xs space-y-2"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">
                      {req.title}
                    </h3>
                    <p className="text-gray-500 flex items-center gap-1 mt-0.5">
                      <FiMapPin className="w-3 h-3" />
                      {req.location}
                    </p>
                  </div>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] ${
                      req.status === "Open"
                        ? "bg-emerald-50 text-emerald-700"
                        : req.status === "Shortlisting"
                        ? "bg-amber-50 text-amber-700"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {req.status}
                  </span>
                </div>

                <div className="grid sm:grid-cols-3 gap-2">
                  <div className="space-y-0.5">
                    <p className="text-gray-600">
                      Quantity: <span className="font-medium">{req.quantity}</span>
                    </p>
                    <p className="text-gray-600">
                      Budget:{" "}
                      <span className="font-medium">{req.budgetRange}</span>
                    </p>
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-gray-600">
                      Deadline:{" "}
                      <span className="font-medium">
                        {req.deadline || "Flexible"}
                      </span>
                    </p>
                    <p className="text-gray-500 flex items-center gap-1">
                      <FiUsers className="w-3 h-3" />
                      Artisan applications will appear here
                    </p>
                  </div>
                  <p className="text-gray-600 text-[11px] sm:col-span-1">
                    {req.notes}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
