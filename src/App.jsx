import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import { Benefits, Features, Community } from './components/Sections'

function App() {
  return (
    <div className="bg-zinc-950 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Features />
        <Community />
      </main>
      <Footer />
    </div>
  )
}

export default App
