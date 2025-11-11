import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Docs from '../components/Docs'

export default function DocsPage() {
  return (
    <div className="bg-zinc-950 min-h-screen">
      <Navbar />
      <Docs />
      <Footer />
    </div>
  )
}
