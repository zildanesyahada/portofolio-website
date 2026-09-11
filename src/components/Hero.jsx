import { motion } from 'framer-motion';
import profileImg from '../assets/images/profile.png';
import { ArrowRight, Download, Code2 } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-20 sm:pt-20 lg:pt-28 pb-12 sm:pb-16 px-5 max-w-6xl mx-auto lg:min-h-screen flex items-center">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-8 items-center w-full">

        {/* --- KOLOM TEKS --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="sm:col-span-7 space-y-3 sm:space-y-4 text-left"
        >
          <div className="inline-flex items-center gap-2 text-xs lg:text-sm font-bold tracking-widest uppercase text-slate-500">
            <span>HELLO, I&apos;M</span>
            <span className="text-[#4A8FD0]">ZILDANE SYAHADA</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Turning Ideas Into <br className="hidden sm:inline" />
            Working Products.
          </h1>

          <p className="text-sm sm:text-sm lg:text-base text-slate-600 max-w-xl leading-relaxed">
            I build digital products that solve real problems with clean code, modern design, and great user experience
          </p>

          <div className="flex flex-wrap items-center gap-2.5 pt-1">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#4A8FD0] border border-[#4A8FD0] hover:bg-white hover:text-[#4A8FD0] rounded-xl shadow-md shadow-[#4A8FD0]/20 transition-all duration-300 active:scale-95 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4A8FD0] focus-visible:ring-offset-2"
            >
              DOWNLOAD CV
              <Download className="w-3.5 h-3.5" />
            </a>

            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#4A8FD0] bg-white border border-[#4A8FD0] hover:bg-[#4A8FD0] hover:text-white rounded-xl transition-all duration-300 active:scale-95 shadow-sm whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4A8FD0] focus-visible:ring-offset-2"
            >
              VIEW PROJECTS
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="sm:col-span-5 flex justify-center sm:justify-end relative"
        >
          <div className="relative w-full max-w-xs sm:max-w-[280px] lg:max-w-sm aspect-[4/5]">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#4A8FD0]/30 to-sky-300/30 rounded-3xl blur-2xl -z-10" />
            
            <div className="w-full h-full rounded-3xl bg-gradient-to-b from-white to-slate-100 p-3 border border-slate-200/80 shadow-xl relative group overflow-visible">
              
              <div className="w-full h-full rounded-2xl bg-slate-200 overflow-hidden relative">
                <img
                  src={profileImg}
                  alt="Zildane Syahada"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
              </div>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-3 -left-2 sm:top-4 sm:-left-3 bg-white/90 backdrop-blur-md px-2 py-1 sm:px-2.5 sm:py-1 rounded-lg sm:rounded-xl border border-slate-200/80 shadow-md flex items-center gap-1.5 sm:gap-2 z-10"
              >
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-md bg-[#4A8FD0]/10 flex items-center justify-center text-[#4A8FD0] shrink-0">
                  <Code2 className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                </div>
                <div>
                  <p className="text-[8px] sm:text-[9px] text-slate-400 font-bold uppercase tracking-wider leading-none">Focus</p>
                  <p className="text-[10px] sm:text-[11px] font-bold text-slate-800 leading-tight">Develops app</p>
                </div>
              </motion.div>

              {/* BADGE AVAILABLE FOR WORK */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-3 -right-2 sm:bottom-4 sm:-right-3 bg-white/90 backdrop-blur-md px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl border border-slate-200/80 shadow-md flex items-center gap-1.5 sm:gap-2 z-10"
              >
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span className="text-[9px] sm:text-[10px] font-bold text-slate-800 whitespace-nowrap">Available for Work</span>
              </motion.div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}