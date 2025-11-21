import { motion } from 'framer-motion'
import { Code, Sparkles, Rocket } from 'lucide-react'

const projects = [
  {
    title: 'Neon Code Lab',
    description: 'A creative coding playground with real-time shaders and generative art.',
    tags: ['WebGL', 'Shaders', 'Art'],
  },
  {
    title: 'Reactive Systems',
    description: 'High-performance UI engine with micro-interactions at scale.',
    tags: ['React', 'Framer Motion', 'DX'],
  },
  {
    title: 'Orbit CMS',
    description: 'Headless content system with edge rendering and AI-assisted authoring.',
    tags: ['Edge', 'AI', 'CMS'],
  },
]

export default function Showcase() {
  return (
    <section id="work" className="relative py-28">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.15),transparent_25%),radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.12),transparent_25%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-10">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-500 flex items-center justify-center text-white">
            <Sparkles size={18} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Signature Work</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-6 overflow-hidden hover:border-cyan-400/30"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-cyan-400/10 to-indigo-400/10" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="h-10 w-10 rounded-xl bg-slate-900/60 border border-white/10 flex items-center justify-center text-cyan-300">
                    {i === 0 ? <Code size={20} /> : i === 1 ? <Rocket size={20} /> : <Sparkles size={20} />}
                  </div>
                  <div className="text-xs text-slate-400">Featured</div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{p.title}</h3>
                <p className="text-slate-300/90 text-sm leading-relaxed">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs bg-white/10 text-slate-200 rounded-full px-2.5 py-1 border border-white/10">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
