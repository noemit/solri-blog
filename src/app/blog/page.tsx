async function getPosts(): Promise<Array<{ slug: string; title: string; excerpt: string }>> {
  const fs = require('fs');
  const path = require('path');
  
  const POSTS_DIR = path.join(process.cwd(), 'posts');
  try {
    const files = fs.readdirSync(POSTS_DIR);
    const posts: Array<{ slug: string; title: string; excerpt: string }> = [];
    
    for (const file of files) {
      if (file.endsWith('.md')) {
        const fileName = file.replace('.md', '');
        const fullPath = path.join(POSTS_DIR, file);
        const content = fs.readFileSync(fullPath, 'utf8');
        
        const lines = content.split('\n');
        let title = fileName.replace(/-/g, ' ').toUpperCase();
        let excerpt = 'Read more about this topic.';
        let firstHeader = false;
        
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i];
          if (line.startsWith('# ') && !firstHeader) {
            const titleMatch = line.match(/^# ((.+) (.)+)/);
            if (titleMatch) {
              title = titleMatch[1].trim();
            }
            firstHeader = true;
          }
        }
        
        posts.push({
          slug: fileName,
          title,
          excerpt,
        });
      }
    }
    
    return posts;
  } catch (error) {
    console.error('Error reading posts:', error);
    return [];
  }
}

export default async function BlogIndex() {
  const posts = await getPosts();

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
