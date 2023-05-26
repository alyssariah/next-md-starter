import fs from 'fs';
import path from 'path';

export function fetchMarkdownContent() {
  const citingDirectory = path.join(process.cwd(), '/content/markdown');
  const fullPath = path.join(citingDirectory, 'markdown.mdx');
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  return { content: fileContents };
}
