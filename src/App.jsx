import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SocialMedia from './components/SocialMedia'
import About from './components/About'
import Footer from './components/Footer'
import SocialMediaPosts from './components/SocialMediaPosts'
import SocialMediaComp from './components/SocialMediaComp'
import SocialMediaMusic from './components/SocialMediaMusic'
import { LanguageProvider } from './components/LanguageContext'
import { useLanguage } from './components/LanguageContext';


function Home() {
  return (
    <Hero>
      <SocialMediaComp>
        <SocialMedia />
      </SocialMediaComp>
      <SocialMediaMusic />
    </Hero>
  )
}


function App() {

  return (
    <LanguageProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </LanguageProvider>
  )
}

export default App
