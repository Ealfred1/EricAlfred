import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'

const App = () => {

  return (
    <>
      <div className="w-full h-screen">
        <Navbar />
        <div className="max-w-5xl mx-auto elative px-4">
          <Hero />
        </div>
      </div>
    </>
  )
}

export default App
