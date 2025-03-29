"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Works() {
  const allProjects = [
    {
      image: "/images/project1.png",
      genre: "Game",
      title: "ENDENIAL",
      link: "/projects/endenial",
      description:
        "後ろからすべてが欠けていく終末世界の中、世界を直す7つの「かけら」を集める横スクロールアクションゲーム",
    },
    {
      image: "/images/project2.png",
      genre: "Web App",
      title: "ろかこね",
      link: "/projects/locaconne",
      description:
        "地域に関する情報を共有し、ユーザー同士でつながることを目的としたウェブアプリケーション",
    },
    {
      image: "/images/project3.png",
      genre: "Game",
      title: "Light The Way",
      link: "/projects/light-the-way",
      description: "記憶力で脱出！光で照らす迷路ゲーム",
    },
    {
      image: "/images/project4.png",
      genre: "IoT",
      title: "インターホン自動解錠",
      link: "/projects/intercom-unlock",
      description:
        "自宅のインターホンが押されたことを検知してスマホから開錠",
    },
    {
      image: "/images/project5.png",
      genre: "Web App",
      title: "ポートフォリオサイト",
      link: "/projects/portfolio-site",
      description: "このサイトです。",
    },
    {
      image: "/images/project6.png",
      genre: "Web App",
      title: "WEBメモ帳",
      link: "/projects/web-memo",
      description: "Reactを理解するために一日で制作",
    },
  ];

  const [filter, setFilter] = useState("All");
  const genres = ["All", "Web App", "Mobile App(制作予定)", "Game", "IoT"];
  const filteredProjects =
    filter === "All"
      ? allProjects
      : allProjects.filter((p) => p.genre === filter);

  return (
    <section className="bg-white p-6">
      <h3 className="text-lg font-semibold text-green-500 text-center">
        PORTFOLIO
      </h3>
      <h2 className="text-2xl font-bold mt-1 mb-6 text-center">
        My Recent Works
      </h2>

      <div className="flex justify-center space-x-4 mb-6">
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => setFilter(genre)}
            className={`px-4 py-2 border-2 rounded-full transition-all duration-300 ${filter === genre
              ? "bg-green-500 text-white border-green-500"
              : "border-green-500 text-green-500 bg-white hover:bg-green-500 hover:text-white"
              }`}
          >
            {genre}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              // ホバー時に枠が出現するため、relative group を付与
              className="relative group rounded-lg overflow-hidden shadow-lg w-full"
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, exit: { duration: 0 } }}
            >
              {/* 枠線アニメーション用のSVG（左右から上に向かって） */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-10"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                {/* 左側パス: 中央下 → 左下 → 左上 → 中央上 */}
                <path
                  d="M 50,100 L 0,100 L 0,0 L 50,0"
                  fill="none"
                  stroke="green"
                  strokeWidth="2"
                  className="[stroke-dasharray:300] [stroke-dashoffset:300] transition-all duration-1000 group-hover:[stroke-dashoffset:0]"
                />

                {/* 右側パス: 中央下 → 右下 → 右上 → 中央上 */}
                <path
                  d="M 50,100 L 100,100 L 100,0 L 50,0"
                  fill="none"
                  stroke="green"
                  strokeWidth="2"
                  className="[stroke-dasharray:300] [stroke-dashoffset:300] transition-all duration-1000 group-hover:[stroke-dashoffset:0]"
                />
              </svg>

              <Link href={project.link} className="block">
                <div className="relative aspect-square rounded-lg overflow-hidden perspective">
                  <div className="w-full h-full transform-style preserve-3d transition-transform duration-500 group-hover:rotate-y-180">
                    {/* Front Side */}
                    <div className="absolute inset-0 backface-hidden rounded-lg overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover w-full h-full"
                      />
                    </div>

                    {/* Back Side */}
                    <div className="absolute inset-0 bg-green-100 text-black p-4 flex items-center justify-center text-center rotate-y-180 backface-hidden rounded-lg overflow-hidden">
                      <p className="text-sm">{project.description}</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 text-center">
                  <p className="text-sm text-gray-500">{project.genre}</p>
                  <h3 className="text-lg font-semibold mt-1 text-black transition-colors duration-200 group-hover:text-green-500">
                    {project.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
