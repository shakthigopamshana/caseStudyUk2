'use client';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname to get the current route
import Image from "next/image"; // Import Next.js Image component
import { metadata } from "./metadata"; // Import metadata from the new file

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname(); // Get the current route

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex`}>
        {/* Sidebar Header */}
        <header className="bg-gray-800 text-white w-64 h-screen flex flex-col py-4 sticky top-0">
          <div className="mb-8">
            <Link href="/">
              <Image
                src="/images/Sheffield_Hallam_University_logo.svg.png"
                alt="Logo"
                width={64} // Specify width
                height={64} // Specify height
                className="w-16 h-16 mx-auto"
              />
            </Link>
          </div>
          <nav className="flex flex-col items-center gap-4 justify-center h-full">
            {[
              { href: "/design", label: "Design" },
              { href: "/financials", label: "Financials" },
              { href: "/gallery", label: "Gallery" },
              { href: "/health", label: "Health" },
              { href: "/resources", label: "Resources" },
              { href: "/risk-register", label: "Risk Register" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`w-full text-center py-2 px-4 rounded-md transition-colors ${pathname === link.href
                  ? "bg-purple-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </header>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          <main className="flex-1">{children}</main>

          {/* Footer */}
          <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
              &copy; 2025 Your Company. All rights reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
