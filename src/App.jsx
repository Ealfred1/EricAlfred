import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Cursor from './components/Cursor/Cursor'

const App = () => {

  return (
    <>
      <div className="w-full h-screen">
          <Cursor />
        <Navbar />
        <div className="max-w-5xl mx-auto relative px-4">
          <Hero />
          <Services />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
