import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../../react-blog/src/Component/Navbar'
import Home from '../../react-blog/src/Component/Home'
import Hollywood from '../../react-blog/src/Component/Hollywood'
import Bollywood from '../../react-blog/src/Component/Bollywood'
import Technology from '../../react-blog/src/Component/Technology'
import Fitness from '../../react-blog/src/Component/Fitness'
import Food from '../../react-blog/src/Component/Food'
import './App.css'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hollywood" element={<Hollywood />} />
          <Route path="/bollywood" element={<Bollywood />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/fitness" element={<Fitness />} />
          <Route path="/food" element={<Food />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

