import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import ContactBanner from './components/ContactBanner'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Testimonials />
      <FAQ />
      <ContactBanner />
      <Footer />
    </>
  )
}

export default App
