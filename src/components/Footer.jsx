export default function Footer() {
  return (
    <footer id="contact" className="py-12 border-t border-white/10 bg-slate-900/60">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Reverb Music Academy. All rights reserved.</p>
        <div className="text-slate-400 text-sm">
          <a href="mailto:hello@reverbacademy.com" className="hover:text-white">hello@reverbacademy.com</a>
          <span className="mx-2">•</span>
          <span>+1 (555) 123-4567</span>
        </div>
      </div>
    </footer>
  )
}
