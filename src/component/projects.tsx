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
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
  category: string;
};

const projects: Project[] = [
  {
    id: 1,
    name: "CuddleCart",
    shortDescription: "E-commerce for baby essentials",
    longDescription:
      "CuddleCart is a full-stack MERN application where users can browse, filter, and purchase baby products with secure payment integration, user authentication, and comprehensive admin dashboard features for inventory management.",
    image: "/cuddlecart.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    liveLink: "https://cuddlecart.vercel.app",
    githubLink: "https://github.com/username/cuddlecart",
    category: "Full Stack"
  },
  {
    id: 2,
    name: "Portfolio Website",
    shortDescription: "Personal portfolio showcase",
    longDescription:
      "This portfolio is built using Next.js, TypeScript, and Tailwind CSS to highlight my web development experience, featuring a responsive design, dark mode toggle, and accessibility-first approach.",
    image: "/portfolio.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveLink: "https://portfolio.vercel.app",
    githubLink: "https://github.com/username/portfolio",
    category: "Frontend"
  },
  {
    id: 3,
    name: "Task Manager Pro",
    shortDescription: "Advanced productivity tool",
    longDescription:
      "A comprehensive task management application with real-time collaboration, project tracking, team management, and advanced analytics dashboard built with modern web technologies.",
    image: "/taskmanager.jpg",
    technologies: ["Vue.js", "Firebase", "Chart.js"],
    liveLink: "https://taskmanager.vercel.app",
    githubLink: "https://github.com/username/taskmanager",
    category: "Full Stack"
  }
];

const categories = ["All", "Frontend", "Full Stack", "Backend"];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleDetails = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <main className="min-h-screen bg-white px-6 py-14 md:px-20 text-gray-800">
      {/* Header Section */}
      <h1 className="text-4xl font-bold mb-10 border-l-4 border-yellow-400 pl-4">My Projects</h1>

      {/* Category Filter */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex justify-center mb-8"
      >
        <div className="bg-gray-100 rounded-full p-2  space-x-3 shadow-md inline-flex items-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 space-x-2 rounded-full transition-all duration-300 font-medium text-sm whitespace-nowrap ${
                selectedCategory === category
                  ? "bg-yellow-400 text-white shadow-md transform scale-105"
                  : "text-gray-600 hover:text-gray-800 hover:bg-white/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`group relative border border-gray-200 rounded-xl shadow-md bg-white cursor-pointer hover:shadow-lg hover:border-yellow-300 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden ${
                openId === project.id ? 'z-10' : ''
              }`}
              onClick={() => toggleDetails(project.id)}
            >
              <div className="flex flex-col">
                {/* Image Section */}
                <div className="relative h-32 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-2 left-2">
                    <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-gray-700 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-3 flex-1">
                  <h3 className="text-sm font-semibold text-gray-800 mb-1 group-hover:text-yellow-600 transition-colors">
                    {project.name}
                  </h3>
                  
                  <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                    {project.shortDescription}
                  </p>

                  {/* Explore Button */}
                  <button className="w-full text-xs px-3 py-1.5 bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-lg hover:from-yellow-500 hover:to-orange-500 transition-all duration-200 shadow-sm hover:shadow-md font-medium mb-3">
                    {openId === project.id ? "✕ Close" : "✨ Explore"}
                  </button>

                  {/* Expandable Details */}
                  <AnimatePresence>
                    {openId === project.id && (
                      <motion.div
                        key="details"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden bg-gradient-to-b from-gray-50 to-white border-t border-gray-100 -mx-3 px-3 pt-3"
                      >
                        <div className="space-y-3">
                          <p className="text-xs text-gray-700 leading-relaxed">
                            {project.longDescription}
                          </p>
                          
                          {/* Technologies */}
                          <div>
                            <h4 className="text-xs font-semibold text-gray-800 mb-1">Tech Stack:</h4>
                            <div className="flex flex-wrap gap-1">
                              {project.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Action Links */}
                          <div className="flex gap-2 pb-1">
                            {project.liveLink && (
                              <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-1 px-2 py-1.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg text-xs hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-sm font-medium"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <span>🚀</span>
                                Demo
                              </a>
                            )}
                            {project.githubLink && (
                              <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-1 px-2 py-1.5 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-lg text-xs hover:from-gray-800 hover:to-gray-900 transition-all duration-200 shadow-sm font-medium"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <span>💻</span>
                                Code
                              </a>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Hover Effect Indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <div className="text-6xl mb-4">🚀</div>
          <h3 className="text-2xl font-bold text-gray-600 mb-2">No projects found</h3>
          <p className="text-gray-500">Try selecting a different category</p>
        </motion.div>
      )}
    </main>
  );
}