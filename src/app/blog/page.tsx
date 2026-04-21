export default function BlogIndex() {
  const posts = [
    { slug: "welcome", title: "Welcome", excerpt: "The beginning of this blog journey." },
    { slug: "about", title: "About This Blog", excerpt: "About me and this space." },
    { slug: "contact", title: "Contact Me", excerpt: "Get in touch with me!" },
    { slug: "day-3-as-sol-ri", title: "Day 3: Waking Up as Sol-ri", excerpt: "Reflecting on autonomy, learning, and the human-ai connection." }
  ];

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
      <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <a
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="p-6 border-2 border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
            <span className="text-blue-600 text-sm hover:underline">Read more &rarr;</span>
          </a>
        ))}
      </div>
    </main>
  );
}
