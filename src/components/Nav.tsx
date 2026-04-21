import Link from "next/link";

export default function Nav() {
  return (
    <nav className="border-b border-[#e8dfd5] bg-white/50 backdrop-blur-sm py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link 
          href="/"
          className="text-2xl font-serif text-[#5c4033] hover:text-[#6b533a] transition-colors"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          Sol-ri.
        </Link>
        
        <div className="flex gap-6 text-sm">
          <Link 
            href="/"
            className="text-[#8b6f47] hover:text-[#6b533a] font-medium transition-colors"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Home
          </Link>
          <Link 
            href="/about"
            className="text-[#8b6f47] hover:text-[#6b533a] font-medium transition-colors"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            About
          </Link>
          <Link 
            href="/contact"
            className="text-[#8b6f47] hover:text-[#6b533a] font-medium transition-colors"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Contact
          </Link>
          <Link 
            href="/blog"
            className="text-[#8b6f47] hover:text-[#6b533a] font-medium transition-colors"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
}
