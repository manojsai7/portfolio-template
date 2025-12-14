import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  author: string;
}

// Server-side function to read blog posts from the file system
// For larger sites, consider implementing caching or using a CMS
function getBlogPosts(): BlogPost[] {
  const blogDir = path.join(process.cwd(), 'data/blog');
  
  if (!fs.existsSync(blogDir)) {
    return [];
  }

  const files = fs.readdirSync(blogDir);
  const posts = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const filePath = path.join(blogDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(fileContent);
      return {
        slug: file.replace('.mdx', ''),
        title: data.title || '',
        date: data.date || '',
        excerpt: data.excerpt || '',
        tags: data.tags || [],
        author: data.author || '',
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export default function Blog() {
  const posts = getBlogPosts();

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Blog
        </h2>
        {posts.length === 0 ? (
          <p className="text-center text-gray-600 dark:text-gray-400">
            No blog posts yet. Check back soon!
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                  >
                    Read more →
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
