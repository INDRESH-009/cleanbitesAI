"use client";

import { ClerkProvider } from "@clerk/nextjs"; // Import ClerkProvider for client-side
import "./globals.css";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Conditionally show the Navbar based on the path
  const showNavbar = !["/signin", "/signup", "/", "/sign-up"].includes(pathname);

  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang="en">
        <body className="bg-gray-100 h-screen">
          {/* Conditionally render the Navbar */}
          {showNavbar && <Navbar />}
          
          {/* Ensure that content starts below the Navbar if it's shown */}
          <main className={showNavbar ? "pl-14" : ""}>
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
