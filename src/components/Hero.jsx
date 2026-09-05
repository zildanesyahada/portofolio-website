import { motion } from 'framer-motion';
import profileImg from '../assets/images/profile.png';
import { ArrowRight, Download, Code2 } from 'lucide-react';

export default function Hero() {
  return (
    /* 
      SECTION UTAMA (Mobile-First)
      - pt-20: Memberi jarak 80px dari atas agar tidak tertutup Navbar melayang
      - px-5: Padding kanan-kiri 20px (sesuai standar acuan 375px)
      - min-h-screen: Memastikan tinggi hero pas 1 layar
    */
    <section id="home" className="pt-20 pb-12 px-5 max-w-6xl mx-auto min-h-screen flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">

        {/* --- KOLOM TEKS --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-3.5 text-left"
        >
          {/* Teks Sapaan / Eyebrow */}
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest uppercase text-slate-500">
            <span>HELLO, I&apos;M</span>
            <span className="text-[#4A8FD0]">ZILDANE SYAHADA</span>
          </div>

          {/* Headline Utama */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Turning Ideas Into <br className="hidden sm:inline" />
            Working Products.
          </h1>

          {/* Deskripsi Singkat */}
          <p className="text-sm sm:text-base text-slate-600 max-w-xl leading-snug">
            I build digital products that solve real problems with clean code, modern design, and great user experience
          </p>

          {/* TOMBOL CALL TO ACTION (CTA) */}
          <div className="flex flex-wrap items-center gap-2.5 pt-1">
            {/* Tombol Utama (Default: Biru Teks Putih -> Hover: Putih Teks Biru) */}
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#4A8FD0] border border-[#4A8FD0] hover:bg-white hover:text-[#4A8FD0] rounded-xl shadow-md shadow-[#4A8FD0]/20 transition-all duration-300 active:scale-95 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4A8FD0] focus-visible:ring-offset-2"
            >
              DOWNLOAD CV
              <Download className="w-3.5 h-3.5" />
              
            </a>

            {/* Tombol Sekunder (Default: Putih Teks Biru -> Hover: Biru Teks Putih) */}
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

        {/* --- KOLOM FOTO --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center relative"
        >
          {/* Container Bingkai Foto */}
          <div className="relative w-full max-w-xs sm:max-w-sm aspect-[4/5]">

            {/* Efek Glow Biru */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#4A8FD0]/30 to-sky-300/30 rounded-3xl blur-2xl -z-10" />

            {/* Pembungkus Foto */}
            <div className="w-full h-full rounded-3xl bg-gradient-to-b from-white to-slate-100 p-3 border border-slate-200/80 shadow-xl relative group overflow-visible">

              {/* Wadah Gambar Utama */}
              <div className="w-full h-full rounded-2xl bg-slate-200 overflow-hidden relative">
                <img
                  src={profileImg}
                  alt="Zildane Syahada"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
              </div>

              {/* Floating Badge 1: Kiri Atas */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-6 left-0 sm:-left-4 bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-slate-200/80 shadow-lg flex items-center gap-2.5"
              >
                <div className="w-7 h-7 rounded-xl bg-[#4A8FD0]/10 flex items-center justify-center text-[#4A8FD0]">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Focus</p>
                  <p className="text-xs font-bold text-slate-800">Develops app</p>
                </div>
              </motion.div>

              {/* Floating Badge 2: Kanan Bawah */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-6 -right-4 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-slate-200/80 shadow-lg flex items-center gap-2.5"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-slate-800">Available for Work</span>
              </motion.div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}