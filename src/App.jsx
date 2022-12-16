import React from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Experience from './components/experience/Experience'
import Projects from './components/projects/projects'
import Gallery from './components/gallery/Gallery'
import Achievements from './components/achievements/Achievements'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Projects />
      <Gallery />
      <Achievements />
      <Contact />
      <Footer />
      
    </>
  )
}

export default App