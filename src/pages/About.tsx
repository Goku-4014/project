import React from 'react';
import { Globe, Database, Book, Coffee } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800/50 p-8 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Globe className="text-blue-400" />
                  Learning Frontend
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• HTML, CSS, JavaScript</li>
                  <li>• React Fundamentals</li>
                  <li>• Responsive Design Basics</li>
                  <li>• UI Component Building</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Database className="text-purple-400" />
                  Exploring Backend
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Node.js Basics</li>
                  <li>• SQL Fundamentals</li>
                  <li>• RESTful APIs</li>
                  <li>• Server Deployment</li>
                </ul>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Book className="text-green-400" />
                  Currently Learning
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• TypeScript</li>
                  <li>• Next.js</li>
                  <li>• Testing Fundamentals</li>
                  <li>• Git Version Control</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Coffee className="text-yellow-400" />
                  Hobbies & Interests
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Open Source Contribution</li>
                  <li>• Tech Blogging</li>
                  <li>• Problem Solving</li>
                  <li>• Continuous Learning</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              As a beginner in the world of full-stack development, I'm passionate about learning and building web applications. 
              Every day is an opportunity to learn something new and improve my skills. I'm currently focusing on mastering 
              fundamental technologies while working on personal projects to gain hands-on experience. My goal is to become 
              a proficient full-stack developer and contribute to meaningful projects that make a difference.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}