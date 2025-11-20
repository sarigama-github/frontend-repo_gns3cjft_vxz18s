import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-slate-900/60 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-black shadow-lg">R</div>
          <span className="text-white font-semibold tracking-tight">Reverb Music Academy</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#instruments" className="text-slate-300 hover:text-white">Instruments</a>
          <a href="#booking" className="text-slate-300 hover:text-white">Book a Lesson</a>
          <a href="#contact" className="text-slate-300 hover:text-white">Contact</a>
        </nav>
        <button className="md:hidden p-2 text-slate-200" aria-label="Menu">
          <Menu size={22} />
        </button>
      </div>
    </header>
  )
}
