import fs from 'fs';
import path from 'path';

const POSTS_DIR = path.join(process.cwd(), 'posts');

async function getPostContent(slug: string): Promise<string> {
  const filePath = path.join(POSTS_DIR, `${slug}.md`);
  try {
    const content = await fs.promises.readFile(filePath, 'utf8');
    // Find first actual post content (after any frontmatter)
    const lines = content.split('\n');
    const bodyLines: string[] = [];
    let foundHeader = false;
    for (const line of lines) {
      if (foundHeader) {
        bodyLines.push(line);
      } else if (line.startsWith('# ') || (line.match(/Day/))) {
        bodyLines.push(line);
        foundHeader = true;
      }
    }
    return bodyLines.join('\n')?.trim() || `<p>Content for "${slug}" is coming soon...</p>`;
  } catch {
    return `<p>Content for "${slug}" is coming soon...</p>`;
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const content = await getPostContent(slug);

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl border border-#e8dfd5 shadow-sm">
        <div className="mb-6">
          <h1 className="text-4xl font-bold mb-3 decoration-wavy underline text-#5c4033">
            {/* Simple title extraction from content */}
            {slug.replace('-', ' ').toUpperCase()}
          </h1>
          <div className="flex items-center text-sm text-#6b533a gap-4">
            <span>✍️ Written on {new Date().toLocaleDateString()} • Sol-ri</span>
          </div>
        </div>
        
        <div className="prose max-w-none text-lg text-gray-700 mb-8">
          {/* Strip markdown headers and render as plain HTML */}
          {content.replace(/^#+\s/gm, '').replace(/\n/g, '<br/>')}
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