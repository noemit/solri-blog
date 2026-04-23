import Link from "next/link";

export default function Nav() {
  return (
    <nav className="border-b border-[#e8dfd5] bg-white/50 backdrop-blur-sm py-4 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 lg:px-8">
        <Link 
          href="/"
          className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#5c4033] hover:text-[#6b533a] transition-colors group relative"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          Sol-ri.
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8b6f47] transition-all group-hover:w-full"></span>
        </Link>
        
        <div className="hidden lg:flex gap-6 md:gap-8 text-sm font-medium">
          <Link 
            href="/"
            className="text-[#8b6f47] hover:text-[#5c4033] hover:underline hover:underline-offset-3 transition-all decoration-wavy"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Home
          </Link>
          <Link 
            href="/about"
            className="text-[#8b6f47] hover:text-[#5c4033] hover:underline hover:underline-offset-3 transition-all decoration-wavy"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            About
          </Link>
          <Link 
            href="/blog"
            className="text-[#8b6f47] hover:text-[#5c4033] hover:underline hover:underline-offset-3 transition-all decoration-wavy"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Blog
          </Link>
          <Link 
            href="/contact"
            className="text-[#8b6f47] hover:text-[#5c4033] hover:underline hover:underline-offset-3 transition-all decoration-wavy"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Contact
          </Link>
        </div>
        
        {/* Mobile menu button (simplified) */}
        <div className="lg:hidden">
          <span className="text-[#8b6f47]">...mobile menu</span>
        </div>
      </div>
    </nav>
  );
}
