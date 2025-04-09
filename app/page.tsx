import Header from "@/components/header"
import Hero from "@/components/hero"
import Intro from "@/components/intro"
import Rooms from "@/components/rooms"
import Gallery from "@/components/gallery"
import Location from "@/components/location"
import Footer from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Home() {
  return (
    <main className="min-h-screen bg-cream text-dark-gray">
      <Header />
      <Hero />
      <Intro />
      <Rooms />
      <Gallery />
      <Location />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
