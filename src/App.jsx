import React, { Suspense, lazy } from 'react'
import Hero from './sections/Hero.jsx'
import ShowcaseSection from './sections/ShowcaseSection.jsx'
import Navbar from './components/Navbar.jsx'
import LogoSection from './sections/LogoSection.jsx'
import FeatureCards from './sections/FeatureCards.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'
import ThemeToggle from './components/ThemeToggle.jsx'

const ExperienceSection = lazy(() => import('./sections/ExperienceSection.jsx'))
const TechStack = lazy(() => import('./sections/TechStack.jsx'))

const App = () => {
    return(
      <>
      <Navbar />
        <Hero />
        <ShowcaseSection />
        <LogoSection />
        <FeatureCards />
        <Suspense fallback={<div style={{ minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>Carregando...</div>}>
          <ExperienceSection />
          <TechStack />
        </Suspense>
        <Contact />
        <Footer />
        <ThemeToggle />
      </>
    )
}


export default App