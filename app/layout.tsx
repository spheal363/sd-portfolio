import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "My personal portfolio showcasing projects, skills, and blogs.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="w-full max-w-screen-xl mx-auto p-4">{children}</main>
          <footer className="w-full py-4 text-center text-gray-600 bg-gray-200">
            &copy; {new Date().getFullYear()} Sumire Doi Portfolio. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}
