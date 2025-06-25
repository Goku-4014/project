import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HeartIcon, Heart} from 'lucide-react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import {Footer} from './pages/Footer';
import AnimatedCursor from 'react-animated-cursor';

function App() {
  return (
    <BrowserRouter>
     <AnimatedCursor
        innerSize={8}
        outerSize={35}
        color="173, 104, 255"
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={2}
        trailingSpeed={6}
        clickables={[
          'a',
          'button',
          '.link',
          'input',
          'textarea',
          'select',
          'label'
        ]}
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* <Footer/> */}
      </div>
    </BrowserRouter>
  );
}

export default App;