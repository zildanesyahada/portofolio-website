import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Rocket, GraduationCap, MapPin, Sparkles } from 'lucide-react';
import { FaReact, FaGithub, FaLaravel, FaFigma} from 'react-icons/fa';
import { SiMysql, SiTailwindcss } from 'react-icons/si';
import { BiLogoFlutter } from 'react-icons/bi';
import { DiNodejs } from 'react-icons/di';

export default function About() {
  return (
    <section id="about" className="py-12 px-5 max-w-md mx-auto">
      
      {/* 1. JUDUL KAPSUL */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="flex justify-center mb-8"
      >
        <span className="px-5 py-1.5 rounded-full bg-[#DCE8F6] text-[#4A8FD0] font-mono text-xs font-bold tracking-[0.2em]">
          A LITTLE ABOUT ME
        </span>
      </motion.div>

      {/* STACK CARDS MOBILE */}
      <div className="space-y-4">
        
        {/* Card 1: Passionate Developer */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3"
        >
          <div className="w-9 h-9 rounded-xl bg-[#4A8FD0]/10 flex items-center justify-center text-[#4A8FD0]">
            <User className="w-4 h-4" />
          </div>
          <h3 className="text-sm font-bold text-slate-900">
            Passionate Developer & Problem Solver
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Saya berfokus pada pengembangan aplikasi web modern yang estetik, cepat, dan responsif dengan prinsip clean code.
          </p>
          <div className="flex items-center gap-2 pt-2 border-t border-slate-100 text-[10px] font-medium text-slate-500">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#4A8FD0]" /> Bekasi, Indonesia
            </span>
            <span className="flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#4A8FD0]" /> Fullstack App
            </span>
          </div>
        </motion.div>

        {/* Card 2: Building Digital Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="p-5 rounded-2xl bg-gradient-to-br from-[#4A8FD0] to-[#3b78b3] text-white shadow-sm space-y-3"
        >
          <Rocket className="w-6 h-6 text-sky-200" />
          <h3 className="text-sm font-bold">Building Digital Solutions</h3>
          <p className="text-xs text-sky-100 leading-relaxed">
            Selalu berdedikasi menciptakan antarmuka yang bersih untuk pengalaman pengguna terbaik.
          </p>
          <div className="pt-2 border-t border-white/20 grid grid-cols-2 gap-2 text-center">
            <div className="bg-white/10 rounded-lg p-1.5">
              <p className="text-base font-black">2+</p>
              <p className="text-[9px] uppercase font-semibold text-sky-100">Years Exp.</p>
            </div>
            <div className="bg-white/10 rounded-lg p-1.5">
              <p className="text-base font-black">10+</p>
              <p className="text-[9px] uppercase font-semibold text-sky-100">Projects</p>
            </div>
          </div>
        </motion.div>

        {/* Card 3: Continuous Learning */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2"
        >
          <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
            <GraduationCap className="w-4 h-4" />
          </div>
          <h3 className="text-sm font-bold text-slate-900">
            Continuous Learning
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Dunia teknologi berkembang cepat. Saya konsisten mempelajari skill baru dan mengikuti tren industri web modern.
          </p>
        </motion.div>

        {/* 2. TECH STACK (INTERAKTIF TAP ON MOBILE) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-6"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900 tracking-tight">Tech Stack</h3>
            <span className="text-[10px] text-slate-400 italic">Tap card to highlight</span>
          </div>

{/* FRONT END */}
<div className="space-y-2.5">
  <p className="text-[10px] font-bold text-[#4A8FD0] uppercase tracking-wider font-mono">
    FRONT END
  </p>
  <div className="grid grid-cols-2 gap-2.5">
    <TechCard name="React" icon={<FaReact className="w-6 h-6 text-[#00d8ff]" />} />
    <TechCard name="React Native" icon={<FaReact className="w-6 h-6 text-[#00d8ff]" />} />
    {/* FLUTTER RESMI */}
    <TechCard name="Flutter" icon={<BiLogoFlutter className="w-6 h-6 text-[#47C5FB]" />} />
  </div>
</div>

{/* BACK END & DATABASE */}
<div className="space-y-2.5">
  <p className="text-[10px] font-bold text-[#4A8FD0] uppercase tracking-wider font-mono">
    BACK END & DATABASE
  </p>
  <div className="grid grid-cols-2 gap-2.5">
    <TechCard name="Laravel" icon={<FaLaravel className="w-6 h-6 text-[#FF2D20]" />} />
    {/* NODE.JS RESMI */}
    <TechCard name="Node.js" icon={<DiNodejs className="w-8 h-8 text-[#5FA04E]" />} />
    <TechCard name="MySQL" icon={<SiMysql className="w-6 h-6 text-[#00618A]" />} />
  </div>
</div>

          {/* TOOLS */}
          <div className="space-y-2.5">
            <p className="text-[10px] font-bold text-[#4A8FD0] uppercase tracking-wider font-mono">
              TOOLS
            </p>
            <div className="grid grid-cols-2 gap-2.5">
              <TechCard name="Git/GitHub" icon={<FaGithub className="w-6 h-6 text-slate-900" />} />
              <TechCard name="Tailwind" icon={<SiTailwindcss className="w-6 h-6 text-[#38BDF8]" />} />
              <TechCard name="Figma" icon={<FaFigma className="w-6 h-6 text-[#F24E1E]" />} />
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

{/* KOMPONEN KARTU TECH STACK INTERAKTIF */}
function TechCard({ name, icon }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setIsActive(!isActive)}
      className={`p-3 rounded-xl border transition-all duration-300 flex flex-col items-center justify-center gap-1.5 min-h-[80px] w-full active:scale-95 select-none ${
        isActive
          ? 'bg-white border-[#4A8FD0] shadow-md shadow-[#4A8FD0]/10'
          : 'bg-slate-50/60 border-slate-200/80'
      }`}
    >
      {/* Container Ikon dengan efek Grayscale ke Warna Asli */}
      <div
        className={`transition-all duration-300 flex items-center justify-center ${
          isActive
            ? 'grayscale-0 opacity-100 scale-110'
            : 'grayscale opacity-40'
        }`}
      >
        {icon}
      </div>
      
      {/* Label Nama Tech */}
      <span
        className={`text-[11px] transition-colors duration-300 text-center ${
          isActive ? 'text-[#4A8FD0] font-bold' : 'text-slate-500 font-medium'
        }`}
      >
        {name}
      </span>
    </button>
  );
}