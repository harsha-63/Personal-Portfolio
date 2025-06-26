"use client";

import React, { JSX, useState, useEffect } from "react";
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
  const [animatedLevels, setAnimatedLevels] = useState<{ [key: number]: number }>({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation when component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
      skills.forEach((skill) => {
        setTimeout(() => {
          setAnimatedLevels(prev => ({
            ...prev,
            [skill.id]: skill.level
          }));
        }, skill.id * 150); // Staggered animation
      });
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-white py-16 px-6 md:px-20 text-gray-800">
      <h2 className="text-4xl font-bold mb-10 border-l-4 border-yellow-400 pl-4">My Skills</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div
            key={skill.id}
            className={`group relative bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl border border-gray-100 hover:border-yellow-300 transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}
            style={{ 
              animationDelay: `${index * 100}ms`,
              animationFillMode: 'forwards'
            }}
          >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-orange-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-400 opacity-10 rounded-bl-2xl" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 drop-shadow-sm">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold group-hover:text-yellow-600 transition-colors duration-300">
                  {skill.name}
                </h3>
              </div>

              {/* Enhanced progress bar */}
              <div className="relative">
                <div className="w-full bg-gray-200 rounded-full h-4 shadow-inner overflow-hidden">
                  <div
                    className="h-4 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400 transition-all duration-1000 ease-out shadow-sm relative overflow-hidden"
                    style={{ 
                      width: `${animatedLevels[skill.id] || 0}%`,
                      transition: 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shimmer" />
                  </div>
                </div>
                
                {/* Percentage badge */}
                <div className="absolute -top-8 right-0 transform group-hover:scale-110 transition-transform duration-300">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
                    {skill.level}%
                  </div>
                </div>
              </div>

              {/* Skill level text */}
              <div className="mt-3 text-right">
                <span className={`text-sm font-medium transition-colors duration-300 ${
                  skill.level >= 90 ? 'text-green-600' : 
                  skill.level >= 80 ? 'text-blue-600' : 
                  skill.level >= 70 ? 'text-yellow-600' : 'text-gray-600'
                }`}>
                  {skill.level >= 90 ? 'Expert' : 
                   skill.level >= 80 ? 'Advanced' : 
                   skill.level >= 70 ? 'Intermediate' : 'Beginner'}
                </span>
              </div>
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;
