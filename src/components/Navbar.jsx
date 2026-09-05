import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('Home');

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, name, href) => {
    e.preventDefault();
    setActiveTab(name);

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header 
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      /* Posisi dikunci tepat di tengah horizontal menggunakan left-1/2 dan -translate-x-1/2 */
      className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-full max-w-[calc(100vw-1.5rem)] sm:max-w-max pointer-events-none flex justify-center"
    >
      {/* Container Utama: Menggunakan flex-wrap atau shrink agar tidak memicu scrollbar */}
      <nav className="pointer-events-auto flex items-center justify-center gap-0.5 p-1 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-lg shadow-slate-900/5 max-w-full overflow-hidden">
        {navItems.map((item) => {
          const isActive = activeTab === item.name;
          return (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.name, item.href)}
              className={`relative px-2 py-1 sm:px-3 sm:py-1.5 text-[10px] min-[360px]:text-[11px] sm:text-xs font-medium rounded-full transition-colors duration-200 z-10 select-none ${
                isActive 
                  ? 'text-white' 
                  : 'text-slate-600 hover:text-[#4A8FD0]'
              }`}
            >
              {/* Animasi Pil Biru Meluncur */}
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-[#4A8FD0] rounded-full -z-10"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              {item.name}
            </a>
          );
        })}
      </nav>
    </motion.header>
  );
}