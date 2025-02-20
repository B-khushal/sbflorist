// app/login/page.tsx
"use client";
import { useState } from "react";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt with", { email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-3xl font-bold text-center text-gray-800">Welcome Back</h1>
        <p className="text-center text-gray-600 mt-2">Don't have an account? <Link href="/register" className="text-blue-500 hover:underline">Sign Up</Link></p>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border rounded mt-1 focus:ring-2 focus:ring-blue-400" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input type="password" placeholder="Your Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 border rounded mt-1 focus:ring-2 focus:ring-blue-400" required />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded mt-4 hover:bg-blue-700 transition">Login</button>
        </form>
      </div>
    </div>
  );
}
