import { notFound } from "next/navigation";
import Image from "next/image";
import { promises as fs } from "fs";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

const projectData: { [key: string]: { title: string; genre: string; image: string } } = {
  endenial: { title: "ENDENIAL", genre: "Game", image: "/images/project1.png" },
  rokakone: { title: "ろかこね", genre: "Web App", image: "/images/project2.png" },
  "light-the-way": { title: "Light The Way", genre: "Game", image: "/images/project3.png" },
  "intercom-unlock": { title: "インターホン自動解錠", genre: "IoT", image: "/images/project4.png" },
  "portfolio-site": { title: "ポートフォリオサイト", genre: "Web App", image: "/images/project5.png" },
};

export default async function ProjectDetail({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const project = projectData[slug];

  if (!project) return notFound();

  // ✅ slug を文字列として展開
  const markdownPath = path.join(process.cwd(), "app", "projects", "markdown", `${slug}.md`);
  let descriptionHtml = "";

  try {
    const fileContents = await fs.readFile(markdownPath, "utf8");
    const processed = await remark().use(html).process(fileContents);
    descriptionHtml = processed.toString();
  } catch (err) {
    console.error("Markdown 読み込み失敗:", err);
  }

  return (
    <section className="p-6 bg-white">
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p className="text-gray-600 mt-2">{project.genre}</p>
      <Image
        src={project.image}
        alt={project.title}
        width={800}
        height={450}
        className="w-full max-w-2xl mt-4 rounded-lg shadow-md"
      />
      <div
        className="mt-6 text-lg prose prose-neutral"
        dangerouslySetInnerHTML={{ __html: descriptionHtml }}
      />
    </section>
  );
}
