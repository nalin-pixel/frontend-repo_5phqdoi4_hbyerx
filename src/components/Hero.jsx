import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  const onAnchorClick = (e, hash) => {
    e.preventDefault()
    const el = document.querySelector(hash)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="home" className="relative w-full overflow-hidden scroll-mt-20">
      {/* Mobile: dedicated interactive Spline area */}
      <div className="relative h-[70vh] w-full md:hidden" style={{ touchAction: 'manipulation' }}>
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%', pointerEvents: 'auto' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950/90" />
        <div className="pointer-events-none absolute bottom-3 left-0 right-0 flex justify-center">
          <span className="inline-flex items-center rounded-full bg-slate-900/60 backdrop-blur px-3 py-1 text-[11px] text-slate-200 ring-1 ring-white/15">
            Drag to explore
          </span>
        </div>
      </div>

      {/* Desktop: Spline as immersive background */}
      <div className="absolute inset-0 hidden md:block" style={{ touchAction: 'manipulation' }}>
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%', pointerEvents: 'auto' }}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 hidden md:block bg-gradient-to-b from-slate-950/70 via-slate-950/30 to-slate-950/90" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div className="py-10 md:py-28">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1]"
          >
            The most unique portfolio you’ll visit this year
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-6 text-lg md:text-xl text-slate-200/90 max-w-xl"
          >
            Interactive, playful, and unmistakably modern. Blending a 3D world with crisp UI to tell your story.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#work" onClick={(e) => onAnchorClick(e, '#work')} className="inline-flex items-center rounded-full bg-white/90 hover:bg-white text-slate-900 px-5 py-2.5 text-sm font-semibold transition-colors">
              View Work
            </a>
            <a href="#contact" onClick={(e) => onAnchorClick(e, '#contact')} className="inline-flex items-center rounded-full bg-slate-900/50 ring-1 ring-white/20 hover:bg-slate-900/70 text-white px-5 py-2.5 text-sm font-semibold">
              Contact
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="mt-10 flex items-center gap-6"
          >
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full" />
            <p className="text-slate-300/80 text-sm">Scroll to explore</p>
          </motion.div>
        </div>

        {/* Spacer to balance layout on desktop */}
        <div className="hidden md:block" />
      </div>
    </section>
  )
}
