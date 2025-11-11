import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-zinc-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-28 pb-16 flex flex-col items-start">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white"
        >
          CoreDeck: The Decoupled PHP Content Backbone.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 text-lg sm:text-xl text-zinc-300 max-w-2xl"
        >
          Flexible API-Driven Content Management, Powered by Laravel/Symfony.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-3"
        >
          <a
            href="/docs"
            className="px-5 py-3 rounded-md font-semibold bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/30 transition-colors"
          >
            Get Started in Minutes
          </a>
          <a
            href="#api-example"
            className="px-5 py-3 rounded-md font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            See API Example
          </a>
        </motion.div>

        <motion.div
          id="api-example"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12 w-full max-w-3xl backdrop-blur bg-white/5 border border-white/10 rounded-lg overflow-hidden"
        >
          <div className="px-4 py-2 text-xs uppercase tracking-wider text-zinc-400 border-b border-white/10">
            REST example
          </div>
          <pre className="p-4 text-sm text-zinc-100 font-mono overflow-x-auto">
{`curl -H "Authorization: Bearer <token>" \\
  -H "Content-Type: application/json" \\
  ${'${'}import.meta.env.VITE_BACKEND_URL{'}'}/api/v1/content?type=post`}
          </pre>
        </motion.div>
      </div>
    </section>
  )
}
