import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-12 px-5 max-w-5xl mx-auto">
      
      {/* 1. JUDUL KAPSUL (Ukuran & Style Sama Persis) */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="flex justify-center sm:justify-start mb-3"
      >
        <span className="px-5 py-1.5 rounded-full bg-[#DCE8F6] text-[#4A8FD0] font-mono text-xs font-bold tracking-[0.2em]">
          GET IN TOUCH
        </span>
      </motion.div>

      {/* GRID CONTAINER UTAMA - KANAN & KIRI */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 items-start">
        
        {/* KOLOM KIRI: HEADLINE & TOMBOL CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="space-y-4"
        >
          {/* Heading utama (Disamakan ukurannya dengan H2 di Services) */}
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
            I'm always excited to learn and{' '}
            <span className="text-[#4A8FD0]">build.</span>
          </h2>

          {/* Deskripsi */}
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm">
            Have an opportunity, project, or just want to say hello? I'd love to hear from you.
          </p>

          {/* Tombol Send Message */}
          <div className="pt-2">
            <a
              href="mailto:zildanesyahda02@gmail.com"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-2xl border border-slate-200 bg-white text-slate-700 font-mono text-xs font-bold tracking-wider hover:border-[#4A8FD0] hover:text-[#4A8FD0] active:scale-95 transition-all shadow-sm"
            >
              <Send className="w-3.5 h-3.5 text-[#4A8FD0]" />
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
          className="space-y-5 sm:pl-4 md:pl-6"
        >
          {/* Email Item */}
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-[#DCE8F6]/60 flex items-center justify-center text-[#4A8FD0] shrink-0">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Email</p>
              <a 
                href="mailto:zildanesyahda02@gmail.com" 
                className="text-xs text-slate-500 hover:text-[#4A8FD0] transition-colors"
              >
                zildanesyahda02@gmail.com
              </a>
            </div>
          </div>

          {/* Phone Item */}
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-[#DCE8F6]/60 flex items-center justify-center text-[#4A8FD0] shrink-0">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Phone</p>
              <a 
                href="https://wa.me/62895617074635" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs text-slate-500 hover:text-[#4A8FD0] transition-colors"
              >
                +62 895 6170 74635
              </a>
            </div>
          </div>

          {/* Let's Connect */}
          <div className="pt-1 space-y-2">
            <p className="text-xs font-bold text-slate-900">Let's Connect</p>
            <div className="flex items-center gap-2.5">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl border border-slate-200 bg-white flex items-center justify-center text-[#4A8FD0] hover:bg-[#4A8FD0] hover:text-white hover:border-[#4A8FD0] active:scale-95 transition-all shadow-sm"
                title="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:zildanesyahda02@gmail.com"
                className="w-9 h-9 rounded-xl border border-slate-200 bg-white flex items-center justify-center text-[#4A8FD0] hover:bg-[#4A8FD0] hover:text-white hover:border-[#4A8FD0] active:scale-95 transition-all shadow-sm"
                title="Email"
              >
                <FaEnvelope className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl border border-slate-200 bg-white flex items-center justify-center text-[#4A8FD0] hover:bg-[#4A8FD0] hover:text-white hover:border-[#4A8FD0] active:scale-95 transition-all shadow-sm"
                title="GitHub"
              >
                <FaGithub className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

      </div>

      {/* FOOTER BAR */}
      <div className="mt-12 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
        <p>© 2026 Zildane Syahada. All rights reserved.</p>
      </div>

    </section>
  );
}