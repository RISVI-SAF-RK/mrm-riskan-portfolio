import Navbar from "../components/Navbar"
import ScrollProgress from "../components/ScrollProgress"
import BackToTop from "../components/BackToTop"

import Hero from "../components/Hero"
import About from "../components/About"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Education from "../components/Education"
import Certifications from "../components/Certifications"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

function HomePage() {
  return (
    <>
      <ScrollProgress />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>

      <Footer />

      <BackToTop />
    </>
  )
}

export default HomePage