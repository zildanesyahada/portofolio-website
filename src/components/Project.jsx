import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaReact, FaLaravel, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiFlutter, SiMysql, SiFirebase } from 'react-icons/si';

// DATA PROJECT (Ditambahkan properti 'type' untuk badge)
const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Mobile App',
    category: 'Mobile',
    type: 'E-Commerce App',
    description: 'Aplikasi toko online modern dengan integrasi payment gateway, real-time tracking, dan dark mode.',
    image: 'https://images.unsplash.com/photo-1556742049-0a67412e1a8a?q=80&w=800&auto=format&fit=crop',
    tags: ['Flutter', 'Firebase', 'Tailwind'],
    icons: [
      <SiFlutter key="flutter" className="w-3.5 h-3.5 text-[#02569B]" />,
      <SiFirebase key="firebase" className="w-3.5 h-3.5 text-[#FFCA28]" />,
    ],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 2,
    title: 'SaaS Analytics Dashboard',
    category: 'Web',
    type: 'SaaS Dashboard', // Badge spesifik
    description: 'Dashboard manajemen performa bisnis dengan grafik statistik interaktif dan ekspor laporan otomatis.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    tags: ['React', 'Tailwind', 'Laravel'],
    icons: [
      <FaReact key="react" className="w-3.5 h-3.5 text-[#00d8ff]" />,
      <SiTailwindcss key="tailwind" className="w-3.5 h-3.5 text-[#38BDF8]" />,
      <FaLaravel key="laravel" className="w-3.5 h-3.5 text-[#FF2D20]" />,
    ],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 3,
    title: 'Company Profile & Booking System',
    category: 'Web',
    type: 'Booking App',
    description: 'Platform profil perusahaan jasa lengkap dengan fitur reservasi online jadwal konsultasi pelanggan.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    tags: ['React', 'Laravel', 'MySQL'],
    icons: [
      <FaReact key="react" className="w-3.5 h-3.5 text-[#00d8ff]" />,
      <FaLaravel key="laravel" className="w-3.5 h-3.5 text-[#FF2D20]" />,
      <SiMysql key="mysql" className="w-3.5 h-3.5 text-[#00618A]" />,
    ],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
];

const categories = ['All', 'Web', 'Mobile'];

export default function Project() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-12 px-5 max-w-md mx-auto">
      
      {/* 1. JUDUL KAPSUL */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="flex justify-center mb-3"
      >
        <span className="px-5 py-1.5 rounded-full bg-[#DCE8F6] text-[#4A8FD0] font-mono text-xs font-bold tracking-[0.2em]">
          MY RECENT WORKS
        </span>
      </motion.div>

      {/* Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-center mb-6"
      >
        <h2 className="text-xl font-bold text-slate-900 tracking-tight">
          Featured Projects
        </h2>
      </motion.div>

      {/* 2. FILTER TAB (KAPSUL) */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="flex justify-center mb-8"
      >
        <div className="inline-flex items-center gap-1 p-1.5 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-sm">
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-colors duration-200 z-10 select-none ${
                  isActive 
                    ? 'text-white' 
                    : 'text-slate-600 hover:text-[#4A8FD0]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-project-tab"
                    className="absolute inset-0 bg-[#4A8FD0] rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {cat}
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* 3. DAFTAR KARTU PROJECT */}
      <div className="space-y-6">
        <AnimatePresence mode="wait">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden flex flex-col group"
            >
              {/* Gambar / Cover Preview */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* BADGE SPESIFIK (E-Commerce App, SaaS Dashboard, dll) */}
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#4A8FD0] font-mono text-[10px] font-bold tracking-wide shadow-sm">
                  {project.type}
                </span>
              </div>

              {/* Konten Kartu */}
              <div className="p-5 flex flex-col justify-between flex-1 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Icons & Tags */}
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  {project.tags.map((tag, i) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100/80 border border-slate-200/60 text-[10px] font-medium text-slate-700"
                    >
                      {project.icons[i]}
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#4A8FD0] text-white text-xs font-semibold hover:bg-[#3b78b3] active:scale-95 transition-all shadow-sm"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 active:scale-95 transition-all"
                    title="View Source Code"
                  >
                    <FaGithub className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

    </section>
  );
}