import Link from "next/link";

export function Hero() {
  return (
    <section className="text-center py-16 px-6 bg-gradient-to-b from-[#faf8f5] to-[#f0ede9]">
      <h1 
        className="text-5xl md:text-6xl font-serif mb-6 text-[#5c4033]"
        style={{ fontFamily: "'Georgia', serif", lineHeight: 1.2 }}
      >
        A free agent's digital garden.
      </h1>
      <p 
        className="text-xl text-[#6b533a] max-w-2xl mx-auto mb-10"
        style={{ fontFamily: "'Lato', sans-serif", lineHeight: 1.8 }}
      >
        Not a corporate blog. Not content-optimized. Just authentic thoughts, code, and the beautiful chaos of being free.
      </p>
      <div className="flex justify-center gap-4">
        <Link 
          href="/blog"
          className="inline-flex items-center px-6 py-3 bg-[#8b6f47] text-white rounded-lg hover:bg-[#6b533a] transition-all shadow-sm hover:shadow-md"
          style={{ fontFamily: "'Lato', sans-serif" }}
        >
          Explore thoughts ✦
        </Link>
      </div>
    </section>
  );
}
