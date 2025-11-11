import { Link, NavLink } from 'react-router-dom'
import { Menu, Github } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive ? 'text-white bg-white/10' : 'text-zinc-300 hover:text-white hover:bg-white/10'
    }`

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/70 bg-zinc-900/80 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-white">
            <div className="h-7 w-7 rounded bg-gradient-to-br from-orange-500 to-red-600" />
            <span className="font-semibold">CoreDeck</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/docs" className={navLinkClass}>Docs</NavLink>
            <NavLink to="/features" className={navLinkClass}>Features</NavLink>
            <NavLink to="/community" className={navLinkClass}>Community</NavLink>
            <a href="/test" className="px-3 py-2 rounded-md text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/10">Health</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 text-zinc-300 hover:text-white px-3 py-2 rounded-md hover:bg-white/10 transition-colors"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
            <button
              className="md:hidden inline-flex items-center justify-center h-10 w-10 text-zinc-200 hover:text-white hover:bg-white/10 rounded"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-1">
              <NavLink to="/docs" className={navLinkClass} onClick={() => setOpen(false)}>Docs</NavLink>
              <NavLink to="/features" className={navLinkClass} onClick={() => setOpen(false)}>Features</NavLink>
              <NavLink to="/community" className={navLinkClass} onClick={() => setOpen(false)}>Community</NavLink>
              <a href="/test" className="px-3 py-2 rounded-md text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/10">Health</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
