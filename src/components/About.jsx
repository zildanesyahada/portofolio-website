import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Rocket, GraduationCap, MapPin, Sparkles } from 'lucide-react';
import { FaReact, FaGithub, FaLaravel, FaFigma } from 'react-icons/fa';
import { SiMysql, SiTailwindcss } from 'react-icons/si';
import { BiLogoFlutter } from 'react-icons/bi';
import { DiNodejs } from 'react-icons/di';

export default function About() {
  return (
    <section id="about" className="py-10 sm:py-14 px-4 max-w-5xl mx-auto">
      
      {/* 1. JUDUL KAPSUL */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="flex justify-center sm:justify-start mb-6 sm:mb-8"
      >
        <span className="px-4 py-1 rounded-full bg-[#DCE8F6] text-[#4A8FD0] font-mono text-[11px] font-bold tracking-[0.2em]">
          A LITTLE ABOUT ME
        </span>
      </motion.div>

      {/* BENTO GRID LAYOUT (sm:grid-cols-3 agar 3 card sejajar di tablet) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
        
        {/* Card 1: Passionate Developer */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="p-4 rounded-xl sm:rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2.5 flex flex-col justify-between"
        >
          <div className="space-y-2">
            <div className="w-8 h-8 rounded-lg bg-[#4A8FD0]/10 flex items-center justify-center text-[#4A8FD0]">
              <User className="w-4 h-4" />
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
              Passionate Developer & Problem Solver
            </h3>
            <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
              Saya berfokus pada pengembangan aplikasi web modern yang estetik, cepat, dan responsif dengan prinsip clean code.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 text-[10px] font-medium text-slate-500">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#4A8FD0]" /> Bekasi
            </span>
            <span className="flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#4A8FD0]" /> Fullstack
            </span>
          </div>
        </motion.div>

        {/* Card 2: Building Digital Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#4A8FD0] to-[#3b78b3] text-white shadow-sm space-y-2.5 flex flex-col justify-between"
        >
          <div className="space-y-2">
            <Rocket className="w-5 h-5 text-sky-200" />
            <h3 className="text-xs sm:text-sm font-bold leading-snug">Building Digital Solutions</h3>
            <p className="text-[11px] sm:text-xs text-sky-100 leading-relaxed">
              Selalu berdedikasi menciptakan antarmuka yang bersih untuk pengalaman pengguna terbaik.
            </p>
          </div>
          <div className="pt-2 border-t border-white/20 grid grid-cols-2 gap-1.5 text-center">
            <div className="bg-white/10 rounded-md p-1">
              <p className="text-sm sm:text-base font-black">2+</p>
              <p className="text-[8px] sm:text-[9px] uppercase font-semibold text-sky-100">Years Exp.</p>
            </div>
            <div className="bg-white/10 rounded-md p-1">
              <p className="text-sm sm:text-base font-black">10+</p>
              <p className="text-[8px] sm:text-[9px] uppercase font-semibold text-sky-100">Projects</p>
            </div>
          </div>
        </motion.div>

        {/* Card 3: Continuous Learning */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="p-4 rounded-xl sm:rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2 flex flex-col justify-between"
        >
          <div className="space-y-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600">
              <GraduationCap className="w-4 h-4" />
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
              Continuous Learning
            </h3>
            <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
              Dunia teknologi berkembang cepat. Saya konsisten mempelajari skill baru dan mengikuti tren industri web modern.
            </p>
          </div>
        </motion.div>

        {/* Card 4: TECH STACK (Melebar Penuh 3 Kolom di Bawah: sm:col-span-3) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="sm:col-span-3 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-5"
        >
          <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
            <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">Tech Stack</h3>
            <span className="text-[10px] text-slate-400 italic">Tap card to highlight</span>
          </div>

          {/* FRONT END */}
          <div className="space-y-2">
            <p className="text-[9px] font-bold text-[#4A8FD0] uppercase tracking-wider font-mono">
              FRONT END
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
              <TechCard name="React" icon={<FaReact className="w-5 h-5 text-[#00d8ff]" />} />
              <TechCard name="React Native" icon={<FaReact className="w-5 h-5 text-[#00d8ff]" />} />
              <TechCard name="Flutter" icon={<BiLogoFlutter className="w-5 h-5 text-[#47C5FB]" />} />
            </div>
          </div>

          {/* BACK END & DATABASE */}
          <div className="space-y-2">
            <p className="text-[9px] font-bold text-[#4A8FD0] uppercase tracking-wider font-mono">
              BACK END & DATABASE
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
              <TechCard name="Laravel" icon={<FaLaravel className="w-5 h-5 text-[#FF2D20]" />} />
              <TechCard name="Node.js" icon={<DiNodejs className="w-7 h-7 text-[#5FA04E]" />} />
              <TechCard name="MySQL" icon={<SiMysql className="w-5 h-5 text-[#00618A]" />} />
            </div>
          </div>

          {/* TOOLS */}
          <div className="space-y-2">
            <p className="text-[9px] font-bold text-[#4A8FD0] uppercase tracking-wider font-mono">
              TOOLS
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
              <TechCard name="Git/GitHub" icon={<FaGithub className="w-5 h-5 text-slate-900" />} />
              <TechCard name="Tailwind" icon={<SiTailwindcss className="w-5 h-5 text-[#38BDF8]" />} />
              <TechCard name="Figma" icon={<FaFigma className="w-5 h-5 text-[#F24E1E]" />} />
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

{/* KOMPONEN KARTU TECH STACK RINGKAS */}
function TechCard({ name, icon }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setIsActive(!isActive)}
      className={`p-2.5 rounded-lg border transition-all duration-300 flex flex-col items-center justify-center gap-1 min-h-[70px] w-full active:scale-95 select-none ${
        isActive
          ? 'bg-white border-[#4A8FD0] shadow-sm shadow-[#4A8FD0]/10'
          : 'bg-slate-50/60 border-slate-200/80 hover:bg-slate-100/80'
      }`}
    >
      <div
        className={`transition-all duration-300 flex items-center justify-center ${
          isActive
            ? 'grayscale-0 opacity-100 scale-105'
            : 'grayscale opacity-40'
        }`}
      >
        {icon}
      </div>
      
      <span
        className={`text-[10px] transition-colors duration-300 text-center ${
          isActive ? 'text-[#4A8FD0] font-bold' : 'text-slate-500 font-medium'
        }`}
      >
        {name}
      </span>
    </button>
  );
}