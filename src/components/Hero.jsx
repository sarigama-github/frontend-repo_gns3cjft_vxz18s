export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_-10%,rgba(99,102,241,0.25),transparent_60%)] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white">
              Find your sound at Reverb
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-pink-400">Music Academy</span>
            </h1>
            <p className="mt-6 text-lg text-slate-300 max-w-prose">
              Private lessons with experienced instructors in Guitar, Kanto, Piano, and Drums. Flexible scheduling for all ages and skill levels.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#booking" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white font-semibold shadow-lg shadow-indigo-500/20">
                Book your first lesson
              </a>
              <a href="#instruments" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold">
                Explore instruments
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 shadow-2xl p-4">
              <div className="w-full h-full rounded-xl bg-[url('https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
