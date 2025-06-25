import React from 'react';
import { Github, Linkedin, Mail, CodeIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const contactLinks = [
  {
    icon: <Github className="w-8 h-8" />,
    title: 'GitHub',
    subtitle: 'Check out my contributions',
    href: 'https://github.com/Goku-4014',
    bg: 'bg-gradient-to-r from-gray-800 to-gray-700',
  },
  {
    icon: <CodeIcon className="w-8 h-8" />,
    title: 'LeetCode',
    subtitle: 'Check out my Profile...',
    href: 'https://leetcode.com/u/goku_4014/',
    bg: 'bg-gradient-to-r from-gray-800 to-gray-700',
  },
  {
    icon: <Linkedin className="w-8 h-8" />,
    title: 'LinkedIn',
    subtitle: 'Connect with me professionally',
    href: 'https://www.linkedin.com/in/manish-chauhan-426281279/',
    bg: 'bg-gradient-to-r from-blue-800 to-purple-800',
  },
  {
    icon: <Mail className="w-8 h-8" />,
    title: 'Email',
    subtitle: 'mightymanish8@gmail.com',
    href: 'mailto:mightymanish8@gmail.com',
    bg: 'bg-gradient-to-r from-pink-700 to-red-700',
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Let's Connect
        </motion.h2>

        <div className="max-w-xl mx-auto flex flex-col gap-6">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-6 rounded-xl flex items-center gap-4 text-white transition-transform shadow-md hover:shadow-lg ${link.bg}`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.97 }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {link.icon}
              </motion.div>
              <div>
                <h3 className="font-bold text-lg">{link.title}</h3>
                <p className="text-gray-200 text-sm">{link.subtitle}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
