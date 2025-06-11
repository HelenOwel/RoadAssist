
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './components/pages/HomePage'
import Products from './components/Products'
import Services from './components/Services'
import Benefits from './components/Benefits'
import About from './components/About'
import FreeTips from './components/FreeTips'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path='/products' element={<Products/>}/>
        <Route path='/services' element={<Services/>} />
        <Route path='/benefits' element={<Benefits/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/freetips' element={<FreeTips/>}/>
      </Routes>

    </div>
  )
}

export default App