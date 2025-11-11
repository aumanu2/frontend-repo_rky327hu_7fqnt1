import { Code2, Zap, Shield, Puzzle, Globe, GitFork, MessageSquare, BellRing, Boxes } from 'lucide-react'

export function Benefits() {
  const items = [
    { icon: Zap, title: 'High Performance', desc: 'Built on modern PHP 8.x for speed and reliability.' },
    { icon: Puzzle, title: 'Framework Native', desc: 'Seamless integration with Laravel and Symfony.' },
    { icon: Shield, title: 'Security First', desc: 'Token-based authentication and scalable security.' },
  ]
  return (
    <section className="bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-6xl px-4 py-16 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="p-6 rounded-lg border border-white/10 bg-white/5">
            <Icon className="h-6 w-6 text-orange-400" />
            <h3 className="mt-3 font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-zinc-300">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function Features() {
  const rows = [
    {
      title: 'Headless by Design',
      desc: 'A clean, decoupled architecture that outperforms monolithic CMS setups.',
      icon: Boxes,
    },
    {
      title: 'Multi-Client Ready',
      desc: 'Serve Websites, Mobile Apps, and IoT from one content backbone.',
      icon: Globe,
    },
    {
      title: 'Rich Content Modeling',
      desc: 'Define custom fields and complex relationships for any domain.',
      icon: Code2,
    },
    {
      title: 'Webhooks & Events',
      desc: 'Notify external services whenever content changes.',
      icon: BellRing,
    },
  ]
  return (
    <section className="bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-6">
        {rows.map(({ title, desc, icon: Icon }) => (
          <div key={title} className="p-6 rounded-lg border border-white/10 bg-white/5">
            <Icon className="h-6 w-6 text-orange-400" />
            <h3 className="mt-3 font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-zinc-300">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function Community() {
  const items = [
    { title: 'GitHub', href: 'https://github.com/', icon: GitFork },
    { title: 'Discord', href: '#', icon: MessageSquare },
  ]
  return (
    <section className="bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid sm:grid-cols-2 gap-6">
          {items.map(({ title, href, icon: Icon }) => (
            <a key={title} href={href} className="p-6 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <Icon className="h-6 w-6 text-orange-400" />
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-sm text-zinc-300">Join the conversation</p>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-6 p-6 rounded-lg border border-white/10 bg-white/5">
          <h3 className="font-semibold">Changelog</h3>
          <p className="text-sm text-zinc-300 mt-2">Latest updates and release notes.</p>
        </div>
      </div>
    </section>
  )
}
