import { useState } from 'react'

const sections = [
  {
    title: 'Getting Started',
    content: `Install via Composer and set up your database.\n\ncomposer require coredeck/coredeck\nphp artisan coredeck:install\nphp artisan migrate`,
  },
  {
    title: 'API Reference',
    content: `Explore all REST and GraphQL endpoints.\n\nGET /api/v1/content\nPOST /api/v1/content\nGET /api/v1/types`,
  },
  {
    title: 'Authentication',
    content: `Use JWT or OAuth.\n\n# JWT Example\nAuthorization: Bearer <token>`,
  },
  {
    title: 'Customization',
    content: `Create custom content types and extensions.\n\nphp artisan coredeck:make:type Post --fields=title:string,body:text`,
  },
  {
    title: 'Deployment',
    content: `Docker & Hosting guides.\n\n# Docker Compose\nservices:\n  coredeck:\n    image: coredeck:latest\n    ports:\n      - \"8080:80\"`,
  },
]

export default function Docs() {
  const [query, setQuery] = useState('')

  const filtered = sections.filter(s =>
    s.title.toLowerCase().includes(query.toLowerCase()) ||
    s.content.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 pt-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-3xl font-bold">Documentation</h1>
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search docs..."
            className="w-full max-w-xs bg-white/5 border border-white/10 rounded px-3 py-2 text-sm placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {filtered.map((s) => (
            <div key={s.title} className="p-6 rounded-lg border border-white/10 bg-white/5">
              <h3 className="font-semibold">{s.title}</h3>
              <pre className="mt-2 text-sm text-zinc-300 whitespace-pre-wrap font-mono">{s.content}</pre>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
