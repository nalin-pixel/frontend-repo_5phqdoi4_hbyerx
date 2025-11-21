import { useState, useEffect, useCallback } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const smoothScroll = useCallback((hash) => {
    if (!hash || hash[0] !== '#') return
    const el = document.querySelector(hash)
    if (el) {
      // Account for fixed navbar height (~64px) by using scrollMarginTop via CSS, but ensure smooth behavior here
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-xl bg-slate-900/60 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="text-white font-semibold tracking-tight text-lg"
          onClick={(e) => {
            e.preventDefault()
            smoothScroll('#home')
          }}
        >
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">YourName</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-slate-200/80 hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault()
                smoothScroll(item.href)
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 text-white px-4 py-2 text-sm font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-indigo-500/20 transition-all"
            onClick={(e) => {
              e.preventDefault()
              smoothScroll('#contact')
            }}
          >
            Let’s Talk
          </a>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2 rounded hover:bg-white/10 transition" aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/80 backdrop-blur-xl">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  setOpen(false)
                  // Delay a tick so menu can close smoothly
                  requestAnimationFrame(() => smoothScroll(item.href))
                }}
                className="block px-3 py-2 rounded-lg text-slate-200/90 hover:text-white hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                setOpen(false)
                requestAnimationFrame(() => smoothScroll('#contact'))
              }}
              className="block px-3 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-500 text-white text-center font-semibold"
            >
              Let’s Talk
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
