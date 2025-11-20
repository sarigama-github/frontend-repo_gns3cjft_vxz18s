import { useState } from 'react'

const instruments = ['Guitar', 'Kanto', 'Piano', 'Drums']

export default function BookingForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    instrument: instruments[0],
    preferred_date: '',
    preferred_time: '',
    message: ''
  })
  const [submitting, setSubmitting] = useState(false)
  const [result, setResult] = useState(null)

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setResult(null)
    try {
      const res = await fetch(`${baseUrl}/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (!res.ok || !data.success) throw new Error(data.detail || 'Failed to submit')
      setResult({ type: 'success', message: 'Thanks! We will contact you to confirm your lesson.' })
      setForm({ name: '', email: '', phone: '', instrument: instruments[0], preferred_date: '', preferred_time: '', message: '' })
    } catch (err) {
      setResult({ type: 'error', message: err.message })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="booking" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Book a lesson</h2>
          <p className="text-slate-300 mt-3">Tell us a bit about you and your goals. We'll match you with the right teacher and time.</p>
          <div className="mt-6 p-5 rounded-xl bg-slate-800/60 border border-white/10 text-slate-300 text-sm">
            <p>• 30, 45, or 60 minute sessions</p>
            <p>• Flexible scheduling, in-person or online</p>
            <p>• All ages and skill levels welcome</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="p-6 rounded-xl bg-slate-800/60 border border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-300 mb-1">Full name</label>
              <input name="name" value={form.name} onChange={handleChange} required className="w-full rounded-lg bg-slate-900 border border-white/10 px-3 py-2 text-white" />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full rounded-lg bg-slate-900 border border-white/10 px-3 py-2 text-white" />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">Phone</label>
              <input name="phone" value={form.phone} onChange={handleChange} className="w-full rounded-lg bg-slate-900 border border-white/10 px-3 py-2 text-white" />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">Instrument</label>
              <select name="instrument" value={form.instrument} onChange={handleChange} className="w-full rounded-lg bg-slate-900 border border-white/10 px-3 py-2 text-white">
                {instruments.map((i) => (
                  <option key={i} value={i}>{i}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">Preferred date</label>
              <input type="date" name="preferred_date" value={form.preferred_date} onChange={handleChange} required className="w-full rounded-lg bg-slate-900 border border-white/10 px-3 py-2 text-white" />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">Preferred time</label>
              <input type="time" name="preferred_time" value={form.preferred_time} onChange={handleChange} required className="w-full rounded-lg bg-slate-900 border border-white/10 px-3 py-2 text-white" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm text-slate-300 mb-1">Notes</label>
              <textarea name="message" value={form.message} onChange={handleChange} rows={4} className="w-full rounded-lg bg-slate-900 border border-white/10 px-3 py-2 text-white" />
            </div>
          </div>
          <button disabled={submitting} className="mt-5 w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2.5 rounded-lg disabled:opacity-60">
            {submitting ? 'Booking...' : 'Submit booking'}
          </button>
          {result && (
            <p className={`mt-3 text-sm ${result.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>{result.message}</p>
          )}
        </form>
      </div>
    </section>
  )
}
