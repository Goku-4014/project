import React, { useState } from 'react';
import {
  Github,
  ExternalLink,
  Terminal,
  Code2,
  GitBranch,
  Eye,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { title } from 'motion/react-client';

const categories = [
  { id: 'all', name: 'All Projects', icon: Terminal },
  { id: 'fullstack', name: 'Full Stack', icon: Code2 },
  { id: 'frontend', name: 'Frontend', icon: Eye },
  { id: 'ai', name: 'AI/ML', icon: GitBranch },
];

const projects = [
  {
    id: 1,
    title: 'StreamChat',
    description:
      'A Full-Featured Chat Application built using MERN Stack. For Features Check the Demo.',
    tech: ['ReactJS', 'Javascript', 'Tailwind CSS', 'MongoDB', 'ExpressJS', 'Socket.IO',"JWT","NodeJs"],
    category: 'fullstack',
    image: '/streamchat.png',
    // github: 'https://github.com/Goku-4014/pitching_app',
    demo: 'https://streamchat-8kyj.onrender.com/',
    status: 'completed',
  },
  {
    id: 2,
    title: 'MERN Authentication',
    description:
      'A secure authentication system built with the MERN stack, featuring JWT-based user authentication and role-based access control. Mail Verification to Password Reset.',
    tech: ['React', 'JavaScript', 'Tailwind CSS', 'MongoDB', 'Node.js', "Express.js","JWT","MailTrap"],
    category: 'fullstack',
    image: '/auth.png',
    github: 'https://github.com/Goku-4014/Auth-TUT.git',
    demo: '#',
    status: 'completed',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description:
      'Modern, animated portfolio showcasing projects with dark/light mode, motion effects, and accessibility.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'React Router'],
    category: 'frontend',
    image: '/portfolio.png',
    github: 'https://github.com/Goku-4014/project',
    demo: '#',
    status: 'completed',
  },
  {
    id:4,
    title: 'Algo-Viz',
    description :'An Algorithm Visualizar that you might have not seen before.',
    tech: ['React', 'Javascript', 'Tailwind CSS', 'Framer Motion(Motion)', 'React Router'],
    category : 'frontend',
    image:'/AlgoViz.png',
    github: 'https://github.com/Goku-4014/AlgoViz',
    demo: 'https://algo-viz-phi.vercel.app/',
    status: 'in-progress'
  }
];

const getStatusStyle = (status) => {
  switch (status) {
    case 'completed':
      return 'bg-green-500/10 text-green-400 border-green-400/30';
    case 'in-progress':
      return 'bg-yellow-500/10 text-yellow-400 border-yellow-400/30';
    default:
      return 'bg-blue-500/10 text-blue-400 border-blue-400/30';
  }
};

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const filtered =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden text-white bg-gradient-to-br from-[#100f2c] via-[#1c1a3d] to-[#0d0b1f]">
      <motion.div
        className="absolute -top-40 -left-32 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-fuchsia-500/20 rounded-full blur-2xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 25, repeat: Infinity }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:20px_20px] z-0 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Explore apps, AI tools & full-stack platforms I've built.
          </motion.p>
        </motion.div>

        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {categories.map((c, i) => (
            <motion.button
              key={c.id}
              onClick={() => setFilter(c.id)}
              className={`px-6 py-2 rounded-full border flex items-center gap-2 text-sm font-medium transition-all duration-300 ${
                filter === c.id
                  ? 'bg-blue-500 text-white border-blue-500 shadow-lg shadow-blue-400/30'
                  : 'text-gray-300 bg-white/5 hover:bg-white/10 border-white/10'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <c.icon size={16} />
              {c.name}
            </motion.button>
          ))}
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 shadow-md hover:shadow-xl backdrop-blur-md group transition-all"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className={`absolute top-4 left-4 px-3 py-1 text-xs rounded-full border ${getStatusStyle(
                    project.status
                  )}`}
                >
                  {project.status.toUpperCase()}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-400 mb-3 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      className="bg-white/10 text-xs px-3 py-1 rounded-full border border-white/20 text-gray-300"
                      whileHover={{ scale: 1.05, y: -1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="flex justify-between text-sm">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-400 hover:underline flex items-center gap-1"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Github size={16} /> Code
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-green-400 hover:underline flex items-center gap-1"
                    whileHover={{ scale: 1.05 }}
                  >
                    <ExternalLink size={16} /> Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
