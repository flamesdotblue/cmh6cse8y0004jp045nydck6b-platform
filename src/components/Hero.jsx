import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Rocket, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden bg-gradient-to-b from-[#060913] via-[#0a0f1f] to-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vc19ejtcC5VJjy5v/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-[#0a0f1f]/40 to-black/80" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 pb-16 md:flex-row md:items-end md:justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <motion.h1
            className="font-heading text-4xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl"
            initial={{ letterSpacing: '-0.02em', opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="inline-block animate-floaty bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(234,179,8,0.25)]">Rahamat Ali</span>
          </motion.h1>

          <motion.p
            className="mt-4 max-w-2xl text-sm md:text-base text-slate-300/90"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            “N8N Automation Expert | Vibe Coding | Marketing Expert | Aspiring Entrepreneur | Curious Mind”
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full border border-yellow-500/40 bg-white/5 px-5 py-3 text-sm font-medium text-yellow-100 backdrop-blur-md transition hover:border-yellow-400/70 hover:bg-white/10"
            >
              <Rocket className="h-4 w-4 text-yellow-300" />
              View Portfolio
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-500 to-amber-600 px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-yellow-600/20 transition hover:brightness-105"
            >
              <Star className="h-4 w-4" />
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-10 md:mt-0"
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-yellow-600/40 via-amber-400/30 to-yellow-300/20 blur-xl" />
            <img
              src={`https://ui-avatars.com/api/?name=Rahamat+Ali&background=0D1117&color=ffd700&size=512`}
              alt="Rahamat Ali portrait"
              className="relative h-40 w-40 rounded-3xl object-cover ring-2 ring-yellow-500/30 md:h-56 md:w-56 lg:h-64 lg:w-64 animate-glow"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
