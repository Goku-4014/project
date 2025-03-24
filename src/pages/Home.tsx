import React from 'react';
import { Code2, Mail, FileDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-xl shadow-blue-500/20">
              <img 
                src="https://img.freepik.com/free-photo/user-profile-icon-front-side-with-white-background_187299-40010.jpg?ga=GA1.1.1126935933.1741076373&semt=ais_hybrid" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <div className="mb-4 text-2xl text-blue-400 animate-fade-in">
                Hi, I am Manish Chauhan
              </div>
              <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 animate-slide-up">
                Full Stack Developer
              </h1>
              <p className="text-xl text-gray-300 mb-8">
              Passionate coder skilled in LeetCode and CodeChef contests.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <Link to="/projects" className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-medium flex items-center gap-2">
                  <Code2 size={20} />
                  View Projects
                </Link>
                <Link to="/contact" className="border border-white/20 hover:border-white/40 px-6 py-3 rounded-lg font-medium flex items-center gap-2">
                  <Mail size={20} />
                  Contact Me
                </Link>
                <a 
                  href="/resume.pdf" 
                  download 
                  className="bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-lg font-medium flex items-center gap-2"
                >
                  <FileDown size={20} />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}