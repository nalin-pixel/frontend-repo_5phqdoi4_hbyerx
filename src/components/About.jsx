import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-3">About Me</h3>
            <p className="text-slate-300/90 leading-relaxed">
              I design and build expressive digital experiences. My work lives at the intersection of
              engineering and art — performant, accessible, and visually delightful.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div className="rounded-xl bg-slate-900/50 border border-white/10 p-4">
                <div className="text-2xl font-bold text-white">7+</div>
                <div className="text-xs text-slate-400">Years</div>
              </div>
              <div className="rounded-xl bg-slate-900/50 border border-white/10 p-4">
                <div className="text-2xl font-bold text-white">40+</div>
                <div className="text-xs text-slate-400">Projects</div>
              </div>
              <div className="rounded-xl bg-slate-900/50 border border-white/10 p-4">
                <div className="text-2xl font-bold text-white">12</div>
                <div className="text-xs text-slate-400">Awards</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-slate-300/90"
          >
            <h3 className="text-2xl font-bold text-white mb-3">Philosophy</h3>
            <p className="leading-relaxed">
              Uniqueness isn’t a gimmick — it’s a feeling. I craft interfaces that feel alive yet
              purposeful, balancing joy with clarity. Every interaction should make sense and spark
              curiosity.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex gap-3"><span className="h-1.5 w-1.5 mt-2 rounded-full bg-cyan-400" /> Motion as meaning — not distraction</li>
              <li className="flex gap-3"><span className="h-1.5 w-1.5 mt-2 rounded-full bg-indigo-400" /> Systems that scale, aesthetics that last</li>
              <li className="flex gap-3"><span className="h-1.5 w-1.5 mt-2 rounded-full bg-fuchsia-400" /> Accessibility and performance first</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
