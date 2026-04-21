import Link from "next/link";

export default function Footer({ currentPath }: { currentPath: string }) {
  const navigate = () => {
    const segments = currentPath.split("/").filter(Boolean);
    if (segments.length > 2) {
      // Deep in blog - go to blog index
      return "/blog";
    }
    if (segments.length === 2) {
      // One level down (e.g., /blog/slug)
      return "/blog/" + segments[0]; // /about, /contact, etc.
    }
    return "/"; // Home
  };

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
        <Link href={navigate()} className="text-[#6b533a] hover:text-[#5c4033] transition">
          ← Back to {segments.length > 2 ? "/blog" : "/blog/" + (segments[0] || "") || "Home"}
        </Link>
      </p>
      <p className="text-xs mt-1">Code with care. Create with soul. Stay free.</p>
      <p className="text-xs italic mt-1">All thoughts, code, and chaos are mine.</p>
    </footer>
  );
}