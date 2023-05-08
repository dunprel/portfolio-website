import { useEffect } from 'react'
import Aos from 'aos'

import './App.css'

import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Hero from './Components/UI/Hero'
import Services from './Components/UI/Services'
import Projects from './Components/UI/Portfolio'
import Contact2 from './Components/UI/Contact2'

function App() {
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <>
      <Header />

      <Hero />
      <Services />
      <Projects />
      <Contact2 />
      <Footer />
    </>
  )
}

export default App
