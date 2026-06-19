import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Biography from './components/Biography'
import Spectacles from './components/Spectacles'
import TourDates from './components/TourDates'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="w-full overflow-x-hidden bg-black">
      <Navigation />
      <Hero />
      <Biography />
      <Spectacles />
      <TourDates />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
