import './fonts.css';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import AboutSkills from './components/AboutSkills';
import ProjectsExperience from './components/ProjectsExperience';
import EducationQuoteContact from './components/EducationQuoteContact';

export default function App() {
  useEffect(() => {
    const applyScheme = () => {
      const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.classList.toggle('dark', isDark);
    };
    applyScheme();
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => applyScheme();
    mq.addEventListener ? mq.addEventListener('change', handler) : mq.addListener(handler);
    return () => {
      mq.removeEventListener ? mq.removeEventListener('change', handler) : mq.removeListener(handler);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black font-body text-slate-200">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070b16]/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-yellow-500 to-amber-600" />
            <span className="font-heading text-lg text-white">Rahamat Ali</span>
          </a>
          <div className="hidden items-center gap-6 md:flex">
            <a href="#about" className="text-sm text-slate-300 transition hover:text-yellow-300">About</a>
            <a href="#projects" className="text-sm text-slate-300 transition hover:text-yellow-300">Projects</a>
            <a href="#experience" className="text-sm text-slate-300 transition hover:text-yellow-300">Experience</a>
            <a href="#education" className="text-sm text-slate-300 transition hover:text-yellow-300">Education</a>
            <a href="#contact" className="rounded-full bg-gradient-to-r from-yellow-500 to-amber-600 px-4 py-2 text-sm font-medium text-black shadow-yellow-700/20 transition hover:brightness-105">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <Hero />
        <AboutSkills />
        <ProjectsExperience />
        <EducationQuoteContact />
      </main>

      <motion.a
        href="#home"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="fixed bottom-6 right-6 hidden rounded-full border border-yellow-500/40 bg-[#0b1022]/60 p-3 text-yellow-300 backdrop-blur md:inline-flex"
        title="Back to top"
      >
        ↑
      </motion.a>
    </div>
  );
}
