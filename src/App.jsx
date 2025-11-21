import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 relative">
      <Navbar />

      <main>
        <Hero />
        <Showcase />
        <About />
        <Contact />
      </main>

      <footer className="relative py-10 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span>Built with love, motion, and 3D</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
