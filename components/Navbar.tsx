import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white text-green-500 py-4 z-50 shadow-md">
      <div className="max-w-4xl mx-auto flex justify-between px-4">
        <Link href="/" className="text-lg font-bold">SD Portfolio</Link>
        <div className="space-x-4">
          <Link href="/" className="hover:underline">HOME</Link>
          {/* <Link href="/blog" className="hover:underline">BLOG</Link> */}
        </div>
      </div>
    </nav>
  );
}
