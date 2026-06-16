import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectsGallery from './pages/ProjectsGallery'

function LandingPage() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Reviews />
      <Contact />
    </main>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects" element={<ProjectsGallery />} />
      </Routes>
      <Footer />
    </>
  )
}
