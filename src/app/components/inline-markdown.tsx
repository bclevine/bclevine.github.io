import Markdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

export function InlineMarkdownContent({ content }: { content: string }) {
  return <Markdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]} components={{ p: ({ children }) => <>{children}</>, a: ({ children, ...props }) => <a {...props}>{children}</a> }}>{content}</Markdown>;
}
