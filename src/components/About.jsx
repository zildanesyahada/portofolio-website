import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Rocket, GraduationCap, MapPin, Sparkles } from 'lucide-react';
import { FaReact, FaGithub, FaLaravel, FaFigma } from 'react-icons/fa';
import { SiMysql, SiTailwindcss, SiCodeigniter } from 'react-icons/si';
import { BiLogoFlutter } from 'react-icons/bi';
import { DiNodejs } from 'react-icons/di';

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-12 xl:px-16 max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] mx-auto">
      
      {/* 1. JUDUL KAPSUL */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="flex justify-center sm:justify-start mb-6 sm:mb-8 xl:mb-10"
      >
        <span className="px-4 py-1.5 rounded-full bg-[#DCE8F6] text-[#4A8FD0] font-mono text-[11px] xl:text-xs font-bold tracking-[0.2em]">
          A LITTLE ABOUT ME
        </span>
      </motion.div>

      {/* BENTO GRID LAYOUT */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 xl:gap-6">
        
        {/* Card 1: Passionate Developer */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="p-5 xl:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3.5 flex flex-col justify-between"
        >
          <div className="space-y-2.5">
            <div className="w-9 h-9 xl:w-10 xl:h-10 rounded-xl bg-[#4A8FD0]/10 flex items-center justify-center text-[#4A8FD0]">
              <User className="w-4 h-4 xl:w-5 xl:h-5" />
            </div>
            <h3 className="text-sm sm:text-base xl:text-lg font-bold text-slate-900 leading-snug">
              Passionate Developer & Problem Solver
            </h3>
            <p className="text-xs xl:text-sm text-slate-600 leading-relaxed">
              Saya berfokus pada pengembangan aplikasi web modern yang estetik, cepat, dan responsif dengan prinsip clean code.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-slate-100 text-xs font-medium text-slate-500">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#4A8FD0]" /> Bekasi
            </span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#4A8FD0]" /> Fullstack
            </span>
          </div>
        </motion.div>

        {/* Card 2: Building Digital Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="p-5 xl:p-6 rounded-2xl bg-gradient-to-br from-[#4A8FD0] to-[#3b78b3] text-white shadow-sm space-y-3.5 flex flex-col justify-between"
        >
          <div className="space-y-2.5">
            <Rocket className="w-6 h-6 xl:w-7 xl:h-7 text-sky-200" />
            <h3 className="text-sm sm:text-base xl:text-lg font-bold leading-snug">Building Digital Solutions</h3>
            <p className="text-xs xl:text-sm text-sky-100 leading-relaxed">
              Selalu berdedikasi menciptakan antarmuka yang bersih untuk pengalaman pengguna terbaik.
            </p>
          </div>
          <div className="pt-3 border-t border-white/20 grid grid-cols-2 gap-2 text-center">
            <div className="bg-white/10 rounded-lg p-2">
              <p className="text-base sm:text-lg xl:text-xl font-black">2+</p>
              <p className="text-[9px] xl:text-[10px] uppercase font-semibold text-sky-100">Years Exp.</p>
            </div>
            <div className="bg-white/10 rounded-lg p-2">
              <p className="text-base sm:text-lg xl:text-xl font-black">10+</p>
              <p className="text-[9px] xl:text-[10px] uppercase font-semibold text-sky-100">Projects</p>
            </div>
          </div>
        </motion.div>

        {/* Card 3: Continuous Learning */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="p-5 xl:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2.5 flex flex-col justify-between"
        >
          <div className="space-y-2.5">
            <div className="w-9 h-9 xl:w-10 xl:h-10 rounded-xl bg-[#4A8FD0]/10 flex items-center justify-center text-[#4A8FD0]">
              <GraduationCap className="w-4 h-4 xl:w-5 xl:h-5" />
            </div>
            <h3 className="text-sm sm:text-base xl:text-lg font-bold text-slate-900 leading-snug">
              Continuous Learning
            </h3>
            <p className="text-xs xl:text-sm text-slate-600 leading-relaxed">
              Dunia teknologi berkembang cepat. Saya konsisten mempelajari skill baru dan mengikuti tren industri web modern.
            </p>
          </div>
        </motion.div>

        {/* Card 4: TECH STACK */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="sm:col-span-3 p-5 sm:p-6 xl:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-6"
        >
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-base sm:text-lg xl:text-xl font-bold text-slate-900 tracking-tight">Tech Stack</h3>
          </div>

          {/* FRONT END */}
          <div className="space-y-2.5">
            <p className="text-[10px] xl:text-xs font-bold text-[#4A8FD0] uppercase tracking-wider font-mono">
              FRONT END
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2.5 sm:gap-3">
              <TechCard name="React" icon={<FaReact className="w-5 h-5 xl:w-6 xl:h-6 text-[#00d8ff]" />} />
              <TechCard name="React Native" icon={<FaReact className="w-5 h-5 xl:w-6 xl:h-6 text-[#00d8ff]" />} />
              <TechCard name="Flutter" icon={<BiLogoFlutter className="w-5 h-5 xl:w-6 xl:h-6 text-[#47C5FB]" />} />
            </div>
          </div>

          {/* BACK END & DATABASE */}
          <div className="space-y-2.5">
            <p className="text-[10px] xl:text-xs font-bold text-[#4A8FD0] uppercase tracking-wider font-mono">
              BACK END & DATABASE
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2.5 sm:gap-3">
              <TechCard name="Laravel" icon={<FaLaravel className="w-5 h-5 xl:w-6 xl:h-6 text-[#FF2D20]" />} />
              <TechCard name="CodeIgniter" icon={<SiCodeigniter className="w-5 h-5 xl:w-6 xl:h-6 text-[#EF4223]" />} />
              <TechCard name="Node.js" icon={<DiNodejs className="w-7 h-7 xl:w-8 xl:h-8 text-[#5FA04E]" />} />
              <TechCard name="MySQL" icon={<SiMysql className="w-5 h-5 xl:w-6 xl:h-6 text-[#00618A]" />} />
            </div>
          </div>

          {/* TOOLS */}
          <div className="space-y-2.5">
            <p className="text-[10px] xl:text-xs font-bold text-[#4A8FD0] uppercase tracking-wider font-mono">
              TOOLS
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2.5 sm:gap-3">
              <TechCard name="Git/GitHub" icon={<FaGithub className="w-5 h-5 xl:w-6 xl:h-6 text-slate-900" />} />
              <TechCard name="Tailwind" icon={<SiTailwindcss className="w-5 h-5 xl:w-6 xl:h-6 text-[#38BDF8]" />} />
              <TechCard name="Figma" icon={<FaFigma className="w-5 h-5 xl:w-6 xl:h-6 text-[#F24E1E]" />} />
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

function TechCard({ name, icon }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setIsActive(!isActive)}
      className={`group p-3 rounded-xl border transition-all duration-300 flex flex-col items-center justify-center gap-1.5 min-h-[75px] xl:min-h-[85px] w-full active:scale-95 select-none ${
        isActive
          ? 'bg-white border-[#4A8FD0] shadow-sm shadow-[#4A8FD0]/10'
          : 'bg-slate-50/60 border-slate-200/80 hover:bg-slate-100/80 lg:hover:bg-white lg:hover:border-[#4A8FD0] lg:hover:shadow-sm lg:hover:shadow-[#4A8FD0]/10'
      }`}
    >
      <div
        className={`transition-all duration-300 flex items-center justify-center ${
          isActive
            ? 'grayscale-0 opacity-100 scale-105'
            : 'grayscale opacity-40 lg:group-hover:grayscale-0 lg:group-hover:opacity-100 lg:group-hover:scale-105'
        }`}
      >
        {icon}
      </div>
      
      <span
        className={`text-[11px] xl:text-xs transition-colors duration-300 text-center ${
          isActive
            ? 'text-[#4A8FD0] font-bold'
            : 'text-slate-500 font-medium lg:group-hover:text-[#4A8FD0] lg:group-hover:font-bold'
        }`}
      >
        {name}
      </span>
    </button>
  );
}