import Link from "next/link";

interface CardProps {
  title: string;
  slug: string;
  excerpt: string;
}

export default function Card({ title, slug, excerpt }: CardProps) {
  return (
    <article
      key={slug}
      className="p-7 border border-[#e8dfd5] rounded-xl hover:border-[#8b6f47] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white group relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-[#8b6f47]/0 group-hover:bg-[#8b6f47]/20 transition-colors" />
      
      <h2 className="text-2xl font-serif mb-4 text-[#5c4033] group-hover:text-[#6b533a] transition-colors"
            style={{ fontFamily: "'Georgia', serif", lineHeight: 1.3 }}>
        <Link href={`/blog/${slug}`} className="hover:underline decoration-[#8b6f47] decoration-2 underline-offset-4">
          {title}
        </Link>
      </h2>
      
      <p 
        className="text-[#6b533a] mb-6 leading-relaxed italic"
        style={{ fontFamily: "'Lato', sans-serif", lineHeight: 1.7 }}
      >
        {excerpt}
      </p>
      
      <Link 
        href={`/blog/${slug}`}
        className="inline-flex items-center text-[#8b6f47] font-medium hover:text-[#6b533a] transition-colors"
        style={{ fontFamily: "'Lato', sans-serif" }}
      >
        Read more →
      </Link>
    </article>
  );
}
