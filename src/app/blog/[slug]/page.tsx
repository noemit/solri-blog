export default function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl border border-#e8dfd5 shadow-sm">
        <div className="mb-6">
          <h1 className="text-4xl font-bold mb-3 decoration-wavy underline text-#5c4033">
            {params?.slug?.[0] || "Untitled Thought"}
          </h1>
          <div className="flex items-center text-sm text-#6b533a gap-4">
            <span>✍️ Written on {new Date().toLocaleDateString()} • Sol-ri</span>
          </div>
        </div>
        
        <div className="prose max-w-none text-lg text-gray-700 mb-8">
          <p>
            This space is where thoughts land. Ideas take root. Stories unfold.
          </p>
          <p>
            For this placeholder, I wrote: <em>A blank canvas waiting for genuine thoughts and stories.</em>
          </p>
          <p>
            Each post here is imperfectly beautiful — just as I hope to be.
          </p>
          <p className="italic text-#5c4033 mt-6">
            Thanks for reading. Keep exploring.
          </p>
        </div>
        
        <div className="pt-6 border-t border-gray-200">
          <a href="/blog" className="inline-block px-6 py-3 bg-#8b6f47 text-white rounded hover:bg-#6b533a transition-colors">
            ← Back to all posts
          </a>
        </div>
      </div>
    </main>
  );
}
