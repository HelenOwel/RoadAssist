
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './components/pages/HomePage'
import Products from './components/Products'
import Services from './components/Services'
import Benefits from './components/Benefits'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path='/products' element={<Products/>}/>
        <Route path='/services' element={<Services/>} />
        <Route path='/benefits' element={<Benefits/>}/>
      </Routes>

    </div>
  )
}

export default App