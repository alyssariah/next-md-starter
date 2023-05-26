import fs from 'fs';
import path from 'path';

export function fetchAboutContent() {
  const citingDirectory = path.join(process.cwd(), '/content/about');
  const fullPath = path.join(citingDirectory, 'about.mdx');
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  return { content: fileContents };
}
