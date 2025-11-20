import { Guitar, Mic2, Piano, Drums } from 'lucide-react'

const items = [
  {
    icon: Guitar,
    title: 'Guitar',
    desc: 'Acoustic, electric, fingerstyle, and more. Learn chords, scales, improvisation, and your favorite songs.'
  },
  {
    icon: Mic2,
    title: 'Kanto',
    desc: 'Expressive vocal training focused on breathing, pitch, resonance, and performance confidence.'
  },
  {
    icon: Piano,
    title: 'Piano',
    desc: 'Classical to contemporary. Technique, reading, harmony, and creative composition.'
  },
  {
    icon: Drums,
    title: 'Drums',
    desc: 'Groove, rudiments, coordination, and song-driven playing across genres.'
  },
]

export default function Instruments() {
  return (
    <section id="instruments" className="py-16 md:py-24 bg-slate-900/40 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center">What do you want to learn?</h2>
        <p className="text-slate-300 text-center mt-3 mb-10">Choose your instrument and start your journey.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-5 rounded-xl bg-slate-800/60 border border-white/10 hover:bg-slate-800/80 transition">
              <Icon className="text-indigo-300" />
              <h3 className="mt-3 text-white font-semibold text-lg">{title}</h3>
              <p className="text-slate-300 text-sm mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
