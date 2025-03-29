"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuItems = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/services", label: "SERVICES" },
    { href: "/portfolio", label: "PORTFOLIO" },
    { href: "/blog", label: "BLOG" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-white text-gray-800 z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-semibold tracking-tight hover:text-green-600 transition-colors">
          SD Portfolio
        </Link>

        {/* PCメニュー */}
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-green-600 transition-colors">
              {item.label}
            </Link>
          ))}
        </div>

        {/* ハンバーガーメニューアイコン（モバイル用） */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* モバイルメニュー */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2 bg-white shadow">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block text-sm font-medium hover:text-green-600 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
