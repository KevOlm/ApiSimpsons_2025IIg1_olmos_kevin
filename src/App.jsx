import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Characters from './pages/Characters/Characters'
import Episodes from './pages/Episodes/Episodes'
import Locations from './pages/Locations/Locations'
import Characters_dsc from './pages/Characters_dsc/Characters_dsc'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/characters' element={<Characters />} />
        <Route path='/episodes' element={<Episodes />} />
        <Route path='/locations' element={<Locations />} />
        <Route path='*' element={<h1>404 Not Found</h1>} />
        <Route path='/characters_dsc' element={<Characters_dsc />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
