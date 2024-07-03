import { useState } from 'react'
import About from './components/About'
import Home from './components/Home'
import Search from './components/Search'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import { FlagsContextProvider } from './components/FlagsContext'

import './App.css'

function App() {

  return (
    <div>
      <FlagsContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/search' element={<Search />} />
        </Routes>
      </FlagsContextProvider>
    </div>
  )
}

export default App
