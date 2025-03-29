import Link from "next/link";

// 仮の投稿データ（実際はCMSやファイルシステムから取得する想定）
const posts = [
  {
    slug: "first-post",
    title: "初めてのブログ投稿",
    date: "2025-03-28",
    summary: "この投稿では、ポートフォリオサイトの立ち上げについて紹介します。",
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">ブログ</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <div key={post.slug} className="border-b pb-6">
            <h2 className="text-xl font-semibold hover:text-green-600 transition-colors">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="text-sm text-gray-500">{post.date}</p>
            <p className="mt-2 text-gray-700">{post.summary}</p>
            <Link href={`/blog/${post.slug}`} className="text-green-600 text-sm mt-2 inline-block hover:underline">
              続きを読む →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
