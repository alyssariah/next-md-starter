import { fetchBlogContent } from '@lib/blog';
import MarkdownDocument from '@components/markdown-document/MarkdownDocument';

export default function Blog() {
  const res = fetchBlogContent();
  return (
    <div className="w-[100%] flex flex-col items-center">
      <div className="w-[100%] max-w-[1440px] mt-8 relative min-h-[100vh] px-8 lg:px-20 markdown-content">
        <MarkdownDocument content={res.content} />
      </div>
    </div>
  );
}

export async function generateMetadata() {
  return {
    title: 'Markdown File',
  };
}
