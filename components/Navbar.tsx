"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuItems = [
    { href: "/", label: "HOME" },
    { href: "/blog", label: "BLOG" },
  ];

  const linkClasses = (href: string) =>
    `px-3 py-2 rounded transition-colors ${pathname === href ? "bg-green-700" : "hover:bg-green-600"
    }`;


  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-green-500 text-white z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-semibold tracking-tight">
          SD Portfolio
        </Link>

        {/* PCメニュー */}
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${linkClasses(item.href)} transition-colors`}
            >
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
        <div className="md:hidden px-6 pb-4 space-y-2 bg-green-500 shadow text-white">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`${linkClasses(item.href)} block text-sm font-medium`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
