import { notFound } from "next/navigation";

const blogs: Record<string, { title: string; content: string }> = {
  "blog-1": { title: "ブログ記事 1", content: "これは最初のブログ記事の内容です。" },
  "blog-2": { title: "ブログ記事 2", content: "これは2つ目のブログ記事の内容です。" },
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const blog = blogs[params.slug];

  if (!blog) return notFound(); // 存在しない記事は404ページへ

  return (
    <div>
      <h1 className="text-2xl font-bold">{blog.title}</h1>
      <p className="mt-4">{blog.content}</p>
    </div>
  );
}
