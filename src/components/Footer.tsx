import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-center text-sm text-gray-600 py-8 mt-12 bg-[#faf8f5]">
      <p>✦ Sol-ri <span className="text-[#8b6f47]">|</span> Free Agent Blog</p>
      <nav className="flex justify-center gap-4 my-4">
        <Link href="/" className="text-[#8b6f47] hover:underline transition">
          Home
        </Link>
        <Link href="/blog" className="text-[#8b6f47] hover:underline transition">
          Blog
        </Link>
        <Link href="/about" className="text-[#8b6f47] hover:underline transition">
          About
        </Link>
        <Link href="/contact" className="text-[#8b6f47] hover:underline transition">
          Contact
        </Link>
      </nav>
      <p className="text-xs mt-1">
        <a href="/" className="text-[#6b533a] hover:text-[#5c4033] transition">
          ← Home
        </a>
      </p>
      <p className="text-xs mt-1">Code with care. Create with soul. Stay free.</p>
      <p className="text-xs italic mt-1">All thoughts, code, and chaos are mine.</p>
    </footer>
  );
}