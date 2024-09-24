"use client"; // Mark this as a client component

import React from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  // Handle button click
  const handleStartNow = () => {
    router.push("/sign-up"); // Navigate to the signup page (you can change the route)
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <button
        onClick={handleStartNow}
        className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Start Now
      </button>
    </div>
  );
}
