import { motion } from 'framer-motion';
import profileImg from '../assets/images/profile.png';
import { ArrowRight, Download, Code2 } from 'lucide-react';

export default function Hero() {
  // Fungsi khusus untuk scroll mulus ke section #projects
  const scrollToProjects = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6 sm:px-10 lg:px-12 xl:px-16 max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center w-full">

        {/* --- KOLOM TEKS --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="sm:col-span-7 space-y-4 sm:space-y-5 xl:space-y-6 text-left"
        >
          <div className="inline-flex items-center gap-2 text-xs lg:text-sm xl:text-base font-bold tracking-widest uppercase text-slate-500">
            <span>HELLO, I&apos;M</span>
            <span className="text-[#4A8FD0]">ZILDANE SYAHADA</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black text-slate-900 tracking-tight leading-tight">
            Turning Ideas Into <br className="hidden sm:inline" />
            Working Products.
          </h1>

          <p className="text-xs sm:text-sm lg:text-base xl:text-lg 2xl:text-xl text-slate-600 max-w-xl xl:max-w-2xl leading-relaxed">
            I build digital products that solve real problems with clean code, modern design, and great user experience.
          </p>

          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            {/* Tombol Primary: VIEW PROJECTS */}
            <a
              href="#projects"
              onClick={scrollToProjects}
              className="inline-flex items-center justify-center gap-2.5 px-5 py-3 sm:px-6 sm:py-3.5 text-xs xl:text-sm font-bold uppercase tracking-wider text-white bg-[#4A8FD0] border border-[#4A8FD0] hover:bg-white hover:text-[#4A8FD0] rounded-xl shadow-md shadow-[#4A8FD0]/20 transition-all duration-300 active:scale-95 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4A8FD0] focus-visible:ring-offset-2 cursor-pointer"
            >
              <span>VIEW PROJECTS</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Tombol Secondary: DOWNLOAD CV */}
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center justify-center gap-2.5 px-5 py-3 sm:px-6 sm:py-3.5 text-xs xl:text-sm font-bold uppercase tracking-wider text-[#4A8FD0] bg-white border border-[#4A8FD0] hover:bg-[#4A8FD0] hover:text-white rounded-xl transition-all duration-300 active:scale-95 shadow-sm whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4A8FD0] focus-visible:ring-offset-2"
            >
              <span>DOWNLOAD CV</span>
              <Download className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
        
        {/* --- KOLOM FOTO PROFILE --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="sm:col-span-5 flex justify-center sm:justify-end relative"
        >
          <div className="relative w-full max-w-xs sm:max-w-[280px] lg:max-w-sm xl:max-w-md 2xl:max-w-lg aspect-[4/5]">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#4A8FD0]/30 to-sky-300/30 rounded-3xl blur-2xl -z-10" />
            
            <div className="w-full h-full rounded-3xl bg-gradient-to-b from-white to-slate-100 p-3 sm:p-4 border border-slate-200/80 shadow-xl relative group overflow-visible">
              
              <div className="w-full h-full rounded-2xl bg-slate-200 overflow-hidden relative">
                <img
                  src={profileImg}
                  alt="Zildane Syahada"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
              </div>

              {/* BADGE FOCUS */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-3 -left-2 sm:top-4 sm:-left-3 xl:top-6 xl:-left-5 bg-white/90 backdrop-blur-md px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg sm:rounded-xl border border-slate-200/80 shadow-md flex items-center gap-2 z-10"
              >
                <div className="w-4 h-4 sm:w-5 sm:h-5 xl:w-6 xl:h-6 rounded-md bg-[#4A8FD0]/10 flex items-center justify-center text-[#4A8FD0] shrink-0">
                  <Code2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 xl:w-3.5 xl:h-3.5" />
                </div>
                <div>
                  <p className="text-[8px] sm:text-[9px] xl:text-[10px] text-slate-400 font-bold uppercase tracking-wider leading-none">Focus</p>
                  <p className="text-[10px] sm:text-[11px] xl:text-xs font-bold text-slate-800 leading-tight">Develops app</p>
                </div>
              </motion.div>

              {/* BADGE AVAILABLE FOR WORK */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-3 -right-2 sm:bottom-4 sm:-right-3 xl:bottom-6 xl:-right-5 bg-white/90 backdrop-blur-md px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-lg sm:rounded-xl border border-slate-200/80 shadow-md flex items-center gap-2 z-10"
              >
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span className="text-[9px] sm:text-[10px] xl:text-xs font-bold text-slate-800 whitespace-nowrap">Available for Work</span>
              </motion.div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}