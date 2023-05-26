import fs from 'fs';
import path from 'path';

export function fetchContactContent() {
  const citingDirectory = path.join(process.cwd(), '/content/contact');
  const fullPath = path.join(citingDirectory, 'contact.mdx');
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  return { content: fileContents };
}
