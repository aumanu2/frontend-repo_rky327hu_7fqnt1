import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Features } from '../components/Sections'

export default function FeaturesPage() {
  return (
    <div className="bg-zinc-950 min-h-screen">
      <Navbar />
      <Features />
      <Footer />
    </div>
  )
}
