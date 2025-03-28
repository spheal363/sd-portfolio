import { notFound } from "next/navigation";
import Image from "next/image";
import path from "path";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { promises as fs } from "fs";

const projectData: { [key: string]: { title: string; genre: string; image: string } } = {
  endenial: { title: "ENDENIAL", genre: "Game", image: "/images/project1.png" },
  locaconne: { title: "ろかこね", genre: "Web App", image: "/images/project2.png" },
  "light-the-way": { title: "Light The Way", genre: "Game", image: "/images/project3.png" },
  "intercom-unlock": { title: "インターホン自動解錠", genre: "IoT", image: "/images/project4.png" },
  "portfolio-site": { title: "ポートフォリオサイト", genre: "Web App", image: "/images/project5.png" },
  "web-memo": { title: "WEBメモ帳", genre: "Web App", image: "/images/project6.png" }
};

export default async function ProjectDetail(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const { slug } = params;
  const project = projectData[slug];

  if (!project) return notFound();

  const markdownPath = path.join(process.cwd(), "app", "projects", "markdown", `${slug}.md`);
  const markdownString = await fs.readFile(markdownPath, "utf8");

  return (
    <section className="p-6 bg-white">
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p className="text-gray-600 mt-2">{project.genre}</p>
      <Image
        src={project.image}
        alt={project.title}
        width={1080}
        height={720}
        className="w-auto mt-4 rounded-lg shadow-md"
      />
      <div className="prose w-full mt-6">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            p: ({ children }) => (
              <p className="text-2xl">{children}</p>
            ),
          }}
        >
          {markdownString}
        </ReactMarkdown>
      </div>
    </section>
  );
}
