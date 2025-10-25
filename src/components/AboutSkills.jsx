import { motion } from 'framer-motion';
import { Brain, Cog, TrendingUp, Sparkles, Globe2, Code2, LineChart, FileText, Share2, Layers, Bot, PenTool, Video, Rocket } from 'lucide-react';

export default function AboutSkills() {
  const skills = [
    { name: 'Web Development', icon: Code2 },
    { name: 'Data Analysis', icon: LineChart },
    { name: 'Account Management', icon: Layers },
    { name: 'Accounting & Trading', icon: TrendingUp },
    { name: 'Content Writing', icon: FileText },
    { name: 'Social Media Management', icon: Share2 },
    { name: 'N8N Automation', icon: Bot },
    { name: 'Script Writing', icon: PenTool },
    { name: 'Video Coding', icon: Video },
    { name: 'Marketing & Business Strategy', icon: Rocket },
    { name: 'Research-based Content Creation', icon: Brain },
    { name: 'AI Video & Image Generation', icon: Sparkles },
    { name: 'Social Media Engagement & Trend Spotting', icon: Share2 },
    { name: 'Audience Research', icon: Globe2 },
  ];

  return (
    <section id="about" className="relative bg-[#04070f] bg-gradient-to-b from-black to-[#060a14] py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,197,24,0.08),rgba(17,24,39,0))]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">About Me</h2>
            <p className="mt-4 text-slate-300/90">
              I’m a B.Com (Accountancy Honours) student at Balurghat College with a deep curiosity for automation, AI, and business innovation. My goal is to build a next-generation AI education platform that provides students with 24/7 virtual AI-generated teachers. From learning to building, I focus on creating tools that make knowledge accessible and engaging.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                { label: 'Curiosity', icon: Brain },
                { label: 'Consistency', icon: Cog },
                { label: 'Innovation', icon: Sparkles },
                { label: 'Growth', icon: TrendingUp },
              ].map(({ label, icon: Ic }) => (
                <div key={label} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur">
                  <Ic className="h-5 w-5 text-yellow-400" />
                  <span className="text-sm text-slate-200">{label}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-slate-400">
              I speak Bengali, English, and Hindi — but I express my ideas best in Bengali and English.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-heading text-2xl font-semibold text-white">Skills</h3>
              <span className="rounded-full border border-yellow-500/30 bg-yellow-400/10 px-3 py-1 text-xs text-yellow-300">Premium Set</span>
            </div>
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {skills.map(({ name, icon: Ic }) => (
                <div key={name} className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0a1021]/60 p-3 transition hover:border-yellow-500/40 hover:bg-[#0a1021]/80">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-500/20 to-amber-600/20 ring-1 ring-yellow-500/30">
                    <Ic className="h-4 w-4 text-yellow-300" />
                  </div>
                  <span className="text-sm text-slate-200">{name}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-yellow-500/30 bg-yellow-400/5 p-4">
              <p className="text-sm text-yellow-200">
                Highlight: Automation, AI Integration, and Marketing Strategy — where technology meets growth.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
