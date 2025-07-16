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
import { LanguageProvider } from './components/LanguageContext'
import { useLanguage } from './components/LanguageContext';

function App() {
 
  return (
    <LanguageProvider>
      <Navbar/>
      <Hero/>
      <SocialMediaComp>
        <SocialMedia/>  
      </SocialMediaComp>
      <SocialMediaPosts/>
      <About/>
      <Footer/>
    </LanguageProvider>
  )
}

export default App
