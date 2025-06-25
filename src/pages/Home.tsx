import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Mail, FileDown, Github, Linkedin, Twitter, Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TypewriterWords } from '../motion/TypeWriterWords';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, staggerChildren: 0.2 }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, rotateY: 90 },
    visible: {
      opacity: 1,
      rotateY: 0,
      transition: { duration: 1, ease: 'easeOut' }
    },
    hover: {
      rotateY: 180,
      transition: { duration: 0.8, ease: 'easeInOut' }
    }
  };

  const backgroundVariants = {
    animate: {
      backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
      backgroundSize: ['200% 200%', '200% 200%'],
      transition: {
        duration: 30,
        ease: "linear",
        repeat: Infinity
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: {
      y: -2,
      scale: 1.05,
      transition: { duration: 0.2, ease: "easeInOut" }
    },
    tap: {
      scale: 0.98,
      transition: { duration: 0.1 }
    }
  };

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-white dark:bg-[#0f0f23] transition-colors">
        
        {/* Gradient Background */}
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-blue-800 via-indigo-900 to-purple-900 dark:from-blue-900 dark:via-black dark:to-purple-800"
          variants={backgroundVariants}
          animate="animate"
        />

        {/* Optional Grainy Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />

        {/* Theme Toggle */}
        <div className="absolute top-4 right-4 z-50">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-white/10 border border-white/20 text-white/80 hover:bg-white/20 backdrop-blur transition-all"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <motion.div 
          className="container mx-auto px-4 relative z-10 text-black dark:text-white"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12 mb-16">
            
            {/* Profile Image with 3D Flip */}
            <motion.div
              className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl relative perspective-1000"
              variants={imageVariants}
              whileHover="hover"
            >
              <motion.img
                src="./chandler.jpg"
                alt="Manish Chauhan"
                className="w-full h-full object-cover"
                initial="hidden"
                animate="visible"
                style={{ backfaceVisibility: 'hidden' }}
              />
            </motion.div>

            {/* Text Content */}
            <div className="text-center md:text-left">
              <motion.div className="mb-4 text-2xl text-blue-400" variants={buttonVariants}>
                Hi, I am{' '}
                <span className="font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Manish Chauhan
                </span>
              </motion.div>

              <motion.div 
                className="text-4xl sm:text-5xl  md:text-6xl font-bold mb-6"
                variants={buttonVariants}
              >
                <TypewriterWords
                  text="I am"
                  words={[
                    "a Software Developer.",
                    "a MERN Developer.",
                    "a ML Enthusiast",
                    "a Problem Solver.",
                    "a Tech Explorer."
                  ]}
                />
              </motion.div>

              <motion.p 
                className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl"
                variants={buttonVariants}
              >
                Passionate about solving real-world problems using elegant code. Skilled in MERN stack and modern web tech.
              </motion.p>

              {/* Action Buttons */}
              <motion.div 
                className="flex flex-wrap justify-center md:justify-start gap-4"
                variants={buttonVariants}
              >
                {[
                  {
                    component: Link,
                    to: "/projects",
                    className: "bg-blue-600 hover:bg-blue-700 text-white",
                    icon: Code2,
                    text: "View Projects"
                  },
                  {
                    component: Link,
                    to: "/contact",
                    className: "border border-white/20 hover:border-white/40 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white",
                    icon: Mail,
                    text: "Contact Me"
                  },
                  {
                    component: 'a',
                    href: "./manish.pdf",
                    download: true,
                    className: "bg-purple-600 hover:bg-purple-700 text-white",
                    icon: FileDown,
                    text: "Download Resume"
                  }
                ].map((button, index) => {
                  const Component = button.component as any;
                  const MotionComponent = motion(Component);
                  const props = button.component === 'a' 
                    ? { href: button.href, download: button.download }
                    : { to: button.to };

                  return (
                    <MotionComponent
                      key={index}
                      {...props}
                      className={`px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-all duration-200 ${button.className}`}
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <button.icon size={18} />
                      {button.text}
                    </MotionComponent>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

{/* ADD THIS at the end of the return inside the outermost <div> */}
{/* <motion.footer
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="w-full py-6 mt-20 text-center text-gray-300 text-sm bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]"
>
  <p>
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
</motion.footer> */}

    </div>
  );
}
