export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} CoreDeck. All rights reserved.</p>
        <div className="flex items-center gap-6 text-sm">
          <a href="/docs" className="hover:text-white">Docs</a>
          <a href="/features" className="hover:text-white">Features</a>
          <a href="/community" className="hover:text-white">Community</a>
        </div>
      </div>
    </footer>
  )
}
