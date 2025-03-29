'use client';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full py-4 text-center text-gray-600 bg-gray-200">
      &copy; {year} Sumire Doi Portfolio. All rights reserved.
    </footer>
  );
}
