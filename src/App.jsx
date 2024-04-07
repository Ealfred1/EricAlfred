import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'

const App = () => {

  return (
    <>
      <div className="w-full h-screen">
        <Navbar />
        <div className="max-w-5xl mx-auto relative px-4 overflow-x-hidden">
          <Hero />
          <Services />
        </div>
      </div>
    </>
  )
}

export default App
