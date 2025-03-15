import React from 'react'
import Services from './pages/Services'
import Navbar from './components/Navbar'

import Footer from './components/Footer'



import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Works from './pages/Works'
import Blog from './pages/Blog'
import Home from './pages/Home'
import Contact from './pages/Contact'

const App = () => {
 
  return (
    <>
     <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
     <Route path='/services' element={<Services/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/works' element={<Works/>}/>
     <Route path='/blog' element={<Blog/>}/>
     <Route path='/Contact' element={<Contact/>}/>
     
     
      
      </Routes>
      <Footer/>
      </>
  )
}

export default App
