import React from 'react';
import { Github, ExternalLink, Terminal } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Pitch Management App for Startups",
      description: "Developed a web application to assist startups in creating and managing their pitch presentations",
      tech: ["NextJS", "TypeScript", "Tailwind CSS"],
      image: "./startup.jpg",
      github: "https://github.com/Goku-4014/pitching_app",
      demo: "https://pitching-app.vercel.app/"
    },
    {
      title: "Snippet Vault(In-Progress)",
      description: "Developed a feature-rich web app using React, TypeScript, and Tailwind CSS to manage and analyze code snippets efficiently, Enabled developers to organize, search, and improve their code with AI-powered functionality",
      tech: ["JavaScript", "API Integration", "React","HuggingFace"],
      image: "./snippet.png",
      github: "#",
      demo: "#"
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website built with React and Tailwind CSS. Features smooth animations, responsive design, and modern UI components.",
      tech: ["React", "Tailwind CSS", "React Router"],
      image: "./portfolio.jpg",
      github: "https://github.com/Goku-4014/project",
      demo: "#"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800/50 rounded-xl overflow-hidden group">
              <div className="aspect-video bg-gray-700 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity"
                />
                <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.github} className="text-blue-400 hover:text-blue-300 flex items-center gap-2">
                    <Github size={20} />
                    Code
                  </a>
                  <a href={project.demo} className="text-blue-400 hover:text-blue-300 flex items-center gap-2">
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}