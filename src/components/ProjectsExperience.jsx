import { motion } from 'framer-motion';
import { ExternalLink, Briefcase, PlayCircle } from 'lucide-react';

const projects = [
  {
    title: 'AI Education Platform (Concept)',
    desc: 'An AI-powered learning app concept offering personalized, 24/7 student assistance through virtual AI teachers.',
    img: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Personal Portfolio Website',
    desc: 'A modern portfolio designed to reflect innovation, premium aesthetics, and responsive glassmorphism.',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'AI Script Writing & Content Automation',
    desc: 'Automation combining AI script generation with voice-based storytelling workflows.',
    img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
  },
];

const experiences = [
  {
    role: 'Script Writer',
    org: 'Rohan Tyagi',
    period: 'Mar 2025 – Aug 2025',
    bullets: [
      'Developed engaging scripts for various digital formats.',
      'Collaborated with production teams to align creative goals.',
      'Researched deeply to enhance authenticity and relevance.',
    ],
  },
  {
    role: 'Content Intern',
    org: 'Josh Talks',
    period: 'Jun 2023 – Feb 2025',
    bullets: [
      'Assisted in creating short educational scripts for AI voiceover adaptation.',
      'Proofread and optimized scripts for regional audiences (Bengali & Hindi).',
      'Collaborated on social media campaigns to improve engagement.',
      'Contributed to AI-driven content training and development.',
    ],
  },
];

export default function ProjectsExperience() {
  return (
    <section id="projects" className="relative bg-[#030712] py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,197,24,0.06),rgba(3,7,18,0))]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">Selected Projects</h2>
          <span className="text-xs text-yellow-300">Premium Showcase</span>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-black/30" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-300/90">{p.desc}</p>
                <div className="mt-4 flex items-center gap-2 text-yellow-300/90">
                  <ExternalLink className="h-4 w-4" />
                  <span className="text-xs">View Details</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div id="experience" className="mt-20">
          <div className="mb-8 flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-yellow-400" />
            <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">Experience</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {experiences.map((e, idx) => (
              <motion.div
                key={e.role}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">{e.role}</h3>
                  <span className="rounded-full border border-yellow-500/30 bg-yellow-400/10 px-3 py-1 text-xs text-yellow-300">{e.period}</span>
                </div>
                <p className="mt-1 text-sm text-slate-300">{e.org}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-300/90">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <PlayCircle className="mt-0.5 h-4 w-4 text-yellow-400" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
