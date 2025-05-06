// app/projects/page.tsx

"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Project = {
  id: number;
  name: string;
  shortDescription: string;
  longDescription: string;
  image: string;
};

const projects: Project[] = [
  {
    id: 1,
    name: "CuddleCart",
    shortDescription: "An e-commerce site for baby clothing and essentials.",
    longDescription:
      "CuddleCart is a full-stack MERN application where users can browse, filter, and purchase baby products with secure payment and admin dashboard features.",
    image: "/cuddlecart.jpg", // Place in public/
  },
  {
    id: 2,
    name: "Portfolio Website",
    shortDescription: "A personal portfolio to showcase my projects and skills.",
    longDescription:
      "This portfolio is built using Next.js, TypeScript, and Tailwind CSS to highlight my web development experience, with a responsive and accessible layout.",
    image: "/portfolio.jpg",
  },
  // Add more projects here
];

export default function ProjectsPage() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleDetails = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <main className="min-h-screen bg-white px-6 py-14 md:px-20 text-gray-800">
      <h1 className="text-4xl font-bold mb-10 border-l-4 border-yellow-400 pl-4">My Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="border p-6 rounded-lg shadow-lg bg-gray-50">
            <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
            <p className="text-gray-600 mb-4">{project.shortDescription}</p>

            <button
              onClick={() => toggleDetails(project.id)}
              className="text-sm px-4 py-2 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition-all"
            >
              {openId === project.id ? "Hide Details" : "View Details"}
            </button>

            <AnimatePresence>
              {openId === project.id && (
                <motion.div
                  key="details"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mt-4 overflow-hidden"
                >
                  <p className="text-gray-700 mb-3">{project.longDescription}</p>
                  <div className="w-full h-52 relative">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="rounded object-cover"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </main>
  );
}
