import { Github, Heart, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full  mt-20 text-center text-gray-300 text-sm bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]"
    >
      <p className="mb-2">
        © {new Date().getFullYear()} Made with{' '}
        <span className="inline-block animate-pulse text-red-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="inline h-4 w-4 fill-red-500" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 
              5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 
              2.09C13.09 3.81 14.76 3 16.5 
              3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 
              6.86-8.55 11.54L12 21.35z" />
          </svg>
        </span>{' '}
        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent font-medium">
          Moment Memories Misery.
        </span>
      </p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="https://github.com/Goku-4014" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
          <Github size={18} />
        </a>
        <a href="https://linkedin.com/in/manishchauhan4014" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
          <Linkedin size={18} />
        </a>
        <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
          <Twitter size={18} />
        </a>
      </div>
    </motion.footer>
  );
}
