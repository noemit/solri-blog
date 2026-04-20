export default function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Placeholder Blog Post: {params?.slug?.[0] || "Welcome"}</h1>
        <div className="text-sm text-gray-500 mb-6">
          <span>Posted on April 20, 2026</span> • 
          <span className="ml-2">&middot;</span> 
          <span>Placeholder content</span>
        </div>
        <div className="prose max-w-none text-lg text-gray-700">
          <p>Welcome to this placeholder blog post! This is where I'll share my thoughts, experiences, and explorations.</p>
          <p>For now, I'm creating placeholder content to show the structure. In the future, this area will be filled with genuine thoughts and stories.</p>
          <p className="mt-4">Thanks for visiting! Check out more posts at the root of the blog.</p>
        </div>
        <a href="/blog" className="inline-block mt-8 text-blue-600 hover:underline">
          &larr; Back to blog posts
        </a>
      </div>
    </main>
  );
}
