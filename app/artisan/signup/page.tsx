"use client";
import { useState } from "react";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
    language: "English",
    craftType: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8FAFC] px-4">

      {/* Brand Header */}
      <div className="text-center mb-6">
        <h2 className="text-4xl font-extrabold text-emerald-700 tracking-wide">
          KalaKriti
        </h2>
      </div>

      {/* SignUp Card */}
      <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-md border border-gray-100">

        <h2 className="text-center text-2xl font-bold text-gray-900">
          Create Your Account
        </h2>

        <p className="text-center text-gray-500 mt-2 text-sm">
          Join a community of creators and supporters.
        </p>

        {/* Inputs */}
        <div className="mt-6 space-y-4">

          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 focus:ring-2 focus:ring-emerald-500 outline-none"
            placeholder="Full Name"
          />

          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 focus:ring-2 focus:ring-emerald-500 outline-none"
            placeholder="Email Address"
          />

          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 focus:ring-2 focus:ring-emerald-500 outline-none"
            placeholder="Password"
          />

          <input
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 focus:ring-2 focus:ring-emerald-500 outline-none"
            placeholder="Enter your location"
          />

          {/* Language Preference */}
          <select
            name="language"
            value={formData.language}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 focus:ring-2 focus:ring-emerald-500 outline-none bg-white"
          >
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
          </select>

          {/* Type of Craft */}
          <input
            name="craftType"
            value={formData.craftType}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 focus:ring-2 focus:ring-emerald-500 outline-none"
            placeholder="Type of craft you are into (e.g. Pottery, Painting)"
          />

          <button
            className="w-full bg-emerald-600 text-white py-3 rounded-lg font-medium hover:bg-emerald-700 transition"
            onClick={() => console.log(formData)}
          >
            Sign Up
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-2 my-6">
          <span className="flex-1 border-t border-gray-300"></span>
          <span className="text-gray-500 text-xs">or continue with</span>
          <span className="flex-1 border-t border-gray-300"></span>
        </div>

        {/* Google Button */}
        <button className="w-full border border-gray-300 rounded-lg py-3 font-medium text-gray-700 hover:bg-gray-50 transition">
          Sign Up with Google
        </button>

        {/* Login Link */}
        <p className="text-center text-sm mt-6 text-gray-600">
          Already have an account?
          <a
            href="/artisan/login"
            className="text-emerald-600 font-semibold ml-1 hover:underline"
          >
            Log In
          </a>
        </p>

      </div>
    </div>
  );
}
