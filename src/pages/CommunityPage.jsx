import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Community } from '../components/Sections'

export default function CommunityPage() {
  return (
    <div className="bg-zinc-950 min-h-screen">
      <Navbar />
      <Community />
      <Footer />
    </div>
  )
}
