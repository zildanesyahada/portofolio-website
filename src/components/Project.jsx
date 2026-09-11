import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaReact, FaLaravel, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiFlutter, SiMysql, SiFirebase } from 'react-icons/si';

// DATA PROJECT
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
      <SiFlutter key="flutter" className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-[#02569B]" />,
      <SiFirebase key="firebase" className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-[#FFCA28]" />,
    ],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 2,
    title: 'SaaS Analytics Dashboard',
    category: 'Web',
    type: 'SaaS Dashboard',
    description: 'Dashboard manajemen performa bisnis dengan grafik statistik interaktif dan ekspor laporan otomatis.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    tags: ['React', 'Tailwind', 'Laravel'],
    icons: [
      <FaReact key="react" className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-[#00d8ff]" />,
      <SiTailwindcss key="tailwind" className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-[#38BDF8]" />,
      <FaLaravel key="laravel" className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-[#FF2D20]" />,
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
      <FaReact key="react" className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-[#00d8ff]" />,
      <FaLaravel key="laravel" className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-[#FF2D20]" />,
      <SiMysql key="mysql" className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-[#00618A]" />,
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
    <section id="projects" className="py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-12 xl:px-16 max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] mx-auto">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 xl:mb-10">
        
        {/* TEKS HEADER (KIRI) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="space-y-2 text-left"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#DCE8F6] text-[#4A8FD0] font-mono text-[11px] xl:text-xs font-bold tracking-[0.2em]">
            MY RECENT WORKS
          </span>
          <h2 className="text-xl sm:text-2xl xl:text-3xl font-bold text-slate-900 tracking-tight">
            Featured Projects
          </h2>
        </motion.div>

        {/* FILTER TAB NAVIGATION (KANAN) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="flex justify-start sm:justify-end"
        >
          <div className="inline-flex items-center gap-1 p-1.5 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-sm">
            {categories.map((cat) => {
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`relative px-4 py-1.5 xl:px-5 xl:py-2 text-xs xl:text-sm font-medium rounded-full transition-colors duration-200 z-10 select-none ${
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

      </div>

      {/* DAFTAR KARTU PROJECT */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden flex flex-col group h-full justify-between"
            >
              <div>
                {/* Gambar / Cover Preview */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* BADGE SPESIFIK */}
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#4A8FD0] font-mono text-[10px] xl:text-xs font-bold tracking-wide shadow-sm">
                    {project.type}
                  </span>
                </div>

                {/* Konten Kartu */}
                <div className="p-5 xl:p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-base xl:text-lg font-bold text-slate-900 leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs xl:text-sm text-slate-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack Icons & Tags */}
                  <div className="flex flex-wrap items-center gap-1.5 xl:gap-2 pt-1">
                    {project.tags.map((tag, i) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100/80 border border-slate-200/60 text-[10px] xl:text-xs font-medium text-slate-700"
                      >
                        {project.icons[i]}
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 xl:p-6 pt-0">
                <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-[#4A8FD0] text-white text-xs xl:text-sm font-semibold hover:bg-[#3b78b3] active:scale-95 transition-all shadow-sm"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-slate-100 text-slate-700 text-xs xl:text-sm font-semibold hover:bg-slate-200 active:scale-95 transition-all border border-slate-200/60"
                    title="View Source Code"
                  >
                    <FaGithub className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}