import { motion } from 'framer-motion';
import { Mail, Instagram, Linkedin, Github, Send } from 'lucide-react';

export default function EducationQuoteContact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const email = form.get('email');
    const message = form.get('message');
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:myrahamat90@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="education" className="relative bg-gradient-to-b from-[#03060d] to-black py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(245,197,24,0.05),rgba(0,0,0,0))]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
        >
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">Education</h2>
          <div className="mt-6 grid gap-4 text-slate-200">
            <div className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-medium text-white">Balurghat College — Bachelor of Commerce, Accounting & Finance</p>
                <p className="text-sm text-slate-400">2025–2029</p>
              </div>
            </div>
            <div className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-medium text-white">WBCHSE – Higher Secondary, Commerce</p>
                <p className="text-sm text-slate-400">2024 — GPA: 70%</p>
              </div>
            </div>
            <div className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-medium text-white">WBBSE – Madhyamik</p>
                <p className="text-sm text-slate-400">2022 — GPA: 64%</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          id="quote"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-16 rounded-3xl border border-yellow-500/30 bg-gradient-to-br from-yellow-400/10 to-amber-500/10 p-8 text-center backdrop-blur-xl"
        >
          <blockquote className="mx-auto max-w-3xl text-lg text-yellow-100">
            “সফলতার পথে অস্থিরতা স্বাভাবিক। কখনও হার মানাবেন না, কারণ আগামী ধাপেও সফলতা অপেক্ষা করছে।”
          </blockquote>
        </motion.div>

        <motion.div
          id="contact"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-16 grid gap-8 md:grid-cols-2"
        >
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h3 className="font-heading text-2xl font-semibold text-white">Let’s Connect</h3>
            <p className="mt-2 text-slate-300">Reach out for collaborations, ideas, and opportunities.</p>
            <div className="mt-5 space-y-3 text-sm">
              <a href="mailto:myrahamat90@gmail.com" className="flex items-center gap-3 text-slate-200 transition hover:text-yellow-300">
                <Mail className="h-4 w-4 text-yellow-300" /> myrahamat90@gmail.com
              </a>
              <a href="https://instagram.com/i2rahamat" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-200 transition hover:text-yellow-300">
                <Instagram className="h-4 w-4 text-yellow-300" /> @i2rahamat
              </a>
              <a href="https://www.linkedin.com/in/rahamat-ali" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-200 transition hover:text-yellow-300">
                <Linkedin className="h-4 w-4 text-yellow-300" /> LinkedIn: Rahamat Ali
              </a>
              <a href="https://github.com/70015" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-200 transition hover:text-yellow-300">
                <Github className="h-4 w-4 text-yellow-300" /> github.com/70015
              </a>
            </div>

            <div className="mt-8">
              <span className="text-sm text-slate-300">Signature</span>
              <div className="mt-2 inline-block rounded-2xl border border-yellow-500/30 bg-[#0b1022]/60 px-4 py-2 backdrop-blur">
                <span className="font-heading text-xl text-yellow-200 animate-signature">– Rahamat Ali</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h3 className="font-heading text-2xl font-semibold text-white">Contact Form</h3>
            <div className="mt-5 grid gap-4">
              <input name="name" required placeholder="Your Name" className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-slate-200 placeholder:text-slate-500 focus:border-yellow-500/50 focus:outline-none" />
              <input name="email" type="email" required placeholder="Your Email" className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-slate-200 placeholder:text-slate-500 focus:border-yellow-500/50 focus:outline-none" />
              <textarea name="message" required rows={5} placeholder="Write your message..." className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-slate-200 placeholder:text-slate-500 focus:border-yellow-500/50 focus:outline-none" />
              <button type="submit" className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-yellow-500 to-amber-600 px-5 py-3 font-medium text-black shadow-lg shadow-yellow-600/20 transition hover:brightness-105">
                Send Message
                <Send className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              </button>
            </div>
          </form>
        </motion.div>

        <footer className="mt-16 flex flex-col items-center justify-between gap-3 rounded-3xl border border-white/10 bg-white/5 p-5 text-center text-slate-400 backdrop-blur-xl md:flex-row">
          <p>Copyright © 2025 Rahamat Ali.</p>
          <p className="text-slate-300">Built with passion, powered by Rahamat Ali & AI</p>
        </footer>
      </div>
    </section>
  );
}
