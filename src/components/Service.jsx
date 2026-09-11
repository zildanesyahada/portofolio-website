import { motion } from 'framer-motion';
import { Code2, Smartphone, Server, Palette, CheckCircle2 } from 'lucide-react';

const servicesData = [
  {
    id: 1,
    title: 'UI/UX Implementation',
    description: 'Menerjemahkan desain Figma menjadi kode yang presisi pixel dan kaya mikro-interaksi.',
    icon: <Palette className="w-5 h-5 xl:w-6 xl:h-6 text-[#4A8FD0]" />,
    skills: ['Figma to Code', 'Design System', 'Interactive Prototype'],
  },
  {
    id: 2,
    title: 'Mobile App Development',
    description: 'Pengembangan aplikasi mobile multiplatform dengan tampilan intuitif dan seamless.',
    icon: <Smartphone className="w-5 h-5 xl:w-6 xl:h-6 text-[#4A8FD0]" />,
    skills: ['Flutter & React Native', 'Cross-Platform App', 'Mobile-First Design'],
  },
  {
    id: 3,
    title: 'Frontend Development',
    description: 'Membangun antarmuka web modern, cepat, dan responsif dengan performa tinggi.',
    icon: <Code2 className="w-5 h-5 xl:w-6 xl:h-6 text-[#4A8FD0]" />,
    skills: ['React & Next.js', 'Tailwind CSS', 'Framer Motion Animations'],
  },
  {
    id: 4,
    title: 'Backend & API Integration',
    description: 'Merancang arsitektur server, basis data, dan RESTful API yang aman serta handal.',
    icon: <Server className="w-5 h-5 xl:w-6 xl:h-6 text-[#4A8FD0]" />,
    skills: ['Node.js & Laravel', 'Database MySQL/Firebase', 'RESTful API Integration'],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-12 xl:px-16 max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] mx-auto">
      
      {/* 1. JUDUL KAPSUL */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="flex justify-center sm:justify-start mb-3"
      >
        <span className="px-4 py-1.5 rounded-full bg-[#DCE8F6] text-[#4A8FD0] font-mono text-[11px] xl:text-xs font-bold tracking-[0.2em]">
          WHAT I CAN DO
        </span>
      </motion.div>

      {/* Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-left mb-8 xl:mb-10"
      >
        <h2 className="text-xl sm:text-2xl xl:text-3xl font-bold text-slate-900 tracking-tight">
          Services & Solutions
        </h2>
      </motion.div>

      {/* 2. DAFTAR KARTU LAYANAN - GRID 2 KOLOM */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 xl:gap-6">
        {servicesData.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="p-5 xl:p-6 rounded-2xl border border-slate-200/80 bg-white shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
          >
            {/* Header Kartu */}
            <div className="flex items-start gap-3.5 xl:gap-4 mb-4">
              <div className="w-10 h-10 xl:w-12 xl:h-12 rounded-xl bg-[#4A8FD0]/10 flex items-center justify-center shrink-0">
                {service.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-sm sm:text-base xl:text-lg font-bold text-slate-900 leading-snug">
                  {service.title}
                </h3>
                <p className="text-xs xl:text-sm text-slate-600 mt-1 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>

            {/* List Skill / Deliverables */}
            <div className="pt-3 border-t border-slate-100 grid grid-cols-1 gap-1.5 xl:gap-2">
              {service.skills.map((skill) => (
                <div key={skill} className="flex items-center gap-2 text-[11px] xl:text-xs text-slate-600 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-[#4A8FD0] shrink-0" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}