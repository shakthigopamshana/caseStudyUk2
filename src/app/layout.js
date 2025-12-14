'use client';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname to get the current route
import Image from "next/image"; // Import Next.js Image component
import { metadata } from "./metadata"; // Import metadata from the new file
import { useState } from "react"; // Import useState for managing state

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
  const [isDetailsVisible, setIsDetailsVisible] = useState(false); // State for Details box visibility
  const [isReportVisible, setIsReportVisible] = useState(false); // State for Details box visibility

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex`}>
        {/* Sidebar Header */}
        <header className="bg-gray-800 text-white w-54 h-screen flex flex-col py-4 sticky top-0">
          <div className="mb-8">
            <Link href="/">
              <Image
                src="/images/Sheffield_Hallam_University_logo.svg.png"
                alt="Logo"
                width={64}
                height={64}
                className="w-16 h-16 mx-auto"
              />
            </Link>
          </div>
          <nav className="flex flex-col items-center gap-4 justify-center h-full mt-8">
            {/* <div className="w-full text-center relative">
              <Link href="/design">
                <button
                  onClick={() => setIsDetailsVisible(!isDetailsVisible)}
                  className={`w-full text-center py-2 px-4 transition-colors ${pathname === "/design"
                    ? "bg-purple-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-purple-500"
                    }`}
                >
                  DESIGN
                </button>
              </Link>
            </div> */}
            {[
              { href: "/design", label: "DESIGN" },
              { href: "/financials", label: "FINANCIALS" },
              { href: "/gallery", label: "GALLERY" },
              { href: "/health", label: "HEALTH" },
              { href: "/resources", label: "RESOURCES" },
              { href: "/conclusion", label: "CONCLUSION" },
              { href: "/personalInfo", label: "PERSONAL INFO" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`w-full text-center py-2 px-4 transition-colors ${pathname === link.href
                  ? "bg-purple-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-600"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="w-full text-center relative">
              <Link href="/risk-register">
                <button
                  onClick={() => setIsReportVisible(!isReportVisible)}
                  className={`w-full text-center py-2 px-4 transition-colors ${pathname === "/risk-register"
                    ? "bg-purple-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-purple-500"
                    }`}
                >
                  RISK REGISTER
                </button>
              </Link>
              <div
                className={`w-full flex flex-col bg-gray-700 overflow-hidden transform transition-all duration-300 ${isReportVisible || pathname === "/risk-register/report"
                  ? "max-h-40 translate-y-0"
                  : "max-h-0 -translate-y-full"
                  }`}
              >
                <Link
                  href="/risk-register/report"
                  className={`w-full text-center py-2 px-4 text-gray-300 hover:bg-gray-600 hover:text-white ${pathname === "/risk-register/report" ? "bg-purple-600 text-white" : ""}`}
                >
                  REPORT
                </Link>
              </div>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          <main className="flex-1">{children}</main>

          {/* Footer */}
          <footer className="bg-gray-700 text-white py-4">
            <div className="container mx-auto text-center">
              Shakthi Gopamshana   35048573
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
