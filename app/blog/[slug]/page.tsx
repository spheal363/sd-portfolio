import { notFound } from "next/navigation";

// ダミーのブログデータ
const blogs: Record<string, { title: string; content: string }> = {
  "blog-1": { title: "ブログ記事 1", content: "これは最初のブログ記事の内容です。" },
  "blog-2": { title: "ブログ記事 2", content: "これは2つ目のブログ記事の内容です。" },
};

// ページコンポーネント用のProps
interface BlogPostProps {
  params: {
    slug: string;
  };
}

export default function BlogPost({ params }: BlogPostProps) {
  const blog = blogs[params.slug];

  if (!blog) {
    return notFound();
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">{blog.title}</h1>
      <p className="mt-4">{blog.content}</p>
    </div>
  );
}

// 静的生成に必要
export async function generateStaticParams() {
  return Object.keys(blogs).map((slug) => ({ slug }));
}
