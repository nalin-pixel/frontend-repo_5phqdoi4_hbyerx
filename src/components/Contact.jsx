import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        }),
      })
      if (res.ok) setStatus('Sent! I will reach back soon.')
      else setStatus('Something went wrong.')
    } catch (err) {
      setStatus('Unable to send right now.')
    }
  }

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
          <h3 className="text-3xl font-bold text-white mb-6">Let’s build something brilliant</h3>
          <form onSubmit={submit} className="grid gap-4">
            <input name="name" required placeholder="Your name" className="bg-slate-900/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
            <input name="email" type="email" required placeholder="Email" className="bg-slate-900/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
            <textarea name="message" required rows="5" placeholder="Tell me about your project" className="bg-slate-900/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
            <div className="flex items-center gap-4">
              <button className="inline-flex items-center rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 text-white px-5 py-3 text-sm font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-indigo-500/20 transition-all">
                Send Message
              </button>
              <span className="text-slate-300/80 text-sm">{status}</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
