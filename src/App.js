import React from 'react'
import { Navbar } from './Component/Navbar'
import Home from './Component/Home'
import Experience from './Component/Experience'
import About from './Component/About'
import Skills from './Component/Skills'
import Tools from './Component/Tools'
import Projects from './Component/Projects'
import Contact from './Component/Contact'
import Footer from './Component/Footer'
 
 
const App = () => {
  return (
    <>
     <div>{<Navbar/>}</div>
     <div className="container">
       <div>{<Home />}</div>
       <div>{<About />}</div>
       <div>{<Experience />}</div>
       <div>{<Skills />}</div>
       <div>{<Tools />}</div>
       <div>{<Projects />}</div>
       <div>{<Contact />}</div>
       <div>{<Footer />}</div>
     </div>
     
    </>
  )
}

export default App
