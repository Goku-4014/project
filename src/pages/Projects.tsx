import React from 'react';
import { Github, ExternalLink, Terminal } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Task Management App",
      description: "A React-based todo application with features like task categories, due dates, and priority levels. Built using React hooks and local storage for data persistence.",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80",
      github: "#",
      demo: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather application that displays current weather conditions and forecasts. Integrates with OpenWeatherMap API and features a responsive design.",
      tech: ["JavaScript", "API Integration", "CSS3"],
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80",
      github: "#",
      demo: "#"
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website built with React and Tailwind CSS. Features smooth animations, responsive design, and modern UI components.",
      tech: ["React", "Tailwind CSS", "React Router"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      github: "#",
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