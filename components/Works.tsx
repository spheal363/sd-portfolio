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
      link: "/projects/endenial"
    },
    {
      image: "/images/project2.png",
      genre: "Web App",
      title: "ろかこね",
      link: "/projects/rokakone"
    },
    {
      image: "/images/project3.png",
      genre: "Game",
      title: "Light The Way",
      link: "/projects/light-the-way"
    },
    {
      image: "/images/project4.png",
      genre: "IoT",
      title: "インターホン自動解錠",
      link: "/projects/intercom-unlock"
    },
    {
      image: "/images/project5.png",
      genre: "Web App",
      title: "ポートフォリオサイト",
      link: "/projects/portfolio-site"
    }
  ];

  const [filter, setFilter] = useState("All");
  const genres = ["All", "Web App", "Mobile App(制作予定)", "Game", "IoT"];
  const filteredProjects =
    filter === "All"
      ? allProjects
      : allProjects.filter((p) => p.genre === filter);

  return (
    <section className="bg-white p-6">
      <h3 className="text-lg font-semibold text-green-500 text-center">PORTFOLIO</h3>
      <h2 className="text-2xl font-bold mt-1 mb-6 text-center">My Recent Works</h2>

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
              className="group rounded-lg overflow-hidden shadow-lg w-full"
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, exit: { duration: 0 } }}
            >
              <Link href={project.link} className="block">
                <div className="aspect-square">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="text-sm text-gray-500">{project.genre}</p>
                  <h3 className="text-lg font-semibold mt-1 text-black transition-colors duration-200 hover:text-green-500">
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
