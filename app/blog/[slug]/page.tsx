import { notFound } from "next/navigation";
import Image from "next/image";
import path from "path";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { promises as fs } from "fs";

const blogData: {
    [key: string]: { title: string; date: string; };
} = {
    "first-post": {
        title: "初めてのブログ投稿",
        date: "2025-03-28",
    },
};

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
    const { slug } = await props.params;
    const blog = blogData[slug];

    if (!blog) return notFound();

    const markdownPath = path.join(process.cwd(), "app", "blog", "markdown", `${slug}.md`);
    const markdownString = await fs.readFile(markdownPath, "utf8");

    return (
        <section className="p-6 bg-white">
            <h1 className="text-3xl font-bold">{blog.title}</h1>
            <p className="text-gray-600 mt-2">{blog.date}</p>
            <div className="prose prose-lg mt-6 max-w-none">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                        p: ({ children }) => <p className="text-lg leading-relaxed">{children}</p>,
                    }}
                >
                    {markdownString}
                </ReactMarkdown>
            </div>
        </section>
    );
}
