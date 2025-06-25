import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Database, Book, Coffee } from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const skills = [
  {
    icon: <Globe className="text-blue-400" />,
    title: 'Learning Frontend',
    items: ['HTML, CSS, JavaScript', 'React Fundamentals', 'Responsive Design Basics', 'UI Component Building'],
    level: 'Intermediate',
  },
  {
    icon: <Database className="text-purple-400" />,
    title: 'Exploring Backend',
    items: ['Node.js Basics', 'SQL Fundamentals', 'RESTful APIs', 'Server Deployment'],
    level: 'Beginner',
  },
  {
    icon: <Book className="text-green-400" />,
    title: 'Currently Learning',
    items: ['TypeScript', 'Next.js', 'Testing Fundamentals', 'Git Version Control'],
    level: 'Ongoing',
  },
  {
    icon: <Coffee className="text-yellow-400" />,
    title: 'Hobbies & Interests',
    items: ['Open Source Contribution', 'Tech Blogging', 'Problem Solving', 'Continuous Learning'],
    level: 'Passionate',
  },
];

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden text-white bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
      {/* Animated Gradient Layer */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.05),_transparent_70%)] z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          About Me
        </motion.h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 shadow-xl hover:shadow-blue-500/20 transition-shadow duration-300"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
            >
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                {skill.icon}
                {skill.title}
              </h3>
              <ul className="space-y-2 text-gray-300 mb-3">
                {skill.items.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
              <p className="text-sm text-blue-300">
                Expertise Level:{' '}
                <span className="font-semibold text-white tracking-wide">{skill.level}</span>
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-gray-300 leading-relaxed max-w-3xl mx-auto text-center mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={skills.length}
          variants={sectionVariants}
        >
          As a passionate learner in full-stack development, I'm constantly exploring and building web applications.
          With a solid foundation in frontend and growing backend skills, I aim to master full-stack engineering and
          contribute to impactful open-source and real-world projects.
        </motion.p>
      </div>

      {/* Floating Sparkles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-white/10 rounded-full animate-ping"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
