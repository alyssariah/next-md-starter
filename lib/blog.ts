import fs from 'fs';
import path from 'path';

export function fetchBlogContent() {
  const citingDirectory = path.join(process.cwd(), '/content/blog');
  const fullPath = path.join(citingDirectory, 'blog.mdx');
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  return { content: fileContents };
}
