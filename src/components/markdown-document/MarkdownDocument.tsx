'use client';
import ReactMarkdown from 'react-markdown';
import 'katex/dist/katex.css';
import rehypeRaw from 'rehype-raw';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import RemarkMathPlugin from 'remark-math';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

export interface DocumentProps {
  content: string;
}

export default function MarkdownDocument({ content }: DocumentProps) {
  return (
    <div className="markdown-content min-h-[calc(100vh-280px)]">
      <ReactMarkdown
        rehypePlugins={[rehypeRaw, rehypeKatex]}
        remarkPlugins={[remarkGfm, RemarkMathPlugin]}
        // eslint-disable-next-line react/no-children-prop
        children={content}
        components={{
          code({ inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                language={match[1]}
                // eslint-disable-next-line react/no-children-prop
                children={String(children).replace(/\n$/, '')}
                // style={theme === 'dark' ? xonokai : vs}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      ></ReactMarkdown>
    </div>
  );
}
