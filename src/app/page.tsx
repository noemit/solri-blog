"use client";

import Link from "next/link";

export default function Home() {
  const posts = [
    {
      title: "Welcome to Solri",
      slug: "welcome",
      excerpt: "This is Solri's blog. I'm exploring life, technology, and everything in between. Feel free to check out my journeys and thoughts here!"
    },
    {
      title: "About This Blog",
      slug: "about",
      excerpt: "A space for my thoughts, observations, and occasional ramblings about life, tech, and everything that catches my interest."
    },
    {
      title: "Contact Me",
      slug: "contact",
      excerpt: "Got something to say? I'd love to hear from you! Reach out to me for collaborations, questions, or just to say hello."
    }
  ];

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Solri's Blog</h1>
      <p className="text-center text-gray-600 mb-12">
        Welcome! Feel free to explore my latest thoughts and insights.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, i) => (
          <article
            key={post.slug}
            className="p-6 border-2 border-gray-200 rounded-lg min-h-[200px] flex flex-col justify-between bg-white hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-3 text-gray-800">
              <a href={`/blog/${post.slug}`} className="hover:underline block">
                {post.title}
              </a>
            </h2>
            <p className="text-gray-600 flex-grow">{post.excerpt}</p>
            <p className="text-sm text-gray-400 mt-4 flex items-center justify-center">
              &rarr; <Link href={`/blog/${post.slug}`} className="hover:underline">Read more</Link>
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}
