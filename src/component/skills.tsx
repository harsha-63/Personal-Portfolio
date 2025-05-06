"use client";

import React, { JSX } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiTypescript } from "react-icons/si";

type Skill = {
  id: number;
  name: string;
  icon: JSX.Element;
  level: number; // percentage
};

const skills: Skill[] = [
  { id: 1, name: "HTML", icon: <FaHtml5 className="text-orange-500 text-3xl" />, level: 95 },
  { id: 2, name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-3xl" />, level: 90 },
  { id: 3, name: "JavaScript", icon: <FaJs className="text-yellow-400 text-3xl" />, level: 85 },
  { id: 4, name: "React", icon: <FaReact className="text-blue-400 text-3xl" />, level: 90 },
  { id: 5, name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400 text-3xl" />, level: 85 },
  { id: 6, name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-3xl" />, level: 80 },
  { id: 7, name: "Node.js", icon: <FaNodeJs className="text-green-600 text-3xl" />, level: 75 },
  { id: 8, name: "MongoDB", icon: <SiMongodb className="text-green-500 text-3xl" />, level: 70 },
];

const Skills = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20 text-gray-800">
      <h2 className="text-4xl font-bold mb-10 border-l-4 border-yellow-400 pl-4">My Skills</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="bg-gray-100 p-5 rounded-lg shadow hover:shadow-lg transition-all"
          >
            <div className="flex items-center gap-4 mb-4">
              {skill.icon}
              <h3 className="text-lg font-semibold">{skill.name}</h3>
            </div>

            <div className="w-full bg-gray-300 rounded-full h-3">
              <div
                className="bg-yellow-400 h-3 rounded-full"
                style={{ width: `${skill.level}%` }}
              />
            </div>
            <p className="text-right text-sm text-gray-600 mt-1">{skill.level}%</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
