import Hero from './components/Hero.jsx'
import AboutCard from './components/AboutCard.jsx'
import ContentsCard from './components/ContentsCard.jsx'
import InnovationCard from './components/InnovationCard.jsx'
import ProductMatrixCard from './components/ProductMatrixCard.jsx'
import ManagementCard from './components/ManagementCard.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="bg-grid min-h-screen bg-shell-100">
      <Hero />

      {/* Hàng 2: Innovation (timeline) + Contents 01 */}
      <section id="contents" className="px-3 pb-6 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[1440px] gap-6 lg:grid-cols-[1.15fr_1fr]">
          <AboutCard />
          <ContentsCard />
        </div>
      </section>

      {/* Hàng 3: 3 thẻ */}
      <section className="px-3 pb-6 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[1440px] gap-6 md:grid-cols-2 lg:grid-cols-3">
          <InnovationCard />
          <ProductMatrixCard />
          <ManagementCard />
        </div>
      </section>

      <Footer />
    </div>
  )
}
