import Link from "next/link";

const blogs = [
  { id: "blog-1", title: "ブログ記事 1", description: "これは最初のブログ記事です。" },
  { id: "blog-2", title: "ブログ記事 2", description: "これは2つ目のブログ記事です。" },
];

export default function Blog() {
  return (
    <div>
      <h1 className="text-2xl font-bold">ブログ一覧</h1>
      <ul className="mt-4 space-y-4">
        {blogs.map((blog) => (
          <li key={blog.id} className="p-4 bg-white shadow rounded">
            <Link href={`/blog/${blog.id}`} className="text-blue-600 hover:underline">
              <h2 className="text-lg font-semibold">{blog.title}</h2>
            </Link>
            <p className="text-gray-600">{blog.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
