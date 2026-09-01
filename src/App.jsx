import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import Hero from './components/Hero'
import IndustriesSection from './components/IndustriesSection'
import Navbar from './components/Navbar'
import ProjectModal from './components/ProjectModal'
import ProjectsGrid from './components/ProjectsGrid'
import ServicesSection from './components/ServicesSection'
import TechStackSection from './components/TechStackSection'
import useDocumentMeta from './hooks/useDocumentMeta'

export default function App() {
  useDocumentMeta()

  return (
    <div className="min-h-svh bg-background antialiased">
      <Navbar />
      <main>
        <Hero />
        <ServicesSection />
        <IndustriesSection />
        <ProjectsGrid />
        <TechStackSection />
        <ContactSection />
      </main>
      <Footer />
      <ProjectModal />
    </div>
  )
}
