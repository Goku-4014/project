import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, User, Code2, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

function Navbar() {
  const navItems = [
    { to: '/', icon: Home, label: 'Home' },
    { to: '/about', icon: User, label: 'About' },
    { to: '/projects', icon: Code2, label: 'Projects' },
    { to: '/contact', icon: Mail, label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] backdrop-blur-md z-50 border-b border-white/10 shadow-md"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Portfolio
          </NavLink>
          <div className="flex space-x-2">
            {navItems.map(({ to, icon: Icon, label }, index) => (
              <motion.div
                key={to}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
              >
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                      isActive
                      ? 'text-white bg-white/10 backdrop-blur border border-blue-500/50 shadow-md'
                      : 'text-gray-300 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm'
                    }`
                  }
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </NavLink>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
