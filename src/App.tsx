import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HeartIcon, Heart} from 'lucide-react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <footer className="py-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Made with <Heart size={15} className="inline text-red-500 fill-red-500"  /> Moment Memories Misery. </p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;