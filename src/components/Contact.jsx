import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="pt-16 sm:pt-20 lg:pt-24 pb-6 sm:pb-8 xl:pb-12 px-6 sm:px-10 lg:px-12 xl:px-16 max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] mx-auto">
      
      {/* 1. JUDUL KAPSUL */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="flex justify-center sm:justify-start mb-6 sm:mb-8 xl:mb-10"
      >
        <span className="px-4 py-1.5 rounded-full bg-[#DCE8F6] text-[#4A8FD0] font-mono text-[11px] xl:text-xs font-bold tracking-[0.2em]">
          GET IN TOUCH
        </span>
      </motion.div>

      {/* GRID CONTAINER UTAMA - KANAN & KIRI */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 xl:gap-12 items-start">
        
        {/* KOLOM KIRI: HEADLINE & TOMBOL CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="space-y-4 xl:space-y-6"
        >
          <h2 className="text-xl sm:text-2xl xl:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
            I'm always excited to learn and{' '}
            <span className="text-[#4A8FD0]">build.</span>
          </h2>

          <p className="text-xs sm:text-sm xl:text-base text-slate-500 leading-relaxed max-w-sm xl:max-w-md">
            Have an opportunity, project, or just want to say hello? I'd love to hear from you.
          </p>

          <div className="pt-2">
            <a
              href="mailto:zildanesyahda02@gmail.com"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 xl:px-6 xl:py-3 rounded-2xl border border-slate-200 bg-white text-slate-700 font-mono text-xs xl:text-sm font-bold tracking-wider hover:border-[#4A8FD0] hover:text-[#4A8FD0] active:scale-95 transition-all shadow-sm"
            >
              <Send className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-[#4A8FD0]" />
              <span>SEND ME A MESSAGE</span>
            </a>
          </div>
        </motion.div>

        {/* KOLOM KANAN: DETAIL KONTAK & SOSMED */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="space-y-5 xl:space-y-6 sm:pl-4 md:pl-6"
        >
          {/* Email Item */}
          <div className="flex items-center gap-3.5 xl:gap-4">
            <div className="w-10 h-10 xl:w-12 xl:h-12 rounded-2xl bg-[#DCE8F6]/60 flex items-center justify-center text-[#4A8FD0] shrink-0">
              <Mail className="w-4 h-4 xl:w-5 xl:h-5" />
            </div>
            <div>
              <p className="text-xs xl:text-sm font-bold text-slate-900">Email</p>
              <a 
                href="mailto:zildanesyahda02@gmail.com" 
                className="text-xs xl:text-sm text-slate-500 hover:text-[#4A8FD0] transition-colors"
              >
                zildanesyahda02@gmail.com
              </a>
            </div>
          </div>

          {/* Phone Item */}
          <div className="flex items-center gap-3.5 xl:gap-4">
            <div className="w-10 h-10 xl:w-12 xl:h-12 rounded-2xl bg-[#DCE8F6]/60 flex items-center justify-center text-[#4A8FD0] shrink-0">
              <Phone className="w-4 h-4 xl:w-5 xl:h-5" />
            </div>
            <div>
              <p className="text-xs xl:text-sm font-bold text-slate-900">Phone</p>
              <a 
                href="https://wa.me/62895617074635" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs xl:text-sm text-slate-500 hover:text-[#4A8FD0] transition-colors"
              >
                +62 895 6170 74635
              </a>
            </div>
          </div>

          {/* Let's Connect */}
          <div className="pt-1 space-y-2 xl:space-y-3">
            <p className="text-xs xl:text-sm font-bold text-slate-900">Let's Connect</p>
            <div className="flex items-center gap-2.5 xl:gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 xl:w-10 xl:h-10 rounded-xl border border-slate-200 bg-white flex items-center justify-center text-[#4A8FD0] hover:bg-[#4A8FD0] hover:text-white hover:border-[#4A8FD0] active:scale-95 transition-all shadow-sm"
                title="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4 xl:w-5 xl:h-5" />
              </a>
              <a
                href="mailto:zildanesyahda02@gmail.com"
                className="w-9 h-9 xl:w-10 xl:h-10 rounded-xl border border-slate-200 bg-white flex items-center justify-center text-[#4A8FD0] hover:bg-[#4A8FD0] hover:text-white hover:border-[#4A8FD0] active:scale-95 transition-all shadow-sm"
                title="Email"
              >
                <FaEnvelope className="w-4 h-4 xl:w-5 xl:h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 xl:w-10 xl:h-10 rounded-xl border border-slate-200 bg-white flex items-center justify-center text-[#4A8FD0] hover:bg-[#4A8FD0] hover:text-white hover:border-[#4A8FD0] active:scale-95 transition-all shadow-sm"
                title="GitHub"
              >
                <FaGithub className="w-4 h-4 xl:w-5 xl:h-5" />
              </a>
            </div>
          </div>
        </motion.div>

      </div>

      {/* FOOTER BAR */}
      <div className="mt-10 sm:mt-12 xl:mt-16 pt-4 border-t border-slate-200/80 flex items-center justify-center text-center text-[10px] xl:text-xs text-slate-400">
        <p>© 2026 Zildane Syahada. All rights reserved.</p>
      </div>

    </section>
  );
}