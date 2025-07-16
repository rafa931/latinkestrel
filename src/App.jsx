import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SocialMedia from './components/SocialMedia'
import About from './components/About'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <div className="mt-10">
        <h2 className="text-2xl sm:text- font-bold text-center">Follow us on social media</h2>
      </div>
      <SocialMedia/>
      <About/>
      <Footer/>
    </>
  )
}

export default App
