import { useMemo, useState } from 'react'

function useBackendBase() {
  return useMemo(() => {
    const envBase = import.meta.env.VITE_BACKEND_URL
    if (envBase) return envBase.replace(/\/$/, '')
    try {
      const { origin, hostname } = window.location
      // Modal preview pattern: ...-3000. -> ...-8000.
      if (hostname.includes('-3000.')) {
        return origin.replace('-3000.', '-8000.')
      }
    } catch (_) {}
    return 'http://localhost:8000'
  }, [])
}

export default function Contact() {
  const [status, setStatus] = useState('')
  const [sending, setSending] = useState(false)
  const base = useBackendBase()

  const submit = async (e) => {
    e.preventDefault()
    if (sending) return
    setSending(true)
    setStatus('Sending...')
    try {
      const res = await fetch(`${base}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        }),
      })
      if (res.ok) {
        const data = await res.json().catch(() => ({}))
        if (data?.status === 'ok') {
          setStatus('Sent! I will reach back soon.')
          e.target.reset()
        } else {
          setStatus('Something went wrong. Please try again.')
        }
      } else {
        setStatus('Unable to send right now. Please try later.')
      }
    } catch (err) {
      setStatus('Network error. Check connection and try again.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="relative py-28 scroll-mt-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
          <h3 className="text-3xl font-bold text-white mb-6">Let’s build something brilliant</h3>
          <form onSubmit={submit} className="grid gap-4">
            <input name="name" required placeholder="Your name" className="bg-slate-900/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
            <input name="email" type="email" required placeholder="Email" className="bg-slate-900/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
            <textarea name="message" required rows="5" placeholder="Tell me about your project" className="bg-slate-900/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <button
                type="submit"
                disabled={sending}
                className={`inline-flex items-center rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 text-white px-5 py-3 text-sm font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-indigo-500/20 transition-all ${sending ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {sending ? 'Sending…' : 'Send Message'}
              </button>
              <span className="text-slate-300/80 text-sm">{status}</span>
            </div>
            <p className="text-xs text-slate-400/80">
              Tip: If this preview is open, the backend URL is detected automatically. Otherwise, set VITE_BACKEND_URL.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
